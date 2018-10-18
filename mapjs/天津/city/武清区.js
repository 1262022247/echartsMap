(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        factory(exports, require('echarts'));
    } else {
        factory({}, root.echarts);
    }
}(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    };
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }
    if (!echarts.registerMap) {
        log('ECharts Map is not loaded');
        return;
    }
    echarts.registerMap('武清区', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "120114",
            "properties": {"name": "武清区", "cp": [117.057959, 39.476925], "childNum": 1},
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@BC@EBAEC@@@@LGRIHEHEJGTKJELIJGDAJELGFC@@NIFEFABAFCFCHCAAB@CCI@@CB@D@D@JCBA@ABC@@@@@@DAB@BBCD@BF@D@H@BAD@LIBAB@BARI@CBEECM@ADE@OA@ABCH@HA@C@@BCD@HEDIGEC@ACAABIDBFADCH@@DFADEDAFBFAHCDCBMFABKGAAA@CAABADAB@@@DAJOFAFIFEB@@@DE@@FEBA@@@@@@BC@@@@JBDCCAEA@@@@@A@@@@BA@@BA@A@@@AB@@A@@@A@C@@@A@@@A@@BA@A@CB@@A@AB@@A@@BA@A@@B@@@BAB@BAB@@@DAA@AABG@@@ABOBCFC@@@AA@@AA@AA@@AAAA@@AAA@AA@@@@ABGFED@ECCGC@F@DDFOH@EIE@@@ADCDGBC@A@A@BA@AABCCAA@CAAC@A@@@@@@ACI@AA@@DGBGBC@ARA@AF@@G@@D@@A@GACBABA@A@@@@@@@@D@BEF@BBHAC@AAE@DID@@ABECI@@@@@AB@@@@CEEA@AC@@GC@@@@@@@@AFC@KAEA@@A@A@CF@BHBALA@C@I@A@CFCNCBIBKAEDCFBBA@A@@A@AC@EAACBGG@@@@BCDEAKBABEJE@ABE@IFEAAA@@CABCG@ADKBUEEAICBEAAI@AHC@AA@G@@E@CADG@C@AA@@@BGG@CBA@CAAABCC@CA@A@CG@E@@@AFA@@@@@AAA@@@A@@@AHGAEC@A@@A@@A@AJBBKIEALCAC@@KDCCEEEKCA@@AB@@A@@KAG@EBGFAA@B@BA@@B@@ABA@A@@@AAA@A@@@A@A@A@@@A@AD@@A@AAA@@@A@A@@BA@A@A@@@A@A@A@@@A@A@A@@@A@AAA@@@A@E@EAA@A@@AA@A@A@@AA@A@A@@@A@A@AA@@A@A@@@@@@@@@A@@@@@@@@@A@@ABA@@BABABADCDAB@B@AAKCEAAAGC@ADEMCBEJB@C@AWAEC@BA@I@C@CLEJOCIADH@@AAA@A@@@A@A@AA@@A@A@A@@@A@A@AA@@A@A@EAA@@@A@A@A@@ABMC@HOE@BI@@BBFBB@@@B@@BBKBECB@A@@@A@@@AAC@A@@@@WA@OEB@GAAA@A@@CQBABKB@E@EAACCCAGIA@EBOCCABEB@BMDEACEAFIC@CAACBABACAAE@A@C@@@@AIBEAAEACBADAB@@@A@@C@IAS@@E@AACAC@EBGHB@@AAEA@CRICE@CBAAAG@CBBD@B[EBIHAL@AGM@@AIAE@DMFMEAC@@C@@AA@@DMDIA@A@@@@@@@@@@@@@@@@@@@@@@@@@AB@@@@@@@@AA@@A@@@A@@@A@AH@@B@@@@@B@@@B@@@B@@@B@@@G^A@@@A@@@@@A@@@@@A@@@@@@@@@@B@@A@@@@B@@@@@@@@@@@B@@@@@@@@@@@@@B@@@@@@@@@B@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@B@@@@@B@@@B@@@@@@@@@@@@@@A@@@@@@B@@@@@@@@@@@@A@@@@@@@@@@@A@@@@@B@@B@@@@@@@@@B@@@@@@@@@@@B@@A@AB[FCB@@gAA@C@C@@BA@@@@@@@@@A@@B@@A@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@AA@@@@@@@@@@AA@@@@@@@@@@@@@@BDDBABBN@DAB@@AB@DBFEDB@BNAB@B@DA@BH@B@BA@@T@@CHG@AR@B`D@AF@B@@PBBCJDBFABGB@@BB@@A@@@@B@@AB@@E@ABBB@B@@@@B@@@BB@@@J@@FC@@@A@DHC@@BC@CB@JA@@F@@CCA@@@A@A@@@@BAB@@C@@@A@@H@PABFDM\\JB@BAJ@FAHCRKA@FGA@JHB@F@@@BB@@@RDFBBCFB@BB@@@CRF@D@@BBDBB@B@D@D@@ANAFF@AD@@B@AHEA@BA@@@@@A@@@EDKA@BA@@@@@AFA@BCA@@@A@@D@@AH@@A@FBAFB@@DB@DAB@@BCFE@@BA@@BCA@@CA@@A@@AKA@FAA@C@@BEB@BCG@@CC@BAA@CCIICJGGKAA@@@@@ABA@GAA@@A@BA@B@@BA@CPCLAAAD@FFB@AF@@DJ@@BADHB@BA@ABGAB@IA@@@@AB@@ABC@@@@BA@A@ADB@AD@@A@AFL@@A\\D@B@B@BFBBEB@@BAD@@AFB@CF@@AF@@B@@BA@@B@@@DBB@DEA@B@@@BD@AFCACDBH@@B@FB@BB@ALF@AFB@DBBCPB@DB@ABBBB@@BD@@B@@@BB@@BB@B@@@DB@@@B@BHBAD@BABDBLEJNIDCB@@BBABKC@@A@GFCFQCBAA@@AA@@@CBAA@@AA@BCA@DOIADA@GD@BB@@@ALDA@BEBGDKFA@@@IA@B@@BE@AGABAA@EBGD@BEABCA@A@CF@@CHDAHC@B@@@LA@@BAA@DAAAD@BEAAJA@IBB@@BF@CB@@@BF@AB@B@BD@BABB@BN@ADB@HBFBJB@@@@@@@@@DD@@DF@BABABBB@B@@@EBB@B@B@@JB@@@EB@BAFB@AHABA@@@@B@DI@@BF@@DDA@ABBA@CRH@@@C@@@FB@@JB@@D@@BB@ABCPALFAEL@@@@ADEC@A@@BEG@@BA@IAE@@@A@ABCBALG@AJA@@BAFC@ABC@@FEAAHB@@DB@BDF@AHHFA@DBABD@B@B@AB@@A@@@BBCBD@BB@@JDB@DBB@@B@BB@AFD@@@D@ED@DCA@BABAB@BA@@@A@@B@BCB@@A@@@@@ABADDAAFA@@F@@@BB@AFB@@AB@@AB@@@BBBA@@@BBBBCFB@BA@@BE@@@B@@BC@@BB@A@B@@BB@@ABBAB@@@@E@AB@AA@@BB@@BFB@ADB@BHDBCA@BAGA@AB@@@B@@AC@BA@@@CDBB@DAB@CJF@B@@@@B@BCDABDBEJB@@BB@@BD@@@@@FB@@@@B@B@FCB@@EJD@@B@BB@@D@D@@B@@@D@BA@@BHBCDABABEFCBEFBB@@@@@@@@@@BBB@ABADA@FD@ADDFBAD@@BB@@BAF@@@D@@B@@AF@@@@@@DB@@DBFBH@BD@@@@@@@B@B@L@B@BA@A@BD@@@F@@D@H@@@@@@@D@B@D@@@@@@@@B@@@@D@@@BB@@@@@@@B@@@@@@D@B@B@HB@@@@@A@@B@BABA@@@@BB@@CD@@@@BBB@B@DB@@B@@B@@@@HBB@D@D@B@B@BA@@B@@@B@@@B@@@@BB@BC@@B@@@BB@@@@@@@@AB@@@@B@@@B@@@@@BB@@B@@@B@@@B@@@@@@@@@@@@@BB@@B@@@B@@@@@B@@B@@@@A@@B@@@@@@@B@@@@@@@B@@@@A@@B@@@@@@B@@@@@B@@@@@B@@@BB@@@@B@@@EF@@ADF@@BB@@@@@B@@@B@@@B@@@@B@@@B@@@@@@@B@BA@@B@@@B@B@@@@@@@@@@@@@@@@@A@@DB@@@@@@@BA@@B@@@@@@@@@@B@B@@@B@@B@@@AB@@@BAB@B@@A@@@@@@@@@B@B@@AB@@A@AB@@@B@@@B@@@@@B@@@@@B@@@@@@@B@@@B@@@BB@B@B@B@@@@@B@B@D@@@B@B@B@B@@@@@@@B@@@B@B@@@@@B@@@@@@@BA@@@@@@@@@@@@@@@@@@@A@@@@B@@B@@@@@@@@@ABA@@@@@@@@B@@@@BB@BB@B@@@@@@B@@@B@B@@@B@@@B@B@@@@@D@B@@@B@B@B@@@B@@@@@DI@CA@@@@@@@@@A@@B@B@@AB@@@@A@@@@@@@@@@@AA@@@@@@@@@@@@@@@A@@A@@@@A@@AA@@@@@A@@@@@@@A@@@@@@@@AA@@@@@@@A@@@@A@@@@@@@@@@@@@@@A@@@@@@@@@@A@@@@@@@@@@@@@@B@@A@@@@@@@@@@@@@A@@@@@@B@@A@@@@@@@@@@@@@@@@@@@@@@AAB@@@@C@@AA@@BA@ABCBA@B@@@AB@BA@A@@@@B@@@@@@@@@@@BA@@@@@@@AB@@@@@@@AA@@@@A@@@C@@@@@CA@@@@@A@@@@@@@@@@A@@@BA@@@@@@@A@@@@@@@A@A@@@AB@B@@AD@DA@@B@BA@@B@B@@AD@@@@@@@AEAC@A@A@A@ABC@ABC@CBABCDCBCB@@AB@@B@@B@@BDBB@BDBB@@B@@@B@BABAB@@A@@@A@C@C@C@@A@@@A@@@@@@@BA@@@A@@B@@@B@@@@@@@@A@@@@@@B@@@@@@@@@@@@@@@BB@@@@@@@@B@@@@@@@@@@@BB@@@@@@@@B@@@@@@@@@@@@@@@B@@@@@@@@@B@@@@@B@@@@B@@@@@@@@@@@@@@@@@@@@B@B@@@BB@@@@B@B@@@@@B@@A@@D@AB@@@@AB@@@@@@B@@B@@B@@@B@@@B@@@B@@BD@FB@@D@@@B@@@B@B@@B@B@@B@D@@@@B@@@@@B@@@@B@@B@@@@B@@@@@@@@@B@@@@@@A@@@@@@@@B@@@@@@@@B@@@B@@@@@B@@@@@@@@@@@@B@@BB@B@B@B@@B@@@BF@JAFALAJCFAJAHAPAJCJCNCJAHCLELCNC@@@@@@AAB@@@B@B@@@@A@@@A@A@@B@D@@@D@@A@@@A@@BA@@@B@@@B@@@B@@@@@@@@B@DA@@B@@@@A@A@@@AD@@@BABB@A@@@@@@B@@A@AD@DBAB@B@@@@@@@AB@@@@A@A@A@@@@B@@@BAB@B@B@B@@@B@@@B@@@@B@@@@A@@@A@C@@@@B@@AB@@@B@@@@BBJCD@HC@BD@DDD@B@F@@@BBABD@"],
                "encodeOffsets": [[119960, 40574]]
            }
        }],
        "UTF8Encoding": true
    });
}));