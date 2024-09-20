"use strict";(self.webpackChunkfzs_docs=self.webpackChunkfzs_docs||[]).push([[5830],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},o="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),o=c(a),k=r,u=o["".concat(p,".").concat(k)]||o[k]||m[k]||i;return a?n.createElement(u,l(l({ref:t},d),{},{components:a})):n.createElement(u,l({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=k;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[o]="string"==typeof e?e:r,l[1]=s;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},6017:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:1},l="\u5feb\u901f\u4e0a\u624b",s={unversionedId:"quick-start/hands-on",id:"quick-start/hands-on",title:"\u5feb\u901f\u4e0a\u624b",description:"\u767b\u5f55 FZS Web",source:"@site/docs/quick-start/hands-on.md",sourceDirName:"quick-start",slug:"/quick-start/hands-on",permalink:"/quick-start/hands-on",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u8f6f\u4ef6\u5305\u90e8\u7f72",permalink:"/quick-start/deploy-fzs/binary"},next:{title:"FZS Web",permalink:"/fzs-web/"}},p={},c=[{value:"\u767b\u5f55 FZS Web",id:"\u767b\u5f55-fzs-web",level:2},{value:"\u6dfb\u52a0 Web Server",id:"\u6dfb\u52a0-web-server",level:2},{value:"\u6dfb\u52a0\u6388\u6743",id:"\u6dfb\u52a0\u6388\u6743",level:2},{value:"\u83b7\u53d6\u6388\u6743",id:"\u83b7\u53d6\u6388\u6743",level:3},{value:"\u4e0a\u4f20\u6388\u6743",id:"\u4e0a\u4f20\u6388\u6743",level:3},{value:"\u7ed1\u5b9a\u6388\u6743",id:"\u7ed1\u5b9a\u6388\u6743",level:3},{value:"\u6dfb\u52a0\u6570\u636e\u8282\u70b9",id:"\u6dfb\u52a0\u6570\u636e\u8282\u70b9",level:2},{value:"\u6dfb\u52a0\u6570\u636e\u94fe\u8def",id:"\u6dfb\u52a0\u6570\u636e\u94fe\u8def",level:2},{value:"\u521b\u5efa\u53ca\u542f\u52a8\u6570\u636e\u94fe\u8def",id:"\u521b\u5efa\u53ca\u542f\u52a8\u6570\u636e\u94fe\u8def",level:2},{value:"\u65e5\u5e38\u8fd0\u7ef4",id:"\u65e5\u5e38\u8fd0\u7ef4",level:2}],d={toc:c},o="wrapper";function m(e){let{components:t,...i}=e;return(0,r.kt)(o,(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u5feb\u901f\u4e0a\u624b"},"\u5feb\u901f\u4e0a\u624b"),(0,r.kt)("h2",{id:"\u767b\u5f55-fzs-web"},"\u767b\u5f55 FZS Web"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"login",src:a(4922).Z,width:"2560",height:"1440"})),(0,r.kt)("h2",{id:"\u6dfb\u52a0-web-server"},"\u6dfb\u52a0 Web Server"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"add-web-server",src:a(2882).Z,width:"1920",height:"936"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"submit-web-server",src:a(305).Z,width:"1920",height:"931"})),(0,r.kt)("h2",{id:"\u6dfb\u52a0\u6388\u6743"},"\u6dfb\u52a0\u6388\u6743"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"FZS \u6570\u636e\u540c\u6b65\u5e73\u53f0\u7684\u6b63\u5e38\u4f7f\u7528\uff0c\u9700\u8981\u914d\u5408\u6709\u6548\u7684\u6388\u6743\u6587\u4ef6\u3002")),(0,r.kt)("h3",{id:"\u83b7\u53d6\u6388\u6743"},"\u83b7\u53d6\u6388\u6743"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"FZS \u7684\u6388\u6743\u9700\u8981\u8054\u7cfb FZS \u7684\u4ea7\u54c1\u56e2\u961f\u83b7\u53d6\uff0c\u83b7\u53d6\u5230\u7684\u6388\u6743\u6587\u4ef6\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"license.txt"),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"qrcode",src:a(5947).Z,width:"396",height:"396"})),(0,r.kt)("h3",{id:"\u4e0a\u4f20\u6388\u6743"},"\u4e0a\u4f20\u6388\u6743"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"upload-license",src:a(6728).Z,width:"1920",height:"933"})),(0,r.kt)("h3",{id:"\u7ed1\u5b9a\u6388\u6743"},"\u7ed1\u5b9a\u6388\u6743"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"bind-license",src:a(6665).Z,width:"1920",height:"934"})),(0,r.kt)("h2",{id:"\u6dfb\u52a0\u6570\u636e\u8282\u70b9"},"\u6dfb\u52a0\u6570\u636e\u8282\u70b9"),(0,r.kt)("p",null,"\u9009\u4e2d\u6e90\u5907\u7aef\u5bf9\u5e94\u7684webserver\u914d\u7f6e\uff08\u6ce8\u610fip\u548c\u7aef\u53e3\uff09\uff0c\u6dfb\u52a0\u6570\u636e\u8282\u70b9\u540d\u79f0\uff0c\u9009\u62e9\u6570\u636e\u5e93\u7684\u7c7b\u578b\uff0c\u6dfb\u52a0\u6570\u636e\u5e93\u7684\u8fde\u63a5\u4e32\u53cafzs\u7684\u6570\u636e\u5e93\u8fde\u63a5\u7528\u6237\uff0c\u70b9\u51fb\u63d0\u4ea4"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"data-node",src:a(2661).Z,width:"2560",height:"1440"})),(0,r.kt)("h2",{id:"\u6dfb\u52a0\u6570\u636e\u94fe\u8def"},"\u6dfb\u52a0\u6570\u636e\u94fe\u8def"),(0,r.kt)("p",null,"\u70b9\u51fb\u6dfb\u52a0\u94fe\u8def\uff0c\u586b\u5199\u94fe\u8def\u540d\u79f0\uff0c\u9009\u62e9\u6e90\u5907\u7aef\u7684\u6570\u636e\u8282\u70b9\uff0c\u9009\u62e9\u76ee\u6807\u7aef\u7684\u6570\u636e\u8282\u70b9\uff0c\u70b9\u51fb\u63d0\u4ea4"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"data-link",src:a(3643).Z,width:"2568",height:"1406"})),(0,r.kt)("h2",{id:"\u521b\u5efa\u53ca\u542f\u52a8\u6570\u636e\u94fe\u8def"},"\u521b\u5efa\u53ca\u542f\u52a8\u6570\u636e\u94fe\u8def"),(0,r.kt)("p",null,"\u9996\u5148\u9009\u4e2d\u8981\u521b\u5efa\u7684\u94fe\u8def\uff0c\u70b9\u51fb\u521b\u5efa,\u94fe\u8def\u521b\u5efa\u540e\uff0c\u521b\u5efa\u6309\u94ae\u7f6e\u7070"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"create-link",src:a(7835).Z,width:"2568",height:"1406"})),(0,r.kt)("p",null,"\u4e4b\u540e\u70b9\u51fb\u542f\u52a8\u6309\u94ae\uff0c\u542f\u52a8\u94fe\u8def\u3002\u94fe\u8def\u542f\u52a8\u540e\uff0c\u94fe\u8def\u72b6\u6001\u4ece\u95f2\u7f6e\u53d8\u4e3a\u8fd0\u884c"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"start-link",src:a(3322).Z,width:"2560",height:"1440"})),(0,r.kt)("h2",{id:"\u65e5\u5e38\u8fd0\u7ef4"},"\u65e5\u5e38\u8fd0\u7ef4"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u91cd\u65b0\u5168\u540c\u6b65")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u70b9\u51fb\u505c\u6b62\u6309\u94ae\uff0c\u505c\u6b62\u94fe\u8def\uff0c\u94fe\u8def\u72b6\u6001\u53d8\u4e3a\u6682\u505c"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"stop-link",src:a(6357).Z,width:"2560",height:"1440"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u70b9\u51fb \u94fe\u8def\u64cd\u4f5c-\u91cd\u7f6e\uff0c\u91cd\u7f6e\u94fe\u8def\uff0c\u6e05\u9664\u4e0a\u6b21\u540c\u6b65\u4ea7\u751f\u6587\u4ef6\u548c\u65e5\u5fd7\u3002"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"reset-link",src:a(7458).Z,width:"2560",height:"1440"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u70b9\u51fb\u542f\u52a8\u6309\u94ae\uff0c\u542f\u52a8\u94fe\u8def\uff0c\u94fe\u8def\u72b6\u6001\u53d8\u4e3a\u8fd0\u884c\uff0c\u94fe\u8def\u5f00\u59cb\u540c\u6b65"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"start-link",src:a(3322).Z,width:"2560",height:"1440"}))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u67e5\u770b\u540c\u6b65\u65e5\u5fd7")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u9009\u4e2d\u5bf9\u5e94\u94fe\u8def\uff0c\u70b9\u51fb\u6e90\u5907\u7aef\u5206\u522b\u67e5\u770b\u65e5\u5fd7"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"log",src:a(8374).Z,width:"2560",height:"1440"}))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u5168\u540c\u6b65\u5b8c\u6210\u6807\u5fd7")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5907\u7aef\u51fa\u73b0\u88c5\u8f7d\u7ed3\u675f\u65f6\u95f4\uff0c\u8bf4\u660e\u5168\u540c\u6b65\u5b8c\u6210"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"full-sync",src:a(3278).Z,width:"2560",height:"1440"}))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u67e5\u770b\u589e\u91cf\u540c\u6b65\u7684\u72b6\u6001")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u9009\u4e2d\u5bf9\u5e94\u94fe\u8def\uff0c\u70b9\u51fb\u6e90\u5907\u7aef\u67e5\u770b\u589e\u91cf\u540c\u6b65\u72b6\u6001"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"incremental-sync",src:a(8891).Z,width:"2568",height:"1406"}))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u6570\u636e\u6bd4\u5bf9")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5728\u94fe\u8def\u8be6\u60c5\u9875\u6700\u4e0b\u65b9\u6570\u636e\u6bd4\u5bf9\u5361\u7247\uff0c\u70b9\u51fb\u6bd4\u5bf9\uff0c\u5982\u679c\u663e\u793a\u6570\u636e\u4e00\u81f4\uff0c\u5219\u4ee3\u8868\u540c\u6b65\u6b63\u5e38"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"data-compare",src:a(1020).Z,width:"2568",height:"1406"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5982\u679c\u663e\u793a\u6570\u636e\u4e0d\u4e00\u81f4\uff0c\u53ef\u70b9\u51fb\u5361\u7247\u53f3\u4e0a\u89d2\u4fee\u590d\uff0c\u5bf9\u6570\u636e\u4e0d\u4e00\u81f4\u7684\u8868\u8fdb\u884c\u4fee\u590d"),(0,r.kt)("admonition",{parentName:"li",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"\u4fee\u590d\u64cd\u4f5c\u9700\u8981\u5728\u5907\u7aef\u6ca1\u6709\u5ef6\u8fdf\u548c\u975e\u4e1a\u52a1\u671f\u95f4\u8fdb\u884c")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"data-compare-fix",src:a(2104).Z,width:"2568",height:"1406"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u70b9\u51fb\u5361\u7247\u53f3\u4e0a\u89d2\u5168\u90e8\u6570\u636e\uff0c\u67e5\u770b\u6240\u6709\u8868\u7684\u6570\u636e\u6bd4\u5bf9\u60c5\u51b5"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"all-data-compare",src:a(3423).Z,width:"2568",height:"1406"})))))))}m.isMDXComponent=!0},2882:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/add-web-server-08a09abf916f321e83ec456256efe5e7.jpg"},6665:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/bind-license-35640c7d78550603fd8d4881d2764382.jpg"},5947:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/fzs-customer-service-qrcode-28eb9a7141def67efd6dcb43c86e85d3.png"},3643:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/add-link-3445f744a57ead385d1bab2772dc154b.png"},2661:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/add-node-6c4e3b3c09fc098d8e24784aee93d0c9.png"},3423:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/all-data-compare-a53edd06fe7285fc3eeb84e6d7a9175b.png"},7835:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-link-8b63cd547b424c38f0829d0fd85abe16.png"},1020:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/data-compare-181e1992b9c99e0fc6b7ae4f7841552c.png"},2104:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/fix-6a98ed1c17ded480f79b13cf258f018f.png"},3278:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/full-sync-31215f14a94141171b66d6b16881508a.png"},8891:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/incremental-sync-4ae9975ec9e49cd563036c1cd8bfe795.png"},8374:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/log-92be39f44fd04f39d414d80d2621ad85.png"},4922:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/login-1da33012109ddabaac75bc0332c30863.png"},7458:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/reset-link-ef3b78f1c5e067a2d0e3fe491aa7aad7.png"},3322:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/start-link-5c547265214cc59e8486d829d4c23fb8.png"},6357:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/stop-link-86cf4b9c17ae20c576c6f03b96a1c3e3.png"},305:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/submit-web-server-4b26014712e44b9233794f66e6348c24.jpg"},6728:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/upload-license-04f61179e69cda9c6aa4693e01ff2758.jpg"}}]);