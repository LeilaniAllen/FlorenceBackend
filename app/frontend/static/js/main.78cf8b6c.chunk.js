(this.webpackJsonpflorence=this.webpackJsonpflorence||[]).push([[0],{104:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),i=c(16),r=c.n(i),s=(c(71),c(19)),o=c(42),l=c(62),j=c(126),d=c(122),u=c(129),b=c(127),f=c(124),O=c(57),x=c.n(O),p=c(58),h=c.n(p),m=c(59),v=c.n(m),g=c(60),y=c.n(g),F=(c(72),c.p+"static/media/About Florence.1e02f1e5.png"),_=c(2);var C=function(){return Object(_.jsx)("div",{className:"About",children:Object(_.jsx)("img",{className:"about florence",src:F,alt:"Florence the invetory of the electic fridge."})})},N=(c(74),c(75),c.p+"static/media/Home Page.dde287f3.png");var w=function(){return Object(_.jsx)("div",{className:"Home",children:Object(_.jsx)("img",{className:"about florence",src:N,alt:"Florence the invetory of the electic fridge."})})};c(76);var S=function(){return Object(_.jsx)("div",{className:"LogIn",children:"Log in"})},A=c(23),L=c.n(A),k=c(40),E=c(36),I=c.n(E),B=(c(96),"http://localhost:5000");var H=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)(),r=Object(s.a)(i,2),o=r[0],l=r[1],j=Object(n.useState)([]),d=Object(s.a)(j,2),u=d[0],b=d[1];return Object(n.useEffect)((function(){function e(){return(e=Object(k.a)(L.a.mark((function e(){var t,c;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get("".concat(B,"/customer/").concat(1));case 2:return t=e.sent,l(t.data),e.next=6,I.a.get("".concat(B,"/product"));case 6:c=e.sent,b(c.data);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(n.useEffect)((function(){function e(){return(e=Object(k.a)(L.a.mark((function e(){var t;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get("".concat(B,"/fridge/").concat(o.fridge_id,"/items"));case 2:t=e.sent,a(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}o&&function(){e.apply(this,arguments)}()}),[o]),Object(_.jsxs)("div",{className:"MyFridge",children:[o&&Object(_.jsxs)("div",{children:["id: ",o.id,"user_name: ",o.user_name,"fridge: ",o.fridge_id,Object(_.jsx)("img",{src:o.picture,alt:o.user_name})]}),Object(_.jsxs)("div",{children:["items:",c.map((function(e){var t=u.find((function(t){return t.id===e.product_id}));return Object(_.jsxs)(_.Fragment,{children:["id: ",e.id,"fridge_id: ",e.fridge_id,"product_id: ",e.product_id,"count: ",e.count,"product name: ",t.name,Object(_.jsx)("img",{src:t.image,alt:t.name})]})}))]})]})},M=c(61),P=c(123),J=Object(M.a)({palette:{primary:{main:"#FAC4C4"},secondary:{main:"#22783E"}}});function T(e){var t=e.children,c=e.value,n=e.index,a=Object(l.a)(e,["children","value","index"]);return Object(_.jsx)("div",Object(o.a)(Object(o.a)({role:"tabpanel",hidden:c!==n,id:"simple-tabpanel-".concat(n),"aria-labelledby":"simple-tab-".concat(n)},a),{},{children:c===n&&Object(_.jsx)(j.a,{p:3,children:Object(_.jsx)(d.a,{children:t})})}))}var D=function(){var e=a.a.useState(0),t=Object(s.a)(e,2),c=t[0],n=t[1];return Object(_.jsx)(P.a,{theme:J,children:Object(_.jsxs)("div",{className:"App container",children:[Object(_.jsx)(u.a,{position:"static",color:"default",children:Object(_.jsxs)(b.a,{value:c,onChange:function(e,t){n(t)},variant:"scrollable",scrollButtons:"on",indicatorColor:"secondary",textColor:"primary","aria-label":"scrollable force tabs example",children:[Object(_.jsx)(f.a,{label:"Home",icon:Object(_.jsx)(x.a,{})}),Object(_.jsx)(f.a,{label:"My Fridge",icon:Object(_.jsx)(h.a,{})}),Object(_.jsx)(f.a,{label:"About",icon:Object(_.jsx)(v.a,{})}),Object(_.jsx)(f.a,{label:"Log In",icon:Object(_.jsx)(y.a,{})})]})}),Object(_.jsx)(T,{value:c,index:0,children:Object(_.jsx)(w,{})}),Object(_.jsx)(T,{value:c,index:1,children:Object(_.jsx)(H,{})}),Object(_.jsx)(T,{value:c,index:2,children:Object(_.jsx)(C,{})}),Object(_.jsx)(T,{value:c,index:3,children:Object(_.jsx)(S,{})})]})})},q=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,130)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),i(e),r(e)}))};r.a.render(Object(_.jsx)(a.a.StrictMode,{children:Object(_.jsx)(D,{})}),document.getElementById("root")),q()},71:function(e,t,c){},72:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){},76:function(e,t,c){},96:function(e,t,c){}},[[104,1,2]]]);
//# sourceMappingURL=main.78cf8b6c.chunk.js.map