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
    echarts.registerMap('静海县', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "120118",
            "properties": {"name": "静海县", "cp": [116.965304, 38.875671], "childNum": 1},
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@@B@B@B@@A@@B@@@@C@@B@@@B@BA@AA@@@B@@@B@@B@DBB@@B@B@B@@@@@B@@@B@@@@C@A@I@C@@@@B@BA@@@@@@@@@@@@@@@@B@@@B@B@@@B@BA@A@A@A@A@@@@@S@ABARCRCHCL@@E@@@@@A@@B@@B@@B@@@B@@@B@@G@@@@@A@@@A@@@@@@@@@@B@@@B@@@B@@@@@@A@@@A@@AA@@@@@@@@@@B@@@@@B@@A@@@BB@@@@B@@@B@@@B@BBBB@BAB@B@@@B@@@@@@@B@@@B@@@D@@@@@@@@@@@@@DBD@@@BBFBLBBBJBBBBFFDDC@A@C@@@@FA@A@@@A@@@CB@@C@A@A@@@BD@@A@AB@@@@C@A@@@AAA@A@A@A@A@@@@B@@@@@@@B@@@@BD@B@B@B@@@AA@A@@AA@@@AA@@A@@A@@A@@AA@@@@B@@@@@B@BBB@B@@@DB@@B@B@@@@BB@@@BBB@@AD@@@@@@BB@@BBBB@@@@BB@@@@A@AB@@A@C@GAOCIAMCA@@@@@@A@A@@@@@A@A@A@@A@@@@@@@@A@A@A@@AA@A@A@@@@@@@@A@A@A@A@C@C@E@@BA@@@@@A@@@A@@@A@@@ABA@A@A@@@A@@@A@@@A@@@@@@@@@@B@@@@BB@@@BB@@B@@@@A@@@A@A@@AA@A@@@A@A@@@@@A@IAUAIAQCK@A@@@@@A@A@@@A@A@BA@@@@@@B@@@DB@A@@A@@@A@@@@@@@A@@@@@A@@@@@@A@@AA@@@@@AA@@@@@C@A@C@C@@@A@A@@@A@A@A@A@A@@@@@@@@@@@@@@BA@@@@@@@@@AB@@@@A@AA@@@@@A@C@@@A@@@A@@@A@A@@@@C@C@AAE@A@A@@@BB@B@@BB@@@@@B@@BB@@@B@@@B@@B@@@@@@B@@@@@@A@@@A@A@AB@@@@@A@@@@A@@@A@CAA@@@A@@@A@@@@@@AA@@@A@@@@@@@@@AA@@@@A@@@@@AA@@@@@@A@@@@@AA@@A@@@@@A@@@@@@@A@@@@AA@C@@@@@@@@@@C@A@@@@@@@@@@C@@B@@@B@@A@@@A@A@@@ABA@A@@@C@@@@@AA@@A@@@A@A@@@A@@@@@A@A@@@A@@@@@A@A@@@AB@@@@@@@B@@@@@@A@@@AB@@@B@B@B@@@@@@@B@@@B@@@@@B@@@B@B@@@@@@@B@BA@C@@@@B@@@@@@@@@@@@@@@@@@@@@@BB@@@@@@@@BB@@@@@@@B@@@@@@@B@@@@@B@@AB@@@B@@@@A@@@@B@@@@A@@@@@@@@B@@B@@@@@@@@B@@BB@@@@@@AB@@@@@B@@BB@@@B@@@B@@@@BDBB@@A@@@@@C@AB@@B@@B@B@B@@@@A@@@A@A@A@@@A@@@@@AB@@@@@BBDA@A@BB@BB@@BBDBB@DBDC@@B@D@B@B@B@DB@AB@B@B@B@BAB@@@D@@@@@@@@@@A@@@A@@@A@A@A@CA@@@@CE@@A@A@A@A@A@A@A@A@@@A@@@A@A@A@@@A@@@CBA@@@A@@@A@A@@@C@A@C@@@@@@@A@C@@@AAC@@@@B@B@@C@A@A@A@A@@@E@C@@@A@A@@@@@A@ABA@A@@@@@A@A@A@A@@@@@A@@@@@CB@@C@@@C@@@A@AB@@C@@@A@A@@@@A@A@A@@A@@BA@@A@@@@@@@BA@@@B@@@@DC@@@@@@A@@@@@A@@@@A@@@@@@A@C@A@@@AA@@@A@A@@@@@AA@@@@@@A@A@@@C@@@BB@BA@@@A@A@@@@@A@A@A@@@@@A@@BA@@@@@@@A@@@@@ABA@A@@@C@A@@@AAA@A@A@@B@B@B@B@BA@@@C@@@@B@@@FA@@@A@@@@@@@@BA@@@A@@B@@@@@@B@AB@BC@A@A@GA@B@B@@CAC@@@A@@AAA@@@@A@B@@B@@@B@@@@@D@BBD@B@D@BBB@DBD@B@DBDBB@D@DBD@@ABA@@@A@@@C@@@A@A@A@A@@@@B@@@B@@@@@B@@@@A@A@ABC@@@@@@B@@@@@B@@@@@B@B@@@@B@@@@@@B@@@@@BB@@B@@@B@@BB@@@B@@@@@B@@BB@@D@DA@B@@@BBBA@EBA@A@@@@BBB@@BB@BBB@B@@ABA@A@CB@@@@@@BB@@@B@@B@@B@@@BB@BB@@@@@BB@@@@B@@BB@@@@@B@@BB@@@B@@@B@B@@@@@B@@@@@B@@B@@B@@@B@@@@@BB@@@D@@@@DBB@@@B@@@B@BBB@@A@A@@@A@@@@@@AA@A@A@ABA@@B@B@@@B@@@@A@@BBB@@@B@B@B@@@@@@@@@@@BBB@B@D@@@@@B@@@D@@BB@B@B@@@B@@@@@@A@A@@@A@A@@@A@A@@@CB@@C@@@A@@@A@@@A@A@A@@@A@@@A@A@A@@@A@ABA@@@@@@AA@@B@@@B@@@B@B@B@@@@@B@B@B@@@B@B@@@@@B@@@@@B@@@@@B@@@@@@@B@@@B@@@B@B@B@D@@@@@@@B@@@B@B@@@B@B@@@B@B@B@D@B@B@B@DAB@@@D@B@@@D@@@@@D@@@B@@@B@B@@@@A@A@@@C@C@C@C@C@@@C@@@@H@V@F@H@N@D@H@@@B@@B@B@@@@@AD@@@B@@@@@B@@@B@@BB@@@@@B@@@@@@@@@@@@@@B@@@B@@@@@@@B@@@@@B@B@@@@@@@B@@@@@@@@B@@BB@@@D@@@@B@@@@@@BBB@DBB@B@B@@@BBB@@@B@B@@BB@@@B@@@@@B@@@@@B@@@@@B@@@@@B@@@D@@BB@B@B@B@B@@B@B@@@BB@@@B@@@@@@@@BB@DBB@BBD@@B@@@BBB@@@BBB@@@BB@@@@@B@B@@@BB@B@B@B@B@@@@@B@@@@@@@@@@BBB@@BB@@BB@@@@@B@BBB@B@BBB@B@@@@@@BAB@@@@@@@@B@@BB@B@D@@@@B@@AB@@@@A@D@B@@BB@@@B@@@D@@@B@@@@BB@@@B@@@@@@B@@@B@@@@@@@@@@@@B@@@B@@@@@B@@@@@@@B@@@@@@B@@@@@@@@@@B@@@@@@@@@@@@@@@B@@@@@@@@@@@B@@B@@B@@@@@@@@@@@@@@@B@@@@@@@@@B@@@@@@A@@@@@@@@@@@@@@@@@@@@B@@@@@B@@@B@@@B@@@B@@@B@@@@@@@@@@@@@@B@@@D@BB@@@@@B@L@JEB@@A@@@@@@@@@@@@@@@@@@@@@@B@@@@A@@@@B@@@@@@@@@@A@@@@@@@@@A@@@@@@@@@@@@@A@@@@@@@@@@B@@@@@@@@@@@@@B@@@@@@@@@B@@@@@B@@@@FL@B@@@B@@B@@@@@@B@@@@@@@@@BB@@@@@@@@@@@@@@@@@@B@@@@@B@@J@XEDFHABDB@BDA@@BA@@@BB@B@@BD@@@@DBB@@@B@B@@@BD@DPCD@AICBC@AA@@A@A@A@ABAA@@@@@@@@C@@EC@@ABA@@B@@BBA@@@@C@@AB@@C@@D@@DB@@DD@@@@@BB@AD@@BD@@BD@@@B@@AD@F@@@@@@CLABBF@@AB@@B@@B@J@@@@A@C@A@ABBB@@BB@@@@@B@@@@@AA@AFBD@JDFBD@HA@F@BD@@GP@VBAFHBP@CLH@ERABHBHDFAB@@@@@VE@AFAF@AGQEAABEBAXLHGFDBDVABCBB@BB@@@FAJEJCLGDDBBDHDADHB@BAEID@XGCGPAB@ACF@@A@@AGPAXAbGTC^KPGEC@ACC@AB@LC@C@AE@CQ@GlCBJ@BB@BBFFJGDCDAHEFCLCHAXKJCHAPGLEHEVQHKHGHINQFGTUHMNOPQNMTOFCPMRMJGNIRMJGLEJCEG@@@@@@CCEEGGCCGEKKKKMKA@MHOHECKKCCPISQDALGFCPGDABCA@A@ECSKOGOGOIQGIC@@A@CDCBEBCAAO@@CAMGCAA@OG@@@ADBBAAGBEJD@AD@B@BC@GPEDBBB@DD@B@BB@@`DB@@C@@aA@AAAAI@EB@@AA@@@AGBS@OEEAC@ECDA@E@AG@@BEBA@CEABE@CF@F@@IF@DADI@@@C@C@AG@@CH@DACAE@AAD@H@BCAKA@@@@GEI@CA@@EE@A@BADAAEDC@GACCCECA@AAAAB@@@@@@A@@@A@@@A@@@@BA@@@A@@@@@@@A@@@AA@A@@@AB@A@CA@AAA@@@@@A@@@@AA@A@A@@@AAA@@@A@@@@@@@@@AA@@@@@@@AB@@A@A@@@AA@@@A@@@@@@@@@A@A@A@@@A@@@A@A@A@CB@@A@@@A@A@@A@@@A@@AA@@@@CB@A@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@A@@@@@@@@@@A@@@@@@@A@@@@@@AAA@C@@@@@AA@B@@CC@@@C@C@A@@@@@A@A@@@A@@@@A@@@A@@@A@@@A@@@@@A@@ABA@A@C@CBC@@@C@A@@@"],
                "encodeOffsets": [[119909, 39513]]
            }
        }],
        "UTF8Encoding": true
    });
}));