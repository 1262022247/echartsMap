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
    echarts.registerMap('北辰区', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "120113",
            "properties": {"name": "北辰区", "cp": [117.13482, 39.235555], "childNum": 1},
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@HIHGFFJICABACCDAKGJGLH@@DCNILGJEGCEAHEJEHHFAHEBCBAB@BA@AB@@@DCB@BA@BBDDABAFDFBF@@@DDDB@BB@@@HI@EBI@CAA@AAA@@CICKMC@QBAD@@@B@B@@AB@@AB@@A@A@@@A@@BA@@BA@@MA@CIAEAGC@ADCA@E@E@EBE@IDG@I@E@G@E@C@A@CBG@MBA@@@C@IAA@AD@BEBQDMDEBGBKFA@CBAAA@CACCC@BERD@AA@BEFBDYBIKEAAKAG@EAKCE@ICKEICGCGCCCAAECCCGEACCACCIIA@@@ABAACBGJEAABAB@@@@@@AB@@@@A@AACACAAAA@AACA@@@@@@@@A@@@CAILCAAAIAA@@BA@CA@@@@BAC@CAG@CAC@@@AA@@@@@@@AA@@@GDABA@@BAB@BA@@@I@KAA@A@A@AB@@@@ADA@@@AA@@EAAAAAAA@@AAAAACCGAA@A@A@A@A@A@A@@C@IDMBM@GBC@E@E@C@EAGAG@EAGCCAEA@AB@BCCABKM@AJC@ABAAICEAE@CACAE@EBC@CAC@CCEA@DA@@D@DAL@FG@BMAAE@@GBEF@@CA@UECAADA@ADB@DBCLEACHCLG@MCA@@FMAGAQCA@@DEAA@AF@@@@@FIF@@@@@@E@@CB@@ACKCB@@@@@@A@ABA@EEA@AAQJ@DFBBB@@GAAH@FBDBD@B@FT@JBD@@@@B@@BABCDAFBBBAFBJ@@@@@D@BBFDBABABBDDBD@EJFBBDCFANA@AFDBPDFAB@HJDBDDBB@F@FLABARA@DB@B@BB@HFA@PXB@@@@@BBD@B@@@B@@@BDAAFAL@AA@@@A@EAAA@@AJF@GPD@AN@BB@B@B@@@B@FBB@B@@@BBB@B@@@B@B@B@@@BBB@B@@@B@B@BB@@CGJBPDFIDKD@J@B@@AFDXB@B@DIAAFNDCF@BHDBBFBLDBBA@A@CBCDABABAB@@AB@BB@@@@@@@@@B@@@@@@@@@B@B@@@BBB@B@@@B@B@B@@BB@B@B@@BB@B@FBF@B@@@B@BBB@@@B@B@B@@@B@B@B@@@B@B@B@@AB@B@@@B@BBB@@@BCB@@@B@B@B@@@B@B@BB@@B@B@BA@@@AB@@A@ABBHEFAH@LB@@@BA@@BB@LDFFDFCD@LD@DBBKJFALIA@B@BB@@@@BFDHBBG@@B@@@B@BB@@@@B@BE@@F@H@@D@BDBD@ADBBDBB@DAH@AH@@B@@B@DCHDBF@@@@HBBD@BGJ@BBAFJDFBVFLABCH@ADDB@@BBFBJEF@BAF@FIBALAFBDC@A@@H@AHBDFBD@@B@BB@B@AADEFCLBJADADMDEB@J@D@B@BKGA@ADEB@B@@@FBLBD@BE@@@@@@@@HD@@BDB@"],
                "encodeOffsets": [[120140, 40274]]
            }
        }],
        "UTF8Encoding": true
    });
}));