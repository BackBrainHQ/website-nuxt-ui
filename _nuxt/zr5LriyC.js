import{d as z,s as F,af as y,ag as L,ah as j,a9 as e,c as s,L as u,w as o,h as i,ai as k,aj as q,i as r,N as v,f as l,t as w,e as C,K as E,g as M,F as G,q as b,ak as H,al as K,G as O,R as Q,am as I}from"./BLLTmESh.js";import{_ as J,a as W}from"./CJ7eoksm.js";import X from"./Cj6KvNus.js";import{_ as Y,a as Z}from"./0915TuGr.js";import"./Bie9fvBW.js";import"./CxYJgpPD.js";const tt={class:"text-gray-500 dark:text-gray-400"},et={class:"flex flex-wrap items-center gap-3 mt-4"},nt={key:1},lt=z({__name:"[slug]",async setup(ot){var f,g,h;let n,_;const c=F(),{data:t}=([n,_]=y(()=>k(c.path,()=>b(c.path).findOne(),"$9yljQkk6zF")),n=await n,_(),n);if(!t.value)throw L({statusCode:404,statusMessage:"Post not found",fatal:!0});const{data:d}=([n,_]=y(()=>k(`${c.path}-surround`,()=>b("/blog").where({_extension:"md"}).without(["body","excerpt"]).sort({date:-1}).findSurround(H(c.path)),{default:()=>[]})),n=await n,_(),n),p=((f=t.value.head)==null?void 0:f.title)||t.value.title,m=((g=t.value.head)==null?void 0:g.description)||t.value.description;return j({title:p,ogTitle:p,description:m,ogDescription:m}),(h=t.value.image)!=null&&h.src,(at,x)=>{const U=K,B=O,S=Q,D=J,N=X,P=Y,$=W,A=Z,R=I,T=q;return e(t)?(s(),u(T,{key:0},{default:o(()=>[r(D,{title:e(t).title,description:e(t).description},{headline:o(()=>[r(U,v(e(t).badge,{variant:"subtle"}),null,16),x[0]||(x[0]=l("span",{class:"text-gray-500 dark:text-gray-400"},"·",-1)),l("time",tt,w(new Date(e(t).date).toLocaleDateString("en",{year:"numeric",month:"short",day:"numeric"})),1)]),default:o(()=>[l("div",et,[(s(!0),C(G,null,E(e(t).authors,(a,V)=>(s(),u(S,{key:V,to:a.to,color:"white",target:"_blank",size:"sm"},{default:o(()=>[r(B,v({ref_for:!0},a.avatar,{alt:"Author avatar",size:"2xs"}),null,16),M(" "+w(a.name),1)]),_:2},1032,["to"]))),128))])]),_:1},8,["title","description"]),r(R,null,{right:o(()=>[e(t).body&&e(t).body.toc?(s(),u(A,{key:0,links:e(t).body.toc.links},null,8,["links"])):i("",!0)]),default:o(()=>[r($,{prose:""},{default:o(()=>{var a;return[e(t)&&e(t).body?(s(),u(N,{key:0,value:e(t)},null,8,["value"])):i("",!0),(a=e(d))!=null&&a.length?(s(),C("hr",nt)):i("",!0),r(P,{surround:e(d)},null,8,["surround"])]}),_:1})]),_:1})]),_:1})):i("",!0)}}});export{lt as default};
