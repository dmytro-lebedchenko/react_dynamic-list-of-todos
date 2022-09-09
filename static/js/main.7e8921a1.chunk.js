(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s=c(6),a=c.n(s),n=c(7),l=c(2),i=c(4),d=c.n(i),o=c(1),r=(c(13),c(14),c(5)),j=c.n(r),u=c(0),b=function(e){var t=e.todos,c=e.selectedTodo,s=e.setSelectedTodo;return Object(u.jsxs)("table",{className:" table is-narrow is-fullwidth",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"#"}),Object(u.jsx)("th",{children:Object(u.jsx)("span",{className:"icon",children:Object(u.jsx)("i",{className:"fas fa-check"})})}),Object(u.jsx)("th",{children:"Title"}),Object(u.jsx)("th",{children:" "})]})}),Object(u.jsx)("tbody",{children:t.map((function(e){return Object(u.jsxs)("tr",{className:j()((null===c||void 0===c?void 0:c.id)===e.id?"has-background-info-light":""),"data-cy":"todo",children:[Object(u.jsx)("td",{className:"is-vcentered",children:e.id}),Object(u.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(u.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(u.jsx)("i",{className:"fas fa-check"})})}),Object(u.jsx)("td",{className:"is-vcentered is-expanded",children:Object(u.jsx)("p",{className:j()(e.completed?"has-text-success":"has-text-danger"),children:e.title})}),Object(u.jsx)("td",{className:"has-text-right is-vcentered",children:Object(u.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return s(e)},children:Object(u.jsx)("span",{className:"icon",children:(null===c||void 0===c?void 0:c.id)===e.id?Object(u.jsx)("i",{className:"far fa-eye-slash"}):Object(u.jsx)("i",{className:"far fa-eye"})})})})]},e.id)}))})]})},h=function(e){var t=e.value,c=e.onQuery,s=e.onFilter;return Object(u.jsxs)("form",{className:"field has-addons",children:[Object(u.jsx)("p",{className:"control",children:Object(u.jsx)("span",{className:"select",children:Object(u.jsxs)("select",{"data-cy":"statusSelect",onChange:function(e){return s(e)},children:[Object(u.jsx)("option",{value:"all",children:"All"}),Object(u.jsx)("option",{value:"active",children:"Active"}),Object(u.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(u.jsxs)("p",{className:" control is-expanded has-icons-left has-icons-right",children:[Object(u.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:function(e){return c(e.target.value)}}),Object(u.jsx)("span",{className:"icon is-left",children:Object(u.jsx)("i",{className:"fas fa-magnifying-glass"})}),t&&Object(u.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(u.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return c("")}})})]})]})},m=(c(16),function(){return Object(u.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(u.jsx)("div",{className:"Loader__content"})})});function O(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var x=function(e){var t=e.selectedTodo,c=e.setSelectedTodo,s=Object(o.useState)(null),a=Object(l.a)(s,2),n=a[0],i=a[1];return Object(o.useEffect)((function(){var e;(e=t.userId,O("/users/".concat(e))).then((function(e){return i(e)}))}),[]),Object(u.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(u.jsx)("div",{className:"modal-background"}),n?Object(u.jsxs)("div",{className:"modal-card",children:[Object(u.jsxs)("header",{className:"modal-card-head",children:[Object(u.jsx)("div",{className:" modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===t||void 0===t?void 0:t.id)}),Object(u.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return c(null)}})]}),Object(u.jsxs)("div",{className:"modal-card-body",children:[Object(u.jsx)("p",{className:"block","data-cy":"modal-title",children:null===t||void 0===t?void 0:t.title}),Object(u.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==t&&void 0!==t&&t.completed?Object(u.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(u.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(u.jsx)("a",{href:"mailto:".concat(null===n||void 0===n?void 0:n.email),children:null===n||void 0===n?void 0:n.name})]})]})]}):Object(u.jsx)(m,{})]})},f=function(){var e=Object(o.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1],a=Object(o.useState)(null),i=Object(l.a)(a,2),r=i[0],j=i[1],f=Object(o.useState)(""),v=Object(l.a)(f,2),p=v[0],N=v[1],y=Object(o.useState)("all"),g=Object(l.a)(y,2),k=g[0],S=g[1],T=Object(o.useState)(!1),w=Object(l.a)(T,2),C=w[0],E=w[1],_=Object(o.useState)(!1),L=Object(l.a)(_,2),B=L[0],F=L[1],I=function(){var e=Object(n.a)(d.a.mark((function e(t){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(!0),F(!1),e.prev=2,e.next=5,t;case 5:c=e.sent,s(c),E(!1),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),F(!0),E(!1);case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){I(O("/todos"))}),[]);var A=function(e){return e.length?e.filter((function(e){var t=e.title.toLowerCase(),c=p.toLowerCase().trim(),s=t.includes(c);switch(k){case"active":return!e.completed&&s;case"completed":return e.completed&&s;default:return e&&s}})):[]},J=Object(o.useMemo)((function(){return A(c)}),[c,p,k]);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"section",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"box",children:[Object(u.jsx)("h1",{className:"title",children:"Todos:"}),Object(u.jsx)("div",{className:"block",children:Object(u.jsx)(h,{value:p,onQuery:N,onFilter:function(e){S(e.target.value),A(c)}})}),Object(u.jsxs)("div",{className:"block",children:[C&&Object(u.jsx)(m,{}),!C&&!B&&Object(u.jsx)(b,{todos:J,selectedTodo:r,setSelectedTodo:j})]})]})})}),r&&Object(u.jsx)(x,{selectedTodo:r,setSelectedTodo:j}),B&&Object(u.jsx)("div",{className:" container box notification is-danger is-light",children:"Oh, no! Error during loading data from server!"})]})};a.a.render(Object(u.jsx)(f,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.7e8921a1.chunk.js.map