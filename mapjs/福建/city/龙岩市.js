(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('南平市', {"type":"FeatureCollection","features":[{"type":"Feature","id":"350702","properties":{"name":"延平区","cp":[118.178918,26.636079],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@ABABABABA@ABCBA@A@A@AD@BAD@@@B@B@BBDB@B@BBBBBB@HBB@FADAD@DAD@D@DAH@FBD@FBF@DAF@@@F@FADEDE@G@E@EFEJIDIDCFED@BBBBBDFAFADCFGHEHGJ@DBFFFDJB@B@BA@EBADBBDBJ@LDHDJHDDBDDDBFBDD@FAD@D@@B@D@B@DABAFADAD@FAF@D@FAFAFAD@FBBBDBDBD@BB@FHBD@BABE@AB@BFFBNBH@FBDDBL@LAL@FADCDE@G@OBM@GCAACCIBIBIDAD@D@D@@C@G@CA@CC@AAA@AAAAAA@@AA@@A@@@A@CDCDE@CAGCAEA@CBE@E@AC@E@@@BC@CBG@@@ABCD@NBFADC@C@ICECG@EBE@IBGHED@FDFDD@BA@CBAFABABC@GAEDEHAFE@ACCCA@EDCHERIH@D@H@F@FG@ADA@@D@BBBDF@DCDEHERIFGBCDCB@F@BB@FFFHFFFDDH@FBF@DA@A@@BABAB@@DFPB@F@@@@@@@D@BA@A@AB@@EBCBCFAH@D@FEBEACE@E@EBCA@C@G@CFAF@DDHFB@BCBEP[B@DCF@B@HCDABADABEFCDBBDADBDBDD@F@DB@B@DAB@BB@B@DA@ADADBDABA@CBCD@B@BBB@BABCD@DB@@B@BB@BB@B@@B@D@BBD@B@@B@BADABA@@@AD@F@FBHHHD@D@FAB@DBFBFABEDED@B@BB@BBF@BB@BBB@BDAD@FADBB@BDBFDFFFD@D@D@FAB@D@D@BADCDAB@B@@D@HDDFDDD@@B@B@AA@AAC@A@AB@BBDDBBHACKBABCAAAAAAAAA@AAAAAAAC@A@@ACBABADCFCDAFBD@HAFAFCDADA@ABEBE@EEEEG@EBEAE@EAECEAGE@CGBG@ECGAEDEDK@G@CCEAE@E@EAEACBG@GCI@@@@AA@CB@AAAADGFILEJAHA@@DAFBFDFDF@FAD@FE@ECEEECCDGBE@IEIEKEKEGACBEDGBI@IEICICCEGE@C@@FADC@CCCCKEKCECEAECEGCEAEBE@CAECCCAAABAJCFEDGAA@A@A@A@A@CAA@@AAA@CAAA@AAA@CAAAAC@CACECA@E@E@@@AAABI@GDA@G@@D@JEHADC@E@@@A@G@MAGBAFAD@DDBFDDFAD@F@FB@B@BBBBBAB@D@@@@BBD@DC@CCGAE@GDCFADA@E@EAEAAL@FDDDFHDDDBB@@@B@BBBBDDFBJADADEDEFCFALAFCHEFCJCB@FCFC@CACAA@CDEBECCOICC@ADCBABCDEBCAGDGBCHGBE@CBC@GAG@EAABCBA@@BAAGBGBEBEBC@@BABEBEAG@EAAE@CFEFCHEF@DABCFCDGBGAG@A@CFEFCDAH@D@@@DCJ@F@BA@C@CAC@GDCAEA@B@@@BAD@B@B@BAB@DAFEFCBC@CAAACDC@ABCFAFEDCHDFDDADA@K@A@A@A@ABA@K@IAECCBEBAD@DBFDFAFGFGFMBMACAAEAAEAG@CBAAC@CDCFADEJAHGHEFKBABA@@BABAB@BA@ABA@CACAA@AAAAAAAAAACAAA@@CAAAC@CACAA@@AAA@AA@AAA@CA@@ACAAA@AAA@@@@@MGGCCDAH@@@@@F@@AB@BABABA@CBA@A@@@GBCBAD@DADCDCFAD@BCBABAD@H@D@F@B@DBBBB@BBBBBBBDDBBB@@@BBBAB@BABABA@AB@@ABABAB@BA@AB@@@BAB@B@@@BBBB@@BBBB@D@B@BBBAD@B@BABAB@BABBB@BB@@B@@@B@BA@A@A@A@AAA@AA@@@A@EACAAA@C@CBABABA@C@C@G@G@E@A@C@CAG@C@ACCAI@K@I@EBEDCDCF@DABGBKFABAAAC@AKGAAA@A@@F@@A@A@CAEACBCB@BCNAFADA@CAAE@A@A@A@@C@C@C@A@AAAAEAEBCBABCH@F@FDFFDDBD@BBFT@D@@A@A@AACAKIAAC@G@GBE@AB@DAFABA@QIAA@A@ABCDCBA@EAEGAGEEA@@A@ABGJCBCBK@G@C@@AGGGKACBA@A@ADABA@A@C@@@CACCACCCAC@CBG@IBE@@B@DDFBB@BA@A@A@C@A@CBC@A@A@@@C@@@ED@@ADABC@@@A@ICAAA@@A@A@E@EBC@CCCAAA@AAC@A@AAAA@AAAA@AAA@@AA@C@C@CAAA@@AAEAA@A@@BCB@D@@CBCBCDA@A@AAAB@@ABC@A@@@AAC@CAAA@C@E@CAAAACBA@AAAAA@EDA@C@AA[SCCAAA@AB@@@D@H@DADABA@A@E@I@A@ABCBI@@B@B@B@BDDBB@B@BA@CD@D@D@@A@A@CAC@EBCDABABAACAC@E@C@@B@D@B@BCBABAD@DBDDF@DADADADCD@B@B@BE@C@A@EFA@C@CACAA@CDAF@F@D@BCBCBCBAB@DABBBB@@@BB@B@D@DBBDBDB@BCDEDEFAF@FBD@BCBIFEBEAEACECEAA@ACBCD@DELAF@F@DBD@@FDD@D@BB@BABCDAD@DAB@BB@B@DJDDB@B@BA@ABBBB@D@BCDCDEBC@E@MEEAC@AB@BABE@EACACAC@@@@@ABAB@@@BA@@@A@@@@B@DDFBD@B@D@L@DCDOLGF@D@B@@@@@B@@BB@@B@@@@D@F@BDDLPFHHFDD@BABCBEAC@GBCDADCBCBE@C@AAC@A@CDC@AA@A@ABAFE@EACACCCCACBEDCDA@CAECA@C@CBGBCACAAAA@ABADADADEDEBA@A@AAKQCACACCEAC@G@GBC@ABAB@F@DCBCAAAAAAAA@AD@D@D@B@@@@A@CCA@ICMECACGCC@@@@ABAB@B@BAD@BAB@BAB@@BDBB@BBB@@AHCHADGAE@EB@BHR@@@B@DAFCDCBE@CBAF@H@FAFADA@CB@@BFBBB@BAD@DBDD@@D@D@B@@@B@D@DDDFBDABCBGBG@AB@@A@@HGDCB@DBH@@FDDFBF@DADABC@A@@ADC@A@@@AGDCBCDC@AB@BBBB@@@BBBBB@@B@B@B@@DDBBADA@@BB@BBD@BDBCB@BAB@B@@AHAJADBBDBF@F@D@@@H@FBFBB@BAD@FDHDFDFBD@FBBD@FBFB@B@D@D@D@B@F@D@DBFBDBDBDBBDDBBBD@D@DAFAD@DBF@DAJ@H@H@HBDH@FBFDDDJJFDFBHB`@D@D@@A@C@E@G@EDED@BBDDBDFHDFB@D@F@H@DBBB@DAFCPAD@BBBD@H@DDDBDFBBFBF@F@DAB@FADB@DBB@@BDFBBD@BAFCDCD@FBFBBFBNCLAJ@JBHFLJFFB@BDJH@F@F@FBBDBFAHEJKDADC@A@@@AB@DABC@@@BBFBFDHDBBAFCDEFAFAFCB@@A@C@C@CACBAAE@@AAAA@C@@@CBI@CHIFBJBD@FAB@"],"encodeOffsets":[[120941,27461]]}},{"type":"Feature","id":"350721","properties":{"name":"顺昌县","cp":[117.80771,26.792851],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@ABABABAB@BAB@BABA@@DGHK@@@A@ABABA@ABA@A@A@A@A@AAA@AC@AA@@C@AAA@A@AA@A@ABA@@@C@ABC@A@A@A@C@AAAAC@A@A@AAA@A@A@C@A@A@AB@BAB@B@D@BBD@@BD@BBB@BBB@DBBBB@DBB@D@B@D@B@B@B@D@@@D@B@DAD@@AD@BABABABABAB@BA@ABCDADCHCHE@EAAECC@AA@ACCAACA@A@A@C@A@A@A@A@A@CB@@A@@@A@CCECEACBABABABBHHBBD@BAB@BB@D@BD@HABABAB@DBBBBBDBDAB@AC@AAIAC@A@A@AB@DA@@B@B@B@B@BABAB@AAAAA@ACDKFIHIBCDCFCBCDAAAAAC@AAAABADCD@D@BDFDHPBBD@DCLITINGHEJGFEJEFAF@BDBD@F@F@FDDBB@B@DBDDBRJB@D@FAD@DBBBDBD@FCJCJEHEPKFE@AAABCDAB@BBBBHFJDHDF@DCHEDADCBG@IFGDCDEFE@C@@A@E@C@I@EAEEIS@CBEDCFCB@D@FBBBD@F@HCDCDEACAG@O@EBGDCDABA@@CCCCEGMKGECA@A@C@C@CCCC@CBCBCBC@CACIACBAB@FAF@BC@CCAQGE@CAECGIOIG@CAEBCDAD@FAXABCDCBEBGBEDCDA@@@@C@C@CC@A@AFADCBE@A@ABADABAB@@@@A@A@ACCAAG@CECECIGC@ECCCAEEEEAEECECCCA@@G@A@EBC@IAEAGJ@DAJ@D@@@DBBBB@@BFABBD@D@D@D@BA@EDEBEBCFEDABCACGAEAE@A@@ADCBA@@B@@@BCDCBILGFEBCAAA@E@E@EIGACA@EEKIGEIAI@KBMDEAAAAE@EDCDCBE@AACEAAC@@AA@CCAEBA@CBE@E@EAAACECACCG@C@AA@ABCDOBE@CAACAG@E@C@A@CEEGACCCAAC@CF@F@H@F@D@BC@C@_@GAEAECIICCECEAG@AC@G@G@GBI@CAE@CBCBE@C@CACAACCAAACACACAE@C@C@E@A@C@C@C@AEAEAC@AA@EACCECECG@EBC@AAAAE@E@G@@@C@EAEACCAIBGB@BA@A@ABA@ADC@AD@BCBCBA@A@CAGCGAA@AA@CAAACA@AAA@C@AAGA@@A@IFCBCAAEC@ABCDOBKCKE@@C@A@E@C@@@CB@@EAKGCICCCBIFEDE@KACACAC@ABADAFCBABA@AAAABG@@AAA@ABABABEBC@ECGCCBCAA@CACAC@EAAAECAAAAACAAAC@AAAAC@C@@A@IBIBCBCACE@EECG@EAC@GPAHFDHDBF@FCBG@KAG@@@A@CBC@E@AAA@ABA@@BAB@DGBAB@B@BB@BAB@D@DBBBABABCD@D@D@B@@ABCBC@@@MBMF@@AAAC@@CDADCBC@GBEBCBAB@BBBFFDB@D@DCBCBC@E@E@EDADABBFBDD@F@BBBDFJBBBB@BBD@B@DBBBB@BDBBB@@D@B@BAD@DAD@B@B@@B@@@BBBBBBFFFDBHBHBFBFDDHBDBD@@DD@BBBBB@DBD@B@B@B@FBHBBBBBBFFBBD@BBBBDDDFBB@@@B@BA@@B@BABABABAB@B@B@B@@@D@D@B@DBBD@BD@B@BABGFOJABADABABABABADAD@BAB@BABABABADABABADEBEFCB@BA@@B@D@D@BAB@@@BABABA@@B@B@B@B@BB@@B@B@BAB@@ABABCBAB@BA@@BADABAB@BABA@@@A@CAA@@@A@@BA@AB@BA@AB@BABABADCBADABAB@@CBCBABA@C@AB@B@BGDA@AF@DCFERE\\CDGBA@@AAAAAA@CAC@A@C@AB@BAB@BABABAD@@ABA@A@CAC@C@AA@@AAAA@AACACC@A@A@ABA@CBA@CBAB@@E@C@EAGCECAAAAC@GDCFEDAD@D@B@D@BAD@B@D@D@B@DBB@DBDBBDFBBFBB@F@DBD@F@DBFBD@BB@BBB@@@D@B@B@B@D@BBDBF@LBHB@LDBBBFBDBB@@BBFD@@@B@B@BB@DBB@BADAD@@BABCDCD@DBFDBFABCFEBCDCF@VFFBDADCDCB@@ABC@ACC@G@IAK@KBEBA@EAA@AAE@E@EBEBCBADEFEDCDA@ADAL@J@NDHDFBD@DCDEDOBGBEBADAD@BBDDDBDBF@BAD@BBB@BDDBDB\\DHLBFDBF@B@D@BCBCBAD@@BDBDBFAF@H@FDBBNNDDFDDFDDD@D@BAD@@B@@@D@DBBBDF@D@BB@B@LBD@DDDDDBD@D@FABCBABAB@B@BD@HBNF@B@BABABA@CBABABABBDBB@@BBBD@B@B@@@DBBBBBB@@DBB@BBBBBB@B@DABABAB@@AB@B@B@D@BA@AB@@ABABABABAB@BABAB@D@B@B@B@B@B@D@@@DABAB@B@DBB@D@BBB@DBB@B@D@BBB@BBB@B@B@BBD@B@@BDBBBBBBBBBB@BBBBB@@BBDBB@B@BBD@B@DBB@BBB@DBBBB@BBB@BBBBB@BDBB@BBB@B@BBB@BBBBBBBBBB@BBB@D@@@DBB@@BBBBB@BBD@BBB@BBD@B@B@BBB@B@B@B@D@B@B@BBB@DBB@BBB@BBBBD@@BBBBBB@@DBBB@BBBB@BBBB@BB@BB@BBB@D@@BD@B@BBB@@BDB@BBDB@@D@BBDAD@D@D@DDDDFJHHDDDFFFBBB@HJNDHA@@@ABA@ADCDCBAB@BADB@@HBNBJBHBFDBBBABAACACAEBADCBADABABABAF@DAB@BABA@EBGAEACAEEG@ADCBCBC@C@C@CBABAD@DAF@BBBBBB@F@DDBD@JAHAFAFCDCDADCDCDABE@CA@CA@AACBGBGDGBEBADADCDAF@D@D@DBDBFBHB"],"encodeOffsets":[[120816,27762]]}},{"type":"Feature","id":"350703","properties":{"name":"建阳区","cp":[118.12267,27.332067],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@BAB@FADAFADCDABEBAFC@@BABADADCDADAF@DBFAD@@ABC@CAECGBC@ADAD@D@D@F@HBNBH@H@FADABADADEDGBEBEBG@CACCC@AD@DAD@FEBCDADI@C@EACACCEAA@I@CAECGCGAGCECGAECAACEA@A@ADCDCBABCBG@G@EBCBCDADAPGFADABABA@ABCB@D@D@F@B@D@FADABADCDAFAB@DADAB@D@BDD@DABABCB@D@DBD@BABAFADADCDABA@C@C@E@A@EAC@G@C@E@C@CACCGAECGAE@@CCACBADADADBDBFBH@DADADEBALGFCDBFBD@DDDBDFBD@FAH@BBB@@D@NCDCDAD@D@BBBB@BD@DBDBBDBFBDBD@DBDB@D@B@HEBCDC@CDCBEBEBEBCBAD@DBDBFBB@BABC@CCC@C@ADCDABAHAFBFBBA@CBCAGAEACACAAAABCBA@ADADCFAFAF@DAFAF@D@BBDDD@B@F@F@D@D@BABCDCBCD@DBF@FDH@FABADABADC@ADCB@D@DBDBFFFDD@D@F@DBJFDBDBFBDBHDFFDDBBDBDBFBB@BB@@DBB@B@BBB@B@BB@@BAB@BABABABCBABAB@BAD@DBFBBB@@BBBB@B@BB@@BBB@BB@B@B@B@B@DBD@D@B@D@BAFABADAB@D@BABBBB@BB@BBB@BBD@B@@@BBBBBBBBBBBDB@BB@B@@AB@BABQLCFCH@H@@BB@B@BBB@BB@BBB@BBB@B@B@B@BAD@BADABADCDCBADCDABADB@@DBBBDBBBBB@BBD@D@B@D@B@FAD@D@B@BADB@BBBA@@BCDCB@BBBBB@BBBBBDBBDDFBB@F@D@BBBDDDDDDFDDDDDBFDDFBDBB@DCBCDAB@BBF@BHLFN@JCREN@@BB@D@FAF@HAD@FABADAF@DBDFDB@HDB@D@DCBAD@B@DBD@FAB@BG@GAE@C@ADCDA@@@CAAAA@C@CBC@EDCBCBE@C@A@CAA@CB@DAB@BC@AACACAA@EAEBC@EDADCDADAFAFAHAH@FBF@D@F@D@DADAFEBAD@D@F@HDHBFBBBDBBDB@FBRAPINE@@HADC@@B@DBHFB@BBBBDFDAB@FABBD@DDBDDHDBD@B@DADCBABABAB@BBDFDJDFDDD@D@DBBDBFDHBD@DBFDDBDDFBFFCBADAB@BBDBDDBABA@C@A@AFBHLB@BBFBB@B@DE@QDCFCDCF@D@DBBBHBFAFEFA@C@EFAFBF@FAB@@@B@B@D@D@B@BA@@@@DABCDADC@ABC@CB@BAFEDCFA@ABA@C@GBC@A@@@ADADBD@FBD@H@F@F@DABABEDCB@F@BBDBH@DAF@FCDAB@F@D@DADEBC@E@ACAAAEA@A@C@CBC@ABAB@BBB@BBBDBBD@B@@@DA@A@@DABABCBADCBEH@HDFF@D@DCD@@CB@BBD@BDBB@@ADA@@FB@@BD@B@DABBBJJ@BBBBBD@JDB@BAB@B@@B@@AD@BD@@@DFHFNFB@DBF@@@FADADA@@BBDFHFDCFAJAF@B@B@F@F@FCJCFBDDDFHDT@NDD@DEDGAGCCCCACAGBADEBAAEAACAGAC@C@@AAG@GACC@EBC@GEIGEGCECAC@C@@ECE@C@@@ABCCAECBCHCFC@@C@E@ICECEFCLAFABAAAGAK@IAACBE@GCCG@EDK@AAI@C@EAEEICGACAEEECC@A@@@CBEFEFGFEDAD@F@D@B@@AAAGKCCEKAC@A@CBCBCAEAACAGCC@@ABAFAFG@EBCBEBE@E@ABAFCBAAAAEBEFIDKBGHGHCDCDBDBDDDHHXBJAFBDHHHBPBJ@BAB@AACACCACECG@A@AA@AFEJCD@DAD@BCDEFAFAF@DADAHCL@F@DABABCBGBE@GCACAECCCCEEEEIA@CBA@@DDDDD@@AB@@AAECECE@GBAB@DABABEDAHCFAB@@AA@EACAAA@@@AB@@@D@F@BAB@AAAACC@IB@@CBGFEDGBEAAAECG@EAAE@ADCHADAA@CCG@GBGAC@EBADCBCACAC@EDEJIFKBIAICGCKAA@A@A@E@@AACCAAA@@CAC@A@@B@BABA@EBCAAACCCCAAA@A@A@A@ACCA@@CAAAE@GBC@AAAACEACCAEA@@@@AAA@@@C@@BCFABA@AB@@AACAAAEAAA@A@@@@@@@AB@B@B@@@DCBABA@A@C@@BQIKCAG@GDGBC@CBCAA@AAAE@G@CCCCACAA@E@C@C@ABEAEAIAAAEBCBC@C@AACEGCECC@EACBEDA@@NCLIF@AA@EE@A@CBEACCAKE@@AAE@AACACAEGCCC@A@A@AB@F@D@B@B@BC@EAAAGAEBEBEDIDA@E@@@ABAB@@A@AACAA@A@@@@B@B@DEHGHCDADC@EBCB@BCBAFCF@H@B@@A@C@A@AAC@A@ABA@A@AAEACAACA@AAA@AACAA@A@CAA@@@@@AAA@EAE@E@E@C@A@AACAC@A@AAA@AAC@E@A@EAGAA@ABA@ABC@A@@BA@@@A@AAAAA@C@A@@A@@@A@AAAAAAA@@@@GAGACCEECAAC@EDEACAAA@CBA@@ABABCBCAEAC@CACA@C@EAC@CAAE@GFCBCBEBCACACCCCCAEBG@KBCBABCB@D@DCB@BE@E@ABCBCDC@EAEACACC@G@A@@@CCCAC@CBEBEDCBC@A@ACAC@C@AC@CBABABEBE@E@C@CACCCEEEA@EAE@G@IBC@CAACAEAACCCAE@A@GCIEMECAEACACCACEAGAC@EAGCCAICEAC@C@CBADCBEBABCAA@CCIGCEAAACBEAGCCAEACACC@CBC@E@C@CAGAEACACAC@C@E@CBCDCBABAFCHAHAHBD@BDBB@@DAFCBCDCDCBCDEDEBGBIBC@CA@C@EAAAAAAE@CBC@ABAB@D@D@DADADCD@BFHBFBDBFAH@FABABA@CBE@ABABABCBABCDABBFBDBDABABAAECGAIAMAGA@@CAABA@ABCDCD@BAB@B@@GBMCGIA@AAEECECCGGEICCCCC@C@C@CBBF@DBF@DF@FBBDBFCHCN@B@B@DCDA@C@G@EAE@E@CBCBGFEDGBGBCBCBCBABADAHAFABEDCBEDABCBCBADABCHAF@BABC@CBA@@B@BBF@D@BC@ABG@CBE@EBCBA@CAA@CCAAAEAGAC@CAAA@CAC@E@C@CAA@ACCEACAE@ACAC@EAC@C@C@E@CBEBABCBAB@D@@BBFFDBD@@BBFAFAD@B@@AFADADAF@DBFDHDFDDFF@BBD@DAF@F@HBHBF@FBBHDDDDBBBBD@DADADAB@B@B@@@@@@@@@B@@@@BB@@@@@BBB@@@B@@@@@@B@@B@@@@@@B@@@@B@@B@@@@@@B@BADE@C@_BA@CBCDEDAB@D@BABCBE@EB@BBFFDDBBDBD@D@DADCDCBEBEBIBE@AD@D@F@FAFADADCDCBEBG@EDGFEBAD@FFD@FCFIFAB@F@HBDBDFDBDBF@F@F@FADADCDEBEBEBEDABABCFAH@HCHAHAF@FBF@D@DEHGHABCBC@C@CBABEH@DABABCBA@ECC@C@C@G@IAE@C@CBCBABCB@D@D@FDD@JBF@DCBABCB@B@D@FADEBC@ADEBEFGDCBAB@D@BBD@BABAHAJCHCDABABC@ABABABAD@DCDABCDA@A@AAA@@@A@@BA@AB@@AB@BBBDB@BBD@BB@DFDDDDD@HBFBBD@L@FBDBDDFDFFDBH@DCBCBA@ABBD@BBDBFBHBFADAF@DB@BBDBD@BDBBDBBDDBBDDDDBB@BAF@B@DBDBJBFBDDBBDFDBBDFBFH@FBDBBB@D@DBDB@BABADADADADBDBBBBDBDDBDDDBFBD@D@FBDBFBBDDB@DBB@DBDBDBBDDF"],"encodeOffsets":[[120457,28390]]}},{"type":"Feature","id":"350723","properties":{"name":"光泽县","cp":[117.337897,27.542803],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@BCBCBA@A@A@C@CBC@CBCBABCBABABAB@BAB@BAF@DDFBF@DBDBFBJ@F@DDD@DCDADAD@@@D@BCBABCBC@AB@DBBDDBD@BABCBABCBCDABADADABABA@@B@@BB@@BB@BB@DB@D@BB@B@BAFCB@BBBDBDBFFJAD@DAH@DDFB@BBBDBDDBDBBBFBDDBDBBD@BBD@D@D@FBDBFAFAD@DAFCBCBCDEFEDCDCDABABA@C@AAC@CBCBADCHGLIFEDAF@BBDBDBD@FDBBA@@BABA@AB@D@H@B@BB@B@B@B@BB@@BBKVGNADEDC@@B@@@@@@@DFNBB@BD@BBDBBB@BB@@DAB@@@BB@@@DBD@@@BDDDBBBBBBB@B@F@B@@@BA@AB@B@B@DABCBABA@@B@B@DBDB@@B@D@D@B@DADAD@BABA@@@@B@BBB@D@@@BA@@DAHAHCHADCDADBB@DBB@B@DBDB@BBBB@H@B@B@DBB@DBF@DCDB@@@@@B@BAB@H@D@DBD@DAFAB@F@@@B@@BJDFBBDBB@D@FA@@FBDBDBD@DBF@H@F@D@DADABBD@BBBDBDDFBBDBDBB@B@D@BAB@DADBBBBD@JDDBFDBDDBDD@DBDB@BBB@DADABAFAF@FDJD@BABAHCBBD@DAD@D@D@@BBBBDBBDD@BBBDBBDBF@FAFCFADCFAFCF@DBD@H@HBHBF@HBHBFBF@DADADEFCDED@@E@I@GBGDADBLDRBBBD@BABABADB@@@BB@@B@@AB@@@B@@@B@@A@@@A@@B@@@B@BA@@@@@BB@DBBBB@F@H@HDLJ@LBBDBBDBBFHBDDB@@D@B@F@DAFCDCDCBIBIAC@CAC@ABA@CACAA@C@CB@DADABABC@@@AD@D@B@D@DB@@B@BBB@@@BBBB@B@D@B@@@BBDDDDDDFFJBDDDDDD@BBDBHD@@B@@@D@B@BABAB@@@B@BBB@@@B@BBBBFDDDB@D@F@H@FBFBDDBBDFDDJHHFDDDDBB@BBD@DBBBBDBFBDBDBBD@BBDBBBDBBFBFJFBBBF@D@BABC@@@A@ABABAB@DA@@D@@AB@@A@AB@DAB@B@BB@BFJDDHHHDHFJFFDDDFDBFBDBF@F@FBF@BDDFDFDFDBBD@D@D@BAB@@C@C@CBABABADAHAFADAFADBD@BADADADABCBCBADA@ABCAAAE@CAAACBEBGDCDCDADA@@HNLHJCDCAIACB@BA@C@C@E@E@EBABC@AACACAC@A@C@ABCBAFADADCBABE@CBCBADABCDCBAAEBCAGAGBGBCB@B@BA@ADCB@FAD@@@DBD@B@B@DCBAFAJCD@BADAB@FAFADAD@FADCHEHCHADADA@ABCBCBCBEBCBCBABADADABAD@AECGAECEAGAE@C@ABCDABA@ABCCC@EAC@C@CCACCCCEACACCCCECEACCAAAAACAECI@IAE@CCAAAC@C@C@A@A@AC@C@GAI@G@EAACEACCACACAA@CAA@CCAAAEAC@E@CACAECCACCCCAAAAAACBCBCBCBCBA@ACACAC@A@AAAC@EEGEAACCACEAACCEAIACACAA@E@ABA@CACCACCAACCAAAACC@CAAAA@@CBEBCAEAGAEAC@AACBAB@DADA@CAGECCECEACAC@E@KACEAGAC@CCCCCEA@ADAHABGBMACCC@AAA@A@A@C@C@EACAE@CBEBA@A@C@A@A@@A@@BABA@CBA@@@@@@@C@A@@A@@@CA@@AMEM@AA@CCACAA@C@A@A@A@@C@A@A@@@CFCBA@C@C@A@C@CB@@AA@@@A@C@CAAAAA@AAC@A@C@GBCDCDA@A@@@AAAACKACQOUE[GA@CBA@AAAA@C@CCIAE@C@A@AA@CA@A@CDCHCDCBCBCBEAEAI@CBC@A@@BE@CBCAC@C@EBCDEFEFCBCB@BAAAC@C@EBEDGBIDG@G@E@EAE@EAE@EACCC@C@CACDEDC@CBE@CACCKIEEECC@CAA@CBABCBA@CCCEACCCACCAA@CBABCBC@ABAACDGLGB@@A@AA@@A@A@AA@@@@@@BABCBA@@@CCACAA@EKFQAA@E@E@CAEAAAAA@G@C@EBCAA@AAACCM@EDEDCDGBC@ACCACCA@E@CDG@AAAAAAACCAAACAC@CBCDAB@BABCACACAABCDC@C@E@ABCFCFE@C@ACC@AAAA@KAO@IEEE@G@CAAEAC@CBEBC@E@C@GAE@CBCBC@@@GFEAGEEGCAEDCDCBCECEC@EBEACCABABADABCBAAC@E@ABC@A@@CECIAG@E@@@C@@@EACBKBA@@BBHBDDBBFBD@FAD@BAB@@A@A@@@A@C@A@A@C@C@A@EBCBIDCBCBCAAAA@A@@@@@EFCBCFCFAFBD@FBFBD@F@FAFADBDBD@BBD@DADADCFAF@BDBBBD@DB@B@D@F@F@BBDLDBBFBFDFBDDBDDDBD@FBDBDBHBFBFABABABADAB@@@BABA@@B@@@B@B@D@F@LAF@B@B@@ABA@CAC@A@IFCDCD@DBF@DCD@DBDBDBB@DABCDCBCD@F@B@BBD@BDDBBDD@B@@B@DBABADA@A@@@ABAD@FADADCBAB@@AF@F@J@FBH@H@JAFABCFC@CBEBAB@BA@@B@B@BABA@BB@D@B@BADCFCDCDCBCAC@AA@AACACACCACAECACAAAECCCCCACAABADAFABC@A@A@CA@@CAC@"],"encodeOffsets":[[119851,28209]]}},{"type":"Feature","id":"350725","properties":{"name":"政和县","cp":[118.858661,27.365398],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@AEAC@A@A@EBIBEBIDCFEDCDCDCBG@E@A@AACEECEAAKEI@C@AAAA@G@C@A@CBCBE@EICEA@C@C@AACECAC@ABCBCBC@EAA@CBCC@C@CBC@C@A@CAAA@CAA@CAAA@CBCBCBCACACCAEACCGEKB@BE@EAC@CA@CA@@@G@OBKBEBEACG@C@BCDABAB@BE@AB@DADBBAD@BC@CDCBCDCHEDCHE@@B@FBBDDBB@@@B@D@B@@A@@@@@ABC@@@@B@@@@BB@@@B@DCBABAB@@ABB@B@@@@B@B@DA@AACAA@CHED@BC@CBABAFADC@ABA@ACEACAECA@G@AA@@@A@A@AB@DAD@BA@EBA@A@AA@AA@A@A@A@@CAAA@@@AD@B@FCFCBA@CCAAABCDCDBJ@DAD@H@@CBC@@BCAC@IFA@E@C@ABAB@BCBE@C@AAAC@C@C@@EWAGKCICIAEBCDA@ACAA@@BABACE@K@K@M@GCEAC@C@AF@FBF@HADEDIAKEUCKAGBCJEJ@JEFAB@DABABECCAA@A@AACA@EAECACAAA@ABABADABABIDA@@AC@@AEAC@A@A@AACAEAE@CACAAA@CAG@C@ABADCACAAAAA@A@AB@@A@AAAAEAC@AACAEAIBIBG@CAAA@E@EBG@ABAFCDEDKBMACA@EAC@KAIA@BBD@DABCDA@AB@F@@ADA@@@C@A@C@AD@F@DADABC@CBC@KJAB@D@D@@DH@HCDWBGDAB@@AAC@@BC@AACAC@ADAAACE@A@AB@DBHA@CCEEA@CHIFE@AA@C@A@A@@ABC@C@EAC@C@MBC@AAA@AACCCCAAA@CBC@ABADABA@@@AA@@ACAAA@C@CBAFCBA@A@AD@DAB@BBBBBJLDJ@BADIDCBCFBFBH@FAHALALAHCHEDA@IAE@ABEBA@ABGDEBE@EAIBEBGB@@EDADA@C@@BADCDEBABEDEDEBA@ABGAA@ABABEBGBKFKJILEH@DNDF@@B@D@BA@A@A@A@CBC@C@EAA@A@A@ABABCB@@EACAA@ABCHAHC@GDABBBBB@DADCD@BDBDBBD@BA@CB@BAJAH@DBD@B@@ABCB@BAD@DAD@B@@E@ABBF@D@BBBBBHD@B@B@@C@QBC@A@AB@BABABMBG@GDGBCBABCDABABC@A@C@ECC@CACBCDABA@A@MCA@GICECCAAA@CBA@E@@A@ABA@@AACBCBABABC@C@ECEBC@ABAFBFBH@F@@E@CBABAB@DABGFCDEBA@GCKAEAAACAC@AF@FADA@@@EBKBE@Q@G@E@EAA@E@MFE@IBCB@@C@AB@BA@@@@@C@@@CACBEBAB@D@@BBABABABABABBB@B@BAB@@AAACC@@HAFAHADABCBE@K@GDCBCBE@EBEBCFADC@CBC@IDEF@BBBB@H@FDBDDDDBBBA@ABI@OAGAGGACBEAIGWCGCCCACACDGDGHAHCLEJAFBFBBABEDAB@B@FAFAFAD@FEHEBAB@BD@HDDBBBBFADAD@D@BBDFLDDHLBB@BA@C@E@C@CBEFEHEFAF@D@@@BDDFFBFBDDHFJBF@F@DBJ@BCL@FDHHDF@DABB@JBLBHBBBABEDKFEFDJDF@D@@@EDGDADFDDBAD@B@@BADCDCBGHCLALCHAHBJBB@RINGFCFADAF@F@FCDEDCDADABCDCBG@CB@BAAAAE@GAA@@ACAC@ABC@AB@@@@ACAA@C@AA@C@C@A@@@ABABAH@D@BE@A@ABCDEDCJGBAF@DADCDADC@ABCFCHAPELANCD@FAD@BBDBFFFBDBFBBBDBDDDD@B@B@BBBDDDB@BBB@BFDHFH@HAJ@HBF@HEFAFAB@BDFHHHBBJBFAF@FAFC@@FAJAHADC@EBADAF@FDBDDBHAHBFDBDAFADBFFBHHLDHDDFFLDBB@DBB@BB@BBD@BAFAFDJDHFHFFD@BBD@BAFCDEDGBEAC@C@A@AFAFAFAFBD@FBBA@BD@B@F@B@D@FBD@D@DAB@BA@CBADAD@DAD@B@DADCBCBABADBBBDHBB@DBDBD@BADADCBNJD@D@FBDBFBFAD@D@DBDBBD@DAFBDBB@DEFEDCD@FNHBBHGHEN@JBNBHAFGLEHKHGFCD@DFNCHCBE@E@ANGDADBBBHFBBD@B@B@DA@ADEDCDAD@D@DBDBDFBBB@BBBBDDDBHDFBDBDDBBBBF@FADADADADCBCBC@CBEBE@CA@C@K@ICBCHEDC@CAE@AAC@AAGAC@C@ABAB@DADEB@B@D@B@BBDBD@D@HADCBA@@@A@EBAB@B@BBDBBBB@B@BABADADBB@DBBB@@B@BA@ABAB@D@F@FDDBD@BADADADADAFADEBAB@D@DBD@FABBBBDBBBD@FADAFAFC@@DABBHBHBD@BABABABBB@BBBBBABB@L@FFDBABE@I@EDBBBHDHAFA"],"encodeOffsets":[[122125,28079]]}},{"type":"Feature","id":"350781","properties":{"name":"邵武市","cp":[117.491544,27.337952],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@AAC@ACAAA@ABA@@BAB@@AB@@@B@BBB@B@DCBADC@CBCBABABAD@BABADCDGBIBGBA@AAC@A@CBADAHCFEFABCD@FABC@E@C@ADABADA@CAE@ICC@E@C@CDABADADAD@F@JBH@D@D@D@FDB@DABABA@CFGBADAD@D@DABAHGFG@C@CAE@EBEBGDG@GBGDEBABAFCFAFAFADCBCBC@E@E@EAEACECACAC@G@EBAJEDE@EEC@EBCFAHEFCH@FADADCBCBCBE@E@E@CBCF@JAFAFADADCBC@C@CACACCAECAE@AFAF@DABA@A@CBAFCDCDAB@`AD@F@BC@A@A@@@@A@@@@A@@A@@@@@@@@AA@@@@@@@@A@@AA@A@@@@AA@@@@@A@@@@@@@@@A@ABABCBC@CACAACACCGCAA@EAEAG@G@EBE@CAC@AEECCCECGAE@CBEBCBCBE@@@ABCBEAE@AC@CAEEAA@@@CBADABAFADAF@D@D@D@FBD@DB@BBFBDDFBDB@DBD@F@D@DBB@BB@DBDBHBFBBDDB@DBB@DAFAF@DAH@BAD@@A@CAE@A@AB@DAD@BA@ABEDGBABCDADABAFCDAFCBABEBGBCBADADADAHAHAFCHEDADAF@F@FBH@D@B@DC@C@A@ADMDGAEACEAE@@CAE@CAEAAC@@@CAAAA@AC@@AA@A@AAC@@@CAA@AAAA@@AAAAAA@AA@AAACA@@AAAAAA@@ACAA@AAA@AAA@CAA@A@A@A@C@A@A@AAA@A@A@AAC@AAA@AAC@AAAAA@AA@CA@@C@A@AAA@AAAAAAAA@AAA@A@AAA@AAAACA@AAAAA@AAA@AACAA@AAA@CAA@C@AAA@A@CAAA@@AAAA@AAAAAAAAAAAAC@@@AAC@A@A@AAA@AAA@A@C@AAA@CAA@A@CAA@C@ABABA@C@@@C@A@A@A@A@A@CBABA@ABABABABABA@@BAB@@A@C@A@ABA@@BABABA@C@AAAAAAAA@CA@@AAAAAA@C@@@A@AACAA@@AAACBABABADAB@BABA@A@AMEGAC@@A@ABABADABA@E@CACCCCC@CAC@K@AAAC@E@ACAA@C@C@@@AC@ABC@C@CCCEECCCMMAAECG@E@EBCACA@AC@ABADADC@A@E@CAAEGK[CCACAACA@AAC@ABE@CACACCAAC@CBABAFAHCPCFCDC@EAGCMCI@K@CB@BCBCDEFCFABADAF@F@FBF@BBB@FABAF@LBL@J@HDD@BAD@BA@CDCDCBEAUEE@CDADEFADEBCAAE@CDCDCBA@AC@CBABA@CAA@@A@A@A@@ECABEDABE@CAA@A@A@@@A@@BA@@DBDAB@BCBA@EACAEDABCFCBC@CB@BBFABA@ICAEEAGBQ@I@@BDHDJ@DABEBCCEEAEAACAC@AA@@CAA@C@@@CAA@AAAA@@ACA@AAAAAAC@A@@@CBA@AB@@ABAD@BAB@D@BBB@D@@BD@B@@ABGBCD@BDFDF@@@BAB@B@B@B@DAB@B@BAD@@@B@BCDGDEACCCGA@C@CDAD@DFFRRFH@DCBE@GAGECCG@GAGIECABA@C@@@C@@@ABABADA@ADCDAH@D@@EDG@IDAAA@CB@B@BAJBDBB@@@LDHDB@B@DAFABADA@A@C@EACBCBA@EBC@C@A@EAA@C@C@C@CCEACAADADCBGBEBGDEBABCHADCBABC@C@C@C@EB@@GBMFQLMHA@E@A@EAAACAAEAE@A@@AG@C@ED@D@FFBBD@D@D@BABC@CBG@C@EACAACACAAAACAE@ABADCBE@EBIAEACAE@A@E@E@CAAC@C@A@CCCCAACCEAEACAAAACAEAEAECCCACAEAE@CD@DAD@D@DABABC@CBEBEBCDGDQDEBADABC@A@C@C@CBEDADEDADAFABCDADAFCFCDCFAD@DAFAFCFEDCDABCBCBCBCBCDABAD@BA@A@@AAAAA@@E@G@ECCACCAAAACCCAEAE@CAA@AAAACAC@C@CBCDADCDCBCBEDCDEBCBC@CA@AAC@AACACCECACAA@A@@@CBEBIBEB@@EDABAB@BBF@DADA@A@C@AACACACCAAAAACA@@B@BADAFAJ@JADEHAJCJ@H@FBD@DBB@D@BBBBDBBDBFBDDDB@DBFBDBDHHFHDDDBDBB@DBDBDBDBBBDBBDBBBFBDBFFHFLDDDDD@B@BC@ADAD@FBDBFBDBBBBDBFBF@@DBB@B@BBBBBDBDDBFBDDDDDBBDBDBDFBDDDBBDABAD@DBBDDFF@D@H@FDDDBDBBAF@BBBDB@@F@B@DB@BB@@BBAB@@AB@DBBBDBFBFBFCDG@GBCDCFAFABJBFD@DB@D@BAF@D@BBDABABCBABADDFBFAD@DFDFDADCFCDBFHHFFBHE@@D@DADAF@HBD@F@D@FADAD@FBBB@D@HFFJFP@LBB@BB@BDD@B@DEFEDAD@B@F@DCDADBBBDBDADABA@CBAD@DBDBDBBDDBBBBBB@BCH@D@FDBBDDD@BADCHCDCF@FDNBDBBB@DBFAD@H@B@BBBBBF@D@F@FBBERFLB@DBDB@D@@ABADAB@@@@@@BBB@B@@@BBB@@@HAHKDCBBBAD@DABADAB@DBBDDDBDDFDDB@DABADAB@DBD@FDFFLJDDDBF@DAD@FCDCDBD@D@DDFBF@FBF@FBF@H@H@JCHAFCFAD@D@BBABA@ADEDEFCFAD@F@DBDAD@DAF@@@BAD@DBJBFAFADADCDGDCD@D@BDBB@@B@B@DBFDJ@D@DBBBBB@DAB@\\HVFRPBDDLBBBB@@B@B@DCDCHAD@B@D@BBB@BBBB@D@D@B@@BB@@DAD@B@D@D@B@DADE@@B@B@D@@@@B@B@B@DBBBDDDB@@BFNBN@@DB@@B@@@@B@D@@@@@@AB@DABAB@@@BB@B@D@B@B@FADAF@DBFBD@D@B@B@B@BBD@DDNBHABABGBC"],"encodeOffsets":[[120349,28240]]}},{"type":"Feature","id":"350782","properties":{"name":"武夷山市","cp":[118.032796,27.751733],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@A@@@CA@A@A@A@A@C@@@G@E@EAAAECCAC@C@A@A@A@@FCDC@@FC@A@A@@AC@AGEA@@AAC@C@@DCDGBEBA@A@AB@B@B@@AB@AC@AAA@@@ADA@@BCBC@AB@FA@CAACEAAAE@I@GBE@EAIAGAC@CBABAFAB@DEBEDCDCDGBCCCCCDCDCBE@G@A@@AA@CACGEECGECCAACAAA@@@A@C@CDKBGDE@@BE@CBABABCBABC@AAC@AC@CACBC@A@A@AAA@ABC@@BC@EA@C@C@CACECEACAMDGACCBC@GACC@ECAG@I@@@@BCDA@@DABABABA@AAECC@@GMMEQ@IA@GBETKZQ@@B@BAFADABEAC@E@C@CA@AAAAOG@@A@@C@EBCDCBCFCDAHAFAH@FBFBDDDDFDDDFBBBB@DBFAFAFA@@DBHDBDDDB@FC@AACAAAAAAAA@CBAHC@E@CBCDCDADBD@DCNOJEBAAEAC@GBGBE@A@CA@AA@EAK@GBKDEDIBAD@D@DBFDDBBDDBDCBEDI@GBEBC@CCCECECCAM@MEAGLKBA@ABEDEBAHGFEFAFAFABABCBCBGCEAGAEAC@CDCBEDE@@BAFGDC@@BAAECEACCCAE@CACCGAEACCAC@C@CCCECICEAAA@ABABABCDCBA@C@CACGACCCC@AAEBA@CBCEAAAAA@GECAA@@@CDGB@@MFOJQBEAA@ACCAAAEAGAGCE@C@C@ABEFCBCBC@E@C@E@EAG@GBEBEBCBCBCDCB@FADBF@FBBBDBD@BADA@CBA@@DBB@D@B@DAFADCD@FAD@D@DBBBB@D@@CBCD@B@DBF@HAHA@EBC@CAA@C@ABCDC@A@GCA@ECAC@CBEBCBA@EBC@GBE@E@CAA@@FMDQ@IEMGK@AAE@ABADCDA@CAAACCEECCACCCCCECCCCACAAC@E@A@EACCAAACAAAAA@AAAAA@CDAD@@ABAAA@BC@A@A@CBC@E@A@C@A@CAC@AAAAACAAACA@@CAABCBCDABCDCDABCBABC@ABA@A@A@A@AAA@AAA@@AAA@A@AAA@@@GDGDERKBA@ABA@@@AAAA@ACAAAAAAAAAA@@A@C@AAA@AAA@@AAAAAABC@A@CBABEBABC@A@C@C@CAA@A@A@A@A@@AAA@AA@@A@AAAAA@@AAEACAC@ABA@ABABADABABABA@AB@@AAA@A@AAA@A@CA@@AAA@EACACAAACCEEGCCAEACACAIECAE@C@C@ECEECACAC@A@CD@BCDABCBABEBG@ECE@CAC@ADCDADABC@C@E@E@A@C@CCAAC@E@EBCBE@EBEBCDCB@BABADBBBBBDBDBFBHAD@DABEAEAGBABCBCD@B@DDD@DADABA@EACACAC@ABADAFAFAFCD@DCDADGFA@C@A@AC@CACACAEACCACAC@@AAAAAC@C@CBCDMDC@@@AA@ABG@EACCECACCC@EACAEDKHABCFCBCBG@EACACACBCBABBDDD@@BFDHBFDHBD@D@D@F@D@HBD@F@B@F@D@DABCBCDCBEBABABC@CAC@A@ADABCBC@ACC@A@CBCBA@EBCBCDABCBEBC@A@E@C@C@A@AD@BABABCBEBOHCBCBADAD@F@HAHADABCDCD@B@BFBBDDBBFDHDFBHDHDHBF@D@JBBDFBDBD@F@DCJCBADEFC@CBC@@BDDBD@DAHAFAFCHCFCBABCBEBG@G@MAGAE@C@C@C@CB@BADDHBF@DAD@BC@EBCAE@CBCBCDCBABAB@@EDABAFCBCDEBCBEBA@ABBB@F@HBJ@H@DBDB@B@D@D@D@BBDB@DBF@JDJBFBDBBBBDDFBFDDDDDDBFBDDDDDB@D@DBD@FDDAD@BABCBAD@B@DBFBHDFBFDHBFB@DBBDBBD@DADAB@FDDDDFHBBABCBCBCDCDABABCBEBCBADAFAFCDEFEBCFCDAD@F@BBDDDDBDDBBBFBBBBBBDBD@HBFDHFHDBFDFFF@F@DDBB@FDDDHBB@@@BB@@B@@BDB@@@@@@B@@B@@@BDAFABCBADAB@D@FBHDDBFBFBFABAHAD@FBFDBDBB@B@FBDBDDBF@DDBDDJDBDDD@D@@DDBBFBDBFBFBFBF@FBDDDBDDFBFDFDDFDDDFBDFBDADCBC@ABCDADBBBDDDBF@DBFBDBDDF@FBDAD@FAD@BBFDFBDAD@D@@D@DDDBBDDBBBFBBBBD@DBFBD@D@DDBBDDDDB@FBF@FADAHCD@DABCBCBADADADBDBHBDBDBF@BDFBDBBDDDBH@DBDDDDDDFDBB@BABCFIDEDBDBD@D@DAF@DDDDFDDBF@D@D@D@FCDGBCDAB@B@B@BBBBB@F@B@D@B@D@BBBBFAHCBADCBAAABC@A@C@ABABAD@D@DABAH@F@F@D@FBDB@D@BADADAHCD@D@B@DDD@F@DAB@D@B@B@B@DBD@DDDBBBBDBB@BBBBBB@D@B@DB@@BB@B@BADADCB@D@JAD@D@@@BBB@@@DDBBBB@BAJ@B@@AD@DA@ABEFAB@DAH@B@D@BB@BB@@B@DB@B@B@B@@B@@@HFB@BDDBB@@B@BBB@BB@BBB@@AD@D@B@@@B@DBFB@@DDB@BBB@@@B@BABAFCB@@AB@H@D@F@B@JC@@@@@@DCHCB@B@D@B@B@BBFB@@B@BABABA@@D@B@@@B@BBB@@@FD@@FFDBDBB@DABBD@HBD@B@BBDBHFFFFDDF@@FHB@@@DCJEBABA"],"encodeOffsets":[[121091,28743]]}},{"type":"Feature","id":"350724","properties":{"name":"松溪县","cp":[118.783491,27.525785],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@ACAABABCBE@EDEBAFEB@DA@CBA@E@AACBCDGBCBECAE@ICECDGBCCC@AFAHCBCBAF@D@BA@@@C@GBCBCDABCBADGBCDGFMDI@ABCB@BAD@DAFCBCDEDCBCDCDCD@FBF@@CAEDEDC@CAEG@KBI@M@CAAGDEFEBEAECEEEA@@C@A@ABABADCBC@@@C@A@ABCFEFEHCDADCBADGBCDEFE@C@A@@@@@@@@@@BCAC@AAAAA@ABABABAAA@A@C@A@CBABAB@@@B@D@@@D@@@D@@ABA@A@@@@@CAEAACAA@@AAC@C@EAE@AAABC@CAAAACA@A@ABC@C@I@KFEHCCEGAIAGECMIQMIQCGAEGEMCAC@AAAC@AAC@C@CBAFCDAD@BBFBFBB@BBBADA@CBGAA@CBAD@BA@CCCDCLD@ABABCBCBC@A@C@EAAAA@@@C@@@ABA@AEEEGCGCIBEBE@AAC@AAAA@CAA@CAEKCEGCKCGGEAAEBCBEACECGAGBCAACECE@CBAB@FCDGBIBEB@@EDEBE@EBIAAAGGEGACA@EBEBGFE@GAI@GBG@GEEC@AAA@ACACCAA@A@A@ACCCCCAAAEACAEAEECAAAC@EBC@MDKBOFGBEDAD@BCDCBCDCBE@ABIHCDCFAD@B@BAFC@G@ABAB@B@@@B@D@DBBD@B@DB@B@@A@@BAD@BBDBD@@BB@HBFBBABA@@DAHCDADCBCBCDCFEDE@E@CBEBEDMHQJA@IAGAGBKDKBGDAHCDCDAB@DDF@FD@D@DBDFFHJHHFD@FAD@BD@HBH@BD@D@HBDBBBBFABCFABBHBDDDDDBHCHCFC@MCS@GCCECCEAIDEDE@E@A@A@E@IBEBCDABCDAD@F@HADA@C@CBEB@BDBDBFBDBADCFIDGDBDBBD@HAF@@D@BEDADBBBBDBJBBDAFEHCHAJADGL@B@DDFDDBBD@L@F@F@HBF@DABABC@ABAB@D@F@FBDD@BD@RBN@DDF@FDBBBDBBFDDDBBBAB@NLFLJJD@DDD@H@F@FBDBBFBFDDBDBFDHDFBDBDBDBHCJEHEFBFDH@FAJBJHHDJBJCHEHCD@FDBHJHJBLHJFBD@HEF@B@BD@@DBDBFBLL@DBDJFHDJFHDRJFBPJDBFFHDFDFBFDFDLDF@F@HDDBB@B@B@@@B@FDDFH@L@FBFFJHFEDADCDCBC@A@ABC"],"encodeOffsets":[[121690,28501]]}},{"type":"Feature","id":"350783","properties":{"name":"建瓯市","cp":[118.321765,27.03502],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@AACAGG@C@AFA@A@CAC@AD@FDDBB@@AAGEGCGCI@KFAJ@JBDBBB@@@CAI@K@AB@L@F@@@@A@A@@@A@A@A@A@@@ABA@@BA@A@@AA@AA@A@@@AA@@@AAA@AAA@AA@@AAA@AA@AAAA@@A@A@A@ABA@@@A@A@ABA@A@A@@@ABA@@BABA@@B@BAB@@@BA@A@A@A@@@C@@@A@@AA@@AAA@@@A@@@A@A@@@A@A@AA@@A@@AA@AA@AAA@@AA@@AA@@A@@@AAAA@A@@@A@A@@@AAA@A@AA@@A@AAAAA@@AA@@A@@AA@AAA@A@@@AAA@A@A@@AA@A@AAA@A@@BA@A@A@AAA@@KIECGKIKCICOCKIIGGA@@@A@AA@@A@@AAA@AAA@@KFEBECIIAKBGFE@AA@@A@A@A@@@A@AA@@@AAA@AA@@AAA@@ADG@CGCICECCAEEGAICI@EAC@CAECKIEGBE@G@EAEGGKCI@K@IDGBG@IAMBMHKFGAGEGGKEIAODIHEH@LCBGFI@IAEEAECCGOFINKRKFEDEBGDI@EDEDCDE@CEAAK@IAGIGCCDG@ADG@ACCCE@@@@@CCAA@CAEACAC@CBA@CAAACAC@EBEBABA@GAOACCAA@@@@BC@A@@@AAAC@CAABA@K@IAAA@AGQACDENI@AFEFGBI@GCQ@EACAMCCAAE@C@CAACAA@ADA@ABAACAAACAOCCAAACKUAI@O@E@ECGCAAACAAAACBA@CCMAE@E@C@CA@A@CBCBC@CAAAA@ABABC@@ACCEGAAGBAACCAAA@@B@BBD@BBBA@A@@@CCECCC@G@CA@A@CBCDABC@C@A@EBC@C@C@EECEAEACA@CAEBC@CB@AAA@AAAE@AAA@@A@AFCFCBAAEAE@CBA@E@CGCGGEAE@C@@B@@ABCBABA@@@@AAC@A@C@AA@A@@AAAA@@@CAC@ADABA@AAA@C@AD@DABCBCACB@BCBA@A@@ABA@C@ACAE@C@ACACBCACCAEDAFCBABCBGDA@E@CDA@O\\AFADA@GECCE@EB@D@H@DDBFAF@F@BDAFEFC@G@EBADAD@FA@@B@BABC@@@@@@@E@A@EO@CA@ABAB@@@BCBE@EAG@CCEEGEEE@EAAE@A@CDADEHQJGFCFCDE@ACAAC@@@CB@BEHE@G@C@G@QJGFCD@FDBDD@BEFGBCFBF@HADABEBAB@DABC@ECECC@GFAH@JAF@FDHDF@J@DCDEBMAC@AD@B@@AH@DAD@@F@D@@B@FAF@DFBDBBH@DCFCD@D@B@@@BB@@BB@BBBB@BBB@BDDB@@D@H@DC@C@C@CBAJAJDJBDDB@HAN@P@HCFCDEBK@KBK@CAAC@EAGAMEE@ABAF@BA@AACEGA@@AACACACAA@EBCBEBE@E@CBE@EBCBCBEBA@C@A@C@AC@C@EBC@ACAECCACCCIGGCKCI@CAAABCFAB@@A@AIAECEECAI@GHGFEHCDEBEBACAAAAC@EFCDCJIJEF@F@F@HCFCFEBE@@@E@CBE@EAC@EAG@CBC@C@CBC@CBEBA@GAA@AAAA@A@ACAAAA@A@@@C@ABC@@B@B@BABAD@BABABABAB@BH@@@DBDDDFFFFBFFBFDDFDD@JHFDFD@DBHDBBDB@B@@@@@BABABCBAB@F@DABCBEB@D@@D@D@D@@B@DCFCHAFADADCBABW@EBCDCFADBH@PJHJFDDBF@RHDB@DADE@EBA@ABBDDJDBD@DADADAD@DD@D@D@D@BDBHFNLFHDDDD@@ABCBCDAH@F@PBHBDCFCDGDE@C@AAEAC@A@EDCDAF@DJTFFFBJ@D@F@B@@@@DEFCFCDEH@JAHCDCBGFCDE@GCICGEAAAAA@CBADBB@BEFOLGFIFIDEDC@CAAACAC@EBC@A@QICAAC@C@AAACC@E@E@EACACE@EBIFEFIHGFMHSJKJCDC@AAGOECACC@C@CDABBBBBD@BBBBCBADEDCDADGJEJCLBDB@BBBBA@ABABA@A@A@A@@@CBA@@B@B@BBDBJ@BBDA@CBCAAAAACAA@ABABGBC@@A@CAAA@ABC@AAGGAAABABABBDDFDF@D@B@@@BA@@D@B@B@B@B@B@D@B@BDBBBDD@BBBD@FDBB@FGFGDCDCBAD@BABA@ABABABABABC@@BC@CBA@C@@@C@A@A@A@C@A@C@A@CAA@AACAA@AAA@AAC@@AC@AAC@A@A@ABA@@B@B@B@D@B@BBB@B@B@BBDBB@B@D@B@B@BAD@B@D@@AB@B@BBBB@B@BBD@@@BBD@@BBB@B@B@B@B@BAB@BABAB@B@B@@GLCH@@ABABA@ABA@ABABAB@BDBD@F@D@DAD@BDBDBFDDBHAFBDBBDFJHDDB@DBBAFADABCDAD@D@FBJDDBHDFBD@HBFBBDDDDBFBDBNFJFHDB@F@DBDDBBBFBDDBD@JAH@F@FBB@FFDFDDDBD@F@F@FABABADAD@@B@DBDBDB@D@DAFCFADAD@DBDD@@B@H@D@BDBDBF@FCDADAD@B@FAFA@CDC@A@ADABAD@LAHBFDDDDBDBDADAFADED@HBFDBD@FBD@B@BD@DBDBFADADAB@BB@DAB@BBBDCF@FBDDBFFDDHBHB@@@@BBBBBB@B@B@@@BB@D@B@BBBBB@@@B@@AB@D@BAB@BAB@HBFBB@F@D@BBB@BBB@D@DBBBB@D@F@F@F@FBB@BB@@@@B@DBB@B@DBBBB@BBB@BDDBFBBBB@B@BAB@D@BBB@D@B@@@@A@GDEBEDA@ADAFAD@BCDCHGFG@C@A@A@@B@B@DBBBB@@@BABA@@F@B@JCFCFAFAHBBBFBD@@A@A@A@C@EBAB@B@D@DDFHDBDBBBF@BB@@LFDBBDAF@D@BFFB@@BJEDK@MB@FCDAFBD@FDHDDFBBD@D@DAFABBJBFBFBBAD@D@F@B@DBDBDD@D@HBFBBB@DBDAD@HAHCH@DBJLAR@@@D@BABABCD@@A@A@A@@B@@@@@@@BBBFBBBDBBB@@BAB@BADE@AD@@@B@BB@@@@FBDBBDDFBBBBD@HAF@BBDB@@DBBDB@B@B@B@BBDDDDBBDBFAB@BA@A@AB@D@DB@@BBDBBD@BF@B@B@B@LBHDJDJBLAJEFIFCD@DBDBDABCFAD@HBHAH@DDB@CBGBCD@BBFFBH@FDBBFBHAFCHEDA@@JAD@BDBB@BBA@A@E@C@@BA@@B@BBBD@FBB@@BADEBGFCBABA@CBAHAF@FDFDBB@@BA@@CCCC@CB@DAB@FJFFDFDDFDDBDBD@BDBB@@BA@A@AAABABABABABAAA@@@CBAFADADB@@D@@@@@B@@ABAD@@@DAJAF@NEF@B@FBF@H@R@F@LAFA@@B@BC@EBED@DBBBFBLBHDB@FADCHEBA@CBABADAF@@@@EAGAEBEBAD@FAFDD@D@BABADADABB@@AB@B@BF@B@DAB@BBDDDFHJB@NDB@B@BADCDADBD@FDD@B@D@BABADCBADAHAHCH@NABABA@ABAB@D@RAD@@@@A@AGCAAAA@A@CAEBAF@@@@ABC@CBC@ADABA@@@AAC@CBGBI@ADAB@@AACCACA@ADCBC@CAAAABAHCD@BGDGBAB@DBFB@@DABABAB@B@B@FBD@D@DAB@B@B@B@@A@C@AE@MC@CFGJKLILEHAFABABAB@HBBAB@FAFCFCBAFADCBC@A"],"encodeOffsets":[[121792,27828]]}}],"UTF8Encoding":true});}));