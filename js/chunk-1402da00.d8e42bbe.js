(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1402da00"],{4761:function(e,t,n){},a8ed:function(e,t,n){"use strict";n.d(t,"e",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return c})),n.d(t,"a",(function(){return a})),n.d(t,"f",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n("b775");function i(e){return Object(r["b"])({url:"/duck/device/list",method:"get",params:e})}function o(e){return Object(r["b"])({url:"/duck/device/"+e,method:"get"})}function c(e,t){return Object(r["b"])({url:"/duck/device/"+e+"/"+t,method:"get"})}function a(e){return Object(r["b"])({url:"/duck/device",method:"post",data:e})}function s(e){return Object(r["b"])({url:"/duck/device",method:"put",data:e})}function d(e){return Object(r["b"])({url:"/duck/device/"+e,method:"delete"})}},ca78:function(e,t,n){"use strict";n("4761")},d78f:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e._self._c;return t("a-drawer",{attrs:{width:"350px","label-col":4,"wrapper-col":14,visible:e.open},on:{close:e.onClose}},[t("a-divider",{attrs:{orientation:"left"}},[t("b",[e._v(e._s(e.formTitle))])]),t("a-form-model",{ref:"form",attrs:{model:e.form,rules:e.rules}},[t("a-form-model-item",{attrs:{label:e.$t("device.name"),prop:"deviceName"}},[t("a-input",{attrs:{placeholder:e.$t("device.create.name.tip"),maxLength:15},model:{value:e.form.deviceName,callback:function(t){e.$set(e.form,"deviceName",t)},expression:"form.deviceName"}})],1),t("a-form-model-item",{attrs:{label:e.$t("device.key"),prop:"devicePassword"}},[t("a-input",{attrs:{placeholder:e.$t("device.create.number.tip"),maxLength:6},model:{value:e.form.devicePassword,callback:function(t){e.$set(e.form,"devicePassword",t)},expression:"form.devicePassword"}})],1),t("div",{staticClass:"bottom-control"},[t("a-space",[t("a-button",{attrs:{type:"primary",loading:e.submitLoading},on:{click:e.submitForm}},[e._v(" "+e._s(e.$t("save"))+" ")]),t("a-button",{attrs:{type:"dashed"},on:{click:e.cancel}},[e._v(" "+e._s(e.$t("cancel"))+" ")])],1)],1)],1)],1)},i=[],o=(n("d3b7"),n("a8ed")),c={name:"CreateForm",props:{deviceStatusOptions:{type:Array,required:!0}},components:{},data:function(){return{submitLoading:!1,formTitle:"",form:{deviceName:null,devicePassword:null},formType:1,open:!1,rules:{deviceName:[{required:!0,message:this.$t("device.create.name.war"),trigger:"blur"}],devicePassword:[{required:!0,message:this.$t("device.create.key.war"),trigger:"blur"}]}}},filters:{},created:function(){},computed:{},watch:{},mounted:function(){},methods:{onClose:function(){this.open=!1},cancel:function(){this.open=!1,this.reset()},reset:function(){this.formType=1,this.form={deviceName:null,devicePassword:null}},handleAdd:function(e){this.reset(),this.formType=1,this.open=!0,this.formTitle=this.$t("add")},handleUpdate:function(e,t){var n=this;this.reset(),this.formType=2;var r=e?e.id:t;Object(o["c"])(r).then((function(e){n.form=e.data,n.open=!0,n.formTitle=n.$t("edit")}))},submitForm:function(){var e=this;this.$refs.form.validate((function(t){if(!t)return!1;e.submitLoading=!0,void 0!==e.form.id&&null!==e.form.id?Object(o["f"])(e.form).then((function(t){e.$message.success("修改成功",3),e.open=!1,e.$emit("ok")})).finally((function(){e.submitLoading=!1})):Object(o["a"])(e.form).then((function(t){e.$message.success("Add Success",3),e.open=!1,e.$emit("ok")})).finally((function(){e.submitLoading=!1}))}))}}},a=c,s=(n("ca78"),n("2877")),d=Object(s["a"])(a,r,i,!1,null,null,null);t["default"]=d.exports}}]);