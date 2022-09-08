(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var a=c(6),s=c.n(a),n=c(7),l=c(2),i=c(4),o=c.n(i),d=c(1),r=(c(13),c(14),c(5)),j=c.n(r),u=c(0),b=function(e){var t=e.todos,c=e.clickedTodo,a=e.onClickTodo;return Object(u.jsxs)("table",{className:" table is-narrow is-fullwidth",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"#"}),Object(u.jsx)("th",{children:Object(u.jsx)("span",{className:"icon",children:Object(u.jsx)("i",{className:"fas fa-check"})})}),Object(u.jsx)("th",{children:"Title"}),Object(u.jsx)("th",{children:" "})]})}),Object(u.jsx)("tbody",{children:t.map((function(e){return Object(u.jsxs)("tr",{className:j()((null===c||void 0===c?void 0:c.id)===e.id?"has-background-info-light":""),"data-cy":"todo",children:[Object(u.jsx)("td",{className:"is-vcentered",children:e.id}),Object(u.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(u.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(u.jsx)("i",{className:"fas fa-check"})})}),Object(u.jsx)("td",{className:"is-vcentered is-expanded",children:Object(u.jsx)("p",{className:j()(e.completed?"has-text-success":"has-text-danger"),children:e.title})}),Object(u.jsx)("td",{className:"has-text-right is-vcentered",children:Object(u.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return a(e)},children:Object(u.jsx)("span",{className:"icon",children:(null===c||void 0===c?void 0:c.id)===e.id?Object(u.jsx)("i",{className:"far fa-eye-slash"}):Object(u.jsx)("i",{className:"far fa-eye"})})})})]},e.id)}))})]})},h=function(e){var t=e.value,c=e.onQuery,a=e.onFilter,s=Object(d.useState)(""),n=Object(l.a)(s,2),i=n[0],o=n[1];return Object(u.jsxs)("form",{className:"field has-addons",children:[Object(u.jsx)("p",{className:"control",children:Object(u.jsx)("span",{className:"select",children:Object(u.jsxs)("select",{"data-cy":"statusSelect",onChange:function(e){return a(e)},children:[Object(u.jsx)("option",{value:"all",children:"All"}),Object(u.jsx)("option",{value:"active",children:"Active"}),Object(u.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(u.jsxs)("p",{className:" control is-expanded has-icons-left has-icons-right",children:[Object(u.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:function(e){c(e.target.value),o(e.target.value)}}),Object(u.jsx)("span",{className:"icon is-left",children:Object(u.jsx)("i",{className:"fas fa-magnifying-glass"})}),i&&Object(u.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(u.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return c("")}})})]})]})},O=(c(16),function(){return Object(u.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(u.jsx)("div",{className:"Loader__content"})})});function m(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var x=function(e){var t=e.clickedTodo,c=e.onClickTodo,a=Object(d.useState)(null),s=Object(l.a)(a,2),n=s[0],i=s[1];return Object(d.useEffect)((function(){var e;(e=t.userId,m("/users/".concat(e))).then((function(e){return i(e)}))}),[]),Object(u.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(u.jsx)("div",{className:"modal-background"}),n?Object(u.jsxs)("div",{className:"modal-card",children:[Object(u.jsxs)("header",{className:"modal-card-head",children:[Object(u.jsx)("div",{className:" modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===t||void 0===t?void 0:t.id)}),Object(u.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return c(null)}})]}),Object(u.jsxs)("div",{className:"modal-card-body",children:[Object(u.jsx)("p",{className:"block","data-cy":"modal-title",children:null===t||void 0===t?void 0:t.title}),Object(u.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==t&&void 0!==t&&t.completed?Object(u.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(u.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(u.jsx)("a",{href:"mailto:".concat(null===n||void 0===n?void 0:n.email),children:null===n||void 0===n?void 0:n.name})]})]})]}):Object(u.jsx)(O,{})]})},v=function(){var e=Object(d.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],s=Object(d.useState)(null),i=Object(l.a)(s,2),r=i[0],j=i[1],v=Object(d.useState)(""),f=Object(l.a)(v,2),p=f[0],N=f[1],y=Object(d.useState)("all"),g=Object(l.a)(y,2),k=g[0],C=g[1],S=Object(d.useState)(!1),T=Object(l.a)(S,2),w=T[0],E=T[1],_=Object(d.useState)(!1),L=Object(l.a)(_,2),B=L[0],F=L[1],I=Object(d.useState)(!1),A=Object(l.a)(I,2),J=A[0],P=A[1],Q=function(){var e=Object(n.a)(o.a.mark((function e(t){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(!0),F(!1),e.prev=2,e.next=5,t;case 5:c=e.sent,a(c),P(!0),E(!1),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),F(!0),E(!1);case 15:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}();Object(d.useEffect)((function(){Q(m("/todos"))}),[]);var D=Object(d.useCallback)((function(e){return e.length?e.filter((function(e){var t=e.title.toLowerCase(),c=p.toLowerCase().trim(),a=t.includes(c);switch(k){case"active":return!e.completed&&a;case"completed":return e.completed&&a;default:return e&&a}})):[]}),[k,p]),M=Object(d.useMemo)((function(){return D(c)}),[c,p,k]);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"section",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"box",children:[Object(u.jsx)("h1",{className:"title",children:"Todos:"}),Object(u.jsx)("div",{className:"block",children:Object(u.jsx)(h,{value:p,onQuery:N,onFilter:function(e){C(e.target.value),D(c)}})}),Object(u.jsxs)("div",{className:"block",children:[w&&Object(u.jsx)(O,{}),J&&Object(u.jsx)(b,{todos:M,clickedTodo:r,onClickTodo:j})]})]})})}),r&&Object(u.jsx)(x,{clickedTodo:r,onClickTodo:j}),B&&Object(u.jsx)("div",{className:" container box notification is-danger is-light",children:"Oh, no! Error during loading data from server!"})]})};s.a.render(Object(u.jsx)(v,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.66fc6205.chunk.js.map