(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/juanzheng/add-or-update"],{"1be0":function(e,n,t){"use strict";(function(e){t("48e8");a(t("66fd"));var n=a(t("e313"));function a(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(n.default)}).call(this,t("543d")["createPage"])},"1e92":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(t("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function u(e,n,t,a,r,u,o){try{var i=e[u](o),c=i.value}catch(s){return void t(s)}i.done?n(c):Promise.resolve(c).then(a,r)}function o(e){return function(){var n=this,t=arguments;return new Promise((function(a,r){var o=e.apply(n,t);function i(e){u(o,a,r,i,c,"next",e)}function c(e){u(o,a,r,i,c,"throw",e)}i(void 0)}))}}var i=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("b7aa"))}.bind(null,t)).catch(t.oe)},c={data:function(){return{cross:"",ro:{juanzhengName:!1,juanzhengTypes:!1,juanzhengPhoto:!1,juanzhengContent:!1,createTime:!1},ruleForm:{juanzhengName:"",juanzhengTypes:"",juanzhengValue:"",juanzhengPhoto:"",juanzhengContent:"",createTime:""},user:{},juanzhengTypesOptions:[],juanzhengTypesIndex:0}},components:{wPicker:i},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(n){var t=this;return o(a.default.mark((function r(){var u,o,i;return a.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return u={page:1,limit:100,dicCode:"juanzheng_types"},a.next=3,t.$api.page("dictionary",u);case 3:if(o=a.sent,t.juanzhengTypesOptions=o.data.list,!n.id){a.next=12;break}return t.ruleForm.id=n.id,a.next=9,t.$api.info("juanzheng",t.ruleForm.id);case 9:i=a.sent,t.ruleForm=i.data,e.setStorageSync("juanzhengState",!0);case 12:case"end":return a.stop()}}),r)})))()},methods:{juanzhengTypesChange:function(e){this.juanzhengTypesIndex=e.target.value,this.ruleForm.juanzhengValue=this.juanzhengTypesOptions[this.juanzhengTypesIndex].indexName,this.ruleForm.juanzhengTypes=this.juanzhengTypesOptions[this.juanzhengTypesIndex].codeIndex},juanzhengPhotoTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.juanzhengPhoto=e.$base.url+"upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){}))}))},createTimeConfirm:function(e){console.log(e),this.ruleForm.createTime=e.result,this.$forceUpdate()},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=this;return o(a.default.mark((function n(){return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.ruleForm.juanzhengName){n.next=3;break}return e.$utils.msg("物品名称不能为空"),n.abrupt("return");case 3:if(e.ruleForm.juanzhengPhoto){n.next=6;break}return e.$utils.msg("物品图片不能为空"),n.abrupt("return");case 6:if(!e.ruleForm.id){n.next=11;break}return n.next=9,e.$api.update("juanzheng",e.ruleForm);case 9:n.next=13;break;case 11:return n.next=13,e.$api.save("juanzheng",e.ruleForm);case 13:e.$utils.msgBack("提交成功");case 14:case"end":return n.stop()}}),n)})))()},getDate:function(e){var n=new Date,t=n.getFullYear(),a=n.getMonth()+1,r=n.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),a=a>9?a:"0"+a,r=r>9?r:"0"+r,"".concat(t,"-").concat(a,"-").concat(r)},toggleTab:function(e){this.$refs[e].show()}}};n.default=c}).call(this,t("543d")["default"])},"27af":function(e,n,t){},"77ea":function(e,n,t){"use strict";t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return u})),t.d(n,"a",(function(){return a}));var a={wPicker:function(){return Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(t.bind(null,"b7aa"))}},r=function(){var e=this,n=e.$createElement;e._self._c},u=[]},"925c":function(e,n,t){"use strict";t.r(n);var a=t("1e92"),r=t.n(a);for(var u in a)"default"!==u&&function(e){t.d(n,e,(function(){return a[e]}))}(u);n["default"]=r.a},dcec:function(e,n,t){"use strict";var a=t("27af"),r=t.n(a);r.a},e313:function(e,n,t){"use strict";t.r(n);var a=t("77ea"),r=t("925c");for(var u in r)"default"!==u&&function(e){t.d(n,e,(function(){return r[e]}))}(u);t("dcec");var o,i=t("f0c5"),c=Object(i["a"])(r["default"],a["b"],a["c"],!1,null,"670b0d8e",null,!1,a["a"],o);n["default"]=c.exports}},[["1be0","common/runtime","common/vendor"]]]);