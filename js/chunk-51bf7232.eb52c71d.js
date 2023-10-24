(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-51bf7232"],{"9f51":function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e._self._c;return t("a-drawer",{attrs:{width:"35%","label-col":4,"wrapper-col":14,visible:e.open},on:{close:e.onClose}},[t("a-divider",{attrs:{orientation:"left"}},[t("b",[e._v(e._s(e.formTitle))])]),t("a-form-model",{ref:"form",attrs:{model:e.form,rules:e.rules}},[t("a-form-model-item",{attrs:{label:"上级部门",prop:"parentId"}},[t("a-tree-select",{staticStyle:{width:"100%"},attrs:{"dropdown-style":{maxHeight:"400px",overflow:"auto"},"tree-data":e.deptOptions,placeholder:"请选择",replaceFields:{children:"children",title:"deptName",key:"deptId",value:"deptId"},"tree-default-expand-all":""},model:{value:e.form.parentId,callback:function(t){e.$set(e.form,"parentId",t)},expression:"form.parentId"}})],1),t("a-form-model-item",{attrs:{label:"部门名称",prop:"deptName"}},[t("a-input",{attrs:{placeholder:"请输入"},model:{value:e.form.deptName,callback:function(t){e.$set(e.form,"deptName",t)},expression:"form.deptName"}})],1),t("a-form-model-item",{attrs:{label:"排序",prop:"orderNum"}},[t("a-input-number",{staticStyle:{width:"100%"},attrs:{min:0},model:{value:e.form.orderNum,callback:function(t){e.$set(e.form,"orderNum",t)},expression:"form.orderNum"}})],1),t("a-form-model-item",{attrs:{label:"负责人",prop:"leader"}},[t("a-input",{attrs:{placeholder:"请输入"},model:{value:e.form.leader,callback:function(t){e.$set(e.form,"leader",t)},expression:"form.leader"}})],1),t("a-form-model-item",{attrs:{label:"联系电话",prop:"phone"}},[t("a-input",{attrs:{placeholder:"请输入"},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1),t("a-form-model-item",{attrs:{label:"邮箱",prop:"email"}},[t("a-input",{attrs:{placeholder:"请输入"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),t("a-form-model-item",{attrs:{label:"状态",prop:"status"}},[t("a-radio-group",{attrs:{"button-style":"solid"},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}},e._l(e.statusOptions,(function(r,o){return t("a-radio-button",{key:o,attrs:{value:r.value}},[e._v(e._s(r.label))])})),1)],1),t("div",{staticClass:"bottom-control"},[t("a-space",[t("a-button",{attrs:{type:"primary",loading:e.submitLoading},on:{click:e.submitForm}},[e._v(" 保存 ")]),t("a-button",{attrs:{type:"dashed"},on:{click:e.cancel}},[e._v(" 取消 ")])],1)],1)],1)],1)},a=[],n=(r("d3b7"),r("fcb7")),i={name:"CreateForm",props:{statusOptions:{type:Array,required:!0},deptOptions:{type:Array,required:!0}},data:function(){return{submitLoading:!1,formTitle:"",form:{deptId:void 0,parentId:void 0,deptName:void 0,orderNum:0,leader:void 0,phone:void 0,email:void 0,status:"0"},open:!1,rules:{parentId:[{required:!0,message:"上级部门不能为空",trigger:"blur"}],deptName:[{required:!0,message:"部门名称不能为空",trigger:"blur"}],orderNum:[{required:!0,message:"排序不能为空",trigger:"blur"}],email:[{type:"email",message:"请输入正确的邮箱地址",trigger:["blur","change"]}],phone:[{pattern:/^1[3|4|5|6|7|8|9][0-9]\d{8}$/,message:"请输入正确的手机号码",trigger:"blur"}]}}},filters:{},created:function(){},computed:{},watch:{},methods:{onClose:function(){this.open=!1},cancel:function(){this.open=!1,this.reset()},reset:function(){this.form={deptId:void 0,parentId:void 0,deptName:void 0,orderNum:0,leader:void 0,phone:void 0,email:void 0,status:"0"}},handleAdd:function(e){this.reset(),void 0!==e&&(this.form.parentId=e.deptId),this.open=!0,this.formTitle="添加部门",this.$emit("select-tree")},handleUpdate:function(e){var t=this;this.reset();var r=e.deptId;Object(n["c"])(r).then((function(e){t.form=e.data,t.open=!0,t.formTitle="修改部门"})),this.$emit("select-tree",e)},submitForm:function(){var e=this;this.$refs.form.validate((function(t){if(!t)return!1;e.submitLoading=!0,void 0!==e.form.deptId?Object(n["f"])(e.form).then((function(t){e.$message.success("修改成功",3),e.open=!1,e.$emit("ok")})).finally((function(){e.submitLoading=!1})):Object(n["a"])(e.form).then((function(t){e.$message.success("新增成功",3),e.open=!1,e.$emit("ok")})).finally((function(){e.submitLoading=!1}))}))}}},s=i,l=r("2877"),d=Object(l["a"])(s,o,a,!1,null,null,null);t["default"]=d.exports},fcb7:function(e,t,r){"use strict";r.d(t,"d",(function(){return a})),r.d(t,"e",(function(){return n})),r.d(t,"c",(function(){return i})),r.d(t,"a",(function(){return s})),r.d(t,"f",(function(){return l})),r.d(t,"b",(function(){return d}));var o=r("b775");function a(e){return Object(o["b"])({url:"/system/dept/list",method:"get",params:e})}function n(e){return Object(o["b"])({url:"/system/dept/list/exclude/"+e,method:"get"})}function i(e){return Object(o["b"])({url:"/system/dept/"+e,method:"get"})}function s(e){return Object(o["b"])({url:"/system/dept",method:"post",data:e})}function l(e){return Object(o["b"])({url:"/system/dept",method:"put",data:e})}function d(e){return Object(o["b"])({url:"/system/dept/"+e,method:"delete"})}}}]);