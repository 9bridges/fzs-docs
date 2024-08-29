"use strict";(self.webpackChunkfzs_docs=self.webpackChunkfzs_docs||[]).push([[3613],{3905:(e,a,r)=>{r.d(a,{Zo:()=>m,kt:()=>u});var t=r(7294);function n(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function o(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function p(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?o(Object(r),!0).forEach((function(a){n(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function _(e,a){if(null==e)return{};var r,t,n=function(e,a){if(null==e)return{};var r,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=t.createContext({}),c=function(e){var a=t.useContext(l),r=a;return e&&(r="function"==typeof e?e(a):p(p({},a),e)),r},m=function(e){var a=c(e.components);return t.createElement(l.Provider,{value:a},e.children)},i="mdxType",s={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,m=_(e,["components","mdxType","originalType","parentName"]),i=c(r),d=n,u=i["".concat(l,".").concat(d)]||i[d]||s[d]||o;return r?t.createElement(u,p(p({ref:a},m),{},{components:r})):t.createElement(u,p({ref:a},m))}));function u(e,a){var r=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=d;var _={};for(var l in a)hasOwnProperty.call(a,l)&&(_[l]=a[l]);_.originalType=e,_[i]="string"==typeof e?e:n,p[1]=_;for(var c=2;c<o;c++)p[c]=r[c];return t.createElement.apply(null,p)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2398:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>l,contentTitle:()=>p,default:()=>s,frontMatter:()=>o,metadata:()=>_,toc:()=>c});var t=r(7462),n=(r(7294),r(3905));const o={sidebar_position:1},p="FZS Agent \u5168\u90e8\u53c2\u6570",_={unversionedId:"intro/appendix/agent-config",id:"intro/appendix/agent-config",title:"FZS Agent \u5168\u90e8\u53c2\u6570",description:"\u4ee5\u4e0b\u662f FZS Agent \u652f\u6301\u7684\u5168\u90e8\u53c2\u6570\uff1a",source:"@site/docs/intro/appendix/agent-config.md",sourceDirName:"intro/appendix",slug:"/intro/appendix/agent-config",permalink:"/intro/appendix/agent-config",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u6052\u751f\u7535\u5b50 LightDB",permalink:"/intro/appendix/db-support/lightdb"},next:{title:"\u5feb\u901f\u5f00\u59cb",permalink:"/quick-start/"}},l={},c=[],m={toc:c},i="wrapper";function s(e){let{components:a,...r}=e;return(0,n.kt)(i,(0,t.Z)({},m,r,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"fzs-agent-\u5168\u90e8\u53c2\u6570"},"FZS Agent \u5168\u90e8\u53c2\u6570"),(0,n.kt)("p",null,"\u4ee5\u4e0b\u662f FZS Agent \u652f\u6301\u7684\u5168\u90e8\u53c2\u6570\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "export.param_full_sync_user": "\u5168\u540c\u6b65\u65f6\u662f\u5426\u81ea\u52a8\u521b\u5efa\u7528\u6237",\n  "export.param_full_sync_tbspace": "\u5168\u540c\u6b65\u65f6\u662f\u5426\u81ea\u52a8\u521b\u5efa\u8868\u7a7a\u95f4",\n  "export.param_tgt_not_drop": "\u5168\u540c\u6b65\u65f6\u662f\u5426\u540c\u6b65\u8868\u7ed3\u6784",\n  "export.param_ddl_only_truncate": "ddl \u53ea\u540c\u6b65 truncate \u64cd\u4f5c",\n  "export.param_archive_log": "\u542f\u52a8\u65f6\u5207\u6362\u4e00\u6b21redo\u65e5\u5fd7",\n  "export.param_proc_max_mem": "export \u8fdb\u7a0b\u6700\u5927\u4f7f\u7528\u5185\u5b58\uff0c\u5355\u4f4d\u4e3a\u5146",\n  "export.param_cpu_max": "export \u6700\u5927\u4f7f\u7528cpu",\n  "export.param_disk_quota": "\u5141\u8bb8 fzs \u4f7f\u7528\u7684\u78c1\u76d8\u7a7a\u95f4\uff0c\u5360\u7528\u7a7a\u95f4\u8d85\u8fc7\u8be5\u503c\u65f6\u505c\u6b62\u62bd\u53d6\uff0c\u7a7a\u95f4\u91ca\u653e\u540e\u4f1a\u81ea\u52a8\u7ee7\u7eed",\n  "export.param_is_ddl": "\u662f\u5426\u540c\u6b65 ddl \u64cd\u4f5c",\n  "export.param_tbl_drt_rnm": "\u662f\u5426\u5c06 drop \u64cd\u4f5c\u8f6c\u6362\u4e3a rename",\n  "export.param_sync_table": "\u662f\u5426\u5168\u540c\u6b65\u8868",\n  "export.param_sync_priv": "\u662f\u5426\u5168\u540c\u6b65\u6743\u9650",\n  "export.param_sync_temp_table": "\u662f\u5426\u5168\u540c\u6b65\u4e34\u65f6\u8868",\n  "export.param_sync_proc": "\u662f\u5426\u5168\u540c\u6b65\u5b58\u50a8\u8fc7\u7a0b",\n  "export.param_sync_syn": "\u662f\u5426\u5168\u540c\u6b65\u540c\u4e49\u8bcd",\n  "export.param_sync_profile": "\u662f\u5426\u5168\u540c\u6b65profile",\n  "export.param_sync_seq": "\u662f\u5426\u5168\u540c\u6b65\u5e8f\u5217",\n  "export.param_sync_view": "\u662f\u5426\u5168\u540c\u6b65\u89c6\u56fe",\n  "export.param_sync_java": "\u662f\u5426\u5168\u540c\u6b65 java",\n  "export.param_sync_role": "\u662f\u5426\u5168\u540c\u6b65\u89d2\u8272",\n  "export.param_trace_seq": "\u662f\u5426\u540c\u6b65\u5e8f\u5217\u7684\u589e\u91cf",\n  "export.param_sync_index": "\u5168\u540c\u6b65\u65f6\u521b\u5efa\u7d22\u5f15\u7684\u5e76\u53d1\u6570\uff0c\u914d\u7f6e\u4e3a 0 \u65f6\u8868\u793a\u4e0d\u540c\u6b65\u7d22\u5f15",\n  "export.param_sync_tbspace": "\u589e\u91cf\u662f\u5426\u540c\u6b65\u521b\u5efa\u8868\u7a7a\u95f4\u64cd\u4f5c",\n  "export.param_new_user": "\u589e\u91cf\u662f\u5426\u540c\u6b65\u521b\u5efa\u7528\u6237\u64cd\u4f5c",\n  "export.param_exadata": "redo \u5927\u7aef\u683c\u5f0f\u5b58\u50a8\uff0casm \u7684 db \u6a21\u5f0f\u4e0b\u6709\u6548\uff0c\u4e00\u822c\u4e0d\u505a\u4fee\u6539",\n  "export.param_off": "redo \u8bfb\u53d6\u504f\u79fb\u91cf\uff0casm \u7684 raw \u6a21\u5f0f\u4e0b\u6709\u6548\uff0c\u4e00\u822c\u4e0d\u505a\u4fee\u6539",\n  "export.param_left_space": "\u78c1\u76d8\u5269\u4f59\u7a7a\u95f4\u5c0f\u4e8e\u8be5\u503c\u65f6\u505c\u6b62\u62bd\u53d6\uff0c\u5355\u4f4d\u4e3a\u5146\uff0c\u7a7a\u95f4\u91ca\u653e\u540e\u4f1a\u81ea\u52a8\u7ee7\u7eed",\n  "export.param_lock_wait": "\u5168\u540c\u6b65\u65f6\u9501\u8868\u7684\u6700\u5927\u7b49\u5f85\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3a\u79d2\uff0c\u8d85\u8fc7\u8be5\u503c\u65f6\u5c06\u8df3\u8fc7\u5931\u8d25\u7684\u8868\u7684\u5168\u91cf\u540c\u6b65",\n  "export.param_table_file": "\u67e5\u8be2\u5143\u6570\u636e\u76f8\u5173\uff0c\u4e00\u822c\u4e0d\u505a\u4fee\u6539",\n  "export.param_table_block": "\u67e5\u8be2\u5143\u6570\u636e\u76f8\u5173\uff0c\u4e00\u822c\u4e0d\u505a\u4fee\u6539",\n  "export.param_must_full_sync": "\u662f\u5426\u5148\u8fdb\u884c\u5168\u91cf\u540c\u6b65\uff0c\u914d\u7f6e\u4e3a 0 \u65f6\u4e0d\u540c\u6b65\u5168\u91cf\uff0c\u76f4\u63a5\u4ece\u5f53\u524d\u70b9\u62bd\u53d6\u589e\u91cf",\n  "export.param_charset_u2g": "\u5b57\u7b26\u96c6\u8f6c\u6362\uff0c\u5c06 utf8 \u5b57\u7b26\u8f6c\u6362\u4e3a gbk",\n  "export.param_arch_path": "\u8f6f\u4ef6\u5f02\u5e38\u9000\u51fa\u65f6\uff0c\u81ea\u52a8\u4fdd\u5b58\u5f53\u524d\u5206\u6790red\u5230\u8bbe\u7f6e\u7684\u8def\u5f84",\n  "export.param_arch_del": "\u81ea\u52a8\u5220\u9664\u5df2\u7ecf\u5206\u6790\u8fc7\u7684\u5f52\u6863\u65e5\u5fd7",\n  "export.param_redo_proc_paral": "\u5206\u6790 redo \u7684\u5e76\u53d1\u6570",\n  "export.param_ob_target": "\u5907\u7aef\u662f\u5426\u4e3a oceanbase",\n  "export.param_time_bgn": "\u6307\u5b9a\u65f6\u95f4\u70b9\u62bd\u53d6\u589e\u91cf\u6570\u636e\uff0c\u683c\u5f0f\uff1a2020-01-01 12:12:12",\n  "export.map_large_table": "\u9700\u8981\u5e76\u53d1\u5168\u540c\u6b65\u7684\u8868\uff0c\u683c\u5f0f\uff1auser1.table1,user1.table2,user2.table1",\n  "export.kafka_send_mode": "\u79d1\u84dd cyrmte \u53d1\u9001\u6a21\u5f0f\uff0c1 \u4e3a\u5355\u8bed\u53e5\u6a21\u5f0f\u4e00\u6b21\u53ea\u53d1\u9001\u4e00\u6761\u8bed\u53e5\uff0c2 \u4e3a\u591a\u8bed\u53e5\u6a21\u5f0f\u4e00\u6b21\u53d1\u9001\u591a\u6761\u8bed\u53e5\uff0c\u53d1\u9001\u8bed\u53e5\u6570\u91cf\u7531 kafka_send_bufmax \u51b3\u5b9a\u3002",\n  "export.kafka_send_bufmax": "\u79d1\u84dd cyrmte \u8bbe\u7f6e\u53d1\u9001\u5230 kafka \u7684\u6d88\u606f\u5927\u5c0f\u9650\u5236\uff0c\u672c\u8bbe\u7f6e\u4e3b\u8981\u9488\u5bf9\u4e0e kafka_send_mode = 2 \u7684\u591a\u8bed\u53e5\u6a21\u5f0f\uff0c\u5f53\u79ef\u7d2f\u7684\u8bed\u53e5\u5927\u5c0f\u8d85\u8fc7 kafka_send_bufmax \u65f6\uff0c\u5219\u4e4b\u524d\u6570\u636e\u6253\u6210\u4e00\u4e2a\u5305\uff0c\u53d1\u9001\u5230 kafka\u3002",\n  "export.long_variable_size": "\u79d1\u84dd cyrmte \u8bbe\u7f6e\u6700\u5927\u7684 long varchar/binary \u7684\u6700\u5927\u5927\u5c0f\uff0c\u542b\u4e49\u4e3a\u5f53\u5c0f\u4e8e\u8fd9\u4e2a\u503c\u65f6\uff0c\u5927\u5bf9\u8c61\u5185\u5bb9\u4e5f\u662f\u4ee5 kafka \u6d88\u606f\u6a21\u5f0f\u53d1\u9001\uff0c\u5982\u679c\u8d85\u8fc7\u4e86\u8be5\u503c\uff0c\u5219 kafka \u53d1\u9001\u5185\u5bb9\u91cc\u9762\u91cc\u9762\u4fdd\u5b58\u7684\u662f\u5927\u5bf9\u8c61\u6587\u4ef6\u7684\u8def\u5f84\uff0c\u5c06\u5927\u5bf9\u8c61\u6587\u4ef6\u5b58\u50a8\u5230 long_variable_path \u914d\u7f6e\u7684\u8def\u5f84\u4e2d\u3002",\n  "export.long_variable_path": "\u79d1\u84dd cyrmte \u5927\u5bf9\u8c61\u6587\u4ef6\u7684\u4fdd\u5b58\u8def\u5f84\u3002",\n  "load.param_if_pri_key": "\u662f\u5426\u5f00\u542f\u4e3b\u952e\u6a21\u5f0f",\n  "load.param_if_irp2urp": "\u63d2\u5165\u4e3b\u952e\u51b2\u7a81\u65f6\u8f6c\u6362\u4e3a\u66f4\u65b0\u64cd\u4f5c",\n  "load.param_proc_max_mem": "load \u8fdb\u7a0b\u6700\u5927\u4f7f\u7528\u5185\u5b58\uff0c\u5355\u4f4d\u4e3a\u5146",\n  "load.param_back_file_time": "\u5907\u7aef\u4ea4\u6613\u6587\u4ef6\u4fdd\u7559\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3a\u79d2",\n  "load.param_lob_as_long": "lob \u6570\u636e\u6309\u7167 long \u6570\u636e\u63a5\u53e3\u88c5\u8f7d\uff0c\u6548\u7387\u66f4\u9ad8",\n  "load.param_off": "\u6570\u636e\u6587\u4ef6\u8bfb\u53d6\u504f\u79fb\u91cf\uff0casm \u7684 raw \u6a21\u5f0f\u4e0b\u6709\u6548\uff0c\u4e00\u822c\u4e0d\u505a\u4fee\u6539",\n  "load.param_exadata": "\u6570\u636e\u6587\u4ef6\u5927\u7aef\u683c\u5f0f\u5b58\u50a8\uff0casm \u7684 db \u6a21\u5f0f\u4e0b\u6709\u6548\uff0c\u4e00\u822c\u4e0d\u505a\u4fee\u6539",\n  "load.param_if_dpl": "\u662f\u5426\u5f00\u542f\u76f4\u63a5\u8def\u5f84\u88c5\u8f7d\uff0c\u6548\u7387\u66f4\u9ad8\uff0c\u53ea\u9002\u7528\u4e8e oracle-oracle \u7684\u540c\u6b65",\n  "load.param_compile_obj": "\u5168\u540c\u6b65\u5b8c\u6210\u65f6\u81ea\u52a8\u7f16\u8bd1\u6240\u6709\u5931\u6548\u7684\u5bf9\u8c61",\n  "load.param_load_index_parallel_cnt": "\u5168\u540c\u6b65\u65f6\u5e76\u53d1\u521b\u5efa\u7d22\u5f15\u7684\u6700\u5927\u8fdb\u7a0b\u6570",\n  "load.param_warn_delays": "\u5ef6\u8fdf\u8d85\u8fc7\u8be5\u503c\u65f6\u6253\u5370\u8b66\u544a\u65e5\u5fd7",\n  "load.param_load_delays": "\u5ef6\u8fdf\u88c5\u8f7d\u6570\u636e\uff0c\u5907\u7aef\u63a5\u6536\u5230\u6570\u636e\u540e\u7b49\u5f85\u8be5\u503c\u8bbe\u5b9a\u7684\u65f6\u95f4\u540e\u518d\u88c5\u8f7d\u5230\u6570\u636e\u5e93",\n  "load.param_key_path": "\u591a\u5bf9\u4e00\u65f6\uff0c\u6bcf\u4e2a\u5907\u7aef\u4e4b\u95f4\u5b58\u653e\u5171\u4eab\u6570\u636e\u7684\u8def\u5f84\uff0c\u6bcf\u4e2a\u5907\u7aef\u90fd\u8981\u6709\u6743\u9650\u8bfb\u5199",\n  "load.param_piece_cnt": "\u591a\u5bf9\u4e00\u65f6\uff0c\u6e90\u7aef\u7684\u6570\u91cf",\n  "load.param_trc_interval": "\u591a\u5bf9\u4e00\u65f6\uff0c\u8bbe\u5b9a\u65f6\u95f4\u5185\u7684 truncate \u548c drop \u64cd\u4f5c\u53ea\u6267\u884c\u4e00\u904d",\n  "alloc.param_proc_max_mem": "alloc \u8fdb\u7a0b\u6700\u5927\u4f7f\u7528\u5185\u5b58\uff0c\u5355\u4f4d\u4e3a\u5146",\n  "recv.param_proc_max_mem": "recv \u8fdb\u7a0b\u6700\u5927\u4f7f\u7528\u5185\u5b58\uff0c\u5355\u4f4d\u4e3a\u5146",\n  "recv.param_left_space": "\u78c1\u76d8\u5269\u4f59\u7a7a\u95f4\u5c0f\u4e8e\u8be5\u503c\u65f6\u505c\u6b62\u63a5\u6536\u6e90\u7aef\u53d1\u9001\u7684\u4ea4\u6613\u6587\u4ef6\uff0c\u5355\u4f4d\u4e3a\u5146\uff0c\u7a7a\u95f4\u91ca\u653e\u540e\u4f1a\u81ea\u52a8\u7ee7\u7eed",\n  "recv.queue_map": "\u589e\u91cf\u540c\u6b65\u5e76\u53d1, \u4e0d\u540c\u961f\u5217\u4e4b\u95f4\u7528\u5206\u53f7\u9694\u5f00\uff0c\u540c\u4e00\u4e2a\u961f\u5217\u5185\u7684\u5bf9\u8c61\u7528\u9017\u53f7\u9694\u5f00\uff0c\u683c\u5f0f\uff1au1.t1,u2.t2;u1.t3,u4;u3,u4",\n  "monitor.param_gap_checklog": "\u5f53\u8f6f\u4ef6\u65e5\u5fd7\u957f\u65f6\u95f4\u4e0d\u66f4\u65b0\u65f6\u6253\u5370\u8b66\u544a\u65e5\u5fd7\uff0c\u6b63\u5e38\u60c5\u51b5\u4e0b\u8f6f\u4ef6\u65e5\u5fd7\u4f1a\u4e00\u76f4\u5728\u66f4\u65b0\u5199\u5165"\n}\n')))}s.isMDXComponent=!0}}]);