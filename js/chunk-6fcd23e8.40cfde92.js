(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6fcd23e8"],{a159:function(t,e,r){"use strict";r.d(e,"e",(function(){return n})),r.d(e,"d",(function(){return a})),r.d(e,"a",(function(){return i})),r.d(e,"g",(function(){return s})),r.d(e,"c",(function(){return u})),r.d(e,"b",(function(){return c})),r.d(e,"f",(function(){return d}));var o=r("b775");function n(t){return Object(o["b"])({url:"/monitor/job/list",method:"get",params:t})}function a(t){return Object(o["b"])({url:"/monitor/job/"+t,method:"get"})}function i(t){return Object(o["b"])({url:"/monitor/job",method:"post",data:t})}function s(t){return Object(o["b"])({url:"/monitor/job",method:"put",data:t})}function u(t){return Object(o["b"])({url:"/monitor/job/"+t,method:"delete"})}function c(t,e){var r={jobId:t,status:e};return Object(o["b"])({url:"/monitor/job/changeStatus",method:"put",data:r})}function d(t,e){var r={jobId:t,jobGroup:e};return Object(o["b"])({url:"/monitor/job/run",method:"put",data:r})}},bad6:function(t,e,r){"use strict";r.r(e);var o=function(){var t=this,e=t._self._c;return e("a-drawer",{attrs:{width:"35%",placement:"right",closable:!1,visible:t.openView},on:{close:t.onCloseView}},[e("a-descriptions",{attrs:{title:"任务详细",layout:"vertical",bordered:""}},[e("a-descriptions-item",{attrs:{label:"任务编号"}},[t._v(" "+t._s(t.form.jobId)+" ")]),e("a-descriptions-item",{attrs:{label:"任务分组"}},[e("dict-tag",{attrs:{options:t.jobGroupOptions,value:t.form.jobGroup}})],1),e("a-descriptions-item",{attrs:{label:"任务名称"}},[t._v(" "+t._s(t.form.jobName)+" ")]),e("a-descriptions-item",{attrs:{label:"创建时间"}},[t._v(" "+t._s(t.form.createTime)+" ")]),e("a-descriptions-item",{attrs:{label:"下次执行时间",span:"2"}},[t._v(" "+t._s(t.parseTime(t.form.nextValidTime))+" ")]),e("a-descriptions-item",{attrs:{label:"调用目标方法"}},[t._v(" "+t._s(t.form.invokeTarget)+" ")]),e("a-descriptions-item",{attrs:{label:"cron表达式",span:"2"}},[t._v(" "+t._s(t.form.cronExpression)+" ")]),e("a-descriptions-item",{attrs:{label:"任务状态"}},[0==t.form.status?e("a-badge",{attrs:{status:"processing",text:"运行中"}}):t._e(),1==t.form.status?e("a-badge",{attrs:{status:"warning",text:"暂停"}}):t._e()],1),e("a-descriptions-item",{attrs:{label:"是否并发"}},[0==t.form.concurrent?e("a-badge",{attrs:{status:"processing",text:"允许"}}):t._e(),1==t.form.concurrent?e("a-badge",{attrs:{status:"warning",text:"禁止"}}):t._e()],1),e("a-descriptions-item",{attrs:{label:"执行策略"}},[0==t.form.misfirePolicy?e("a-badge",{attrs:{status:"default",text:"默认策略"}}):t._e(),1==t.form.misfirePolicy?e("a-badge",{attrs:{status:"Processing",text:"立即执行"}}):t._e(),2==t.form.misfirePolicy?e("a-badge",{attrs:{color:"purple",text:"执行一次"}}):t._e(),3==t.form.misfirePolicy?e("a-badge",{attrs:{status:"warning",text:"放弃执行"}}):t._e()],1)],1)],1)},n=[],a=r("a159"),i={name:"ViewForm",props:{jobGroupOptions:{type:Array,required:!0}},data:function(){return{loading:!1,formTitle:"",form:{jobId:void 0,jobName:void 0,jobGroup:void 0,invokeTarget:void 0,cronExpression:void 0,misfirePolicy:"1",concurrent:"1",status:"0"},openView:!1}},filters:{},created:function(){},computed:{},watch:{},methods:{handleView:function(t){var e=this;Object(a["d"])(t.jobId).then((function(t){e.form=t.data,e.openView=!0}))},onCloseView:function(){this.openView=!1}}},s=i,u=r("2877"),c=Object(u["a"])(s,o,n,!1,null,null,null);e["default"]=c.exports}}]);