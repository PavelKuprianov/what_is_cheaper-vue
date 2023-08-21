(function(){"use strict";var n={3718:function(n,t,i){var e=i(9242),o=i(3396),u=i(7139);const l=(0,o._)("h1",null,"Расчет выгоды",-1),r={class:"product-block"},a={class:"product-block"};function c(n,t,i,e,c,s){const d=(0,o.up)("my-input"),p=(0,o.up)("my-dialog");return(0,o.wg)(),(0,o.iD)("div",null,[l,(0,o._)("div",r,[(0,o.Wm)(d,{info:c.infoPrice1,modelValue:c.price1,"onUpdate:modelValue":t[0]||(t[0]=n=>c.price1=n),modelModifiers:{number:!0}},null,8,["info","modelValue"]),(0,o.Wm)(d,{info:c.infoQuantity1,modelValue:c.quantity1,"onUpdate:modelValue":t[1]||(t[1]=n=>c.quantity1=n),modelModifiers:{number:!0}},null,8,["info","modelValue"])]),(0,o._)("div",a,[(0,o.Wm)(d,{info:c.infoPrice2,modelValue:c.price2,"onUpdate:modelValue":t[2]||(t[2]=n=>c.price2=n),modelModifiers:{number:!0}},null,8,["info","modelValue"]),(0,o.Wm)(d,{info:c.infoQuantity2,modelValue:c.quantity2,"onUpdate:modelValue":t[3]||(t[3]=n=>c.quantity2=n),modelModifiers:{number:!0}},null,8,["info","modelValue"])]),(0,o._)("button",{class:"btn",onClick:t[4]||(t[4]=(...n)=>s.result&&s.result(...n))}," Проверить "),(0,o.Wm)(p,{show:c.dialogVisible,"onUpdate:show":t[5]||(t[5]=n=>c.dialogVisible=n)},{default:(0,o.w5)((()=>[(0,o._)("p",null,[(0,o._)("strong",null,(0,u.zw)(s.discount.split(". ")[0]),1)]),(0,o._)("p",null,(0,u.zw)(s.discount.split(". ")[1]),1),(0,o._)("p",null,(0,u.zw)(s.discount.split(". ")[2]),1)])),_:1},8,["show"])])}const s={class:"input-block"},d={class:"label",for:"info"},p=["value"];function f(n,t,i,e,l,r){return(0,o.wg)(),(0,o.iD)("div",s,[(0,o._)("label",d,(0,u.zw)(i.info)+": ",1),(0,o._)("input",{id:"info",value:i.modelValue,onInput:t[0]||(t[0]=(...n)=>r.updateInput&&r.updateInput(...n)),class:"input",type:"number"},null,40,p)])}var h={name:"MyInput",props:{modelValue:[Number],info:[String]},methods:{updateInput(n){this.$emit("update:modelValue",n.target.value)}}},m=i(89);const v=(0,m.Z)(h,[["render",f],["__scopeId","data-v-31c0948a"]]);var b=v;function y(n,t,i,u,l,r){return(0,o.wg)(),(0,o.j4)(e.uT,{name:"bounce"},{default:(0,o.w5)((()=>[i.show?((0,o.wg)(),(0,o.iD)("div",{key:0,name:"bounce",class:"dialog",onClick:t[1]||(t[1]=(0,e.iM)(((...n)=>r.hideDialog&&r.hideDialog(...n)),["stop"]))},[(0,o._)("div",{onClick:t[0]||(t[0]=(0,e.iM)((()=>{}),["stop"])),class:"dialog__content"},[(0,o.WI)(n.$slots,"default",{},void 0,!0)])])):(0,o.kq)("",!0)])),_:3})}var g={name:"MyDialog",props:{show:{type:Boolean,default:!1}},methods:{hideDialog(){this.$emit("update:show",!1)}}};const w=(0,m.Z)(g,[["render",y],["__scopeId","data-v-0d37bcae"]]);var _=w,V={name:"App",components:{MyInput:b,MyDialog:_},data(){return{price1:"",infoPrice1:"Стоимость первого товара",quantity1:"",infoQuantity1:"Количество (объём, масса) первого товара",price2:"",infoPrice2:"Стоимость второго товара",quantity2:"",infoQuantity2:"Количество (объём, масса) второго товара",dialogVisible:!1}},methods:{result(){if(!this.price1||!this.quantity1||!this.price2||!this.quantity2)return this.clearing(),void alert("Некорректно заполнены поля");this.dialogVisible=!0},clearing(){this.price1=this.quantity1=this.price2=this.quantity2=""}},computed:{discount(){const n=this.price1/this.quantity1,t=this.price2/this.quantity2;return this.clearing(),n<t?`Выгоднее покупать товар №1. Одна единица данного товара стоит ${Math.ceil(100*n)/100} ₽. Одна\n        же единица товара №2 стоит ${Math.ceil(100*t)/100} ₽.`:n>t?`Выгоднее покупать товар №2. Одна единица данного товара стоит ${Math.ceil(100*t)/100} ₽. Одна\n        же единица товара №1 стоит ${Math.ceil(100*n)/100} ₽.`:`Без разницы, какой товар брать. Одна единица каждого из товаров стоит ${Math.ceil(100*n)/100} ₽. То есть стоимость обоих товаров одинакова.`}}};const M=(0,m.Z)(V,[["render",c]]);var k=M;(0,e.ri)(k).mount("#app")}},t={};function i(e){var o=t[e];if(void 0!==o)return o.exports;var u=t[e]={exports:{}};return n[e].call(u.exports,u,u.exports,i),u.exports}i.m=n,function(){var n=[];i.O=function(t,e,o,u){if(!e){var l=1/0;for(s=0;s<n.length;s++){e=n[s][0],o=n[s][1],u=n[s][2];for(var r=!0,a=0;a<e.length;a++)(!1&u||l>=u)&&Object.keys(i.O).every((function(n){return i.O[n](e[a])}))?e.splice(a--,1):(r=!1,u<l&&(l=u));if(r){n.splice(s--,1);var c=o();void 0!==c&&(t=c)}}return t}u=u||0;for(var s=n.length;s>0&&n[s-1][2]>u;s--)n[s]=n[s-1];n[s]=[e,o,u]}}(),function(){i.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return i.d(t,{a:t}),t}}(),function(){i.d=function(n,t){for(var e in t)i.o(t,e)&&!i.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:t[e]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){i.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){var n={143:0};i.O.j=function(t){return 0===n[t]};var t=function(t,e){var o,u,l=e[0],r=e[1],a=e[2],c=0;if(l.some((function(t){return 0!==n[t]}))){for(o in r)i.o(r,o)&&(i.m[o]=r[o]);if(a)var s=a(i)}for(t&&t(e);c<l.length;c++)u=l[c],i.o(n,u)&&n[u]&&n[u][0](),n[u]=0;return i.O(s)},e=self["webpackChunk"]=self["webpackChunk"]||[];e.forEach(t.bind(null,0)),e.push=t.bind(null,e.push.bind(e))}();var e=i.O(void 0,[998],(function(){return i(3718)}));e=i.O(e)})();
//# sourceMappingURL=app.606b7e8b.js.map