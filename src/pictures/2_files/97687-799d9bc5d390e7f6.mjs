(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[97687,16142],{567450:(t,e,n)=>{function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,{Z:()=>o});const i=new class{constructor(){a(this,"onResumeListeners",[]),a(this,"onPauseListeners",[]),a(this,"inExp",!1),a(this,"windowInFocus",!0)}setExperiment(t=!1){this.inExp=t}onSessionResume(t){return this.onResumeListeners.push(t),this}onSessionPause(t){return this.onPauseListeners.push(t),this}removeResumeListener(t){this.onResumeListeners.filter((e=>e!==t))}removePauseListener(t){this.onPauseListeners=this.onPauseListeners.filter((e=>e!==t))}getAppState(){return this.windowInFocus?0:void 0}},r=t=>{if(t.isHidden){const{reason:e}=t;i.windowInFocus=!1,i.onPauseListeners.forEach((t=>t(e)))}else i.windowInFocus=!0,i.onResumeListeners.forEach((t=>t()))};setTimeout((()=>{window.addEventListener("beforeunload",(()=>r({isHidden:!0,reason:"beforeunload"}))),window.addEventListener("focus",(()=>r({isHidden:!1}))),window.addEventListener("blur",(()=>r({isHidden:!0,reason:"blur"}))),window.addEventListener("pageshow",(()=>r({isHidden:!1}))),window.addEventListener("pagehide",(()=>r({isHidden:!0,reason:"pagehide"}))),void 0!==document.hidden?document.addEventListener("visibilitychange",(()=>r(document.hidden?{isHidden:!0,reason:"visibilitychange"}:{isHidden:!1})),!1):void 0!==document.webkitHidden&&document.addEventListener("webkitvisibilitychange",(()=>r(document.webkitHidden?{isHidden:!0,reason:"visibilitychange"}:{isHidden:!1})),!1)}),0);const o=i},42447:(t,e,n)=>{n.d(e,{Z:()=>G});var a=n(667294),i=n(317672),r=n(790348);const o=t=>{const e=performance.getEntriesByType("resource").filter((t=>t.name.includes("i.pinimg"))).reduce(((t,e)=>{const n=e.name.replace(".jpg","").split("/");return{[n[n.length-1]]:{downloadSize:e.name.split("/")[3].split("x")[0]},...t}}),{});[...Array.from(document.getElementsByTagName("img")).map((t=>{const n=t.src.replace(".jpg","").split("/"),a=n[n.length-1];if(e[a]){var r;const n=(null===(r=(0,i.rZ)(t))||void 0===r?void 0:r.width)||1,o=e[a].downloadSize;return{fileName:a,renderedSize:n,downloadedSize:o,ratio:o/n}}return{fileName:a,renderedSize:1,downloadedSize:1,ratio:1}})),...Array.from(document.querySelectorAll('div[role="img"]')).map((t=>{const n=t.style.backgroundImage.split('"')[1].replace(".jpg","").split("/"),a=n[n.length-1];if(e[a]&&t instanceof HTMLDivElement){var r;const n=(null===(r=(0,i.rZ)(t))||void 0===r?void 0:r.width)||1,o=e[a].downloadSize;return{fileName:a,renderedSize:n,downloadedSize:o,ratio:o/n}}return{fileName:a,renderedSize:1,downloadedSize:1,ratio:1}}))].forEach((e=>{const{ratio:n,fileName:a,downloadedSize:i}=e;e.ratio>1.05&&(0,r.A9)(`checkImageRatio.${t}`,{count:Math.round(10*n)/10,tags:{fileName:`${i}_${a}`}})}))};var s=n(860273),c=n(543059),d=n(607150);const p=({constraintMap:t,initialNavTiming:e,annotations:n})=>({...n,...(0,d.jh)("constraint_",t),...(0,d.jh)("mark_",(0,c.gQ)()),...(0,d.jh)("browser_",{...e?(0,d.D3)(e):{},...(0,d.rX)()})});var m=n(358864),l=n(505771),u=n(156381);const g=(t,e)=>{const{firstInputDelay:n}=(0,u.v2)();return[...t.map((t=>(0,l.Z)(t,e))).filter(Boolean),...n?[{name:"fid",id:(0,m.Z)(),parentId:e,startTime:n.startTime,endTime:n.endTime,annotationMap:{},binaryAnnotationMap:{}}]:[]]};var T=n(435851),f=n(172071);const y=({eventPrefix:t,endTime:e,tags:n,resourceArr:a,resourceType:i="allResources"})=>{const r=a.length;if(r>0&&"object"==typeof a[0]&&!Array.isArray(a[0])){const o=[...a].sort(((t,e)=>t.fetchStart-e.fetchStart)),s=[...a].sort(((t,e)=>t.responseEnd-e.responseEnd));let c=1;const d=e/5;let p=0;for(;c<=5;){let e=0;for(;p<=r-1&&o[p].fetchStart<=d*c;)p+=1,e+=1;f.Z.gauge(`${t}.tags.${i}.fetchStartInterval${c}of5`,e,.2,n),f.Z.gauge(`${t}.${i}.fetchStartInterval${c}of5`,e,.2),c+=1}const m={zeroPercentInFlight:o[0].fetchStart,twentyFivePercentInFlight:o[Math.floor(r/4)].fetchStart,fiftyPercentInFlight:o[2*Math.floor(r/4)].fetchStart,seventyFivePercentInFlight:o[3*Math.floor(r/4)].fetchStart,hundredPercentInFlight:o[r-1].fetchStart,twentyFivePercentComplete:s[Math.floor(r/4)].responseEnd,fiftyPercentComplete:s[2*Math.floor(r/4)].responseEnd,seventyFivePercentComplete:s[3*Math.floor(r/4)].responseEnd,hundredPercentComplete:s[r-1].responseEnd};for(const e in m)m[e]&&(f.Z.timing(`${t}.tags.${i}.${e}`,m[e],.2,n),f.Z.timing(`${t}.${i}.${e}`,m[e],.2))}},v=({annotateExperiments:t,endTime:e,entries:n,metricId:a,pwtStaticContext:i})=>{const r=`${(0,T.Z)(i)}.${a.surface}`,o=[r];t&&t.forEach((t=>{const e=i.getExperimentGroup(t)||"null";o.push(`${r}.${t}.${e}`)}));const s={lcpTimingBucket:(t=>{let e;return e=t<=2500?"Good":t>2500&&t<=4e3?"Needs Improvement":"Poor",e})((0,u.Bn)())||"unknown",isAuthenticated:i.isAuthenticated,navigationType:a.navigationType},c=Array.from(n.filter((t=>"number"==typeof t.encodedBodySize&&t.encodedBodySize>=1e4&&t.responseEnd<=e))),d=[],p=[],m=[],l=[],g=[];c.forEach((t=>{"img"===t.initiatorType?d.push(t):"css"===t.initiatorType?p.push(t):"script"===t.initiatorType?m.push(t):"xmlhttprequest"===t.initiatorType?l.push(t):"link"===t.initiatorType&&t.name.includes("i.pinimg.com")&&g.push(t)})),o.forEach((t=>{y({eventPrefix:t,endTime:e,tags:s,resourceArr:c}),y({eventPrefix:t,endTime:e,tags:s,resourceArr:d,resourceType:"image"}),y({eventPrefix:t,endTime:e,tags:s,resourceArr:p,resourceType:"css"}),y({eventPrefix:t,endTime:e,tags:s,resourceArr:m,resourceType:"scripts"}),y({eventPrefix:t,endTime:e,tags:s,resourceArr:l,resourceType:"xhr"}),y({eventPrefix:t,endTime:e,tags:s,resourceArr:g,resourceType:"preloadedImage"})}))};var A=n(22773),h=n(453821),S=n(638089);const _=({annotateExperiments:t,annotations:e,binaryAnnotations:n,constraintMap:a,endTime:i,imageTimings:r,metricId:o,pwtStaticContext:c,startTime:d,traceId:m,spans:l})=>{const u=(0,A.Cg)();let T;"initial_app_load"===o.navigationType&&(T=(0,s.Z)());const f=r.map((({name:t})=>t)),y=u.map((t=>(0,h.p)(t,f))).filter((({timing:t})=>!(({startTime:t,responseEnd:e},n)=>t>n.endTime||!!e&&e<n.startTime||t<n.startTime-100)(t,{startTime:d,endTime:i})));return"board"!==o.surface&&"pin_closeup"!==o.surface||v({annotateExperiments:t,endTime:i,entries:u,metricId:o,pwtStaticContext:c}),{type:"COMPLETE",traceId:m,startTime:d,endTime:i,spans:g(y,m).concat(l),annotationMap:p({constraintMap:a,initialNavTiming:T,annotations:e}),binaryAnnotationMap:(0,S.rA)({annotateExperiments:t,binaryAnnotations:n,entries:u,metricId:o,performanceResources:y,pwtEndTime:i,pwtStaticContext:c})}};let E=!1;const I=(t,e)=>t&&e?E?((0,r.H)("duplicated_initial_app_load_surface_pwt"),(0,m.Z)()):(E=!0,e):(0,m.Z)();var w=n(558775);const C=(t,e)=>{const n=(0,a.useRef)(e);return{getState:()=>n.current,dispatch:e=>{n.current=t(n.current,e)}}};var M=n(985271),N=n(383434),b=n(226464),L=n(567450),P=n(276602),R=n(198462),x=n(785893);const O=["initial_app_load","client_route_push"],$=(0,N.XV)("PwtSurface"),Z="NavigationComplete",B="VisuallyComplete",H=(t,e)=>{t.isSampled&&(0,w.Z)({metricId:t.metricConfig.metricId,pwtStaticContext:t.metricConfig.pwtStaticContext,result:{type:"ABORT",reason:e}})},D=t=>{if(t.metricConfig.constraints.every((e=>t.constraintMap[e]))){const e=Math.max(...t.metricConfig.constraints.map((e=>t.constraintMap[e])));return((t,e)=>{var n;const{metricConfig:{metricId:a,pwtStaticContext:i,annotateExperiments:s},annotations:d,binaryAnnotations:p,constraintMap:m,startTime:l,imageTimings:u,isSampled:g,spans:T}=t;(0,c.L8)(`PWT_Complete_${(0,b.KJ)(a)}`);const f=I("initial_app_load"===a.navigationType,null===(n=i.serverData)||void 0===n?void 0:n.trace_id),y=_({annotateExperiments:s,annotations:d,binaryAnnotations:p,constraintMap:m,endTime:e,imageTimings:u,metricId:a,pwtStaticContext:i,startTime:l,traceId:f,spans:T});g&&(0,w.Z)({metricId:a,pwtStaticContext:i,result:y});try{o(String(y.binaryAnnotationMap["metricId.surface"].value))}catch(v){(0,r.H)("image_ratio_check_error",{error:v})}return{...t,result:y,status:"DONE"}})(t,e)}return t},z=(t,e)=>{const{constraint:n,time:a}=e,i=(0,b.KJ)(t.metricConfig.metricId);return M.Z?t.metricConfig.constraints.find((t=>t===n))?t.constraintMap[n]?($(`constraint "${n}" is already complete.`),(0,r.H)("duplicated_constraint_complete",{constraint:n,action:i}),t):($(`marking constraint "${n}" as complete`),(0,c.ZP)(`constraint_${n}_is_complete`),D({...t,constraintMap:{...t.constraintMap,[n]:a||M.Z.now()}})):($(`marked constraint "${n}" is not a required constraint.`),t):((0,r.H)("missing_window_performance",{action:i}),t)},U=(t,e)=>{if($("dispatch action",e),"INIT_ROUTE"===e.type)return((t,e)=>{const{metricConfig:n,startTime:a,isSampled:i}=e;if("TIMING"===t.status&&a!==t.startTime&&H(t,"routeUpdatedOnSameSurface"),!n)return{status:"DISABLED",metricConfig:null};const o=(0,b.KJ)(n.metricId);return"TIMING"===t.status&&t.startTime===a&&t.constraintMap.NavigationComplete?((0,r.H)("duplicated_init_route_action",{action:o}),t):("Other"===n.pwtStaticContext.browserName&&!1===n.metricId.isAuthenticated&&"initial_app_load"===n.metricId.navigationType?((0,r.A9)(`TIMING.${o}`,{tags:{userAgent:null===(s=window)||void 0===s||null===(c=s.navigator)||void 0===c?void 0:c.userAgent}}),(0,r.A9)(`TIMING.sampled.${o}`,{tags:{userAgent:null===(d=window)||void 0===d||null===(p=d.navigator)||void 0===p?void 0:p.userAgent},sampleRate:.5})):((0,r.A9)(`TIMING.${o}`),(0,r.A9)(`TIMING.sampled.${o}`,{sampleRate:.5})),z({status:"TIMING",metricConfig:n,startTime:a,constraintMap:{},annotations:{},binaryAnnotations:{},imageTimings:[],isSampled:i,spans:[]},{constraint:Z}));var s,c,d,p})(t,e.payload);if("TIMING"!==t.status)return $(`ignoring action due to invalid state ${t.status}`,e),t;switch(e.type){case"ABORT":H(t,e.reason);const n={type:"ABORT",reason:e.reason};return{...t,status:"DONE",result:n};case"ANNOTATE":const{name:a}=e.payload;if(!M.Z)return t;const i=M.Z.now();return $(`adding annotation {${a}: ${i}}`),{...t,annotations:{...t.annotations,[a]:i}};case"BINARY_ANNOTATE":const{name:o,value:s,annotationType:c}=e.payload;return $(`adding binary annotation {${o}: ${s}}`),{...t,binaryAnnotations:{...t.binaryAnnotations,[o]:{value:s,type:c}}};case"MARK_CONSTRAINT_COMPLETE":return z(t,e.payload);case"REMOVE_CONSTRAINT":return((t,e)=>{if(!M.Z){const e=(0,b.KJ)(t.metricConfig.metricId);(0,r.H)("missing_window_performance",{action:e})}$(`removing constraint "${e}"`);const n=t.metricConfig.constraints.filter((t=>t!==e)),{[e]:a,...i}=t.constraintMap;return D({...t,constraintMap:i,metricConfig:{...t.metricConfig,constraints:n}})})(t,e.payload);case"SET_SEGMENT":return((t,e)=>{if(!M.Z){const e=(0,b.KJ)(t.metricConfig.metricId);(0,r.H)("missing_window_performance",{action:e})}$(`updating pwt segment to "${e}"`);const n={...t.metricConfig.metricId,segment:e};return{...t,metricConfig:{...t.metricConfig,metricId:n}}})(t,e.payload);case"SET_VISUALLY_COMPLETE_RESULT":{const{payload:{imageTimings:n}}=e;if(0===n.length){H(t,"visuallyComplete_noImages");const e={type:"ABORT",reason:"visuallyComplete_noImages"};return{...t,status:"DONE",result:e}}const a=Math.max(...n.map((t=>t.responseEnd||0)));return z({...t,imageTimings:n},{constraint:B,time:a})}case"ADD_SUBSPAN":const{startTime:d}=t,{payload:{name:p,startTime:l,endTime:u,annotations:g,binaryAnnotations:T,parentId:f}}=e;return{...t,spans:[...t.spans,{name:p,id:(0,m.Z)(),startTime:l||d,endTime:u,annotationMap:{...g},binaryAnnotationMap:{...T},parentId:f}]};case"START_SUBSPAN":return{...t,spans:[...t.spans,{name:e.payload.name,id:(0,m.Z)(),startTime:M.Z?M.Z.now():0,endTime:1/0,annotationMap:{...e.payload.annotations},binaryAnnotationMap:{...e.payload.binaryAnnotations},parentId:e.payload.parentId}]};case"STOP_SUBSPAN":const y=t.spans.findIndex((t=>t.name===e.payload.name));return y>-1?(t.spans[y].endTime=M.Z?M.Z.now():0,e.payload.annotations&&(t.spans[y].annotationMap={...t.spans[y].annotationMap,...e.payload.annotations}),e.payload.binaryAnnotations&&(t.spans[y].binaryAnnotationMap={...t.spans[y].binaryAnnotationMap,...e.payload.binaryAnnotations})):(0,r.H)("invalid_subspan_stop_name",{name:e.payload.name}),t;default:const v=(0,b.KJ)(t.metricConfig.metricId);return(0,r.H)("invalid_pwt_surface_action",{action:v}),t}};function G({children:t,...e}){var n;const i=(0,R.fM)(),o=(t=>{if(!t)return"initial_app_load";switch(t.action){case"PUSH":return"client_route_push";case"REPLACE":return"client_route_replace";default:return null}})(i),s=[...null!==(n=e.annotateExperiments)&&void 0!==n?n:[]],c={...e,annotateExperiments:s,navigationInfo:{navigationType:o,clientNavigation:i}},{context:d}=(({surface:t,constraints:e,segment:n,measureGridVisuallyComplete:i,annotateExperiments:r,customEnabledNavigationTypes:o,navigationInfo:{clientNavigation:s,navigationType:c},sampleRate:d})=>{const p=(0,a.useRef)("NOT_SET"),m=(0,R.N5)(),{getState:l,dispatch:u}=C(U,{status:"DISABLED",metricConfig:null});if(p.current!==s&&(p.current=s,m)){const{isAuthenticated:a}=m,p=o||O,l=t&&c&&p.includes(c)?{metricId:{type:"surface",surface:t,navigationType:c,isAuthenticated:a,segment:n},annotateExperiments:r,constraints:[Z,...e||[],...i?[B]:[]],pwtStaticContext:m}:null;u({type:"INIT_ROUTE",payload:{metricConfig:l,startTime:s?s.time:0,isSampled:!d||Math.random()<d}})}const g=l();if((0,a.useEffect)((()=>{const t=t=>{u({type:"ABORT",reason:t})};L.Z.onSessionPause(t);const e=()=>{window.removeEventListener("resize",e),u({type:"ABORT",reason:"windowResized"})};return window.addEventListener("resize",e),()=>{const n=l();$("handling unmount",n),"TIMING"===n.status&&H(n,"unmount"),L.Z.removePauseListener(t),window.removeEventListener("resize",e)}}),[]),"TIMING"!==g.status||!g.constraintMap.NavigationComplete)return{state:g,context:null};const{startTime:T,metricConfig:f}=g;return{state:g,context:{abort:t=>u({type:"ABORT",reason:t}),addAnnotation:t=>u({type:"ANNOTATE",payload:{name:t}}),addBinaryAnnotation:(t,e,n)=>u({type:"BINARY_ANNOTATE",payload:{name:t,value:e,annotationType:n}}),addSubspan:(t,e,n,a={},i={},r=null)=>u({type:"ADD_SUBSPAN",payload:{name:t,startTime:e,endTime:n,annotations:a,binaryAnnotations:i,parentId:r}}),getId:()=>T,getMetricId:()=>f.metricId,markConstraintComplete:t=>u({type:"MARK_CONSTRAINT_COMPLETE",payload:{constraint:t,time:M.Z?M.Z.now():0}}),removeConstraint:t=>u({type:"REMOVE_CONSTRAINT",payload:t}),setSegment:t=>u({type:"SET_SEGMENT",payload:t}),setVisuallyCompleteResult:f.constraints.includes(B)?t=>u({type:"SET_VISUALLY_COMPLETE_RESULT",payload:t}):null,startSubspan:(t,e={},n={},a=null)=>u({type:"START_SUBSPAN",payload:{name:t,annotations:e,binaryAnnotations:n,parentId:a}}),stopSubspan:(t,e={},n={},a=null)=>u({type:"STOP_SUBSPAN",payload:{name:t,annotations:e,binaryAnnotations:n,parentId:a}})}}})(c);return(()=>{const t=(0,P.E)(),e=!!t;(0,a.useEffect)((()=>{if(e){const e=null==t?void 0:t.getMetricId(),n=e?(0,b.KJ)(e):null;(0,r.H)("nested_pwt_surface",{action:n})}}),[e])})(),(0,x.jsx)(P.S,{value:d,children:t})}},311560:(t,e,n)=>{n.d(e,{Z:()=>a});const a=t=>{switch(t){case"BR":case"MX":case"AR":case"CL":case"CO":return"LatAm";case"US":return"US";case"CA":return"CA";case"GB":return"GB";case"FR":return"FR";case"DE":return"DE";default:return"OTHER"}}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/97687-799d9bc5d390e7f6.mjs.map