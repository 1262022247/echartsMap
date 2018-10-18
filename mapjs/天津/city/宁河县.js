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
    echarts.registerMap('宁河县', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "120117",
            "properties": {"name": "宁河区", "cp": [117.62828, 39.388886], "childNum": 1},
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@@@AB@@AB@@@B@@@B@BA@@BA@@BA@A@@@C@AB@RNDDLDJ@@BB@BBB@DAJ@FGJ@@A@@ACACC@@E@EAECABCBAC@AABA@CD@@A@@BABA@ABADGFEBGGIFGFFBHDIFKHMJCD@@KGIHLHCBDDABDBIJEEGHGJFF@D@@A@@B@@@@DJAF@BC@CJF@BBD@BDBDJ@@BDHLBHBDBB@`AFEDB@BJ@N@DB@DHABA@MF@@@@AF@D@@@FAD@FA@@HA@@B@B@F@D@@GfB@@BBADDB@BEFAHBBFADAB@@@@@@@BB@D@@DB@@HAFCLFDAFDBABBBA@@BAB@@AB@@@DDL@CHDBH@CI@AHPDBFBDD@DCB@DDDFBPBHBBCBBJDB@CFA@GAGNDBCDAHAJ@@AB@@B@BBALAFA@A@AAER@FCNETAH@D@BB@HB@AB@HFNFEJLFFADEDCD@JDFBAD@DJ@BFHA\\AJDJBLHHJHH@BEJE@ABCPLDJBBGB@HB@GB@HB@EBADELDB@P@BBBA@@@@@AHB@B@@@BD@JBCD@FB@@HDB@@BXBBhHJJ@@DB@@AFET@DB@@BXGPCJACABADAB@NDBFP@JHBCL@FF@FAL@BB@FB@@DBADHBDAFAJCAC@E@CBEFIJG@@@@DDFFD@@@F@D@B@FBB@FFDDBDBBDDBBDBBB@@@@@@@@A@@@@@@@@@@B@@AB@@@BA@@@@BA@@B@@@BA@@@@BAB@@@@@@@@AB@BA@@BAB@@AB@@@@@@@@@@@@@@@@A@@@@@@@@@@@BB@@@B@B@@@@@B@@@B@@@@@B@@@@@B@@@@@@@@B@@@@@B@@@@@@B@@@B@@@B@B@@@B@@@B@@B@B@D@BBB@D@@@@@B@B@B@@@@@@@@@@@@@@B@@@@B@B@@@B@@@B@@@B@@@@@@@@@@B@@@@@@A@@@@@@@@@@@@@@B@@@@@@@@@BA@@@@@@@B@@B@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@B@@B@@B@@A@ABABABABAB@BABABB@BB@@@@B@@@BB@@B@@@@BB@@@B@BB@@B@@@@@BB@@@@B@@@@@BBB@@@BBB@BBDBB@DBABD@DAF@D@@@B@@@BAB@B@@@B@DA@@D@D@B@B@B@@BB@@BBB@@BBB@B@B@D@DBF@BAFABAD@FAHCBAB@DAFCB@BADAD@B@F@DAF@B@B@B@DBD@B@DBHCBB@ABF@@B@D@B@@@B@B@BB@@B@BB@@BBB@BB@@B@B@BB@@B@BAB@DCDAD@BAFAB@@@BAB@B@D@BA@@DB@@B@@@BBB@B@@@B@B@@@BAB@B@@@BAB@B@@@@@BAB@BA@@B@BAB@@@BAB@B@@@BAB@@@B@DCB@@@@@DAF@BABAF@DAB@B@B@HIEKABEGACC@EG@@CEA@AC@KB@AAAB@@AA@@AA@@@AAA@A@A@@C@A@@@AA@@AC@A@@@@@@@@@@@@BAECCB@@@@BAB@A@@A@@A@@A@@@@DAAEFCBBA@BB@@B@@@ACB@AA@@@AA@BA@C@@BA@@@@@@@@@@B@B@@AAE@@@@@@@ADF@@AEB@@@A@@A@@CA@A@@CC@@@AA@A@@@CA@@@@KA@@@@@@AO@@@A@@@A@@@A@@@A@@@A@@@A@A@@@A@@@A@@AA@A@@@A@@@@@@@@A@@@A@@@@@A@A@@@@@@@@A@@@@@@@@@AA@@A@@B@B@@@BAB@B@@@@A@@BA@@@A@A@@BA@@@A@@@A@@BA@A@@@A@@@A@@@AAA@@AA@@A@A@AA@@A@A@A@@AA@A@AA@@AAA@@AA@@A@BA@@@A@@@A@@@A@@@A@@@A@A@A@@@@@@@@@@AA@@A@A@@AA@A@@@A@@AA@@@A@A@@@AA@@A@@@A@A@@A@C@@@A@@K@C@A@G@I@@BI@G@K@U@@A@A@@@AAQAA@@@A@UC@@@A@A@@@A@@B@@A@@@A@AF@@@BB@@B@B@B@@@B@B@B@@@B@B@@@@ABCBA@ABA@@@@AA@A@C@A@AAC@A@A@A@A@ABCHGKGCA@@@@@B@@A@@@@@@@@@@@@@@@@@@@@B@@ABGH@@EACAOAI@E@G@MAA@E@EACAEAE@A@@A@CACAI@@@C@@BC@@FEHCFAF@DBDBJBPADABABE@@@@DBB@@BB@BBVN@@@@ABAB@@@@@@A@@B@@@@@@@@@@@@@@@@B@@@@@@@@@AB@@@@@B@@A@@@@BA@@@@@BBFD@@@@BA@@@@@AB@@@@AB@@@@@@@@@@@@@AA@@AA@@A@@@@@@A@@B@@@@A@@@@@@@@B@@BB@B@@B@@@@@@@@@@B@@@@A@@B@@@@@@@@@B@@@@@@@@BB@@@@@@@B@@@@@@@@@BA@@@@@@@A@@B@@@@@@A@@@@A@@AAA@@AAAA@AA@AAACAACA@A@@AA@@@AA@@A@A@AAA@C@A@@@@GB@@@A@@AC@CA@@AA@@@@@@AA@@@@@@@@@@@@@DCBAB@@@@@@@@@@@@@@@BA@@@@B@@@@@@@@@@@@@@A@@@@@A@@@@@@@AA@@@@@@@@A@@@@@@@@@@@@@@@@CE@@@@FAAABAF@CGBC@AGACRA@CECGHI@AC@C@CAAG^KDCAAEGAEAAEGGIEKMSCC@AACC@EBEB@B@@A@@@@@@@EBABC@ABCBEBABBBJNBBJCBDIDGA@@A@QHMFIDBB@B@D@F@F@DDDMFE@EAA@A@@AC@A@OEEECAA@AAC@C@GAMAGAQA@@S@A@@A@@@A@A@@@A@@@A@@@A@A@@@AA@@@S@A@AA@I@@@G@IB@B@JUF@FM@@HBDGBAEATGRGAA@@AA@@@AAA@@AA@@AA@@AA@AA@@A@@@AA@ACAAAAEGACAAAAEEAECEAA@ACGAGAE@@FA@W@Qa@_@G@CAAA@N@V[@AB@@AB@BA@@BA@@BAB@@AB@@AD@@A@AB@BA@@BA@@BAB@@AB@@AB@@AB@B@@CBGHAB@B@@A@@B@@@BIAA@AACA@C@@C@@@@A@@IA@AUE@C@E@A@Q@C@AF@FGEE@@@AEE@AAAAA@@@I@A@@@AgFGBQFKDGBA@GBABG@GDI@IB@@A@AA@@A@EBIBC@KFIDGDIDGD@B@RABBBA@ABAB@@AB@@AA@@BABCAAKCCABC@AAAUFBBFALFDF@@@HICKCK@CB@@CBHJBR@@ABEB@@ABIDIHO@QDILGIADECCAYBEAAEOGSDBDAB@BDFBB@@@B@B@@@BA@AB@BA@A@A@@BA@A@@@AB"],
                "encodeOffsets": [[120221, 40183]]
            }
        }],
        "UTF8Encoding": true
    });
}));