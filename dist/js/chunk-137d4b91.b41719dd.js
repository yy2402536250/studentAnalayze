(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-137d4b91"],{"0a49":function(t,e,a){var n=a("9b43"),i=a("626a"),o=a("4bf8"),r=a("9def"),s=a("cd1c");t.exports=function(t,e){var a=1==t,c=2==t,l=3==t,u=4==t,h=6==t,d=5==t||h,p=e||s;return function(e,s,f){for(var v,g,m=o(e),b=i(m),y=n(s,f,3),w=r(b.length),x=0,S=a?p(e,w):c?p(e,0):void 0;w>x;x++)if((d||x in b)&&(v=b[x],g=y(v,x,m),t))if(a)S[x]=g;else if(g)switch(t){case 3:return!0;case 5:return v;case 6:return x;case 2:S.push(v)}else if(u)return!1;return h?-1:l||u?u:S}}},1169:function(t,e,a){var n=a("2d95");t.exports=Array.isArray||function(t){return"Array"==n(t)}},"2f21":function(t,e,a){"use strict";var n=a("79e5");t.exports=function(t,e){return!!t&&n((function(){e?t.call(null,(function(){}),1):t.call(null)}))}},"456d":function(t,e,a){var n=a("4bf8"),i=a("0d58");a("5eda")("keys",(function(){return function(t){return i(n(t))}}))},"504c":function(t,e,a){var n=a("9e1e"),i=a("0d58"),o=a("6821"),r=a("52a7").f;t.exports=function(t){return function(e){var a,s=o(e),c=i(s),l=c.length,u=0,h=[];while(l>u)a=c[u++],n&&!r.call(s,a)||h.push(t?[a,s[a]]:s[a]);return h}}},"55dd":function(t,e,a){"use strict";var n=a("5ca1"),i=a("d8e8"),o=a("4bf8"),r=a("79e5"),s=[].sort,c=[1,2,3];n(n.P+n.F*(r((function(){c.sort(void 0)}))||!r((function(){c.sort(null)}))||!a("2f21")(s)),"Array",{sort:function(t){return void 0===t?s.call(o(this)):s.call(o(this),i(t))}})},"5eda":function(t,e,a){var n=a("5ca1"),i=a("8378"),o=a("79e5");t.exports=function(t,e){var a=(i.Object||{})[t]||Object[t],r={};r[t]=e(a),n(n.S+n.F*o((function(){a(1)})),"Object",r)}},"6d67":function(t,e,a){"use strict";var n=a("5ca1"),i=a("0a49")(1);n(n.P+n.F*!a("2f21")([].map,!0),"Array",{map:function(t){return i(this,t,arguments[1])}})},"6f85":function(t,e,a){"use strict";a("e7f3")},"7f7f":function(t,e,a){var n=a("86cc").f,i=Function.prototype,o=/^\s*function ([^ (]*)/,r="name";r in i||a("9e1e")&&n(i,r,{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(t){return""}}})},8615:function(t,e,a){var n=a("5ca1"),i=a("504c")(!1);n(n.S,"Object",{values:function(t){return i(t)}})},ac6a:function(t,e,a){for(var n=a("cadf"),i=a("0d58"),o=a("2aba"),r=a("7726"),s=a("32e9"),c=a("84f2"),l=a("2b4c"),u=l("iterator"),h=l("toStringTag"),d=c.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},f=i(p),v=0;v<f.length;v++){var g,m=f[v],b=p[m],y=r[m],w=y&&y.prototype;if(w&&(w[u]||s(w,u,d),w[h]||s(w,h,m),c[m]=d,b))for(g in n)w[g]||o(w,g,n[g],!0)}},cd1c:function(t,e,a){var n=a("e853");t.exports=function(t,e){return new(n(t))(e)}},e7f3:function(t,e,a){},e853:function(t,e,a){var n=a("d3f4"),i=a("1169"),o=a("2b4c")("species");t.exports=function(t){var e;return i(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!i(e.prototype)||(e=void 0),n(e)&&(e=e[o],null===e&&(e=void 0))),void 0===e?Array:e}},ec95:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-container",[a("el-main",{staticClass:"num"},[a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:8}},[a("el-card",{staticStyle:{"background-color":"#de2e2e"},attrs:{shadow:"hover"}},[a("div",[a("p",[t._v(t._s(t.boardlist[0])),a("span",[t._v("人")])]),a("span",[t._v("在库学生总人数")])])])],1),a("el-col",{attrs:{span:8}},[a("el-card",{staticStyle:{"background-color":"#184794"},attrs:{shadow:"hover"}},[a("div",[a("p",[t._v(t._s(t.boardlist[1])),a("span",[t._v("人")])]),a("span",[t._v("在库本科生人数")])])])],1),a("el-col",{attrs:{span:8}},[a("el-card",{staticStyle:{"background-color":"#184794"},attrs:{shadow:"hover"}},[a("div",[a("p",[t._v(t._s(t.boardlist[2])),a("span",[t._v("人")])]),a("span",[t._v("在库研究生生人数")])])])],1)],1),a("br"),a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:8}},[a("el-card",{staticStyle:{"background-color":"orangered"},attrs:{shadow:"hover"}},[a("div",[a("p",[t._v(t._s(t.boardlist[3])),a("span",[t._v("个")])]),a("span",[t._v("在库专科生人数")])])])],1),a("el-col",{attrs:{span:8}},[a("el-card",{staticStyle:{"background-color":"seagreen"},attrs:{shadow:"hover"}},[a("div",[a("p",[t._v(t._s(t.boardlist[4])),a("span",[t._v("人")])]),a("span",[t._v("在库课程数")])])])],1),a("el-col",{attrs:{span:8}},[a("el-card",{staticStyle:{"background-color":"dimgrey"},attrs:{shadow:"hover"}},[a("div",[a("p",[t._v(t._s(t.boardlist[5])),a("span",[t._v("个")])]),a("span",[t._v("在库班级总数")])])])],1)],1)],1)],1),a("el-container",[a("el-main",{staticClass:"chart1"},[a("el-tag",{attrs:{type:"info",effect:"dark"}},[t._v("学生概览")]),a("el-tabs",{on:{"tab-click":t.stuOverView},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"性别统计",name:"sexconunt"}},[a("el-select",{attrs:{size:"mini",placeholder:"请选择年级"},on:{change:t.changeSexChart},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.options,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1),a("div",{staticStyle:{width:"600px",height:"350px"},attrs:{id:"sexchart"}})],1),a("el-tab-pane",{attrs:{label:"民族分布",name:"nationcount"}},[a("div",{staticStyle:{width:"600px",height:"350px"},attrs:{id:"nationchart"}})]),a("el-tab-pane",{attrs:{label:"年级人数统计",name:"gradecount"}},[a("div",{staticStyle:{width:"600px",height:"350px"},attrs:{id:"gradecountchart"}})]),a("el-tab-pane",{attrs:{label:"政治面貌分布",name:"politicalstatus"}},[a("div",{staticStyle:{width:"600px",height:"350px"},attrs:{id:"politicalstatuschart"}})])],1)],1),a("el-main",{staticClass:"chart2"},[a("el-tag",{attrs:{type:"info",effect:"dark"}},[t._v("成绩分布")]),a("el-tabs",{model:{value:t.tea_activename,callback:function(e){t.tea_activename=e},expression:"tea_activename"}},[a("el-tab-pane",{attrs:{label:"年级分布",name:"tea_grade_conunt"}},[a("div",{staticStyle:{width:"600px",height:"350px"},attrs:{id:"tea_grade_chart"}})])],1)],1)],1),a("el-container",[a("el-main",{staticClass:"chart3"},[a("el-tag",{attrs:{type:"info",effect:"dark"}},[t._v("生源地图")]),a("div",{staticStyle:{width:"600px",height:"350px"},attrs:{id:"stuMap"}})],1),a("el-main",{staticClass:"chart4"},[a("el-tag",{attrs:{type:"info",effect:"dark"}},[t._v("出勤率")]),a("div",{staticStyle:{width:"600px",height:"350px"},attrs:{id:"attendence"}})],1)],1),a("el-container",[a("el-main",{staticClass:"chart5",staticStyle:{height:"80px",color:"#000","font-weight":"800"}},[t._v("\n\t\t\t统计数据均排除空白数据和无效数据\n\t\t")])],1)],1)},i=[],o=(a("f3e2"),a("55dd"),a("8615"),a("6d67"),a("ac6a"),a("456d"),a("7f7f"),{name:"dashboard",data:function(){return{boardlist:[],activeName:"sexconunt",tea_activename:"tea_grade_conunt",automsgtitle:"注意",automsg:"该网站数据基于经管学院学生管理系统数据库!\n,为非官方数据，仅作参考！",options:[{value:"0",label:"全学院"}],value:"",gradelist:["全学院"],nationseries:[],gradeStuSeries:[]}},methods:{stuOverView:function(t,e){switch(t.name){case"sexconunt":this.changeSexChart("0");break;case"nationcount":this.drawNationChart();break;case"gradecount":this.drawGradeNumChart();break;case"politicalstatus":this.drawPoliticalStatusChart();break}},autoopen:function(t,e){var a=this.$createElement;this.$notify({title:t,message:a("i",{style:"color: red"},e)})},changeSexChart:function(t){var e=this;this.drawSexChart(t,this.bnum,this.gnum,0),this.$http.get("http://127.0.0.1:5000/overview/sexcount/grade?year="+t).then((function(a){var n=a.data;e.bnum=n.bnum,e.gnum=n.gnum,"0"==t&&(t="全学院"),e.drawSexChart(t,e.bnum,e.gnum,1)})).catch((function(t){console.log(t),e.autoopen("错误","网络错误,访问超时！")}))},drawSexChart:function(t,e,a,n){var i=this.$echarts.init(document.getElementById("sexchart")),o={tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},title:{text:t+"级性别比例",x:"center"},legend:{orient:"vertical",left:10,data:["男","女"]},series:[{name:t+"级性别比例",type:"pie",radius:["50%","70%"],avoidLabelOverlap:!1,label:{normal:{show:!1,position:"center"},emphasis:{show:!0,textStyle:{fontSize:"30",fontWeight:"bold"}}},labelLine:{normal:{show:!1}},data:[{value:e,name:"男"},{value:a,name:"女"}]}]};i.setOption(o),i.showLoading(),n&&i.hideLoading()},drawNationChart:function(){var t=this,e=this.$echarts.init(document.getElementById("nationchart"));e.showLoading(),this.$http.get("http://127.0.0.1:5000/overview/nation").then((function(a){var n=a.data;t.nationseries=[];for(var i=Object.keys(n),o=function(e){var a=[],o=Object.keys(n[i[e]]);o.map((function(t){a.push({name:t,value:n[i[e]][t]})})),t.nationseries.push({name:"0"==i[e]?"全学院":i[e],type:"treemap",breadcrumb:{show:!1},data:a})},r=0;r<i.length;r++)o(r);var s={tooltip:{},title:{top:5,left:"center",text:"民族分布",borderRadius:[5,5,0,0]},legend:{data:t.gradelist,selectedMode:"single",bottom:0,itemGap:2,type:"scroll"},series:t.nationseries};e.hideLoading(),e.setOption(s)})).catch((function(e){console.log(e),t.autoopen("错误","网络错误,访问超时！")}))},drawGradeNumChart:function(){var t=this,e=[],a=this.$echarts.init(document.getElementById("gradecountchart"));a.showLoading(),this.$http.get("http://127.0.0.1:5000/overview/grades").then((function(t){for(var n=t.data,i=0;i<Object.keys(n).length;i++)e.push({name:Object.keys(n)[i],value:Object.values(n)[i]});var o={tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},visualMap:{show:!1,min:700,max:900,inRange:{colorLightness:[0,2]}},series:[{name:"年级人数统计",type:"pie",radius:"70%",center:["50%","50%"],data:e.sort((function(t,e){return t.value-e.value})),roseType:"radius"}]};a.hideLoading(),a.setOption(o)})).catch((function(e){console.log(e),t.autoopen("错误","网络错误,访问超时！")}))},drawPoliticalStatusChart:function(){var t=this,e=this.$echarts.init(document.getElementById("politicalstatuschart"));e.showLoading(),this.$http.get("http://127.0.0.1:5000/overview/ps").then((function(a){var n=a.data,i=[],o={},r={},s=[],c=n.sort(t.$sortByArr(["termYear","psname"]));c.forEach((function(t){r[t.psname]?s.forEach((function(e){e.psname==t.psname&&e.content.push(t)})):(s.push({psname:t.psname,content:[t]}),r[t.psname]="existed")})),s.forEach((function(e){t.gradelist.forEach((function(t){return o[t]=0})),console.log(e["content"]),e["content"].forEach((function(t){o[t.termYear]+=1})),console.log(o),i.push({name:e.psname,type:"bar",stack:"总量",label:{show:!1,position:"insideRight"},data:Object.values(o)})}));var l={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{type:"scroll",data:["中共党员","共青团员","积极分子","群众","中共预备党员"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"value"},yAxis:{type:"category",data:Object.keys(o)},series:i};e.hideLoading(),e.setOption(l)})).catch((function(e){console.log(e),t.autoopen("错误","网络错误,访问超时！")}))},drawTeacherGradeChart:function(){var t=this,e=this.$echarts.init(document.getElementById("tea_grade_chart"));this.$http.get("http://127.0.0.1:5000/overview/read").then((function(t){var a=t.data,n=a,i={tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},title:{text:"全院阅读分布",left:"center"},legend:{type:"scroll",orient:"vertical",right:10,top:20,bottom:20,data:["极少","偶尔","经常","频繁","热爱"]},series:[{name:"全院阅读分布",type:"pie",radius:"70%",center:["40%","50%"],data:n,emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]};e.setOption(i)})).catch((function(e){console.log(e),t.autoopen("错误","网络错误,访问超时！")}))},dramStuMap:function(){var t=this.$echarts.init(document.getElementById("stuMap"));t.showLoading(),this.$http.get("http://127.0.0.1:5000/overview/stumap").then((function(e){var a=e.data;console.log(a);var n=a;console.log(n);var i={tooltip:{trigger:"item"},legend:{orient:"vertical",left:"left",data:["全学院"],type:"scroll"},visualMap:{type:"piecewise",top:"bottom",right:10,splitNumber:6,seriesIndex:[0],itemWidth:20,itemGap:2,pieces:[{gte:500,label:"500人以上",color:"#c1484e"},{gte:300,lte:499,label:"300-499人",color:"#d57b6e"},{gte:100,lte:299,label:"100-299人",color:"#d57b6e"},{gte:10,lte:99,label:"10-99人",color:"#df9a7e"},{lte:9,label:"1-9人",color:"#f5eda5"}],textStyle:{color:"#737373"}},toolbox:{show:!0,orient:"vertical",left:"right",top:"center",feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},restore:{show:!0},saveAsImage:{show:!0}}},series:[{name:"全学院",type:"map",mapType:"china",roam:!1,zoom:1.2,label:{normal:{show:!1},emphasis:{show:!1}},data:n}]};t.hideLoading(),t.setOption(i)}))},drawAttendChart:function(){var t=this,e=this.$echarts.init(document.getElementById("attendence"));this.$http.get("http://127.0.0.1:5000/overview/Cost").then((function(t){var a=t.data,n=a;console.log(n);var i={title:{text:"18年9月份学生消费(演示数据)",subtext:"(单位：千元)",left:"center"},xAxis:{type:"category",data:["2018-09-05","2018-09-10","2018-09-15","2018-09-20","2018-09-25","2018-09-30"]},yAxis:{type:"value",min:300,max:1e3},tooltip:{trigger:"axis"},series:[{data:n,type:"line",smooth:!0}]};e.setOption(i)})).catch((function(e){console.log(e),t.autoopen("错误","网络错误,访问超时！")}))}},mounted:function(){var t=this;this.autoopen(this.automsgtitle,this.automsg),this.$http.get("http://127.0.0.1:5000/overview/showBoard").then((function(e){var a=e.data;t.boardlist=a,console.log(t.boardlist)})).catch((function(e){console.log(e),t.autoopen("错误","网络错误,访问超时！")})),this.changeSexChart("0"),this.$http.get("http://127.0.0.1:5000/overview/listGrades").then((function(e){var a=e.data;console.log(a),t.gradelist.push.apply(t.gradelist,a),a.map((function(e){var a=e;2==e.length&&(a=e+"研究生"),t.options.push({value:e,label:a})}))})).catch((function(e){console.log(e),t.autoopen("错误","网络错误,访问超时！")})),this.drawTeacherGradeChart(),this.dramStuMap(),this.drawAttendChart()}}),r=o,s=(a("6f85"),a("2877")),c=Object(s["a"])(r,n,i,!1,null,"d5539d14",null);e["default"]=c.exports},f3e2:function(t,e,a){"use strict";var n=a("5ca1"),i=a("0a49")(0),o=a("2f21")([].forEach,!0);n(n.P+n.F*!o,"Array",{forEach:function(t){return i(this,t,arguments[1])}})}}]);
//# sourceMappingURL=chunk-137d4b91.b41719dd.js.map