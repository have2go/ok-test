import{j as r}from"./jsx-runtime-z8MfsBtr.js";import{C as p}from"./Counter-bJ1v3XiF.js";import{r as n}from"./index-BofL8h0e.js";import"./index-C9rmetsa.js";const h=()=>{const[{x:t,y:e},o]=n.useState({x:-1,y:-1});return{x:t,y:e,handleRippleOnClick:a=>{const{left:c,top:d}=a.currentTarget.getBoundingClientRect();o({x:a.clientX-c,y:a.clientY-d}),setTimeout(()=>{o({x:-1,y:-1})},300)},isRippling:t!==-1&&e!==-1}},y=({title:t,titleId:e,...o},s)=>n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",preserveAspectRatio:"xMidYMid",width:16,height:16,className:"button__loader",ref:s,"aria-labelledby":e,...o},t?n.createElement("title",{id:e},t):null,n.createElement("g",null,n.createElement("circle",{strokeDasharray:"33 16",r:7,strokeWidth:2,stroke:"currentColor",fill:"none",cy:8,cx:8}))),_=n.forwardRef(y),w=({title:t,titleId:e,...o},s)=>n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",preserveAspectRatio:"xMidYMid",width:20,height:20,className:"button__loader",ref:s,"aria-labelledby":e,...o},t?n.createElement("title",{id:e},t):null,n.createElement("g",null,n.createElement("circle",{strokeDasharray:"30 16",r:8.5,strokeWidth:2.5,stroke:"currentColor",fill:"none",cy:10,cx:10}))),f=n.forwardRef(w),v=({title:t,titleId:e,...o},s)=>n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",preserveAspectRatio:"xMidYMid",width:24,height:24,className:"button__loader",ref:s,"aria-labelledby":e,...o},t?n.createElement("title",{id:e},t):null,n.createElement("g",null,n.createElement("circle",{strokeDasharray:"37.69911184307752 20.166370614359172",r:10,strokeWidth:3,stroke:"currentColor",fill:"none",cy:12,cx:12}))),R=n.forwardRef(v),j=({variant:t="primary",size:e,state:o="enabled",counter:s=!1,text:i="Что сделать"})=>{const{x:a,y:c,handleRippleOnClick:d,isRippling:g}=h();return r.jsxs("button",{className:`button button_${t} button_${e} button_${o}`,disabled:o==="disabled",onMouseDown:b=>d(b),children:[r.jsxs("span",{className:`button__content-group ${o==="loading"?"button__content-group_hidden":""}`,children:[i&&r.jsx("span",{className:"button__text",children:i}),s&&e===28&&r.jsx(p,{size:8,pulse:!0,variant:t}),s&&e===36&&r.jsx(p,{size:16,variant:t,quantity:7}),s&&e===56&&r.jsx(p,{size:24,variant:t,quantity:100,stroke:!0})]}),o==="loading"&&r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"button__shimmer"}),r.jsxs("div",{className:"button__loader-container",children:[e===28&&r.jsx(_,{}),e===36&&r.jsx(f,{}),e===56&&r.jsx(R,{})]})]}),g&&r.jsx("div",{className:"button__ripple-container",children:r.jsx("span",{className:"button__ripple",style:{left:a,top:c}})})]})},B={title:"Main/Button",component:j,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},l={args:{variant:"primary",size:56,state:"enabled",counter:!0,text:"Что сделать"},argTypes:{variant:{options:["primary","secondary"],control:"radio"},size:{options:[28,36,56],control:"radio"},state:{options:["enabled","loading","disabled"],control:"radio"},text:{control:"text"}}};var u,m,x;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: 56,
    state: "enabled",
    counter: true,
    text: "Что сделать"
  },
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: "radio"
    },
    size: {
      options: [28, 36, 56],
      control: "radio"
    },
    state: {
      options: ["enabled", "loading", "disabled"],
      control: "radio"
    },
    text: {
      control: "text"
    }
  }
}`,...(x=(m=l.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};const M=["TestBtn"];export{l as TestBtn,M as __namedExportsOrder,B as default};
