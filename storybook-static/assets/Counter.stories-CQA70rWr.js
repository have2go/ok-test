import{C as p}from"./Counter-bJ1v3XiF.js";import"./jsx-runtime-z8MfsBtr.js";import"./index-C9rmetsa.js";const d={title:"Main/Counter",component:p,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{description:"Цветовая схема компонента",defaultValue:{summary:"primary"},options:["primary","secondary"],control:"radio"},size:{description:"Размер",options:[8,12,16,20,24],control:"radio"},stroke:{description:`Отвечает за наличие обводки у основного фрейма.

Толщина линии обводки предопределена параметром size`,defaultValue:{summary:!1},control:"boolean"},quantity:{description:`Значение счётчика.

Максимальное количество символов: 3

Если числовое значение (int) превышает 99, то компонент отображает 99+`,defaultValue:{summary:1},control:"number"},pulse:{description:"Отвечает за включение анимации pulse",defaultValue:{summary:!1},control:"boolean"}}},r={args:{variant:"primary",size:24,stroke:!1,quantity:1},argTypes:{variant:{options:["primary","secondary"],control:"radio"},size:{options:[16,20,24],control:"radio"},pulse:{table:{disable:!0}}}},n={args:{variant:"primary",size:8,stroke:!1,pulse:!1},argTypes:{variant:{options:["primary","secondary"],control:"radio"},size:{options:[8,12],control:"radio"},quantity:{table:{disable:!0}}}};var a,o,t;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: 24,
    stroke: false,
    quantity: 1
  },
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: "radio"
    },
    size: {
      options: [16, 20, 24],
      control: "radio"
    },
    pulse: {
      table: {
        disable: true
      }
    }
  }
}`,...(t=(o=r.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};var e,s,i;n.parameters={...n.parameters,docs:{...(e=n.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: 8,
    stroke: false,
    pulse: false
  },
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: "radio"
    },
    size: {
      options: [8, 12],
      control: "radio"
    },
    quantity: {
      table: {
        disable: true
      }
    }
  }
}`,...(i=(s=n.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const m=["WithContent","WithoutContent"];export{r as WithContent,n as WithoutContent,m as __namedExportsOrder,d as default};
