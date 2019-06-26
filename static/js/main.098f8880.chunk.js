(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{110:function(e,t,n){e.exports=n(255)},115:function(e,t,n){},116:function(e,t,n){},252:function(e,t,n){},253:function(e,t,n){},254:function(e,t,n){},255:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(105),o=n.n(c),i=(n(115),n(31)),l=n(3),u=(n(116),n(9)),s=n(4),m=n(106),d=n.n(m),f=n(107),E=n.n(f),b=n(108),p=n.n(b),h=function(e){return{type:"SET_QUERY",payload:e}},g={breeds:s.none,images:s.none,query:"",selectedBreed:s.none},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_BREEDS":return Object(l.a)({},e,{breeds:t.payload});case"SET_QUERY":return Object(l.a)({},e,{query:t.payload});case"SET_SELECTED_BREED":return Object(l.a)({},e,{selectedBreed:t.payload});case"SET_IMAGES":return Object(l.a)({},e,{images:t.payload});case"ADD_FAVORITE":return Object(l.a)({},e,{images:e.images.map(function(e){return e.map(E()(p()(function(e){return!e.favorited}),d()(function(e){return e.imageURI===t.payload?Object(l.a)({},e,{favorited:!e.favorited}):e})))})});default:return e}},j=function(e){return{opacity:e?1:0}};function O(e){var t=e.imageURI,n=e.breed,c=e.favorited,o=Object(a.useState)(!1),u=Object(i.a)(o,2),s=u[0],m=u[1];return r.a.createElement("figure",{key:t,style:{boxShadow:c?"0 0 0 5px var(--red)":"none"}},!s&&r.a.createElement("div",{className:"loading"},r.a.createElement("span",{role:"img","aria-label":"loading"},"\ud83d\udc36")),r.a.createElement("img",{style:Object(l.a)({},j(s),{transition:"800ms"}),onLoad:function(e){return m(!0)},alt:n,src:t}))}n(252);var y=null,S=function(e){return e.fold(function(e){return r.a.createElement("h3",{className:"error"},e)},function(e){var t=Object(a.useContext)(D).dispatch;return r.a.createElement("ul",null,e.map(function(e){var n=e.imageURI,a=e.breed,c=e.favorited;return r.a.createElement("li",{key:n,onClick:function(e){t({type:"ADD_FAVORITE",payload:n})}},r.a.createElement(O,{imageURI:n,breed:a,favorited:c}))}))})};function N(){var e=Object(a.useContext)(D).images;return r.a.createElement("section",{className:"gallery-container"},e.fold(y,S))}var R=n(109),w=n.n(R),T=(n(253),r.a.createElement("h2",{className:"loading"},"Loading...")),_=function(e){return e.fold(function(e){return r.a.createElement("h3",{className:"error"},e)},function(e){var t=Object(a.useContext)(D),n=t.dispatch,c=t.query,o=t.selectedBreed,i=e.filter(function(e){return(t=c,new RegExp(w()(t),"gi")).test(e);var t}),l=function(e){return function(t){n(function(e){return{type:"SET_SELECTED_BREED",payload:e}}(Object(s.some)(e))),function(e){return fetch("https://dog.ceo/api/breed/".concat(e,"/images")).then(function(e){return e.json()}).then(function(t){var n=t.message;return Array.isArray(n)?Object(s.some)(Object(u.right)(n.map(function(t){return{breed:e,favorited:!1,imageURI:t}}))):Object(s.some)(Object(u.left)("Failed to fetch images!"))}).catch(function(e){return Object(s.some)(Object(u.left)("Something went wrong!"))})}(e).then(function(e){return n(function(e){return{type:"SET_IMAGES",payload:e}}(e))})}};return i.length?r.a.createElement("ul",null,i.slice(0,12).map(function(e){var t=e===o.getOrElse("");return r.a.createElement("li",{key:e},r.a.createElement("button",{type:"button",onClick:l(e),"aria-pressed":t,className:t?"active":"",id:e},e))})):r.a.createElement("h2",{className:"no-match"},"No breed matches found.")})};function x(){var e=Object(a.useContext)(D).breeds;return r.a.createElement("nav",{className:"nav-container"},e.fold(T,_))}n(254);function C(){var e=Object(a.useContext)(D),t=e.dispatch,n=e.query;return r.a.createElement("span",{className:"search-container"},r.a.createElement("input",{"aria-label":"search",value:n,onChange:function(e){t(h(e.target.value))},className:"search-input",type:"text"}),0===n.length&&r.a.createElement("span",{className:"search-placeholder"},r.a.createElement("span",{role:"img","aria-label":"detective"},"\ud83d\udd75\ufe0f\u200d\u2640\ufe0f")," ","Search"))}var D=Object(a.createContext)(Object(l.a)({},g,{dispatch:function(){}})),I=function(){Object(a.useEffect)(function(){fetch("https://dog.ceo/api/breeds/list/all").then(function(e){return e.json()}).then(function(e){var t=e.message;return"object"===typeof t?Object(s.some)(Object(u.right)(Object.keys(t))):Object(s.some)(Object(u.left)("Failed to fetch dog breeds!"))}).catch(function(e){return Object(s.some)(Object(u.left)("Something went wrong!"))}).then(function(e){return c(function(e){return{type:"SET_BREEDS",payload:e}}(e))})},[]);var e=Object(a.useReducer)(v,g),t=Object(i.a)(e,2),n=t[0],c=t[1];return r.a.createElement(D.Provider,{value:Object(l.a)({},n,{dispatch:c})},r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"header-wrapper"},r.a.createElement("header",{className:"container"},r.a.createElement("h1",null,"Dogs!"),r.a.createElement(C,null))),r.a.createElement("main",{className:"container"},r.a.createElement(x,null),r.a.createElement(N,null))))};o.a.render(r.a.createElement(I,null),document.getElementById("root"))}},[[110,1,2]]]);
//# sourceMappingURL=main.098f8880.chunk.js.map