(window.webpackJsonp=window.webpackJsonp||[]).push([[10,20],{310:function(t,e,s){},311:function(t,e,s){"use strict";s.r(e);var i={name:"QuickStart",props:{link:{type:String,require:!0},text:{type:String,require:!1,default:"快速开始"}}},a=(s(312),s(44)),n=Object(a.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("a",{staticClass:"quick-start",attrs:{href:this.link}},[this._v(this._s(this.text))])}),[],!1,null,"41c747b0",null);e.default=n.exports},312:function(t,e,s){"use strict";s(310)},319:function(t,e,s){},335:function(t,e,s){t.exports=s.p+"assets/img/code-debug.65df077b.gif"},336:function(t,e,s){t.exports=s.p+"assets/img/code-fusion.e888e7af.gif"},337:function(t,e,s){t.exports=s.p+"assets/img/code-auxiliary.a4d7cbf3.gif"},338:function(t,e,s){t.exports=s.p+"assets/img/code-quality.011bfc14.gif"},339:function(t,e,s){t.exports=s.p+"assets/img/code-action.15a5391f.gif"},340:function(t,e,s){"use strict";s(319)},351:function(t,e,s){"use strict";s.r(e);s(164);var i={name:"Carousel",components:{QuickStart:s(311).default},data:function(){return{carouselItems:[{adjective:"极简",text:"的开发流程",message:"我们将创建、调试和发布项目的操作通过插件的方式集成到了常用的编辑器中，让项目的开发流程更简单。",img:s(335)},{adjective:"友好",text:"的开发体验",message:"我们提供了基于物料的可视化开发方式，区块组装生成页面，一键添加物料到代码，这对于新人来说非常友好。",img:s(336)},{adjective:"强大",text:"的编码辅助",message:"代码补全，定义预览与跳转，代码片段，代码重构的多重助力，让前端工程开发更轻松。不但支持 JavaScript 文件，对样式文件同样有效。",img:s(337)},{adjective:"详尽",text:"的代码分析",message:"非常快速的获取多维度检测报告，支持一键快速修复问题。帮助团队实现代码规范统一，提升和改善代码质量。并为阿里内部工程提供数据分析服务。",img:s(338)},{adjective:"完善",text:"的编程指标",message:"我们自动追踪您在编辑器中的编码行为，通过对收集到的数据进行量化，以帮助您从数据中学习，更高效地编写代码，提高生产力。",img:s(339)}],activeIndex:0,timeId:null}},mounted:function(){this.createTick()},methods:{createTick:function(){var t=this;this.timeId&&clearInterval(this.timeId),this.timeId=setInterval((function(){t.activeIndex=(t.activeIndex+1)%5}),3e4)},handleChangeActive:function(t){this.activeIndex=t,this.createTick()},handleAdd:function(){this.activeIndex=(this.activeIndex+1)%5,this.createTick()},handleDesc:function(){this.activeIndex=(this.activeIndex-1+5)%5,this.createTick()}}},a=(s(340),s(44)),n=Object(a.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"carousel-container"},[s("nav",{staticClass:"nav-items"},t._l(t.carouselItems,(function(e,i){return s("li",{key:i,staticClass:"nav-item",class:t.activeIndex===i?"nav-item-active":"",on:{click:function(e){return t.handleChangeActive(i)}}},[t._v("\n      "+t._s(e.adjective)+t._s(t.activeIndex===i?e.text:"")+"\n    ")])})),0),t._v(" "),s("transition",{attrs:{name:"fade",mode:"out-in"}},[s("p",{key:t.carouselItems[t.activeIndex].message,staticClass:"carousel-message"},[t._v("\n      "+t._s(t.carouselItems[t.activeIndex].message)+"\n    ")])]),t._v(" "),s("quick-start",{key:t.carouselItems[t.activeIndex].link,staticClass:"quick-start",attrs:{text:"安装 VS Code 插件",link:"vscode:extension/iceworks-team.iceworks"}}),t._v(" "),s("div",{staticClass:"carousel-wrapper"},[s("button",{staticClass:"carousel-button left iconfont",on:{click:t.handleDesc}},[t._v("")]),t._v(" "),s("div",{staticClass:"carousel-slide-container"},[s("transition",{attrs:{name:"fade",mode:"out-in"}},[s("img",{key:t.carouselItems[t.activeIndex].message,attrs:{src:t.carouselItems[t.activeIndex].img,alt:"carousel-img"}})])],1),t._v(" "),s("button",{staticClass:"carousel-button right iconfont",on:{click:t.handleAdd}},[t._v("")])])],1)}),[],!1,null,"8577cd5e",null);e.default=n.exports}}]);