import{R as l,j as e,c as a}from"./vendor-948c4cbc.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function i(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(t){if(t.ep)return;t.ep=!0;const n=i(t);fetch(t.href,n)}})();class d extends l.Component{render(){return e.jsx("div",{className:"react-component",children:"這是ReactComponent組件"})}}const u=()=>{const r="milkmidi";return e.jsx("div",{className:"functional-component",children:e.jsxs("ul",{children:[e.jsx("li",{children:"這是 Functional ComponentAA"}),e.jsxs("li",{children:["name:",r]}),e.jsxs("li",{children:["今天日期： ",new Date().toDateString()]}),e.jsxs("li",{children:["1+1=",1+1]})]})})},m=()=>{const r="allan";return e.jsx("div",{className:"functional-practice",children:e.jsxs("ul",{children:[e.jsx("li",{children:"這是functional-practice"}),e.jsxs("li",{children:["我的名字:",r]}),e.jsxs("li",{children:["今天:",new Date().toDateString()]}),e.jsx("li",{children:"第一次上react課程"}),e.jsx("li",{children:"都聽不懂"})]})})},p=()=>e.jsxs("section",{"data-name":"Example02",children:[e.jsx(d,{}),e.jsx(u,{}),e.jsx(m,{})]}),f=()=>{const r=p;return e.jsx("div",{className:"app",children:e.jsx(r,{})})};const x=a.createRoot(document.getElementById("root"));x.render(e.jsx(f,{}));
