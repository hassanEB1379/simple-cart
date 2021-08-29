(this["webpackJsonpsimple-cart"]=this["webpackJsonpsimple-cart"]||[]).push([[0],{109:function(e,t,c){},187:function(e,t,c){"use strict";c.r(t);var n,r,a=c(1),s=c.n(a),i=c(16),o=c.n(i),l=(c(109),c(23)),j=c(17),d=c(202),u=c(192),b=c(203),O=c(199),x=c(194),m=c(22),h=c(200),f=c(95),p=c(64),g=c(11),v=c(12),y=c(34),N=c.n(y),w=c(41),k=c(21),C=function(e){return new Promise((function(t,c){setTimeout((function(){t({token:Math.floor(1e3*Math.random()),info:e})}),3e3)}))},S=function(e){var t=localStorage.getItem("state");return t?JSON.parse(t)[e]:void 0},I=Object(k.b)("user/login",function(){var e=Object(w.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),F={status:"idle",isAuthenticated:!1,data:{}},T=S("user")||F,P=Object(k.c)({name:"user",initialState:T,reducers:{logout:function(e,t){return F}},extraReducers:(n={},Object(v.a)(n,I.pending,(function(e,t){e.status="loading"})),Object(v.a)(n,I.fulfilled,(function(e,t){e.status="success",e.isAuthenticated=!0,e.data=t.payload.info})),n)}),R=P.actions.logout,A=P.reducer,M=Object(k.c)({name:"orders",initialState:S("orders")||[],reducers:{addOrders:{reducer:function(e,t){e.push(t.payload)},prepare:function(e){return{payload:{id:Object(k.d)(),orderDate:(new Date).toString(),data:e}}}},clearOrders:function(){return[]}}}),B=M.actions,D=B.addOrders,$=B.clearOrders,L=M.reducer,z=c(2),H=function(){var e=Object(a.useState)(!1),t=Object(m.a)(e,2),c=t[0],n=t[1],r=Object(g.b)(),s=function(){return n(!1)};return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsxs)(O.a,{id:"account-dropdown",title:Object(z.jsx)(p.b,{color:"#fff",size:"1.5em"}),children:[Object(z.jsx)("div",{className:"nav-dropdown-item",children:Object(z.jsx)(l.b,{className:"d-block text-decoration-none text-dark w-100",to:"/orders",children:"My orders"})}),Object(z.jsx)("div",{className:"nav-dropdown-item",onClick:function(){return n(!0)},children:"Logout"})]}),Object(z.jsx)(h.a,{centered:!0,show:c,onHide:s,children:Object(z.jsxs)(h.a.Body,{children:[Object(z.jsx)("p",{children:"Are you sure you want to log out?"}),Object(z.jsx)(f.a,{className:"me-2",variant:"primary",onClick:function(){r($()),r(R())},children:"Logout"}),Object(z.jsx)(f.a,{variant:"dark",onClick:s,children:"Back"})]})})]})},J=c(193),E=[0,1e3],G={priceRange:E,categories:[]},U=Object(k.c)({name:"filter",initialState:G,reducers:{changePriceRange:function(e,t){e.priceRange=t.payload},addCategory:function(e,t){e.categories.push(t.payload)},removeCategory:function(e,t){e.categories=e.categories.filter((function(e){return e!==t.payload}))}}}),V=U.actions,Y=V.changePriceRange,_=V.addCategory,q=V.removeCategory,K=U.reducer,Q=function(e){var t=e.categories,c=Object(g.c)((function(e){return e.filter.categories})),n=Object(g.b)(),r=function(e){var t=e.target,c=t.checked,r=t.name;n(c?_(r):q(r))};return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)("h5",{className:"mb-4 fs-5",children:"categories"}),Object(z.jsx)(b.a,{style:{top:85},className:"flex-column",children:t.map((function(e,t){return Object(z.jsxs)("div",{className:"form-check fw-bold pb-3",children:[Object(z.jsx)("input",{onChange:r,checked:-1!==c.indexOf(e),name:e,id:e,className:"form-check-input",type:"checkbox"}),Object(z.jsx)("label",{htmlFor:e,children:e})]},t)}))})]})},W=c(103),X=function(){var e,t=Object(g.c)((function(e){return e.filter.priceRange})),c=Object(g.b)();return Object(z.jsxs)("div",{className:"pe-4",children:[Object(z.jsx)("h5",{className:"mb-4",children:"Price range"}),Object(z.jsx)(W.a,{allowCross:!1,min:E[0],max:E[1],marks:(e={},Object(v.a)(e,E[0],"0"),Object(v.a)(e,E[1],"1000"),e),defaultValue:E,value:t,onChange:function(e){c(Y(e))}}),Object(z.jsxs)("div",{className:"mt-5 px-3 py-2 border rounded shadow-sm d-flex justify-content-between",children:[Object(z.jsxs)("div",{className:"d-flex flex-column align-items-center",children:[Object(z.jsx)("span",{className:"fw-bold",children:"from "}),Object(z.jsxs)("span",{style:{color:"#9f9f9f"},children:[t[0]," $"]})]}),Object(z.jsxs)("div",{className:"d-flex flex-column align-items-center",children:[Object(z.jsx)("span",{className:"fw-bold",children:"to "}),Object(z.jsxs)("span",{style:{color:"#9f9f9f"},children:[t[1]," $"]})]})]})]})},Z=(c(185),["electronics","jewelery","men's clothing","women's clothing"]),ee=function(){return Object(z.jsx)("div",{style:{top:85},className:"position-sticky",children:Object(z.jsxs)("div",{className:"position-relative",children:[Object(z.jsx)("h3",{className:"mb-3",children:"filters"}),Object(z.jsx)("hr",{}),Object(z.jsx)(Q,{categories:Z}),Object(z.jsx)("hr",{}),Object(z.jsx)(X,{})]})})},te=function(){var e=Object(g.c)((function(e){return e.cart.length})),t=Object(g.c)((function(e){return e.user.isAuthenticated}));return Object(z.jsx)(d.a,{style:{height:60},sticky:"top",bg:"primary",variant:"dark",expand:"sm",children:Object(z.jsxs)(u.a,{fluid:"lg",children:[Object(z.jsxs)(b.a,{className:"me-auto",children:[Object(z.jsx)(b.a.Item,{className:"py-2",children:Object(z.jsx)(l.b,{className:"text-white text-decoration-none",to:"/",children:"Home"})}),!t&&Object(z.jsx)(b.a.Item,{className:"py-2",children:Object(z.jsx)(l.b,{className:"text-white text-decoration-none ms-3",to:"/auth/login",children:"Login"})})]}),Object(z.jsxs)(b.a,{className:"gap-3 flex-row ",children:[Object(z.jsx)(O.a,{id:"filter-dropdown",title:Object(z.jsx)("span",{className:"text-white ms-3",children:Object(z.jsx)(J.a,{size:"1.5em"})}),className:"d-lg-none",children:Object(z.jsxs)("div",{style:{width:250},className:"p-3",children:[Object(z.jsx)(Q,{categories:Z}),Object(z.jsx)("hr",{}),Object(z.jsx)(X,{})]})}),t&&Object(z.jsx)(H,{}),Object(z.jsx)(b.a.Item,{className:"d-flex align-items-center me-2",children:Object(z.jsxs)(l.b,{className:"position-relative",to:"/cart",children:[Object(z.jsx)(p.a,{color:"#fff",size:"1.5em"}),Object(z.jsx)(x.a,{style:{top:-10,right:-15},className:"position-absolute",pill:!0,bg:"danger",children:e})]})})]})]})})},ce=function(){return Object(z.jsx)("footer",{className:"bg-light py-4",children:Object(z.jsx)(u.a,{children:Object(z.jsxs)("span",{className:"fw-bold",children:["Made by"," ",Object(z.jsx)("a",{href:"https://github.com/hassanEB1379",rel:"noreferrer",target:"_blank",children:"Hassan"})]})})})},ne=c(204),re=c(99),ae=c(56),se=S("cart")||[],ie=Object(k.c)({name:"cart",initialState:se,reducers:{addToCart:function(e,t){var c=t.payload,n=c.id,r=c.count,a=e.find((function(e){return e.id===n}));a?a.count+=r:e.push(t.payload)},removeOneFromCart:function(e,t){return e.filter((function(e){return e.id!==t.payload}))},clearCart:function(e,t){return[]},countItemIncrement:function(e,t){e.find((function(e){return e.id===t.payload})).count++},countItemDecrement:function(e,t){e.find((function(e){return e.id===t.payload})).count--}}}),oe=Object(ae.a)((function(e){return e.cart}),(function(e){var t,c=0,n=Object(re.a)(e);try{for(n.s();!(t=n.n()).done;){var r=t.value;c+=r.price*r.count}}catch(a){n.e(a)}finally{n.f()}return c})),le=ie.actions,je=le.addToCart,de=le.removeOneFromCart,ue=le.clearCart,be=le.countItemIncrement,Oe=le.countItemDecrement,xe=ie.reducer,me=function(e){var t=e.count,c=void 0===t?1:t,n=e.increment,r=e.decrement;return Object(z.jsxs)("div",{className:"d-inline-flex mb-4 border rounded",children:[Object(z.jsx)(f.a,{style:{width:30},variant:"light p-2",onClick:n,children:"+"}),Object(z.jsx)("span",{style:{width:30},className:"d-flex align-items-center justify-content-center",children:c}),Object(z.jsx)(f.a,{disabled:c<=1,style:{width:30},variant:"light p-2",onClick:r,children:"-"})]})},he=function(e){var t=e.data,c=Object(g.b)();return Object(z.jsxs)(ne.a,{border:"primary",className:"gap-4 rounded mb-3",children:[Object(z.jsxs)("div",{className:"p-4 d-flex gap-4",children:[Object(z.jsx)(ne.a.Img,{style:{width:125,height:125,objectFit:"contain"},src:t.image}),Object(z.jsxs)("div",{children:[Object(z.jsx)(ne.a.Title,{children:t.title}),Object(z.jsxs)("div",{children:["count :",Object(z.jsx)(me,{count:t.count,increment:function(){c(be(t.id))},decrement:function(){c(Oe(t.id))}})]}),Object(z.jsxs)(ne.a.Text,{children:["total price : ",Math.floor(t.count*t.price)," $"]})]})]}),Object(z.jsx)(ne.a.Footer,{className:"d-flex justify-content-end",children:Object(z.jsx)(f.a,{onClick:function(){c(de(t.id))},variant:"danger",children:"Delete"})})]})},fe=c(195),pe=c(100),ge=function(){var e=Object(g.c)((function(e){return e.cart})),t=Object(g.c)(oe),c=Object(g.c)((function(e){return e.user.isAuthenticated})),n=Object(g.b)();return Object(z.jsxs)("div",{style:{top:100},className:"shadow p-3 rounded position-md-sticky mb-5",children:[Object(z.jsx)("h3",{className:"mb-5",children:e.length?"Total purchases : ".concat(Math.floor(t)," $"):"Cart is empty"}),Object(z.jsx)("div",{className:"d-flex gap-3",children:e.length?Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(f.a,{onClick:function(){c?(n(D(e)),n(ue())):alert("You must be logged in to purchase")},className:"flex-grow-1 w-50",variant:"primary",children:"Buy"}),Object(z.jsx)(f.a,{onClick:function(){n(ue())},className:"flex-grow-1 w-50",variant:"danger",children:"Clear cart"})]}):Object(z.jsx)(l.b,{to:"/",className:"flex-grow-1",children:Object(z.jsx)(f.a,{className:"w-100",variant:"primary",children:"Go to Shop"})})})]})},ve=function(){var e=Object(g.c)((function(e){return e.cart}));return Object(z.jsxs)(fe.a,{children:[Object(z.jsx)(pe.a,{xs:12,lg:4,children:Object(z.jsx)(ge,{})}),Object(z.jsx)(pe.a,{xs:12,lg:8,children:e.map((function(e){return Object(z.jsx)(he,{data:e},e.id)}))})]})},ye=c(3),Ne=function(e){var t=e.data,c=Object(a.useState)(1),n=Object(m.a)(c,2),r=n[0],s=n[1],i=Object(g.b)();return Object(z.jsxs)(ne.a,{className:"product-card",children:[Object(z.jsx)(ne.a.Img,{style:{height:200,objectFit:"contain"},className:"p-4",src:t.image}),Object(z.jsxs)(ne.a.Body,{children:[Object(z.jsx)(ne.a.Title,{style:{height:50},className:"overflow-hidden",children:t.title}),Object(z.jsxs)(ne.a.Text,{className:"mb-5",children:[t.price," $"]}),Object(z.jsx)(me,{count:r,increment:function(){s((function(e){return e+1}))},decrement:function(){s((function(e){return e-1}))}}),Object(z.jsx)(f.a,{className:"w-100",variant:"primary",onClick:function(){i(je(Object(ye.a)(Object(ye.a)({},t),{},{count:r})))},children:"Add to cart"})]})]})},we=Object(k.b)("products/fetchProducts",Object(w.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://fakestoreapi.com/products").then((function(e){return e.json()}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))),ke=Object(k.c)({name:"products",initialState:{status:"idle",error:null,data:[]},reducers:{},extraReducers:(r={},Object(v.a)(r,we.pending,(function(e,t){e.status="loading",e.error=null})),Object(v.a)(r,we.fulfilled,(function(e,t){return{status:"success",error:null,data:t.payload}})),Object(v.a)(r,we.rejected,(function(e,t){e.status="failed",e.error=t.error.message})),r)}),Ce=Object(ae.a)((function(e){return e.products.data}),(function(e){return e.filter}),(function(e,t){var c=t.priceRange,n=t.categories;return e.filter((function(e){return e.price>=Number(c[0])&&e.price<=Number(c[1])&&function(e){return!n.length||-1!==n.indexOf(e.category)}(e)}))})),Se=ke.reducer,Ie=c(196),Fe=c(101),Te=c(102),Pe=function(e){var t=e.fullPage,c=e.error,n=e.refetch,r=Object(Fe.a)("d-flex gap-3 align-items-center justify-content-center bg-white",{"position-fixed top-0 end-0 start-0 bottom-0":t}),a=Object(g.b)();return Object(z.jsx)("div",{style:{opacity:.75},className:r,children:c?Object(z.jsxs)("div",{className:"d-flex flex-column gap-4",children:[Object(z.jsx)(f.a,{onClick:function(){a(n())},variant:"primary",className:"rounded-circle",children:Object(z.jsx)(Te.a,{})}),Object(z.jsx)("span",{children:"failed"})]}):Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(Ie.a,{variant:"primary",animation:"border"}),Object(z.jsx)("span",{children:"Please wait ..."})]})})},Re=c(197),Ae=function(){var e=Object(g.c)((function(e){return e.filter})),t=e.priceRange,c=e.categories,n=Object(g.b)();return Object(z.jsxs)("div",{className:"mb-4 d-flex gap-3 align-items-center flex-wrap",children:[Object(z.jsx)("span",{className:"fs-5 fw-bold",children:"Selected filters :"}),Object(z.jsxs)(x.a,{pill:!0,bg:"success",children:[t[0],"$ - ",t[1],"$",Object(z.jsx)("span",{onClick:function(){n(Y(E))},className:"ms-2 cursor-pointer",children:Object(z.jsx)(Re.a,{})})]}),c.map((function(e,t){return Object(z.jsxs)(x.a,{pill:!0,bg:"primary",children:[e,Object(z.jsx)("span",{onClick:function(){return function(e){n(q(e))}(e)},className:"ms-2 cursor-pointer",children:Object(z.jsx)(Re.a,{})})]},t)}))]})},Me=function(){var e=Object(g.c)(Ce),t=Object(g.c)((function(e){return e.products})),c=t.error,n=t.status;return Object(z.jsxs)(fe.a,{children:[Object(z.jsx)(pe.a,{style:{zIndex:2},className:"d-none d-lg-block",xs:2,children:Object(z.jsx)(ee,{})}),Object(z.jsxs)(pe.a,{lg:10,xs:12,children:[Object(z.jsx)(Ae,{}),Object(z.jsxs)(fe.a,{className:"mx-3",children:[c&&Object(z.jsx)(Pe,{error:!0,refetch:we}),"loading"===n&&Object(z.jsx)(Pe,{}),e.map((function(e){return Object(z.jsx)(Ne,{data:e},e.id)}))]})]})]})},Be=function(){var e=Object(g.c)((function(e){return e.orders}));return Object(z.jsx)(fe.a,{children:Object(z.jsxs)(pe.a,{className:"mx-auto",xs:12,md:10,lg:8,children:[Object(z.jsx)("h2",{className:"mb-5",children:"My orders"}),e.map((function(e){return Object(z.jsxs)(ne.a,{className:"mb-3",children:[Object(z.jsxs)(ne.a.Header,{children:[Object(z.jsxs)(ne.a.Text,{children:[Object(z.jsx)("span",{className:"fw-bold",children:"id :"})," ",e.id]}),Object(z.jsxs)(ne.a.Text,{children:[Object(z.jsx)("span",{className:"fw-bold",children:"purchases date :"})," ",e.orderDate]}),Object(z.jsxs)(ne.a.Text,{children:[Object(z.jsx)("span",{className:"fw-bold",children:"arriving time :"})," ","never"]})]}),Object(z.jsxs)(ne.a.Body,{children:[Object(z.jsx)("p",{className:"fw-bolder mb-5",children:"products : "}),Object(z.jsx)("div",{className:"d-flex gap-4",children:e.data.map((function(e){return Object(z.jsx)("img",{alt:e.title,width:"80px",style:{objectFit:"contain"},src:e.image},e.id)}))})]})]},e.id)}))]})})},De=c(5),$e=["component"],Le=function(e){var t=e.component,c=Object(De.a)(e,$e),n=Object(g.c)((function(e){return e.user.isAuthenticated}));return Object(z.jsx)(j.b,Object(ye.a)(Object(ye.a)({},c),{},{render:function(e){return n?Object(z.jsx)(t,Object(ye.a)({},e)):Object(z.jsx)(j.a,{to:"/auth/login"})}}))},ze=function(){return Object(z.jsxs)("div",{style:{minHeight:"100vh"},className:"d-flex flex-column justify-content-between",children:[Object(z.jsx)(te,{}),Object(z.jsx)("main",{className:"my-5 flex-grow-1",children:Object(z.jsx)(u.a,{fluid:"lg",children:Object(z.jsxs)(j.d,{children:[Object(z.jsx)(Le,{path:"/orders",component:Be}),Object(z.jsx)(j.b,{path:"/cart",component:ve}),Object(z.jsx)(j.b,{path:"/",component:Me})]})})}),Object(z.jsx)(ce,{})]})},He=["component","restricted"],Je=function(e){var t=e.component,c=e.restricted,n=void 0!==c&&c,r=Object(De.a)(e,He),a=Object(g.c)((function(e){return e.user.isAuthenticated}));return Object(z.jsx)(j.b,Object(ye.a)(Object(ye.a)({},r),{},{render:function(e){return a&&n?Object(z.jsx)(j.a,{to:"/"}):Object(z.jsx)(t,Object(ye.a)({},e))}}))},Ee=c(201),Ge=c(198),Ue=function(){var e=Object(a.useState)(""),t=Object(m.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(""),s=Object(m.a)(r,2),i=s[0],o=s[1],l=Object(g.c)((function(e){return e.user.status})),j=Object(g.b)(),d=function(){var e=Object(w.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),"idle"!==l){e.next=4;break}return e.next=4,j(I({username:c,password:i}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(z.jsxs)(Ee.a,{onSubmit:d,className:"bg-white p-4 shadow rounded",children:[Object(z.jsxs)("h1",{className:"mb-5 text-primary d-inline-flex align-items-center gap-2 border-bottom border-4 border-primary pb-2",children:[Object(z.jsx)(Ge.a,{size:"2rem"}),"Login"]}),Object(z.jsxs)(Ee.a.Group,{className:"mb-3",controlId:"username",children:[Object(z.jsx)(Ee.a.Label,{children:"User name"}),Object(z.jsx)(Ee.a.Control,{value:c,onChange:function(e){n(e.target.value)},type:"text",placeholder:"Enter User name"})]}),Object(z.jsxs)(Ee.a.Group,{className:"mb-3",controlId:"password",children:[Object(z.jsx)(Ee.a.Label,{children:"Password"}),Object(z.jsx)(Ee.a.Control,{value:i,onChange:function(e){o(e.target.value)},type:"password",placeholder:"Password"})]}),Object(z.jsx)(f.a,{variant:"primary",type:"submit",children:"Submit"}),"loading"===l&&Object(z.jsx)(Pe,{fullPage:!0})]})},Ve=function(){return Object(z.jsx)("div",{className:"bg-light vh-100 d-flex align-items-center ",children:Object(z.jsx)(u.a,{fluid:"sm",children:Object(z.jsx)(fe.a,{className:"w-100",children:Object(z.jsx)(pe.a,{lg:6,className:"mx-auto",children:Object(z.jsxs)(j.d,{children:[Object(z.jsx)(Je,{restricted:!0,path:"/auth/login",component:Ue}),Object(z.jsx)(j.a,{from:"/auth",to:"/auth/login"})]})})})})})};var Ye=function(){return Object(z.jsx)(l.a,{children:Object(z.jsxs)(j.d,{children:[Object(z.jsx)(j.b,{path:"/auth",component:Ve}),Object(z.jsx)(j.b,{path:"/",component:ze})]})})},_e=Object(k.a)({reducer:{products:Se,cart:xe,user:A,orders:L,filter:K}});c(186);_e.dispatch(we()),_e.subscribe((function(){var e,t=_e.getState(),c=t.user,n=t.cart,r=t.orders;e={user:c,cart:n,orders:r},localStorage.setItem("state",JSON.stringify(e))})),o.a.render(Object(z.jsx)(s.a.StrictMode,{children:Object(z.jsx)(g.a,{store:_e,children:Object(z.jsx)(Ye,{})})}),document.getElementById("root"))}},[[187,1,2]]]);
//# sourceMappingURL=main.294f188c.chunk.js.map