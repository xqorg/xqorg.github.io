(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cbb33"],{"4b7f":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e._self._c;return t("div",[t("a-form-model",{ref:"genInfoForm",attrs:{model:e.info,rules:e.rules,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[t("a-row",[t("a-col",{attrs:{span:12}},[t("a-form-model-item",{attrs:{prop:"tplCategory"}},[t("span",{attrs:{slot:"label"},slot:"label"},[e._v(" 生成模板 ")]),t("a-select",{attrs:{placeholder:"请选择"},on:{change:e.tplSelectChange},model:{value:e.info.tplCategory,callback:function(t){e.$set(e.info,"tplCategory",t)},expression:"info.tplCategory"}},[t("a-select-option",{attrs:{value:"crud"}},[e._v("单表（增删改查）")]),t("a-select-option",{attrs:{value:"tree"}},[e._v("树表（增删改查）")]),t("a-select-option",{attrs:{value:"sub"}},[e._v("主子表（增删改查）")])],1)],1)],1),t("a-col",{attrs:{span:12}},[t("a-form-model-item",{attrs:{prop:"packageName"}},[t("span",{attrs:{slot:"label"},slot:"label"},[e._v(" 生成包路径 "),t("a-tooltip",[t("template",{slot:"title"},[e._v(" 生成在哪个java包下，例如 com.ruoyi.system ")]),t("a-icon",{attrs:{type:"question-circle-o"}})],2)],1),t("a-input",{attrs:{placeholder:"请输入生成包路径"},model:{value:e.info.packageName,callback:function(t){e.$set(e.info,"packageName",t)},expression:"info.packageName"}})],1)],1),t("a-col",{attrs:{span:12}},[t("a-form-model-item",{attrs:{prop:"moduleName"}},[t("span",{attrs:{slot:"label"},slot:"label"},[e._v(" 生成模块名 "),t("a-tooltip",[t("template",{slot:"title"},[e._v(" 可理解为子系统名，例如 system ")]),t("a-icon",{attrs:{type:"question-circle-o"}})],2)],1),t("a-input",{attrs:{placeholder:"请输入生成模块名"},model:{value:e.info.moduleName,callback:function(t){e.$set(e.info,"moduleName",t)},expression:"info.moduleName"}})],1)],1),t("a-col",{attrs:{span:12}},[t("a-form-model-item",{attrs:{prop:"businessName"}},[t("span",{attrs:{slot:"label"},slot:"label"},[e._v(" 生成业务名 "),t("a-tooltip",[t("template",{slot:"title"},[e._v(" 可理解为功能英文名，例如 user ")]),t("a-icon",{attrs:{type:"question-circle-o"}})],2)],1),t("a-input",{attrs:{placeholder:"请输入生成业务名"},model:{value:e.info.businessName,callback:function(t){e.$set(e.info,"businessName",t)},expression:"info.businessName"}})],1)],1),t("a-col",{attrs:{span:12}},[t("a-form-model-item",{attrs:{prop:"functionName"}},[t("span",{attrs:{slot:"label"},slot:"label"},[e._v(" 生成功能名 "),t("a-tooltip",[t("template",{slot:"title"},[e._v(" 用作类描述，例如 用户 ")]),t("a-icon",{attrs:{type:"question-circle-o"}})],2)],1),t("a-input",{attrs:{placeholder:"请输入生成功能名"},model:{value:e.info.functionName,callback:function(t){e.$set(e.info,"functionName",t)},expression:"info.functionName"}})],1)],1),t("a-col",{attrs:{span:12}},[t("a-form-model-item",[t("span",{attrs:{slot:"label"},slot:"label"},[e._v(" 上级菜单 "),t("a-tooltip",[t("template",{slot:"title"},[e._v(" 分配到指定菜单下，例如 系统管理 ")]),t("a-icon",{attrs:{type:"question-circle-o"}})],2)],1),t("a-tree-select",{staticStyle:{width:"100%"},attrs:{"tree-data":e.menus,"dropdown-style":{maxHeight:"400px",overflow:"auto"},placeholder:"请选择系统菜单",replaceFields:e.treeReplaceFields},model:{value:e.info.parentMenuId,callback:function(t){e.$set(e.info,"parentMenuId",t)},expression:"info.parentMenuId"}})],1)],1),t("a-col",{attrs:{span:12}},[t("a-form-model-item",[t("span",{attrs:{slot:"label"},slot:"label"},[e._v(" 生成代码方式 "),t("a-tooltip",[t("template",{slot:"title"},[e._v(" 默认为zip压缩包下载，也可以自定义生成路径 ")]),t("a-icon",{attrs:{type:"question-circle-o"}})],2)],1),t("a-radio-group",{model:{value:e.info.genType,callback:function(t){e.$set(e.info,"genType",t)},expression:"info.genType"}},[t("a-radio",{attrs:{value:"0"}},[e._v("zip压缩包")]),t("a-radio",{attrs:{value:"1"}},[e._v("自定义路径")])],1)],1)],1),t("a-col",{attrs:{span:12}}),"1"==e.info.genType?t("a-col",{attrs:{span:24}},[t("a-form-model-item",{attrs:{labelCol:{xs:{span:6},sm:{span:3}},wrapperCol:{xs:{span:42},sm:{span:21}}}},[t("span",{attrs:{slot:"label"},slot:"label"},[e._v(" 自定义路径 "),t("a-tooltip",[t("template",{slot:"title"},[e._v(" 填写磁盘绝对路径，若不填写，则生成到当前Web项目下 ")]),t("a-icon",{attrs:{type:"question-circle-o"}})],2)],1),t("a-input",{model:{value:e.info.genPath,callback:function(t){e.$set(e.info,"genPath",t)},expression:"info.genPath"}},[t("a-dropdown",{attrs:{slot:"suffix"},slot:"suffix"},[t("a-button",{staticStyle:{width:"100%"}},[e._v(" 最近路径快速选择 "),t("a-icon",{attrs:{type:"down"}})],1),t("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[t("a-menu-item",{key:"1",nativeOn:{click:function(t){e.info.genPath="/"}}},[t("a-icon",{attrs:{type:"user"}}),e._v("1st menu item ")],1)],1)],1)],1)],1)],1):e._e()],1),t("a-row",{directives:[{name:"show",rawName:"v-show",value:"tree"==e.info.tplCategory,expression:"info.tplCategory == 'tree'"}]},[t("a-divider",{attrs:{orientation:"left"}},[e._v(" 其他信息 ")]),t("a-col",{attrs:{span:12}},[t("a-form-model-item",[t("span",{attrs:{slot:"label"},slot:"label"},[e._v(" 树编码字段 "),t("a-tooltip",[t("template",{slot:"title"},[e._v(" 树显示的编码字段名， 如：dept_id ")]),t("a-icon",{attrs:{type:"question-circle-o"}})],2)],1),t("a-select",{attrs:{placeholder:"请选择"},model:{value:e.info.treeCode,callback:function(t){e.$set(e.info,"treeCode",t)},expression:"info.treeCode"}},e._l(e.info.columns,(function(a,l){return t("a-select-option",{key:l,attrs:{value:a.columnName}},[e._v(" "+e._s(a.columnName+"："+a.columnComment)+" ")])})),1)],1)],1),t("a-col",{attrs:{span:12}},[t("a-form-model-item",[t("span",{attrs:{slot:"label"},slot:"label"},[e._v(" 树父编码字段 "),t("a-tooltip",[t("template",{slot:"title"},[e._v(" 树显示的父编码字段名， 如：parent_Id ")]),t("a-icon",{attrs:{type:"question-circle-o"}})],2)],1),t("a-select",{attrs:{placeholder:"请选择"},model:{value:e.info.treeParentCode,callback:function(t){e.$set(e.info,"treeParentCode",t)},expression:"info.treeParentCode"}},e._l(e.info.columns,(function(a,l){return t("a-select-option",{key:l,attrs:{value:a.columnName}},[e._v(" "+e._s(a.columnName+"："+a.columnComment)+" ")])})),1)],1)],1),t("a-col",{attrs:{span:12}},[t("a-form-model-item",[t("span",{attrs:{slot:"label"},slot:"label"},[e._v(" 树名称字段 "),t("a-tooltip",[t("template",{slot:"title"},[e._v(" 树节点的显示名称字段名， 如：dept_name ")]),t("a-icon",{attrs:{type:"question-circle-o"}})],2)],1),t("a-select",{attrs:{placeholder:"请选择"},model:{value:e.info.treeName,callback:function(t){e.$set(e.info,"treeName",t)},expression:"info.treeName"}},e._l(e.info.columns,(function(a,l){return t("a-select-option",{key:l,attrs:{value:a.columnName}},[e._v(" "+e._s(a.columnName+"："+a.columnComment)+" ")])})),1)],1)],1)],1),t("a-row",{directives:[{name:"show",rawName:"v-show",value:"sub"==e.info.tplCategory,expression:"info.tplCategory == 'sub'"}]},[t("a-divider",{attrs:{orientation:"left"}},[e._v(" 关联信息 ")]),t("a-col",{attrs:{span:12}},[t("a-form-model-item",[t("span",{attrs:{slot:"label"},slot:"label"},[e._v(" 关联子表的表名 "),t("a-tooltip",[t("template",{slot:"title"},[e._v(" 关联子表的表名， 如：sys_user ")]),t("a-icon",{attrs:{type:"question-circle-o"}})],2)],1),t("a-select",{attrs:{placeholder:"请选择"},on:{change:e.subSelectChange},model:{value:e.info.subTableName,callback:function(t){e.$set(e.info,"subTableName",t)},expression:"info.subTableName"}},e._l(e.tables,(function(a,l){return t("a-select-option",{key:l,attrs:{value:a.tableName}},[e._v(" "+e._s(a.tableName+"："+a.tableComment)+" ")])})),1)],1)],1),t("a-col",{attrs:{span:12}},[t("a-form-model-item",[t("span",{attrs:{slot:"label"},slot:"label"},[e._v(" 子表关联的外键名 "),t("a-tooltip",[t("template",{slot:"title"},[e._v(" 子表关联的外键名， 如：user_id ")]),t("a-icon",{attrs:{type:"question-circle-o"}})],2)],1),t("a-select",{attrs:{placeholder:"请选择"},model:{value:e.info.subTableFkName,callback:function(t){e.$set(e.info,"subTableFkName",t)},expression:"info.subTableFkName"}},e._l(e.subColumns,(function(a,l){return t("a-select-option",{key:l,attrs:{value:a.columnName}},[e._v(" "+e._s(a.columnName+"："+a.columnComment)+" ")])})),1)],1)],1)],1)],1)],1)},o=[],s={name:"GenInfoForm",props:{info:{type:Object,default:null},tables:{type:Array,default:null},menus:{type:Array,default:null}},data:function(){return{visible:!1,loading:!1,data:{},subColumns:[],rules:{tplCategory:[{required:!0,message:"请选择生成模板",trigger:"blur"}],packageName:[{required:!0,message:"请输入生成包路径",trigger:"blur"}],moduleName:[{required:!0,message:"请输入生成模块名",trigger:"blur"}],businessName:[{required:!0,message:"请输入生成业务名",trigger:"blur"}],functionName:[{required:!0,message:"请输入生成功能名",trigger:"blur"}]},labelCol:{xs:{span:12},sm:{span:6}},wrapperCol:{xs:{span:24},sm:{span:18}},typeOptions:[],statusOptions:[],treeReplaceFields:{children:"children",title:"menuName",key:"menuId",value:"menuId"}}},watch:{"info.subTableName":function(e){this.setSubTableColumns(e)}},methods:{close:function(){this.visible=!1},show:function(e){e&&(this.data=e),this.visible=!0},subSelectChange:function(){this.info.subTableFkName=""},tplSelectChange:function(e){"sub"!==e&&(this.info.subTableName="",this.info.subTableFkName="")},setSubTableColumns:function(e){for(var t in this.tables){var a=this.tables[t].tableName;if(e===a){this.subColumns=this.tables[t].columns;break}}}}},n=s,i=a("2877"),r=Object(i["a"])(n,l,o,!1,null,null,null);t["default"]=r.exports}}]);