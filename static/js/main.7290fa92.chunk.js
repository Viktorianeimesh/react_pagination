(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{10:function(e,c,t){},12:function(e,c,t){"use strict";t.r(c);var a=t(5),n=t.n(a),i=t(4),r=t(1),l=(t(10),t(2)),s=t.n(l);function o(e,c){for(var t=[],a=e;a<=c;a+=1)t.push(a);return t}var j=t(0),u=function(e){var c=e.total,t=e.perPage,a=e.currentPage,n=e.onPageChange,i=Object(r.useMemo)((function(){return Math.ceil(c/t)}),[t]),l=o(1,i);return Object(j.jsxs)("ul",{className:"pagination",children:[Object(j.jsx)("li",{className:s()("page-item",{disabled:1===a}),children:Object(j.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":1===a,onClick:function(){1!==a&&n(a-1)},children:"\xab"})}),l.map((function(e){return Object(j.jsx)("li",{className:s()("page-item",{active:a===e}),children:Object(j.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(e),onClick:function(){return n(e)},children:e})},e)})),Object(j.jsx)("li",{className:s()("page-item",{disabled:a===i}),children:Object(j.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":a===i,onClick:function(){a!==i&&n(a+1)},children:"\xbb"})})]})},b=42,d=o(1,b).map((function(e){return"Item ".concat(e)})),m=function(){var e=Object(r.useState)(1),c=Object(i.a)(e,2),t=c[0],a=c[1],n=Object(r.useState)(5),l=Object(i.a)(n,2),s=l[0],o=l[1],m=Object(r.useMemo)((function(){var e=t*s;return e>b?b:e}),[t,s,b]),p=Object(r.useMemo)((function(){return(t-1)*s}),[s,t]),h=Object(r.useMemo)((function(){return d.slice(p,m)}),[p,m]),O=Object(r.useCallback)((function(e){o(+e.target.value),a(1)}),[o,a]),f=Object(r.useCallback)((function(e){a(e)}),[a]);return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{children:"Items with Pagination"}),Object(j.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(t," (items ").concat(p+1," - ").concat(m," of ").concat(b,")")}),Object(j.jsxs)("div",{className:"form-group row",children:[Object(j.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(j.jsxs)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",value:s,onChange:O,autoComplete:"off",children:[Object(j.jsx)("option",{value:"3",children:"3"}),Object(j.jsx)("option",{value:"5",children:"5"}),Object(j.jsx)("option",{value:"10",children:"10"}),Object(j.jsx)("option",{value:"20",children:"20"})]})}),Object(j.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(j.jsx)(u,{total:b,perPage:s,currentPage:t,onPageChange:f}),Object(j.jsx)("ul",{children:h.map((function(e){return Object(j.jsx)("li",{"data-cy":"item",children:e},e)}))})]})};n.a.render(Object(j.jsx)(m,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.7290fa92.chunk.js.map