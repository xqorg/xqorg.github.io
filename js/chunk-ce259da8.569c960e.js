(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ce259da8","chunk-1402da00"],{3153:function(e,t,i){e.exports=i.p+"assets/device.00274c0d.svg"},3705:function(e,t,i){"use strict";i.d(t,"f",(function(){return n})),i.d(t,"c",(function(){return c})),i.d(t,"d",(function(){return r})),i.d(t,"e",(function(){return s})),i.d(t,"a",(function(){return o})),i.d(t,"g",(function(){return d})),i.d(t,"b",(function(){return l}));var a=i("b775");function n(e){return Object(a["b"])({url:"/duck/user/list",method:"get",params:e})}function c(e){return Object(a["b"])({url:"/duck/user/"+e,method:"get"})}function r(){return Object(a["b"])({url:"/duck/user/self",method:"get"})}function s(){return Object(a["b"])({url:"/duck/user/init",method:"get"})}function o(e){return Object(a["b"])({url:"/duck/user",method:"post",data:e})}function d(e){return Object(a["b"])({url:"/duck/user",method:"put",data:e})}function l(e){return Object(a["b"])({url:"/duck/user/"+e,method:"delete"})}},"3cf8":function(e,t,i){"use strict";i("b72c")},4761:function(e,t,i){},"6c65":function(e,t,i){e.exports=i.p+"assets/vip.324895b8.svg"},a8ed:function(e,t,i){"use strict";i.d(t,"e",(function(){return n})),i.d(t,"c",(function(){return c})),i.d(t,"d",(function(){return r})),i.d(t,"a",(function(){return s})),i.d(t,"f",(function(){return o})),i.d(t,"b",(function(){return d}));var a=i("b775");function n(e){return Object(a["b"])({url:"/duck/device/list",method:"get",params:e})}function c(e){return Object(a["b"])({url:"/duck/device/"+e,method:"get"})}function r(e,t){return Object(a["b"])({url:"/duck/device/"+e+"/"+t,method:"get"})}function s(e){return Object(a["b"])({url:"/duck/device",method:"post",data:e})}function o(e){return Object(a["b"])({url:"/duck/device",method:"put",data:e})}function d(e){return Object(a["b"])({url:"/duck/device/"+e,method:"delete"})}},b72c:function(e,t,i){},c12a:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e._self._c;return t("div",[t("page-header-wrapper",[t("div",{staticClass:"table-page-search-wrapper"},[t("a-row",{attrs:{gutter:16}},[t("a-col",{attrs:{md:6,sm:24}},[t("a-input-search",{attrs:{placeholder:e.$t("device.number")+" "+e.$t("or")+" "+e.$t("device.name")},on:{search:e.onSearch},model:{value:e.searchKey,callback:function(t){e.searchKey=t},expression:"searchKey"}})],1),t("a-col",{attrs:{md:2,sm:4}},[t("a-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["duck:device:add"],expression:"['duck:device:add']"}],attrs:{type:"primary"},on:{click:function(t){return e.$refs.createForm.handleAdd()}}},[t("a-icon",{attrs:{type:"plus"}}),e._v(e._s(e.$t("add"))+" ")],1)],1)],1)],1),t("create-form",{ref:"createForm",attrs:{deviceStatusOptions:e.dict.type.duck_device_status},on:{ok:e.getList}})],1),t("br"),t("a-list",{attrs:{grid:{sm:1,md:3},"data-source":e.list},scopedSlots:e._u([{key:"renderItem",fn:function(a,n){return t("a-list-item",{},[t("a-card",{staticClass:"card-space",attrs:{hoverable:""}},[t("template",{staticClass:"ant-card-actions",slot:"actions"},[t("a-tooltip",[t("template",{slot:"title"},[e._v(" "+e._s(e.$t("device.not.delete"))+" ")]),t("a-icon",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["duck:device:remove"],expression:"['duck:device:remove']"}],key:"delete",attrs:{type:"delete"},on:{click:function(t){return e.handleDelete(a)}}})],2),t("a-icon",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["duck:device:edit"],expression:"['duck:device:edit']"}],key:"edit",attrs:{type:"edit"},on:{click:function(t){return e.$refs.createForm.handleUpdate(a,void 0)}}}),t("a-tooltip",[t("template",{slot:"title"},[e._v(" "+e._s(e.$t("device.create.control"))+" ")]),t("a-icon",{key:"dribbble",attrs:{type:"dribbble"},on:{click:function(t){return e.showCreateUrlMd(a)}}})],2)],1),t("a-card-meta",[t("div",{attrs:{slot:"title"},slot:"title"},["free"!=a.deviceFrom?t("div",{staticClass:"vip"},[t("img",{attrs:{src:i("6c65"),width:"30px"}})]):e._e(),e._v(" "+e._s(a.deviceName)+" "),t("div",{staticClass:"line-status"},[0==a.deviceTopic?t("span",[t("a-tooltip",[t("template",{slot:"title"},[e._v(" "+e._s(e.$t("device.offline"))+" ")]),t("a-icon",{attrs:{type:"disconnect"}})],2)],1):t("span",[t("a-tooltip",[t("template",{slot:"title"},[e._v(" "+e._s(e.$t("device.online"))+" ")]),t("a-icon",{staticStyle:{color:"#52c41a"},attrs:{type:"wifi"}})],2)],1)])]),t("a-avatar",{attrs:{slot:"avatar",src:i("3153")},slot:"avatar"}),t("div",{attrs:{slot:"description"},slot:"description"},[t("div",{staticStyle:{"margin-top":"8px"}},[e._v(" "+e._s(e.$t("device.number"))+"："),t("a-button",{attrs:{type:"dashed",size:"small"}},[t("span",{staticStyle:{"vertical-align":"-1px",color:"#ccc"}},[e._v(e._s(a.id))])])],1),t("div",{staticStyle:{"margin-top":"8px"}},[e._v(" "+e._s(e.$t("device.key"))+"："),t("a-button",{attrs:{type:"dashed",size:"small"},on:{click:function(t){e.warning(e.$t("device.key.tip"),e.$t("device.key.tip.message")+" : "+a.devicePassword)}}},[t("span",{staticStyle:{"vertical-align":"-1px"}},[e._v("◌◌◌◌◌◌◌◌")])])],1)])],1)],2)],1)}}])}),t("a-pagination",{staticClass:"ant-table-pagination",attrs:{"show-size-changer":"","show-quick-jumper":"",current:e.queryParam.pageNum,total:e.total,"page-size":e.queryParam.pageSize},on:{showSizeChange:e.onShowSizeChange,change:e.changeSize}}),t("a-modal",{attrs:{title:e.$t("device.create.control"),okText:e.$t("device.create.close"),footer:null},model:{value:e.createUrlMd,callback:function(t){e.createUrlMd=t},expression:"createUrlMd"}},[t("a-alert",{attrs:{message:e.$t("device.create.control.title"),type:"info","show-icon":""}},[t("span",{attrs:{slot:"description"},slot:"description"},[e._v(" "+e._s(e.$t("device.create.control.content"))+" "),t("a",{attrs:{href:"https://wequ.net/getting-started.html",target:"_blank"}},[e._v(e._s(e.$t("device.create.control.start")))])])]),t("br"),t("a-spin",{attrs:{spinning:e.createLoading}},[t("a-select",{staticStyle:{width:"100%"},attrs:{"show-search":"","label-in-value":"",value:e.value,placeholder:e.$t("device.create.control.search"),size:"large","filter-option":!1,"not-found-content":e.fetching?void 0:null},on:{search:e.fetchShell,change:e.handleChangeShell}},[t("a-icon",{attrs:{slot:"suffixIcon",type:"search"},slot:"suffixIcon"}),e.fetching?t("a-spin",{attrs:{slot:"notFoundContent",size:"small"},slot:"notFoundContent"}):e._e(),e._l(e.data,(function(i){return t("a-select-option",{key:i.value},[t("a-tag",{attrs:{color:"green"}},[e._v(" "+e._s(i.text)+" ")])],1)}))],2)],1),t("br"),e.createUrlInput?t("a-alert",{staticStyle:{"margin-top":"6px"},attrs:{message:e.$t("device.create.control.link"),type:"success"}},[t("p",{attrs:{slot:"description"},slot:"description"},[t("a-textarea",{attrs:{placeholder:"Please waiting...","auto-size":{minRows:2,maxRows:2}},model:{value:e.createUrlText,callback:function(t){e.createUrlText=t},expression:"createUrlText"}}),t("br"),e._v(" "+e._s(e.$t("device.create.control.link.tip"))+" "),t("a-button",{attrs:{type:"link"},on:{click:e.openControlUrl}},[e._v(" "+e._s(e.$t("device.create.control.link.test"))+" ")])],1)]):e._e(),t("br"),t("br")],1)],1)},n=[],c=i("5530"),r=(i("ac1f"),i("d81d"),i("a8ed")),s=i("3705"),o=i("eedf"),d=i("d78f"),l=i("435a"),u=i("b047"),h=i.n(u),m={name:"Device",components:{CreateForm:d["default"]},mixins:[l["a"]],dicts:["duck_device_status"],data:function(){return this.lastFetchId=0,this.fetchShell=h()(this.fetchShell,800),{currentDeviceId:"",data:[],value:[],searchKey:"",fetching:!1,createUrlMd:!1,createUrlText:"",createUrlInput:!1,createLoading:!1,list:[],selectedRowKeys:[],selectedRows:[],advanced:!1,single:!0,multiple:!0,ids:[],loading:!1,total:0,queryParam:{id:null,deviceName:null,deviceStatus:null,pageNum:1,pageSize:10},columns:[{title:this.$t("device.number"),scopedSlots:{customRender:"id"},dataIndex:"id",ellipsis:!0,align:"center"},{title:"设备名称",dataIndex:"deviceName",ellipsis:!0,align:"center"},{title:"是否在线",dataIndex:"deviceTopic",scopedSlots:{customRender:"deviceTopic"},ellipsis:!0,align:"center"},{title:"设备密钥",dataIndex:"devicePassword",scopedSlots:{customRender:"devicePassword"},ellipsis:!0,align:"center"},{title:"控制链接",dataIndex:"deviceUrl",scopedSlots:{customRender:"deviceUrl"},ellipsis:!0,align:"center"},{title:"设备类型",dataIndex:"deviceFrom",scopedSlots:{customRender:"deviceFrom"},ellipsis:!0,align:"center"},{title:"操作",dataIndex:"operation",width:"18%",scopedSlots:{customRender:"operation"},align:"center"}]}},filters:{},created:function(){this.getDuckUser(),this.getList()},computed:{},watch:{},methods:{openControlUrl:function(){window.open(this.createUrlText,"_blank")},fetchShell:function(e){var t=this;this.lastFetchId+=1;var i=this.lastFetchId;this.data=[],this.fetching=!0;var a={shellName:e,pageNum:1,pageSize:10};Object(o["d"])(a).then((function(e){if(i===t.lastFetchId){for(var a in e.rows){var n={text:e.rows[a].shellName,value:e.rows[a].id};t.data.push(n)}t.fetching=!1}}))},handleChangeShell:function(e){var t=this;Object.assign(this,{value:e,data:[],fetching:!1}),this.createLoading=!0,Object(r["d"])(this.currentDeviceId,this.value.key).then((function(e){t.createUrlText="https://api.wequ.net/app/duck/device/publish/"+e.data.secret,t.createLoading=!1,t.createUrlInput=!0}))},showCreateUrlMd:function(e){Object.assign(this,{createUrlText:"",data:[],value:[],createUrlInput:!1,createUrlMd:!0,currentDeviceId:e.id})},warning:function(e,t){this.$warning({title:e,content:t})},getList:function(){var e=this;this.loading=!0,Object(r["e"])(this.queryParam).then((function(t){e.list=t.rows,e.total=t.total,e.loading=!1}))},getDuckUser:function(){var e=this;Object(s["d"])().then((function(t){if(void 0==t.data){var i=e.$createElement,a=e;e.$info({title:e.$t("site.account.tip"),content:i("div",{},[i("p",""),i("p",e.$t("site.account.content"))]),onOk:function(){Object(s["e"])().then((function(e){1==e.data&&a.$message.success("Success!")}))}})}}))},handleQuery:function(){this.queryParam.pageNum=1,this.getList()},onSearch:function(){7===this.searchKey.length&&/^\d+$/.test(this.searchKey)?(this.queryParam.deviceName="",this.queryParam.id=this.searchKey):(this.queryParam.id="",this.queryParam.deviceName=this.searchKey),this.getList()},resetQuery:function(){this.queryParam={id:void 0,deviceName:void 0,deviceStatus:void 0,pageNum:1,pageSize:10},this.handleQuery()},onShowSizeChange:function(e,t){this.queryParam.pageSize=t,this.getList()},changeSize:function(e,t){this.queryParam.pageNum=e,this.queryParam.pageSize=t,this.getList()},onSelectChange:function(e,t){this.selectedRowKeys=e,this.selectedRows=t,this.ids=this.selectedRows.map((function(e){return e.id})),this.single=1!==e.length,this.multiple=!e.length},toggleAdvanced:function(){this.advanced=!this.advanced},handleDelete:function(e){var t=this,i=e.id||this.ids;this.$confirm({title:this.$t("delete.tip"),content:i+" "+this.$t("delete.tip.message")+" "+this.$t("device.not.delete"),onOk:function(){return Object(r["b"])(i).then((function(){t.onSelectChange([],[]),t.getList(),t.$message.success("Delete Success",3)}))},onCancel:function(){}})},handleExport:function(){var e=this;this.$confirm({title:"是否确认导出?",content:"此操作将导出当前条件下所有数据而非选中数据",onOk:function(){e.download("duck/device/export",Object(c["a"])({},e.queryParam),"device_".concat((new Date).getTime(),".xlsx"))},onCancel:function(){}})}}},f=m,p=(i("3cf8"),i("2877")),v=Object(p["a"])(f,a,n,!1,null,"fdfcf64c",null);t["default"]=v.exports},ca78:function(e,t,i){"use strict";i("4761")},d78f:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e._self._c;return t("a-drawer",{attrs:{width:"350px","label-col":4,"wrapper-col":14,visible:e.open},on:{close:e.onClose}},[t("a-divider",{attrs:{orientation:"left"}},[t("b",[e._v(e._s(e.formTitle))])]),t("a-form-model",{ref:"form",attrs:{model:e.form,rules:e.rules}},[t("a-form-model-item",{attrs:{label:e.$t("device.name"),prop:"deviceName"}},[t("a-input",{attrs:{placeholder:e.$t("device.create.name.tip"),maxLength:15},model:{value:e.form.deviceName,callback:function(t){e.$set(e.form,"deviceName",t)},expression:"form.deviceName"}})],1),t("a-form-model-item",{attrs:{label:e.$t("device.key"),prop:"devicePassword"}},[t("a-input",{attrs:{placeholder:e.$t("device.create.number.tip"),maxLength:6},model:{value:e.form.devicePassword,callback:function(t){e.$set(e.form,"devicePassword",t)},expression:"form.devicePassword"}})],1),t("div",{staticClass:"bottom-control"},[t("a-space",[t("a-button",{attrs:{type:"primary",loading:e.submitLoading},on:{click:e.submitForm}},[e._v(" "+e._s(e.$t("save"))+" ")]),t("a-button",{attrs:{type:"dashed"},on:{click:e.cancel}},[e._v(" "+e._s(e.$t("cancel"))+" ")])],1)],1)],1)],1)},n=[],c=(i("d3b7"),i("a8ed")),r={name:"CreateForm",props:{deviceStatusOptions:{type:Array,required:!0}},components:{},data:function(){return{submitLoading:!1,formTitle:"",form:{deviceName:null,devicePassword:null},formType:1,open:!1,rules:{deviceName:[{required:!0,message:this.$t("device.create.name.war"),trigger:"blur"}],devicePassword:[{required:!0,message:this.$t("device.create.key.war"),trigger:"blur"}]}}},filters:{},created:function(){},computed:{},watch:{},mounted:function(){},methods:{onClose:function(){this.open=!1},cancel:function(){this.open=!1,this.reset()},reset:function(){this.formType=1,this.form={deviceName:null,devicePassword:null}},handleAdd:function(e){this.reset(),this.formType=1,this.open=!0,this.formTitle=this.$t("add")},handleUpdate:function(e,t){var i=this;this.reset(),this.formType=2;var a=e?e.id:t;Object(c["c"])(a).then((function(e){i.form=e.data,i.open=!0,i.formTitle=i.$t("edit")}))},submitForm:function(){var e=this;this.$refs.form.validate((function(t){if(!t)return!1;e.submitLoading=!0,void 0!==e.form.id&&null!==e.form.id?Object(c["f"])(e.form).then((function(t){e.$message.success("修改成功",3),e.open=!1,e.$emit("ok")})).finally((function(){e.submitLoading=!1})):Object(c["a"])(e.form).then((function(t){e.$message.success("Add Success",3),e.open=!1,e.$emit("ok")})).finally((function(){e.submitLoading=!1}))}))}}},s=r,o=(i("ca78"),i("2877")),d=Object(o["a"])(s,a,n,!1,null,null,null);t["default"]=d.exports},eedf:function(e,t,i){"use strict";i.d(t,"d",(function(){return n})),i.d(t,"c",(function(){return c})),i.d(t,"a",(function(){return r})),i.d(t,"e",(function(){return s})),i.d(t,"b",(function(){return o}));var a=i("b775");function n(e){return Object(a["b"])({url:"/duck/shell/list",method:"get",params:e})}function c(e){return Object(a["b"])({url:"/duck/shell/"+e,method:"get"})}function r(e){return Object(a["b"])({url:"/duck/shell",method:"post",data:e})}function s(e){return Object(a["b"])({url:"/duck/shell",method:"put",data:e})}function o(e){return Object(a["b"])({url:"/duck/shell/"+e,method:"delete"})}}}]);