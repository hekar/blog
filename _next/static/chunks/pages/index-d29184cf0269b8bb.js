(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(6270)}])},8063:function(e,t,s){"use strict";var n=s(5893),i=s(5675),r=s.n(i),a=s(7294);t.Z=function(e){var t=e.author;return"string"===typeof t?(0,n.jsx)("div",{className:"flex items-center",children:(0,n.jsx)("div",{className:"text-xl font-bold",children:t})}):t?(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)(r(),{src:t.picture,className:"w-12 h-12 rounded-full mr-4",alt:t.name}),(0,n.jsx)("div",{className:"text-xl font-bold",children:t.name})]}):(0,n.jsx)(a.Fragment,{})}},7518:function(e,t,s){"use strict";var n=s(5893);t.Z=function(e){var t=e.children;return(0,n.jsx)("div",{className:"container mx-auto px-5",children:t})}},9371:function(e,t,s){"use strict";var n=s(5893),i=s(4184),r=s.n(i),a=s(5675),c=s.n(a),l=s(1664),o=s.n(l);t.Z=function(e){var t=e.title,s=e.src,i=e.slug,a=(0,n.jsx)(c(),{src:s,alt:"Cover Image for ".concat(t),className:r()("shadow-small",{"hover:shadow-medium transition-shadow duration-200":i})});return(0,n.jsx)("div",{className:"sm:mx-0",children:i?(0,n.jsx)(o(),{as:"/posts/".concat(i),href:"/posts/[slug]",children:(0,n.jsx)("a",{"aria-label":t,children:a})}):a})}},3797:function(e,t,s){"use strict";var n=s(5893),i=s(8420),r=s(6159);t.Z=function(e){var t=e.dateString,s=(0,i.Z)(t);return(0,n.jsx)("time",{dateTime:t,children:(0,r.Z)(s,"LLLL\td, yyyy")})}},6930:function(e,t,s){"use strict";s.d(t,{Z:function(){return m}});var n=s(5893),i=s(7518),r=s(4184),a=s.n(r),c=function(e){var t=e.preview;return(0,n.jsx)("div",{className:a()("border-b",{"bg-accent-7 border-accent-7 text-white":t,"bg-accent-1 border-accent-2":!t}),children:(0,n.jsx)(i.Z,{children:(0,n.jsx)("div",{className:"py-2 text-center text-sm",children:t?(0,n.jsxs)(n.Fragment,{children:["This page is a preview."," ",(0,n.jsx)("a",{href:"/api/exit-preview",className:"underline hover:text-cyan duration-200 transition-colors",children:"Click here"})," ","to exit preview mode."]}):void 0})})})},l=function(){return(0,n.jsx)("footer",{className:"bg-accent-1 border-t border-accent-2",children:(0,n.jsx)(i.Z,{})})},o=s(9008),d=s.n(o),x=function(){return(0,n.jsxs)(d(),{children:[(0,n.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicon/apple-touch-icon.png"}),(0,n.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon/favicon-32x32.png"}),(0,n.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon/favicon-16x16.png"}),(0,n.jsx)("link",{rel:"manifest",href:"/favicon/site.webmanifest"}),(0,n.jsx)("link",{rel:"mask-icon",href:"/favicon/safari-pinned-tab.svg",color:"#000000"}),(0,n.jsx)("link",{rel:"shortcut icon",href:"/favicon/favicon.ico"}),(0,n.jsx)("meta",{name:"msapplication-TileColor",content:"#000000"}),(0,n.jsx)("meta",{name:"msapplication-config",content:"/favicon/browserconfig.xml"}),(0,n.jsx)("meta",{name:"theme-color",content:"#000"}),(0,n.jsx)("link",{rel:"alternate",type:"application/rss+xml",href:"/feed.xml"}),(0,n.jsx)("meta",{name:"description",content:"Mov Blog - Mov instructions building complete systems."}),(0,n.jsx)("meta",{property:"og:image",content:"https://og-image.vercel.app/Next.js%20Blog%20Starter%20Example.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg"})]})},m=function(e){var t=e.preview,s=e.children;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(x,{}),(0,n.jsxs)("div",{className:"min-h-screen",children:[(0,n.jsx)(c,{preview:t}),(0,n.jsx)("main",{children:s})]}),(0,n.jsx)(l,{})]})}},6270:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSG:function(){return j},default:function(){return F}});var n=s(5893),i=s(7518),r=s(8063),a=s(3797),c=s(9371),l=s(1664),o=s.n(l),d=function(e){var t=e.title,s=e.coverImage,i=e.date,l=e.excerpt,d=e.author,x=e.slug;return(0,n.jsx)(o(),{as:"/posts/".concat(x),href:"/posts/[slug]",shallow:!0,children:(0,n.jsxs)("a",{className:"focus:bg-blue-100 hover:bg-gray-100 p-4 rounded-xl",children:[s?(0,n.jsx)("div",{className:"mb-5",children:(0,n.jsx)(c.Z,{slug:x,title:t,src:s})}):void 0,(0,n.jsx)("h3",{className:"text-3xl mb-3 leading-snug",children:t}),(0,n.jsx)("div",{className:"text-lg mb-4",children:(0,n.jsx)(a.Z,{dateString:i})}),(0,n.jsx)("p",{className:"text-lg leading-relaxed",dangerouslySetInnerHTML:{__html:l}}),(0,n.jsx)(r.Z,{author:d})]})})},x=function(e){var t=e.posts;return(0,n.jsx)("section",{children:(0,n.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-1 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-24 mb-32 mt-16",children:t.map((function(e){return(0,n.jsx)(d,{title:e.title,coverImage:e.coverImage,date:e.date,author:e.author,slug:e.slug,excerpt:e.excerpt},e.slug)}))})})},m=(s(7294),s(5675)),h=s.n(m),u={src:"/blog/_next/static/media/GitHub-Mark-32px.2f403289.png",height:32,width:32,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAY1BMVEUWFBYWFBYWFBYWFBYWFBYWFBYWFBYWFBYWFBYWFBYWFBYWFBYWFBYWFBYWFBYWFBYWFBYWFBYWFBYWFBYWFBYWFBYWFBYWFBYWFBYWFBYWFBYWFBYWFBYWFBYWFBYWFBYWFBZAvHmFAAAAIHRSTlMAAQIJCgsNEBUlJy4xMnh5goSSk5qir73AztHW2d3s7h9/Ke0AAABESURBVHjaFcRbFkAgFEDRQwiVR56lcuc/Ssv+2GCDSLDgciolZUeMaP0vC1XFKshOXeOF65kaNcuNOX3byzuA2VR3jHyakAPyhuBXtwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},g=function(){return(0,n.jsxs)("section",{className:"flex-col md:flex-row flex md:items-center md:justify-between",children:[(0,n.jsxs)("div",{className:"mb-8",children:[(0,n.jsx)("h1",{className:"text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8",children:"Mov Blog"}),(0,n.jsx)("h4",{className:"md:text-left text-xl mt-2 md:pl-2",children:"Mov instructions building complete systems"})]}),(0,n.jsx)("div",{className:"text-right pr-4 md:pr-8",children:(0,n.jsx)("a",{href:"https://github.com/hekar",children:(0,n.jsx)(h(),{unoptimized:!0,src:u,width:32,height:32})})})]})},f=s(6930),p=s(9008),v=s.n(p),j=!0,F=function(e){var t=e.allPosts;return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(f.Z,{children:[(0,n.jsx)(v(),{children:(0,n.jsx)("title",{children:"Mov Blog"})}),(0,n.jsx)(i.Z,{children:(0,n.jsxs)("div",{className:"divide-y-4 divide-black-600 divide-solid",children:[(0,n.jsx)(g,{}),t.length>0&&(0,n.jsx)(x,{posts:t})]})})]})})}}},function(e){e.O(0,[34,774,888,179],(function(){return t=8312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);