(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b1e7f"],{"229b":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"UserEdit"}},[s("h1",[e._v(e._s(e.id?"编辑":"新建")+"用户")]),s("el-form",{attrs:{"label-width":"120px"},nativeOn:{submit:function(t){return t.preventDefault(),e.save(t)}}},[s("el-form-item",{attrs:{label:"用户名"}},[s("el-input",{model:{value:e.model.username,callback:function(t){e.$set(e.model,"username",t)},expression:"model.username"}})],1),s("el-form-item",{attrs:{label:"密码"}},[s("el-input",{model:{value:e.model.password,callback:function(t){e.$set(e.model,"password",t)},expression:"model.password"}})],1),s("el-form-item",[s("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("保存")])],1)],1)],1)},i=[],a=(s("d3b7"),s("96cf"),{props:{id:{}},data:function(){return{model:{},loading:!0}},methods:{save:function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.id){e.next=6;break}return e.next=3,regeneratorRuntime.awrap(this.$axios.post("/rest/admins/resive/".concat(this.id),this.model));case 3:e.sent,e.next=9;break;case 6:return e.next=8,regeneratorRuntime.awrap(this.$axios.post("/rest/admins/create",this.model));case 8:e.sent;case 9:this.$router.push("/admin/list"),this.$message({type:"success",message:"保存成功"});case 11:case"end":return e.stop()}}),null,this)},fetch:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(this.$axios.get("/rest/admins/details/".concat(this.id)));case 2:e=t.sent,this.model=e.data;case 4:case"end":return t.stop()}}),null,this)},isloading:function(){void 0!=this.model.username&&(this.loading=!1)}},created:function(){var e=this;this.id&&this.fetch(),this.id?setInterval((function(){e.isloading()})):this.loading=!1}}),r=a,o=s("2877"),l=Object(o["a"])(r,n,i,!1,null,null,null);t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d0b1e7f.a4d58980.js.map