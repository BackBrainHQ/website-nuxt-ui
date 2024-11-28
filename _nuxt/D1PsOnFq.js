import{d as L,D as U,X as O,S as M,U as w,c as s,e as i,M as p,i as y,w as f,f as _,n as d,a9 as t,h as g,g as A,t as C,F as B,K as T,L as $,N as k,R,aj as H,k as V,aF as J,aG as K,aH as W,r as P,aI as I,aJ as Q,aK as Z,as as tt,aL as et,aM as N,at,au as Y,av as nt,aw as F,E as X,G as rt,af as st,ag as it,ah as ot,ai as lt,q as ct,al as dt}from"./BeV2OXeb.js";import{_ as ut}from"./DMv-OwAv.js";import{_ as G}from"./CntDKXiz.js";const pt=L({inheritAttrs:!1,__name:"LandingHero",props:{title:{type:String,default:void 0},description:{type:String,default:void 0},links:{type:Array,default:()=>[]},orientation:{type:String,default:"vertical"},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(r){const n=r,u=U(()=>{const a=O("gap-16 sm:gap-y-24",n.orientation==="vertical"&&"flex flex-col",n.orientation==="horizontal"&&"grid lg:grid-cols-2 lg:items-center"),l=n.orientation==="vertical"?"text-center":"",m=O("mt-10 flex flex-wrap gap-x-6 gap-y-3",n.orientation==="vertical"&&"justify-center");return{wrapper:"py-24 sm:py-32 md:py-40 relative",container:a,base:l,headline:"mb-10",title:"text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-7xl",description:"mt-6 text-lg tracking-tight text-gray-600 dark:text-gray-300",links:m}}),{ui:e,attrs:h}=M("landing.hero",w(n,"ui"),u,w(n,"class"),!0);return(a,l)=>{const m=R,v=H;return s(),i("div",k({class:t(e).wrapper},t(h)),[p(a.$slots,"top"),y(v,{class:d(t(e).container)},{default:f(()=>{var o;return[_("div",{class:d(t(e).base)},[a.$slots.headline?(s(),i("div",{key:0,class:d(t(e).headline)},[p(a.$slots,"headline")],2)):g("",!0),_("h1",{class:d(t(e).title)},[p(a.$slots,"title",{},()=>[A(C(r.title),1)])],2),r.description||a.$slots.description?(s(),i("div",{key:1,class:d(t(e).description)},[p(a.$slots,"description",{},()=>[A(C(r.description),1)])],2)):g("",!0),(o=r.links)!=null&&o.length||a.$slots.links?(s(),i("div",{key:2,class:d(t(e).links)},[p(a.$slots,"links",{},()=>[(s(!0),i(B,null,T(r.links,(x,b)=>(s(),$(m,k({key:b,ref_for:!0},x,{onClick:x.click}),null,16,["onClick"]))),128))])],2)):g("",!0)],2),p(a.$slots,"default")]}),_:3},8,["class"]),p(a.$slots,"bottom")],16)}}}),gt={},ft={class:"bg-gray-900/5 dark:bg-white/5 ring-1 ring-inset ring-gray-900/10 dark:ring-white/10 rounded-xl lg:-m-4 p-4"};function mt(r,n){return s(),i("div",ft,n[0]||(n[0]=[J('<div class="aspect-w-16 aspect-h-9 rounded-lg relative overflow-hidden border border-dashed border-gray-900/10 dark:border-white/10"><svg class="absolute inset-0 h-full w-full stroke-gray-900/10 dark:stroke-white/10" fill="none"><defs><pattern id="pattern-5c1e4f0e-62d5-498b-8ff0-cf77bb448c8e" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M-3 13 15-5M-5 5l18-18M-1 21 17 3"></path></pattern></defs><rect stroke="none" fill="url(#pattern-5c1e4f0e-62d5-498b-8ff0-cf77bb448c8e)" width="100%" height="100%"></rect></svg></div>',1)]))}const yt=V(gt,[["render",mt]]),ht=K(W);function bt(r,n={}){const{x:u,y:e}=ht(n),h=P(r??(window==null?void 0:window.document.body)),a=P(0),l=P(0);return I&&Q([h,u,e],()=>{var j;const m=Z(h);if(!m)return;const{left:v,top:o}=m.getBoundingClientRect(),x=u.value-(v+I.scrollX),b=e.value-(o+I.scrollY);Math.abs(x)>1500||Math.abs(b)>1500||((j=I.screen)==null?void 0:j.width)<=800||(a.value=x,l.value=b)},{immediate:!0,throttle:50}),{x:u,y:e,elementX:a,elementY:l}}const kt=L({inheritAttrs:!1,__name:"LandingCard",props:{...tt,title:{type:String,default:void 0},description:{type:String,default:void 0},icon:{type:String,default:void 0},color:{type:String,default:"primary"},orientation:{type:String,default:"vertical"},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(r){et(c=>({dfb333d4:t(u),fefcc314:t(e)}));const n=r,u=U(()=>{var c;return n.color==="primary"?"rgb(var(--color-primary-DEFAULT))":((c=N[n.color])==null?void 0:c["500"])||N[n.color]||n.color}),e=U(()=>{var c;return n.color==="primary"?"rgb(var(--color-primary-DEFAULT))":((c=N[n.color])==null?void 0:c["400"])||N[n.color]||n.color}),h=U(()=>({wrapper:"relative group isolate rounded-xl background-gradient ring-1 ring-gray-200 dark:ring-gray-800 before:hidden before:lg:block before:absolute before:-inset-[2px] before:h-[calc(100%+4px)] before:w-[calc(100%+4px)] before:z-[-1] before:rounded-[13px] flex-1 flex flex-col shadow",to:"transition-shadow duration-200",base:"flex-1 flex flex-col overflow-hidden",container:"",body:{base:O("gap-x-8 gap-y-4 rounded-xl flex-1",n.orientation==="vertical"&&"flex flex-col",!!l.default&&n.orientation==="horizontal"&&"grid lg:grid-cols-2 lg:items-center")},background:"bg-white dark:bg-gray-900 hover:bg-opacity-90 dark:hover:bg-opacity-90 transition-[background-opacity]",ring:"",rounded:"rounded-xl",shadow:"",icon:{wrapper:"mb-2 pointer-events-none",base:"w-8 h-8 flex-shrink-0 text-gray-900 dark:text-white"},title:"text-gray-900 dark:text-white text-base font-bold truncate",description:"text-[15px] text-gray-500 dark:text-gray-400 mt-1"})),a=P(),l=at(),{elementX:m,elementY:v}=bt(a),{ui:o,attrs:x}=M("landing.card",w(n,"ui"),h,w(n,"class"),!0),b=U(()=>Y(n)),j=U(()=>(n.title||l.title&&nt(l.title())||"Card link").trim());return(c,z)=>{const D=F,E=X,S=G;return s(),i("div",k({ref_key:"el",ref:a,style:{"--x":`${t(m)}px`,"--y":`${t(v)}px`},class:[t(o).wrapper,c.to&&[t(o).to,"to"]]},t(x)),[y(S,{ui:t(o)},{default:f(()=>[_("div",{class:d(t(o).container)},[c.to?(s(),$(D,k({key:0,"aria-label":t(j)},t(b),{class:"focus:outline-none",tabindex:"-1"}),{default:f(()=>z[0]||(z[0]=[_("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1)])),_:1},16,["aria-label"])):g("",!0),r.icon||c.$slots.icon?(s(),i("div",{key:1,class:d(t(o).icon.wrapper)},[p(c.$slots,"icon",{},()=>[y(E,{name:r.icon,class:d(t(o).icon.base)},null,8,["name","class"])],!0)],2)):g("",!0),r.title||c.$slots.title?(s(),i("p",{key:2,class:d(t(o).title)},[p(c.$slots,"title",{},()=>[A(C(r.title),1)],!0)],2)):g("",!0),r.description||c.$slots.description?(s(),i("div",{key:3,class:d(t(o).description)},[p(c.$slots,"description",{},()=>[A(C(r.description),1)],!0)],2)):g("",!0),p(c.$slots,"container",{},void 0,!0)],2),c.$slots.default?p(c.$slots,"default",{key:0},void 0,!0):g("",!0)]),_:3},8,["ui"])],16)}}}),vt=V(kt,[["__scopeId","data-v-7b5e79e5"]]),xt=L({inheritAttrs:!1,__name:"PageGrid",props:{class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(r){const n={wrapper:"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8"},u=r,{ui:e,attrs:h}=M("page.grid",w(u,"ui"),n,w(u,"class"),!0);return(a,l)=>(s(),i("div",k({class:t(e).wrapper},t(h)),[p(a.$slots,"default")],16))}}),_t=L({inheritAttrs:!1,__name:"LandingTestimonial",props:{icon:{type:String,default:void 0},quote:{type:String,required:!0},author:{type:Object,default:void 0},card:{type:Boolean,default:!0},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(r){const n=r,u=U(()=>{const a={};n.card||(a.ring="",a.rounded="",a.background="",a.shadow="",a.divide="");const l=n.card?void 0:"";return{...a,body:{base:"flex flex-col",padding:l},wrapper:"relative",quote:"text-gray-600 dark:text-gray-300",icon:{wrapper:"mb-6 flex",base:"w-8 h-8 flex-shrink-0 text-gray-900 dark:text-white"},author:{wrapper:"flex items-center gap-3 mt-6 relative",name:"font-semibold text-gray-900 dark:text-white text-sm",description:"text-gray-500 dark:text-gray-400 text-sm",avatar:{base:"",size:"md"}}}}),{ui:e,attrs:h}=M("landing.testimonial",w(n,"ui"),u,w(n,"class"),!0);return(a,l)=>{const m=X,v=rt,o=G;return s(),$(o,k({class:t(e).wrapper},t(h),{ui:t(e)}),{default:f(()=>[_("div",null,[r.icon||a.$slots.icon?(s(),i("div",{key:0,class:d(t(e).icon.wrapper)},[p(a.$slots,"icon",{},()=>[y(m,{name:r.icon,class:d(t(e).icon.base)},null,8,["name","class"])])],2)):g("",!0),r.quote||a.$slots.quote?(s(),i("q",{key:1,class:d(t(e).quote)},[p(a.$slots,"quote",{},()=>[A(C(r.quote),1)])],2)):g("",!0),r.author?(s(),i("div",{key:2,class:d(t(e).author.wrapper)},[r.author.avatar?(s(),$(v,k({key:0,alt:r.author.name},{size:t(e).author.avatar.size,...r.author.avatar},{class:t(e).author.avatar.base}),null,16,["alt","class"])):g("",!0),_("div",null,[r.author.to?(s(),$(t(F),k({key:0,"aria-label":r.author.name},t(Y)(r.author),{class:"focus:outline-none",tabindex:"-1"}),{default:f(()=>l[0]||(l[0]=[_("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1)])),_:1},16,["aria-label"])):g("",!0),_("p",{class:d(t(e).author.name)},C(r.author.name),3),_("p",{class:d(t(e).author.description)},C(r.author.description),3)])],2)):g("",!0)])]),_:3},16,["class","ui"])}}}),wt=L({inheritAttrs:!1,__name:"PageColumns",props:{class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(r){const n={wrapper:"column-1 md:columns-2 lg:columns-3 gap-8 space-y-8"},u=r,{ui:e,attrs:h}=M("page.columns",w(u,"ui"),n,w(u,"class"),!0);return(a,l)=>(s(),i("div",k({class:t(e).wrapper},t(h)),[p(a.$slots,"default")],16))}}),$t={key:1},St=L({inheritAttrs:!1,__name:"LandingCTA",props:{title:{type:String,default:void 0},description:{type:String,default:void 0},card:{type:Boolean,default:!0},links:{type:Array,default:()=>[]},align:{type:String,default:"center"},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(r){const n=r,u=U(()=>{const a={};n.card?a.rounded="rounded-xl":(a.ring="",a.rounded="",a.background="",a.shadow="",a.divide="");const l=O("",n.align==="center"&&"text-center",n.align==="right"&&"lg:order-last"),m=O("flex flex-col",n.align!=="center"&&"lg:grid lg:grid-cols-2 lg:items-center","gap-16 sm:gap-y-24"),v=n.card?"py-24 sm:py-32 sm:px-16":"py-24 sm:py-32 px-6 lg:px-8",o=O("mt-10 flex items-center gap-x-6",n.align==="center"&&"justify-center");return{...a,wrapper:"relative",container:l,body:{base:m,padding:v},title:"text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl",description:"mt-6 text-lg/8 text-gray-600 dark:text-gray-300",links:o}}),{ui:e,attrs:h}=M("landing.cta",w(n,"ui"),u,w(n,"class"),!0);return(a,l)=>{const m=R,v=G;return s(),$(v,k({class:t(e).wrapper},t(h),{ui:t(e)}),{default:f(()=>{var o;return[_("div",{class:d(t(e).container)},[r.title||a.$slots.title?(s(),i("h2",{key:0,class:d(t(e).title)},[p(a.$slots,"title",{},()=>[A(C(r.title),1)])],2)):g("",!0),r.description||a.$slots.description?(s(),i("div",{key:1,class:d(t(e).description)},[p(a.$slots,"description",{},()=>[A(C(r.description),1)])],2)):g("",!0),(o=r.links)!=null&&o.length||a.$slots.links?(s(),i("div",{key:2,class:d(t(e).links)},[p(a.$slots,"links",{},()=>[(s(!0),i(B,null,T(r.links,(x,b)=>(s(),$(m,k({key:b,ref_for:!0},x,{onClick:x.click}),null,16,["onClick"]))),128))])],2)):g("",!0)],2),a.$slots.default?p(a.$slots,"default",{key:0}):r.align==="right"?(s(),i("div",$t)):g("",!0)]}),_:3},16,["class","ui"])}}}),Ct={key:0},Ut=L({__name:"index",async setup(r){let n,u;const{data:e}=([n,u]=st(()=>lt("index",()=>ct("/").findOne())),n=await n,u(),n);if(!e.value)throw it({statusCode:404,statusMessage:"Page not found",fatal:!0});return ot({titleTemplate:"",title:e.value.title,ogTitle:e.value.title,description:e.value.description,ogDescription:e.value.description}),(h,a)=>{const l=F,m=X,v=dt,o=pt,x=yt,b=ut,j=vt,c=xt,z=_t,D=wt,E=St;return t(e)?(s(),i("div",Ct,[y(o,{title:t(e).hero.title,description:t(e).hero.description,links:t(e).hero.links},{headline:f(()=>[t(e).hero.headline?(s(),$(v,{key:0,variant:"subtle",size:"lg",class:"relative rounded-full font-semibold"},{default:f(()=>[y(l,{to:t(e).hero.headline.to,target:"_blank",class:"focus:outline-none",tabindex:"-1"},{default:f(()=>a[0]||(a[0]=[_("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1)])),_:1},8,["to"]),A(" "+C(t(e).hero.headline.label)+" ",1),t(e).hero.headline.icon?(s(),$(m,{key:0,name:t(e).hero.headline.icon,class:"ml-1 w-4 h-4 pointer-events-none"},null,8,["name"])):g("",!0)]),_:1})):g("",!0)]),default:f(()=>[a[1]||(a[1]=_("div",{class:"absolute inset-0 landing-grid z-[-1] [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"},null,-1))]),_:1},8,["title","description","links"]),y(b,{class:"!pt-0"},{default:f(()=>[y(x)]),_:1}),(s(!0),i(B,null,T(t(e).sections,(S,q)=>(s(),$(b,{key:q,title:S.title,description:S.description,align:S.align,features:S.features},{default:f(()=>[y(x)]),_:2},1032,["title","description","align","features"]))),128)),y(b,{title:t(e).features.title,description:t(e).features.description},{default:f(()=>[y(c,null,{default:f(()=>[(s(!0),i(B,null,T(t(e).features.items,(S,q)=>(s(),$(j,k({key:q,ref_for:!0},S),null,16))),128))]),_:1})]),_:1},8,["title","description"]),y(b,{headline:t(e).testimonials.headline,title:t(e).testimonials.title,description:t(e).testimonials.description},{default:f(()=>[y(D,{class:"xl:columns-4"},{default:f(()=>[(s(!0),i(B,null,T(t(e).testimonials.items,(S,q)=>(s(),i("div",{key:q,class:"break-inside-avoid"},[y(z,k({ref_for:!0},S,{class:"bg-gray-100/50 dark:bg-gray-800/50"}),null,16)]))),128))]),_:1})]),_:1},8,["headline","title","description"]),y(b,null,{default:f(()=>[y(E,k(t(e).cta,{class:"bg-gray-100/50 dark:bg-gray-800/50"}),null,16)]),_:1})])):g("",!0)}}}),Ot=V(Ut,[["__scopeId","data-v-b064f615"]]);export{Ot as default};
