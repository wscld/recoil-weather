(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{24:function(e,t,a){e.exports=a(73)},29:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),o=a.n(c),i=(a(29),a(8)),l=a(2),m=Object(l.atom)({key:"locationState",default:""}),s=m,u=a(3),p=a.n(u),d=a(4),v=a(23),h=a.n(v),E=function(){var e=Object(d.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h()({method:"get",url:"https://api.openweathermap.org/data/2.5/forecast",params:{q:t,units:"metric",appid:Object({NODE_ENV:"production",PUBLIC_URL:"/recoil-weather",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_KEY}});case 3:return a=e.sent,e.abrupt("return",a.data);case 7:throw e.prev=7,e.t0=e.catch(0),Error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),f=Object(l.selector)({key:"fetchForecast",get:function(){var e=Object(d.a)(p.a.mark((function e(t){var a,n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.get,""===(n=a(s))){e.next=15;break}return e.prev=3,e.next=6,E(n);case 6:return r=e.sent,e.abrupt("return",r);case 10:return e.prev=10,e.t0=e.catch(3),e.abrupt("return",{error:e.t0});case 13:e.next=16;break;case 15:return e.abrupt("return",{list:[]});case 16:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}()}),w=(a(71),function(){var e=Object(l.useRecoilValue)(f);return r.a.createElement("div",{className:"weather-component"},e.list?e.list.map((function(e){return r.a.createElement("div",{className:"item"},r.a.createElement("div",{className:"date"},(t=e.dt,new Date(1e3*t).toLocaleString("pt-BR"))),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"icon"},r.a.createElement("img",{alt:"",src:"http://openweathermap.org/img/wn/"+e.weather[0].icon+"@2x.png"})),r.a.createElement("div",null,r.a.createElement("div",{className:"temp"},"Temperatura: ",e.main.temp),r.a.createElement("div",{className:"max-temp"},"M\xe1xima: ",e.main.temp_max),r.a.createElement("div",{className:"min-temp"},"M\xednima: ",e.main.temp_min))));var t})):r.a.createElement("div",{className:"error"},"N\xe3o encontrado."))}),b=(a(72),function(){var e=Object(l.useRecoilState)(m),t=Object(i.a)(e,2),a=(t[0],t[1]),c=Object(n.useState)(""),o=Object(i.a)(c,2),s=o[0],u=o[1];return r.a.createElement("div",{className:"home-component"},r.a.createElement("div",{className:"form"},r.a.createElement("input",{placeholder:"cidade...",onChange:function(e){return t=e.target.value,void u(t);var t}}),r.a.createElement("button",{onClick:function(){a(s)}}," Procurar ")),r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",{className:"loading"},"carregando...")},r.a.createElement(w,null)),r.a.createElement("div",{className:"footer"},"API from ",r.a.createElement("a",{href:"http://openweathermap.org/",target:"_blank"},"openweathermap")))});var g=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.RecoilRoot,null,r.a.createElement(g,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.53066a4d.chunk.js.map