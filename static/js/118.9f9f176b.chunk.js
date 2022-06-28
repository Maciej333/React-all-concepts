"use strict";(self.webpackChunkreact_all_concepts_ts=self.webpackChunkreact_all_concepts_ts||[]).push([[118],{7527:function(e,n,t){t.d(n,{Z:function(){return h}});var r=t(885),s=t(2791),i={value:"val from context",setValue:function(){return""}},a=(0,s.createContext)(i),c=t(184);function l(){var e=(0,s.useContext)(a),n=e.value,t=e.setValue;return(0,c.jsxs)(s.Fragment,{children:[(0,c.jsxs)("span",{children:["[CHILD] stateContext = ",n]}),(0,c.jsx)("label",{htmlFor:"childContext",children:"Change context from child component:"}),(0,c.jsx)("input",{id:"childContext",name:"childContext",value:n,onChange:function(e){t(e.target.value)}})]})}var o="light",d=(0,s.createContext)(o);function u(){var e=(0,s.useContext)(d);return(0,c.jsx)("div",{className:"context-theme "+e,children:"ContextTheme"})}function h(){var e=(0,s.useState)("context val from state"),n=(0,r.Z)(e,2),t=n[0],i=n[1],h=(0,s.useState)(o),x=(0,r.Z)(h,2),m=x[0],j=x[1];return(0,c.jsxs)("div",{className:"context",children:[(0,c.jsxs)(a.Provider,{value:{value:t,setValue:function(e){i(e)}},children:[(0,c.jsxs)("span",{children:["[PARENT] stateContext = ",t]}),(0,c.jsx)("label",{htmlFor:"parentContext",children:"Change context from parent component:"}),(0,c.jsx)("input",{id:"parentContext",name:"parentContext",value:t,onChange:function(e){var n=e.target.value;i(n)}}),(0,c.jsx)(l,{})]}),(0,c.jsxs)(d.Provider,{value:m,children:[(0,c.jsx)("p",{children:"EXAMPLE OF THEME CONTEXT"}),(0,c.jsxs)("label",{htmlFor:"themeContext",children:["Theme = ",m]}),(0,c.jsxs)("div",{children:[(0,c.jsx)("button",{onClick:function(){return j(o)},children:"Light theme"}),(0,c.jsx)("button",{onClick:function(){return j("dark")},children:"Dark theme"})]}),(0,c.jsx)(u,{})]})]})}},2118:function(e,n,t){t.r(n),t.d(n,{default:function(){return k}});var r=t(2791),s=t(184);function i(){return(0,s.jsx)("div",{children:"Element"})}var a=(0,r.lazy)((function(){return t.e(29).then(t.bind(t,5029))}));function c(){return(0,s.jsxs)("div",{className:"code-split",children:[(0,s.jsx)("p",{children:"Element with normal loading"}),(0,s.jsx)(i,{}),(0,s.jsx)("p",{children:"Element with lazy loading [ change network speed 'good 2D' ]"}),(0,s.jsx)(r.Suspense,{fallback:(0,s.jsx)("span",{children:"...loading"}),children:(0,s.jsx)(a,{})})]})}var l=t(7527),o=t(885);function d(){var e=(0,r.useState)(["EL_1","EL_2","EL_3"]),n=(0,o.Z)(e,1)[0];return(0,s.jsxs)("div",{className:"fragment",children:[(0,s.jsx)("p",{children:"Tab element "}),n.map((function(e){return(0,s.jsxs)(r.Fragment,{children:[(0,s.jsx)("span",{children:"Tab el = "}),(0,s.jsx)("span",{children:e})]},e)})),(0,s.jsx)("p",{children:"Fragment children"}),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("span",{children:"Element 1 in fragment"}),(0,s.jsx)("span",{children:"Element 2 in fragment"})]}),(0,s.jsx)("p",{children:"Div children"}),(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{children:"Element 1 in div"}),(0,s.jsx)("span",{children:"Element 2 in div"})]})]})}var u=t(1413);var h,x,m=(h=function(e){var n=e.money,t=e.error,r=void 0!==t&&t;return(0,s.jsx)("div",{className:"wrap-me",children:r?(0,s.jsx)("span",{children:"[Error] Invalid money"}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("span",{children:"Value "}),(0,s.jsx)("span",{children:n})]})})},x="PLN",function(e){var n=e.money,t=(0,r.useState)(n),i=(0,o.Z)(t,2),a=i[0],c=i[1],l=(0,r.useState)(!1),d=(0,o.Z)(l,2),m=d[0],j=d[1];return(0,r.useEffect)((function(){if(n.match(/^[\d]+([.,]?[\d]+)?$/)){var e=n.split(/[,.]/),t="";e.length>1?t+="".concat(parseFloat(n).toFixed(2)," ").concat(x," "):t+="".concat(Number(e[0]),".00 ").concat(x," "),c(t),j(!1)}else j(!0)}),[n]),(0,s.jsx)(h,(0,u.Z)((0,u.Z)({},e),{},{money:a,error:m}))});function j(){var e=(0,r.useState)("220.2345"),n=(0,o.Z)(e,2),t=n[0],i=n[1];return(0,s.jsxs)("div",{className:"higher-order",children:[(0,s.jsx)("label",{htmlFor:"money",children:"State money = "}),(0,s.jsx)("input",{id:"money",name:"money",value:t,onChange:function(e){var n=e.target.value;i(n)}}),(0,s.jsx)("div",{children:(0,s.jsx)(m,{money:t})})]})}function v(){var e=(0,r.useState)(!1),n=(0,o.Z)(e,2),t=n[0],i=n[1],a=(0,r.useState)(0),c=(0,o.Z)(a,2),l=c[0],d=c[1],u=(0,r.useState)(""),h=(0,o.Z)(u,2),x=h[0],m=h[1],j=(0,r.useState)(-1),v=(0,o.Z)(j,2),f=v[0],p=v[1],g=(0,r.useState)(-1),C=(0,o.Z)(g,2),b=C[0],k=C[1],N=function(){console.log("[IntervalAndTimeout] funInterval"),d((function(e){return e+1}))},S=function(){console.log("[IntervalAndTimeout] funTimeout"),m("Return value from timeout!!!")};return(0,r.useEffect)((function(){return function(){clearInterval(f)}}),[f]),(0,r.useEffect)((function(){return function(){clearTimeout(b)}}),[b]),(0,r.useEffect)((function(){d(0),m("")}),[t]),(0,s.jsxs)("div",{className:"interval-timeout",children:[(0,s.jsx)("p",{children:"Open browser console, start timeout and interval and change page [no memory leak]"}),(0,s.jsx)("p",{children:"Interval [every 1s will add 1 to nr]"}),(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{children:"Nr of interval:"}),(0,s.jsx)("span",{children:l}),(0,s.jsx)("button",{onClick:function(){p(window.setInterval(N,1e3))},children:"Start interval"}),(0,s.jsx)("button",{onClick:function(){return clearInterval(f)},children:"Stop interval"})]}),(0,s.jsx)("p",{children:"Timeout [after 5s will render new timeout state]"}),(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{children:"Timeout state:"}),(0,s.jsx)("span",{children:x||"...click start"}),(0,s.jsx)("button",{onClick:function(){m(""),k(window.setTimeout(S,5e3))},children:"Start timeout"}),(0,s.jsx)("button",{onClick:function(){return clearTimeout(b)},children:"Stop timeout"})]}),(0,s.jsx)("button",{onClick:function(){return i((function(e){return!e}))},children:"Reset"})]})}var f=function(e){console.log("-- Memo ");var n=e.data;return(0,s.jsxs)("div",{className:"memo-container",children:[(0,s.jsx)("p",{children:"Memo"}),(0,s.jsx)("span",{children:n})]})},p=(0,r.memo)(f),g=function(e){console.log("-- No memo ");var n=e.data;return(0,s.jsxs)("div",{className:"memo-container",children:[(0,s.jsx)("p",{children:"No Memo"}),(0,s.jsx)("span",{children:n})]})};function C(){var e=(0,r.useState)(!0),n=(0,o.Z)(e,2),t=n[0],i=n[1],a=(0,r.useState)("memo data"),c=(0,o.Z)(a,2),l=c[0],d=c[1],u=(0,r.useState)("no memo data"),h=(0,o.Z)(u,2),x=h[0],m=h[1];return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("p",{children:"Open browser console, and change datas to see rendering difference"}),(0,s.jsxs)("div",{className:"grid",children:[(0,s.jsx)("button",{onClick:function(){return i(!0)},children:"Parent show"}),(0,s.jsx)("button",{onClick:function(){return i(!1)},children:"Parent hide"}),(0,s.jsx)("label",{htmlFor:"memo-data",children:"Memo data:"}),(0,s.jsx)("input",{id:"memo-data",name:"memo-data",value:l,onChange:function(e){return d(e.target.value)}}),(0,s.jsx)("label",{htmlFor:"no-memo-data",children:"No memo data:"}),(0,s.jsx)("input",{id:"no-memo-data",name:"no-memo-data",value:x,onChange:function(e){return m(e.target.value)}})]}),(0,s.jsx)("div",{className:"memo-element",children:t?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{children:(0,s.jsx)(p,{data:l})}),(0,s.jsx)("div",{children:(0,s.jsx)(g,{data:x})})]}):null})]})}var b=t(2764);function k(){return(0,s.jsxs)("div",{className:"react-advance",children:[(0,s.jsx)("h1",{children:"React Advance"}),(0,s.jsxs)("div",{className:"minor",children:[(0,s.jsx)("h2",{children:"Code spliting [ Lazy ]"}),(0,s.jsx)(c,{})]}),(0,s.jsxs)("div",{className:"minor",children:[(0,s.jsx)("h2",{children:"Context"}),(0,s.jsx)(l.Z,{})]}),(0,s.jsxs)("div",{className:"minor",children:[(0,s.jsx)("h2",{children:"Fragment"}),(0,s.jsx)(d,{})]}),(0,s.jsxs)("div",{className:"minor",children:[(0,s.jsx)("h2",{children:"Reference"}),(0,s.jsx)(b.Z,{})]}),(0,s.jsxs)("div",{className:"minor",children:[(0,s.jsx)("h2",{children:"Higher order components"}),(0,s.jsx)(j,{})]}),(0,s.jsxs)("div",{className:"minor",children:[(0,s.jsx)("h2",{children:"Memo"}),(0,s.jsx)(C,{})]}),(0,s.jsxs)("div",{className:"minor",children:[(0,s.jsx)("h2",{children:"Interval, Timer"}),(0,s.jsx)(v,{})]})]})}},2764:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(2791),s=t(885),i=t(184),a=(0,r.forwardRef)((function(e,n){var t=(0,r.useState)("no click"),a=(0,s.Z)(t,2),c=a[0],l=a[1];return(0,i.jsxs)("div",{className:"reference-focus",ref:n,children:[(0,i.jsx)("span",{children:"Input to focus"}),(0,i.jsx)("input",{placeholder:"Focus Me!"}),(0,i.jsxs)("span",{children:["Forward state = '",c,"'"]}),(0,i.jsx)("span",{className:"btn-wrapper",onClick:function(){l((function(e){return"no click"===e?"YES, U clicked ME!":"no click"}))},children:(0,i.jsx)("button",{onClick:function(){},disabled:!0,children:"Force me to click!"})})]})}));function c(){var e=(0,r.useRef)(null),n=(0,r.createRef)(),t=function(n){var t;null!==(t=e.current)&&void 0!==t&&t.style&&(e.current.style.backgroundColor=n)};return(0,i.jsxs)("div",{className:"reference",children:[(0,i.jsx)("p",{children:"[ useRef ] Click button to change span 'Change me' background color"}),(0,i.jsx)("span",{ref:e,children:"Change me!"}),(0,i.jsxs)("div",{className:"flex",children:[(0,i.jsx)("button",{onClick:function(){return t("red")},children:"Change to red"}),(0,i.jsx)("button",{onClick:function(){return t("transparent")},children:"Change to basic"})]}),(0,i.jsx)("p",{children:"[ createRef ] referance forwarding "}),(0,i.jsxs)("div",{className:"flex",children:[(0,i.jsx)("button",{onClick:function(){var e,t;null===(e=n.current)||void 0===e||null===(t=e.querySelector("input"))||void 0===t||t.focus()},children:"Focus input"}),(0,i.jsx)("button",{onClick:function(){var e,t=null===(e=n.current)||void 0===e?void 0:e.querySelector("button");t&&(t.disabled=!1,t.click(),t.disabled=!0)},children:"Click btn"})]}),(0,i.jsx)(a,{ref:n})]})}}}]);
//# sourceMappingURL=118.9f9f176b.chunk.js.map