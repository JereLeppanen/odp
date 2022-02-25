/* Copyright (c) 2013-2018, Linaro Limited
 * Copyright (c) 2019-2022, Nokia
 * All rights reserved.
 *
 * SPDX-License-Identifier:     BSD-3-Clause
 */

#ifndef ODP_PARSE_INTERNAL_H_
#define ODP_PARSE_INTERNAL_H_

#ifdef __cplusplus
extern "C" {
#endif

#include <odp_packet_internal.h>
#include <odp_macros_internal.h>
#include <protocols/eth.h>
#include <protocols/ip.h>
#include <protocols/sctp.h>
#include <protocols/tcp.h>
#include <protocols/udp.h>
#include <odp/api/plat/packet_inline_types.h>
#include <odp/api/hints.h>
#include <odp/api/packet_io.h>
#include <odp/api/packet_types.h>
#include <stdint.h>

/** Minimum segment length expected by _odp_packet_parse_common() */
#define PACKET_PARSE_SEG_LEN 96
/*
 * In the worst case we look at the Ethernet header, 8 bytes of LLC/SNAP
 * header and two VLAN tags in the same packet.
 */
#define PARSE_ETH_BYTES (sizeof(_odp_ethhdr_t) + 8 + 2 * sizeof(_odp_vlanhdr_t))
#define PARSE_IPV4_BYTES (0xfU * 4) /* max IPv4 header length with options */
/*
 * Peeks 2 bytes beyond IPv6 base header without length check if there
 * are extension headers.
 */
#define PARSE_IPV6_BYTES (sizeof(_odp_ipv6hdr_t) + 2)
#define PARSE_TCP_BYTES (sizeof(_odp_tcphdr_t))
/*
 * In the worst case we look at the UDP header and 4 bytes of the UDP
 * payload (the non-ESP marker to distinguish IKE packets from ESP packets).
 */
#define PARSE_UDP_BYTES (sizeof(_odp_udphdr_t) + 4)
#define PARSE_SCTP_BYTES (sizeof(_odp_sctphdr_t))

#define PARSE_L3_L4_BYTES (MAX(PARSE_IPV4_BYTES, PARSE_IPV6_BYTES) + \
			   MAX3(PARSE_TCP_BYTES, PARSE_UDP_BYTES, PARSE_SCTP_BYTES))

uint16_t _odp_parse_eth(packet_parser_t *prs, const uint8_t **parseptr,
			uint32_t *offset, uint32_t frame_len);

int _odp_packet_parse_common_l3_l4(packet_parser_t *prs,
				   const uint8_t *parseptr, uint32_t offset,
				   uint32_t frame_len, uint32_t seg_len,
				   int layer, uint16_t ethtype,
				   odp_proto_chksums_t chksums,
				   uint64_t *l4_part_sum);

/**
 * Parse common packet headers up to given layer
 *
 * The function expects at least PACKET_PARSE_SEG_LEN bytes of data to be
 * available from the ptr. Also parse metadata must be already initialized.
 */
static inline int _odp_packet_parse_common(packet_parser_t *prs,
					   const uint8_t *ptr,
					   uint32_t frame_len, uint32_t seg_len,
					   int layer,
					   odp_proto_chksums_t chksums)
{
	uint32_t offset;
	uint16_t ethtype;
	const uint8_t *parseptr;
	uint64_t l4_part_sum;

	parseptr = ptr;
	offset = 0;

	if (odp_unlikely(layer == ODP_PROTO_LAYER_NONE))
		return 0;

	/* Assume valid L2 header, no CRC/FCS check in SW */
	prs->l2_offset = offset;

	ethtype = _odp_parse_eth(prs, &parseptr, &offset, frame_len);

	return _odp_packet_parse_common_l3_l4(prs, parseptr, offset, frame_len,
					      seg_len, layer, ethtype, chksums,
					      &l4_part_sum);
}

/* Perform packet parse up to a given protocol layer */
int _odp_packet_parse_layer(odp_packet_hdr_t *pkt_hdr,
			    odp_proto_layer_t layer,
			    odp_proto_chksums_t chksums);

#ifdef __cplusplus
}
#endif

#endif
