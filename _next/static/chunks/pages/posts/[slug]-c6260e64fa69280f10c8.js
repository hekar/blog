_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{"/a9y":function(e,t,n){"use strict";var a=n("lwsE"),r=n("W8MJ"),l=n("7W2i"),i=n("a1gu"),o=n("Nsbk");function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=o(e);if(t){var r=o(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return i(this,n)}}var s=n("TqRt");t.__esModule=!0,t.default=void 0;var u=s(n("q1tI")),d=s(n("8Kt/")),m={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function g(e){var t=e.res,n=e.err;return{statusCode:t&&t.statusCode?t.statusCode:n?n.statusCode:404}}var f=function(e){l(n,e);var t=c(n);function n(){return a(this,n),t.apply(this,arguments)}return r(n,[{key:"render",value:function(){var e=this.props.statusCode,t=this.props.title||m[e]||"An unexpected error has occurred";return u.default.createElement("div",{style:p.error},u.default.createElement(d.default,null,u.default.createElement("title",null,e,": ",t)),u.default.createElement("div",null,u.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),e?u.default.createElement("h1",{style:p.h1},e):null,u.default.createElement("div",{style:p.desc},u.default.createElement("h2",{style:p.h2},t,"."))))}}]),n}(u.default.Component);t.default=f,f.displayName="ErrorPage",f.getInitialProps=g,f.origGetInitialProps=g;var p={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},"20a2":function(e,t,n){e.exports=n("nOHt")},GlJ9:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return R}));var a=n("q1tI"),r=n.n(a),l=n("20a2"),i=n("eomm"),o=n.n(i),c=n("pJr+"),s=n("qtBi"),u=n.n(s),d=r.a.createElement,m=function(e){var t=e.content;return d("div",{className:"max-w-2xl"},d("div",{className:u.a.markdown,dangerouslySetInnerHTML:{__html:t}}))},g=n("YFqc"),f=n.n(g),p=r.a.createElement,h=function(){var e=Object(l.useRouter)();return p("section",{className:"mb-16"},p("h2",{className:"text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-4 mt-8"},p(f.a,{href:"/"},p("a",{className:"hover:underline"},"Hekar's Log."))),p("a",{className:"hover:underline cursor-pointer",onClick:function(){return e.back()}},p("img",{className:"align-middle pt-4",src:n("OxQ/"),width:16,height:16})," ",p("span",{className:"md:text-xl"},"Articles")))},v=n("fdcT"),x=n("hJcT"),A=n("rerd"),y=r.a.createElement,E=function(e){var t=e.children;return y("h1",{className:"text-6xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left"},t)},b=r.a.createElement,k=function(e){var t=e.title,n=e.coverImage,a=e.date,l=e.author;return b(r.a.Fragment,null,b("div",{className:"max-w-2xl"},b(E,null,t),n?b("div",{className:"mb-8 md:mb-16 sm:mx-0"},b(A.a,{title:t,src:n})):void 0,b("div",{className:"block mb-6"},b(v.a,{author:null!==l&&void 0!==l?l:"Hekar Khani"})),b("div",{className:"mb-6 text-lg"},b(x.a,{dateString:a}))))},N=n("5M6V"),w=n("g4pe"),F=n.n(w),_=r.a.createElement,R=!0;t.default=function(e){var t,n,a=e.post,i=(e.morePosts,e.preview),s=Object(l.useRouter)();return s.isFallback||null!==a&&void 0!==a&&a.slug?_(N.a,{preview:i},_(c.a,null,_(h,null),s.isFallback?_(E,null,"Loading\u2026"):_(r.a.Fragment,null,_("article",{className:"mb-32"},_(F.a,null,_("title",null,a.title," | Hekar's Log"),_("meta",{property:"og:image",content:null!==(t=null===(n=a.ogImage)||void 0===n?void 0:n.url)&&void 0!==t?t:""})),_(k,{title:a.title,coverImage:a.coverImage,date:a.date,author:a.author}),_(m,{content:a.content}))))):_(o.a,{statusCode:404})}},"OxQ/":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAA5klEQVR4nO3arU1FQRgG4acFECgcipbQCELCTxXXUwOhAfoAAy3g6ABxECDgcrG7gTOTfP6dycolIiLiL7CHG9zhePKW4ezjEcvnPc+dM5Zt+QWvUxcNZJf8gtOZo0bxm/zFzFGjSF7yySePy5mjRpG85JNP3srlr2aOGkXykk8+eVzPHDWK5CW/Pnm4tWJ5ePBd/gUHUxcN5sTPF/BkZRHOFaEIFAFFQBFQBBQBRUARUAQUAUVAEVAEFAFFQBFQBBQBRcDuCPdTF01gO8Jqfot/5QxvPgJsJm+ZxiGOZo+IiIj4J7wD0YP+zREYDcYAAAAASUVORK5CYII="},ZW3T:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[slug]",function(){return n("GlJ9")}])},eomm:function(e,t,n){e.exports=n("/a9y")},qtBi:function(e,t,n){e.exports={markdown:"markdown-styles_markdown__1x9gM"}}},[["ZW3T",0,2,1,3]]]);