(this["webpackJsonpmonster-rolodex"]=this["webpackJsonpmonster-rolodex"]||[]).push([[0],{21:function(e,t,n){e.exports=n(36)},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(4),c=n.n(s),o=n(5),i=n(3),l=n(13),u=n(14),d={searchField:""},m={isPending:!1,monsters:[],error:""},h=(n(30),n(15)),p=n(16),E=n(19),f=n(17),g=n(20),S=(n(31),function(e){var t=e.name,n=e.id,r=e.email;return a.a.createElement("div",{className:"Card"},a.a.createElement("img",{className:"Card__monster-img",src:"https://robohash.org/".concat(n,"/?set=set2&200x200"),alt:"robo-card-".concat(n)}),a.a.createElement("h3",{className:"Card__monster-name"},t),a.a.createElement("p",{className:"Card__monster-email"},r))}),_=(n(32),function(e){var t=e.monsters;return a.a.createElement("div",{className:"CardList"},t.map((function(e){return a.a.createElement(S,{key:e.id,name:e.name,id:e.id,email:e.email})})))}),v=(n(33),function(e){var t=e.searchChange,n=e.placeholder;return a.a.createElement("input",{className:"SearchBox",onChange:t,type:"search",placeholder:n})}),b=n(9),C=n.n(b),N=n(18),O=(n(35),function(e){function t(){return Object(h.a)(this,t),Object(E.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestMonsters()}},{key:"render",value:function(){var e=this.props,t=e.isPending,n=e.searchField,r=e.monsters,s=e.onSearchChange,c=r.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t?a.a.createElement("h1",{className:"App__heading"},"Loading"):a.a.createElement("div",{className:"App"},a.a.createElement("h1",{className:"App__heading"},"Monster Rolodex"),a.a.createElement(v,{placeholder:"search monsters",searchChange:s}),a.a.createElement(_,{monsters:c}))}}]),t}(a.a.Component)),y=Object(o.b)((function(e){return console.log(e),{searchField:e.searchMonsters.searchField,isPending:e.requestMonsters.isPending,monsters:e.requestMonsters.monsters,error:e.requestMonsters.error}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestMonsters:function(){return e(function(){var e=Object(N.a)(C.a.mark((function e(t){var n,r;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"REQUEST_MONSTERS_PENDING"}),e.prev=1,e.next=4,fetch("https://jsonplaceholder.typicode.com/users");case 4:return n=e.sent,e.next=7,n.json();case 7:r=e.sent,t({type:"REQUEST_MONSTERS_SUCCESS",payload:r}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),t({type:"REQUEST_MONSTERS_FAILDED",payload:e.t0});case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}())}}}))(O),j=Object(u.createLogger)(),R=Object(i.c)({searchMonsters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestMonsters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_MONSTERS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_MONSTERS_SUCCESS":return Object.assign({},e,{isPending:!1,monsters:t.payload});case"REQUEST_MONSTERS_FAILDED":return Object.assign({},e,{isPending:!1,error:t.payload});default:return e}}}),M=Object(i.d)(R,Object(i.a)(l.a,j));c.a.render(a.a.createElement(o.a,{store:M},a.a.createElement(y,null)),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.e9f5b009.chunk.js.map