(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ab79f92c"],{"0492":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"userlist"}},[n("myloading",{attrs:{loading:t.loading}},[n("h1",[t._v("轮播图列表")]),n("el-table",{attrs:{data:t.items}},[n("el-table-column",{attrs:{prop:"_id",label:"ID",width:"240"}}),n("el-table-column",{attrs:{prop:"title",label:"名称",width:"240"}}),n("el-table-column",{attrs:{fixed:"right",label:"操作",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(n){return t.$router.push("/img/edit/"+e.row._id)}}},[t._v("编辑")]),n("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(n){return t.remove(e.row)}}},[t._v("删除")])]}}])})],1)],1)],1)},i=[],s=(n("d3b7"),n("96cf"),{data:function(){return{items:null,loading:!0}},methods:{fetch:function(){var t;return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(this.$axios.get("rest/imgs/category"));case 2:t=e.sent,this.items=t.data;case 4:case"end":return e.stop()}}),null,this)},remove:function(t){var e=this;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:this.$confirm('是否要确定删除分类"'.concat(t.title,'"'),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,regeneratorRuntime.awrap(e.$axios.delete("rest/imgs/delete/".concat(t._id)));case 2:n.sent,e.$message({type:"success",message:"删除成功!"}),e.fetch();case 5:case"end":return n.stop()}}))}));case 1:case"end":return n.stop()}}),null,this)},isloading:function(){null!=this.items&&(this.loading=!1)}},created:function(){var t=this;this.fetch(),null==this.items&&setInterval((function(){t.isloading()}))}}),a=s,c=(n("e111"),n("2877")),l=Object(c["a"])(a,r,i,!1,null,null,null);e["default"]=l.exports},b9f9:function(t,e,n){},e111:function(t,e,n){"use strict";var r=n("b9f9"),i=n.n(r);i.a}}]);
//# sourceMappingURL=chunk-ab79f92c.f671540c.js.map