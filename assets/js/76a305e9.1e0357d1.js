"use strict";(self.webpackChunkfzs_docs=self.webpackChunkfzs_docs||[]).push([[6405],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,m=d["".concat(p,".").concat(f)]||d[f]||s[f]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6811:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:5},i="\u6570\u636e\u5e93\u53ef\u7528\u6027\u6821\u9a8c",l={unversionedId:"fzs-web/manual/data-node/ping-db",id:"fzs-web/manual/data-node/ping-db",title:"\u6570\u636e\u5e93\u53ef\u7528\u6027\u6821\u9a8c",description:"\u529f\u80fd\u6982\u8ff0",source:"@site/docs/fzs-web/manual/data-node/ping-db.md",sourceDirName:"fzs-web/manual/data-node",slug:"/fzs-web/manual/data-node/ping-db",permalink:"/fzs-web/manual/data-node/ping-db",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Web Server \u8fde\u901a\u6027\u6821\u9a8c",permalink:"/fzs-web/manual/data-node/ping-webserver"},next:{title:"\u6570\u636e\u94fe\u8def",permalink:"/fzs-web/manual/data-link/"}},p={},c=[{value:"\u529f\u80fd\u6982\u8ff0",id:"\u529f\u80fd\u6982\u8ff0",level:3},{value:"\u64cd\u4f5c\u6b65\u9aa4",id:"\u64cd\u4f5c\u6b65\u9aa4",level:3}],u={toc:c},d="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6570\u636e\u5e93\u53ef\u7528\u6027\u6821\u9a8c"},"\u6570\u636e\u5e93\u53ef\u7528\u6027\u6821\u9a8c"),(0,a.kt)("h3",{id:"\u529f\u80fd\u6982\u8ff0"},"\u529f\u80fd\u6982\u8ff0"),(0,a.kt)("p",null,"\u5feb\u901f\u7684\u9a8c\u8bc1\u6570\u636e\u5e93\u7684\u8fde\u63a5\u72b6\u6001\u53ca\u6743\u9650\u9a8c\u8bc1\u3002"),(0,a.kt)("h3",{id:"\u64cd\u4f5c\u6b65\u9aa4"},"\u64cd\u4f5c\u6b65\u9aa4"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5728\u6570\u636e\u8282\u70b9\u8be6\u60c5\u754c\u9762\uff0c\u70b9\u51fb\u8282\u70b9\u64cd\u4f5c\u6309\u94ae\uff0c\u70b9\u51fb\u83dc\u5355\u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"\u53ef\u7528\u6027"),"\uff0c\u9009\u62e9\u6e90\u7aef\u6216\u8005\u5907\u7aef\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u70b9\u51fb\u540e\u5c06\u4f1a\u9a8c\u8bc1\u5f53\u524d\u6570\u636e\u5e93\u7684\u6743\u9650\u662f\u5426\u6ee1\u8db3\u5f53\u524d\u8282\u70b9\u4f5c\u4e3a\u6e90\u7aef\u6216\u8005\u5907\u7aef\u7684\u8981\u6c42\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5982\u679c\u51fa\u73b0 ",(0,a.kt)("inlineCode",{parentName:"p"},"\u8fde\u63a5\u6210\u529f")," \u7684\u63d0\u793a\uff0c\u8bf4\u660e\u6570\u636e\u5e93\u6743\u9650\u6ee1\u8db3\u5f53\u524d\u8282\u70b9\u4f5c\u4e3a\u6e90\u7aef\u6216\u8005\u5907\u7aef\u7684\u8981\u6c42\uff0c\u5426\u5219\u5c06\u4f1a\u663e\u793a\u8fde\u63a5\u5931\u8d25\u7684\u539f\u56e0\u3002"))),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u6570\u636e\u5e93\u53ef\u7528\u6027\u6821\u9a8c\u5206\u4e3a\u4e24\u79cd\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"\u6e90\u7aef")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"\u5907\u7aef"),"\uff0c\u56e0\u4e3a\u5728\u6570\u636e\u94fe\u8def\u4e2d\uff0c\u8be5\u8282\u70b9\u4f5c\u4e3a\u6e90\u7aef\u548c\u5907\u7aef\u65f6\u6240\u9700\u7684\u6570\u636e\u5e93\u6743\u9650\u53ef\u80fd\u4e0d\u540c\uff0c\u6240\u4ee5\u9700\u8981\u5206\u522b\u8fdb\u884c\u9a8c\u8bc1\u3002")))}s.isMDXComponent=!0}}]);