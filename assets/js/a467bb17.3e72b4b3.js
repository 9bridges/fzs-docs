"use strict";(self.webpackChunkfzs_docs=self.webpackChunkfzs_docs||[]).push([[861],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),f=a,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||i;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},906:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:5},o="\u542f\u52a8\u6570\u636e\u94fe\u8def",l={unversionedId:"fzs-web-server/api/start",id:"fzs-web-server/api/start",title:"\u542f\u52a8\u6570\u636e\u94fe\u8def",description:"\u8be5\u63a5\u53e3\u53ef\u4ee5\u5728\u67d0\u4e2a\u6570\u636e\u8282\u70b9\u4e0a\u542f\u52a8\u4e00\u4e2a FZS Agent\uff0c\u542f\u52a8\u6210\u529f\u4f1a\u8fd4\u56de\u76f8\u5e94\u7684\u72b6\u6001\u4fe1\u606f\u3002",source:"@site/docs/fzs-web-server/api/start.md",sourceDirName:"fzs-web-server/api",slug:"/fzs-web-server/api/start",permalink:"/fzs-web-server/api/start",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\u521b\u5efa\u6570\u636e\u94fe\u8def",permalink:"/fzs-web-server/api/create"},next:{title:"\u505c\u6b62\u6570\u636e\u94fe\u8def",permalink:"/fzs-web-server/api/stop"}},p={},s=[{value:"\u8bf7\u6c42 URI",id:"\u8bf7\u6c42-uri",level:3},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:3},{value:"\u4f7f\u7528\u6837\u4f8b",id:"\u4f7f\u7528\u6837\u4f8b",level:3},{value:"\u54cd\u5e94\u4f53\u683c\u5f0f",id:"\u54cd\u5e94\u4f53\u683c\u5f0f",level:3}],c={toc:s},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u542f\u52a8\u6570\u636e\u94fe\u8def"},"\u542f\u52a8\u6570\u636e\u94fe\u8def"),(0,a.kt)("p",null,"\u8be5\u63a5\u53e3\u53ef\u4ee5\u5728\u67d0\u4e2a\u6570\u636e\u8282\u70b9\u4e0a\u542f\u52a8\u4e00\u4e2a FZS Agent\uff0c\u542f\u52a8\u6210\u529f\u4f1a\u8fd4\u56de\u76f8\u5e94\u7684\u72b6\u6001\u4fe1\u606f\u3002"),(0,a.kt)("h3",{id:"\u8bf7\u6c42-uri"},"\u8bf7\u6c42 URI"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"POST /start")),(0,a.kt)("h3",{id:"\u53c2\u6570\u8bf4\u660e"},"\u53c2\u6570\u8bf4\u660e"),(0,a.kt)("p",null,"\u540c ",(0,a.kt)("inlineCode",{parentName:"p"},"/create")," ",(0,a.kt)("a",{parentName:"p",href:"./create/#create-params"},"\u63a5\u53e3\u53c2\u6570"),"\u3002"),(0,a.kt)("h3",{id:"\u4f7f\u7528\u6837\u4f8b"},"\u4f7f\u7528\u6837\u4f8b"),(0,a.kt)("p",null,"\u540c ",(0,a.kt)("inlineCode",{parentName:"p"},"/create")," ",(0,a.kt)("a",{parentName:"p",href:"./create/#create-usage"},"\u63a5\u53e3\u4f7f\u7528\u6837\u4f8b"),"\uff0c\u5c06\u63a5\u53e3\u8def\u5f84\u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"/create")," \u66ff\u6362\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"/start")," \u5373\u53ef\u3002"),(0,a.kt)("h3",{id:"\u54cd\u5e94\u4f53\u683c\u5f0f"},"\u54cd\u5e94\u4f53\u683c\u5f0f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{ "stateCode": 0, "stateMsg": "" }\n')),(0,a.kt)("p",null,"\u53c2\u6570\u8bf4\u660e\u5982\u4e0b\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"stateCode")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"NUMBER")," \u7c7b\u578b\uff0c\u9519\u8bef\u7801\u3002",(0,a.kt)("inlineCode",{parentName:"td"},"0")," \u8868\u793a\u6210\u529f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"stateMsg")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"STRING")," \u7c7b\u578b\uff0c\u9519\u8bef\u6d88\u606f")))))}u.isMDXComponent=!0}}]);