(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6a5f3dc2","chunk-6bf492ba"],{3384:function(e,t,a){"use strict";a.r(t);a("b0c0"),a("a4d3"),a("e01a");var n=function(){var e=this,t=e._self._c;return t("a-drawer",{attrs:{width:"35%","label-col":4,"wrapper-col":14,visible:e.open},on:{close:e.onClose}},[t("a-divider",{attrs:{orientation:"left"}},[t("b",[e._v(e._s(e.formTitle))])]),t("a-form-model",{ref:"form",attrs:{model:e.form,rules:e.rules}},[t("a-form-model-item",{attrs:{label:"商品名称",prop:"name"}},[t("a-input",{attrs:{placeholder:"请输入商品名称"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),t("a-form-model-item",{attrs:{label:"商品描述",prop:"description"}},[t("a-input",{attrs:{placeholder:"请输入商品描述"},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1),t("a-form-model-item",{attrs:{label:"商品价格",prop:"price"}},[t("a-input",{attrs:{placeholder:"请输入商品价格"},model:{value:e.form.price,callback:function(t){e.$set(e.form,"price",t)},expression:"form.price"}})],1),t("a-form-model-item",{attrs:{label:"商品数量",prop:"quantity"}},[t("a-input",{attrs:{placeholder:"请输入商品数量"},model:{value:e.form.quantity,callback:function(t){e.$set(e.form,"quantity",t)},expression:"form.quantity"}})],1),t("a-form-model-item",{attrs:{label:"限制购买数量，-1不限制",prop:"buyLimit"}},[t("a-input",{attrs:{placeholder:"请输入限制购买数量，-1不限制"},model:{value:e.form.buyLimit,callback:function(t){e.$set(e.form,"buyLimit",t)},expression:"form.buyLimit"}})],1),t("a-form-model-item",{attrs:{label:"商品状态",prop:"status"}},[t("a-radio-group",{attrs:{"button-style":"solid"},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}},e._l(e.statusOptions,(function(a,n){return t("a-radio-button",{key:n,attrs:{value:a.value}},[e._v(e._s(a.label))])})),1)],1),t("a-form-model-item",{attrs:{label:"商品销量",prop:"salesVolume"}},[t("a-input",{attrs:{placeholder:"请输入商品销量"},model:{value:e.form.salesVolume,callback:function(t){e.$set(e.form,"salesVolume",t)},expression:"form.salesVolume"}})],1),t("div",{staticClass:"bottom-control"},[t("a-space",[t("a-button",{attrs:{type:"primary",loading:e.submitLoading},on:{click:e.submitForm}},[e._v(" 保存 ")]),t("a-button",{attrs:{type:"dashed"},on:{click:e.cancel}},[e._v(" 取消 ")])],1)],1)],1)],1)},i=[],r=(a("d3b7"),a("9ef0")),o={name:"CreateForm",props:{statusOptions:{type:Array,required:!0}},components:{},data:function(){return{submitLoading:!1,formTitle:"",form:{id:null,name:null,description:null,price:null,quantity:null,buyLimit:null,status:0,salesVolume:null,createTime:null,updateTime:null},formType:1,open:!1,rules:{name:[{required:!0,message:"商品名称不能为空",trigger:"blur"}],description:[{required:!0,message:"商品描述不能为空",trigger:"blur"}],price:[{required:!0,message:"商品价格不能为空",trigger:"blur"}],quantity:[{required:!0,message:"商品数量不能为空",trigger:"blur"}],buyLimit:[{required:!0,message:"限制购买数量，-1不限制不能为空",trigger:"blur"}],salesVolume:[{required:!0,message:"商品销量不能为空",trigger:"blur"}]}}},filters:{},created:function(){},computed:{},watch:{},mounted:function(){},methods:{onClose:function(){this.open=!1},cancel:function(){this.open=!1,this.reset()},reset:function(){this.formType=1,this.form={id:null,name:null,description:null,price:null,quantity:null,buyLimit:null,status:0,salesVolume:null,createTime:null,updateTime:null}},handleAdd:function(e){this.reset(),this.formType=1,this.open=!0,this.formTitle="添加"},handleUpdate:function(e,t){var a=this;this.reset(),this.formType=2;var n=e?e.id:t;Object(r["c"])(n).then((function(e){a.form=e.data,a.open=!0,a.formTitle="修改"}))},submitForm:function(){var e=this;this.$refs.form.validate((function(t){if(!t)return!1;e.submitLoading=!0,void 0!==e.form.id&&null!==e.form.id?Object(r["f"])(e.form).then((function(t){e.$message.success("修改成功",3),e.open=!1,e.$emit("ok")})).finally((function(){e.submitLoading=!1})):Object(r["a"])(e.form).then((function(t){e.$message.success("新增成功",3),e.open=!1,e.$emit("ok")})).finally((function(){e.submitLoading=!1}))}))}}},s=o,l=a("2877"),u=Object(l["a"])(s,n,i,!1,null,null,null);t["default"]=u.exports},"9ef0":function(e,t,a){"use strict";a.d(t,"d",(function(){return i})),a.d(t,"e",(function(){return r})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return s})),a.d(t,"f",(function(){return l})),a.d(t,"b",(function(){return u}));var n=a("b775");function i(e){return Object(n["b"])({url:"/payment/goods/list",method:"get",params:e})}function r(){return Object(n["b"])({url:"/payment/goods/nameList",method:"get"})}function o(e){return Object(n["b"])({url:"/payment/goods/"+e,method:"get"})}function s(e){return Object(n["b"])({url:"/payment/goods",method:"post",data:e})}function l(e){return Object(n["b"])({url:"/payment/goods",method:"put",data:e})}function u(e){return Object(n["b"])({url:"/payment/goods/"+e,method:"delete"})}},ad7f:function(e,t,a){"use strict";a.r(t);a("b0c0");var n=function(){var e=this,t=e._self._c;return t("page-header-wrapper",[t("a-card",{attrs:{bordered:!1}},[t("div",{staticClass:"table-page-search-wrapper"},[t("a-form",{attrs:{layout:"inline"}},[t("a-row",{attrs:{gutter:48}},[t("a-col",{attrs:{md:8,sm:24}},[t("a-form-item",{attrs:{label:"商品名称",prop:"name"}},[t("a-input",{attrs:{placeholder:"请输入商品名称","allow-clear":""},model:{value:e.queryParam.name,callback:function(t){e.$set(e.queryParam,"name",t)},expression:"queryParam.name"}})],1)],1),t("a-col",{attrs:{md:e.advanced?24:8,sm:24}},[t("span",{staticClass:"table-page-search-submitButtons",style:e.advanced&&{float:"right",overflow:"hidden"}||{}},[t("a-button",{attrs:{type:"primary"},on:{click:e.handleQuery}},[t("a-icon",{attrs:{type:"search"}}),e._v("查询")],1),t("a-button",{staticStyle:{"margin-left":"8px"},on:{click:e.resetQuery}},[t("a-icon",{attrs:{type:"redo"}}),e._v("重置")],1)],1)])],1)],1)],1),t("div",{staticClass:"table-operations"},[t("a-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["payment:goods:add"],expression:"['payment:goods:add']"}],attrs:{type:"primary"},on:{click:function(t){return e.$refs.createForm.handleAdd()}}},[t("a-icon",{attrs:{type:"plus"}}),e._v("新增 ")],1),t("a-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["payment:goods:edit"],expression:"['payment:goods:edit']"}],attrs:{type:"primary",disabled:e.single},on:{click:function(t){return e.$refs.createForm.handleUpdate(void 0,e.ids)}}},[t("a-icon",{attrs:{type:"edit"}}),e._v("修改 ")],1),t("a-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["payment:goods:remove"],expression:"['payment:goods:remove']"}],attrs:{type:"danger",disabled:e.multiple},on:{click:e.handleDelete}},[t("a-icon",{attrs:{type:"delete"}}),e._v("删除 ")],1),t("a-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["payment:goods:export"],expression:"['payment:goods:export']"}],attrs:{type:"primary"},on:{click:e.handleExport}},[t("a-icon",{attrs:{type:"download"}}),e._v("导出 ")],1),t("table-setting",{style:{float:"right"},attrs:{"table-size":e.tableSize,"refresh-loading":e.loading},on:{"update:tableSize":function(t){e.tableSize=t},"update:table-size":function(t){e.tableSize=t},refresh:e.getList},model:{value:e.columns,callback:function(t){e.columns=t},expression:"columns"}})],1),t("create-form",{ref:"createForm",attrs:{statusOptions:e.dict.type.sys_goods_status},on:{ok:e.getList}}),t("a-table",{attrs:{loading:e.loading,size:e.tableSize,rowKey:"id",columns:e.columns,"data-source":e.list,"row-selection":{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange},pagination:!1,bordered:e.tableBordered},scopedSlots:e._u([{key:"status",fn:function(a,n){return t("span",{},[t("dict-tag",{attrs:{options:e.dict.type["sys_goods_status"],value:n.status}})],1)}},{key:"createTime",fn:function(a,n){return t("span",{},[e._v(" "+e._s(e.parseTime(n.createTime))+" ")])}},{key:"updateTime",fn:function(a,n){return t("span",{},[e._v(" "+e._s(e.parseTime(n.updateTime))+" ")])}},{key:"operation",fn:function(a,n){return t("span",{},[t("a-divider",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["payment:goods:edit"],expression:"['payment:goods:edit']"}],attrs:{type:"vertical"}}),t("a",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["payment:goods:edit"],expression:"['payment:goods:edit']"}],on:{click:function(t){return e.$refs.createForm.handleUpdate(n,void 0)}}},[t("a-icon",{attrs:{type:"edit"}}),e._v("修改 ")],1),t("a-divider",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["payment:goods:remove"],expression:"['payment:goods:remove']"}],attrs:{type:"vertical"}}),t("a",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["payment:goods:remove"],expression:"['payment:goods:remove']"}],on:{click:function(t){return e.handleDelete(n)}}},[t("a-icon",{attrs:{type:"delete"}}),e._v("删除 ")],1)],1)}}])}),t("a-pagination",{staticClass:"ant-table-pagination",attrs:{"show-size-changer":"","show-quick-jumper":"",current:e.queryParam.pageNum,total:e.total,"page-size":e.queryParam.pageSize,showTotal:function(e){return"共 ".concat(e," 条")}},on:{showSizeChange:e.onShowSizeChange,change:e.changeSize}})],1)],1)},i=[],r=a("5530"),o=(a("d81d"),a("9ef0")),s=a("3384"),l=a("435a"),u={name:"Goods",components:{CreateForm:s["default"]},mixins:[l["a"]],dicts:["sys_goods_status"],data:function(){return{list:[],selectedRowKeys:[],selectedRows:[],advanced:!1,single:!0,multiple:!0,ids:[],loading:!1,total:0,queryParam:{name:null,pageNum:1,pageSize:10},columns:[{title:"商品名称",dataIndex:"name",ellipsis:!0,align:"center"},{title:"商品描述",dataIndex:"description",ellipsis:!0,align:"center"},{title:"商品价格",dataIndex:"price",ellipsis:!0,align:"center"},{title:"商品数量",dataIndex:"quantity",ellipsis:!0,align:"center"},{title:"限制购买数量，-1不限制",dataIndex:"buyLimit",ellipsis:!0,align:"center"},{title:"商品状态",dataIndex:"status",scopedSlots:{customRender:"status"},ellipsis:!0,align:"center"},{title:"商品销量",dataIndex:"salesVolume",ellipsis:!0,align:"center"},{title:"创建时间",dataIndex:"createTime",scopedSlots:{customRender:"createTime"},ellipsis:!0,align:"center"},{title:"更新时间",dataIndex:"updateTime",scopedSlots:{customRender:"updateTime"},ellipsis:!0,align:"center"},{title:"操作",dataIndex:"operation",width:"18%",scopedSlots:{customRender:"operation"},align:"center"}]}},filters:{},created:function(){this.getList()},computed:{},watch:{},methods:{getList:function(){var e=this;this.loading=!0,Object(o["d"])(this.queryParam).then((function(t){e.list=t.rows,e.total=t.total,e.loading=!1}))},handleQuery:function(){this.queryParam.pageNum=1,this.getList()},resetQuery:function(){this.queryParam={name:void 0,pageNum:1,pageSize:10},this.handleQuery()},onShowSizeChange:function(e,t){this.queryParam.pageSize=t,this.getList()},changeSize:function(e,t){this.queryParam.pageNum=e,this.queryParam.pageSize=t,this.getList()},onSelectChange:function(e,t){this.selectedRowKeys=e,this.selectedRows=t,this.ids=this.selectedRows.map((function(e){return e.id})),this.single=1!==e.length,this.multiple=!e.length},toggleAdvanced:function(){this.advanced=!this.advanced},handleDelete:function(e){var t=this,a=e.id||this.ids;this.$confirm({title:"确认删除所选中数据?",content:"当前选中编号为"+a+"的数据",onOk:function(){return Object(o["b"])(a).then((function(){t.onSelectChange([],[]),t.getList(),t.$message.success("删除成功",3)}))},onCancel:function(){}})},handleExport:function(){var e=this;this.$confirm({title:"是否确认导出?",content:"此操作将导出当前条件下所有数据而非选中数据",onOk:function(){e.download("payment/goods/export",Object(r["a"])({},e.queryParam),"goods_".concat((new Date).getTime(),".xlsx"))},onCancel:function(){}})}}},c=u,d=a("2877"),m=Object(d["a"])(c,n,i,!1,null,null,null);t["default"]=m.exports}}]);