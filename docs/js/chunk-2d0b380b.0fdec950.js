(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b380b"],{"293a":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.tokenChecking?e._e():n("ChatRoom",{staticClass:"content"}),e.tokenChecking?e._e():n("SimpleNotes",{attrs:{title:"正在开发中",icon:"fas fa-truck",primaryText:"CAT ROOM 将是我们的留言板",secondaryText:"仍在努力的开发过程中，下次再来看看吧"}})],1)},a=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div")},i=[],s={name:"ChatRoom"},r=s,l=n("2877"),u=Object(l["a"])(r,c,i,!1,null,null,null),h=u.exports,k=n("0455"),d={name:"Chat",components:{ChatRoom:h,SimpleNotes:k["a"]},data:function(){return{tokenChecking:!0}},created:function(){var e=this;this.$DevMode?this.tokenChecking=!1:this.axios.post("/users/checkToken").then((function(t){200==t.data.code&&(e.tokenChecking=!1)}))}},p=d,f=Object(l["a"])(p,o,a,!1,null,null,null);t["default"]=f.exports}}]);
//# sourceMappingURL=chunk-2d0b380b.0fdec950.js.map