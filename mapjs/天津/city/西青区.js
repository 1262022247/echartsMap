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
    echarts.registerMap('西青区', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "120111",
            "properties": {"name": "西青区", "cp": [117.112247, 39.039446], "childNum": 1},
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@@@@AAA@@@A@@@@AA@@@@@@@@ECABC@@EDAAAA@CCAA@@A@@AAAA@@AA@@@@@A@@AEANKHEBADCBAB@BCBADCBA@@@@B@@A@@BA@A@C@ABS@CBA@CBCBABADGDCDCBABABADCBC@@@@@@@@BABAHEDCHEFGB@BAB@BAB@B@B@B@ZJJB@@@@@@@@FBFB@@@@B@PFBAHGHIJIFGBA@@NOBBF@B@@@@@BI@@NBHAFAHBDAN@LDBC@@BCCC@@A@AC@AACBAAE@AFIA@GBCBAAAABAHAJDFGB@D@DCBG@CBABKDAB@DCJDFBB@BABCDAMCLEAAGAFE@AIICC@KAKAACBBHED@@@@IFABIGAABAJEAAAACAAA@EQWIBOBA@AAdQFA@@@AEOCIJCNGGGLIJGHENM@@NINMDCDA@@T@NBFEBABK@CJBDM@AF@DGG@BGH@@AACFK@@GCG@DKB@@AA@ECCAGECA@@@@@@DABCBAAA@ALCCAACCACAE@MFMJIBGBaJYHWFGDIDKFIHQNMJIHQNONEDSPMNORMPGNSVEHMRGJGHGLURGFKFOHGBIDWLGBKDEDGFCBCDIHEEAAA@@AAIkD@HDRF@@B@DKDA@@BDD@BFDOH]LSDaHWBOBBH@@@BE@BDA@OBDHWHC@FJABA@CGCBCGAACCKHIDIFEB@@A@@AAAADUBACECGHWKABAFBBRFBHE@EB@BUFB@@B@@@B@@@@@B@@@@@B@@@@@B@@@@@@@B@@B@@@@@@@@@D@B@@@BDB@@B@@@@@@@@@@@BB@@@@@@@@B@@@@@@@@BB@@@@@B@@@@B@@@@@B@B@@@@@B@@@@@BB@B@DBBBDLAHZ@BFA@@@@@B@@@@@B@@@@@B@@@@B@@B@@@@@@@B@@@@@@@B@@@@@B@@@@@@@@@B@@@@@@B@@@B@@@@@@@@@@@@@@@@@@@@BA@@@@@@@A@@B@@@@@@@@A@@B@@@@@@@@@@@@@@@@@@B@@@@@@@@AB@@@@@@@@A@@@@B@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@B@@@@@@@B@@@@AB@@@B@B@@@@@@@B@@@@@@@@@@@BA@@@@@@DJ@@@@@BDF@@@@@B@@@@@@@@@@@@@@@@@@@@@BD@B@@@CJCN@@BB@@@DD@FBENCNF@JB@BN@BHK@GBAJ\\F@AACDAH@BBAB@DDFBBB@FFB@BAB@@@@@@@DADL@BA@@DF@@@@@@@JE@E@@@@BEB@FB@CB@RDHBNB@EB@NDH@DKDGFBDKCAA@BCB@BCDBVFB@@DE@AF@HF@BBANH@@EBK@C@CB@@CFBDDD@DBD@FAF@DBDBF@FBJDBBBAD@BIN@ALDBADA@@BFBDBHDFBH@HBFBD@F@F@D@HAN@NAJCD@AA@A@AAA@@@A@C@@AA@C@@@AAA@A@A@@@@@A@A@ABA@ABA@@@A"],
                "encodeOffsets": [[119940, 40092]]
            }
        }],
        "UTF8Encoding": true
    });
}));