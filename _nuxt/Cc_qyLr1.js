import{d as S,x as C,D as l,S as U,U as m,aM as s,c as n,L as i,w as f,a9 as e,f as y,h as c,n as u,t as A,e as D,N as I,aw as L,E as B}from"./BeV2OXeb.js";import{_ as E}from"./CntDKXiz.js";import{r as N}from"./Cfg4gmMd.js";import"./Dnd51l0P.js";const T=S({inheritAttrs:!1,__name:"Card",props:{icon:{type:String,default:void 0},color:{type:String,default:"primary"},to:{type:String,default:void 0},target:{type:String,default:void 0},title:{type:String,default:void 0},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(o){const x=C(),h=l(()=>({wrapper:"relative group overflow-hidden flex items-center rounded-lg",to:"hover:ring-1 hover:ring-[--color-light] dark:hover:ring-[--color-dark] hover:bg-gray-100/50 dark:hover:bg-gray-800/50",icon:{base:"w-6 h-6 mb-4 inline-flex items-center text-[--color-light] dark:text-[--color-dark] pointer-events-none"},body:{base:"flex-1"},externalIcon:{name:x.ui.icons.external,base:"w-4 h-4 absolute right-2 top-2 text-gray-400 dark:text-gray-500 group-hover:text-[--color-light] dark:group-hover:text-[--color-dark]"},title:"text-gray-900 dark:text-white font-semibold text-base my-0",description:"text-[15px] text-gray-500 dark:text-gray-400 mt-1 mb-0"})),t=o,{ui:r,attrs:k}=U("content.card",m(t,"ui"),h,m(t,"class"),!0),b=l(()=>{var a;return t.color==="primary"?"rgb(var(--color-primary-DEFAULT))":((a=s[t.color])==null?void 0:a["500"])||s[t.color]||t.color}),v=l(()=>{var a;return t.color==="primary"?"rgb(var(--color-primary-DEFAULT))":((a=s[t.color])==null?void 0:a["400"])||s[t.color]||t.color}),d=l(()=>t.target||(t.to&&t.to.startsWith("http")?"_blank":void 0));return(a,g)=>{const _=L,p=B,w=E;return n(),i(w,I({class:[e(r).wrapper,o.to&&e(r).to]},e(k),{ui:e(r),style:{"--color-light":e(b),"--color-dark":e(v)}}),{default:f(()=>[o.to?(n(),i(_,{key:0,to:o.to,target:e(d),class:"focus:outline-none",tabindex:"-1"},{default:f(()=>g[0]||(g[0]=[y("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1)])),_:1},8,["to","target"])):c("",!0),o.icon?(n(),i(p,{key:1,name:o.icon,class:u(e(r).icon.base)},null,8,["name","class"])):c("",!0),o.to&&e(d)==="_blank"?(n(),i(p,{key:2,name:e(r).externalIcon.name,class:u(e(r).externalIcon.base)},null,8,["name","class"])):c("",!0),y("p",{class:u(e(r).title)},A(o.title),3),a.$slots.default?(n(),D("p",{key:3,class:u(e(r).description)},[N(a.$slots,"default",{unwrap:"p"})],2)):c("",!0)]),_:3},16,["class","ui","style"])}}});export{T as default};
