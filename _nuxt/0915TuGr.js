import{d as w,S as C,U as y,c as l,L as v,w as B,e as m,n as u,a9 as e,i as j,h as k,f as h,t as _,N as S,E as $,aw as H,r as x,B as N,aC as E,aD as q,a as D,u as M,F as R,K as V,aE as F,x as z,D as K,M as I}from"./BLLTmESh.js";const P=w({inheritAttrs:!1,__name:"ContentSurroundLink",props:{link:{type:Object,required:!0},icon:{type:String,default:void 0},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(t){const s={wrapper:"block px-6 py-8 border not-prose rounded-lg border-gray-200 dark:border-gray-800 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 group",icon:{wrapper:"inline-flex items-center rounded-full p-1.5 bg-gray-100 dark:bg-gray-800 group-hover:bg-primary/10 ring-1 ring-gray-300 dark:ring-gray-700 mb-4 group-hover:ring-primary/50",base:"w-5 h-5 text-gray-900 dark:text-white group-hover:text-primary"},title:"font-medium text-gray-900 dark:text-white text-[15px] mb-1",description:"text-sm font-normal text-gray-500 dark:text-gray-400 line-clamp-2"},i=t,{ui:n,attrs:r}=C("content.surround.link",y(i,"ui"),s,y(i,"class"),!0);return(a,o)=>{const d=$,p=H;return l(),v(p,S({to:t.link._path,class:e(n).wrapper},e(r)),{default:B(()=>[t.icon||t.link.icon?(l(),m("div",{key:0,class:u(e(n).icon.wrapper)},[j(d,{name:t.icon||t.link.icon,class:u(e(n).icon.base)},null,8,["name","class"])],2)):k("",!0),h("p",{class:u(e(n).title)},_(t.link.title),3),h("p",{class:u(e(n).description)},_(t.link.description),3)]),_:1},16,["to","class"])}}}),G=Object.assign(P,{__name:"UContentSurroundLink"}),J={key:1,class:"hidden sm:block"},Q=w({inheritAttrs:!1,__name:"ContentSurround",props:{surround:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(t){const s={wrapper:"grid gap-8 sm:grid-cols-2",icon:{prev:"i-heroicons-arrow-left-20-solid",next:"i-heroicons-arrow-right-20-solid"},link:{}},i=t,{ui:n,attrs:r}=C("content.surround",y(i,"ui"),s,y(i,"class"),!0),[a,o]=i.surround||[];return(d,p)=>{const c=G;return l(),m("div",S({class:e(n).wrapper},e(r)),[e(a)?(l(),v(c,{key:0,link:e(a),ui:e(n).link,icon:e(n).icon.prev},null,8,["link","ui","icon"])):(l(),m("span",J," ")),e(o)?(l(),v(c,{key:2,link:e(o),ui:e(n).link,icon:e(n).icon.next,class:"text-right"},null,8,["link","ui","icon"])):k("",!0)],16)}}}),ne=Object.assign(Q,{__name:"UContentSurround"}),W=()=>{const t=x(),s=x([]),i=x([]),n=a=>{a.forEach(o=>{const d=o.target.id;o.isIntersecting?s.value=[...s.value,d]:s.value=s.value.filter(p=>p!==d)})},r=a=>{a.forEach(o=>{t.value&&t.value.observe(o)})};return N(s,(a,o)=>{a.length===0?i.value=o:i.value=a}),E(()=>t.value=new IntersectionObserver(n)),q(()=>{var a;return(a=t.value)==null?void 0:a.disconnect()}),{visibleHeadings:s,activeHeadings:i,updateHeadings:r}},X=["href","onClick"],Y=w({inheritAttrs:!1,__name:"ContentTocLinks",props:{links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},emits:["move"],setup(t,{emit:s}){const i={wrapper:"space-y-1",base:"block text-sm/6 truncate",active:"text-primary",inactive:"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200",depth:"ml-3"},n=t,r=s,a=D(),o=M(),{activeHeadings:d,updateHeadings:p}=W(),{ui:c,attrs:A}=C("content.toc.links",y(n,"ui"),i,y(n,"class"),!0);o.hooks.hookOnce("page:finish",()=>{p([...document.querySelectorAll("h2"),...document.querySelectorAll("h3")])});const f=b=>{const O=encodeURIComponent(b);a.push(`#${O}`),r("move",b)};return(b,O)=>{var U;const T=L;return(U=t.links)!=null&&U.length?(l(),m("ul",S({key:0,class:e(c).wrapper},e(A)),[(l(!0),m(R,null,V(t.links,g=>(l(),m("li",{key:g.text,class:u([e(c).wrapper,g.depth===3&&e(c).depth])},[h("a",{href:`#${g.id}`,class:u([e(c).base,e(d).includes(g.id)?e(c).active:e(c).inactive]),onClick:F(ee=>f(g.id),["prevent"])},_(g.text),11,X),g.children?(l(),v(T,{key:0,links:g.children,ui:e(c)},null,8,["links","ui"])):k("",!0)],2))),128))],16)):k("",!0)}}}),L=Object.assign(Y,{__name:"UContentTocLinks"}),Z=w({inheritAttrs:!1,__name:"ContentToc",props:{title:{type:String,default:"Table of Contents"},links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(t){const s=z(),i=K(()=>({wrapper:"sticky top-[--header-height] bg-background/75 backdrop-blur -mx-4 sm:-mx-6 px-4 sm:px-6 lg:px-4 lg:-mx-4 overflow-y-auto max-h-[calc(100vh-var(--header-height))]",container:{base:"py-3 lg:py-8 border-b border-dashed border-gray-200 dark:border-gray-800 lg:border-0 space-y-3",empty:"lg:py-8 space-y-3"},button:{base:"flex items-center gap-1.5 lg:cursor-text lg:select-text w-full group",label:"font-semibold text-sm/6 truncate",trailingIcon:{name:s.ui.icons.chevron,base:"w-5 h-5 ms-auto transform transition-transform duration-200 flex-shrink-0 mr-1.5",active:"text-gray-700 dark:text-gray-200",inactive:"text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-200 -rotate-90"}},links:{}})),n=t,{ui:r,attrs:a}=C("content.toc",y(n,"ui"),i,y(n,"class"),!0),o=x(!1);return(d,p)=>{var f,b;const c=$,A=L;return l(),m("nav",S({class:e(r).wrapper},e(a)),[h("div",{class:u([(f=t.links)!=null&&f.length?e(r).container.base:e(r).container.empty])},[I(d.$slots,"top"),(b=t.links)!=null&&b.length?(l(),m("button",{key:0,class:u(e(r).button.base),tabindex:"-1",onClick:p[0]||(p[0]=O=>o.value=!e(o))},[h("span",{class:u(e(r).button.label)},_(t.title),3),j(c,{name:e(r).button.trailingIcon.name,class:u(["lg:!hidden",[e(r).button.trailingIcon.base,e(o)?e(r).button.trailingIcon.active:e(r).button.trailingIcon.inactive]])},null,8,["name","class"])],2)):k("",!0),j(A,{links:t.links,ui:e(r).links,class:u([e(o)?"lg:block":"hidden lg:block"])},null,8,["links","ui","class"]),I(d.$slots,"bottom")],2)],16)}}}),re=Object.assign(Z,{__name:"UContentToc"});export{ne as _,re as a};