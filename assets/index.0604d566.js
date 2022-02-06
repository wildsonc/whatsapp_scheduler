var Ge=Object.defineProperty,Ke=Object.defineProperties;var Xe=Object.getOwnPropertyDescriptors;var ze=Object.getOwnPropertySymbols;var Je=Object.prototype.hasOwnProperty,Ye=Object.prototype.propertyIsEnumerable;var He=(i,a,o)=>a in i?Ge(i,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):i[a]=o,p=(i,a)=>{for(var o in a||(a={}))Je.call(a,o)&&He(i,o,a[o]);if(ze)for(var o of ze(a))Ye.call(a,o)&&He(i,o,a[o]);return i},w=(i,a)=>Ke(i,Xe(a));import{W as Ze,s as r,L as xe,C as et,H as tt,a as nt,A as rt,V as it,F as at,S as ot,M as dt,j as Ee,u as ct,b as lt,R as Ie,c as st,d as ht,U as je,e as pt,f as ut,g as mt,h as j,r as u,B as xt,i as bt,k as gt,l as ft,m as yt,n as vt,o as wt,p as ne,q as kt,t as St,v as Ct}from"./vendor.aa8d85f4.js";const $t=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))x(d);new MutationObserver(d=>{for(const s of d)if(s.type==="childList")for(const k of s.addedNodes)k.tagName==="LINK"&&k.rel==="modulepreload"&&x(k)}).observe(document,{childList:!0,subtree:!0});function o(d){const s={};return d.integrity&&(s.integrity=d.integrity),d.referrerpolicy&&(s.referrerPolicy=d.referrerpolicy),d.crossorigin==="use-credentials"?s.credentials="include":d.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function x(d){if(d.ep)return;d.ep=!0;const s=o(d);fetch(d.href,s)}};$t();var Dt=Ze`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
    html, body, #root {
        height: 100%;
        background: var(--primary);
    }
    *, button, input {
        border: 0;
        outline: 0;
        font-family: sans-serif;
    }
    :root{
        --primary: #262626;
        --secondary: #303030;
        --tertiary: #3b3b3b;
        --bg: #212121;
        --text: #6b6b6b;
        --white: #fcfcfc;
        --company: #ff6c37;
    }
    /* width */
    ::-webkit-scrollbar {
        width: 10px;
        height: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: var(--bg);
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: var(--tertiary);
        border-radius: 5px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: var(--text);
    }
`;const Et=r.div`
    display: flex;
    width: 100%;
`,qt=r.main`
    width: 100%;
    padding: 10px;
    background: var(--primary);
    color: var(--white);
    height: 100vh;
`,At=r.div`
  display: flex;
  flex-direction: column;
  width: 100px;
  height: 100vh;
  position: relative;
  border-right: solid 1px var(--secondary);
  background: var(--bg);
  @media (max-width: 900px) {
    display: none;
  }
`,Fe=r.div`
  display: flex;
  padding: 10px 0;
  color: var(--text);
  &.active {
    background: var(--tertiary);
    color: var(--white);
    border-left: solid 2px var(--company);
  }
  :hover {
    background: var(--secondary);
  }
`,Lt=r(xe)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-decoration: none;
  font-size: 12px;
  color: inherit;
`,Tt=r.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-decoration: none;
  font-size: 12px;
  color: inherit;
`,Ve=r.span`
  display: block;
  flex: 1;
`,ie=et`
  width: 24px;
  height: 24px;
  margin: 0 5px;
`,_t=r(tt)`
  ${ie}
`,Rt=r(nt)`
  ${ie}
`,Bt=r(rt)`
  ${ie}
`;r(it)`
  ${ie}
`;const Nt=r(at)`
  ${ie}
`,zt=r(ot)`
  ${ie}
`,Ht=r(dt)`
  ${ie}
`,e=Ee.exports.jsx,t=Ee.exports.jsxs,$=Ee.exports.Fragment,It=({})=>{const{pathname:i}=ct();return t(At,{children:[jt.map(({icon:a,label:o,to:x})=>e(Fe,{className:i===x?"active":"",children:t(Lt,{to:x,children:[a,e(Ve,{children:o})]})},o)),e(Fe,{children:t(Tt,{href:"https://flower.explorernet.com.br/",target:"_blank",children:[e(zt,{}),e(Ve,{children:"Flower"})]})})]})},jt=[{label:"Tasks",icon:e(Rt,{}),to:"/tasks"},{label:"Queries",icon:e(Bt,{}),to:"/queries"},{label:"Databases",icon:e(_t,{}),to:"/databases"},{label:"Company",icon:e(Nt,{}),to:"/company"},{label:"Blacklist",icon:e(Ht,{}),to:"/blacklist"}],Ft=({children:i})=>t(Et,{children:[e(It,{}),e(qt,{children:i})]}),Vt=()=>e("h1",{children:"Home Page"}),be=r.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`,Ot=r.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    > span {
        font-size: 24px;
        font-weight: bold;
    }
`,Oe=r.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background: var(--secondary);
`,ge=r.button`
    background: ${i=>i.bgcolor?i.bgcolor:"var(--company)"};
    color: ${i=>i.color?i.color:"white"};
    padding: 10px 20px;
    border-radius: 5px;
    margin-left: 10px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    :hover {
        opacity: 0.7;
    }
`,G=r.form`
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
`,qe=r.div`
  display: flex;
  justify-content: space-between;
`,m=r.div`
  width: ${i=>i.width?i.width:"100%"};
  margin: 0 10px;
`,D=r.div`
  font-weight: bold;
  padding: 5px;
`,S=r.input`
  padding: 10px;
  border: none;
  border-radius: 3px;
  width: 100%;
  border: 2px solid var(--secondary);
  margin-bottom: 10px;
  background: var(--tertiary);
  color: var(--white);
  :focus {
    border: 2px solid var(--text);
  }
  :hover {
    border: 2px solid var(--text);
  }
  &[type="checkbox"] {
    margin-top: 15px;
  }
`,Mt=r.p`
  background: var(--secondary);
  color: red;
  font-size: 12px;
`,fe=r.table`
  width: 90%;
  margin: 10px;
  td {
    text-align: center;
    padding: 5px 0;
    border-bottom: 1px solid var(--secondary);
    background: var(--primary);
    > button {
      background: var(--primary);
    }
  }
  th {
    padding-bottom: 5px;
    color: var(--text);
  }
`,oe=r.tr``,q=r.th`
  padding: 0 5px;
  color: var(--text);
`,E=r.td`
  padding: 5px 0;
  border-bottom: 1px solid var(--secondary);
  background: var(--primary);
  > button {
    background: var(--primary);
  }
  &.active {
    ::before {
      content: "";
      display: inline-block;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      margin-right: 5px;
      background: ${i=>i.active?"green":"red"};
    }
  }
`,ye=r(lt)`
  width: 22px;
  height: 22px;
  cursor: pointer;
  fill: var(--tertiary);
  :hover {
    fill: var(--company);
  }
`,ve=r(Ie)`
  width: 22px;
  height: 22px;
  margin-left: 8px;
  fill: var(--tertiary);
  cursor: pointer;
  :hover {
    fill: var(--company);
  }
`,Pt=r(st)`
  width: 22px;
  height: 22px;
  margin-left: 8px;
  fill: var(--tertiary);
  cursor: pointer;
  :hover {
    fill: var(--company);
  }
`,Qt=r(ht)`
  width: 22px;
  height: 22px;
  margin-left: 8px;
  fill: var(--tertiary);
  cursor: pointer;
  :hover {
    fill: var(--company);
  }
`,Wt=je`
    from {
        opacity: 0
    };
    to {
        opacity: 1
    }
`,Ut=r.div`
  display: none;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  animation: ${Wt} 0.1s linear backwards;
  &.active {
    display: flex;
  }
`,Gt=r.div`
  width: 400px;
  padding: 3px;
  background: var(--secondary);
  box-shadow: 0 0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
`,Kt=r.div`
  display: flex;
  padding: 10px;
  border-bottom: 1px solid var(--tertiary);
  justify-content: space-between;
  > span {
    font-size: 20px;
    font-weight: 600;
  }
`,Xt=r(pt)`
  height: 18px;
  width: 18px;
  fill: var(--text);
  :hover {
    fill: indianred;
  }
`,Jt=r.div`
  background: var(--secondary);
  padding: 10px;
`,K=({isActive:i,header:a,hide:o,content:x})=>e(Ut,{className:i?"active":"",children:t(Gt,{children:[t(Kt,{children:[e("span",{children:a}),e(Xt,{onClick:o})]}),e(Jt,{children:x})]})}),f=ut.create({xsrfCookieName:"csrftoken",xsrfHeaderName:"X-CSRFToken"});function X(i){const{data:a,error:o,mutate:x}=mt(i,async d=>(await f.get(d)).data);return{data:a,error:o,mutate:x}}const Yt=()=>{const{data:i,error:a,mutate:o}=X("api/database"),{register:x,handleSubmit:d,setValue:s}=j(),{register:k,handleSubmit:A,setValue:y}=j(),{handleSubmit:F,setValue:Z}=j();let[P,V]=u.exports.useState(!1),[b,z]=u.exports.useState(!1),[L,v]=u.exports.useState(!1),[ee,R]=u.exports.useState(null),[H,O]=u.exports.useState({name:"",id:0});const B=()=>V(!P),te=n=>{f.post("api/database-test",n).then(c=>{c.data.status=="Error"&&R(c.data.message),c.data.status=="OK"&&f.post("api/database",n).then(Y=>{Y.data.status=="Error"?R(Y.data.message):(o(i),B())})})},Q=()=>v(!L),T=n=>{f.post("api/database-test",n).then(c=>{c.data.status=="Error"&&R(c.data.message),c.data.status=="OK"&&f.put(`api/database/${n.id}`,n).then(Y=>{o(i),Q()})})},I=n=>{for(let[c,Y]of Object.entries(n))y(c,Y);Q()},W=()=>z(!b),_=n=>{f.delete(`api/database/${n.id}`).then(c=>{o(i),W()})},M=(n,c)=>{O({name:n,id:c}),Z("id",c),W()},U=e(be,{children:e(G,{onSubmit:F(_),children:e(m,{children:t(Oe,{children:[e(ge,{type:"button",onClick:W,children:"CANCEL"}),e(ge,{type:"submit",style:{marginRight:15},bgcolor:"#fdaeae",color:"red",children:"DELETE"})]})})})}),J=n=>t($,{children:[t(qe,{children:[t(m,{children:[e(D,{children:"Host"}),e(S,p({placeholder:"localhost"},n("host",{required:!0})))]}),t(m,{width:"100px",children:[e(D,{children:"Port"}),e(S,w(p({},n("port",{required:!0})),{placeholder:"5432"}))]})]}),t(m,{width:"300px",children:[e(D,{children:"Database"}),e(S,w(p({},n("database",{required:!0})),{placeholder:"postgres"}))]}),t(m,{width:"300px",children:[e(D,{children:"User"}),e(S,w(p({},n("user",{required:!0})),{placeholder:"postgres"}))]}),t(m,{width:"300px",children:[e(D,{children:"Password"}),e(S,w(p({},n("password",{required:!0})),{type:"password"}))]}),t(m,{width:"300px",children:[e(D,{children:"Display name"}),e(S,w(p({},n("name",{required:!0})),{placeholder:"My Database"}))]}),t(Oe,{children:[e(Mt,{children:ee}),e(ge,{type:"submit",children:"CONNECT"})]})]}),h=e(be,{children:e(G,{onSubmit:A(T),children:J(k)})}),N=e(be,{children:e(G,{onSubmit:d(te),children:J(x)})});return i?t(be,{children:[t(Ot,{children:[e("span",{children:"Databases"}),e(ge,{onClick:B,children:"+ Database"})]}),e("div",{style:{overflow:"auto"},children:t(fe,{children:[e("thead",{children:t(oe,{children:[e(q,{children:"Name"}),e(q,{children:"Host"}),e(q,{children:"Database"}),e(q,{children:"Actions"})]})}),e("tbody",{children:i.map(n=>t(oe,{children:[e(E,{children:n.name}),e(E,{children:n.host}),e(E,{children:n.database}),t(E,{children:[e("button",{onClick:()=>I(n),children:e(ye,{})}),e("button",{onClick:()=>M(n.name,n.id),children:e(ve,{})})]})]},n.id))})]})}),e(K,{isActive:P,header:"New connection",hide:B,content:N}),e(K,{isActive:L,header:"Edit connection",hide:Q,content:h}),e(K,{isActive:b,header:`Remove database "${H.name}"?`,hide:W,content:U})]}):e($,{})},Me=r.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,Zt=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  > span {
    font-size: 24px;
    font-weight: bold;
  }
`,Ae=r.button`
  background: ${i=>i.bgcolor?i.bgcolor:"var(--company)"};
  color: ${i=>i.color?i.color:"white"};
  padding: 10px 20px;
  border-radius: 5px;
  margin-left: 10px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`,en=r.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background: var(--secondary);
`,tn=()=>{const{data:i,mutate:a}=X("api/query");let[o,x]=u.exports.useState({name:"",id:0});const{handleSubmit:d,setValue:s}=j();let[k,A]=u.exports.useState(!1);if(!i)return e($,{children:"Loading...."});const y=()=>A(!k),F=b=>{f.delete(`api/query/${b.id}`).then(z=>{a(i),y()})},Z=(b,z)=>{x({name:b,id:z}),s("id",z),y()},P=b=>new Date(b).toLocaleString(),V=e(Me,{children:e(G,{onSubmit:d(F),children:e(m,{children:t(en,{children:[e(Ae,{type:"button",onClick:y,children:"CANCEL"}),e(Ae,{type:"submit",style:{marginRight:15},bgcolor:"#fdaeae",color:"red",children:"DELETE"})]})})})});return t(Me,{children:[t(Zt,{children:[e("span",{children:"Queries"}),e(xe,{to:"query/new",children:e(Ae,{children:"+ Query"})})]}),t(fe,{children:[e("thead",{children:t("tr",{children:[e("th",{children:"Name"}),e("th",{children:"Database"}),e("th",{children:"HSM"}),e("th",{children:"Once time"}),e("th",{children:"Updated at"}),e("th",{children:"Actions"})]})}),e("tbody",{children:i.map(b=>t("tr",{children:[e("td",{children:b.name}),e("td",{children:b.database.name}),e("td",{children:b.hsm}),e(E,{active:b.once_time,className:"active"}),e("td",{children:P(b.update_at)}),t(E,{children:[e(xe,{to:`query/${b.id}`,children:e(ye,{})}),e("button",{onClick:()=>Z(b.name,b.id),children:e(ve,{})})]})]},b.id))})]}),e(K,{isActive:k,header:`Remove query "${o.name}"?`,hide:y,content:V})]})},we=r.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,nn=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  > span {
    font-size: 24px;
    font-weight: bold;
  }
`,Pe=r.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background: var(--secondary);
`,ke=r.button`
  background: ${i=>i.bgcolor?i.bgcolor:"var(--company)"};
  color: ${i=>i.color?i.color:"white"};
  padding: 10px 20px;
  border-radius: 5px;
  margin-left: 10px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`,Qe=r.select`
  min-width: 100px;
  width: 100%;
  color: var(--white);
  background: var(--tertiary);
  border-radius: 3px;
  padding: 10px;
  margin-bottom: 10px;
`,rn=()=>{let[i,a]=u.exports.useState(!1),[o,x]=u.exports.useState(!1),[d,s]=u.exports.useState(!1),[k,A]=u.exports.useState({name:"",id:0});const{register:y,handleSubmit:F}=j(),{register:Z,handleSubmit:P,setValue:V}=j(),{handleSubmit:b,setValue:z}=j(),{data:L,mutate:v}=X("api/periodic"),{data:ee}=X("api/query"),{data:R}=X("api/tasks");if(!R)return e($,{children:"Loading..."});if(!ee)return e($,{children:"Loading..."});const H=()=>a(!i),O=n=>{f.post("api/periodic",n).then(c=>{v(L),H()})},B=()=>s(!d),te=n=>{f.put(`api/periodic/${n.id}`,n).then(c=>{v(L),B()})},Q=n=>{for(let[Y,l]of Object.entries(n))V(Y,l);let c=JSON.parse(n.kwargs.replaceAll("'",'"'));V("query",c.query),n.start_time&&V("start_time",n.start_time.substring(0,16)),B()},T=()=>x(!o),I=n=>{f.delete(`api/periodic/${n.id}`).then(c=>{v(L),T()})},W=(n,c)=>{A({name:n,id:c}),z("id",c),T()},_=n=>t($,{children:[t(m,{width:"350px",children:[e(D,{children:"Name"}),e(S,p({},n("name",{required:!0})))]}),t(m,{width:"350px",children:[e(D,{children:"Task"}),e(Qe,w(p({},n("task")),{children:R.data.map(c=>e("option",{value:c,children:c},c))}))]}),t(m,{width:"350px",children:[e(D,{children:"Query"}),e(Qe,w(p({},n("query")),{children:ee.map(c=>e("option",{value:c.id,children:c.name},c.id))}))]}),t(m,{width:"350px",children:[e(D,{children:"Crontab"}),t(qe,{style:{textAlign:"center"},children:[e(m,{children:e(S,w(p({},n("crontab.minute",{required:!0})),{style:{textAlign:"center"}}))}),e(m,{children:e(S,w(p({},n("crontab.hour",{required:!0})),{style:{textAlign:"center"}}))}),e(m,{children:e(S,w(p({},n("crontab.day_of_week",{required:!0})),{style:{textAlign:"center"}}))}),e(m,{children:e(S,w(p({},n("crontab.day_of_month",{required:!0})),{style:{textAlign:"center"}}))}),e(m,{children:e(S,w(p({},n("crontab.month_of_year",{required:!0})),{style:{textAlign:"center"}}))})]})]}),t(m,{width:"350px",children:[e(D,{children:"Timezone"}),e(S,p({},n("crontab.timezone",{required:!0})))]}),t(qe,{children:[t(m,{children:[e(D,{children:"Start time"}),e(S,p({type:"datetime-local"},n("start_time")))]}),t(m,{children:[e(D,{children:"Run once"}),e(S,p({type:"checkbox"},n("one_off")))]})]}),e(Pe,{children:e(ke,{type:"submit",children:"SAVE"})})]}),M=e(we,{children:e(G,{onSubmit:b(I),children:e(m,{children:t(Pe,{children:[e(ke,{type:"button",onClick:T,children:"CANCEL"}),e(ke,{type:"submit",style:{marginRight:15},bgcolor:"#fdaeae",color:"red",children:"DELETE"})]})})})}),U=e(we,{children:e(G,{onSubmit:P(te),children:_(Z)})}),J=e(we,{children:e(G,{onSubmit:F(O),children:_(y)})});if(!L)return e($,{});const h=n=>new Date(n).toLocaleString(),N=(n,c)=>{f.put("api/periodic-state",{id:n,active:c}).then(()=>{v(L)})};return t(we,{children:[t(nn,{children:[e("span",{children:"Periodic Tasks"}),e(ke,{onClick:H,children:"+ Task"})]}),e("div",{style:{overflow:"auto"},children:t(fe,{children:[e("thead",{children:t(oe,{children:[e(q,{children:"Active"}),e(q,{children:"Runs"}),e(q,{children:"Task"}),e(q,{children:"Crontab"}),e(q,{children:"Last run"}),e(q,{children:"Run once"}),e(q,{children:"Updated at"}),e(q,{children:"Actions"})]})}),e("tbody",{children:L.map(n=>t(oe,{children:[e(E,{active:n.enabled,className:"active"}),e(E,{children:n.total_run_count}),e(E,{children:n.name}),e(E,{children:`${n.crontab.minute} 
                ${n.crontab.hour} 
                ${n.crontab.day_of_week} 
                ${n.crontab.day_of_month} 
                ${n.crontab.month_of_year}`}),e(E,{children:n.last_run_at?h(n.last_run_at):""}),e(E,{active:n.one_off,className:"active"}),e(E,{children:h(n.date_changed)}),t(E,{children:[e("button",{onClick:()=>Q(n),style:{marginLeft:10},children:e(ye,{})}),e("button",{onClick:()=>W(n.name,n.id),children:e(ve,{})}),e("button",{onClick:()=>N(n.id,!n.enabled),children:n.enabled?e(Qt,{}):e(Pt,{})})]})]},n.id))})]})}),e(K,{isActive:i,header:"New task",hide:H,content:J}),e(K,{isActive:d,header:"Edit task",hide:B,content:U}),e(K,{isActive:o,header:`Remove task "${k.name}"?`,hide:T,content:M})]})},an=r.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,on=r.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  > span {
    font-size: 24px;
    font-weight: bold;
  }
`,Le=r.button`
  background: ${i=>i.bgcolor?i.bgcolor:"var(--company)"};
  color: ${i=>i.color?i.color:"white"};
  padding: 10px 20px;
  border-radius: 5px;
  margin-left: 10px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
  :disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`,dn=r.textarea`
  background: var(--secondary);
  border-radius: 5px;
  width: 40vw;
  color: var(--white);
  height: calc(100vh - 100px);
  padding: 5px;
  resize: none;
  border: 1px solid var(--secondary);
  :focus {
    border: 1px solid var(--company);
  }
  @media (max-width: 900px) {
    width: 100%;
    height: calc(100vh - 300px);
  }
`,cn=r.input`
  font-size: 24px;
  font-weight: bold;
  border-radius: 5px;
  width: ${i=>i.length*14}px;
  color: var(--white);
  background: var(--primary);
  border: 2px solid var(--primary);
  :focus,
  :hover {
    border: 2px solid var(--text);
  }
  @media (max-width: 900px) {
    max-width: 50vw;
  }
`,ln=r.form``,Se=r.select`
  min-width: 100px;
  width: 100%;
  color: var(--white);
  background: var(--secondary);
  border-radius: 3px;
  padding: 10px;
  &.discret {
    padding: 0 0 0 5px;
    max-width: 80px;
    background: var(--primary);
  }
`,ue=r.div`
  font-weight: bold;
  padding: 5px;
`,sn=r.input`
  padding: 10px;
  border: none;
  border-radius: 3px;
  color: var(--white);
  width: 100%;
  border: 2px solid var(--secondary);
  margin-bottom: 10px;
  :focus {
    border: 2px solid var(--tertiary);
  }
  :hover {
    border: 2px solid var(--tertiary);
  }
`,de=r.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  @media (max-width: 900px) {
    width: 100%;
  }
`,ae=r.div`
  padding: 0 10px;
  @media (max-width: 900px) {
    width: 100%;
  }
`,Te=r.p`
  ::before {
    content: "";
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 5px;
    background: ${i=>i.active?"green":"red"};
  }
  span {
    font-weight: bold;
  }
`,hn=r.table`
  width: auto;
  margin: 10px;
  background: var(--bg);
  border-radius: 5px;
  padding: 10px;
  td {
    white-space: nowrap;
    border-bottom: 1px solid var(--secondary);
    padding: 5px;
  }
  tr {
    padding: 5px;
  }
`,pn=r.div`
  overflow-x: auto;
  max-width: 45vw;
  margin: 10px 0;
`,un=r.p`
  color: red;
  max-width: 300px;
  text-align: center;
  border-radius: 5px;
  padding: 15px;
  margin: 20px 0 0 10px;
  background: #ffcfcf;
  font-weight: bold;
  font-size: 14px;
`,mn=je`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`,xn=r(xt)`
  width: 24px;
  height: 24px;
  animation: ${mn} 2s linear infinite;
`,bn=r.span`
  padding-left: 15px;
  font-size: 14px;
  color: var(--text);
`,gn=r.div`
    padding: 5px;
    margin: 10px;
    width: 360px;
    background: var(--bg);
    border-radius: 5px;
`,_e=r.div`
    font-size: 14px;
    padding: 3px;
    border-bottom: 2px solid var(--secondary);
`,fn=r.div`
    font-size: 13px;
    padding: 3px;
`,yn=r.div`
    font-size: 12px;
    color: var(--text);
    padding: 3px;
`,vn=r.button`
    background: var(--secondary);
    color: var(--white);
    padding: 10px 20px;
    border-radius: 5px;
    margin-left: 10px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    :hover {
        opacity: 0.7;
    }
`,Re=r.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,wn=r(bt)`
    width: 44px;
    height: 44px;
    fill: var(--text);
    margin: 5px 0;
`,kn=r(gt)`
    width: 44px;
    height: 44px;
    fill: var(--text);
    margin: 5px 0;
`,Sn=({body:i,header:a,footer:o,buttons:x})=>{const d=e(yn,{children:o==null?void 0:o.text});let s=e($,{});return(a==null?void 0:a.format)==="TEXT"?s=e(_e,{children:a==null?void 0:a.text}):(a==null?void 0:a.format)==="DOCUMENT"?s=e(_e,{children:e(Re,{children:e(wn,{})})}):(a==null?void 0:a.format)==="IMAGE"&&(s=e(_e,{children:e(Re,{children:e(kn,{})})})),t(gn,{children:[s,e(fn,{children:e(ft,{children:i.text.replaceAll("*","**")})}),d,e(Re,{children:x==null?void 0:x.data.map(k=>e(vn,{type:"button",children:k.text},k.text))})]})},We=()=>{const i={templates:[""]},{data:a,mutate:o}=X("api/dialog"),{data:x}=X("api/database"),{data:d}=X("api/tasks"),[s,k]=u.exports.useState(""),[A,y]=u.exports.useState(i),[F,Z]=u.exports.useState(),[P,V]=u.exports.useState(),[b,z]=u.exports.useState(),[L,v]=u.exports.useState(""),[ee,R]=u.exports.useState(!1),[H,O]=u.exports.useState(!0),[B,te]=u.exports.useState(!1),[Q,T]=u.exports.useState(!1),{register:I,handleSubmit:W,setValue:_,watch:M}=j(),{id:U}=yt(),J=vt();if(u.exports.useEffect(()=>{var l;U&&f.get(`api/query/${U}`).then(C=>{_("sql",C.data.sql),_("name",C.data.name),_("database",C.data.database.id),_("hsm",C.data.hsm),_("task",C.data.task),_("once_time",C.data.once_time)}),a&&!s&&((l=a[0])==null?void 0:l.company)&&f.get(`api/templates/${a[0].company}`).then(C=>y(C.data))},[a]),!a)return e($,{children:"Loading..."});if(!x)return e($,{children:"Loading..."});if(!A)return e($,{children:"Loading..."});if(!d)return e($,{children:"Loading..."});const h=l=>{l.task=Q?l.task:void 0,U?f.put(`api/query/${U}`,l).then(()=>J.push("/queries")):f.post("api/query",l).then(()=>J.push("/queries"))},N=()=>{const l=M("sql"),C=M("database");if(!l)return v("Query cannot be empty!");if(M("hsm")=="select")return v("Select a HSM");v(""),R(!0),O(!0),f.post("run",{query:l,database:C}).then(g=>{if(R(!1),g.data.status!=="Erro"){if(!g.data[0].hasOwnProperty("phone"))return v('A "phone" column is required!');if(!g.data[0].hasOwnProperty("company"))return v('A "company" column is required!');if(!g.data[0].hasOwnProperty("body_args")&&B)return v('A "body_args" column is required!');O(!1);let ce=[],le=1;for(let re in g.data[0])ce.push(e("th",{children:re},le)),le++;let se=[];for(let re of g.data){let he=[],pe=1;for(let me in re)he.push(e("td",{children:re[me]},pe)),pe++;se.push(e("tr",{children:he}))}z(e(pn,{children:t(hn,{children:[e("thead",{children:e("tr",{children:ce})}),e("tbody",{children:se})]})}))}else v(g.data.message)})},n=l=>{const C=l.target.value;k(C),o(a),f.get(`api/templates/${C}`).then(g=>y(g.data))},c=l=>{const C=l.target.value;O(!0),f.get(`/templates/${s}/${C}`).then(g=>{var ce,le,se,re,he,pe,me,Be,Ne;g.data.body.args?te(!0):te(!1),((ce=g.data.header)==null?void 0:ce.format)==="DOCUMENT"?T(!0):T(!1),Z(e(Sn,{body:g.data.body,header:(le=g.data)==null?void 0:le.header,footer:(se=g.data)==null?void 0:se.footer,buttons:(re=g.data)==null?void 0:re.buttons})),V(t($,{children:[e(ue,{children:"Variables"}),((he=g.data)==null?void 0:he.header)?t(Te,{active:(pe=g.data.header)==null?void 0:pe.args,children:["Header"," ",e("span",{children:((me=g.data.header)==null?void 0:me.args)?`${(Be=g.data.header)==null?void 0:Be.format}`:""})]}):"",t(Te,{active:g.data.body.args,children:["Body"," ",e("span",{children:g.data.body.args?g.data.body.args:""})]}),(Ne=g.data.buttons)==null?void 0:Ne.data.map(De=>t(Te,{active:De.variable,children:["Button ",e("span",{children:De.variable?De.type:""})]}))]})),O(!0)})},Y=t(ae,{style:{paddingTop:20},children:[e(ue,{children:"Task for document"}),e(Se,w(p({},I("task")),{style:{width:"200px",height:40},children:d.data.map(l=>e("option",{value:l,children:l},l))}))]});return e(an,{children:t(ln,{onSubmit:W(h),children:[t(on,{children:[t("div",{children:[e(cn,w(p({placeholder:"New query"},I("name")),{length:M("name")?M("name").length:12,required:!0})),e(Le,{disabled:H,children:"Save"}),e(bn,{children:H?"Run to verify and save":""})]}),e(xe,{to:"/queries",children:e(Le,{children:"\u21A9 Back"})})]}),t(de,{children:[e(ae,{children:e(dn,w(p({},I("sql")),{onChange:()=>O(!0)}))}),t(ae,{children:[t(de,{children:[t(ae,{style:{width:"150px"},children:[e(ue,{children:"Database"}),e(Se,w(p({},I("database")),{children:x.map(l=>e("option",{value:l.id,children:l.name},l.id))}))]}),t(ae,{style:{width:"230px"},children:[t(de,{style:{marginTop:0},children:[e(ue,{children:"HSM"}),e(Se,{className:"discret",onChange:n,children:a.map(l=>e("option",{value:l.company,children:l.company},l.id))})]}),t(Se,w(p({},I("hsm")),{onChange:c,children:[e("option",{value:"select",children:"Select..."},"select"),A==null?void 0:A.templates.sort().map((l,C)=>e("option",{value:l,children:l},C))]}))]}),e(ae,{children:P})]}),t(de,{children:[F,t(ae,{children:[t(de,{style:{flexWrap:"nowrap"},children:[e(sn,w(p({type:"checkbox"},I("once_time")),{style:{width:30,marginTop:8}})),e(ue,{children:"Send only once"})]}),Q?Y:null]})]}),b,t(de,{children:[e(Le,{type:"button",bgcolor:"lightblue",color:"darkblue",style:{marginTop:20,paddingLeft:30,paddingRight:30,minWidth:120,minHeight:50,fontSize:15},disabled:!!ee,onClick:N,children:ee?e(xn,{}):"\u25B6 Run"}),L?e(un,{children:L}):""]})]})]})]})})},Ce=r.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`,Cn=r.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    > span {
        font-size: 24px;
        font-weight: bold;
    }
`,Ue=r.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background: var(--secondary);
`,$e=r.button`
    background: ${i=>i.bgcolor?i.bgcolor:"var(--company)"};
    color: ${i=>i.color?i.color:"white"};
    padding: 10px 20px;
    border-radius: 5px;
    margin-left: 10px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    :hover {
        opacity: 0.7;
    }
`,$n=()=>{let[i,a]=u.exports.useState(!1),[o,x]=u.exports.useState(!1),[d,s]=u.exports.useState(!1),[k,A]=u.exports.useState({name:"",id:0});const{register:y,handleSubmit:F,setValue:Z}=j(),{register:P,handleSubmit:V,setValue:b}=j(),{handleSubmit:z,setValue:L}=j(),{data:v,error:ee,mutate:R}=X("api/dialog"),H=()=>a(!i),O=h=>{f.post("api/dialog",h).then(N=>{R(v),H()})},B=()=>s(!d),te=h=>{f.put(`api/dialog/${h.id}`,h).then(N=>{R(v),B()})},Q=h=>{for(let[N,n]of Object.entries(h))b(N,n);B()},T=()=>x(!o),I=h=>{f.delete(`api/dialog/${h.id}`).then(N=>{R(v),T()})},W=(h,N)=>{A({name:h,id:N}),L("id",N),T()},_=h=>t($,{children:[t(m,{width:"350px",children:[e(D,{children:"Company name"}),e(S,p({},h("company",{required:!0})))]}),t(m,{width:"350px",children:[e(D,{children:"Api-key"}),e(S,p({},h("api_key",{required:!0})))]}),t(m,{width:"350px",children:[e(D,{children:"Namespace"}),e(S,p({},h("namespace",{required:!0})))]}),t(m,{width:"350px",children:[e(D,{children:"Phone number"}),e(S,p({},h("phone_number",{required:!0})))]}),e(Ue,{children:e($e,{type:"submit",children:"SAVE"})})]}),M=e(Ce,{children:e(G,{onSubmit:z(I),children:e(m,{children:t(Ue,{children:[e($e,{type:"button",onClick:T,children:"CANCEL"}),e($e,{type:"submit",style:{marginRight:15},bgcolor:"#fdaeae",color:"red",children:"DELETE"})]})})})}),U=e(Ce,{children:e(G,{onSubmit:V(te),children:_(P)})}),J=e(Ce,{children:e(G,{onSubmit:F(O),children:_(y)})});return v?t(Ce,{children:[t(Cn,{children:[e("span",{children:"Company"}),e($e,{onClick:H,children:"+ Company"})]}),e("div",{style:{overflow:"auto"},children:t(fe,{children:[e("thead",{children:t(oe,{children:[e(q,{children:"Company"}),e(q,{children:"Phone Number"}),e(q,{children:"Actions"})]})}),e("tbody",{children:v.map(h=>t(oe,{children:[e(E,{children:h.company}),e(E,{children:h.phone_number}),t(E,{children:[e("button",{onClick:()=>Q(h),children:e(ye,{})}),e("button",{onClick:()=>W(h.company,h.id),children:e(ve,{})})]})]},h.id))})]})}),e(K,{isActive:i,header:"New company",hide:H,content:J}),e(K,{isActive:d,header:"Edit company",hide:B,content:U}),e(K,{isActive:o,header:`Remove company "${k.name}"?`,hide:T,content:M})]}):e($,{})},Dn=r.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,En=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  > span {
    font-size: 24px;
    font-weight: bold;
  }
`,qn=r.input`
  background: var(--secondary);
  border: 2px solid var(--secondary);
  border-radius: 5px 0 0 5px;
  padding: 8px 0 8px 5px;
  width: 130px;
  color: var(--white);
  :hover,
  :focus {
    border: 2px solid var(--text);
    border-right: 2px solid var(--secondary);
  }
`,An=r.button`
  padding: 10px 12px;
  border-radius: 0 5px 5px 0;
  background: var(--company);
  :hover {
    opacity: 0.7;
    cursor: pointer;
  }
  :disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`,Ln=r.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin-left: 20px;
  padding: 5px 0;
`,Tn=r(Ie)`
  width: 22px;
  height: 22px;
  margin-left: 8px;
  fill: var(--text);
  padding: 3px;
  cursor: pointer;
  :hover {
    background: var(--company);
    border-radius: 5px;
    fill: var(--bg);
  }
`,_n=()=>{const{register:i,handleSubmit:a,setValue:o,watch:x}=j(),{data:d,mutate:s}=X("api/blacklist"),k=y=>{y.number&&f.post(`blacklist/${y.number}`,{}).then(F=>{s(d),o("number","")})},A=y=>{f.delete(`blacklist/${y}`).then(F=>{s(d)})};return d?t(Dn,{children:[e(En,{children:e("span",{children:"Blacklist"})}),e("form",{onSubmit:a(k),children:t("div",{style:{margin:20},children:[e(qn,w(p({},i("number")),{type:"text",minLength:11})),e(An,{children:"+"})]})}),e("ul",{children:d.map(y=>t(Ln,{children:[y.number,e(Tn,{onClick:()=>A(y.number)})]},y.id))})]}):e($,{children:"Loading..."})},Rn=()=>t(wt,{children:[e(ne,{exact:!0,path:"/",children:e(Vt,{})}),e(ne,{exact:!0,path:"/tasks",children:e(rn,{})}),e(ne,{exact:!0,path:"/queries",children:e(tn,{})}),e(ne,{exact:!0,path:"/query/new",children:e(We,{})}),e(ne,{exact:!0,path:"/query/:id",children:e(We,{})}),e(ne,{exact:!0,path:"/databases",children:e(Yt,{})}),e(ne,{exact:!0,path:"/company",children:e($n,{})}),e(ne,{exact:!0,path:"/blacklist",children:e(_n,{})})]});function Bn(){return t($,{children:[e(Ft,{children:e(Rn,{})}),e(Dt,{})]})}kt.render(e(St.StrictMode,{children:e(Ct,{children:e(Bn,{})})}),document.getElementById("root"));
