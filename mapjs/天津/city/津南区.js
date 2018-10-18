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
    echarts.registerMap('津南区', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "120112",
            "properties": {"name": "津南区", "cp": [117.382549, 38.969577], "childNum": 1},
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@D@NAH@D@LCJARGDCHEJKFA@ABADAJALCF@DAH@HB@@B@H@HBJ@@@B@DADA@ADGBE@CDE@@FIDCHENEDA@@JCPCD@HAB@H@H@F@LDB@HB@@DBJDHFFDDD@@B@DBB@DABCBC@E@CACAC@A@A@@BA@ADA@@DAD@DAB@D@FBFDD@DBB@B@DADEJKDC@ADEDEBC@AB@@@D@DBDDHFBBFDDBBBB@FA@@HAHCBABA@@@@BA@@DC@ABABABABABAB@@@DAB@B@@@B@DBB@@@B@BA@@B@@A@@@@@A@@@AAA@AAA@A@@@@@AAA@@@@@AA@@@@@A@@@@@AA@A@AA@@AAAAC@A@@@AAAAC@A@@@A@A@@@ABE@E@@@AC@@A@C@ABCBGBI@AGAGBIHSNA@KCQMCFKCQEBGBGDWBODOC@EAMAI@@@AA@@@@@@AAECIEGCGEAAEC@@A@ACIEECGEECCCACCAEIGU@@ABEFEFGHEDEHABCBIJCDEFECECGEMIEEEAIE@@@@AAYOGCECECECECEAECECCAAA@BA@CLH@HD@@ELBD@BG@AHH@CHE@@BCNIA@DALABEFMAS@@@CBCDMNMJ@@MNGFIHKJHHMHIDDJFP@B@@EBcRBBB@PAJARX@FBBDBBBBBIFABBBJHBAJE@@@@FCAGDABBBL@LDDJJ@BEFHBBBKFNDCBADABA@EAICCDA@CBALAB@DAHCDC@A@EHICGBABBBBBDAHAB@EJ@BBFABBD@BBDB@@@DDAD@@ADKCM@CBGAEBGBMA@@AJ@@@@A@E@AAMPN@n@@C@@N@F@D@B@B@D@@@@@@@B@@@@@B@A@@@@@@@AH@@@@@@@@@@AH@@@@@@D@B@BB@@@@@@BDF@BABAB@BBBBD@@CF@FB@@@@D@B@@BAB@DAD@BAD@B@BB@@@DDHF@@@D"],
                "encodeOffsets": [[120108, 40016]]
            }
        }],
        "UTF8Encoding": true
    });
}));