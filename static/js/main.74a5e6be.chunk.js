(this["webpackJsonpfaraday-code-test"]=this["webpackJsonpfaraday-code-test"]||[]).push([[0],{81:function(e,t,n){},89:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(27),s=n.n(r),o=(n(81),n(53)),i=n.n(o),j=n(14),l=n(61),h=n(13),u=n(137),d=n(138),p=n(130),b=n(66),O=n.n(b),x=n(132),f=n(133),m=n(135),g=n(136),v=n(64),y=n.n(v),k=n(2),S=function(e){var t=e.repos,n=e.filter;return Object(k.jsx)(x.a,{container:!0,rowSpacing:1,columnSpacing:{xs:1,sm:2,md:3},justify:"space-around",style:{padding:"2rem"},children:t.length>0&&t.map((function(e){return e.name.includes(n)&&function(e){return Object(k.jsx)(x.a,{item:!0,xs:12,md:4,children:Object(k.jsx)("a",{href:e.html_url,rel:"noreferrer",target:"_blank",style:{textDecoration:"none"},children:Object(k.jsx)(f.a,{children:Object(k.jsxs)(m.a,{children:[Object(k.jsx)(g.a,{variant:"h4",component:"h2",children:"".concat(e.name)}),Object(k.jsx)(g.a,{variant:"h6",component:"h2",children:"Forks: ".concat(e.forks_count)}),Object(k.jsx)(g.a,{variant:"h6",component:"h2",children:"Open Issues: ".concat(e.open_issues_count)}),Object(k.jsx)(g.a,{variant:"h6",component:"h2",children:"Latest Push: ".concat(y()(e.pushed_at).format("DD/MM/YYYY"))})]})})})},e.name)}(e)}))})};n(89);var _=function(){var e=Object(c.useState)([]),t=Object(h.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),s=Object(h.a)(r,2),o=s[0],b=s[1],x=Object(c.useState)(!0),f=Object(h.a)(x,2),m=f[0],g=f[1],v=Object(c.useState)(1),y=Object(h.a)(v,2),_=y[0],w=y[1];return Object(c.useEffect)((function(){var e="https://api.github.com/orgs/faradayio/repos?per_page=100&page=".concat(_);if(console.log(e),!0===m){var t=function(){var t=Object(l.a)(i.a.mark((function t(){var c,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(e);case 3:return c=t.sent,t.next=6,c.json();case 6:r=t.sent,a([].concat(Object(j.a)(n),Object(j.a)(r))),r.length<100?g(!1):w(_+1),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log("error",t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(){return t.apply(this,arguments)}}();t()}}),[m,_]),Object(k.jsxs)("div",{className:"App",children:[Object(k.jsx)(u.a,{position:"fixed",children:Object(k.jsx)(d.a,{children:Object(k.jsxs)("div",{className:"searchContainer",children:[Object(k.jsx)(O.a,{className:"searchIcon"}),Object(k.jsx)(p.a,{className:"searchInput",onChange:function(e){b(e.target.value)},variant:"standard",placeholder:"Search"})]})})}),Object(k.jsxs)("section",{style:{paddingTop:"100px"},children:[Object(k.jsx)("h1",{align:"center",children:"Faraday Github Repos"}),Object(k.jsx)("p",{align:"center",children:"Click a card to visit that Repo's page."}),Object(k.jsx)(S,{repos:n,filter:o})]}),!0===m?Object(k.jsx)("p",{align:"center",children:"Loading..."}):null]})};s.a.render(Object(k.jsx)(a.a.StrictMode,{children:Object(k.jsx)(_,{})}),document.getElementById("root"))}},[[95,1,2]]]);
//# sourceMappingURL=main.74a5e6be.chunk.js.map