"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[970],{830:function(e,n,t){t.d(n,{Bt:function(){return l},Hq:function(){return p},m4:function(){return s},ss:function(){return o},y:function(){return u}});var r=t(861),a=t(757),i=t.n(a),c=t(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var o=function(){var e=(0,r.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/trending/movie/day".concat("?api_key=5be1c9c05ef299ccfab1d8ad724f7561"),{headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YmUxYzljMDVlZjI5OWNjZmFiMWQ4YWQ3MjRmNzU2MSIsInN1YiI6IjY1Mzc4OTQ2MWY3NDhiMDBhZTEyZTE2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p_ieqSURgaK9kCC0WXwowgoFGd8OI5KgBv1Xli0uCL4"}});case 3:return n=e.sent,e.abrupt("return",n.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("movie/".concat(n,"?language=en-US"),{headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YmUxYzljMDVlZjI5OWNjZmFiMWQ4YWQ3MjRmNzU2MSIsInN1YiI6IjY1Mzc4OTQ2MWY3NDhiMDBhZTEyZTE2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p_ieqSURgaK9kCC0WXwowgoFGd8OI5KgBv1Xli0uCL4"}});case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/movie/".concat(n,"/credits?language=en-US"),{headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YmUxYzljMDVlZjI5OWNjZmFiMWQ4YWQ3MjRmNzU2MSIsInN1YiI6IjY1Mzc4OTQ2MWY3NDhiMDBhZTEyZTE2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p_ieqSURgaK9kCC0WXwowgoFGd8OI5KgBv1Xli0uCL4"}});case 3:return t=e.sent,e.abrupt("return",t.data.cast);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/movie/".concat(n,"/reviews?language=en-US&page=1"),{headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YmUxYzljMDVlZjI5OWNjZmFiMWQ4YWQ3MjRmNzU2MSIsInN1YiI6IjY1Mzc4OTQ2MWY3NDhiMDBhZTEyZTE2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p_ieqSURgaK9kCC0WXwowgoFGd8OI5KgBv1Xli0uCL4"}});case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r,a=arguments;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>1&&void 0!==a[1]?a[1]:1,e.prev=1,e.next=4,c.Z.get("search/movie?query=".concat(n,"&include_adult=false&language=en-US&page=").concat(t),{headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjZjZmM3NjljMjA1N2IwMGY5YzQxNDgxZTE0Zjk1ZiIsInN1YiI6IjY0OWIwYzQxMGU1YWJhMDEzOWRlOThhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RgrZWZjw6R6HE8zHjFBAbKz3jQPlE2t--sCg4ktddXs"}});case 4:return r=e.sent,e.abrupt("return",r.data);case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(n){return e.apply(this,arguments)}}()},970:function(e,n,t){t.r(n),t.d(n,{default:function(){return w}});var r,a,i,c,o,s=t(861),u=t(439),l=t(757),p=t.n(l),h=t(791),f=t(830),d=t(689),I=t(168),Z=t(867),g=t(87),j=Z.ZP.img(r||(r=(0,I.Z)(["\n  width: 100%;\n  height: 100%;\n"]))),v=(0,Z.ZP)(g.rU)(a||(a=(0,I.Z)(["\n  display: inline-block;\n  width: 100%;\n  height: 100%;\n"]))),m=Z.ZP.ul(i||(i=(0,I.Z)(["\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  justify-content: space-evenly;\n"]))),x=Z.ZP.li(c||(c=(0,I.Z)(["\n  width: 300px;\n  height: 450px;\n  list-style: none;\n  border-radius: 10px;\n  border: 3px solid #fff;\n  overflow: hidden;\n"]))),y=t(184),J=function(e){var n=e.elements,t=(0,d.TH)();return(0,y.jsx)(m,{children:n.map((function(e){return(0,y.jsx)(x,{children:(0,y.jsx)(v,{to:"/movies/"+e.id,state:{from:t},children:(0,y.jsx)(j,{src:"https://image.tmdb.org/t/p/w300"+e.poster_path,alt:e.title})})},e.id)}))})},W=Z.ZP.p(o||(o=(0,I.Z)(["\n  margin: 0;\n  padding: 0;\n  margin-bottom: 20px;\n  text-align: center;\n  font-size: 24px;\n  font-weight: bold;\n  color: var(--iq-title-text);\n  font-family: Roboto, sans-serif;\n"]))),w=function(){var e=(0,h.useState)([]),n=(0,u.Z)(e,2),t=n[0],r=n[1];return(0,h.useEffect)((function(){var e=function(){var e=(0,s.Z)(p().mark((function e(){var n;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,f.ss)();case 3:(n=e.sent).length&&r(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(W,{children:"Trending today"}),(0,y.jsx)(J,{elements:t})]})}}}]);
//# sourceMappingURL=970.f4ad74ae.chunk.js.map