(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[0],{52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},56:function(e,t,n){},75:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),i=n(25),a=n.n(i),s=(n(52),n(53),n(54),n(11)),o=n.n(s),l=n(20),u=n(16),d=(n(56),n(45)),j=n.n(d).a.create({baseURL:"https://api.themoviedb.org/3"}),b="d8f10b81f263ae2a67430be3cfac795a",h={fetchTrending:"/trending/all/week?api_key=".concat(b,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(b,"&with_networks=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(b,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(b,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(b,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(b,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(b,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(b,"&with_genres=99")},f=n(3);var p=function(){var e,t,n=Object(c.useState)([]),r=Object(u.a)(n,2),i=r[0],a=r[1];return Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.get(h.fetchTrending);case 2:return t=e.sent,a(t.data.results[Math.floor(Math.random()*t.data.results.length-1)]),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),console.log(i),Object(f.jsxs)("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:'url("https://image.tmdb.org/t/p/original/'.concat(null===i||void 0===i?void 0:i.backdrop_path,'")'),backgroundPosition:"center center"},children:[Object(f.jsxs)("div",{className:"banner__contents",children:[Object(f.jsx)("h1",{className:"banner__title",children:(null===i||void 0===i?void 0:i.title)||(null===i||void 0===i?void 0:i.name)||(null===i||void 0===i?void 0:i.original_name)}),Object(f.jsxs)("div",{className:"banner__buttons",children:[Object(f.jsx)("button",{className:"banner__button",children:"Play"}),Object(f.jsx)("button",{className:"banner__button",children:"My List"})]}),Object(f.jsx)("h1",{className:"banner__description",children:(e=null===i||void 0===i?void 0:i.overview,t=150,(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e)})]}),Object(f.jsx)("div",{className:"banner--fadeBottom"})]})},m=n(9);n(75);var v=function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),n=t[0],r=t[1],i=Object(m.f)(),a=function(){window.scrollY>100?r(!0):r(!1)};return Object(c.useEffect)((function(){return window.addEventListener("scroll",a),function(){return window.removeEventListener("scroll",a)}}),[]),Object(f.jsx)("div",{className:"nav ".concat(n&&"nav__black"),children:Object(f.jsxs)("div",{className:"nav__contents",children:[Object(f.jsx)("img",{onClick:function(){return i.push("/")},className:"nav__logo",src:"https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png",alt:""}),Object(f.jsx)("img",{onClick:function(){return i.push("/profile")},className:"nav__avatar",src:"https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png",alt:""})]})})};n(80);var O=function(e){var t=e.title,n=e.fetchUrl,r=e.isLargeRow,i=void 0!==r&&r,a=Object(c.useState)([]),s=Object(u.a)(a,2),d=s[0],b=s[1];return Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.get(n);case 2:return t=e.sent,b(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("h2",{children:t}),Object(f.jsx)("div",{className:"row__posters",children:d.map((function(e){return(i&&e.poster_path||!i&&e.backdrop_path)&&Object(f.jsx)("img",{className:"row__poster ".concat(i&&"row__posterLarge"),src:"".concat("https://image.tmdb.org/t/p/original/").concat(i?e.poster_path:e.backdrop_path),alt:e.name},e.id)}))})]})};var g=function(){return Object(f.jsxs)("div",{className:"homeScreen",children:[Object(f.jsx)(v,{}),Object(f.jsx)(p,{}),Object(f.jsx)(O,{title:"NETFLIX ORIGINALS",fetchUrl:h.fetchNetflixOriginals,isLargeRow:!0}),Object(f.jsx)(O,{title:"Trending Now",fetchUrl:h.fetchTrending}),Object(f.jsx)(O,{title:"Top Rated",fetchUrl:h.fetchTopRated}),Object(f.jsx)(O,{title:"Action Movies",fetchUrl:h.fetchActionMovies}),Object(f.jsx)(O,{title:"Comedy Movies",fetchUrl:h.fetchComedyMovies}),Object(f.jsx)(O,{title:"Horror Movies",fetchUrl:h.fetchHorrorMovies}),Object(f.jsx)(O,{title:"Romance Movies",fetchUrl:h.fetchRomanceMovies}),Object(f.jsx)(O,{title:"Documentaries",fetchUrl:h.fetchDocumentaries})]})},x=n(31),_=(n(81),n(35)),w=_.a.initializeApp({apiKey:"AIzaSyBskLdBR-Ac18qW-E2mkon8_3K--QgWSJE",authDomain:"netflix-clone-f4bdc.firebaseapp.com",projectId:"netflix-clone-f4bdc",storageBucket:"netflix-clone-f4bdc.appspot.com",messagingSenderId:"928365092583",appId:"1:928365092583:web:05ede2843f726604d84c42"}).firestore(),S=_.a.auth(),k=w;n(84);var N=function(){var e=Object(c.useRef)(null),t=Object(c.useRef)(null);return Object(f.jsx)("div",{className:"signupScreen",children:Object(f.jsxs)("form",{children:[Object(f.jsx)("h1",{children:"Sign In"}),Object(f.jsx)("input",{ref:e,placeholder:"Email",type:"email"}),Object(f.jsx)("input",{ref:t,placeholder:"Password",type:"password"}),Object(f.jsx)("button",{type:"submit",onClick:function(n){n.preventDefault(),S.signInWithEmailAndPassword(e.current.value,t.current.value).then((function(e){console.log(e)})).catch((function(e){return alert(e.message)}))},children:"Sign In"}),Object(f.jsxs)("h4",{children:[Object(f.jsx)("span",{className:"signupScren__gray",children:"New to Netflix? "}),Object(f.jsx)("span",{className:"signupScreen__link",onClick:function(n){n.preventDefault(),S.createUserWithEmailAndPassword(e.current.value,t.current.value).then((function(e){console.log(e)})).catch((function(e){alert(e.message)}))},children:"Sign Up Now."})]})]})})};var y=function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),n=t[0],r=t[1];return Object(f.jsxs)("div",{className:"loginScreen",children:[Object(f.jsxs)("div",{className:"loginScreen__background",children:[Object(f.jsx)("img",{className:"loginScreen__logo",src:"https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png",alt:""}),Object(f.jsx)("button",{onClick:function(){return r(!0)},className:"loginScreen__button",children:"Sign In"}),Object(f.jsx)("div",{className:"loginScreen__gradient"})]}),Object(f.jsx)("div",{className:"loginScreen__body",children:n?Object(f.jsx)(N,{}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h1",{children:"Unlimited films, TV programs and more. "}),Object(f.jsx)("h2",{children:"Watch anywhere. Cancel at anytime. "}),Object(f.jsx)("h3",{children:"Ready to watch? Enter email to create or restart your membership."}),Object(f.jsx)("div",{className:"loginScreen__input",children:Object(f.jsxs)("form",{children:[Object(f.jsx)("input",{type:"email",placeholder:"Email Address"}),Object(f.jsx)("button",{onClick:function(){return r(!0)},className:"loginScreen__getStarted",children:"GET STARTED"})]})})]})})]})},E=n(19),I=n(27),C=Object(I.b)({name:"user",initialState:{user:null},reducers:{login:function(e,t){e.user=t.payload},logout:function(e){e.user=null}}}),M=C.actions,U=M.login,R=M.logout,L=function(e){return e.user.user},A=C.reducer,T=(n(85),n(47));var D=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],i=Object(E.c)(L),a=Object(c.useState)(null),s=Object(u.a)(a,2),d=s[0],j=s[1];Object(c.useEffect)((function(){k.collection("customers").doc(i.uid).collection("subscriptions").get().then((function(e){e.forEach(function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:j({role:t.data().role,current_period_end:t.data().current_period_end.seconds,current_period_start:t.data().current_period_start.seconds});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}))}),[i.uid]),console.log(d),Object(c.useEffect)((function(){k.collection("products").where("active","==",!0).get().then((function(e){var t={};e.forEach(function(){var e=Object(l.a)(o.a.mark((function e(n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t[n.id]=n.data(),e.next=3,n.ref.collection("prices").get();case 3:e.sent.docs.forEach((function(e){t[n.id].prices={priceId:e.id,priceData:e.data()}}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),r(t)}))}),[]),console.log(n);var b=function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.collection("customers").doc(i.uid).collection("checkout_sessions").add({price:t,success_url:window.location.origin,cancel_url:window.location.origin});case 2:e.sent.onSnapshot(function(){var e=Object(l.a)(o.a.mark((function e(t){var n,c,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.data(),c=n.error,r=n.sessionId,c&&alert("An error occured: ".concat(c.message)),!r){e.next=7;break}return e.next=5,Object(T.a)("pk_test_51IKPbMDU3tF1ZU4fYVwMJSIXY7I6bruyGUme5x99FCC3vw2hFoL70KEgosfgV7dM2voCGIcDSdhj9Rx1EC0AjLh9006B9LPVMU");case 5:e.sent.redirectToCheckout({sessionId:r});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"plansScreen",children:[Object(f.jsx)("br",{}),d&&Object(f.jsxs)("p",{children:["Renewal date:"," ",new Date(1e3*(null===d||void 0===d?void 0:d.current_period_end)).toLocaleDateString()]}),Object.entries(n).map((function(e){var t,n=Object(u.a)(e,2),c=n[0],r=n[1],i=null===(t=r.name)||void 0===t?void 0:t.toLowerCase().includes(null===d||void 0===d?void 0:d.role);return Object(f.jsxs)("div",{className:"".concat(i&&"plansScreen__plan--disabled"," plansScreen__plan"),children:[Object(f.jsxs)("div",{className:"plansScren__info",children:[Object(f.jsx)("h5",{children:r.name}),Object(f.jsx)("h6",{children:r.description})]}),Object(f.jsx)("button",{onClick:function(){return!i&&b(r.prices.priceId)},children:i?"Current Package":"Subscribe"})]},c)}))]})};n(86);var P=function(){var e=Object(E.c)(L);return Object(f.jsxs)("div",{className:"profileScreen",children:[Object(f.jsx)(v,{}),Object(f.jsxs)("div",{className:"profileScreen__body",children:[Object(f.jsx)("h1",{children:"Edit Profile"}),Object(f.jsxs)("div",{className:"profileScreen__info",children:[Object(f.jsx)("img",{src:"https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png",alt:""}),Object(f.jsxs)("div",{className:"profileScreen__details",children:[Object(f.jsx)("h2",{children:e.email}),Object(f.jsxs)("div",{className:"profileScreen__plans",children:[Object(f.jsx)("h3",{children:"Plans"}),Object(f.jsx)(D,{}),Object(f.jsx)("button",{onClick:function(){return S.signOut()},className:"profileScreen_signOut",children:"Sign Out"})]})]})]})]})]})};var B=function(){var e=Object(E.c)(L),t=Object(E.b)();return Object(c.useEffect)((function(){return S.onAuthStateChanged((function(e){t(e?U({uid:e.uid,email:e.email}):R())}))}),[]),Object(f.jsx)("div",{className:"app",children:Object(f.jsx)(x.a,{children:e?Object(f.jsxs)(m.c,{children:[Object(f.jsx)(m.a,{path:"/profile",children:Object(f.jsx)(P,{})}),Object(f.jsx)(m.a,{exact:!0,path:"/",children:Object(f.jsx)(g,{})})]}):Object(f.jsx)(y,{})})})},W=Object(I.a)({reducer:{user:A}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(E.a,{store:W,children:Object(f.jsx)(B,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[87,1,2]]]);
//# sourceMappingURL=main.17cb1f1f.chunk.js.map