(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{37:function(e,t,r){},58:function(e,t,r){},64:function(e,t,r){},66:function(e,t,r){"use strict";r.r(t);var s=r(0),n=r.n(s),a=r(18),c=r.n(a),o=(r(37),r(8)),i=r.n(o),l=r(5),u=r(11),d=r(12),b=r(2),j=r(10),p=r(1),m=r(17),h=function(e){var t=e.setAuth,r=Object(s.useState)(""),n=Object(d.a)(r,2),a=n[0],c=n[1];function o(){return(o=Object(u.a)(i.a.mark((function e(){var t,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.get("https://register-login-page.herokuapp.com/dashboard/",{headers:{token:localStorage.token}});case 3:t=e.sent,r=t.data,c(r.name),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}return Object(s.useEffect)((function(){!function(){o.apply(this,arguments)}()}),[]),Object(p.jsxs)(s.Fragment,{children:[Object(p.jsxs)("h1",{children:["Dashboard ",a]}),Object(p.jsx)("button",{className:"btn btn-primary",onClick:function(e){return function(e){e.preventDefault(),localStorage.removeItem("token"),t(!1),j.a.error("Logged out successfully")}(e)},children:"Logout"})]})},f=r(15),x=r(13),O=(r(58),r(17)),g=function(e){var t=e.setAuth,r=Object(s.useState)({email:"",password:""}),n=Object(d.a)(r,2),a=n[0],c=n[1],o=a.email,b=a.password,m=function(e){return c(Object(l.a)(Object(l.a)({},a),{},Object(f.a)({},e.target.name,e.target.value)))},h=function(){var e=Object(u.a)(i.a.mark((function e(r){var s,n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.prev=1,s={email:o,password:b},e.next=5,O.post("https://register-login-page.herokuapp.com/auth/login",s);case 5:n=e.sent,(a=n.data).token?(localStorage.setItem("token",a.token),t(!0),j.a.success("Logged in Successfully")):(t(!1),j.a.error(a)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsx)("div",{class:"container-fluid login",children:Object(p.jsx)("div",{class:"row",children:Object(p.jsx)("div",{class:"col-sm-9 col-md-7 col-lg-5 mx-auto",children:Object(p.jsx)("div",{class:"card card-signin my-5",children:Object(p.jsxs)("div",{class:"card-body",children:[Object(p.jsx)("h5",{class:"card-title text-center",children:"Sign In"}),Object(p.jsxs)("form",{class:"form-signin",onSubmit:h,children:[Object(p.jsxs)("div",{class:"form-label-group",children:[Object(p.jsx)("input",{type:"email",name:"email",value:o,onChange:function(e){return m(e)},id:"inputEmail",className:"form-control",placeholder:"Email address",required:!0,autofocus:!0}),Object(p.jsx)("label",{for:"inputEmail",children:"Email address"})]}),Object(p.jsxs)("div",{class:"form-label-group",children:[Object(p.jsx)("input",{type:"password",name:"password",value:b,onChange:function(e){return m(e)},id:"inputPassword",class:"form-control",placeholder:"Password",required:!0}),Object(p.jsx)("label",{for:"inputPassword",children:"Password"})]}),Object(p.jsx)("button",{class:"btn btn-lg btn-primary btn-block text-uppercase",type:"submit",children:"Sign in"}),Object(p.jsx)("hr",{class:"my-4"}),Object(p.jsx)(x.b,{to:"/register",style:{textDecoration:"none"},children:Object(p.jsxs)("button",{class:"btn btn-lg btn-google btn-block text-uppercase",type:"submit",children:[Object(p.jsx)("i",{class:"fab fa-google mr-2"}),"Register"]})})]})]})})})})})},v=(r(64),r(17)),w=function(e){var t=e.setAuth,r=Object(s.useState)({email:"",password:"",confirmPassword:"",name:""}),n=Object(d.a)(r,2),a=n[0],c=n[1],o=a.email,b=a.password,m=a.confirmPassword,h=a.name,O=function(e){c(Object(l.a)(Object(l.a)({},a),{},Object(f.a)({},e.target.name,e.target.value)))},g=function(){var e=Object(u.a)(i.a.mark((function e(r){var s,n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),s={email:o,password:b,confirmPassword:m,name:h},e.prev=2,e.next=5,v.post("https://register-login-page.herokuapp.com/auth/register",s);case 5:n=e.sent,(a=n.data).token?(localStorage.setItem("token",a.token),t(!0),j.a.success("Registered Successfully")):(t(!1),j.a.error(a)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsx)("div",{class:"container-fluid register",children:Object(p.jsx)("div",{class:"row",children:Object(p.jsx)("div",{class:"col-sm-9 col-md-7 col-lg-5 mx-auto",children:Object(p.jsx)("div",{class:"card card-signin my-5",children:Object(p.jsxs)("div",{class:"card-body",children:[Object(p.jsx)("h5",{class:"card-title text-center",children:"Sign Up"}),Object(p.jsxs)("form",{class:"form-signin",onSubmit:g,children:[Object(p.jsxs)("div",{class:"form-label-group",children:[Object(p.jsx)("input",{type:"email",name:"email",value:o,onChange:function(e){return O(e)},id:"inputEmail",className:"form-control",placeholder:"Email address",required:!0,autofocus:!0}),Object(p.jsx)("label",{for:"inputEmail",children:"Email address"})]}),Object(p.jsxs)("div",{class:"form-label-group",children:[Object(p.jsx)("input",{type:"password",name:"password",value:b,onChange:function(e){return O(e)},id:"inputPassword",class:"form-control",placeholder:"Password",required:!0}),Object(p.jsx)("label",{for:"inputPassword",children:"Password"})]}),Object(p.jsxs)("div",{class:"form-label-group",children:[Object(p.jsx)("input",{type:"password",name:"confirmPassword",value:m,onChange:function(e){return O(e)},id:"inputConfPassword",class:"form-control",placeholder:"Confirm Password",required:!0}),Object(p.jsx)("label",{for:"inputConfPassword",children:"Confirm Password"})]}),Object(p.jsxs)("div",{class:"form-label-group",children:[Object(p.jsx)("input",{type:"text",name:"name",value:h,onChange:function(e){return O(e)},id:"inputName",className:"form-control",placeholder:"Name",required:!0}),Object(p.jsx)("label",{for:"inputName",children:"Name"})]}),Object(p.jsx)("button",{class:"btn btn-lg btn-primary btn-block text-uppercase",type:"submit",children:"Sign Up!"}),Object(p.jsx)("hr",{class:"my-4"}),Object(p.jsx)(x.b,{to:"/login",style:{textDecoration:"none"},children:Object(p.jsxs)("button",{class:"btn btn-lg btn-google btn-block text-uppercase",type:"submit",children:[Object(p.jsx)("i",{class:"fab fa-google mr-2"}),"Sign In Instead!"]})})]})]})})})})})},y=(r(65),r(17));j.a.configure();var k=function(){var e=Object(s.useState)(!1),t=Object(d.a)(e,2),r=t[0],n=t[1],a=function(e){n(e)};function c(){return(c=Object(u.a)(i.a.mark((function e(){var t,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.get("https://register-login-page.herokuapp.com/auth/is-verify",{headers:{token:localStorage.token}});case 3:t=e.sent,r=t.data,n(!0===r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}return Object(s.useEffect)((function(){!function(){c.apply(this,arguments)}()})),Object(p.jsx)(s.Fragment,{children:Object(p.jsx)("div",{children:Object(p.jsxs)(b.d,{children:[Object(p.jsx)(b.b,{exact:!0,path:"/login",render:function(e){return r?Object(p.jsx)(b.a,{to:"/dashboard"}):Object(p.jsx)(g,Object(l.a)(Object(l.a)({},e),{},{setAuth:a}))}}),Object(p.jsx)(b.b,{exact:!0,path:"/register",render:function(e){return r?Object(p.jsx)(b.a,{to:"/dashboard"}):Object(p.jsx)(w,Object(l.a)(Object(l.a)({},e),{},{setAuth:a}))}}),Object(p.jsx)(b.b,{exact:!0,path:"/dashboard",render:function(e){return r?Object(p.jsx)(h,Object(l.a)(Object(l.a)({},e),{},{setAuth:a})):Object(p.jsx)(b.a,{to:"/login"})}})]})})})};c.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(x.a,{children:Object(p.jsx)(k,{})})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.8f78340a.chunk.js.map