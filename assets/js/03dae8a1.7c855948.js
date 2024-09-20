"use strict";(self.webpackChunkfzs_docs=self.webpackChunkfzs_docs||[]).push([[9683],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=d(n),c=a,f=m["".concat(p,".").concat(c)]||m[c]||u[c]||l;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:a,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2811:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const l={sidebar_position:18},i="\u66f4\u65b0 FZS \u8f6f\u4ef6\u5305",o={unversionedId:"fzs-web-server/api/upload-agent",id:"fzs-web-server/api/upload-agent",title:"\u66f4\u65b0 FZS \u8f6f\u4ef6\u5305",description:"\u8be5\u63a5\u53e3\u7528\u4e8e\u66f4\u65b0 Web Server \u4e0a\u7684 FZS Agent \u8f6f\u4ef6\u5305\u3002",source:"@site/docs/fzs-web-server/api/upload-agent.md",sourceDirName:"fzs-web-server/api",slug:"/fzs-web-server/api/upload-agent",permalink:"/fzs-web-server/api/upload-agent",draft:!1,tags:[],version:"current",sidebarPosition:18,frontMatter:{sidebar_position:18},sidebar:"tutorialSidebar",previous:{title:"\u83b7\u53d6 FZS \u8f6f\u4ef6\u5305",permalink:"/fzs-web-server/api/agent-version"},next:{title:"\u6570\u636e\u5e93\u914d\u7f6e",permalink:"/fzs-web-server/deployement/"}},p={},d=[{value:"\u8bf7\u6c42 URI",id:"\u8bf7\u6c42-uri",level:3},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:3},{value:"\u4f7f\u7528\u6837\u4f8b",id:"\u4f7f\u7528\u6837\u4f8b",level:3},{value:"\u54cd\u5e94\u4f53\u683c\u5f0f",id:"\u54cd\u5e94\u4f53\u683c\u5f0f",level:3}],s={toc:d},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u66f4\u65b0-fzs-\u8f6f\u4ef6\u5305"},"\u66f4\u65b0 FZS \u8f6f\u4ef6\u5305"),(0,a.kt)("p",null,"\u8be5\u63a5\u53e3\u7528\u4e8e\u66f4\u65b0 Web Server \u4e0a\u7684 FZS Agent \u8f6f\u4ef6\u5305\u3002"),(0,a.kt)("h3",{id:"\u8bf7\u6c42-uri"},"\u8bf7\u6c42 URI"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"POST /upload-agent")),(0,a.kt)("h3",{id:"\u53c2\u6570\u8bf4\u660e"},"\u53c2\u6570\u8bf4\u660e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "string",\n  "filename": "string",\n  "file": "string"\n}\n')),(0,a.kt)("p",null,"\u53c2\u6570\u8bf4\u660e\u5982\u4e0b\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"name"))),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"STRING")," \u7c7b\u578b\uff0cFZS Agent ID\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"filename"))),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"STRING")," \u7c7b\u578b\uff0c\u8f6f\u4ef6\u5305\u540d\u79f0\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"file"))),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"STRING")," \u7c7b\u578b\uff0cbase64 \u5b57\u7b26\u4e32\uff0c\u8f6f\u4ef6\u5305\u7684\u5185\u5bb9\u3002")))),(0,a.kt)("h3",{id:"\u4f7f\u7528\u6837\u4f8b"},"\u4f7f\u7528\u6837\u4f8b"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u8bf7\u6c42\u5c06\u4e3a ID ",(0,a.kt)("inlineCode",{parentName:"p"},"rtORekZe")," \u7684 Agent \u66f4\u65b0\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"0131.oracle.afb6e5a2.fzs.linux.11g.web.tar.gz")," \u8f6f\u4ef6\u5305\uff0c\u66f4\u65b0\u6210\u529f\u4f1a\u8fd4\u56de\u76f8\u5e94\u4fe1\u606f\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i -X POST \\\n   -H "Content-Type:multipart/form-data" \\\n   -F "rtORekZe=@/tmp/0131.oracle.afb6e5a2.fzs.linux.11g.web.tar.gz" \\\n \'http://172.21.16.4:8981/upload-agent\'\n')),(0,a.kt)("h3",{id:"\u54cd\u5e94\u4f53\u683c\u5f0f"},"\u54cd\u5e94\u4f53\u683c\u5f0f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{ "stateCode": 0, "stateMsg": "" }\n')),(0,a.kt)("p",null,"\u53c2\u6570\u8bf4\u660e\u5982\u4e0b\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"stateCode")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"NUMBER")," \u7c7b\u578b\uff0c\u9519\u8bef\u7801\u3002",(0,a.kt)("inlineCode",{parentName:"td"},"0")," \u8868\u793a\u6210\u529f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"stateMsg")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"STRING")," \u7c7b\u578b\uff0c\u9519\u8bef\u6d88\u606f")))))}u.isMDXComponent=!0}}]);