(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e){e.exports={domain:"miedzyslowami.eu.auth0.com",clientId:"rS75NG14cW04DlVB0iGsVOye7FuElbzU"}},31:function(e,t,n){e.exports=n(59)},58:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(27),c=n.n(o),i=n(2),l=n.n(i),u=n(6),s=n(10),p=n(16),d=n(28),f=n.n(d),h=function(){return window.history.replaceState({},document.title,window.location.pathname)},m=r.a.createContext(),w=function(){return Object(a.useContext)(m)},g=n(8),v=function(){var e=w(),t=e.isAuthenticated,n=e.loginWithRedirect,a=e.logout;return r.a.createElement("div",null,!t&&r.a.createElement("button",{onClick:function(){return n({})}},"Log in"),t&&r.a.createElement("button",{onClick:function(){return a()}},"Log out"),t&&r.a.createElement("span",null,r.a.createElement(g.b,{to:"/"},"Home"),"\xa0",r.a.createElement(g.b,{to:"/profile"},"Profile")))},b=n(7),k=function(){var e=w(),t=e.loading,n=e.user;return t||!n?"Loading...":r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:n.picture,alt:"Profile"}),r.a.createElement("h2",null,n.name),r.a.createElement("p",null,n.email),r.a.createElement("code",null,JSON.stringify(n,null,2)))},y=n(12),E=n(13),O=n(15),j=n(14),x=n(17),C=function(e){function t(){var e,n;Object(y.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(O.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(r)))).state={data:[]},n.fetchData=Object(u.a)(l.a.mark(function e(){var t,a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"https://cors-anywhere.herokuapp.com/","https://warm-bayou-54949.herokuapp.com/connection",e.next=5,fetch("https://cors-anywhere.herokuapp.com/https://warm-bayou-54949.herokuapp.com/connection");case 5:return t=e.sent,e.next=8,t.json();case 8:a=e.sent,n.setState({data:a}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}},e,null,[[0,12]])})),n}return Object(x.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){var e=this.state.data.map(function(e,t){return r.a.createElement("li",{key:t},e.type,": ",e.value)});return r.a.createElement("ol",null,e)}}]),t}(a.Component),S=function(e){var t=e.component,n=e.path,o=Object(p.a)(e,["component","path"]),c=w(),i=c.isAuthenticated,s=c.loginWithRedirect;Object(a.useEffect)(function(){!function(){var e=Object(u.a)(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(i){e.next=3;break}return e.next=3,s({appState:{targetUrl:n}});case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[i,s,n]);return r.a.createElement(b.a,Object.assign({path:n,render:function(e){return!0===i?r.a.createElement(t,e):null}},o))};a.Component,n(58);var W=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(C,null),r.a.createElement(g.a,null,r.a.createElement("header",null,r.a.createElement(v,null)),r.a.createElement(b.c,null,r.a.createElement(b.a,{path:"/",exact:!0}),r.a.createElement(S,{path:"/profile",component:k}))))},R=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function A(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var U=n(23);console.log(window.location.pathname,window.location.origin);c.a.render(r.a.createElement(function(e){var t=e.children,n=e.onRedirectCallback,o=void 0===n?h:n,c=Object(p.a)(e,["children","onRedirectCallback"]),i=Object(a.useState)(),d=Object(s.a)(i,2),w=d[0],g=d[1],v=Object(a.useState)(),b=Object(s.a)(v,2),k=b[0],y=b[1],E=Object(a.useState)(),O=Object(s.a)(E,2),j=O[0],x=O[1],C=Object(a.useState)(!0),S=Object(s.a)(C,2),W=S[0],R=S[1],A=Object(a.useState)(!1),U=Object(s.a)(A,2),P=U[0],T=U[1];Object(a.useEffect)(function(){!function(){var e=Object(u.a)(l.a.mark(function e(){var t,n,a,r,i;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f()(c);case 2:if(t=e.sent,x(t),!window.location.search.includes("code=")){e.next=10;break}return e.next=7,t.handleRedirectCallback();case 7:n=e.sent,a=n.appState,o(a);case 10:return e.next=12,t.isAuthenticated();case 12:if(r=e.sent,g(r),!r){e.next=19;break}return e.next=17,t.getUser();case 17:i=e.sent,y(i);case 19:R(!1);case 20:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[]);var I=function(){var e=Object(u.a)(l.a.mark(function e(){var t,n,a=arguments;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:{},T(!0),e.prev=2,e.next=5,j.loginWithPopup(t);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.error(e.t0);case 10:return e.prev=10,T(!1),e.finish(10);case 13:return e.next=15,j.getUser();case 15:n=e.sent,y(n),g(!0);case 18:case"end":return e.stop()}},e,null,[[2,7,10,13]])}));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(u.a)(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return R(!0),e.next=3,j.handleRedirectCallback();case 3:return e.next=5,j.getUser();case 5:t=e.sent,R(!1),g(!0),y(t);case 9:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return r.a.createElement(m.Provider,{value:{isAuthenticated:w,user:k,loading:W,popupOpen:P,loginWithPopup:I,handleRedirectCallback:L,getIdTokenClaims:function(){return j.getIdTokenClaims.apply(j,arguments)},loginWithRedirect:function(){return j.loginWithRedirect.apply(j,arguments)},getTokenSilently:function(){return j.getTokenSilently.apply(j,arguments)},getTokenWithPopup:function(){return j.getTokenWithPopup.apply(j,arguments)},logout:function(){return j.logout.apply(j,arguments)}}},t)},{domain:U.domain,client_id:U.clientId,redirect_uri:window.location.origin+window.location.pathname,onRedirectCallback:function(e){window.history.replaceState({},document.title,e&&e.targetUrl?e.targetUrl:window.location.origin+window.location.pathname)}},r.a.createElement(W,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/budget-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/budget-app","/service-worker.js");R?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):A(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):A(t,e)})}}()}},[[31,1,2]]]);
//# sourceMappingURL=main.985ef06c.chunk.js.map