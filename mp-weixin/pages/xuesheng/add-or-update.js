(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/xuesheng/add-or-update"],{"1a96":function(e,n,t){"use strict";var r;t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return u})),t.d(n,"a",(function(){return r}));var i=function(){var e=this,n=e.$createElement;e._self._c},u=[]},"28e8":function(e,n,t){"use strict";var r=t("2ef6"),i=t.n(r);i.a},"2ef6":function(e,n,t){},c42f:function(e,n,t){"use strict";t.r(n);var r=t("1a96"),i=t("e513");for(var u in i)"default"!==u&&function(e){t.d(n,e,(function(){return i[e]}))}(u);t("28e8");var a,o=t("f0c5"),s=Object(o["a"])(i["default"],r["b"],r["c"],!1,null,"801b3ab2",null,!1,r["a"],a);n["default"]=s.exports},e0ee:function(e,n,t){"use strict";(function(e){t("48e8");r(t("66fd"));var n=r(t("c42f"));function r(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(n.default)}).call(this,t("543d")["createPage"])},e513:function(e,n,t){"use strict";t.r(n);var r=t("ff6d"),i=t.n(r);for(var u in r)"default"!==u&&function(e){t.d(n,e,(function(){return r[e]}))}(u);n["default"]=i.a},ff6d:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=i(t("a34a"));function i(e){return e&&e.__esModule?e:{default:e}}function u(e,n,t,r,i,u,a){try{var o=e[u](a),s=o.value}catch(c){return void t(c)}o.done?n(s):Promise.resolve(s).then(r,i)}function a(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var a=e.apply(n,t);function o(e){u(a,r,i,o,s,"next",e)}function s(e){u(a,r,i,o,s,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("b7aa"))}.bind(null,t)).catch(t.oe)},s={data:function(){return{ruleForm:{xueshengming:"",mima:"",xingming:"",xingbie:"",touxiang:"",shouji:"",youxiang:"",shenfenzheng:""},xingbieOptions:[],xingbieIndex:0,user:{},ro:{xueshengming:!1,mima:!1,xingming:!1,xingbie:!1,touxiang:!1,shouji:!1,youxiang:!1,shenfenzheng:!1}}},components:{wPicker:o},computed:{},onLoad:function(n){var t=this;return a(r.default.mark((function i(){var u,a,o,s;return r.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return u=e.getStorageSync("nowTable"),i.next=3,t.$api.session(u);case 3:if(a=i.sent,t.user=a.data,t.xingbieOptions="男,女".split(","),t.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(t.ruleForm.refid=n.refid,t.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){i.next=14;break}return t.ruleForm.id=n.id,i.next=12,t.$api.info("xuesheng",t.ruleForm.id);case 12:a=i.sent,t.ruleForm=a.data;case 14:if(!n.cross){i.next=53;break}o=e.getStorageSync("crossObj"),i.t0=r.default.keys(o);case 17:if((i.t1=i.t0()).done){i.next=53;break}if(s=i.t1.value,"xueshengming"!=s){i.next=23;break}return t.ruleForm.xueshengming=o[s],t.ro.xueshengming=!0,i.abrupt("continue",17);case 23:if("mima"!=s){i.next=27;break}return t.ruleForm.mima=o[s],t.ro.mima=!0,i.abrupt("continue",17);case 27:if("xingming"!=s){i.next=31;break}return t.ruleForm.xingming=o[s],t.ro.xingming=!0,i.abrupt("continue",17);case 31:if("xingbie"!=s){i.next=35;break}return t.ruleForm.xingbie=o[s],t.ro.xingbie=!0,i.abrupt("continue",17);case 35:if("touxiang"!=s){i.next=39;break}return t.ruleForm.touxiang=o[s],t.ro.touxiang=!0,i.abrupt("continue",17);case 39:if("shouji"!=s){i.next=43;break}return t.ruleForm.shouji=o[s],t.ro.shouji=!0,i.abrupt("continue",17);case 43:if("youxiang"!=s){i.next=47;break}return t.ruleForm.youxiang=o[s],t.ro.youxiang=!0,i.abrupt("continue",17);case 47:if("shenfenzheng"!=s){i.next=51;break}return t.ruleForm.shenfenzheng=o[s],t.ro.shenfenzheng=!0,i.abrupt("continue",17);case 51:i.next=17;break;case 53:t.styleChange();case 54:case"end":return i.stop()}}),i)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},xingbieChange:function(e){this.xingbieIndex=e.target.value,this.ruleForm.xingbie=this.xingbieOptions[this.xingbieIndex]},touxiangTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.touxiang=e.$base.url+"upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=this;return a(r.default.mark((function n(){return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.ruleForm.xueshengming){n.next=3;break}return e.$utils.msg("学生名不能为空"),n.abrupt("return");case 3:if(e.ruleForm.mima){n.next=6;break}return e.$utils.msg("密码不能为空"),n.abrupt("return");case 6:if(e.ruleForm.xingming){n.next=9;break}return e.$utils.msg("姓名不能为空"),n.abrupt("return");case 9:if(!e.ruleForm.youxiang||e.$validate.isEmail(e.ruleForm.youxiang)){n.next=12;break}return e.$utils.msg("邮箱应输入邮件格式"),n.abrupt("return");case 12:if(!e.ruleForm.shenfenzheng||e.$validate.checkIdCard(e.ruleForm.shenfenzheng)){n.next=15;break}return e.$utils.msg("身份证应输入身份证格式"),n.abrupt("return");case 15:if(!e.ruleForm.id){n.next=20;break}return n.next=18,e.$api.update("xuesheng",e.ruleForm);case 18:n.next=22;break;case 20:return n.next=22,e.$api.add("xuesheng",e.ruleForm);case 22:e.$utils.msgBack("提交成功");case 23:case"end":return n.stop()}}),n)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,t=n.getFullYear(),r=n.getMonth()+1,i=n.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),r=r>9?r:"0"+r,i=i>9?i:"0"+i,"".concat(t,"-").concat(r,"-").concat(i)},toggleTab:function(e){this.$refs[e].show()}}};n.default=s}).call(this,t("543d")["default"])}},[["e0ee","common/runtime","common/vendor"]]]);