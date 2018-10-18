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
    echarts.registerMap('宝坻区', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "120115",
            "properties": {"name": "宝坻区", "cp": [117.408094, 39.616965], "childNum": 1},
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@GBAAE@AFC@@@@@@@@@@BABABBD@H@BC@@@@HE@@BQB@BADAHCH@@BBJ@BD@@@@@@@BBDDBB@DBADBBB@@A@B@BADCHCD@B@@JF@FPGCE@C@EHDDD@FFCHEBA@@@@BBB@BB@@BBBB@@BBB@@BB@@B@@EDADAP@B@@AHBBB@CB@@A@ABA@AB@@A@@@@BAB@@@BA@@B@BA@@D@BAB@@@B@@@B@@@D@B@@@BA@@B@@@BAB@@AB@@@@@B@@@@FBDBCDIA@@@@AD@@@@@@ABEF@@CF@@A@EFEJEBIPCB@@A@CBABBB@DBBHBALEBANCDGDEBEACBCFEB@CG@CDEBCAAJBBBDD@HFCJGFC@AD@@@DGBG@AD@BPBF@BCN@FDAF@DQJABA@ABKJC@ABG@C@E@@ADCAAA@CB@@@@@@AD@BABIDC@C@A@@DJ@DDA@BBGDEDEDABEBEFMJ@@EDKHIFCBIHKJIFSLIHGFGFQJKH@@@@FDAB@FAD@@B@B@@@BB@@D@@@@B@@A@@B@@@@B@B@@B@@@@@@A@AB@@ABA@@@@@BB@@@B@@@@@@B@@@@@B@@@B@@@@@BB@@@@@@@@@@@@@@@@@@@@BB@@@B@@B@@@@B@@@B@@B@@B@@@@@@B@@@@@B@@@@@B@@@@@@@B@@@@@B@@@@@@@@@B@@@@@@@@@@@B@@@B@@@B@@@B@B@@@@@@B@@@@@@@@B@B@@@B@@@B@@@@@@@B@@@@B@@@B@@@B@@@B@@@@B@@B@@@@@@@B@@@@B@@@@@B@@@B@@@B@@@@@@B@@@@@@AB@@@@@B@@A@@@A@A@A@@BA@A@A@AB@@@H@@@@A@@@@@A@A@@@@@@@@B@@A@@@AA@@@@A@@@@@@@@B@B@@@@@@@B@@@BA@@@@@@BB@@@@@@@@B@@@@@B@@A@@B@@B@@@A@A@@@@@@@@A@@@@@@@@A@@B@@@@@B@@A@@@@@@@@BA@@@@@@@@B@@@@@B@@@@@@@@@@@@B@@@@@@B@@@B@@@@@B@@@@@@@@B@@@@@@@B@@@@@@@B@@@@@@@B@@@B@@B@@@B@@@@@BD@@HD@D@AD@@@BAL@@AB@@BBAF@@F@ADB@AR@@@@BBBFA@AB@BA@@BD@@BCA@HD@AJE@@ACAAHBBB@@B@@H@AD@@@B@BCB@EAA@@@@AB@@@BGB@BE@@BB@@@K@@BBDDFEBDD@BA@@BA@BDNBAB@BB@@@@@B@B@BABA@@B@@@BBAB@DCDADAD@B@B@@BBB@BB@@DAB@@@@@DB@@DBD@FBDAFBHA@B@@DFH@D@DF@B@@@@@BFA@BH@HHKJAB@DA@A@CDABA@ABEDGBABABA@@B@@CB@F@@@@@@@@@B@BAB@B@@@D@B@@@B@DE@@@AB@BE@AFGACE@BABA@A@@@A@@A@@GAALB@@@AJFABBB@IR@DB@@DB@@DBAFEDBF@@JH@@B@@L@H@@BJ@JBBCBBB@B@@@@DCF@@AFF@B@B@B@BBB@BCJDB@@@@@@@@@@@@@B@@@@B@A@@@@@@@@BEB@BBB@B@D@LC@EHBDDBB@@FBHBD@D@NAHAPC@@B@B@@@BA@@B@BB@AB@DABAB@@@@@BBB@BBBA@@B@BCBAB@B@B@B@BB@@BADCD@BAFC@A@@@ACA@@@AB@@@@A@C@@B@@@DBB@@@@@BC@@B@@@BBB@B@@CB@@@B@@BB@B@@@@@@A@A@A@@BCDA@AB@@@B@@B@@B@B@@@B@@B@@@B@@B@@@BAB@B@B@B@B@B@B@BABAD@BADC@@@AA@A@AA@@BA@@@ABA@@B@BA@@@C@AB@D@@@BABAB@B@@@BBBBBB@DB@B@@@B@B@@@B@B@BD@@B@@@BC@AB@B@@@BD@@B@@@B@BCDAF@BAD@BAD@BBB@D@@@BB@BB@@@@@B@BA@@@E@@BAB@D@J@@@@@@@@CBA@@B@D@F@B@B@FE@@B@@@BD@@B@@@B@@ACC@A@@B@D@B@B@@A@@AC@A@A@ADAFCDE@@B@@@D@B@DBB@D@@@@@BADABABA@@@A@@AC@A@ABABABA@@B@HAH@FA@@BABAD@B@D@FAB@@@@BBBBH@DBBNFDDB@B@@AD@B@@@B@BBDHDDB@BBB@B@@@@A@AACCC@A@@@@@@BA@@D@BB@@DB@BDBBBFBB@@@ABAB@@CB@BB@D@DAB@D@B@@@@@BB@@B@@ADAB@@AB@@@B@B@@BB@BFBB@@B@@A@@BEBEBC@@B@B@BBBBB@DBF@B@@@@@@CBABCDC@@DAD@D@@BBD@BB@BABABCB@BABABBBB@DBBB@BA@ABAB@D@D@B@@@@AAC@ABABAD@H@@@@@DBB@BAJGB@@@BB@@BDDFB@@@B@@@B@BADG@ABA@@BAB@B@DDD@B@D@B@D@@AB@BEBA@@BAB@@@BAFAH@FAHAH@@A@@@A@@AAA@A@A@AA@@@@@@@A@@BAHCB@@A@@@A@@@AAAA@A@A@ABCD@@A@@@A@@@@A@C@ABA@AAA@@A@A@CBA@AABC@@@A@@@AK@@AA@@ABABA@@BA@@JB@@B@@A@@AAA@@AGA@@@@@A@@B@DBB@D@BBBAB@B@FEB@@A@@@A@@AC@AB@@ADADADAB@BABAB@BABBD@J@F@B@@@B@@@BADA@@BAD@BBB@B@D@B@BAB@BAB@@@B@B@@A@@@@@A@A@@@A@@@@BA@@B@@@B@@@@BB@B@@BBBDBBB@@B@@@B@@@BABADG@@@A@@@@A@@AAC@@A@ACAA@A@@@@@@B@@@BAB@B@BAB@@A@@@A@A@AB@@@F@FBB@@@@A@@@@@AAAAACAA@@@@@@AB@DAB@DAB@@@BA@@A@@A@AA@@AAAAA@@@@@A@@B@BADAB@@@BAB@@@BBD@BBB@@A@@B@@CA@@A@AAAEEAA@@@A@@@@@ABADA@ABA@@@A@@@@@A@@A@@@@A@@@AA@@A@A@@@@BC@@@A@AACACAA@@AA@@A@@@ABC@EBEB@@A@@@@A@@@A@C@CBE@A@@@@@AA@A@AAA@A@ABA@CBA@A@@@@@@A@@BA@ADE@@@A@@A@@@AAC@AA@@@@@@@A@C@A@ABC@@@A@@@@@@A@A@A@C@CBA@A@A@@@@A@@@@@C@A@A@A@@@AAACCCAA@@@A@A@@@CF@BA@A@@AAA@A@@@ABEBG@C@ABA@@@ABBB@BBDBBBBDDD@DB@@B@@@@@@B@@BB@B@BBB@B@@@@A@@BA@@@AAA@C@@@@@A@@@ABABC@@B@@AB@@@B@B@FBDBB@B@@@B@@@B@@ABABA@@BA@@BC@@@A@@@A@A@@ACAAEC@A@@@@@ABCBA@@B@DAJBFBDBDBBBDBBDDB@D@@@@@D@B@BB@@@@BB@B@B@B@D@D@BAB@B@BABABABA@AB@HGHABAFAD@DABABABA@ABAAA@C@@CCCAAAA@A@E@A@EB@@@@CBCDABAAC@AC@@AABC@@BADEBAB@DAFAF@F@B@B@FADABCBC@ACCIDEBCBGABCCA@@EAA@@ABK@EEEK@ADIGO@AEMCA@CBABDBIBODWH@AA@@CFSBE@@CA@@IIgGAAAW@@CA@GA@@EDCIAC@@A@@@AGA@B@@@@ABAAO@A@KCCFAB@FGAA@@HGAA@AHIAKCDOBAF@FI@AGGGIKGIAIC[BGBAEI@@CBCEAICC@CDCFEBKEFIMEGEA@@BGAA@@A@CBGFSDM@EFQBBB@B@BEBKAAA@@@BA@@BIBGDCCAHMHBB@DEA@ICAAADGAOAEACC@CDA@CCCEACAGO@BDJG@CADGK@CC@@A@@BA@AB@@ABAAABECCBKEEDGB@@CA@@@CAA@@@@@@A@CBEBAABGFE@ACABCAA@@eA@HC@E@A@A@@@GB@@EBC@EB@@C@E@@B@@E@@NABGB@CCAM@I@@ACAEF_BA@CAGAKACG@AI@ACAC"],
                "encodeOffsets": [[120145, 40295]]
            }
        }],
        "UTF8Encoding": true
    });
}));