var Ge=Object.defineProperty,Ke=Object.defineProperties;var Xe=Object.getOwnPropertyDescriptors;var ze=Object.getOwnPropertySymbols;var Je=Object.prototype.hasOwnProperty,Ye=Object.prototype.propertyIsEnumerable;var He=(r,o,d)=>o in r?Ge(r,o,{enumerable:!0,configurable:!0,writable:!0,value:d}):r[o]=d,h=(r,o)=>{for(var d in o||(o={}))Je.call(o,d)&&He(r,d,o[d]);if(ze)for(var d of ze(o))Ye.call(o,d)&&He(r,d,o[d]);return r},v=(r,o)=>Ke(r,Xe(o));import{W as Ze,s as n,L as xe,C as et,H as tt,a as nt,A as rt,V as it,F as ot,S as at,M as dt,j as Ee,u as ct,b as lt,R as Ie,c as st,d as ht,U as Ve,e as pt,f as ut,g as mt,h as j,r as x,B as xt,i as bt,k as gt,l as ft,m as yt,n as vt,o as wt,p as te,q as kt,t as St,v as Ct}from"./vendor.aa8d85f4.js";const $t=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))g(c);new MutationObserver(c=>{for(const s of c)if(s.type==="childList")for(const w of s.addedNodes)w.tagName==="LINK"&&w.rel==="modulepreload"&&g(w)}).observe(document,{childList:!0,subtree:!0});function d(c){const s={};return c.integrity&&(s.integrity=c.integrity),c.referrerpolicy&&(s.referrerPolicy=c.referrerpolicy),c.crossorigin==="use-credentials"?s.credentials="include":c.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function g(c){if(c.ep)return;c.ep=!0;const s=d(c);fetch(c.href,s)}};$t();var Dt=Ze`
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
`;const Et=n.div`
    display: flex;
    width: 100%;
`,qt=n.main`
    width: 100%;
    padding: 10px;
    background: var(--primary);
    color: var(--white);
    height: 100vh;
`,At=n.div`
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
`,je=n.div`
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
`,Lt=n(xe)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-decoration: none;
  font-size: 12px;
  color: inherit;
`,Tt=n.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-decoration: none;
  font-size: 12px;
  color: inherit;
`,Fe=n.span`
  display: block;
  flex: 1;
`,ie=et`
  width: 24px;
  height: 24px;
  margin: 0 5px;
`,_t=n(tt)`
  ${ie}
`,Rt=n(nt)`
  ${ie}
`,Bt=n(rt)`
  ${ie}
`;n(it)`
  ${ie}
`;const Nt=n(ot)`
  ${ie}
`,zt=n(at)`
  ${ie}
`,Ht=n(dt)`
  ${ie}
`,e=Ee.exports.jsx,t=Ee.exports.jsxs,D=Ee.exports.Fragment,It=({})=>{const{pathname:r}=ct();return t(At,{children:[Vt.map(({icon:o,label:d,to:g})=>e(je,{className:r===g?"active":"",children:t(Lt,{to:g,children:[o,e(Fe,{children:d})]})},d)),e(je,{children:t(Tt,{href:"https://flower.explorernet.com.br/",target:"_blank",children:[e(zt,{}),e(Fe,{children:"Flower"})]})})]})},Vt=[{label:"Tasks",icon:e(Rt,{}),to:"/tasks"},{label:"Queries",icon:e(Bt,{}),to:"/queries"},{label:"Databases",icon:e(_t,{}),to:"/databases"},{label:"Company",icon:e(Nt,{}),to:"/company"},{label:"Blacklist",icon:e(Ht,{}),to:"/blacklist"}],jt=({children:r})=>t(Et,{children:[e(It,{}),e(qt,{children:r})]}),Ft=()=>e("h1",{children:"Home Page"}),be=n.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`,Ot=n.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    > span {
        font-size: 24px;
        font-weight: bold;
    }
`,Oe=n.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background: var(--secondary);
`,ge=n.button`
    background: ${r=>r.bgcolor?r.bgcolor:"var(--company)"};
    color: ${r=>r.color?r.color:"white"};
    padding: 10px 20px;
    border-radius: 5px;
    margin-left: 10px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    :hover {
        opacity: 0.7;
    }
`,G=n.form`
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
`,qe=n.div`
  display: flex;
  justify-content: space-between;
`,b=n.div`
  width: ${r=>r.width?r.width:"100%"};
  margin: 0 10px;
`,E=n.div`
  font-weight: bold;
  padding: 5px;
`,S=n.input`
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
`,Mt=n.p`
  background: var(--secondary);
  color: red;
  font-size: 12px;
`,fe=n.table`
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
`,ae=n.tr``,L=n.th`
  padding: 0 5px;
  color: var(--text);
`,q=n.td`
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
      background: ${r=>r.active?"green":"red"};
    }
  }
`,ye=n(lt)`
  width: 22px;
  height: 22px;
  cursor: pointer;
  fill: var(--tertiary);
  :hover {
    fill: var(--company);
  }
`,ve=n(Ie)`
  width: 22px;
  height: 22px;
  margin-left: 8px;
  fill: var(--tertiary);
  cursor: pointer;
  :hover {
    fill: var(--company);
  }
`,Pt=n(st)`
  width: 22px;
  height: 22px;
  margin-left: 8px;
  fill: var(--tertiary);
  cursor: pointer;
  :hover {
    fill: var(--company);
  }
`,Qt=n(ht)`
  width: 22px;
  height: 22px;
  margin-left: 8px;
  fill: var(--tertiary);
  cursor: pointer;
  :hover {
    fill: var(--company);
  }
`,Wt=Ve`
    from {
        opacity: 0
    };
    to {
        opacity: 1
    }
`,Ut=n.div`
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
`,Gt=n.div`
  width: 400px;
  padding: 3px;
  background: var(--secondary);
  box-shadow: 0 0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
`,Kt=n.div`
  display: flex;
  padding: 10px;
  border-bottom: 1px solid var(--tertiary);
  justify-content: space-between;
  > span {
    font-size: 20px;
    font-weight: 600;
  }
`,Xt=n(pt)`
  height: 18px;
  width: 18px;
  fill: var(--text);
  :hover {
    fill: indianred;
  }
`,Jt=n.div`
  background: var(--secondary);
  padding: 10px;
`,K=({isActive:r,header:o,hide:d,content:g})=>e(Ut,{className:r?"active":"",children:t(Gt,{children:[t(Kt,{children:[e("span",{children:o}),e(Xt,{onClick:d})]}),e(Jt,{children:g})]})}),f=ut.create({xsrfCookieName:"csrftoken",xsrfHeaderName:"X-CSRFToken"});function X(r){const{data:o,error:d,mutate:g}=mt(r,async c=>(await f.get(c)).data);return{data:o,error:d,mutate:g}}const Yt=()=>{const{data:r,error:o,mutate:d}=X("database"),{register:g,handleSubmit:c,setValue:s}=j(),{register:w,handleSubmit:T,setValue:y}=j(),{handleSubmit:F,setValue:ne}=j();let[U,J]=x.exports.useState(!1),[u,O]=x.exports.useState(!1),[Y,C]=x.exports.useState(!1),[z,A]=x.exports.useState(null),[M,H]=x.exports.useState({name:"",id:0});const _=()=>J(!U),ee=l=>{f.post("database-test",l).then($=>{$.data.status=="Error"&&A($.data.message),$.data.status=="OK"&&f.post("database",l).then(i=>{i.data.status=="Error"?A(i.data.message):(d(r),_())})})},I=()=>C(!Y),P=l=>{f.post("database-test",l).then($=>{$.data.status=="Error"&&A($.data.message),$.data.status=="OK"&&f.put(`database/${l.id}`,l).then(i=>{d(r),I()})})},V=l=>{for(let[$,i]of Object.entries(l))y($,i);I()},R=()=>O(!u),B=l=>{f.delete(`database/${l.id}`).then($=>{d(r),R()})},Q=(l,$)=>{H({name:l,id:$}),ne("id",$),R()},W=e(be,{children:e(G,{onSubmit:F(B),children:e(b,{children:t(Oe,{children:[e(ge,{type:"button",onClick:R,children:"CANCEL"}),e(ge,{type:"submit",style:{marginRight:15},bgcolor:"#fdaeae",color:"red",children:"DELETE"})]})})})}),Z=l=>t(D,{children:[t(qe,{children:[t(b,{children:[e(E,{children:"Host"}),e(S,h({placeholder:"localhost"},l("host",{required:!0})))]}),t(b,{width:"100px",children:[e(E,{children:"Port"}),e(S,v(h({},l("port",{required:!0})),{placeholder:"5432"}))]})]}),t(b,{width:"300px",children:[e(E,{children:"Database"}),e(S,v(h({},l("database",{required:!0})),{placeholder:"postgres"}))]}),t(b,{width:"300px",children:[e(E,{children:"User"}),e(S,v(h({},l("user",{required:!0})),{placeholder:"postgres"}))]}),t(b,{width:"300px",children:[e(E,{children:"Password"}),e(S,v(h({},l("password",{required:!0})),{type:"password"}))]}),t(b,{width:"300px",children:[e(E,{children:"Display name"}),e(S,v(h({},l("name",{required:!0})),{placeholder:"My Database"}))]}),t(Oe,{children:[e(Mt,{children:z}),e(ge,{type:"submit",children:"CONNECT"})]})]}),p=e(be,{children:e(G,{onSubmit:T(P),children:Z(w)})}),N=e(be,{children:e(G,{onSubmit:c(ee),children:Z(g)})});return r?t(be,{children:[t(Ot,{children:[e("span",{children:"Databases"}),e(ge,{onClick:_,children:"+ Database"})]}),e("div",{style:{overflow:"auto"},children:t(fe,{children:[e("thead",{children:t(ae,{children:[e(L,{children:"Name"}),e(L,{children:"Host"}),e(L,{children:"Database"}),e(L,{children:"Actions"})]})}),e("tbody",{children:r.map(l=>t(ae,{children:[e(q,{children:l.name}),e(q,{children:l.host}),e(q,{children:l.database}),t(q,{children:[e("button",{onClick:()=>V(l),children:e(ye,{})}),e("button",{onClick:()=>Q(l.name,l.id),children:e(ve,{})})]})]},l.id))})]})}),e(K,{isActive:U,header:"New connection",hide:_,content:N}),e(K,{isActive:Y,header:"Edit connection",hide:I,content:p}),e(K,{isActive:u,header:`Remove database "${M.name}"?`,hide:R,content:W})]}):e(D,{})},Me=n.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,Zt=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  > span {
    font-size: 24px;
    font-weight: bold;
  }
`,Ae=n.button`
  background: ${r=>r.bgcolor?r.bgcolor:"var(--company)"};
  color: ${r=>r.color?r.color:"white"};
  padding: 10px 20px;
  border-radius: 5px;
  margin-left: 10px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`,en=n.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background: var(--secondary);
`,tn=()=>{const{data:r,mutate:o}=X("query");let[d,g]=x.exports.useState({name:"",id:0});const{handleSubmit:c,setValue:s}=j();let[w,T]=x.exports.useState(!1);if(!r)return e(D,{children:"Loading...."});const y=()=>T(!w),F=u=>{f.delete(`query/${u.id}`).then(O=>{o(r),y()})},ne=(u,O)=>{g({name:u,id:O}),s("id",O),y()},U=u=>new Date(u).toLocaleString(),J=e(Me,{children:e(G,{onSubmit:c(F),children:e(b,{children:t(en,{children:[e(Ae,{type:"button",onClick:y,children:"CANCEL"}),e(Ae,{type:"submit",style:{marginRight:15},bgcolor:"#fdaeae",color:"red",children:"DELETE"})]})})})});return t(Me,{children:[t(Zt,{children:[e("span",{children:"Queries"}),e(xe,{to:"query/new",children:e(Ae,{children:"+ Query"})})]}),t(fe,{children:[e("thead",{children:t("tr",{children:[e("th",{children:"Name"}),e("th",{children:"Database"}),e("th",{children:"HSM"}),e("th",{children:"Once time"}),e("th",{children:"Updated at"}),e("th",{children:"Actions"})]})}),e("tbody",{children:r.map(u=>t("tr",{children:[e("td",{children:u.name}),e("td",{children:u.database.name}),e("td",{children:u.hsm}),e(q,{active:u.once_time,className:"active"}),e("td",{children:U(u.update_at)}),t(q,{children:[e(xe,{to:`query/${u.id}`,children:e(ye,{})}),e("button",{onClick:()=>ne(u.name,u.id),children:e(ve,{})})]})]},u.id))})]}),e(K,{isActive:w,header:`Remove query "${d.name}"?`,hide:y,content:J})]})},we=n.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,nn=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  > span {
    font-size: 24px;
    font-weight: bold;
  }
`,Pe=n.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background: var(--secondary);
`,ke=n.button`
  background: ${r=>r.bgcolor?r.bgcolor:"var(--company)"};
  color: ${r=>r.color?r.color:"white"};
  padding: 10px 20px;
  border-radius: 5px;
  margin-left: 10px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`,Qe=n.select`
  min-width: 100px;
  width: 100%;
  color: var(--white);
  background: var(--tertiary);
  border-radius: 3px;
  padding: 10px;
  margin-bottom: 10px;
`,rn=()=>{let[r,o]=x.exports.useState(!1),[d,g]=x.exports.useState(!1),[c,s]=x.exports.useState(!1),[w,T]=x.exports.useState({name:"",id:0});const{register:y,handleSubmit:F,setValue:ne}=j(),{register:U,handleSubmit:J,setValue:u,watch:O}=j(),{handleSubmit:Y,setValue:C}=j(),{data:z,mutate:A}=X("periodic"),{data:M}=X("query"),{data:H}=X("tasks");if(!H)return e(D,{children:"Loading..."});if(!M)return e(D,{children:"Loading..."});const _=()=>o(!r),ee=i=>{f.post("periodic",i).then(a=>{A(z),_()})},I=()=>s(!c),P=i=>{f.put(`periodic/${i.id}`,i).then(a=>{A(z),I()})},V=i=>{for(let[k,m]of Object.entries(i))u(k,m);let a=JSON.parse(i.kwargs.replaceAll("'",'"'));u("query",a.query),i.start_time&&u("start_time",i.start_time.substring(0,16)),I()},R=()=>g(!d),B=i=>{f.delete(`periodic/${i.id}`).then(a=>{A(z),R()})},Q=(i,a)=>{T({name:i,id:a}),C("id",a),R()},W=i=>t(D,{children:[t(b,{width:"350px",children:[e(E,{children:"Name"}),e(S,h({},i("name",{required:!0})))]}),t(b,{width:"350px",children:[e(E,{children:"Task"}),e(Qe,v(h({},i("task")),{children:H.data.map(a=>e("option",{value:a,children:a},a))}))]}),t(b,{width:"350px",children:[e(E,{children:"Query"}),e(Qe,v(h({},i("query")),{children:M.map(a=>e("option",{value:a.id,children:a.name},a.id))}))]}),t(b,{width:"350px",children:[e(E,{children:"Crontab"}),t(qe,{style:{textAlign:"center"},children:[e(b,{children:e(S,v(h({},i("crontab.minute",{required:!0})),{style:{textAlign:"center"}}))}),e(b,{children:e(S,v(h({},i("crontab.hour",{required:!0})),{style:{textAlign:"center"}}))}),e(b,{children:e(S,v(h({},i("crontab.day_of_week",{required:!0})),{style:{textAlign:"center"}}))}),e(b,{children:e(S,v(h({},i("crontab.day_of_month",{required:!0})),{style:{textAlign:"center"}}))}),e(b,{children:e(S,v(h({},i("crontab.month_of_year",{required:!0})),{style:{textAlign:"center"}}))})]})]}),t(b,{width:"350px",children:[e(E,{children:"Timezone"}),e(S,h({},i("crontab.timezone",{required:!0})))]}),t(qe,{children:[t(b,{children:[e(E,{children:"Start time"}),e(S,h({type:"datetime-local"},i("start_time")))]}),t(b,{children:[e(E,{children:"Run once"}),e(S,h({type:"checkbox"},i("one_off")))]})]}),e(Pe,{children:e(ke,{type:"submit",children:"SAVE"})})]}),Z=e(we,{children:e(G,{onSubmit:Y(B),children:e(b,{children:t(Pe,{children:[e(ke,{type:"button",onClick:R,children:"CANCEL"}),e(ke,{type:"submit",style:{marginRight:15},bgcolor:"#fdaeae",color:"red",children:"DELETE"})]})})})}),p=e(we,{children:e(G,{onSubmit:J(P),children:W(U)})}),N=e(we,{children:e(G,{onSubmit:F(ee),children:W(y)})});if(!z)return e(D,{});const l=i=>new Date(i).toLocaleString(),$=(i,a)=>{f.put("periodic-state",{id:i,active:a}).then(()=>{A(z)})};return t(we,{children:[t(nn,{children:[e("span",{children:"Periodic Tasks"}),e(ke,{onClick:_,children:"+ Task"})]}),e("div",{style:{overflow:"auto"},children:t(fe,{children:[e("thead",{children:t(ae,{children:[e(L,{children:"Active"}),e(L,{children:"Runs"}),e(L,{children:"Task"}),e(L,{children:"Crontab"}),e(L,{children:"Last run"}),e(L,{children:"Run once"}),e(L,{children:"Updated at"}),e(L,{children:"Actions"})]})}),e("tbody",{children:z.map(i=>t(ae,{children:[e(q,{active:i.enabled,className:"active"}),e(q,{children:i.total_run_count}),e(q,{children:i.name}),e(q,{children:`${i.crontab.minute} 
                ${i.crontab.hour} 
                ${i.crontab.day_of_week} 
                ${i.crontab.day_of_month} 
                ${i.crontab.month_of_year}`}),e(q,{children:i.last_run_at?l(i.last_run_at):""}),e(q,{active:i.one_off,className:"active"}),e(q,{children:l(i.date_changed)}),t(q,{children:[e("button",{onClick:()=>V(i),style:{marginLeft:10},children:e(ye,{})}),e("button",{onClick:()=>Q(i.name,i.id),children:e(ve,{})}),e("button",{onClick:()=>$(i.id,!i.enabled),children:i.enabled?e(Qt,{}):e(Pt,{})})]})]},i.id))})]})}),e(K,{isActive:r,header:"New task",hide:_,content:N}),e(K,{isActive:c,header:"Edit task",hide:I,content:p}),e(K,{isActive:d,header:`Remove task "${w.name}"?`,hide:R,content:Z})]})},on=n.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,an=n.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  > span {
    font-size: 24px;
    font-weight: bold;
  }
`,Le=n.button`
  background: ${r=>r.bgcolor?r.bgcolor:"var(--company)"};
  color: ${r=>r.color?r.color:"white"};
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
`,dn=n.textarea`
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
`,cn=n.input`
  font-size: 24px;
  font-weight: bold;
  border-radius: 5px;
  width: ${r=>r.length*14}px;
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
`,ln=n.form``,Se=n.select`
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
`,ue=n.div`
  font-weight: bold;
  padding: 5px;
`,sn=n.input`
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
`,de=n.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  @media (max-width: 900px) {
    width: 100%;
  }
`,oe=n.div`
  padding: 0 10px;
  @media (max-width: 900px) {
    width: 100%;
  }
`,Te=n.p`
  ::before {
    content: "";
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 5px;
    background: ${r=>r.active?"green":"red"};
  }
  span {
    font-weight: bold;
  }
`,hn=n.table`
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
`,pn=n.div`
  overflow-x: auto;
  max-width: 45vw;
  margin: 10px 0;
`,un=n.p`
  color: red;
  max-width: 300px;
  text-align: center;
  border-radius: 5px;
  padding: 15px;
  margin: 20px 0 0 10px;
  background: #ffcfcf;
  font-weight: bold;
  font-size: 14px;
`,mn=Ve`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`,xn=n(xt)`
  width: 24px;
  height: 24px;
  animation: ${mn} 2s linear infinite;
`,bn=n.span`
  padding-left: 15px;
  font-size: 14px;
  color: var(--text);
`,gn=n.div`
    padding: 5px;
    margin: 10px;
    width: 360px;
    background: var(--bg);
    border-radius: 5px;
`,_e=n.div`
    font-size: 14px;
    padding: 3px;
    border-bottom: 2px solid var(--secondary);
`,fn=n.div`
    font-size: 13px;
    padding: 3px;
`,yn=n.div`
    font-size: 12px;
    color: var(--text);
    padding: 3px;
`,vn=n.button`
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
`,Re=n.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,wn=n(bt)`
    width: 44px;
    height: 44px;
    fill: var(--text);
    margin: 5px 0;
`,kn=n(gt)`
    width: 44px;
    height: 44px;
    fill: var(--text);
    margin: 5px 0;
`,Sn=({body:r,header:o,footer:d,buttons:g})=>{const c=e(yn,{children:d==null?void 0:d.text});let s=e(D,{});return(o==null?void 0:o.format)==="TEXT"?s=e(_e,{children:o==null?void 0:o.text}):(o==null?void 0:o.format)==="DOCUMENT"?s=e(_e,{children:e(Re,{children:e(wn,{})})}):(o==null?void 0:o.format)==="IMAGE"&&(s=e(_e,{children:e(Re,{children:e(kn,{})})})),t(gn,{children:[s,e(fn,{children:e(ft,{children:r.text.replaceAll("*","**")})}),c,e(Re,{children:g==null?void 0:g.data.map(w=>e(vn,{type:"button",children:w.text},w.text))})]})},We=()=>{const r={templates:[""]},{data:o,mutate:d}=X("dialog"),{data:g}=X("database"),{data:c}=X("tasks"),[s,w]=x.exports.useState(""),[T,y]=x.exports.useState(r),[F,ne]=x.exports.useState(),[U,J]=x.exports.useState(),[u,O]=x.exports.useState(),[Y,C]=x.exports.useState(""),[z,A]=x.exports.useState(!1),[M,H]=x.exports.useState(!0),[_,ee]=x.exports.useState(!1),[I,P]=x.exports.useState(!1),{register:V,handleSubmit:R,setValue:B,watch:Q}=j(),{id:W}=yt(),Z=vt();if(x.exports.useEffect(()=>{var a;W&&f.get(`query/${W}`).then(k=>{B("sql",k.data.sql),B("name",k.data.name),B("database",k.data.database.id),B("hsm",k.data.hsm),B("task",k.data.task),B("once_time",k.data.once_time)}),o&&!s&&((a=o[0])==null?void 0:a.company)&&f.get(`/templates/${o[0].company}`).then(k=>y(k.data))},[o]),!o)return e(D,{children:"Loading..."});if(!g)return e(D,{children:"Loading..."});if(!T)return e(D,{children:"Loading..."});if(!c)return e(D,{children:"Loading..."});const p=a=>{a.task=I?a.task:void 0,W?f.put(`query/${W}`,a).then(()=>Z.push("/queries")):f.post("query",a).then(()=>Z.push("/queries"))},N=()=>{const a=Q("sql"),k=Q("database");if(!a)return C("Query cannot be empty!");if(Q("hsm")=="select")return C("Select a HSM");C(""),A(!0),H(!0),f.post("run",{query:a,database:k}).then(m=>{if(A(!1),m.data.status!=="Erro"){if(!m.data[0].hasOwnProperty("phone"))return C('A "phone" column is required!');if(!m.data[0].hasOwnProperty("company"))return C('A "company" column is required!');if(!m.data[0].hasOwnProperty("body_args")&&_)return C('A "body_args" column is required!');H(!1);let ce=[],le=1;for(let re in m.data[0])ce.push(e("th",{children:re},le)),le++;let se=[];for(let re of m.data){let he=[],pe=1;for(let me in re)he.push(e("td",{children:re[me]},pe)),pe++;se.push(e("tr",{children:he}))}O(e(pn,{children:t(hn,{children:[e("thead",{children:e("tr",{children:ce})}),e("tbody",{children:se})]})}))}else C(m.data.message)})},l=a=>{const k=a.target.value;w(k),d(o),f.get(`/templates/${k}`).then(m=>y(m.data))},$=a=>{const k=a.target.value;H(!0),f.get(`/templates/${s}/${k}`).then(m=>{var ce,le,se,re,he,pe,me,Be,Ne;m.data.body.args?ee(!0):ee(!1),((ce=m.data.header)==null?void 0:ce.format)==="DOCUMENT"?P(!0):P(!1),ne(e(Sn,{body:m.data.body,header:(le=m.data)==null?void 0:le.header,footer:(se=m.data)==null?void 0:se.footer,buttons:(re=m.data)==null?void 0:re.buttons})),J(t(D,{children:[e(ue,{children:"Variables"}),((he=m.data)==null?void 0:he.header)?t(Te,{active:(pe=m.data.header)==null?void 0:pe.args,children:["Header"," ",e("span",{children:((me=m.data.header)==null?void 0:me.args)?`${(Be=m.data.header)==null?void 0:Be.format}`:""})]}):"",t(Te,{active:m.data.body.args,children:["Body"," ",e("span",{children:m.data.body.args?m.data.body.args:""})]}),(Ne=m.data.buttons)==null?void 0:Ne.data.map(De=>t(Te,{active:De.variable,children:["Button ",e("span",{children:De.variable?De.type:""})]}))]})),H(!0)})},i=t(oe,{style:{paddingTop:20},children:[e(ue,{children:"Task for document"}),e(Se,v(h({},V("task")),{style:{width:"200px",height:40},children:c.data.map(a=>e("option",{value:a,children:a},a))}))]});return e(on,{children:t(ln,{onSubmit:R(p),children:[t(an,{children:[t("div",{children:[e(cn,v(h({placeholder:"New query"},V("name")),{length:Q("name")?Q("name").length:12,required:!0})),e(Le,{disabled:M,children:"Save"}),e(bn,{children:M?"Run to verify and save":""})]}),e(xe,{to:"/queries",children:e(Le,{children:"\u21A9 Back"})})]}),t(de,{children:[e(oe,{children:e(dn,v(h({},V("sql")),{onChange:()=>H(!0)}))}),t(oe,{children:[t(de,{children:[t(oe,{style:{width:"150px"},children:[e(ue,{children:"Database"}),e(Se,v(h({},V("database")),{children:g.map(a=>e("option",{value:a.id,children:a.name},a.id))}))]}),t(oe,{style:{width:"230px"},children:[t(de,{style:{marginTop:0},children:[e(ue,{children:"HSM"}),e(Se,{className:"discret",onChange:l,children:o.map(a=>e("option",{value:a.company,children:a.company},a.id))})]}),t(Se,v(h({},V("hsm")),{onChange:$,children:[e("option",{value:"select",children:"Select..."},"select"),T==null?void 0:T.templates.sort().map((a,k)=>e("option",{value:a,children:a},k))]}))]}),e(oe,{children:U})]}),t(de,{children:[F,t(oe,{children:[t(de,{style:{flexWrap:"nowrap"},children:[e(sn,v(h({type:"checkbox"},V("once_time")),{style:{width:30,marginTop:8}})),e(ue,{children:"Send only once"})]}),I?i:null]})]}),u,t(de,{children:[e(Le,{type:"button",bgcolor:"lightblue",color:"darkblue",style:{marginTop:20,paddingLeft:30,paddingRight:30,minWidth:120,minHeight:50,fontSize:15},disabled:!!z,onClick:N,children:z?e(xn,{}):"\u25B6 Run"}),Y?e(un,{children:Y}):""]})]})]})]})})},Ce=n.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`,Cn=n.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    > span {
        font-size: 24px;
        font-weight: bold;
    }
`,Ue=n.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background: var(--secondary);
`,$e=n.button`
    background: ${r=>r.bgcolor?r.bgcolor:"var(--company)"};
    color: ${r=>r.color?r.color:"white"};
    padding: 10px 20px;
    border-radius: 5px;
    margin-left: 10px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    :hover {
        opacity: 0.7;
    }
`,$n=()=>{let[r,o]=x.exports.useState(!1),[d,g]=x.exports.useState(!1),[c,s]=x.exports.useState(!1),[w,T]=x.exports.useState({name:"",id:0});const{register:y,handleSubmit:F,setValue:ne}=j(),{register:U,handleSubmit:J,setValue:u}=j(),{handleSubmit:O,setValue:Y}=j(),{data:C,error:z,mutate:A}=X("dialog"),M=()=>o(!r),H=p=>{f.post("dialog",p).then(N=>{A(C),M()})},_=()=>s(!c),ee=p=>{f.put(`dialog/${p.id}`,p).then(N=>{A(C),_()})},I=p=>{for(let[N,l]of Object.entries(p))u(N,l);_()},P=()=>g(!d),V=p=>{f.delete(`dialog/${p.id}`).then(N=>{A(C),P()})},R=(p,N)=>{T({name:p,id:N}),Y("id",N),P()},B=p=>t(D,{children:[t(b,{width:"350px",children:[e(E,{children:"Company name"}),e(S,h({},p("company",{required:!0})))]}),t(b,{width:"350px",children:[e(E,{children:"Api-key"}),e(S,h({},p("api_key",{required:!0})))]}),t(b,{width:"350px",children:[e(E,{children:"Namespace"}),e(S,h({},p("namespace",{required:!0})))]}),t(b,{width:"350px",children:[e(E,{children:"Phone number"}),e(S,h({},p("phone_number",{required:!0})))]}),e(Ue,{children:e($e,{type:"submit",children:"SAVE"})})]}),Q=e(Ce,{children:e(G,{onSubmit:O(V),children:e(b,{children:t(Ue,{children:[e($e,{type:"button",onClick:P,children:"CANCEL"}),e($e,{type:"submit",style:{marginRight:15},bgcolor:"#fdaeae",color:"red",children:"DELETE"})]})})})}),W=e(Ce,{children:e(G,{onSubmit:J(ee),children:B(U)})}),Z=e(Ce,{children:e(G,{onSubmit:F(H),children:B(y)})});return C?t(Ce,{children:[t(Cn,{children:[e("span",{children:"Company"}),e($e,{onClick:M,children:"+ Company"})]}),e("div",{style:{overflow:"auto"},children:t(fe,{children:[e("thead",{children:t(ae,{children:[e(L,{children:"Company"}),e(L,{children:"Phone Number"}),e(L,{children:"Actions"})]})}),e("tbody",{children:C.map(p=>t(ae,{children:[e(q,{children:p.company}),e(q,{children:p.phone_number}),t(q,{children:[e("button",{onClick:()=>I(p),children:e(ye,{})}),e("button",{onClick:()=>R(p.company,p.id),children:e(ve,{})})]})]},p.id))})]})}),e(K,{isActive:r,header:"New company",hide:M,content:Z}),e(K,{isActive:c,header:"Edit company",hide:_,content:W}),e(K,{isActive:d,header:`Remove company "${w.name}"?`,hide:P,content:Q})]}):e(D,{})},Dn=n.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,En=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  > span {
    font-size: 24px;
    font-weight: bold;
  }
`,qn=n.input`
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
`,An=n.button`
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
`,Ln=n.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin-left: 20px;
  padding: 5px 0;
`,Tn=n(Ie)`
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
`,_n=()=>{const{register:r,handleSubmit:o,setValue:d,watch:g}=j(),{data:c,mutate:s}=X("blacklist"),w=y=>{y.number&&f.post(`blacklist/${y.number}`,{}).then(F=>{s(c),d("number","")})},T=y=>{f.delete(`blacklist/${y}`).then(F=>{s(c)})};return c?t(Dn,{children:[e(En,{children:e("span",{children:"Blacklist"})}),e("form",{onSubmit:o(w),children:t("div",{style:{margin:20},children:[e(qn,v(h({},r("number")),{type:"text",minLength:11})),e(An,{children:"+"})]})}),e("ul",{children:c.map(y=>t(Ln,{children:[y.number,e(Tn,{onClick:()=>T(y.number)})]},y.id))})]}):e(D,{children:"Loading..."})},Rn=()=>t(wt,{children:[e(te,{exact:!0,path:"/",children:e(Ft,{})}),e(te,{exact:!0,path:"/tasks",children:e(rn,{})}),e(te,{exact:!0,path:"/queries",children:e(tn,{})}),e(te,{exact:!0,path:"/query/new",children:e(We,{})}),e(te,{exact:!0,path:"/query/:id",children:e(We,{})}),e(te,{exact:!0,path:"/databases",children:e(Yt,{})}),e(te,{exact:!0,path:"/company",children:e($n,{})}),e(te,{exact:!0,path:"/blacklist",children:e(_n,{})})]});function Bn(){return t(D,{children:[e(jt,{children:e(Rn,{})}),e(Dt,{})]})}kt.render(e(St.StrictMode,{children:e(Ct,{children:e(Bn,{})})}),document.getElementById("root"));
