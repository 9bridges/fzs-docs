"use strict";(self.webpackChunkfzs_docs=self.webpackChunkfzs_docs||[]).push([[4279],{3905:(t,e,a)=>{a.d(e,{Zo:()=>N,kt:()=>g});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),m=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},N=function(t){var e=m(t.components);return n.createElement(p.Provider,{value:e},t.children)},o="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,N=d(t,["components","mdxType","originalType","parentName"]),o=m(a),f=r,g=o["".concat(p,".").concat(f)]||o[f]||k[f]||l;return a?n.createElement(g,i(i({ref:e},N),{},{components:a})):n.createElement(g,i({ref:e},N))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=f;var d={};for(var p in e)hasOwnProperty.call(e,p)&&(d[p]=e[p]);d.originalType=t,d[o]="string"==typeof t?t:r,i[1]=d;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},4550:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>d,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));const l={},i="\u6052\u751f\u7535\u5b50 LightDB",d={unversionedId:"intro/appendix/db-support/lightdb",id:"intro/appendix/db-support/lightdb",title:"\u6052\u751f\u7535\u5b50 LightDB",description:"LightDB \u662f\u6052\u751f\u7535\u5b50\u80a1\u4efd\u6709\u9650\u516c\u53f8\u7814\u53d1\u5e76\u5c06\u957f\u671f\u652f\u6301\u7684\u4e00\u6b3e\u540c\u65f6\u652f\u6301\u5728\u7ebf\u4e8b\u52a1\u5904\u7406\u4e0e\u5728\u7ebf\u5206\u6790\u5904\u7406\u7684\u878d\u5408\u578b\u5206\u5e03\u5f0f\u6570\u636e\u5e93\u4ea7\u54c1\uff0c\u5177\u5907 SQL \u517c\u5bb9\u6027\u9ad8\u3001\u5bb9\u91cf\u5f39\u6027\u4f38\u7f29\u3001\u91d1\u878d\u7ea7\u9ad8\u53ef\u7528\u3001\u73b0\u4ee3\u786c\u4ef6\u878d\u5408\u3001\u7eaf\u5185\u5b58\u8ba1\u7b97\u7b49\u6838\u5fc3\u7279\u6027\uff0c\u4e3b\u8981\u9002\u7528\u4e8e\u5bf9\u53ef\u7528\u6027\u3001\u4e00\u81f4\u6027\u8981\u6c42\u8f83\u9ad8\u7684\u7cfb\u7edf\u3002",source:"@site/docs/intro/appendix/db-support/lightdb.md",sourceDirName:"intro/appendix/db-support",slug:"/intro/appendix/db-support/lightdb",permalink:"/intro/appendix/db-support/lightdb",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"FZS \u652f\u6301\u7684\u6570\u636e\u5e93",permalink:"/intro/appendix/db-support/"},next:{title:"FZS Agent \u5168\u90e8\u53c2\u6570",permalink:"/intro/appendix/agent-config"}},p={},m=[{value:"Oracle \u81f3 LightDB \u94fe\u8def\u9002\u914d",id:"oracle-\u81f3-lightdb-\u94fe\u8def\u9002\u914d",level:2},{value:"\u540c\u6b65\u529f\u80fd\u652f\u6301",id:"\u540c\u6b65\u529f\u80fd\u652f\u6301",level:3},{value:"\u6570\u636e\u7c7b\u578b\u6620\u5c04",id:"\u6570\u636e\u7c7b\u578b\u6620\u5c04",level:3},{value:"LightDB \u5230 LightDB \u94fe\u8def\u9002\u914d",id:"lightdb-\u5230-lightdb-\u94fe\u8def\u9002\u914d",level:2}],N={toc:m},o="wrapper";function k(t){let{components:e,...a}=t;return(0,r.kt)(o,(0,n.Z)({},N,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u6052\u751f\u7535\u5b50-lightdb"},"\u6052\u751f\u7535\u5b50 LightDB"),(0,r.kt)("p",null,"LightDB \u662f\u6052\u751f\u7535\u5b50\u80a1\u4efd\u6709\u9650\u516c\u53f8\u7814\u53d1\u5e76\u5c06\u957f\u671f\u652f\u6301\u7684\u4e00\u6b3e\u540c\u65f6\u652f\u6301\u5728\u7ebf\u4e8b\u52a1\u5904\u7406\u4e0e\u5728\u7ebf\u5206\u6790\u5904\u7406\u7684\u878d\u5408\u578b\u5206\u5e03\u5f0f\u6570\u636e\u5e93\u4ea7\u54c1\uff0c\u5177\u5907 SQL \u517c\u5bb9\u6027\u9ad8\u3001\u5bb9\u91cf\u5f39\u6027\u4f38\u7f29\u3001\u91d1\u878d\u7ea7\u9ad8\u53ef\u7528\u3001\u73b0\u4ee3\u786c\u4ef6\u878d\u5408\u3001\u7eaf\u5185\u5b58\u8ba1\u7b97\u7b49\u6838\u5fc3\u7279\u6027\uff0c\u4e3b\u8981\u9002\u7528\u4e8e\u5bf9\u53ef\u7528\u6027\u3001\u4e00\u81f4\u6027\u8981\u6c42\u8f83\u9ad8\u7684\u7cfb\u7edf\u3002"),(0,r.kt)("h2",{id:"oracle-\u81f3-lightdb-\u94fe\u8def\u9002\u914d"},"Oracle \u81f3 LightDB \u94fe\u8def\u9002\u914d"),(0,r.kt)("h3",{id:"\u540c\u6b65\u529f\u80fd\u652f\u6301"},"\u540c\u6b65\u529f\u80fd\u652f\u6301"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Oracle \u5bf9\u8c61"),(0,r.kt)("th",{parentName:"tr",align:"left"},"FZS \u662f\u5426\u652f\u6301"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8868"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u652f\u6301")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5206\u533a\u8868\uff081\u30012 \u7ea7\u522b\u5206\u533a\u8868\uff09"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u652f\u6301\uff08\u4f46 1\u30012 \u7ea7\u5206\u533a\u64cd\u4f5c\uff1a\u5408\u5e76\u3001\u62c6\u5206\u3001\u4ea4\u6362\u3001\u79fb\u52a8\u5206\u533a\u3001\u91cd\u5efa\u5206\u533a\u7d22\u5f15\u3001\u54c8\u5e0c\u5206\u533a\u8868\u6dfb\u52a0\u5206\u533a\u3001\u8868\u7a7a\u95f4\u7684\u6307\u5b9a\u6682\u4e0d\u652f\u6301\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u4e34\u65f6\u8868\uff08\u4e8b\u52a1\u3001\u4f1a\u8bdd\u7ea7\uff09"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u652f\u6301")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u89c6\u56fe"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6682\u4e0d\u652f\u6301")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7269\u5316\u89c6\u56fe"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6682\u4e0d\u652f\u6301")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7d22\u5f15"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u652f\u6301")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7ea6\u675f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u652f\u6301")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5e8f\u5217"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u652f\u6301")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u540c\u4e49\u8bcd"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6682\u4e0d\u652f\u6301")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u89e6\u53d1\u5668"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6682\u4e0d\u652f\u6301")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u51fd\u6570"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6682\u4e0d\u652f\u6301")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5b58\u50a8\u8fc7\u7a0b"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6682\u4e0d\u652f\u6301")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5305"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6682\u4e0d\u652f\u6301")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Dblink"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6682\u4e0d\u652f\u6301")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"type"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u652f\u6301\uff08\u8be6\u89c1\u6570\u636e\u7c7b\u578b\u6620\u5c04\u5173\u7cfb\uff09")))),(0,r.kt)("h3",{id:"\u6570\u636e\u7c7b\u578b\u6620\u5c04"},"\u6570\u636e\u7c7b\u578b\u6620\u5c04"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Oracle \u6570\u636e\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"LightDB \u6570\u636e\u7c7b\u578b\uff08LightDB \u5185\u90e8\u6570\u636e\u7c7b\u578b\u8f6c\u6362\uff09"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"TIMESTAMP(1) WITH TIME ZONE")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"TIMESTAMP(1) WITH TIME ZONE (TIMESTAMPTZ(1))"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"INTERVAL YEAR(4) TO MONTH")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"INTERVAL YEAR TO MONTH"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"BFILE")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"BYTEA"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"NCLOB")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"TEXT"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"INTERVAL DAY(n) TO SECOND(n)")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"INTERVAL DAY TO SECOND(6)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"LONG RAW ")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"BYTEA"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"BINARY_FLOAT")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"REAL (FLOAT4)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"NCHAR")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"CHAR (BPCHAR)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"UROWID")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"OID"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"TIMESTAMP(n)")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"TIMESTAMP(n)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"BINARY_DOUBLE")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"DOUBLE PRECISION (FLOAT8)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"FLOAT")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"FLOAT8"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"TIMESTAMP(n) WITH TIME ZONE")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"TIMESTAMP(n) WITH TIME ZONE (TIMESTAAMPTZ)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"NVARCHAR2")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"NVARCHAR2"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ROWID")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"TID"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"XMLTYPE")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"BYTEA"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"BLOB")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"BYTEA"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"LONG")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"TEXT"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"CLOB")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"TEXT"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"RAW")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"BYTEA"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"DATE")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"DATE"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"CHAR")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"CHAR (BPCHAR)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"VARCHAR2")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"VARCHAR2"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"NUMBER")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"NUMERIC"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"INT")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"BIGINT (INT8)"))))),(0,r.kt)("h2",{id:"lightdb-\u5230-lightdb-\u94fe\u8def\u9002\u914d"},"LightDB \u5230 LightDB \u94fe\u8def\u9002\u914d"))}k.isMDXComponent=!0}}]);