var spec_2crypto__types_8h =
[
    [ "odp_crypto_cipher_algos_t", "group__odp__crypto.html#gac1ba1e1c84912312fd14b1ab3af2463c", null ],
    [ "odp_crypto_auth_algos_t", "group__odp__crypto.html#gab1e97e496e02d926dab494610dc32d62", null ],
    [ "odp_crypto_key_t", "group__odp__crypto.html#ga50d0c6f5a470f59d73e94737c3ef05ac", null ],
    [ "odp_crypto_op_type_t", "group__odp__crypto.html#ga1893f015b1c7c1b5a9393f820469b078", null ],
    [ "odp_crypto_session_param_t", "group__odp__crypto.html#gab22bd8c226c4434eab93e985ed11fd47", null ],
    [ "odp_crypto_packet_op_param_t", "group__odp__crypto.html#ga673b8efd3041dd6bfeebaa58e85221e1", null ],
    [ "odp_crypto_op_status_t", "group__odp__crypto.html#gaac1b24085888baf5604c5e6db9c6b941", null ],
    [ "odp_crypto_packet_result_t", "group__odp__crypto.html#ga061f6f693f779bcdbbb8bc733f690826", null ],
    [ "odp_crypto_capability_t", "group__odp__crypto.html#gae4e8293acef93f39dff137d5ef4666bf", null ],
    [ "odp_crypto_cipher_capability_t", "group__odp__crypto.html#ga2290a8a0b7b24ad76a536c0a7a28d969", null ],
    [ "odp_crypto_auth_capability_t", "group__odp__crypto.html#ga96a313310473f6a714d8fa6a644c040b", null ],
    [ "odp_crypto_op_mode_t", "group__odp__crypto.html#gafb6e1128248738dc421f1075ce125fa1", [
      [ "ODP_CRYPTO_SYNC", "group__odp__crypto.html#ggafb6e1128248738dc421f1075ce125fa1a2c412faae4b2881a12da9aa1bb372c4c", null ],
      [ "ODP_CRYPTO_ASYNC", "group__odp__crypto.html#ggafb6e1128248738dc421f1075ce125fa1a405f9abcea90ba8f1e6d8cd6af074779", null ]
    ] ],
    [ "odp_crypto_op_t", "group__odp__crypto.html#gac392d6cd9c362ae4ac8860fbf5262d19", [
      [ "ODP_CRYPTO_OP_ENCODE", "group__odp__crypto.html#ggac392d6cd9c362ae4ac8860fbf5262d19ad8f989a7157b7ecf1f5d9bc55677fc0a", null ],
      [ "ODP_CRYPTO_OP_DECODE", "group__odp__crypto.html#ggac392d6cd9c362ae4ac8860fbf5262d19ae69206fff192ab0232d7151662e8de27", null ]
    ] ],
    [ "odp_cipher_alg_t", "group__odp__crypto.html#ga3c943d596daa203f2c71263ad4386ff0", [
      [ "ODP_CIPHER_ALG_NULL", "group__odp__crypto.html#gga3c943d596daa203f2c71263ad4386ff0ac8c68b6ba7437f58342798b8b9321d49", null ],
      [ "ODP_CIPHER_ALG_DES", "group__odp__crypto.html#gga3c943d596daa203f2c71263ad4386ff0aa8290d9fd54bd7a03018972146b11b20", null ],
      [ "ODP_CIPHER_ALG_3DES_CBC", "group__odp__crypto.html#gga3c943d596daa203f2c71263ad4386ff0a9ab3dbd31584c39a561b91d6ada2fe36", null ],
      [ "ODP_CIPHER_ALG_3DES_ECB", "group__odp__crypto.html#gga3c943d596daa203f2c71263ad4386ff0ae5930ea5af5b5999e2c36f403985b248", null ],
      [ "ODP_CIPHER_ALG_AES_CBC", "group__odp__crypto.html#gga3c943d596daa203f2c71263ad4386ff0a801dc573225189febece00273710ba79", null ],
      [ "ODP_CIPHER_ALG_AES_CTR", "group__odp__crypto.html#gga3c943d596daa203f2c71263ad4386ff0a73b1017657dd9f6ba9884e6e61bc457a", null ],
      [ "ODP_CIPHER_ALG_AES_ECB", "group__odp__crypto.html#gga3c943d596daa203f2c71263ad4386ff0a6614d21577549126b5dd2bd344adf5f4", null ],
      [ "ODP_CIPHER_ALG_AES_CFB128", "group__odp__crypto.html#gga3c943d596daa203f2c71263ad4386ff0a4637767417c24c6934973275855da9b7", null ],
      [ "ODP_CIPHER_ALG_AES_XTS", "group__odp__crypto.html#gga3c943d596daa203f2c71263ad4386ff0aa7647776124e6931850e8761a66be6c9", null ],
      [ "ODP_CIPHER_ALG_AES_GCM", "group__odp__crypto.html#gga3c943d596daa203f2c71263ad4386ff0a8aa3ec25d1e5b30bc778577e400573e4", null ],
      [ "ODP_CIPHER_ALG_AES_CCM", "group__odp__crypto.html#gga3c943d596daa203f2c71263ad4386ff0a5f97b9e25676e663bd26af74aca86627", null ],
      [ "ODP_CIPHER_ALG_CHACHA20_POLY1305", "group__odp__crypto.html#gga3c943d596daa203f2c71263ad4386ff0a7be2e3156dac631c42e3721092055929", null ],
      [ "ODP_CIPHER_ALG_KASUMI_F8", "group__odp__crypto.html#gga3c943d596daa203f2c71263ad4386ff0a0642becee1c162fa235003303509354b", null ],
      [ "ODP_CIPHER_ALG_SNOW3G_UEA2", "group__odp__crypto.html#gga3c943d596daa203f2c71263ad4386ff0a54407c8cbc12c99526da7b7172d8c924", null ],
      [ "ODP_CIPHER_ALG_AES_EEA2", "group__odp__crypto.html#gga3c943d596daa203f2c71263ad4386ff0aa06265d826400899e8e9a786ca4439be", null ],
      [ "ODP_CIPHER_ALG_ZUC_EEA3", "group__odp__crypto.html#gga3c943d596daa203f2c71263ad4386ff0acb595abd17534ad5d856e2e1fccfe9d6", null ]
    ] ],
    [ "odp_auth_alg_t", "group__odp__crypto.html#ga97ed3811136cd7888625a4973c416982", [
      [ "ODP_AUTH_ALG_NULL", "group__odp__crypto.html#gga97ed3811136cd7888625a4973c416982a281e7b97f84df04651af9ac14fe98bba", null ],
      [ "ODP_AUTH_ALG_MD5_HMAC", "group__odp__crypto.html#gga97ed3811136cd7888625a4973c416982a39a395de232a6dbdb078339ab5542716", null ],
      [ "ODP_AUTH_ALG_SHA1_HMAC", "group__odp__crypto.html#gga97ed3811136cd7888625a4973c416982a40e96c842f6ca3f8b9525abbb94b1c56", null ],
      [ "ODP_AUTH_ALG_SHA224_HMAC", "group__odp__crypto.html#gga97ed3811136cd7888625a4973c416982a940ea0a0ecd398ed2302c5f3577ded14", null ],
      [ "ODP_AUTH_ALG_SHA256_HMAC", "group__odp__crypto.html#gga97ed3811136cd7888625a4973c416982a471e06564c891f9705f2dd28480ccabe", null ],
      [ "ODP_AUTH_ALG_SHA384_HMAC", "group__odp__crypto.html#gga97ed3811136cd7888625a4973c416982a0a41f178286956faefcdc8df92e0e2b7", null ],
      [ "ODP_AUTH_ALG_SHA512_HMAC", "group__odp__crypto.html#gga97ed3811136cd7888625a4973c416982a400d59810b98620d0ffed0693a29107f", null ],
      [ "ODP_AUTH_ALG_AES_GCM", "group__odp__crypto.html#gga97ed3811136cd7888625a4973c416982aaa2119d2578afa8def7ed3ae160394e8", null ],
      [ "ODP_AUTH_ALG_AES_GMAC", "group__odp__crypto.html#gga97ed3811136cd7888625a4973c416982a954f1cc1eb2a7284beba842ad7a54982", null ],
      [ "ODP_AUTH_ALG_AES_CCM", "group__odp__crypto.html#gga97ed3811136cd7888625a4973c416982ad5b8c5c3affbde282db4a33f1ece8d6a", null ],
      [ "ODP_AUTH_ALG_AES_CMAC", "group__odp__crypto.html#gga97ed3811136cd7888625a4973c416982a15a53bfea20586ebcae401af08bc3d1b", null ],
      [ "ODP_AUTH_ALG_AES_XCBC_MAC", "group__odp__crypto.html#gga97ed3811136cd7888625a4973c416982aa50251618a82066c56c43d978f07a459", null ],
      [ "ODP_AUTH_ALG_CHACHA20_POLY1305", "group__odp__crypto.html#gga97ed3811136cd7888625a4973c416982a0b1a80997bf33e4621625ef998afa111", null ],
      [ "ODP_AUTH_ALG_KASUMI_F9", "group__odp__crypto.html#gga97ed3811136cd7888625a4973c416982ab0353f472300af96fc0601eca5100534", null ],
      [ "ODP_AUTH_ALG_SNOW3G_UIA2", "group__odp__crypto.html#gga97ed3811136cd7888625a4973c416982a59d54ffc382f191a926acfb2c9f13f9d", null ],
      [ "ODP_AUTH_ALG_AES_EIA2", "group__odp__crypto.html#gga97ed3811136cd7888625a4973c416982ae357f0f770a1d4dd2341ece37d21dfa0", null ],
      [ "ODP_AUTH_ALG_ZUC_EIA3", "group__odp__crypto.html#gga97ed3811136cd7888625a4973c416982af659fc0d289a337c9565a230e390987a", null ],
      [ "ODP_AUTH_ALG_MD5", "group__odp__crypto.html#gga97ed3811136cd7888625a4973c416982a04bd5c319fdae95ba1f5798c9f8a83b8", null ],
      [ "ODP_AUTH_ALG_SHA1", "group__odp__crypto.html#gga97ed3811136cd7888625a4973c416982a51160977ab2900bf8b9f08bdbd730859", null ],
      [ "ODP_AUTH_ALG_SHA224", "group__odp__crypto.html#gga97ed3811136cd7888625a4973c416982afd90f161ba3b990da8706607ecc71bd3", null ],
      [ "ODP_AUTH_ALG_SHA256", "group__odp__crypto.html#gga97ed3811136cd7888625a4973c416982a4e2c0a90edcdf92de27bc498a074b957", null ],
      [ "ODP_AUTH_ALG_SHA384", "group__odp__crypto.html#gga97ed3811136cd7888625a4973c416982a181010921df88b3f68f9591cb33099ba", null ],
      [ "ODP_AUTH_ALG_SHA512", "group__odp__crypto.html#gga97ed3811136cd7888625a4973c416982a2fa23752ecf9f635afac30901aafac5f", null ]
    ] ],
    [ "odp_crypto_op_type_t", "group__odp__crypto.html#ga7f36671333e31c0f4999c519d9b0d11e", [
      [ "ODP_CRYPTO_OP_TYPE_LEGACY", "group__odp__crypto.html#gga7f36671333e31c0f4999c519d9b0d11ea41dd35a61e098c72b78bd3928e7bbc57", null ],
      [ "ODP_CRYPTO_OP_TYPE_BASIC", "group__odp__crypto.html#gga7f36671333e31c0f4999c519d9b0d11ea1ad2bb18f6bc0e619bc45aa778973501", null ],
      [ "ODP_CRYPTO_OP_TYPE_OOP", "group__odp__crypto.html#gga7f36671333e31c0f4999c519d9b0d11ea512b66606f3c32c5144e5e1d809acf49", null ],
      [ "ODP_CRYPTO_OP_TYPE_BASIC_AND_OOP", "group__odp__crypto.html#gga7f36671333e31c0f4999c519d9b0d11eaee0cafcc7847c2db655173ce7b38a69c", null ]
    ] ],
    [ "odp_crypto_ses_create_err_t", "group__odp__crypto.html#gaa0dbfc50971a860e9b936fb931ebfbdf", [
      [ "ODP_CRYPTO_SES_ERR_NONE", "group__odp__crypto.html#ggaa0dbfc50971a860e9b936fb931ebfbdfa640170fa5b65562c064d894444815b12", null ],
      [ "ODP_CRYPTO_SES_ERR_ENOMEM", "group__odp__crypto.html#ggaa0dbfc50971a860e9b936fb931ebfbdfafdaef317c5cedf5ffdbdcd022edb3730", null ],
      [ "ODP_CRYPTO_SES_ERR_CIPHER", "group__odp__crypto.html#ggaa0dbfc50971a860e9b936fb931ebfbdfa9c51854de331a3e20d1d7e0b22dcadec", null ],
      [ "ODP_CRYPTO_SES_ERR_AUTH", "group__odp__crypto.html#ggaa0dbfc50971a860e9b936fb931ebfbdfa7eafe5df6f57514650d66fa8c1b4c17b", null ],
      [ "ODP_CRYPTO_SES_ERR_ALG_COMBO", "group__odp__crypto.html#ggaa0dbfc50971a860e9b936fb931ebfbdfa556f1334106b322ff53eaef17e227085", null ],
      [ "ODP_CRYPTO_SES_ERR_ALG_ORDER", "group__odp__crypto.html#ggaa0dbfc50971a860e9b936fb931ebfbdfa871bd1e14cc72533fe70a96e5e1dbf84", null ],
      [ "ODP_CRYPTO_SES_ERR_PARAMS", "group__odp__crypto.html#ggaa0dbfc50971a860e9b936fb931ebfbdfac79c2a05153c57ecea3dca8d26c5cdca", null ]
    ] ],
    [ "odp_crypto_alg_err_t", "group__odp__crypto.html#gab4923c6dac6bbdac8e725d24ada60c56", [
      [ "ODP_CRYPTO_ALG_ERR_NONE", "group__odp__crypto.html#ggab4923c6dac6bbdac8e725d24ada60c56a056e4ace075ae721d89bc8314559e0db", null ],
      [ "ODP_CRYPTO_ALG_ERR_DATA_SIZE", "group__odp__crypto.html#ggab4923c6dac6bbdac8e725d24ada60c56ab743088384093975486b7b821e548e8e", null ],
      [ "ODP_CRYPTO_ALG_ERR_ICV_CHECK", "group__odp__crypto.html#ggab4923c6dac6bbdac8e725d24ada60c56aa365cf457b87d18f9a27f666825de2f0", null ],
      [ "ODP_CRYPTO_ALG_ERR_OTHER", "group__odp__crypto.html#ggab4923c6dac6bbdac8e725d24ada60c56a56be676238988c445626a8e884c154d8", null ]
    ] ]
];