"use strict";(self.webpackChunkfzs_docs=self.webpackChunkfzs_docs||[]).push([[505],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=i(n),u=a,k=d["".concat(s,".").concat(u)]||d[u]||m[u]||l;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[d]="string"==typeof e?e:a,o[1]=p;for(var i=2;i<l;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},400:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>i});var r=n(7462),a=(n(7294),n(3905));const l={sidebar_position:0},o="FZS Web \u90e8\u7f72",p={unversionedId:"deployment/web",id:"deployment/web",title:"FZS Web \u90e8\u7f72",description:"FZS Web \u63d0\u4f9b\u57fa\u4e8e Docker \u5bb9\u5668\u7684\u90e8\u7f72\u65b9\u5f0f\uff0c\u53ef\u4ee5\u5728\u4efb\u4f55\u652f\u6301 Docker \u7684\u5e73\u53f0\u4e0a\u90e8\u7f72\u3002",source:"@site/docs/deployment/web.md",sourceDirName:"deployment",slug:"/deployment/web",permalink:"/deployment/web",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/deployment/web.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"FZS \u90e8\u7f72\u65b9\u5f0f",permalink:"/deployment/"},next:{title:"FZS Web Server \u90e8\u7f72",permalink:"/deployment/web-server"}},s={},i=[{value:"\u524d\u7f6e\u6761\u4ef6",id:"\u524d\u7f6e\u6761\u4ef6",level:2},{value:"\u652f\u6301\u67b6\u6784",id:"\u652f\u6301\u67b6\u6784",level:3},{value:"\u786c\u4ef6\u8981\u6c42",id:"\u786c\u4ef6\u8981\u6c42",level:3},{value:"\u5f00\u59cb\u90e8\u7f72",id:"\u5f00\u59cb\u90e8\u7f72",level:2},{value:"\u62c9\u53d6\u955c\u50cf",id:"\u62c9\u53d6\u955c\u50cf",level:3},{value:"\u914d\u7f6e <code>docker-compose.yml</code>",id:"\u914d\u7f6e-docker-composeyml",level:3},{value:"\u542f\u52a8\u5bb9\u5668",id:"\u542f\u52a8\u5bb9\u5668",level:3},{value:"\u68c0\u9a8c\u90e8\u7f72",id:"\u68c0\u9a8c\u90e8\u7f72",level:3}],c={toc:i},d="wrapper";function m(e){let{components:t,...l}=e;return(0,a.kt)(d,(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"fzs-web-\u90e8\u7f72"},"FZS Web \u90e8\u7f72"),(0,a.kt)("p",null,"FZS Web \u63d0\u4f9b\u57fa\u4e8e Docker \u5bb9\u5668\u7684\u90e8\u7f72\u65b9\u5f0f\uff0c\u53ef\u4ee5\u5728\u4efb\u4f55\u652f\u6301 Docker \u7684\u5e73\u53f0\u4e0a\u90e8\u7f72\u3002"),(0,a.kt)("h2",{id:"\u524d\u7f6e\u6761\u4ef6"},"\u524d\u7f6e\u6761\u4ef6"),(0,a.kt)("p",null,"\u90e8\u7f72\u524d\uff0c\u8bf7\u786e\u4fdd\u5df2\u7ecf\u5b89\u88c5\u4e86 ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/"},"Docker Engine")," \u4ee5\u53ca ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/install/"},"Docker Compose"),"\uff0c\u5e76\u4e14\u5df2\u7ecf\u542f\u52a8\u4e86 Docker \u670d\u52a1\u3002"),(0,a.kt)("h3",{id:"\u652f\u6301\u67b6\u6784"},"\u652f\u6301\u67b6\u6784"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"x86_64"),(0,a.kt)("li",{parentName:"ul"},"arm64")),(0,a.kt)("h3",{id:"\u786c\u4ef6\u8981\u6c42"},"\u786c\u4ef6\u8981\u6c42"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6700\u4f4e\u914d\u7f6e\uff1a2 CPU\uff0c4 GB \u5185\u5b58\uff0c20 GB \u786c\u76d8"),(0,a.kt)("li",{parentName:"ul"},"\u63a8\u8350\u914d\u7f6e\uff1a4 CPU\uff0c8 GB \u5185\u5b58\uff0c50 GB \u786c\u76d8"),(0,a.kt)("li",{parentName:"ul"},"\u7f51\u7edc\u7aef\u53e3\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5bf9\u5916\u5f00\u653e 80 \u7aef\u53e3\uff0c\u7528\u4e8e HTTP \u8bbf\u95ee"),(0,a.kt)("li",{parentName:"ul"},"\u5bf9\u5185\u5f00\u653e\u6240\u6709\u7aef\u53e3\uff0c\u7528\u4e8e\u5185\u90e8\u901a\u4fe1")))),(0,a.kt)("h2",{id:"\u5f00\u59cb\u90e8\u7f72"},"\u5f00\u59cb\u90e8\u7f72"),(0,a.kt)("h3",{id:"\u62c9\u53d6\u955c\u50cf"},"\u62c9\u53d6\u955c\u50cf"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u62c9\u53d6 ",(0,a.kt)("inlineCode",{parentName:"li"},"fzs-web")," \u955c\u50cf\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull synjq/fzs-web:latest\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u62c9\u53d6 ",(0,a.kt)("inlineCode",{parentName:"li"},"fzs-daemon")," \u955c\u50cf\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull synjq/fzs-daemon:latest\n")),(0,a.kt)("h3",{id:"\u914d\u7f6e-docker-composeyml"},"\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"h3"},"docker-compose.yml")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u9009\u53d6\u67d0\u4e00\u4e2a\u5de5\u4f5c\u8def\u5f84\uff0c\u521b\u5efa ",(0,a.kt)("inlineCode",{parentName:"li"},"docker-compose.yml")," \u6587\u4ef6\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"touch docker-compose.yml\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u7f16\u8f91 ",(0,a.kt)("inlineCode",{parentName:"li"},"docker-compose.yml")," \u6587\u4ef6\uff0c\u586b\u5165\u4ee5\u4e0b\u5185\u5bb9\u5e76\u4fdd\u5b58\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"version: '3'\nname: fzs\nservices:\n  web:\n    image: synjq/fzs-web\n    ports:\n      - 80:8080\n    volumes:\n      - web-data:/data\n      - web-agent:/fzs-web/public/fzs-agent\n      - web-license:/fzs-web/public/license\n      - web-fzs-config:/fzs-web/public/fzs-config\n    restart: unless-stopped\n    environment:\n      - DAEMON_URL=http://daemon:3333\n      - SESSION_SECRET=fzs-is-the-best\n      ## SESSION_SECRET \u6bcf\u4e2a\u5ba2\u6237\u73af\u5883\u90fd\u8981\u4e0d\u4e00\u6837\uff0c\u6bd4\u5982\uff1azhaoshang / changjiang\n\n  daemon:\n    image: synjq/fzs-daemon\n    restart: unless-stopped\n    environment:\n      - WEB_URL=http://web:8080\n\nvolumes:\n  web-data:\n  web-agent:\n  web-license:\n  web-fzs-config:\n")),(0,a.kt)("h3",{id:"\u542f\u52a8\u5bb9\u5668"},"\u542f\u52a8\u5bb9\u5668"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker compose up -d\n")),(0,a.kt)("p",null,"\u68c0\u67e5\u5bb9\u5668\u662f\u5426\u542f\u52a8\u6210\u529f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker ps\n")),(0,a.kt)("p",null,"\u5982\u679c ",(0,a.kt)("inlineCode",{parentName:"p"},"web")," \u4e0e ",(0,a.kt)("inlineCode",{parentName:"p"},"daemon")," \u7684\u5bb9\u5668\u72b6\u6001\u7c7b\u4f3c\u4ee5\u4e0b\u8f93\u51fa\uff0c\u8bf4\u660e\u5bb9\u5668\u542f\u52a8\u6210\u529f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'CONTAINER ID   IMAGE                          COMMAND                  CREATED        STATUS                PORTS                                       NAMES\n66c186a2544f   synjq/fzs-web:0.2.1-hotfix.1   "./start.sh"             30 hours ago   Up 30 hours           0.0.0.0:80->8080/tcp, :::80->8080/tcp       fzs-web-1\n4839cb383195   synjq/fzs-daemon:0.0.1-rc.1    "/usr/local/bin/dock\u2026"   2 days ago     Up 2 days             3333/tcp                                    fzs-daemon-1\n')),(0,a.kt)("h3",{id:"\u68c0\u9a8c\u90e8\u7f72"},"\u68c0\u9a8c\u90e8\u7f72"),(0,a.kt)("p",null,"\u8bbf\u95ee ",(0,a.kt)("inlineCode",{parentName:"p"},"http://${your_machine_ip}"),"\uff0c\u5982\u679c\u80fd\u591f\u6b63\u5e38\u8bbf\u95ee\u4ee5\u4e0b\u9875\u9762\uff0c\u8bf4\u660e FZS Web \u90e8\u7f72\u6210\u529f\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"login-page",src:n(3070).Z,width:"1920",height:"1055"})))}m.isMDXComponent=!0},3070:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/login-8aed07dfe8f08d3851dfdc49dcca736e.jpg"}}]);