(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cb6e8"],{"4a49":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t._self._c;return e("a-spin",{attrs:{spinning:t.loading,tip:"加载中..."}},[e("div",{style:"height:"+t.height},[e("iframe",{staticStyle:{width:"100%",height:"100%"},attrs:{src:t.src,frameborder:"no",scrolling:"auto"}})])])},o=[],c={name:"Swagger",components:{},data:function(){return{src:"https://api.wequ.net/app/swagger-ui/index.html",height:document.documentElement.clientHeight-94.5+"px;",loading:!0}},filters:{},created:function(){},computed:{},watch:{},mounted:function(){var t=this;setTimeout((function(){t.loading=!1}),230);var e=this;window.onresize=function(){e.height=document.documentElement.clientHeight-94.5+"px;"}},methods:{}},a=c,s=n("2877"),r=Object(s["a"])(a,i,o,!1,null,null,null);e["default"]=r.exports}}]);