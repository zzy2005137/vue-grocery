(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0fef86f8"],{"057f":function(e,t,o){var r=o("fc6a"),n=o("241c").f,i={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],l=function(e){try{return n(e)}catch(t){return c.slice()}};e.exports.f=function(e){return c&&"[object Window]"==i.call(e)?l(e):n(r(e))}},"428f":function(e,t,o){var r=o("da84");e.exports=r},"746f":function(e,t,o){var r=o("428f"),n=o("5135"),i=o("e5383"),c=o("9bf2").f;e.exports=function(e){var t=r.Symbol||(r.Symbol={});n(t,e)||c(t,e,{value:i.f(e)})}},a4d3:function(e,t,o){"use strict";var r=o("23e7"),n=o("da84"),i=o("d066"),c=o("c430"),l=o("83ab"),a=o("4930"),u=o("d039"),s=o("5135"),f=o("e8b5"),d=o("861d"),m=o("d9b5"),b=o("825a"),h=o("7b0b"),g=o("fc6a"),p=o("a04b"),v=o("577e"),j=o("5c6c"),O=o("7c73"),w=o("df75"),y=o("241c"),F=o("057f"),S=o("7418"),V=o("06cf"),I=o("9bf2"),C=o("d1e7"),k=o("9112"),N=o("6eeb"),x=o("5692"),P=o("f772"),E=o("d012"),B=o("90e3"),L=o("b622"),U=o("e5383"),_=o("746f"),D=o("d44e"),M=o("69f3"),T=o("b727").forEach,q=P("hidden"),J="Symbol",$="prototype",W=L("toPrimitive"),R=M.set,Q=M.getterFor(J),z=Object[$],A=n.Symbol,G=i("JSON","stringify"),H=V.f,K=I.f,X=F.f,Y=C.f,Z=x("symbols"),ee=x("op-symbols"),te=x("string-to-symbol-registry"),oe=x("symbol-to-string-registry"),re=x("wks"),ne=n.QObject,ie=!ne||!ne[$]||!ne[$].findChild,ce=l&&u((function(){return 7!=O(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?function(e,t,o){var r=H(z,t);r&&delete z[t],K(e,t,o),r&&e!==z&&K(z,t,r)}:K,le=function(e,t){var o=Z[e]=O(A[$]);return R(o,{type:J,tag:e,description:t}),l||(o.description=t),o},ae=function(e,t,o){e===z&&ae(ee,t,o),b(e);var r=p(t);return b(o),s(Z,r)?(o.enumerable?(s(e,q)&&e[q][r]&&(e[q][r]=!1),o=O(o,{enumerable:j(0,!1)})):(s(e,q)||K(e,q,j(1,{})),e[q][r]=!0),ce(e,r,o)):K(e,r,o)},ue=function(e,t){b(e);var o=g(t),r=w(o).concat(be(o));return T(r,(function(t){l&&!fe.call(o,t)||ae(e,t,o[t])})),e},se=function(e,t){return void 0===t?O(e):ue(O(e),t)},fe=function(e){var t=p(e),o=Y.call(this,t);return!(this===z&&s(Z,t)&&!s(ee,t))&&(!(o||!s(this,t)||!s(Z,t)||s(this,q)&&this[q][t])||o)},de=function(e,t){var o=g(e),r=p(t);if(o!==z||!s(Z,r)||s(ee,r)){var n=H(o,r);return!n||!s(Z,r)||s(o,q)&&o[q][r]||(n.enumerable=!0),n}},me=function(e){var t=X(g(e)),o=[];return T(t,(function(e){s(Z,e)||s(E,e)||o.push(e)})),o},be=function(e){var t=e===z,o=X(t?ee:g(e)),r=[];return T(o,(function(e){!s(Z,e)||t&&!s(z,e)||r.push(Z[e])})),r};if(a||(A=function(){if(this instanceof A)throw TypeError("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?v(arguments[0]):void 0,t=B(e),o=function(e){this===z&&o.call(ee,e),s(this,q)&&s(this[q],t)&&(this[q][t]=!1),ce(this,t,j(1,e))};return l&&ie&&ce(z,t,{configurable:!0,set:o}),le(t,e)},N(A[$],"toString",(function(){return Q(this).tag})),N(A,"withoutSetter",(function(e){return le(B(e),e)})),C.f=fe,I.f=ae,V.f=de,y.f=F.f=me,S.f=be,U.f=function(e){return le(L(e),e)},l&&(K(A[$],"description",{configurable:!0,get:function(){return Q(this).description}}),c||N(z,"propertyIsEnumerable",fe,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!a,sham:!a},{Symbol:A}),T(w(re),(function(e){_(e)})),r({target:J,stat:!0,forced:!a},{for:function(e){var t=v(e);if(s(te,t))return te[t];var o=A(t);return te[t]=o,oe[o]=t,o},keyFor:function(e){if(!m(e))throw TypeError(e+" is not a symbol");if(s(oe,e))return oe[e]},useSetter:function(){ie=!0},useSimple:function(){ie=!1}}),r({target:"Object",stat:!0,forced:!a,sham:!l},{create:se,defineProperty:ae,defineProperties:ue,getOwnPropertyDescriptor:de}),r({target:"Object",stat:!0,forced:!a},{getOwnPropertyNames:me,getOwnPropertySymbols:be}),r({target:"Object",stat:!0,forced:u((function(){S.f(1)}))},{getOwnPropertySymbols:function(e){return S.f(h(e))}}),G){var he=!a||u((function(){var e=A();return"[null]"!=G([e])||"{}"!=G({a:e})||"{}"!=G(Object(e))}));r({target:"JSON",stat:!0,forced:he},{stringify:function(e,t,o){var r,n=[e],i=1;while(arguments.length>i)n.push(arguments[i++]);if(r=t,(d(t)||void 0!==e)&&!m(e))return f(t)||(t=function(e,t){if("function"==typeof r&&(t=r.call(this,e,t)),!m(t))return t}),n[1]=t,G.apply(null,n)}})}A[$][W]||k(A[$],W,A[$].valueOf),D(A,J),E[q]=!0},a5bc:function(e,t,o){},cabb:function(e,t,o){"use strict";o.r(t);o("b0c0"),o("a4d3"),o("e01a");var r=o("7a23");Object(r["pushScopeId"])("data-v-8b98a4c4");var n={class:"preImg"},i=["src"],c=Object(r["createTextVNode"])("更换图片"),l=Object(r["createElementVNode"])("i",{class:"el-icon-plus"},null,-1),a=["src"],u=Object(r["createTextVNode"])("保存"),s=Object(r["createTextVNode"])("返回");function f(e,t,o,f,d,m){var b=Object(r["resolveComponent"])("el-button"),h=Object(r["resolveComponent"])("el-upload"),g=Object(r["resolveComponent"])("el-dialog"),p=Object(r["resolveComponent"])("el-input"),v=Object(r["resolveComponent"])("el-form-item"),j=Object(r["resolveComponent"])("el-option"),O=Object(r["resolveComponent"])("el-select"),w=Object(r["resolveComponent"])("el-form"),y=Object(r["resolveDirective"])("loading");return Object(r["openBlock"])(),Object(r["createElementBlock"])(r["Fragment"],null,[Object(r["withDirectives"])(Object(r["createElementVNode"])("div",n,[Object(r["createElementVNode"])("img",{src:d.preImgUrl,alt:"加载中"},null,8,i)],512),[[r["vShow"],d.showPreImg]]),Object(r["withDirectives"])(Object(r["createVNode"])(b,{type:"primary",onClick:t[0]||(t[0]=function(e){return d.showPreImg=!d.showPreImg}),plain:"",class:"changeBtn"},{default:Object(r["withCtx"])((function(){return[c]})),_:1},512),[[r["vShow"],d.showPreImg]]),Object(r["withDirectives"])(Object(r["createVNode"])(h,{action:"#","list-type":"picture-card","file-list":d.fileList,"on-remove":m.handleRemove,"on-change":m.loadImg,"auto-upload":!1,"http-request":m.myupload,ref:"upload",class:"img-upload",limit:"1"},{default:Object(r["withCtx"])((function(){return[l]})),_:1},8,["file-list","on-remove","on-change","http-request"]),[[r["vShow"],!d.showPreImg]]),Object(r["createVNode"])(g,{modelValue:d.dialogVisible,"onUpdate:modelValue":t[1]||(t[1]=function(e){return d.dialogVisible=e})},{default:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("img",{width:"100%",src:d.dialogImageUrl,alt:""},null,8,a)]})),_:1},8,["modelValue"]),Object(r["createVNode"])(w,{model:d.ruleForm,rules:d.rules,ref:"ruleForm","label-width":"100px",class:"demo-ruleForm"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(v,{label:"商品名称",prop:"name"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(p,{modelValue:d.ruleForm.name,"onUpdate:modelValue":t[2]||(t[2]=function(e){return d.ruleForm.name=e})},null,8,["modelValue"])]})),_:1}),Object(r["createVNode"])(v,{label:"商品简介",prop:"description"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(p,{modelValue:d.ruleForm.description,"onUpdate:modelValue":t[3]||(t[3]=function(e){return d.ruleForm.description=e})},null,8,["modelValue"])]})),_:1}),d.categories?(Object(r["openBlock"])(),Object(r["createBlock"])(v,{key:0,label:"商品类别",prop:"category"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(O,{modelValue:d.ruleForm.category,"onUpdate:modelValue":t[4]||(t[4]=function(e){return d.ruleForm.category=e}),placeholder:"请选择商品类别"},{default:Object(r["withCtx"])((function(){return[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(d.categories,(function(e,t){return Object(r["openBlock"])(),Object(r["createBlock"])(j,{key:t,label:e,value:e},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1})):Object(r["createCommentVNode"])("",!0)]})),_:1},8,["model","rules"]),Object(r["withDirectives"])(Object(r["createVNode"])(b,{type:"primary",onClick:m.submitUpload,"element-loading-text":"上传中"},{default:Object(r["withCtx"])((function(){return[u]})),_:1},8,["onClick"]),[[y,d.fullscreenLoading,void 0,{fullscreen:!0,lock:!0}],[r["vShow"],d.showSubmitBtn]]),Object(r["createVNode"])(b,{onClick:m.goback},{default:Object(r["withCtx"])((function(){return[s]})),_:1},8,["onClick"])],64)}Object(r["popScopeId"])();var d=o("4995"),m=o("c72e"),b=o.n(m),h=o("a18c"),g={props:["objFileId","objId"],name:"addForm",data:function(){return{ruleForm:{name:"",description:"",category:"",img:null},rules:{name:[{required:!0,message:"请输入商品名称",trigger:"blur"},{message:"长度在 3 到 5 个字符",trigger:"blur"}],category:[{required:!0,message:"请选择商品类别",trigger:"change"}]},categories:["干货","特产","其他"],dialogImageUrl:"",dialogVisible:!1,fullscreenLoading:!1,fileList:[],showPreImg:!0,showSubmitBtn:!0,preImgUrl:"",objInfo:null}},methods:{checkParam:function(){console.log(this.objFileId),console.log(this.objId)},handleRemove:function(e,t){console.log(e)},submitUpload:function(){var e=this;if(this.ruleForm.img){console.log("new img");var t=this.objInfo.fileId,o=b.a.File.createWithoutData(t);o.destroy();var r=new b.a.File(this.ruleForm.img.name,this.ruleForm.img);this.fullscreenLoading=!0,r.save().then((function(t){e.updateObj(t),e.preImgUrl=t.url(),e.showPreImg=!0,e.fileList=[]})).catch((function(t){e.fullscreenLoading=!1,e.showErrorMessage("图片上传失败: "+t)}))}else this.updateObj(null)},updateObj:function(e){var t=this,o=b.a.Object.createWithoutData("item",this.objInfo.objectId);if(o.set("name",this.ruleForm.name),o.set("description",this.ruleForm.description),o.set("category",this.ruleForm.category),e){var r=[e];o.set("img",r)}this.fullscreenLoading=!0,o.save().then((function(e){t.showSuccessMessage("商品信息更新成功"),t.showSubmitBtn=!1,t.fullscreenLoading=!1}),(function(e){console.log(e),t.fullscreenLoading=!1,t.showSubmitBtn=!1,t.showErrorMessage("上传失败: "+e)}))},loadImg:function(e,t){console.log("handle img"),this.ruleForm.img=e.raw,console.log(this.ruleForm.img)},showSuccessMessage:function(e){Object(d["a"])({showClose:!0,type:"success",message:e})},showErrorMessage:function(e){Object(d["a"])({showClose:!0,type:"error",message:e})},myupload:function(){""!==this.ruleForm.name&&""!==this.ruleForm.category?(this.fullscreenLoading=!0,this.uploadObj()):this.showErrorMessage("信息不完整")},uploadObj:function(){},goback:function(){h["a"].push("/")},resetForm:function(e){this.$refs[e].resetFields(),this.fileList=[]},fillForm:function(e){this.ruleForm.name=e.name,this.ruleForm.description=e.description,this.ruleForm.category=e.category,this.preImgUrl=e.url}},created:function(){var e=this.$route.params;this.fillForm(e),this.objInfo=e}},p=(o("f110"),o("d959")),v=o.n(p);const j=v()(g,[["render",f],["__scopeId","data-v-8b98a4c4"]]);t["default"]=j},e01a:function(e,t,o){"use strict";var r=o("23e7"),n=o("83ab"),i=o("da84"),c=o("5135"),l=o("861d"),a=o("9bf2").f,u=o("e893"),s=i.Symbol;if(n&&"function"==typeof s&&(!("description"in s.prototype)||void 0!==s().description)){var f={},d=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof d?new s(e):void 0===e?s():s(e);return""===e&&(f[t]=!0),t};u(d,s);var m=d.prototype=s.prototype;m.constructor=d;var b=m.toString,h="Symbol(test)"==String(s("test")),g=/^Symbol\((.*)\)[^)]+$/;a(m,"description",{configurable:!0,get:function(){var e=l(this)?this.valueOf():this,t=b.call(e);if(c(f,e))return"";var o=h?t.slice(7,-1):t.replace(g,"$1");return""===o?void 0:o}}),r({global:!0,forced:!0},{Symbol:d})}},e5383:function(e,t,o){var r=o("b622");t.f=r},f110:function(e,t,o){"use strict";o("a5bc")}}]);
//# sourceMappingURL=chunk-0fef86f8.0096997d.js.map