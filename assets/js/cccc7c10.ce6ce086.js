"use strict";(self.webpackChunkfzs_docs=self.webpackChunkfzs_docs||[]).push([[3859],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),d=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=d(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=d(n),f=a,k=u["".concat(o,".").concat(f)]||u[f]||s[f]||l;return n?r.createElement(k,i(i({ref:t},m),{},{components:n})):r.createElement(k,i({ref:t},m))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=f;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6090:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const l={sidebar_position:11},i="\u83b7\u53d6\u94fe\u8def\u5168\u91cf\u540c\u6b65\u4fe1\u606f",p={unversionedId:"fzs-web-server/api/full-sync",id:"fzs-web-server/api/full-sync",title:"\u83b7\u53d6\u94fe\u8def\u5168\u91cf\u540c\u6b65\u4fe1\u606f",description:"\u8be5\u63a5\u53e3\u53ef\u4ee5\u83b7\u53d6 FZS Agent \u7684\u5168\u91cf\u540c\u6b65\u5b9e\u65f6\u4fe1\u606f\u3002",source:"@site/docs/fzs-web-server/api/full-sync.md",sourceDirName:"fzs-web-server/api",slug:"/fzs-web-server/api/full-sync",permalink:"/fzs-web-server/api/full-sync",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"\u83b7\u53d6 FZS \u8f6f\u4ef6\u8def\u5f84",permalink:"/fzs-web-server/api/run-path"},next:{title:"\u83b7\u53d6\u6570\u636e\u94fe\u8def\u589e\u91cf\u5ef6\u65f6",permalink:"/fzs-web-server/api/delay"}},o={},d=[{value:"\u8bf7\u6c42 URI",id:"\u8bf7\u6c42-uri",level:3},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:3},{value:"\u4f7f\u7528\u6837\u4f8b",id:"\u4f7f\u7528\u6837\u4f8b",level:3},{value:"\u54cd\u5e94\u4f53\u683c\u5f0f",id:"\u54cd\u5e94\u4f53\u683c\u5f0f",level:3}],m={toc:d},u="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u83b7\u53d6\u94fe\u8def\u5168\u91cf\u540c\u6b65\u4fe1\u606f"},"\u83b7\u53d6\u94fe\u8def\u5168\u91cf\u540c\u6b65\u4fe1\u606f"),(0,a.kt)("p",null,"\u8be5\u63a5\u53e3\u53ef\u4ee5\u83b7\u53d6 FZS Agent \u7684\u5168\u91cf\u540c\u6b65\u5b9e\u65f6\u4fe1\u606f\u3002"),(0,a.kt)("h3",{id:"\u8bf7\u6c42-uri"},"\u8bf7\u6c42 URI"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"POST /full-sync")),(0,a.kt)("h3",{id:"\u53c2\u6570\u8bf4\u660e"},"\u53c2\u6570\u8bf4\u660e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "string"\n}\n')),(0,a.kt)("p",null,"\u53c2\u6570\u8bf4\u660e\u5982\u4e0b\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"id"))),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"STRING")," \u7c7b\u578b\uff0cFZS Agent ID\u3002")))),(0,a.kt)("h3",{id:"\u4f7f\u7528\u6837\u4f8b"},"\u4f7f\u7528\u6837\u4f8b"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u8bf7\u6c42\u4f1a\u83b7\u53d6 ID \u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"8AouMB")," \u7684 FZS Agent \u7684\u5168\u91cf\u4fe1\u606f\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i -X POST \\\n   -H "Content-Type:application/json" \\\n   -d \\\n\'{\n  "id": "8AouMB"\n}\' \\\n \'http://172.21.16.4:48081/full-sync\'\n')),(0,a.kt)("h3",{id:"\u54cd\u5e94\u4f53\u683c\u5f0f"},"\u54cd\u5e94\u4f53\u683c\u5f0f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "8AouMB",\n  "checkPoint": 1699335671,\n  "startTime": null,\n  "endTime": null,\n  "fullStart": 1699330259,\n  "fullEnd": 1699330280,\n  "fullTotalCnt": 24,\n  "fullFinishCnt": 24\n}\n')),(0,a.kt)("p",null,"\u53c2\u6570\u8bf4\u660e\u5982\u4e0b\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"id")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"STRING")," \u7c7b\u578b\uff0cFZS Agent ID\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"checkPoint")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"NUMBER")," \u7c7b\u578b\uff0c\u5f53\u524d\u68c0\u67e5\u70b9 ",(0,a.kt)("inlineCode",{parentName:"td"},"unix")," \u65f6\u95f4\u6233")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"startTime")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"NUMBER")," \u7c7b\u578b\uff0c\u67e5\u8be2\u8d77\u59cb\u65f6\u95f4 ",(0,a.kt)("inlineCode",{parentName:"td"},"unix")," \u65f6\u95f4\u6233")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"endTime")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"NUMBER")," \u7c7b\u578b\uff0c\u67e5\u8be2\u7ed3\u675f\u65f6\u95f4 ",(0,a.kt)("inlineCode",{parentName:"td"},"unix")," \u65f6\u95f4\u6233")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"fullStart")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"NUMBER")," \u7c7b\u578b\uff0c\u5168\u91cf\u5f00\u59cb\u65f6\u95f4 ",(0,a.kt)("inlineCode",{parentName:"td"},"unix")," \u65f6\u95f4\u6233")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"fullEnd")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"NUMBER")," \u7c7b\u578b\uff0c\u5168\u91cf\u7ed3\u675f\u65f6\u95f4 ",(0,a.kt)("inlineCode",{parentName:"td"},"unix")," \u65f6\u95f4\u6233")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"fullTotalCnt")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"NUMBER")," \u7c7b\u578b\uff0c\u5168\u91cf\u603b\u8ba1\u884c\u6570\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"fullFinishCnt")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"NUMBER")," \u7c7b\u578b\uff0c\u5168\u91cf\u5b8c\u6210\u884c\u6570\u3002")))))}s.isMDXComponent=!0}}]);