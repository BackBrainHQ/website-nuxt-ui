import{d,bA as l,D as v,m as f,z as p,ai as m,bB as g,bC as h,at as y,ar as i,aw as _}from"./BeV2OXeb.js";const C=d({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(r){const{query:a}=l(r),n=v(()=>{var t;return typeof((t=a.value)==null?void 0:t.params)=="function"?a.value.params():a.value});if(!n.value&&f("dd-navigation").value){const{navigation:t}=p();return{navigation:t}}const{data:o}=await m(`content-navigation-${h(n.value)}`,()=>g(n.value));return{navigation:o}},render(r){const a=y(),{navigation:n}=r,o=e=>i(_,{to:e._path},()=>e.title),t=(e,u)=>i("ul",u?{"data-level":u}:null,e.map(s=>s.children?i("li",null,[o(s),t(s.children,u+1)]):i("li",null,o(s)))),c=e=>t(e,0);return a!=null&&a.default?a.default({navigation:n,...this.$attrs}):c(n)}}),q=C;export{q as default};
