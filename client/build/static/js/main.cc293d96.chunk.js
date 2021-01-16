(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{151:function(e,t,a){},152:function(e,t,a){},242:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a(0),c=a.n(r),s=a(22),i=a.n(s),l=(a(151),a(152),a(153),a(99)),o=a(19);var u=function(){return Object(n.jsxs)("div",{className:"about-page",children:[Object(n.jsx)("h1",{children:"About"}),Object(n.jsxs)("p",{children:[Object(n.jsx)("b",{children:"Egami"})," is an image repository application where users can upload and view pictures."]})]})},j=a(27),d=a.n(j),p=a(40),b=a(28),m=a(244),h=a(245);var O=function(e){var t=e.image,a=e.index,c=Object(r.useState)(!1),s=Object(b.a)(c,2),i=s[0],l=s[1];return Object(n.jsxs)("div",{className:"gallery-img-div",onMouseEnter:function(){return l(!0)},onMouseLeave:function(){return l(!1)},children:[Object(n.jsx)("img",{className:"gallery-img",alt:t.title,src:t.cloudURL},"gallery-img-"+a),Object(n.jsxs)("div",{className:"img-meta",children:[Object(n.jsx)("p",{className:"img-title",children:i?t.title:""}),Object(n.jsx)("p",{className:"img-author",children:i?t.author:""})]})]},"gallery-img-div-"+a)},x=a(92),g=a.n(x),f=a(143),v="http://localhost:5000",y=Object(r.createContext)(),w=function(e){var t=e.children,a=Object(r.useState)(null),c=Object(b.a)(a,2),s=c[0],i=c[1],l=Object(r.useState)(null),o=Object(b.a)(l,2),u=o[0],j=o[1],m=Object(r.useState)(!1),h=Object(b.a)(m,2),O=h[0],x=h[1],w=function(e){localStorage.setItem("token",e.token),localStorage.setItem("user",JSON.stringify(e.user)),i(e.token),j(e.user)};return Object(r.useEffect)((function(){!function(){var e=localStorage.getItem("token"),t=JSON.parse(localStorage.getItem("user"));e&&t&&(i(e),j(t))}()}),[]),Object(n.jsx)(y.Provider,{value:{token:s,user:u,setToken:i,setUser:j,uploadVisible:O,setUploadVisible:x,fetchImages:function(){var e=Object(p.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get(v+"/api/image/get");case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:return e.prev=7,e.t0=e.catch(0),console.log(e.t0.message),f.a.error({message:"Something went wrong",description:"Unable to fetch images from server.",placement:"bottomLeft"}),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),uploadImage:function(){var e=Object(p.a)(d.a.mark((function e(t,a){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new FormData).append("upload",a),Object.keys(t).map((function(e){return n.append(e,t[e])})),e.prev=3,e.next=6,g.a.post(v+"/api/image/create",n,{headers:{"Content-Type":"multipart/form-data",token:s}});case 6:f.a.success({message:"File Upload Success",placement:"bottomLeft"}),window.location.reload(!1),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(3),console.log(e.t0.response.data),f.a.error({message:"File Upload Error",description:"Unable to upload image.",placement:"bottomLeft"});case 14:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t,a){return e.apply(this,arguments)}}(),authenticate:function(){var e=Object(p.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.post(v+"/api/user/"+t.authType,t);case 3:a=e.sent,w(a.data),f.a.success({message:"Welcome "+a.data.user.name,placement:"bottomLeft"}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.response.data.message),f.a.error({message:"Authentication Error",description:e.t0.response.data.message,placement:"bottomLeft"});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),logout:function(){j(null),i(null),localStorage.clear()}},children:t})};var k=function(){var e=Object(r.useContext)(y).fetchImages,t=Object(r.useState)(null),a=Object(b.a)(t,2),c=a[0],s=a[1];Object(r.useEffect)((function(){c||i()}),[c]);var i=function(){var t=Object(p.a)(d.a.mark((function t(){var a,n,r,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:for(a=t.sent,n=[],r=0,c=0;c<3;c++)n.push([]);a.map((function(e,t){n[r++].push(e),3===r&&(r=0)})),s(n);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return c?Object(n.jsx)(m.a,{children:c.map((function(e,t){return Object(n.jsx)(h.a,{span:8,children:e.map((function(e,t){return Object(n.jsx)(O,{image:e,index:t},"gal-img"+t)}))},"col-".concat(t))}))}):Object(n.jsx)("div",{})};var N=function(){return Object(n.jsx)(m.a,{className:"hero",children:Object(n.jsxs)(h.a,{className:"hero-text",sm:24,md:12,children:[Object(n.jsx)("p",{className:"hero-title",children:"Upload and browse stunning images."}),Object(n.jsx)("p",{className:"hero-desc",children:"Developed by Shrish Mohapatra for the Summer 2021 Shopify Developer Intern Challenge."})]})})},S=function(e){return Object(n.jsxs)(o.c,{children:[Object(n.jsx)(o.a,{exact:!0,path:"/",component:function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(N,{}),Object(n.jsx)(k,{})]})}}),Object(n.jsx)(o.a,{path:"/home",component:function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(N,{}),Object(n.jsx)(k,{})]})}}),Object(n.jsx)(o.a,{path:"/about",component:u})]})},C=a(41),I=a(104),F=a(247),L=a(248),P=a(250),T=a(249),U=a(251),E=a(252),D=a(253);var q=function(e){var t=e.visible,a=e.authType,c=e.handleOk,s=e.handleCancel,i=Object(r.useState)("login"),l=Object(b.a)(i,2),o=l[0],u=l[1],j=Object(r.useContext)(y).authenticate,m=Object(r.useRef)();Object(r.useEffect)((function(){a!==o&&u(a)}),[a,t]);var h=function(){var e=Object(p.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=m.current.getFieldsValue(),e.next=3,j(Object(I.a)(Object(I.a)({},t),{},{authType:a}));case 3:m.current.resetFields(),c();case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O={login:Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:"Login"}),Object(n.jsx)("p",{children:"Login using credentials entered during registration."}),Object(n.jsxs)(F.a,{onFinish:h,ref:m,children:[Object(n.jsx)(F.a.Item,{name:"email",rules:[{required:!0,message:"Please input email."}],children:Object(n.jsx)(L.a,{id:"email",prefix:Object(n.jsx)(U.a,{}),placeholder:"Email"})}),Object(n.jsx)(F.a.Item,{name:"password",rules:[{required:!0,message:"Please input password."}],children:Object(n.jsx)(L.a,{id:"password",prefix:Object(n.jsx)(E.a,{}),placeholder:"Password",type:"password"})}),Object(n.jsxs)(F.a.Item,{children:[Object(n.jsx)(F.a.Item,{style:{float:"left"},noStyle:!0,children:Object(n.jsx)(P.a,{id:"remember",children:"Remember me"})}),Object(n.jsx)("a",{href:"/",style:{float:"right"},children:"Forgot Password?"})]}),Object(n.jsx)(C.a,{type:"primary",htmlType:"submit",className:"auth-btn",block:!0,children:"Login"}),Object(n.jsx)("div",{style:{textAlign:"center"},children:Object(n.jsxs)("span",{children:["Don't have an account?",Object(n.jsx)("a",{onClick:function(){return u("signup")},children:" Signup"})]})})]})]}),signup:Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:"Signup"}),Object(n.jsx)("p",{children:"Create an account to start uploading your own images."}),Object(n.jsxs)(F.a,{onFinish:h,ref:m,children:[Object(n.jsx)(F.a.Item,{name:"name",rules:[{required:!0,message:"Please input a name."}],children:Object(n.jsx)(L.a,{id:"name",prefix:Object(n.jsx)(D.a,{}),placeholder:"Name"})}),Object(n.jsx)(F.a.Item,{name:"email",rules:[{required:!0,message:"Please input email."}],children:Object(n.jsx)(L.a,{id:"email",prefix:Object(n.jsx)(U.a,{}),placeholder:"Email"})}),Object(n.jsx)(F.a.Item,{name:"password",rules:[{required:!0,message:"Please input password."}],children:Object(n.jsx)(L.a,{id:"password",prefix:Object(n.jsx)(E.a,{}),placeholder:"Password",type:"password"})}),Object(n.jsx)(F.a.Item,{name:"confirm_password",rules:[{required:!0,message:"Please confirm password."}],children:Object(n.jsx)(L.a,{id:"confirm_password",prefix:Object(n.jsx)(E.a,{}),placeholder:"Confirm Password",type:"password"})}),Object(n.jsx)(C.a,{type:"primary",htmlType:"submit",className:"auth-btn",block:!0,children:"Signup"}),Object(n.jsx)("div",{style:{textAlign:"center"},children:Object(n.jsxs)("span",{children:["Already have an account?",Object(n.jsx)("a",{onClick:function(){return u("login")},children:" Login"})]})})]})]})};return Object(n.jsx)(T.a,{visible:t,onOk:c,onCancel:s,footer:null,className:"auth-modal",width:400,children:O[o]})};var A=function(){var e=Object(r.useState)(!1),t=Object(b.a)(e,2),a=t[0],c=t[1],s=Object(r.useState)("signup"),i=Object(b.a)(s,2),l=i[0],o=i[1],u=Object(r.useContext)(y),j=u.token,d=u.setUploadVisible,p=u.logout,m=function(e){o(e),c(!0)},h=function(){c(!1)};return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"header",children:[Object(n.jsx)("div",{className:"navbar-group",children:Object(n.jsx)("div",{className:"title-div",children:Object(n.jsx)("span",{className:"title",children:"egami"})})}),j?Object(n.jsxs)("div",{className:"navbtn-group",children:[Object(n.jsx)(C.a,{className:"navbtn",onClick:p,children:"Logout"}),Object(n.jsx)(C.a,{className:"navbtn",type:"primary",onClick:function(){return d(!0)},children:"Upload"})]}):Object(n.jsxs)("div",{className:"navbtn-group",children:[Object(n.jsx)(C.a,{className:"navbtn",onClick:function(){return m("login")},children:"Login"}),Object(n.jsx)(C.a,{className:"navbtn",type:"primary",onClick:function(){return m("signup")},children:"Signup"})]})]}),Object(n.jsx)(q,{visible:a,authType:l,handleOk:function(){return h()},handleCancel:h})]})};var V=function(){return Object(n.jsx)("div",{className:"layout",children:Object(n.jsxs)(l.a,{children:[Object(n.jsx)(A,{}),Object(n.jsx)(S,{}),Object(n.jsx)("div",{className:"footer",children:Object(n.jsxs)("p",{children:["Developed by ",Object(n.jsx)("a",{href:"https://github.com/shrish-mohapatra",target:"_blank",children:"Shrish Mohapatra"})]})})]})})},M=a(246),R=a(254),J=M.a.Dragger;var _=function(){var e=Object(r.useContext)(y),t=e.uploadVisible,a=e.setUploadVisible,c=e.uploadImage,s=Object(r.useRef)(),i=Object(r.useState)(!1),l=Object(b.a)(i,2),o=l[0],u=l[1],j=function(){var e=Object(p.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.current.getFieldsValue(),e.next=3,c(t,o);case 3:a(!1);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.jsxs)(T.a,{visible:t,onOk:c,onCancel:function(){return a(!1)},footer:null,children:[Object(n.jsx)("h2",{children:"Upload Image"}),Object(n.jsx)("p",{children:"Showcase your images by uploading them to our cloud storage."}),Object(n.jsxs)(F.a,{onFinish:j,ref:s,children:[Object(n.jsx)(F.a.Item,{name:"title",rules:[{required:!0,message:"Please enter a title."}],children:Object(n.jsx)(L.a,{id:"title",placeholder:"Title"})}),Object(n.jsx)(F.a.Item,{name:"description",children:Object(n.jsx)(L.a.TextArea,{id:"description",placeholder:"Description",rows:3})}),Object(n.jsxs)(J,{name:"file",accept:"image/png, image/jpeg",customRequest:function(e){var t=e.file,a=e.onSuccess;u(t),a("Ok")},multiple:!1,className:"upload-field",children:[Object(n.jsx)(R.a,{}),Object(n.jsx)("p",{children:"Drag and drop your images here to upload"})]}),Object(n.jsx)(C.a,{type:"primary",htmlType:"submit",className:"auth-btn upload-btn",children:"Upload"})]})]})};var B=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)(w,{children:[Object(n.jsx)(V,{}),Object(n.jsx)(_,{})]})})},W=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,255)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))};i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(B,{})}),document.getElementById("root")),W()}},[[242,1,2]]]);
//# sourceMappingURL=main.cc293d96.chunk.js.map