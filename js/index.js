var index=1;
var selectProvice;
var selectCity;
//地图
var myChartMap = echarts.init(document.getElementById('maps'));
var optionProvince = {
    legend: {
        data: ['安全状态']
    },
    grid: {
	    bottom: 0
	},
    visualMap: {
        min: 0,
        max: 1000,
        top: 'middle',
        text: ['高', '低'], // 文本，默认为数值文本
        textStyle: {
            color: '#fff'
        }

    },
    series: [{
        tooltip: {
            trigger: 'item',
            formatter: '{b}'
        },
        name: '安全态势',
        type: 'map',
        mapType: 'china',
        x: 'center',
        y: 'center',
        roam: false,
        selectedMode: 'single',
        itemStyle: {
            normal: {
                label: {
                    show: false
                }
            },
            emphasis: {
                label: {
                    show: true
                }
            }
        },
        data: [{
                name: '北京',
                value: 100
            }, {
                name: '天津',
                value: 800
            }, {
                name: '上海',
                value: 600
            }, {
                name: '陕西',
                value: 100
            }, {
                name: '河北',
                value: 400
            }, {
                name: '河南',
                value: 500
            }, {
                name: '云南',
                value: 300
            }, {
                name: '辽宁',
                value: 100
            }, {
                name: '黑龙江',
                value: 900
            }, {
                name: '西藏',
                value: 1000
            }, {
                name: '安徽',
                value: 400
            },

        ]
    }],
    animation: false
};

myChartMap.setOption(optionProvince, true); //显示国家地图

//点击地图显示省份地图
myChartMap.on('mapselectchanged', function(param) { //单击省份事件
	if (timer) {
	    clearInterval(timer);
	}
	if(index==2){
		//index++;
		//市地图点击
		selectCity = param.batch[0].name;
		citys();
	}else{
		//省份地图点击
		index++;
		selectProvice = param.batch[0].name;
        var url = "mapjs/" + selectProvice + "/" + selectProvice + ".js";
        loadScript(url, setOpt);
        //setOpt();
        citytop5();
        provinceCharts();
        capitalCity();
        $("#back").show();
	}
	timer=setInterval('autochange()',3000);
})


function loadScript(url, callback) {
    var script = document.createElement("script")
    script.type = "text/javascript";
    if (script.readyState) {
        script.onreadystatechange = function() {
            if (script.readyState == "loaded" || script.readyState == "complete") {
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {
        script.onload = function() {
            callback();
        };
    }
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}
function setOpt() {
    var option = {
        dataRange: {
            x: '-3000px',
            y: 'bottom',
            splitList: [{
                    start: 41,
                    color: 'rgba(182,132,220,0.8)'
                }, {
                    start: 21,
                    end: 40,
                    color: 'rgba(255,108,96,0.8)'
                }, {
                    start: 11,
                    end: 20,
                    color: 'rgba(252,179,34,0.8)'
                }, {
                    start: 5,
                    end: 10,
                    color: 'rgba(89,172,226,0.8)'
                }, {
                    start: 0,
                    end: 4,
                    label: '<4',
                    color: "rgba(120,205,81,0.8)"
                },

            ],
            //										        
            textStyle: {
                color: 'white',
            },
        },
        roam: false,
        series: [{
            tooltip: {
                trigger: 'item',
                formatter: '{b}'
            },
            type: 'map',
            mapType: selectProvice,
            x: 'center',
            y: 'center',
            //							            roam: true,									            
            selectedMode: 'single',
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    }
                },
                emphasis: {
                    label: {
                        show: true
                    }
                }
            },
            data: ""
        }],
        animation: false,

    }
    myChartMap.setOption(option, true);
}

//联动
var myChart1 = echarts.init(document.getElementById('charts1'));
var myChart2 = echarts.init(document.getElementById('charts2'));
var myChart3 = echarts.init(document.getElementById('charts3'));
var numbers=0;
 
// 图表1
var region_legend = ["病人数", "就诊数","病历数","交易金额","交易笔数","随访数","影像数","牙齿检查数","短信数"];
var selects = {
	"病人数":true,
	"就诊数":false,
	"病历数":false,
	"交易金额":false,
	"交易笔数":false,
	"随访数":false,
	"影像数":false,
	"牙齿检查数":false,
	"短信数":false
}
var colorList = ['#C33531','#FFC90E','#64BD3D','#EE9201','#3C90C8', '#F9E79F','#0AAF9F','#E89589','#16A085']
var region_xAxis = ["省份1", "省份2", "省份3", "省份4","省份5"];
var region_series_data = [
    [1, 2, 1, 3, 5],
    [2, 5, 7, 5, 3],
    [3, 2, 3, 1, 3],
    [1, 2, 1, 3, 2],
    [2, 5, 7, 5, 4],
    [3, 2, 3, 1, 4],
    [1, 2, 1, 3, 2],
    [2, 5, 7, 5, 3],
    [3, 2, 3, 1, 5]
];
var region_option = {
    title: {
    	subtext:'Top5：患者、就诊次数、病历、交易指标分布',
    	x:"center",
    	subtextStyle:{
    		color:'#DDDBDB',
    		fontSize:14
    	}
    },
    grid: {
	    bottom: 50
	},
    tooltip : {
        trigger: 'axis'
    },

    legend: {
    	show:false,
        left: '9%',
        selected:selects
    },

    xAxis : [
        {
            type : 'category',
            data : region_xAxis,
            axisLine:{
                lineStyle:{
                    color:'#FFFFFF',
                }
            } 
        }
    ],

     yAxis : [
        {
            type : 'value',
            axisLine:{
                lineStyle:{
                    color:'#FFFFFF',
                }
            } 
        }
    ],

    series : function(){
        var series = [];
        for(var i=0; i<region_legend.length; i++) {
            var item = {
                name: region_legend[i],
                data: region_series_data[i],
                type: 'bar',
                barWidth : 30,
                itemStyle:{
                	color:colorList[i]
                }
            };
            series.push(item);
        }
        console.log(series);
        return series;
    }()
};
myChart1.setOption(region_option, true);

// 图表2
var region_legend1 = ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'];
var region_series_data1 = [
  [20, 52, 31, 24, 60,40,20,20, 52, 31, 24, 60,40],
  [20, 72,31, 64, 50,30,70,20, 52, 31, 24, 60,40],
  [50, 92,61, 84, 80,60,70,20, 52, 31, 24, 60,40],
  [20, 52, 31, 24, 60,40,20,20, 52, 31, 24, 60,40],
  [20, 72,31, 64, 50,30,70,20, 52, 31, 24, 60,40],
  [50, 92,61, 84, 80,60,70,20, 52, 31, 24, 60,40],
  [20, 52, 31, 24, 60,40,20,20, 52, 31, 24, 60,40],
  [20, 72,31, 64, 50,30,70,20, 52, 31, 24, 60,40],
  [50, 92,61, 84, 80,60,70,20, 52, 31, 24, 60,40]
]
var city_option = {
	title: {
    	subtext:'全国：患者、就诊次数、病历、交易指标时间趋势',
    	x:"center",
    	subtextStyle:{
    		color:'#DDDBDB',
    		fontSize:14
    	}
    },
    grid: {
	    bottom: 50
	},
    tooltip: {
        trigger: 'axis'
    },
    legend: {
    	show:false,
        selected:selects
    },
    xAxis: {
    	type: 'category',
        data: region_legend1,
        axisLine:{
                lineStyle:{
                    color:'#FFFFFF',
                }
            } 
    },
    yAxis: {
    	type: 'value',
    	axisLine:{
            lineStyle:{
                color:'#FFFFFF',
            }
        } 
    },
    label:{
        normal:{
            show: true
        }
    },
    series : function(){
        var series1 = [];
        for(var i=0; i<region_legend.length; i++) {
            var item = {
                name: region_legend[i],
                data: region_series_data1[i],
                type: 'line',
                itemStyle:{
                	color:colorList[i]
                }
            };
            series1.push(item);
        }
        console.log(series1);
        return series1;
    }()
};
myChart2.setOption(city_option, true);

//图表3
var charts3_legend = ['周一','周二','周三','周四','周五','周六','周日'];
var charts3_data1 = [
  [20, 52, 31, 24, 60,40,20],
  [20, 72,31, 64, 50,30,70],
  [50, 92,61, 84, 80,60,70],
  [20, 52, 31, 24, 60,40,20],
  [20, 72,31, 64, 50,30,70],
  [50, 92,61, 84, 80,60,70],
  [20, 52, 31, 24, 60,40,20],
  [20, 72,31, 64, 50,30,70],
  [50, 92,61, 84, 80,60,70]
]
var charts3_option = {
	title: {
    	subtext:'上海各指标30天趋势线',
    	x:"center",
    	subtextStyle:{
    		color:'#DDDBDB',
    		fontSize:14
    	}
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
    	show:false,
        selected:selects
    },
    xAxis: {
    	type: 'category',
        data: ['周一','周二','周三','周四','周五','周六','周日'],
        axisLine:{
            lineStyle:{
                color:'#FFFFFF',
            }
        } 
    },
    yAxis: {
    	type: 'value',
    	axisLine:{
            lineStyle:{
                color:'#FFFFFF',
            }
        } 
    },
    label:{
        normal:{
            show: true
        }
    },
    series : function(){
        var series3 = [];
        for(var i=0; i<region_legend.length; i++) {
            var item = {
                name: region_legend[i],
                data: charts3_data1[i],
                type: 'line',
                itemStyle:{
                	color:colorList[i]
                }
            };
            series3.push(item);
        }
        console.log(series3);
        return series3;
    }()
};
myChart3.setOption(charts3_option, true);

//切换省份地图后图表1展示top城市
function citytop5(){
	var citytop5_xAxis = ["城市1", "城市2", "城市3", "城市4","城市5"];
	var citytop5_data = [
	    [2, 5, 7, 5, 4],
	    [3, 2, 3, 1, 4],
	    [1, 2, 1, 3, 2],
	    [1, 2, 1, 3, 5],
	    [2, 5, 7, 5, 3],
	    [3, 2, 3, 1, 3],
	    [1, 2, 1, 3, 2],
	    [2, 5, 7, 5, 3],
	    [3, 2, 3, 1, 5]
	];
	var provincetop5 = myChart1.getOption();
	provincetop5.xAxis[0].data = citytop5_xAxis ;
	for(var i=0; i<region_legend.length; i++) {
		provincetop5.series[i].data = citytop5_data[i]
	}
	myChart1.setOption(provincetop5, true);
}
//切换省份地图后图表2展示省份数据
function provinceCharts(){
	var region_province_data1 = [
	  [50, 92,61, 84, 80,60,70,20, 52, 31, 24, 60,40],
	  [20, 52, 31, 24, 60,40,20,20, 52, 31, 24, 60,40],
	  [20, 72,31, 64, 50,30,70,20, 52, 31, 24, 60,40],
	  [50, 92,61, 84, 80,60,70,20, 52, 31, 24, 60,40],
	  [20, 52, 31, 24, 60,40,20,20, 52, 31, 24, 60,40],
	  [20, 72,31, 64, 50,30,70,20, 52, 31, 24, 60,40],
	  [50, 92,61, 84, 80,60,70,20, 52, 31, 24, 60,40],
	  [20, 52, 31, 24, 60,40,20,20, 52, 31, 24, 60,40],
	  [20, 72,31, 64, 50,30,70,20, 52, 31, 24, 60,40]
	]
	var province_option = myChart2.getOption();
	province_option.title[0].subtext = selectProvice+'：患者、就诊次数、病历、交易指标时间趋势';
	for(var i=0; i<region_legend.length; i++) {
		province_option.series[i].data = region_province_data1[i]
	}
	myChart2.setOption(province_option, true);
}
//切换省份地图后图表3展示省会城市数据
function capitalCity(){
	var capitalCity_data = [
	  [50, 92,61, 84, 80,60,70],
	  [20, 52, 31, 24, 60,40,20],
	  [20, 72,31, 64, 50,30,70],
	  [50, 92,61, 84, 80,60,70],
	  [20, 52, 31, 24, 60,40,20],
	  [20, 72,31, 64, 50,30,70],
	  [50, 92,61, 84, 80,60,70],
	  [20, 52, 31, 24, 60,40,20],
	  [20, 72,31, 64, 50,30,70]
	]
	var capitalCity = myChart3.getOption();
	capitalCity.title[0].subtext = '省会各指标30天趋势线';
	for(var i=0; i<region_legend.length; i++) {
		capitalCity.series[i].data = capitalCity_data[i]
	};
	myChart3.setOption(capitalCity, true);
}

//切换城市地图后图表3展示城市数据
function citys(){
	var citys_data = [
	  [50, 92,61, 84, 80,60,70],
	  [20, 52, 31, 24, 60,40,20],
	  [20, 72,31, 64, 50,30,70],
	  [50, 92,61, 84, 80,60,70],
	  [20, 52, 31, 24, 60,40,20],
	  [20, 72,31, 64, 50,30,70],
	  [50, 92,61, 84, 80,60,70],
	  [20, 52, 31, 24, 60,40,20],
	  [20, 72,31, 64, 50,30,70]
	]
	var city = myChart3.getOption();
	city.title[0].subtext = selectCity+'各指标30天趋势线';
	for(var i=0; i<region_legend.length; i++) {
		city.series[i].data = citys_data[i]
	};
	myChart3.setOption(city, true);
}

var tableData = [
['摩尔口腔','上海','2017.05.04','签约',200,400,324,234,567,555,532,1234],
['欢乐口腔','北京','2018.05.14','签约',630,500,324,234,567,555,532,1234],
['牙博士口腔','西安','2017.09.24','签约',320,600,324,234,567,555,532,1234],
['拜博口腔','郑州','2016.11.16','签约',470,700,324,234,567,555,532,1234],
['圣安口腔','深圳','2017.10.30','签约',160,200,324,234,567,555,532,1234],
['好牙医','苏州','2018.01.27','签约',150,500,324,234,567,555,532,1234],
['美奥口腔','杭州','2017.12.24','签约',470,400,324,234,567,555,532,1234],
['极橙儿童齿科','上海','2016.03.09','签约',546,400,324,234,567,555,532,1234],
['小白兔口腔','南京','2017.02.26','签约',540,400,324,234,567,555,532,1234],
['军美整形','西安','2017.10.29','签约',650,400,324,234,567,555,532,1234],
['博凡齿科','南京','2018.08.18','签约',760,400,324,234,567,555,532,1234],
['茂菊口腔','上海','2017.09.23','签约',980,400,324,234,567,555,532,1234],
]

$("li button").click(function(){
var id = $(this).attr("id");
if (timer) {
    clearInterval(timer);
}
timer=null;
changeLegend(id);
})
function changeLegend(x){
	numbers=x;
	for(var i=0;i<$("li").length;i++){
		var value=$("#"+i).val();
		var m = i+4;
		if(x==i){
			//$("#"+i).addClass('select'+i);
			$("#"+i).addClass('active');
           myChart1.dispatchAction({
	         type:'legendSelect',
	         name:value
	       });	
	       myChart2.dispatchAction({
	         type:'legendSelect',
	         name:value
	       });
	       myChart3.dispatchAction({
	         type:'legendSelect',
	         name:value
	       });
	       $('th:eq('+m+')').addClass('active');
		}else{
			$("#"+i).removeClass('active');
			$('th:eq('+m+')').removeClass('active');
			//$("#"+i).removeClass('select'+i);
			myChart1.dispatchAction({
	         type:'legendUnSelect',
	         name:value
	       });
	       myChart2.dispatchAction({
	         type:'legendUnSelect',
	         name:value
	       });
	       myChart3.dispatchAction({
	         type:'legendUnSelect',
	         name:value
	       })
		}
	}
	if (timer) {
        clearInterval(timer);
    }
	timer=setInterval('autochange()',3000);
}
var timer=setInterval('autochange()',3000);
function autochange(){
	numbers++;
	if (numbers>=$("li").length){
        numbers=0;
    };
    changeLegend(numbers);
}

$(".tittle button").click(function(){
	$(this).addClass('actives'); //top10表格切换
	$(this).siblings().removeClass('actives');
})

$("#back").on("click",function(){
	if (timer) {
        clearInterval(timer);
    }
	myChartMap.setOption(optionProvince, true); //显示国家地图
	myChart1.setOption(region_option, true);
	myChart2.setOption(city_option, true);
	myChart3.setOption(charts3_option, true);
	index=1;
	$("#back").hide();
	timer=setInterval('autochange()',3000);
})