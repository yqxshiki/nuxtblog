(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0b07bfa0"],{"4f14":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"adminlist"}},[n("myloading",{attrs:{loading:e.loading}},[n("h1",[e._v("用户信息列表")]),n("el-table",{attrs:{data:e.items}},[n("el-table-column",{attrs:{prop:"_id",label:"ID",width:"240"}}),n("el-table-column",{attrs:{prop:"username",label:"用户名"}}),n("el-table-column",{attrs:{fixed:"right",label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(n){return e.$router.push("/admin/edit/"+t.row._id)}}},[e._v("编辑")]),n("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(n){return e.remove(t.row)}}},[e._v("删除")])]}}])})],1)],1)],1)},a=[],o=(n("d3b7"),n("96cf"),n("5118")),s={data:function(){return{items:null,loading:!0}},methods:{fetch:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(this.$axios.get("rest/admins/category"));case 2:e=t.sent,this.items=e.data;case 4:case"end":return t.stop()}}),null,this)},remove:function(e){var t=this;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:this.$confirm('是否要确定删除分类"'.concat(e.username,'"'),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,regeneratorRuntime.awrap(t.$axios.delete("rest/admins/delete/".concat(e._id)));case 2:n.sent,t.$message({type:"success",message:"删除成功!"}),t.fetch();case 5:case"end":return n.stop()}}))}));case 1:case"end":return n.stop()}}),null,this)},isloading:function(){null!=this.items&&(this.loading=!1)}},created:function(){var e=this;this.fetch(),null==this.items&&Object(o["setInterval"])((function(){e.isloading()}))}},r=s,c=(n("fced"),n("2877")),u=Object(c["a"])(r,i,a,!1,null,null,null);t["default"]=u.exports},5118:function(e,t,n){(function(e){var i="undefined"!==typeof e&&e||"undefined"!==typeof self&&self||window,a=Function.prototype.apply;function o(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new o(a.call(setTimeout,i,arguments),clearTimeout)},t.setInterval=function(){return new o(a.call(setInterval,i,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(i,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),t))},n("6017"),t.setImmediate="undefined"!==typeof self&&self.setImmediate||"undefined"!==typeof e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!==typeof self&&self.clearImmediate||"undefined"!==typeof e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n("c8ba"))},6017:function(e,t,n){(function(e,t){(function(e,n){"use strict";if(!e.setImmediate){var i,a=1,o={},s=!1,r=e.document,c=Object.getPrototypeOf&&Object.getPrototypeOf(e);c=c&&c.setTimeout?c:e,"[object process]"==={}.toString.call(e.process)?m():p()?h():e.MessageChannel?g():r&&"onreadystatechange"in r.createElement("script")?v():y(),c.setImmediate=u,c.clearImmediate=l}function u(e){"function"!==typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var s={callback:e,args:t};return o[a]=s,i(a),a++}function l(e){delete o[e]}function f(e){var t=e.callback,i=e.args;switch(i.length){case 0:t();break;case 1:t(i[0]);break;case 2:t(i[0],i[1]);break;case 3:t(i[0],i[1],i[2]);break;default:t.apply(n,i);break}}function d(e){if(s)setTimeout(d,0,e);else{var t=o[e];if(t){s=!0;try{f(t)}finally{l(e),s=!1}}}}function m(){i=function(e){t.nextTick((function(){d(e)}))}}function p(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}function h(){var t="setImmediate$"+Math.random()+"$",n=function(n){n.source===e&&"string"===typeof n.data&&0===n.data.indexOf(t)&&d(+n.data.slice(t.length))};e.addEventListener?e.addEventListener("message",n,!1):e.attachEvent("onmessage",n),i=function(n){e.postMessage(t+n,"*")}}function g(){var e=new MessageChannel;e.port1.onmessage=function(e){var t=e.data;d(t)},i=function(t){e.port2.postMessage(t)}}function v(){var e=r.documentElement;i=function(t){var n=r.createElement("script");n.onreadystatechange=function(){d(t),n.onreadystatechange=null,e.removeChild(n),n=null},e.appendChild(n)}}function y(){i=function(e){setTimeout(d,0,e)}}})("undefined"===typeof self?"undefined"===typeof e?this:e:self)}).call(this,n("c8ba"),n("4362"))},"90dd":function(e,t,n){},fced:function(e,t,n){"use strict";var i=n("90dd"),a=n.n(i);a.a}}]);
//# sourceMappingURL=chunk-0b07bfa0.5a9d9dec.js.map