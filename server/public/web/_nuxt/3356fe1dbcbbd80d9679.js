(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{325:function(t,e,n){var content=n(344);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("747dcd55",content,!0,{sourceMap:!1})},343:function(t,e,n){"use strict";var r=n(325);n.n(r).a},344:function(t,e,n){(e=n(16)(!1)).push([t.i,"#category[data-v-7a22a035]{margin-top:1rem}.container[data-v-7a22a035]{width:90%;width:750px;text-align:center;padding:1rem;background:#fff}.length[data-v-7a22a035]{font-size:1.1rem;font-weight:400;color:red}.category[data-v-7a22a035]{display:-webkit-box;display:flex;flex-wrap:wrap;margin:0 auto}.name[data-v-7a22a035]{font-size:1.2rem}.list[data-v-7a22a035]{margin-left:2rem;margin-top:2rem;cursor:pointer;box-sizing:border-box}",""]),t.exports=e},547:function(t,e,n){"use strict";n.r(e);n(43);var r={name:"category",data:function(){return{length:""}},asyncData:function(t){var e,n;return regeneratorRuntime.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e=t.$axios,r.next=3,regeneratorRuntime.awrap(e.get("/web/api/category"));case 3:return n=r.sent,r.abrupt("return",{categories:n.slice(6,n.length)});case 5:case"end":return r.stop()}}))},mounted:function(){this.length=this.categories.length},head:function(){return{title:"Category",meta:[{hid:"description",name:"Category",content:"Category"}]}}},o=(n(343),n(18)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"category"}},[n("div",{staticClass:"container"},[n("h2",[t._v("文章标签")]),t._v(" "),n("h4",[t._v("\n      目前共计\n      "),n("span",{staticClass:"length"},[t._v(t._s(t.length))]),t._v("个标签\n    ")]),t._v(" "),n("div",{staticClass:"category"},t._l(t.categories,(function(e){return n("div",{key:e._id,staticClass:"list"},[n("nuxt-link",{attrs:{tag:"div",to:{name:"categories-categorylist",params:{categorylist:e._id,title:e.name}}}},[n("el-tag",{staticClass:"name",attrs:{type:e.type}},[t._v(t._s(e.name))])],1)],1)})),0)])])}),[],!1,null,"7a22a035",null);e.default=component.exports}}]);