import{d as _i}from"./chunk-WDHVMF73.js";import{a as er}from"./chunk-XVTDDG5G.js";import{a as rs}from"./chunk-D52UYMZ3.js";import{a as de}from"./chunk-Y3LUT4HW.js";import{b as Ho,c as Ee,d as Uo,e as Wo,f as Qo,g as un,h as gi,i as Ie,k as Yo,l as qo,m as Go,n as bi,o as Xo,p as $o,q as Ko,r as Zo,s as Jo}from"./chunk-DLTAET2J.js";import{$b as L,A as mo,Aa as Re,Ab as xo,Ac as Oo,Ba as Rt,Bb as wo,Bc as ge,Ca as Pe,Cb as D,Cc as at,D as Ye,Da as ye,Db as c,E as Ce,Eb as m,Ec as w,Fa as k,Fb as U,Fc as Ue,Ga as cn,Gb as He,Gc as To,H as kt,Hb as qe,Hc as fi,I as ne,Ia as ci,Ib as Ge,Jb as pe,K as ai,Ka as _o,Kb as _e,L as pt,La as mi,Lb as xe,M as sn,Ma as go,Mb as he,Mc as Ao,Nb as ui,O as uo,Ob as B,Oc as Fo,Pb as Co,Pc as Po,Qb as y,Qc as Lo,R as ln,Rb as oe,Rc as No,S as ho,Sb as P,T as dn,Tb as ot,Tc as zo,U as si,Ub as ke,Uc as Bo,V as Je,Vb as M,Vc as Vo,W as li,Wb as I,X as V,Xa as tt,Xb as Do,Y as fo,Yb as So,Z as _t,Za as h,Zb as mn,Zc as jo,_b as rt,_c as pi,a as q,ac as it,b as ro,bc as p,ca as x,cb as De,cc as Xe,da as S,db as Se,dc as j,e as os,eb as Le,ec as ko,f as ve,fa as b,fb as Ne,fc as Eo,ga as Et,h as Ke,ha as s,hb as Me,i as ao,ib as bo,j as v,jc as le,k as Ze,kc as Ro,l as so,la as gt,lb as C,m as on,mb as E,n as rn,na as ae,nb as g,oa as se,ob as K,oc as fe,pa as et,pb as z,pc as Ot,q as ue,qa as po,qc as Mo,r as te,ra as G,rb as Mt,rc as ze,s as an,sa as H,sc as Io,ub as It,v as ie,va as Z,vb as vo,vc as hi,w as je,wa as N,wb as J,xa as di,xb as A,xc as bt,y as lo,yb as F,z as co,zb as yo,zc as Tt}from"./chunk-3RUF44VD.js";var as=new b("cdk-dir-doc",{providedIn:"root",factory:()=>s(H)}),ss=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function tr(n){let o=n?.toLowerCase()||"";return o==="auto"&&typeof navigator<"u"&&navigator?.language?ss.test(navigator.language)?"rtl":"ltr":o==="rtl"?"rtl":"ltr"}var Oe=(()=>{class n{get value(){return this.valueSignal()}valueSignal=Re("ltr");change=new Z;constructor(){let e=s(as,{optional:!0});if(e){let t=e.body?e.body.dir:null,i=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(tr(t||i||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(t){return new(t||n)};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var hn;try{hn=typeof Intl<"u"&&Intl.v8BreakIterator}catch{hn=!1}var W=(()=>{class n{_platformId=s(_o);isBrowser=this._platformId?jo(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||hn)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function At(n,o=0){return vi(n)?Number(n):arguments.length===2?o:0}function vi(n){return!isNaN(parseFloat(n))&&!isNaN(Number(n))}function We(n){return n instanceof k?n.nativeElement:n}var st;function ir(){if(st==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return st=!1,st;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)st=!0;else{let n=Element.prototype.scrollTo;n?st=!/\{\s*\[native code\]\s*\}/.test(n.toString()):st=!1}}return st}var Ft=class{};function Pt(n){return n&&typeof n.connect=="function"&&!(n instanceof ao)}var Be=(function(n){return n[n.REPLACED=0]="REPLACED",n[n.INSERTED=1]="INSERTED",n[n.MOVED=2]="MOVED",n[n.REMOVED=3]="REMOVED",n})(Be||{}),yi=class{viewCacheSize=20;_viewCache=[];applyChanges(o,e,t,i,r){o.forEachOperation((a,l,d)=>{let f,u;if(a.previousIndex==null){let _=()=>t(a,l,d);f=this._insertView(_,d,e,i(a)),u=f?Be.INSERTED:Be.REPLACED}else d==null?(this._detachAndCacheView(l,e),u=Be.REMOVED):(f=this._moveView(l,d,e,i(a)),u=Be.MOVED);r&&r({context:f?.context,operation:u,record:a})})}detach(){for(let o of this._viewCache)o.destroy();this._viewCache=[]}_insertView(o,e,t,i){let r=this._insertViewFromCache(e,t);if(r){r.context.$implicit=i;return}let a=o();return t.createEmbeddedView(a.templateRef,a.context,a.index)}_detachAndCacheView(o,e){let t=e.detach(o);this._maybeCacheView(t,e)}_moveView(o,e,t,i){let r=t.get(o);return t.move(r,e),r.context.$implicit=i,r}_maybeCacheView(o,e){if(this._viewCache.length<this.viewCacheSize)this._viewCache.push(o);else{let t=e.indexOf(o);t===-1?o.destroy():e.remove(t)}}_insertViewFromCache(o,e){let t=this._viewCache.pop();return t&&e.insert(t,o),t||null}};var Q=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=S({})}return n})();var ls=20,vt=(()=>{class n{_ngZone=s(N);_platform=s(W);_renderer=s(Le).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new v;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=ls){return this._platform.isBrowser?new Ke(t=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let i=e>0?this._scrolled.pipe(kt(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{i.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):ue()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){let i=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe(Ce(r=>!r||i.indexOf(r)>-1))}getAncestorScrollContainers(e){let t=[];return this.scrollContainers.forEach((i,r)=>{this._scrollableContainsElement(r,e)&&t.push(r)}),t}_scrollableContainsElement(e,t){let i=We(t),r=e.getElementRef().nativeElement;do if(i==r)return!0;while(i=i.parentElement);return!1}static \u0275fac=function(t){return new(t||n)};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var ds=20,Qe=(()=>{class n{_platform=s(W);_listeners;_viewportSize=null;_change=new v;_document=s(H);constructor(){let e=s(N),t=s(Le).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let i=r=>this._change.next(r);this._listeners=[t.listen("window","resize",i),t.listen("window","orientationchange",i)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:t,height:i}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+i,right:e.left+t,height:i,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,t=this._getWindow(),i=e.documentElement,r=i.getBoundingClientRect(),a=-r.top||e.body?.scrollTop||t.scrollY||i.scrollTop||0,l=-r.left||e.body?.scrollLeft||t.scrollX||i.scrollLeft||0;return{top:a,left:l}}change(e=ds){return e>0?this._change.pipe(kt(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var or=new b("CDK_VIRTUAL_SCROLL_VIEWPORT");var lt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=S({})}return n})(),Lt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=S({imports:[Q,lt,Q,lt]})}return n})();var xi=class{applyChanges(o,e,t,i,r){o.forEachOperation((a,l,d)=>{let f,u;if(a.previousIndex==null){let _=t(a,l,d);f=e.createEmbeddedView(_.templateRef,_.context,_.index),u=Be.INSERTED}else d==null?(e.remove(l),u=Be.REMOVED):(f=e.get(l),e.move(f,d),u=Be.MOVED);r&&r({context:f?.context,operation:u,record:a})})}detach(){}};var cs=[[["caption"]],[["colgroup"],["col"]],"*"],ms=["caption","colgroup, col","*"];function us(n,o){n&1&&P(0,2)}function hs(n,o){n&1&&(c(0,"thead",0),xe(1,1),m(),c(2,"tbody",0),xe(3,2)(4,3),m(),c(5,"tfoot",0),xe(6,4),m())}function fs(n,o){n&1&&xe(0,1)(1,2)(2,3)(3,4)}var Ve=new b("CDK_TABLE");var Di=(()=>{class n{template=s(Se);constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=g({type:n,selectors:[["","cdkCellDef",""]]})}return n})(),Si=(()=>{class n{template=s(Se);constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=g({type:n,selectors:[["","cdkHeaderCellDef",""]]})}return n})(),sr=(()=>{class n{template=s(Se);constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=g({type:n,selectors:[["","cdkFooterCellDef",""]]})}return n})(),yt=(()=>{class n{_table=s(Ve,{optional:!0});_hasStickyChanged=!1;get name(){return this._name}set name(e){this._setNameInput(e)}_name;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;get stickyEnd(){return this._stickyEnd}set stickyEnd(e){e!==this._stickyEnd&&(this._stickyEnd=e,this._hasStickyChanged=!0)}_stickyEnd=!1;cell;headerCell;footerCell;cssClassFriendlyName;_columnCssClassName;constructor(){}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}_updateColumnCssClassName(){this._columnCssClassName=[`cdk-column-${this.cssClassFriendlyName}`]}_setNameInput(e){e&&(this._name=e,this.cssClassFriendlyName=e.replace(/[^a-z0-9_-]/gi,"-"),this._updateColumnCssClassName())}static \u0275fac=function(t){return new(t||n)};static \u0275dir=g({type:n,selectors:[["","cdkColumnDef",""]],contentQueries:function(t,i,r){if(t&1&&ot(r,Di,5)(r,Si,5)(r,sr,5),t&2){let a;M(a=I())&&(i.cell=a.first),M(a=I())&&(i.headerCell=a.first),M(a=I())&&(i.footerCell=a.first)}},inputs:{name:[0,"cdkColumnDef","name"],sticky:[2,"sticky","sticky",w],stickyEnd:[2,"stickyEnd","stickyEnd",w]}})}return n})(),Ci=class{constructor(o,e){e.nativeElement.classList.add(...o._columnCssClassName)}},lr=(()=>{class n extends Ci{constructor(){super(s(yt),s(k))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=g({type:n,selectors:[["cdk-header-cell"],["th","cdk-header-cell",""]],hostAttrs:["role","columnheader",1,"cdk-header-cell"],features:[K]})}return n})();var dr=(()=>{class n extends Ci{constructor(){let e=s(yt),t=s(k);super(e,t);let i=e._table?._getCellRole();i&&t.nativeElement.setAttribute("role",i)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=g({type:n,selectors:[["cdk-cell"],["td","cdk-cell",""]],hostAttrs:[1,"cdk-cell"],features:[K]})}return n})();var pn=(()=>{class n{template=s(Se);_differs=s(at);columns;_columnsDiffer;constructor(){}ngOnChanges(e){if(!this._columnsDiffer){let t=e.columns&&e.columns.currentValue||[];this._columnsDiffer=this._differs.find(t).create(),this._columnsDiffer.diff(t)}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(e){return this instanceof zt?e.headerCell.template:this instanceof _n?e.footerCell.template:e.cell.template}static \u0275fac=function(t){return new(t||n)};static \u0275dir=g({type:n,features:[Pe]})}return n})(),zt=(()=>{class n extends pn{_table=s(Ve,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;constructor(){super(s(Se),s(at))}ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=function(t){return new(t||n)};static \u0275dir=g({type:n,selectors:[["","cdkHeaderRowDef",""]],inputs:{columns:[0,"cdkHeaderRowDef","columns"],sticky:[2,"cdkHeaderRowDefSticky","sticky",w]},features:[K,Pe]})}return n})(),_n=(()=>{class n extends pn{_table=s(Ve,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;constructor(){super(s(Se),s(at))}ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=function(t){return new(t||n)};static \u0275dir=g({type:n,selectors:[["","cdkFooterRowDef",""]],inputs:{columns:[0,"cdkFooterRowDef","columns"],sticky:[2,"cdkFooterRowDefSticky","sticky",w]},features:[K,Pe]})}return n})(),ki=(()=>{class n extends pn{_table=s(Ve,{optional:!0});when;constructor(){super(s(Se),s(at))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=g({type:n,selectors:[["","cdkRowDef",""]],inputs:{columns:[0,"cdkRowDefColumns","columns"],when:[0,"cdkRowDefWhen","when"]},features:[K]})}return n})(),dt=(()=>{class n{_viewContainer=s(Me);cells;context;static mostRecentCellOutlet=null;constructor(){n.mostRecentCellOutlet=this}ngOnDestroy(){n.mostRecentCellOutlet===this&&(n.mostRecentCellOutlet=null)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=g({type:n,selectors:[["","cdkCellOutlet",""]]})}return n})(),gn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=C({type:n,selectors:[["cdk-header-row"],["tr","cdk-header-row",""]],hostAttrs:["role","row",1,"cdk-header-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,i){t&1&&xe(0,0)},dependencies:[dt],encapsulation:2})}return n})();var bn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=C({type:n,selectors:[["cdk-row"],["tr","cdk-row",""]],hostAttrs:["role","row",1,"cdk-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,i){t&1&&xe(0,0)},dependencies:[dt],encapsulation:2})}return n})(),cr=(()=>{class n{templateRef=s(Se);_contentClassNames=["cdk-no-data-row","cdk-row"];_cellClassNames=["cdk-cell","cdk-no-data-cell"];_cellSelector="td, cdk-cell, [cdk-cell], .cdk-cell";constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=g({type:n,selectors:[["ng-template","cdkNoDataRow",""]]})}return n})(),rr=["top","bottom","left","right"],fn=class{_isNativeHtmlTable;_stickCellCss;_isBrowser;_needsPositionStickyOnElement;direction;_positionListener;_tableInjector;_elemSizeCache=new WeakMap;_resizeObserver=globalThis?.ResizeObserver?new globalThis.ResizeObserver(o=>this._updateCachedSizes(o)):null;_updatedStickyColumnsParamsToReplay=[];_stickyColumnsReplayTimeout=null;_cachedCellWidths=[];_borderCellCss;_destroyed=!1;constructor(o,e,t=!0,i=!0,r,a,l){this._isNativeHtmlTable=o,this._stickCellCss=e,this._isBrowser=t,this._needsPositionStickyOnElement=i,this.direction=r,this._positionListener=a,this._tableInjector=l,this._borderCellCss={top:`${e}-border-elem-top`,bottom:`${e}-border-elem-bottom`,left:`${e}-border-elem-left`,right:`${e}-border-elem-right`}}clearStickyPositioning(o,e){(e.includes("left")||e.includes("right"))&&this._removeFromStickyColumnReplayQueue(o);let t=[];for(let i of o)i.nodeType===i.ELEMENT_NODE&&t.push(i,...Array.from(i.children));De({write:()=>{for(let i of t)this._removeStickyStyle(i,e)}},{injector:this._tableInjector})}updateStickyColumns(o,e,t,i=!0,r=!0){if(!o.length||!this._isBrowser||!(e.some(re=>re)||t.some(re=>re))){this._positionListener?.stickyColumnsUpdated({sizes:[]}),this._positionListener?.stickyEndColumnsUpdated({sizes:[]});return}let a=o[0],l=a.children.length,d=this.direction==="rtl",f=d?"right":"left",u=d?"left":"right",_=e.lastIndexOf(!0),O=t.indexOf(!0),T,$,X;r&&this._updateStickyColumnReplayQueue({rows:[...o],stickyStartStates:[...e],stickyEndStates:[...t]}),De({earlyRead:()=>{T=this._getCellWidths(a,i),$=this._getStickyStartColumnPositions(T,e),X=this._getStickyEndColumnPositions(T,t)},write:()=>{for(let re of o)for(let me=0;me<l;me++){let ft=re.children[me];e[me]&&this._addStickyStyle(ft,f,$[me],me===_),t[me]&&this._addStickyStyle(ft,u,X[me],me===O)}this._positionListener&&T.some(re=>!!re)&&(this._positionListener.stickyColumnsUpdated({sizes:_===-1?[]:T.slice(0,_+1).map((re,me)=>e[me]?re:null)}),this._positionListener.stickyEndColumnsUpdated({sizes:O===-1?[]:T.slice(O).map((re,me)=>t[me+O]?re:null).reverse()}))}},{injector:this._tableInjector})}stickRows(o,e,t){if(!this._isBrowser)return;let i=t==="bottom"?o.slice().reverse():o,r=t==="bottom"?e.slice().reverse():e,a=[],l=[],d=[];De({earlyRead:()=>{for(let f=0,u=0;f<i.length;f++){if(!r[f])continue;a[f]=u;let _=i[f];d[f]=this._isNativeHtmlTable?Array.from(_.children):[_];let O=this._retrieveElementSize(_).height;u+=O,l[f]=O}},write:()=>{let f=r.lastIndexOf(!0);for(let u=0;u<i.length;u++){if(!r[u])continue;let _=a[u],O=u===f;for(let T of d[u])this._addStickyStyle(T,t,_,O)}t==="top"?this._positionListener?.stickyHeaderRowsUpdated({sizes:l,offsets:a,elements:d}):this._positionListener?.stickyFooterRowsUpdated({sizes:l,offsets:a,elements:d})}},{injector:this._tableInjector})}updateStickyFooterContainer(o,e){this._isNativeHtmlTable&&De({write:()=>{let t=o.querySelector("tfoot");t&&(e.some(i=>!i)?this._removeStickyStyle(t,["bottom"]):this._addStickyStyle(t,"bottom",0,!1))}},{injector:this._tableInjector})}destroy(){this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._resizeObserver?.disconnect(),this._destroyed=!0}_removeStickyStyle(o,e){if(!o.classList.contains(this._stickCellCss))return;for(let i of e)o.style[i]="",o.classList.remove(this._borderCellCss[i]);rr.some(i=>e.indexOf(i)===-1&&o.style[i])?o.style.zIndex=this._getCalculatedZIndex(o):(o.style.zIndex="",this._needsPositionStickyOnElement&&(o.style.position=""),o.classList.remove(this._stickCellCss))}_addStickyStyle(o,e,t,i){o.classList.add(this._stickCellCss),i&&o.classList.add(this._borderCellCss[e]),o.style[e]=`${t}px`,o.style.zIndex=this._getCalculatedZIndex(o),this._needsPositionStickyOnElement&&(o.style.cssText+="position: -webkit-sticky; position: sticky; ")}_getCalculatedZIndex(o){let e={top:100,bottom:10,left:1,right:1},t=0;for(let i of rr)o.style[i]&&(t+=e[i]);return t?`${t}`:""}_getCellWidths(o,e=!0){if(!e&&this._cachedCellWidths.length)return this._cachedCellWidths;let t=[],i=o.children;for(let r=0;r<i.length;r++){let a=i[r];t.push(this._retrieveElementSize(a).width)}return this._cachedCellWidths=t,t}_getStickyStartColumnPositions(o,e){let t=[],i=0;for(let r=0;r<o.length;r++)e[r]&&(t[r]=i,i+=o[r]);return t}_getStickyEndColumnPositions(o,e){let t=[],i=0;for(let r=o.length;r>0;r--)e[r]&&(t[r]=i,i+=o[r]);return t}_retrieveElementSize(o){let e=this._elemSizeCache.get(o);if(e)return e;let t=o.getBoundingClientRect(),i={width:t.width,height:t.height};return this._resizeObserver&&(this._elemSizeCache.set(o,i),this._resizeObserver.observe(o,{box:"border-box"})),i}_updateStickyColumnReplayQueue(o){this._removeFromStickyColumnReplayQueue(o.rows),this._stickyColumnsReplayTimeout||this._updatedStickyColumnsParamsToReplay.push(o)}_removeFromStickyColumnReplayQueue(o){let e=new Set(o);for(let t of this._updatedStickyColumnsParamsToReplay)t.rows=t.rows.filter(i=>!e.has(i));this._updatedStickyColumnsParamsToReplay=this._updatedStickyColumnsParamsToReplay.filter(t=>!!t.rows.length)}_updateCachedSizes(o){let e=!1;for(let t of o){let i=t.borderBoxSize?.length?{width:t.borderBoxSize[0].inlineSize,height:t.borderBoxSize[0].blockSize}:{width:t.contentRect.width,height:t.contentRect.height};i.width!==this._elemSizeCache.get(t.target)?.width&&ps(t.target)&&(e=!0),this._elemSizeCache.set(t.target,i)}e&&this._updatedStickyColumnsParamsToReplay.length&&(this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._stickyColumnsReplayTimeout=setTimeout(()=>{if(!this._destroyed){for(let t of this._updatedStickyColumnsParamsToReplay)this.updateStickyColumns(t.rows,t.stickyStartStates,t.stickyEndStates,!0,!1);this._updatedStickyColumnsParamsToReplay=[],this._stickyColumnsReplayTimeout=null}},0))}};function ps(n){return["cdk-cell","cdk-header-cell","cdk-footer-cell"].some(o=>n.classList.contains(o))}var Nt=new b("STICKY_POSITIONING_LISTENER");var vn=(()=>{class n{viewContainer=s(Me);elementRef=s(k);constructor(){let e=s(Ve);e._rowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=g({type:n,selectors:[["","rowOutlet",""]]})}return n})(),yn=(()=>{class n{viewContainer=s(Me);elementRef=s(k);constructor(){let e=s(Ve);e._headerRowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=g({type:n,selectors:[["","headerRowOutlet",""]]})}return n})(),xn=(()=>{class n{viewContainer=s(Me);elementRef=s(k);constructor(){let e=s(Ve);e._footerRowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=g({type:n,selectors:[["","footerRowOutlet",""]]})}return n})(),wn=(()=>{class n{viewContainer=s(Me);elementRef=s(k);constructor(){let e=s(Ve);e._noDataRowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=g({type:n,selectors:[["","noDataRowOutlet",""]]})}return n})(),Cn=(()=>{class n{_differs=s(at);_changeDetectorRef=s(ge);_elementRef=s(k);_dir=s(Oe,{optional:!0});_platform=s(W);_viewRepeater;_viewportRuler=s(Qe);_injector=s(G);_virtualScrollViewport=s(or,{optional:!0,host:!0});_positionListener=s(Nt,{optional:!0})||s(Nt,{optional:!0,skipSelf:!0});_document=s(H);_data;_renderedRange;_onDestroy=new v;_renderRows;_renderChangeSubscription=null;_columnDefsByName=new Map;_rowDefs;_headerRowDefs;_footerRowDefs;_dataDiffer;_defaultRowDef=null;_customColumnDefs=new Set;_customRowDefs=new Set;_customHeaderRowDefs=new Set;_customFooterRowDefs=new Set;_customNoDataRow=null;_headerRowDefChanged=!0;_footerRowDefChanged=!0;_stickyColumnStylesNeedReset=!0;_forceRecalculateCellWidths=!0;_cachedRenderRowsMap=new Map;_isNativeHtmlTable;_stickyStyler;stickyCssClass="cdk-table-sticky";needsPositionStickyOnElement=!0;_isServer;_isShowingNoDataRow=!1;_hasAllOutlets=!1;_hasInitialized=!1;_headerRowStickyUpdates=new v;_footerRowStickyUpdates=new v;_disableVirtualScrolling=!1;_getCellRole(){if(this._cellRoleInternal===void 0){let e=this._elementRef.nativeElement.getAttribute("role");return e==="grid"||e==="treegrid"?"gridcell":"cell"}return this._cellRoleInternal}_cellRoleInternal=void 0;get trackBy(){return this._trackByFn}set trackBy(e){this._trackByFn=e}_trackByFn;get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&(this._switchDataSource(e),this._changeDetectorRef.markForCheck())}_dataSource;_dataSourceChanges=new v;_dataStream=new v;get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(e){this._multiTemplateDataRows=e,this._rowOutlet&&this._rowOutlet.viewContainer.length&&(this._forceRenderDataRows(),this.updateStickyColumnStyles())}_multiTemplateDataRows=!1;get fixedLayout(){return this._virtualScrollEnabled()?!0:this._fixedLayout}set fixedLayout(e){this._fixedLayout=e,this._forceRecalculateCellWidths=!0,this._stickyColumnStylesNeedReset=!0}_fixedLayout=!1;recycleRows=!1;contentChanged=new Z;viewChange=new Ze({start:0,end:Number.MAX_VALUE});_rowOutlet;_headerRowOutlet;_footerRowOutlet;_noDataRowOutlet;_contentColumnDefs;_contentRowDefs;_contentHeaderRowDefs;_contentFooterRowDefs;_noDataRow;constructor(){s(new bt("role"),{optional:!0})||this._elementRef.nativeElement.setAttribute("role","table"),this._isServer=!this._platform.isBrowser,this._isNativeHtmlTable=this._elementRef.nativeElement.nodeName==="TABLE",this._dataDiffer=this._differs.find([]).create((t,i)=>this.trackBy?this.trackBy(i.dataIndex,i.data):i)}ngOnInit(){this._setupStickyStyler(),this._viewportRuler.change().pipe(V(this._onDestroy)).subscribe(()=>{this._forceRecalculateCellWidths=!0})}ngAfterContentInit(){this._viewRepeater=this.recycleRows||this._virtualScrollEnabled()?new yi:new xi,this._virtualScrollEnabled()&&this._setupVirtualScrolling(this._virtualScrollViewport),this._hasInitialized=!0}ngAfterContentChecked(){this._canRender()&&this._render()}ngOnDestroy(){this._stickyStyler?.destroy(),[this._rowOutlet?.viewContainer,this._headerRowOutlet?.viewContainer,this._footerRowOutlet?.viewContainer,this._cachedRenderRowsMap,this._customColumnDefs,this._customRowDefs,this._customHeaderRowDefs,this._customFooterRowDefs,this._columnDefsByName].forEach(e=>{e?.clear()}),this._headerRowDefs=[],this._footerRowDefs=[],this._defaultRowDef=null,this._headerRowStickyUpdates.complete(),this._footerRowStickyUpdates.complete(),this._onDestroy.next(),this._onDestroy.complete(),Pt(this.dataSource)&&this.dataSource.disconnect(this)}renderRows(){this._renderRows=this._getAllRenderRows();let e=this._dataDiffer.diff(this._renderRows);if(!e){this._updateNoDataRow(),this.contentChanged.next();return}let t=this._rowOutlet.viewContainer;this._viewRepeater.applyChanges(e,t,(i,r,a)=>this._getEmbeddedViewArgs(i.item,a),i=>i.item.data,i=>{i.operation===Be.INSERTED&&i.context&&this._renderCellTemplateForItem(i.record.item.rowDef,i.context)}),this._updateRowIndexContext(),e.forEachIdentityChange(i=>{let r=t.get(i.currentIndex);r.context.$implicit=i.item.data}),this._updateNoDataRow(),this.contentChanged.next(),this.updateStickyColumnStyles()}addColumnDef(e){this._customColumnDefs.add(e)}removeColumnDef(e){this._customColumnDefs.delete(e)}addRowDef(e){this._customRowDefs.add(e)}removeRowDef(e){this._customRowDefs.delete(e)}addHeaderRowDef(e){this._customHeaderRowDefs.add(e),this._headerRowDefChanged=!0}removeHeaderRowDef(e){this._customHeaderRowDefs.delete(e),this._headerRowDefChanged=!0}addFooterRowDef(e){this._customFooterRowDefs.add(e),this._footerRowDefChanged=!0}removeFooterRowDef(e){this._customFooterRowDefs.delete(e),this._footerRowDefChanged=!0}setNoDataRow(e){this._customNoDataRow=e}updateStickyHeaderRowStyles(){let e=this._getRenderedRows(this._headerRowOutlet);if(this._isNativeHtmlTable){let i=ar(this._headerRowOutlet,"thead");i&&(i.style.display=e.length?"":"none")}let t=this._headerRowDefs.map(i=>i.sticky);this._stickyStyler.clearStickyPositioning(e,["top"]),this._stickyStyler.stickRows(e,t,"top"),this._headerRowDefs.forEach(i=>i.resetStickyChanged())}updateStickyFooterRowStyles(){let e=this._getRenderedRows(this._footerRowOutlet);if(this._isNativeHtmlTable){let i=ar(this._footerRowOutlet,"tfoot");i&&(i.style.display=e.length?"":"none")}let t=this._footerRowDefs.map(i=>i.sticky);this._stickyStyler.clearStickyPositioning(e,["bottom"]),this._stickyStyler.stickRows(e,t,"bottom"),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,t),this._footerRowDefs.forEach(i=>i.resetStickyChanged())}updateStickyColumnStyles(){let e=this._getRenderedRows(this._headerRowOutlet),t=this._getRenderedRows(this._rowOutlet),i=this._getRenderedRows(this._footerRowOutlet);(this._isNativeHtmlTable&&!this.fixedLayout||this._stickyColumnStylesNeedReset)&&(this._stickyStyler.clearStickyPositioning([...e,...t,...i],["left","right"]),this._stickyColumnStylesNeedReset=!1),e.forEach((r,a)=>{this._addStickyColumnStyles([r],this._headerRowDefs[a])}),this._rowDefs.forEach(r=>{let a=[];for(let l=0;l<t.length;l++)this._renderRows[l].rowDef===r&&a.push(t[l]);this._addStickyColumnStyles(a,r)}),i.forEach((r,a)=>{this._addStickyColumnStyles([r],this._footerRowDefs[a])}),Array.from(this._columnDefsByName.values()).forEach(r=>r.resetStickyChanged())}stickyColumnsUpdated(e){this._positionListener?.stickyColumnsUpdated(e)}stickyEndColumnsUpdated(e){this._positionListener?.stickyEndColumnsUpdated(e)}stickyHeaderRowsUpdated(e){this._headerRowStickyUpdates.next(e),this._positionListener?.stickyHeaderRowsUpdated(e)}stickyFooterRowsUpdated(e){this._footerRowStickyUpdates.next(e),this._positionListener?.stickyFooterRowsUpdated(e)}_outletAssigned(){!this._hasAllOutlets&&this._rowOutlet&&this._headerRowOutlet&&this._footerRowOutlet&&this._noDataRowOutlet&&(this._hasAllOutlets=!0,this._canRender()&&this._render())}_canRender(){return this._hasAllOutlets&&this._hasInitialized}_render(){this._cacheRowDefs(),this._cacheColumnDefs(),!this._headerRowDefs.length&&!this._footerRowDefs.length&&this._rowDefs.length;let t=this._renderUpdatedColumns()||this._headerRowDefChanged||this._footerRowDefChanged;this._stickyColumnStylesNeedReset=this._stickyColumnStylesNeedReset||t,this._forceRecalculateCellWidths=t,this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription?this._observeRenderChanges():this._stickyColumnStylesNeedReset&&this.updateStickyColumnStyles(),this._checkStickyStates()}_getAllRenderRows(){if(!Array.isArray(this._data)||!this._renderedRange)return[];let e=[],t=Math.min(this._data.length,this._renderedRange.end),i=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(let r=this._renderedRange.start;r<t;r++){let a=this._data[r],l=this._getRenderRowsForData(a,r,i.get(a));this._cachedRenderRowsMap.has(a)||this._cachedRenderRowsMap.set(a,new WeakMap);for(let d=0;d<l.length;d++){let f=l[d],u=this._cachedRenderRowsMap.get(f.data);u.has(f.rowDef)?u.get(f.rowDef).push(f):u.set(f.rowDef,[f]),e.push(f)}}return e}_getRenderRowsForData(e,t,i){return this._getRowDefs(e,t).map(a=>{let l=i&&i.has(a)?i.get(a):[];if(l.length){let d=l.shift();return d.dataIndex=t,d}else return{data:e,rowDef:a,dataIndex:t}})}_cacheColumnDefs(){this._columnDefsByName.clear(),wi(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(t=>{this._columnDefsByName.has(t.name),this._columnDefsByName.set(t.name,t)})}_cacheRowDefs(){this._headerRowDefs=wi(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=wi(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=wi(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);let e=this._rowDefs.filter(t=>!t.when);this._defaultRowDef=e[0]}_renderUpdatedColumns(){let e=(a,l)=>{let d=!!l.getColumnsDiff();return a||d},t=this._rowDefs.reduce(e,!1);t&&this._forceRenderDataRows();let i=this._headerRowDefs.reduce(e,!1);i&&this._forceRenderHeaderRows();let r=this._footerRowDefs.reduce(e,!1);return r&&this._forceRenderFooterRows(),t||i||r}_switchDataSource(e){this._data=[],Pt(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),e||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet&&this._rowOutlet.viewContainer.clear()),this._dataSource=e}_observeRenderChanges(){if(!this.dataSource)return;let e;Pt(this.dataSource)?e=this.dataSource.connect(this):an(this.dataSource)?e=this.dataSource:Array.isArray(this.dataSource)&&(e=ue(this.dataSource)),this._renderChangeSubscription=je([e,this.viewChange]).pipe(V(this._onDestroy)).subscribe(([t,i])=>{this._data=t||[],this._renderedRange=i,this._dataStream.next(t),this.renderRows()})}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((e,t)=>this._renderRow(this._headerRowOutlet,e,t)),this.updateStickyHeaderRowStyles()}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((e,t)=>this._renderRow(this._footerRowOutlet,e,t)),this.updateStickyFooterRowStyles()}_addStickyColumnStyles(e,t){let i=Array.from(t?.columns||[]).map(l=>{let d=this._columnDefsByName.get(l);return d}),r=i.map(l=>l.sticky),a=i.map(l=>l.stickyEnd);this._stickyStyler.updateStickyColumns(e,r,a,!this.fixedLayout||this._forceRecalculateCellWidths)}_getRenderedRows(e){let t=[];for(let i=0;i<e.viewContainer.length;i++){let r=e.viewContainer.get(i);t.push(r.rootNodes[0])}return t}_getRowDefs(e,t){if(this._rowDefs.length===1)return[this._rowDefs[0]];let i=[];if(this.multiTemplateDataRows)i=this._rowDefs.filter(r=>!r.when||r.when(t,e));else{let r=this._rowDefs.find(a=>a.when&&a.when(t,e))||this._defaultRowDef;r&&i.push(r)}return i.length,i}_getEmbeddedViewArgs(e,t){let i=e.rowDef,r={$implicit:e.data};return{templateRef:i.template,context:r,index:t}}_renderRow(e,t,i,r={}){let a=e.viewContainer.createEmbeddedView(t.template,r,i);return this._renderCellTemplateForItem(t,r),a}_renderCellTemplateForItem(e,t){for(let i of this._getCellTemplates(e))dt.mostRecentCellOutlet&&dt.mostRecentCellOutlet._viewContainer.createEmbeddedView(i,t);this._changeDetectorRef.markForCheck()}_updateRowIndexContext(){let e=this._rowOutlet.viewContainer;for(let t=0,i=e.length;t<i;t++){let a=e.get(t).context;a.count=i,a.first=t===0,a.last=t===i-1,a.even=t%2===0,a.odd=!a.even,this.multiTemplateDataRows?(a.dataIndex=this._renderRows[t].dataIndex,a.renderIndex=t):a.index=this._renderRows[t].dataIndex}}_getCellTemplates(e){return!e||!e.columns?[]:Array.from(e.columns,t=>{let i=this._columnDefsByName.get(t);return e.extractCellTemplate(i)})}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows()}_checkStickyStates(){let e=(t,i)=>t||i.hasStickyChanged();this._headerRowDefs.reduce(e,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(e,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(e,!1)&&(this._stickyColumnStylesNeedReset=!0,this.updateStickyColumnStyles())}_setupStickyStyler(){let e=this._dir?this._dir.value:"ltr",t=this._injector;this._stickyStyler=new fn(this._isNativeHtmlTable,this.stickyCssClass,this._platform.isBrowser,this.needsPositionStickyOnElement,e,this,t),(this._dir?this._dir.change:ue()).pipe(V(this._onDestroy)).subscribe(i=>{this._stickyStyler.direction=i,this.updateStickyColumnStyles()})}_setupVirtualScrolling(e){let t=typeof requestAnimationFrame<"u"?rn:on;this.viewChange.next({start:0,end:0}),e.renderedRangeStream.pipe(kt(0,t),V(this._onDestroy)).subscribe(this.viewChange),e.attach({dataStream:this._dataStream,measureRangeSize:(i,r)=>this._measureRangeSize(i,r)}),je([e.renderedContentOffset,this._headerRowStickyUpdates]).pipe(V(this._onDestroy)).subscribe(([i,r])=>{if(!(!r.sizes||!r.offsets||!r.elements))for(let a=0;a<r.elements.length;a++){let l=r.elements[a];if(l){let d=r.offsets[a],f=i!==0?Math.max(i-d,d):-d;for(let u of l)u.style.top=`${-f}px`}}}),je([e.renderedContentOffset,this._footerRowStickyUpdates]).pipe(V(this._onDestroy)).subscribe(([i,r])=>{if(!(!r.sizes||!r.offsets||!r.elements))for(let a=0;a<r.elements.length;a++){let l=r.elements[a];if(l)for(let d of l)d.style.bottom=`${i+r.offsets[a]}px`}})}_getOwnDefs(e){return e.filter(t=>!t._table||t._table===this)}_updateNoDataRow(){let e=this._customNoDataRow||this._noDataRow;if(!e)return;let t=this._rowOutlet.viewContainer.length===0;if(t===this._isShowingNoDataRow)return;let i=this._noDataRowOutlet.viewContainer;if(t){let r=i.createEmbeddedView(e.templateRef),a=r.rootNodes[0];if(r.rootNodes.length===1&&a?.nodeType===this._document.ELEMENT_NODE){a.setAttribute("role","row"),a.classList.add(...e._contentClassNames);let l=a.querySelectorAll(e._cellSelector);for(let d=0;d<l.length;d++)l[d].classList.add(...e._cellClassNames)}}else i.clear();this._isShowingNoDataRow=t,this._changeDetectorRef.markForCheck()}_measureRangeSize(e,t){if(e.start>=e.end||t!=="vertical")return 0;let i=this.viewChange.value,r=this._rowOutlet.viewContainer;e.start<i.start||e.end>i.end;let a=e.start-i.start,l=e.end-e.start,d,f;for(let O=0;O<l;O++){let T=r.get(O+a);if(T&&T.rootNodes.length){d=f=T.rootNodes[0];break}}for(let O=l-1;O>-1;O--){let T=r.get(O+a);if(T&&T.rootNodes.length){f=T.rootNodes[T.rootNodes.length-1];break}}let u=d?.getBoundingClientRect?.(),_=f?.getBoundingClientRect?.();return u&&_?_.bottom-u.top:0}_virtualScrollEnabled(){return!this._disableVirtualScrolling&&this._virtualScrollViewport!=null}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=C({type:n,selectors:[["cdk-table"],["table","cdk-table",""]],contentQueries:function(t,i,r){if(t&1&&ot(r,cr,5)(r,yt,5)(r,ki,5)(r,zt,5)(r,_n,5),t&2){let a;M(a=I())&&(i._noDataRow=a.first),M(a=I())&&(i._contentColumnDefs=a),M(a=I())&&(i._contentRowDefs=a),M(a=I())&&(i._contentHeaderRowDefs=a),M(a=I())&&(i._contentFooterRowDefs=a)}},hostAttrs:[1,"cdk-table"],hostVars:2,hostBindings:function(t,i){t&2&&L("cdk-table-fixed-layout",i.fixedLayout)},inputs:{trackBy:"trackBy",dataSource:"dataSource",multiTemplateDataRows:[2,"multiTemplateDataRows","multiTemplateDataRows",w],fixedLayout:[2,"fixedLayout","fixedLayout",w],recycleRows:[2,"recycleRows","recycleRows",w]},outputs:{contentChanged:"contentChanged"},exportAs:["cdkTable"],features:[le([{provide:Ve,useExisting:n},{provide:Nt,useValue:null}])],ngContentSelectors:ms,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(t,i){t&1&&(oe(cs),P(0),P(1,1),A(2,us,1,0),A(3,hs,7,0)(4,fs,4,0)),t&2&&(h(2),F(i._isServer?2:-1),h(),F(i._isNativeHtmlTable?3:4))},dependencies:[yn,vn,wn,xn],styles:[`.cdk-table-fixed-layout {
  table-layout: fixed;
}
`],encapsulation:2})}return n})();function wi(n,o){return n.concat(Array.from(o))}function ar(n,o){let e=o.toUpperCase(),t=n.viewContainer.element.nativeElement;for(;t;){let i=t.nodeType===1?t.nodeName:null;if(i===e)return t;if(i==="TABLE")break;t=t.parentNode}return null}var mr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=S({imports:[Lt]})}return n})();var Bt=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new v;constructor(o=!1,e,t=!0,i){this._multiple=o,this._emitChanges=t,this.compareWith=i,e&&e.length&&(o?e.forEach(r=>this._markSelected(r)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...o){this._verifyValueAssignment(o),o.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...o){this._verifyValueAssignment(o),o.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...o){this._verifyValueAssignment(o);let e=this.selected,t=new Set(o.map(r=>this._getConcreteValue(r)));o.forEach(r=>this._markSelected(r)),e.filter(r=>!t.has(this._getConcreteValue(r,t))).forEach(r=>this._unmarkSelected(r));let i=this._hasQueuedChanges();return this._emitChangeEvent(),i}toggle(o){return this.isSelected(o)?this.deselect(o):this.select(o)}clear(o=!0){this._unmarkAll();let e=this._hasQueuedChanges();return o&&this._emitChangeEvent(),e}isSelected(o){return this._selection.has(this._getConcreteValue(o))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(o){this._multiple&&this.selected&&this._selected.sort(o)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(o){o=this._getConcreteValue(o),this.isSelected(o)||(this._multiple||this._unmarkAll(),this.isSelected(o)||this._selection.add(o),this._emitChanges&&this._selectedToEmit.push(o))}_unmarkSelected(o){o=this._getConcreteValue(o),this.isSelected(o)&&(this._selection.delete(o),this._emitChanges&&this._deselectedToEmit.push(o))}_unmarkAll(){this.isEmpty()||this._selection.forEach(o=>this._unmarkSelected(o))}_verifyValueAssignment(o){o.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(o,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(o,t))return t;return o}else return o}};function xt(n){return Array.isArray(n)?n:[n]}function ee(n){return n==null?"":typeof n=="string"?n:`${n}px`}function Vt(n){return n!=null&&`${n}`!="false"}var _s=[[["caption"]],[["colgroup"],["col"]],"*"],gs=["caption","colgroup, col","*"];function bs(n,o){n&1&&P(0,2)}function vs(n,o){n&1&&(c(0,"thead",0),xe(1,1),m(),c(2,"tbody",2),xe(3,3)(4,4),m(),c(5,"tfoot",0),xe(6,5),m())}function ys(n,o){n&1&&xe(0,1)(1,3)(2,4)(3,5)}var ur=(()=>{class n extends Cn{stickyCssClass="mat-mdc-table-sticky";needsPositionStickyOnElement=!1;static \u0275fac=(()=>{let e;return function(i){return(e||(e=ye(n)))(i||n)}})();static \u0275cmp=C({type:n,selectors:[["mat-table"],["table","mat-table",""]],hostAttrs:[1,"mat-mdc-table","mdc-data-table__table"],hostVars:2,hostBindings:function(t,i){t&2&&L("mat-table-fixed-layout",i.fixedLayout)},exportAs:["matTable"],features:[le([{provide:Cn,useExisting:n},{provide:Ve,useExisting:n},{provide:Nt,useValue:null}]),K],ngContentSelectors:gs,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["role","rowgroup",1,"mdc-data-table__content"],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(t,i){t&1&&(oe(_s),P(0),P(1,1),A(2,bs,1,0),A(3,vs,7,0)(4,ys,4,0)),t&2&&(h(2),F(i._isServer?2:-1),h(),F(i._isNativeHtmlTable?3:4))},dependencies:[yn,vn,wn,xn],styles:[`.mat-mdc-table-sticky {
  position: sticky !important;
}

mat-table {
  display: block;
}

mat-header-row {
  min-height: var(--mat-table-header-container-height, 56px);
}

mat-row {
  min-height: var(--mat-table-row-item-container-height, 52px);
}

mat-footer-row {
  min-height: var(--mat-table-footer-container-height, 52px);
}

mat-row, mat-header-row, mat-footer-row {
  display: flex;
  border-width: 0;
  border-bottom-width: 1px;
  border-style: solid;
  align-items: center;
  box-sizing: border-box;
}

mat-cell:first-of-type, mat-header-cell:first-of-type, mat-footer-cell:first-of-type {
  padding-left: 24px;
}
[dir=rtl] mat-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type) {
  padding-left: 0;
  padding-right: 24px;
}
mat-cell:last-of-type, mat-header-cell:last-of-type, mat-footer-cell:last-of-type {
  padding-right: 24px;
}
[dir=rtl] mat-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type) {
  padding-right: 0;
  padding-left: 24px;
}

mat-cell, mat-header-cell, mat-footer-cell {
  flex: 1;
  display: flex;
  align-items: center;
  overflow: hidden;
  word-wrap: break-word;
  min-height: inherit;
}

.mat-mdc-table {
  min-width: 100%;
  border: 0;
  border-spacing: 0;
  table-layout: auto;
  white-space: normal;
  background-color: var(--mat-table-background-color, var(--mat-sys-surface));
}

.mat-table-fixed-layout {
  table-layout: fixed;
}

.mdc-data-table__cell {
  box-sizing: border-box;
  overflow: hidden;
  text-align: start;
  text-overflow: ellipsis;
}

.mdc-data-table__cell,
.mdc-data-table__header-cell {
  padding: 0 16px;
}

.mat-mdc-header-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--mat-table-header-container-height, 56px);
  color: var(--mat-table-header-headline-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-table-header-headline-font, var(--mat-sys-title-small-font, Roboto, sans-serif));
  line-height: var(--mat-table-header-headline-line-height, var(--mat-sys-title-small-line-height));
  font-size: var(--mat-table-header-headline-size, var(--mat-sys-title-small-size, 14px));
  font-weight: var(--mat-table-header-headline-weight, var(--mat-sys-title-small-weight, 500));
}

.mat-mdc-row {
  height: var(--mat-table-row-item-container-height, 52px);
  color: var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
}

.mat-mdc-row,
.mdc-data-table__content {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-table-row-item-label-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--mat-table-row-item-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-table-row-item-label-text-size, var(--mat-sys-body-medium-size, 14px));
  font-weight: var(--mat-table-row-item-label-text-weight, var(--mat-sys-body-medium-weight));
}

.mat-mdc-footer-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--mat-table-footer-container-height, 52px);
  color: var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-table-footer-supporting-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--mat-table-footer-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-table-footer-supporting-text-size, var(--mat-sys-body-medium-size, 14px));
  font-weight: var(--mat-table-footer-supporting-text-weight, var(--mat-sys-body-medium-weight));
  letter-spacing: var(--mat-table-footer-supporting-text-tracking, var(--mat-sys-body-medium-tracking));
}

.mat-mdc-header-cell {
  border-bottom-color: var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--mat-table-header-headline-tracking, var(--mat-sys-title-small-tracking));
  font-weight: inherit;
  line-height: inherit;
  box-sizing: border-box;
  text-overflow: ellipsis;
  overflow: hidden;
  outline: none;
  text-align: start;
}
.mdc-data-table__row:last-child > .mat-mdc-header-cell {
  border-bottom: none;
}

.mat-mdc-cell {
  border-bottom-color: var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking));
  line-height: inherit;
}
.mdc-data-table__row:last-child > .mat-mdc-cell {
  border-bottom: none;
}

.mat-mdc-footer-cell {
  letter-spacing: var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking));
}

mat-row.mat-mdc-row,
mat-header-row.mat-mdc-header-row,
mat-footer-row.mat-mdc-footer-row {
  border-bottom: none;
}

.mat-mdc-table tbody,
.mat-mdc-table tfoot,
.mat-mdc-table thead,
.mat-mdc-cell,
.mat-mdc-footer-cell,
.mat-mdc-header-row,
.mat-mdc-row,
.mat-mdc-footer-row,
.mat-mdc-table .mat-mdc-header-cell {
  background: inherit;
}

.mat-mdc-table mat-header-row.mat-mdc-header-row,
.mat-mdc-table mat-row.mat-mdc-row,
.mat-mdc-table mat-footer-row.mat-mdc-footer-cell {
  height: unset;
}

mat-header-cell.mat-mdc-header-cell,
mat-cell.mat-mdc-cell,
mat-footer-cell.mat-mdc-footer-cell {
  align-self: stretch;
}
`],encapsulation:2})}return n})(),hr=(()=>{class n extends Di{static \u0275fac=(()=>{let e;return function(i){return(e||(e=ye(n)))(i||n)}})();static \u0275dir=g({type:n,selectors:[["","matCellDef",""]],features:[le([{provide:Di,useExisting:n}]),K]})}return n})(),fr=(()=>{class n extends Si{static \u0275fac=(()=>{let e;return function(i){return(e||(e=ye(n)))(i||n)}})();static \u0275dir=g({type:n,selectors:[["","matHeaderCellDef",""]],features:[le([{provide:Si,useExisting:n}]),K]})}return n})();var pr=(()=>{class n extends yt{get name(){return this._name}set name(e){this._setNameInput(e)}_updateColumnCssClassName(){super._updateColumnCssClassName(),this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`)}static \u0275fac=(()=>{let e;return function(i){return(e||(e=ye(n)))(i||n)}})();static \u0275dir=g({type:n,selectors:[["","matColumnDef",""]],inputs:{name:[0,"matColumnDef","name"]},features:[le([{provide:yt,useExisting:n}]),K]})}return n})(),_r=(()=>{class n extends lr{static \u0275fac=(()=>{let e;return function(i){return(e||(e=ye(n)))(i||n)}})();static \u0275dir=g({type:n,selectors:[["mat-header-cell"],["th","mat-header-cell",""]],hostAttrs:["role","columnheader",1,"mat-mdc-header-cell","mdc-data-table__header-cell"],features:[K]})}return n})();var gr=(()=>{class n extends dr{static \u0275fac=(()=>{let e;return function(i){return(e||(e=ye(n)))(i||n)}})();static \u0275dir=g({type:n,selectors:[["mat-cell"],["td","mat-cell",""]],hostAttrs:[1,"mat-mdc-cell","mdc-data-table__cell"],features:[K]})}return n})();var br=(()=>{class n extends zt{static \u0275fac=(()=>{let e;return function(i){return(e||(e=ye(n)))(i||n)}})();static \u0275dir=g({type:n,selectors:[["","matHeaderRowDef",""]],inputs:{columns:[0,"matHeaderRowDef","columns"],sticky:[2,"matHeaderRowDefSticky","sticky",w]},features:[le([{provide:zt,useExisting:n}]),K]})}return n})();var vr=(()=>{class n extends ki{static \u0275fac=(()=>{let e;return function(i){return(e||(e=ye(n)))(i||n)}})();static \u0275dir=g({type:n,selectors:[["","matRowDef",""]],inputs:{columns:[0,"matRowDefColumns","columns"],when:[0,"matRowDefWhen","when"]},features:[le([{provide:ki,useExisting:n}]),K]})}return n})(),yr=(()=>{class n extends gn{static \u0275fac=(()=>{let e;return function(i){return(e||(e=ye(n)))(i||n)}})();static \u0275cmp=C({type:n,selectors:[["mat-header-row"],["tr","mat-header-row",""]],hostAttrs:["role","row",1,"mat-mdc-header-row","mdc-data-table__header-row"],exportAs:["matHeaderRow"],features:[le([{provide:gn,useExisting:n}]),K],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,i){t&1&&xe(0,0)},dependencies:[dt],encapsulation:2})}return n})();var xr=(()=>{class n extends bn{static \u0275fac=(()=>{let e;return function(i){return(e||(e=ye(n)))(i||n)}})();static \u0275cmp=C({type:n,selectors:[["mat-row"],["tr","mat-row",""]],hostAttrs:["role","row",1,"mat-mdc-row","mdc-data-table__row"],exportAs:["matRow"],features:[le([{provide:bn,useExisting:n}]),K],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,i){t&1&&xe(0,0)},dependencies:[dt],encapsulation:2})}return n})();var wr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=S({imports:[mr,Q]})}return n})(),xs=9007199254740991,Ei=class extends Ft{_data;_renderData=new Ze([]);_filter=new Ze("");_internalPageChanges=new v;_renderChangesSubscription=null;filteredData;get data(){return this._data.value}set data(o){o=Array.isArray(o)?o:[],this._data.next(o),this._renderChangesSubscription||this._filterData(o)}get filter(){return this._filter.value}set filter(o){this._filter.next(o),this._renderChangesSubscription||this._filterData(this.data)}get sort(){return this._sort}set sort(o){this._sort=o,this._updateChangeSubscription()}_sort;get paginator(){return this._paginator}set paginator(o){this._paginator=o,this._updateChangeSubscription()}_paginator;sortingDataAccessor=(o,e)=>{let t=o[e];if(vi(t)){let i=Number(t);return i<xs?i:t}return t};sortData=(o,e)=>{let t=e.active,i=e.direction;return!t||i==""?o:o.sort((r,a)=>{let l=this.sortingDataAccessor(r,t),d=this.sortingDataAccessor(a,t),f=typeof l,u=typeof d;f!==u&&(f==="number"&&(l+=""),u==="number"&&(d+=""));let _=0;return l!=null&&d!=null?l>d?_=1:l<d&&(_=-1):l!=null?_=1:d!=null&&(_=-1),_*(i=="asc"?1:-1)})};filterPredicate=(o,e)=>{let t=e.trim().toLowerCase();return Object.values(o).some(i=>`${i}`.toLowerCase().includes(t))};constructor(o=[]){super(),this._data=new Ze(o),this._updateChangeSubscription()}_updateChangeSubscription(){let o=this._sort?Ye(this._sort.sortChange,this._sort.initialized):ue(null),e=this._paginator?Ye(this._paginator.page,this._internalPageChanges,this._paginator.initialized):ue(null),t=this._data,i=je([t,this._filter]).pipe(ie(([l])=>this._filterData(l))),r=je([i,o]).pipe(ie(([l])=>this._orderData(l))),a=je([r,e]).pipe(ie(([l])=>this._pageData(l)));this._renderChangesSubscription?.unsubscribe(),this._renderChangesSubscription=a.subscribe(l=>this._renderData.next(l))}_filterData(o){return this.filteredData=this.filter==null||this.filter===""?o:o.filter(e=>this.filterPredicate(e,this.filter)),this.paginator&&this._updatePaginator(this.filteredData.length),this.filteredData}_orderData(o){return this.sort?this.sortData(o.slice(),this.sort):o}_pageData(o){if(!this.paginator)return o;let e=this.paginator.pageIndex*this.paginator.pageSize;return o.slice(e,e+this.paginator.pageSize)}_updatePaginator(o){Promise.resolve().then(()=>{let e=this.paginator;if(e&&(e.length=o,e.pageIndex>0)){let t=Math.ceil(e.length/e.pageSize)-1||0,i=Math.min(e.pageIndex,t);i!==e.pageIndex&&(e.pageIndex=i,this._internalPageChanges.next())}})}connect(){return this._renderChangesSubscription||this._updateChangeSubscription(),this._renderData}disconnect(){this._renderChangesSubscription?.unsubscribe(),this._renderChangesSubscription=null}};function jt(n){return n.buttons===0||n.detail===0}function Ht(n){let o=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!!o&&o.identifier===-1&&(o.radiusX==null||o.radiusX===1)&&(o.radiusY==null||o.radiusY===1)}var Dn;function Cr(){if(Dn==null){let n=typeof document<"u"?document.head:null;Dn=!!(n&&(n.createShadowRoot||n.attachShadow))}return Dn}function Sn(n){if(Cr()){let o=n.getRootNode?n.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&o instanceof ShadowRoot)return o}return null}function ce(n){return n.composedPath?n.composedPath()[0]:n.target}var Ut;function Dr(){if(Ut==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>Ut=!0}))}finally{Ut=Ut||!1}return Ut}function wt(n){return Dr()?n:!!n.capture}var Sr=new b("cdk-input-modality-detector-options"),kr={ignoreKeys:[18,17,224,91,16]},Er=650,kn={passive:!0,capture:!0},Rr=(()=>{class n{_platform=s(W);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Ze(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(t=>t===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=ce(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<Er||(this._modality.next(jt(e)?"keyboard":"mouse"),this._mostRecentTarget=ce(e))};_onTouchstart=e=>{if(Ht(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=ce(e)};constructor(){let e=s(N),t=s(H),i=s(Sr,{optional:!0});if(this._options=q(q({},kr),i),this.modalityDetected=this._modality.pipe(si(1)),this.modalityChanged=this.modalityDetected.pipe(sn()),this._platform.isBrowser){let r=s(Le).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[r.listen(t,"keydown",this._onKeydown,kn),r.listen(t,"mousedown",this._onMousedown,kn),r.listen(t,"touchstart",this._onTouchstart,kn)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(t){return new(t||n)};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Wt=(function(n){return n[n.IMMEDIATE=0]="IMMEDIATE",n[n.EVENTUAL=1]="EVENTUAL",n})(Wt||{}),Mr=new b("cdk-focus-monitor-default-options"),Ri=wt({passive:!0,capture:!0}),Qt=(()=>{class n{_ngZone=s(N);_platform=s(W);_inputModalityDetector=s(Rr);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=s(H);_stopInputModalityDetector=new v;constructor(){let e=s(Mr,{optional:!0});this._detectionMode=e?.detectionMode||Wt.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let t=ce(e);for(let i=t;i;i=i.parentElement)e.type==="focus"?this._onFocus(e,i):this._onBlur(e,i)};monitor(e,t=!1){let i=We(e);if(!this._platform.isBrowser||i.nodeType!==1)return ue();let r=Sn(i)||this._document,a=this._elementInfo.get(i);if(a)return t&&(a.checkChildren=!0),a.subject;let l={checkChildren:t,subject:new v,rootNode:r};return this._elementInfo.set(i,l),this._registerGlobalListeners(l),l.subject}stopMonitoring(e){let t=We(e),i=this._elementInfo.get(t);i&&(i.subject.complete(),this._setClasses(t),this._elementInfo.delete(t),this._removeGlobalListeners(i))}focusVia(e,t,i){let r=We(e),a=this._document.activeElement;r===a?this._getClosestElementsInfo(r).forEach(([l,d])=>this._originChanged(l,t,d)):(this._setOrigin(t),typeof r.focus=="function"&&r.focus(i))}ngOnDestroy(){this._elementInfo.forEach((e,t)=>this.stopMonitoring(t))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===Wt.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,t){e.classList.toggle("cdk-focused",!!t),e.classList.toggle("cdk-touch-focused",t==="touch"),e.classList.toggle("cdk-keyboard-focused",t==="keyboard"),e.classList.toggle("cdk-mouse-focused",t==="mouse"),e.classList.toggle("cdk-program-focused",t==="program")}_setOrigin(e,t=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&t,this._detectionMode===Wt.IMMEDIATE){clearTimeout(this._originTimeoutId);let i=this._originFromTouchInteraction?Er:1;this._originTimeoutId=setTimeout(()=>this._origin=null,i)}})}_onFocus(e,t){let i=this._elementInfo.get(t),r=ce(e);!i||!i.checkChildren&&t!==r||this._originChanged(t,this._getFocusOrigin(r),i)}_onBlur(e,t){let i=this._elementInfo.get(t);!i||i.checkChildren&&e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||(this._setClasses(t),this._emitOrigin(i,null))}_emitOrigin(e,t){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(t))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let t=e.rootNode,i=this._rootNodeFocusListenerCount.get(t)||0;i||this._ngZone.runOutsideAngular(()=>{t.addEventListener("focus",this._rootNodeFocusAndBlurListener,Ri),t.addEventListener("blur",this._rootNodeFocusAndBlurListener,Ri)}),this._rootNodeFocusListenerCount.set(t,i+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(V(this._stopInputModalityDetector)).subscribe(r=>{this._setOrigin(r,!0)}))}_removeGlobalListeners(e){let t=e.rootNode;if(this._rootNodeFocusListenerCount.has(t)){let i=this._rootNodeFocusListenerCount.get(t);i>1?this._rootNodeFocusListenerCount.set(t,i-1):(t.removeEventListener("focus",this._rootNodeFocusAndBlurListener,Ri),t.removeEventListener("blur",this._rootNodeFocusAndBlurListener,Ri),this._rootNodeFocusListenerCount.delete(t))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,t,i){this._setClasses(e,t),this._emitOrigin(i,t),this._lastFocusOrigin=t}_getClosestElementsInfo(e){let t=[];return this._elementInfo.forEach((i,r)=>{(r===e||i.checkChildren&&r.contains(e))&&t.push([r,i])}),t}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:t,mostRecentModality:i}=this._inputModalityDetector;if(i!=="mouse"||!t||t===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let r=e.labels;if(r){for(let a=0;a<r.length;a++)if(r[a].contains(t))return!0}return!1}static \u0275fac=function(t){return new(t||n)};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Mi=new WeakMap,Te=(()=>{class n{_appRef;_injector=s(G);_environmentInjector=s(gt);load(e){let t=this._appRef=this._appRef||this._injector.get(It),i=Mi.get(t);i||(i={loaders:new Set,refs:[]},Mi.set(t,i),t.onDestroy(()=>{Mi.get(t)?.refs.forEach(r=>r.destroy()),Mi.delete(t)})),i.loaders.has(e)||(i.loaders.add(e),i.refs.push(fi(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Yt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=C({type:n,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(t,i){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2,changeDetection:0})}return n})(),Ii;function Cs(){if(Ii===void 0&&(Ii=null,typeof window<"u")){let n=window;n.trustedTypes!==void 0&&(Ii=n.trustedTypes.createPolicy("angular#components",{createHTML:o=>o}))}return Ii}function ct(n){return Cs()?.createHTML(n)||n}function Ir(n,o,e){let t=e.sanitize(tt.HTML,o);n.innerHTML=ct(t||"")}var Or=new Set,mt,Ct=(()=>{class n{_platform=s(W);_nonce=s(go,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Ss}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&Ds(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Ds(n,o){if(!Or.has(n))try{mt||(mt=document.createElement("style"),o&&mt.setAttribute("nonce",o),mt.setAttribute("type","text/css"),document.head.appendChild(mt)),mt.sheet&&(mt.sheet.insertRule(`@media ${n} {body{ }}`,0),Or.add(n))}catch(e){console.error(e)}}function Ss(n){return{matches:n==="all"||n==="",media:n,addListener:()=>{},removeListener:()=>{}}}var En=(()=>{class n{_mediaMatcher=s(Ct);_zone=s(N);_queries=new Map;_destroySubject=new v;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return Tr(xt(e)).some(i=>this._registerQuery(i).mql.matches)}observe(e){let i=Tr(xt(e)).map(a=>this._registerQuery(a).observable),r=je(i);return r=lo(r.pipe(pt(1)),r.pipe(si(1),ai(0))),r.pipe(ie(a=>{let l={matches:!1,breakpoints:{}};return a.forEach(({matches:d,query:f})=>{l.matches=l.matches||d,l.breakpoints[f]=d}),l}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let t=this._mediaMatcher.matchMedia(e),r={observable:new Ke(a=>{let l=d=>this._zone.run(()=>a.next(d));return t.addListener(l),()=>{t.removeListener(l)}}).pipe(Je(t),ie(({matches:a})=>({query:e,matches:a})),V(this._destroySubject)),mql:t};return this._queries.set(e,r),r}static \u0275fac=function(t){return new(t||n)};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Tr(n){return n.map(o=>o.split(",")).reduce((o,e)=>o.concat(e)).map(o=>o.trim())}var ks=(()=>{class n{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Oi=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=S({providers:[ks]})}return n})();var Pr=new b("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),Lr=new b("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),Es=0,Mn=(()=>{class n{_ngZone=s(N);_defaultOptions=s(Lr,{optional:!0});_liveElement;_document=s(H);_sanitizer=s(_i);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=s(Pr,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...t){let i=this._defaultOptions,r,a;return t.length===1&&typeof t[0]=="number"?a=t[0]:[r,a]=t,this.clear(),clearTimeout(this._previousTimeout),r||(r=i&&i.politeness?i.politeness:"polite"),a==null&&i&&(a=i.duration),this._liveElement.setAttribute("aria-live",r),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(l=>this._currentResolve=l)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e=="string"?this._liveElement.textContent=e:Ir(this._liveElement,e,this._sanitizer),typeof a=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),a)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e="cdk-live-announcer-element",t=this._document.getElementsByClassName(e),i=this._document.createElement("div");for(let r=0;r<t.length;r++)t[r].remove();return i.classList.add(e),i.classList.add("cdk-visually-hidden"),i.setAttribute("aria-atomic","true"),i.setAttribute("aria-live","polite"),i.id=`cdk-live-announcer-${Es++}`,this._document.body.appendChild(i),i}_exposeAnnouncerToModals(e){let t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let i=0;i<t.length;i++){let r=t[i],a=r.getAttribute("aria-owns");a?a.indexOf(e)===-1&&r.setAttribute("aria-owns",a+" "+e):r.setAttribute("aria-owns",e)}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var nt=(function(n){return n[n.NONE=0]="NONE",n[n.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",n[n.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",n})(nt||{}),Ar="cdk-high-contrast-black-on-white",Fr="cdk-high-contrast-white-on-black",Rn="cdk-high-contrast-active",Nr=(()=>{class n{_platform=s(W);_hasCheckedHighContrastMode=!1;_document=s(H);_breakpointSubscription;constructor(){this._breakpointSubscription=s(En).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return nt.NONE;let e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);let t=this._document.defaultView||window,i=t&&t.getComputedStyle?t.getComputedStyle(e):null,r=(i&&i.backgroundColor||"").replace(/ /g,"");switch(e.remove(),r){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return nt.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return nt.BLACK_ON_WHITE}return nt.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(Rn,Ar,Fr),this._hasCheckedHighContrastMode=!0;let t=this.getHighContrastMode();t===nt.BLACK_ON_WHITE?e.add(Rn,Ar):t===nt.WHITE_ON_BLACK&&e.add(Rn,Fr)}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),In=(()=>{class n{constructor(){s(Nr)._applyBodyHighContrastModeCssClasses()}static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=S({imports:[Oi]})}return n})();var Rs=200,Ti=class{_letterKeyStream=new v;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new v;selectedItem=this._selectedItem;constructor(o,e){let t=typeof e?.debounceInterval=="number"?e.debounceInterval:Rs;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(o),this._setupKeyHandler(t)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(o){this._selectedItemIndex=o}setItems(o){this._items=o}handleKey(o){let e=o.keyCode;o.key&&o.key.length===1?this._letterKeyStream.next(o.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(o){this._letterKeyStream.pipe(_t(e=>this._pressedLetters.push(e)),ai(o),Ce(()=>this._pressedLetters.length>0),ie(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let t=1;t<this._items.length+1;t++){let i=(this._selectedItemIndex+t)%this._items.length,r=this._items[i];if(!this._skipPredicateFn?.(r)&&r.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(r);break}}this._pressedLetters=[]})}};function Ae(n,...o){return o.length?o.some(e=>n[e]):n.altKey||n.shiftKey||n.ctrlKey||n.metaKey}var Ai=class{_items;_activeItemIndex=Re(-1);_activeItem=Re(null);_wrap=!1;_typeaheadSubscription=ve.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=o=>o.disabled;constructor(o,e){this._items=o,o instanceof cn?this._itemChangesSubscription=o.changes.subscribe(t=>this._itemsChanged(t.toArray())):Mt(o)&&(this._effectRef=Rt(()=>this._itemsChanged(o()),{injector:e}))}tabOut=new v;change=new v;skipPredicate(o){return this._skipPredicateFn=o,this}withWrap(o=!0){return this._wrap=o,this}withVerticalOrientation(o=!0){return this._vertical=o,this}withHorizontalOrientation(o){return this._horizontal=o,this}withAllowedModifierKeys(o){return this._allowedModifierKeys=o,this}withTypeAhead(o=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new Ti(e,{debounceInterval:typeof o=="number"?o:void 0,skipPredicate:t=>this._skipPredicateFn(t)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(t=>{this.setActiveItem(t)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(o=!0){return this._homeAndEnd=o,this}withPageUpDown(o=!0,e=10){return this._pageUpAndDown={enabled:o,delta:e},this}setActiveItem(o){let e=this._activeItem();this.updateActiveItem(o),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(o){let e=o.keyCode,i=["altKey","ctrlKey","metaKey","shiftKey"].every(r=>!o[r]||this._allowedModifierKeys.indexOf(r)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&i){this.setNextItemActive();break}else return;case 38:if(this._vertical&&i){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&i){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&i){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&i){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&i){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&i){let r=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(r>0?r:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&i){let r=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(r<a?r:a-1,-1);break}else return;default:(i||Ae(o,"shiftKey"))&&this._typeahead?.handleKey(o);return}this._typeahead?.reset(),o.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(o){let e=this._getItemsArray(),t=typeof o=="number"?o:e.indexOf(o),i=e[t];this._activeItem.set(i??null),this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(o){this._wrap?this._setActiveInWrapMode(o):this._setActiveInDefaultMode(o)}_setActiveInWrapMode(o){let e=this._getItemsArray();for(let t=1;t<=e.length;t++){let i=(this._activeItemIndex()+o*t+e.length)%e.length,r=e[i];if(!this._skipPredicateFn(r)){this.setActiveItem(i);return}}}_setActiveInDefaultMode(o){this._setActiveItemByIndex(this._activeItemIndex()+o,o)}_setActiveItemByIndex(o,e){let t=this._getItemsArray();if(t[o]){for(;this._skipPredicateFn(t[o]);)if(o+=e,!t[o])return;this.setActiveItem(o)}}_getItemsArray(){return Mt(this._items)?this._items():this._items instanceof cn?this._items.toArray():this._items}_itemsChanged(o){this._typeahead?.setItems(o);let e=this._activeItem();if(e){let t=o.indexOf(e);t>-1&&t!==this._activeItemIndex()&&(this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t))}}};var qt=class extends Ai{setActiveItem(o){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(o),this.activeItem&&this.activeItem.setActiveStyles()}};var An={},we=class n{_appId=s(ci);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(o,e=!1){return this._appId!=="ng"&&(o+=this._appId),An.hasOwnProperty(o)||(An[o]=0),`${o}${e?n._infix+"-":""}${An[o]++}`}static \u0275fac=function(e){return new(e||n)};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})};var Hr=" ";function Ln(n,o,e){let t=Pi(n,o);e=e.trim(),!t.some(i=>i.trim()===e)&&(t.push(e),n.setAttribute(o,t.join(Hr)))}function Li(n,o,e){let t=Pi(n,o);e=e.trim();let i=t.filter(r=>r!==e);i.length?n.setAttribute(o,i.join(Hr)):n.removeAttribute(o)}function Pi(n,o){return n.getAttribute(o)?.match(/\S+/g)??[]}var Ur="cdk-describedby-message",Fi="cdk-describedby-host",Pn=0,Wr=(()=>{class n{_platform=s(W);_document=s(H);_messageRegistry=new Map;_messagesContainer=null;_id=`${Pn++}`;constructor(){s(Te).load(Yt),this._id=s(ci)+"-"+Pn++}describe(e,t,i){if(!this._canBeDescribed(e,t))return;let r=Fn(t,i);typeof t!="string"?(jr(t,this._id),this._messageRegistry.set(r,{messageElement:t,referenceCount:0})):this._messageRegistry.has(r)||this._createMessageElement(t,i),this._isElementDescribedByMessage(e,r)||this._addMessageReference(e,r)}removeDescription(e,t,i){if(!t||!this._isElementNode(e))return;let r=Fn(t,i);if(this._isElementDescribedByMessage(e,r)&&this._removeMessageReference(e,r),typeof t=="string"){let a=this._messageRegistry.get(r);a&&a.referenceCount===0&&this._deleteMessageElement(r)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let e=this._document.querySelectorAll(`[${Fi}="${this._id}"]`);for(let t=0;t<e.length;t++)this._removeCdkDescribedByReferenceIds(e[t]),e[t].removeAttribute(Fi);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(e,t){let i=this._document.createElement("div");jr(i,this._id),i.textContent=e,t&&i.setAttribute("role",t),this._createMessagesContainer(),this._messagesContainer.appendChild(i),this._messageRegistry.set(Fn(e,t),{messageElement:i,referenceCount:0})}_deleteMessageElement(e){this._messageRegistry.get(e)?.messageElement?.remove(),this._messageRegistry.delete(e)}_createMessagesContainer(){if(this._messagesContainer)return;let e="cdk-describedby-message-container",t=this._document.querySelectorAll(`.${e}[platform="server"]`);for(let r=0;r<t.length;r++)t[r].remove();let i=this._document.createElement("div");i.style.visibility="hidden",i.classList.add(e),i.classList.add("cdk-visually-hidden"),this._platform.isBrowser||i.setAttribute("platform","server"),this._document.body.appendChild(i),this._messagesContainer=i}_removeCdkDescribedByReferenceIds(e){let t=Pi(e,"aria-describedby").filter(i=>i.indexOf(Ur)!=0);e.setAttribute("aria-describedby",t.join(" "))}_addMessageReference(e,t){let i=this._messageRegistry.get(t);Ln(e,"aria-describedby",i.messageElement.id),e.setAttribute(Fi,this._id),i.referenceCount++}_removeMessageReference(e,t){let i=this._messageRegistry.get(t);i.referenceCount--,Li(e,"aria-describedby",i.messageElement.id),e.removeAttribute(Fi)}_isElementDescribedByMessage(e,t){let i=Pi(e,"aria-describedby"),r=this._messageRegistry.get(t),a=r&&r.messageElement.id;return!!a&&i.indexOf(a)!=-1}_canBeDescribed(e,t){if(!this._isElementNode(e))return!1;if(t&&typeof t=="object")return!0;let i=t==null?"":`${t}`.trim(),r=e.getAttribute("aria-label");return i?!r||r.trim()!==i:!1}_isElementNode(e){return e.nodeType===this._document.ELEMENT_NODE}static \u0275fac=function(t){return new(t||n)};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Fn(n,o){return typeof n=="string"?`${o||""}/${n}`:n}function jr(n,o){n.id||(n.id=`${Ur}-${o}-${Pn++}`)}function Nn(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var zn=class{_box;_destroyed=new v;_resizeSubject=new v;_resizeObserver;_elementObservables=new Map;constructor(o){this._box=o,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(o){return this._elementObservables.has(o)||this._elementObservables.set(o,new Ke(e=>{let t=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(o,{box:this._box}),()=>{this._resizeObserver?.unobserve(o),t.unsubscribe(),this._elementObservables.delete(o)}}).pipe(Ce(e=>e.some(t=>t.target===o)),dn({bufferSize:1,refCount:!0}),V(this._destroyed))),this._elementObservables.get(o)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},Qr=(()=>{class n{_cleanupErrorListener;_observers=new Map;_ngZone=s(N);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,t){let i=t?.box||"content-box";return this._observers.has(i)||this._observers.set(i,new zn(i)),this._observers.get(i).observe(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Ms=new b("MATERIAL_ANIMATIONS"),Yr=null;function Is(){return s(Ms,{optional:!0})?.animationsDisabled||s(mi,{optional:!0})==="NoopAnimations"?"di-disabled":(Yr??=s(Ct).matchMedia("(prefers-reduced-motion)").matches,Yr?"reduced-motion":"enabled")}function be(){return Is()!=="enabled"}var Os=["notch"],Ts=["matFormFieldNotchedOutline",""],As=["*"],qr=["iconPrefixContainer"],Gr=["textPrefixContainer"],Xr=["iconSuffixContainer"],$r=["textSuffixContainer"],Fs=["textField"],Ps=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],Ls=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function Ns(n,o){n&1&&U(0,"span",21)}function zs(n,o){if(n&1&&(c(0,"label",20),P(1,1),A(2,Ns,1,0,"span",21),m()),n&2){let e=y(2);D("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),J("for",e._control.disableAutomaticLabeling?null:e._control.id),h(2),F(!e.hideRequiredMarker&&e._control.required?2:-1)}}function Bs(n,o){if(n&1&&A(0,zs,3,5,"label",20),n&2){let e=y();F(e._hasFloatingLabel()?0:-1)}}function Vs(n,o){n&1&&U(0,"div",7)}function js(n,o){}function Hs(n,o){if(n&1&&z(0,js,0,0,"ng-template",13),n&2){y(2);let e=rt(1);D("ngTemplateOutlet",e)}}function Us(n,o){if(n&1&&(c(0,"div",9),A(1,Hs,1,1,null,13),m()),n&2){let e=y();D("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),h(),F(e._forceDisplayInfixLabel()?-1:1)}}function Ws(n,o){n&1&&(c(0,"div",10,2),P(2,2),m())}function Qs(n,o){n&1&&(c(0,"div",11,3),P(2,3),m())}function Ys(n,o){}function qs(n,o){if(n&1&&z(0,Ys,0,0,"ng-template",13),n&2){y();let e=rt(1);D("ngTemplateOutlet",e)}}function Gs(n,o){n&1&&(c(0,"div",14,4),P(2,4),m())}function Xs(n,o){n&1&&(c(0,"div",15,5),P(2,5),m())}function $s(n,o){n&1&&U(0,"div",16)}function Ks(n,o){n&1&&(c(0,"div",18),P(1,6),m())}function Zs(n,o){if(n&1&&(c(0,"mat-hint",22),p(1),m()),n&2){let e=y(2);D("id",e._hintLabelId),h(),Xe(e.hintLabel)}}function Js(n,o){if(n&1&&(c(0,"div",19),A(1,Zs,2,2,"mat-hint",22),P(2,7),U(3,"div",23),P(4,8),m()),n&2){let e=y();h(),F(e.hintLabel?1:-1)}}var Bn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=g({type:n,selectors:[["mat-label"]]})}return n})(),el=new b("MatError");var Vn=(()=>{class n{align="start";id=s(we).getId("mat-mdc-hint-");static \u0275fac=function(t){return new(t||n)};static \u0275dir=g({type:n,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(t,i){t&2&&(ui("id",i.id),J("align",null),L("mat-mdc-form-field-hint-end",i.align==="end"))},inputs:{align:"align",id:"id"}})}return n})(),tl=new b("MatPrefix");var il=new b("MatSuffix");var na=new b("FloatingLabelParent"),Kr=(()=>{class n{_elementRef=s(k);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=s(Qr);_ngZone=s(N);_parent=s(na);_resizeSubscription=new ve;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return nl(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(t){return new(t||n)};static \u0275dir=g({type:n,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(t,i){t&2&&L("mdc-floating-label--float-above",i.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return n})();function nl(n){let o=n;if(o.offsetParent!==null)return o.scrollWidth;let e=o.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let t=e.scrollWidth;return e.remove(),t}var Zr="mdc-line-ripple--active",Ni="mdc-line-ripple--deactivating",Jr=(()=>{class n{_elementRef=s(k);_cleanupTransitionEnd;constructor(){let e=s(N),t=s(Ne);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=t.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(Ni),e.add(Zr)}deactivate(){this._elementRef.nativeElement.classList.add(Ni)}_handleTransitionEnd=e=>{let t=this._elementRef.nativeElement.classList,i=t.contains(Ni);e.propertyName==="opacity"&&i&&t.remove(Zr,Ni)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=g({type:n,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return n})(),ea=(()=>{class n{_elementRef=s(k);_ngZone=s(N);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,t=e.querySelector(".mdc-floating-label");t?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(t.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>t.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let t=this._notch.nativeElement;!this.open||!e?t.style.width="":t.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=C({type:n,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(t,i){if(t&1&&ke(Os,5),t&2){let r;M(r=I())&&(i._notch=r.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(t,i){t&2&&L("mdc-notched-outline--notched",i.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:Ts,ngContentSelectors:As,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(t,i){t&1&&(oe(),Ge(0,"div",1),He(1,"div",2,0),P(3),qe(),Ge(4,"div",3))},encapsulation:2,changeDetection:0})}return n})(),jn=(()=>{class n{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(t){return new(t||n)};static \u0275dir=g({type:n})}return n})();var Hn=new b("MatFormField"),ol=new b("MAT_FORM_FIELD_DEFAULT_OPTIONS"),ta="fill",rl="auto",ia="fixed",al="translateY(-50%)",zi=(()=>{class n{_elementRef=s(k);_changeDetectorRef=s(ge);_platform=s(W);_idGenerator=s(we);_ngZone=s(N);_defaults=s(ol,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=Tt("iconPrefixContainer");_textPrefixContainerSignal=Tt("textPrefixContainer");_iconSuffixContainerSignal=Tt("iconSuffixContainer");_textSuffixContainerSignal=Tt("textSuffixContainer");_prefixSuffixContainers=hi(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=Oo(Bn);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=Vt(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||rl}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let t=e||this._defaults?.appearance||ta;this._appearanceSignal.set(t)}_appearanceSignal=Re(ta);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||ia}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||ia}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new v;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=be();constructor(){let e=this._defaults,t=s(Oe);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),Rt(()=>this._currentDirection=t.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=hi(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let t=this._control,i="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(i+e.controlType),t.controlType&&this._elementRef.nativeElement.classList.add(i+t.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=t.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=t.stateChanges.pipe(Je([void 0,void 0]),ie(()=>[t.errorState,t.userAriaDescribedBy]),ln(),Ce(([[r,a],[l,d]])=>r!==l||a!==d)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),t.ngControl&&t.ngControl.valueChanges&&(this._valueChanges=t.ngControl.valueChanges.pipe(V(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),Ye(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){To({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=hi(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let t=this._control?this._control.ngControl:null;return t&&t[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let r=this._hintChildren?this._hintChildren.find(l=>l.align==="start"):null,a=this._hintChildren?this._hintChildren.find(l=>l.align==="end"):null;r?e.push(r.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id)}else this._errorChildren&&e.push(...this._errorChildren.map(r=>r.id));let t=this._control.describedByIds,i;if(t){let r=this._describedByIds||e;i=e.concat(t.filter(a=>a&&!r.includes(a)))}else i=e;this._control.setDescribedByIds(i),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,t=this._textPrefixContainer?.nativeElement,i=this._iconSuffixContainer?.nativeElement,r=this._textSuffixContainer?.nativeElement,a=e?.getBoundingClientRect().width??0,l=t?.getBoundingClientRect().width??0,d=i?.getBoundingClientRect().width??0,f=r?.getBoundingClientRect().width??0,u=this._currentDirection==="rtl"?"-1":"1",_=`${a+l}px`,T=`calc(${u} * (${_} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,$=`var(--mat-mdc-form-field-label-transform, ${al} translateX(${T}))`,X=a+l+d+f;return[$,X]}_writeOutlinedLabelStyles(e){if(e!==null){let[t,i]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=t),i!==null&&this._notchedOutline?._setMaxWidth(i)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let t=e.getRootNode();return t&&t!==e}return document.documentElement.contains(e)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=C({type:n,selectors:[["mat-form-field"]],contentQueries:function(t,i,r){if(t&1&&(Do(r,i._labelChild,Bn,5),ot(r,jn,5)(r,tl,5)(r,il,5)(r,el,5)(r,Vn,5)),t&2){mn();let a;M(a=I())&&(i._formFieldControl=a.first),M(a=I())&&(i._prefixChildren=a),M(a=I())&&(i._suffixChildren=a),M(a=I())&&(i._errorChildren=a),M(a=I())&&(i._hintChildren=a)}},viewQuery:function(t,i){if(t&1&&(So(i._iconPrefixContainerSignal,qr,5)(i._textPrefixContainerSignal,Gr,5)(i._iconSuffixContainerSignal,Xr,5)(i._textSuffixContainerSignal,$r,5),ke(Fs,5)(qr,5)(Gr,5)(Xr,5)($r,5)(Kr,5)(ea,5)(Jr,5)),t&2){mn(4);let r;M(r=I())&&(i._textField=r.first),M(r=I())&&(i._iconPrefixContainer=r.first),M(r=I())&&(i._textPrefixContainer=r.first),M(r=I())&&(i._iconSuffixContainer=r.first),M(r=I())&&(i._textSuffixContainer=r.first),M(r=I())&&(i._floatingLabel=r.first),M(r=I())&&(i._notchedOutline=r.first),M(r=I())&&(i._lineRipple=r.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(t,i){t&2&&L("mat-mdc-form-field-label-always-float",i._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",i._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",i._hasIconSuffix)("mat-form-field-invalid",i._control.errorState)("mat-form-field-disabled",i._control.disabled)("mat-form-field-autofilled",i._control.autofilled)("mat-form-field-appearance-fill",i.appearance=="fill")("mat-form-field-appearance-outline",i.appearance=="outline")("mat-form-field-hide-placeholder",i._hasFloatingLabel()&&!i._shouldLabelFloat())("mat-primary",i.color!=="accent"&&i.color!=="warn")("mat-accent",i.color==="accent")("mat-warn",i.color==="warn")("ng-untouched",i._shouldForward("untouched"))("ng-touched",i._shouldForward("touched"))("ng-pristine",i._shouldForward("pristine"))("ng-dirty",i._shouldForward("dirty"))("ng-valid",i._shouldForward("valid"))("ng-invalid",i._shouldForward("invalid"))("ng-pending",i._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[le([{provide:Hn,useExisting:n},{provide:na,useExisting:n}])],ngContentSelectors:Ls,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(t,i){if(t&1&&(oe(Ps),z(0,Bs,1,1,"ng-template",null,0,Io),c(2,"div",6,1),B("click",function(a){return i._control.onContainerClick(a)}),A(4,Vs,1,0,"div",7),c(5,"div",8),A(6,Us,2,2,"div",9),A(7,Ws,3,0,"div",10),A(8,Qs,3,0,"div",11),c(9,"div",12),A(10,qs,1,1,null,13),P(11),m(),A(12,Gs,3,0,"div",14),A(13,Xs,3,0,"div",15),m(),A(14,$s,1,0,"div",16),m(),c(15,"div",17),A(16,Ks,2,0,"div",18)(17,Js,5,1,"div",19),m()),t&2){let r;h(2),L("mdc-text-field--filled",!i._hasOutline())("mdc-text-field--outlined",i._hasOutline())("mdc-text-field--no-label",!i._hasFloatingLabel())("mdc-text-field--disabled",i._control.disabled)("mdc-text-field--invalid",i._control.errorState),h(2),F(!i._hasOutline()&&!i._control.disabled?4:-1),h(2),F(i._hasOutline()?6:-1),h(),F(i._hasIconPrefix?7:-1),h(),F(i._hasTextPrefix?8:-1),h(2),F(!i._hasOutline()||i._forceDisplayInfixLabel()?10:-1),h(2),F(i._hasTextSuffix?12:-1),h(),F(i._hasIconSuffix?13:-1),h(),F(i._hasOutline()?-1:14),h(),L("mat-mdc-form-field-subscript-dynamic-size",i.subscriptSizing==="dynamic");let a=i._getSubscriptMessageType();h(),F((r=a)==="error"?16:r==="hint"?17:-1)}},dependencies:[Kr,ea,Lo,Jr,Vn],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-filled-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
  border-top-right-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) {
  background-color: var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));
  border-width: var(--mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error));
}

.mdc-line-ripple--active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--mat-form-field-container-height, 56px);
  padding-top: var(--mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--mat-form-field-error-text-color, var(--mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));
  letter-spacing: var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));
  font-weight: var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));
  font-weight: var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--mat-form-field-outlined-label-text-populated-size) * var(--mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2,changeDetection:0})}return n})();var Gt=class{_attachedHost=null;attach(o){return this._attachedHost=o,o.attach(this)}detach(){let o=this._attachedHost;o!=null&&(this._attachedHost=null,o.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(o){this._attachedHost=o}},Xt=class extends Gt{component;viewContainerRef;injector;projectableNodes;bindings;constructor(o,e,t,i,r){super(),this.component=o,this.viewContainerRef=e,this.injector=t,this.projectableNodes=i,this.bindings=r||null}},$t=class extends Gt{templateRef;viewContainerRef;context;injector;constructor(o,e,t,i){super(),this.templateRef=o,this.viewContainerRef=e,this.context=t,this.injector=i}get origin(){return this.templateRef.elementRef}attach(o,e=this.context){return this.context=e,super.attach(o)}detach(){return this.context=void 0,super.detach()}},Un=class extends Gt{element;constructor(o){super(),this.element=o instanceof k?o.nativeElement:o}},Wn=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(o){if(o instanceof Xt)return this._attachedPortal=o,this.attachComponentPortal(o);if(o instanceof $t)return this._attachedPortal=o,this.attachTemplatePortal(o);if(this.attachDomPortal&&o instanceof Un)return this._attachedPortal=o,this.attachDomPortal(o)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(o){this._disposeFn=o}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},Bi=class extends Wn{outletElement;_appRef;_defaultInjector;constructor(o,e,t){super(),this.outletElement=o,this._appRef=e,this._defaultInjector=t}attachComponentPortal(o){let e;if(o.viewContainerRef){let t=o.injector||o.viewContainerRef.injector,i=t.get(bo,null,{optional:!0})||void 0;e=o.viewContainerRef.createComponent(o.component,{index:o.viewContainerRef.length,injector:t,ngModuleRef:i,projectableNodes:o.projectableNodes||void 0,bindings:o.bindings||void 0}),this.setDisposeFn(()=>e.destroy())}else{let t=this._appRef,i=o.injector||this._defaultInjector||G.NULL,r=i.get(gt,t.injector);e=fi(o.component,{elementInjector:i,environmentInjector:r,projectableNodes:o.projectableNodes||void 0,bindings:o.bindings||void 0}),t.attachView(e.hostView),this.setDisposeFn(()=>{t.viewCount>0&&t.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=o,e}attachTemplatePortal(o){let e=o.viewContainerRef,t=e.createEmbeddedView(o.templateRef,o.context,{injector:o.injector});return t.rootNodes.forEach(i=>this.outletElement.appendChild(i)),t.detectChanges(),this.setDisposeFn(()=>{let i=e.indexOf(t);i!==-1&&e.remove(i)}),this._attachedPortal=o,t}attachDomPortal=o=>{let e=o.element;e.parentNode;let t=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(t,e),this.outletElement.appendChild(e),this._attachedPortal=o,super.setDisposeFn(()=>{t.parentNode&&t.parentNode.replaceChild(e,t)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(o){return o.hostView.rootNodes[0]}};var oa=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=S({})}return n})();var ra=ir();function ua(n){return new Vi(n.get(Qe),n.get(H))}var Vi=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(o,e){this._viewportRuler=o,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let o=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=o.style.left||"",this._previousHTMLStyles.top=o.style.top||"",o.style.left=ee(-this._previousScrollPosition.left),o.style.top=ee(-this._previousScrollPosition.top),o.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let o=this._document.documentElement,e=this._document.body,t=o.style,i=e.style,r=t.scrollBehavior||"",a=i.scrollBehavior||"";this._isEnabled=!1,t.left=this._previousHTMLStyles.left,t.top=this._previousHTMLStyles.top,o.classList.remove("cdk-global-scrollblock"),ra&&(t.scrollBehavior=i.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),ra&&(t.scrollBehavior=r,i.scrollBehavior=a)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,t=this._viewportRuler.getViewportSize();return e.scrollHeight>t.height||e.scrollWidth>t.width}};function ha(n,o){return new ji(n.get(vt),n.get(N),n.get(Qe),o)}var ji=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(o,e,t,i){this._scrollDispatcher=o,this._ngZone=e,this._viewportRuler=t,this._config=i}attach(o){this._overlayRef,this._overlayRef=o}enable(){if(this._scrollSubscription)return;let o=this._scrollDispatcher.scrolled(0).pipe(Ce(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=o.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=o.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var Kt=class{enable(){}disable(){}attach(){}};function Qn(n,o){return o.some(e=>{let t=n.bottom<e.top,i=n.top>e.bottom,r=n.right<e.left,a=n.left>e.right;return t||i||r||a})}function aa(n,o){return o.some(e=>{let t=n.top<e.top,i=n.bottom>e.bottom,r=n.left<e.left,a=n.right>e.right;return t||i||r||a})}function ht(n,o){return new Hi(n.get(vt),n.get(Qe),n.get(N),o)}var Hi=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(o,e,t,i){this._scrollDispatcher=o,this._viewportRuler=e,this._ngZone=t,this._config=i}attach(o){this._overlayRef,this._overlayRef=o}enable(){if(!this._scrollSubscription){let o=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(o).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:t,height:i}=this._viewportRuler.getViewportSize();Qn(e,[{width:t,height:i,bottom:i,right:t,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},fa=(()=>{class n{_injector=s(G);constructor(){}noop=()=>new Kt;close=e=>ha(this._injector,e);block=()=>ua(this._injector);reposition=e=>ht(this._injector,e);static \u0275fac=function(t){return new(t||n)};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Zt=class{positionStrategy;scrollStrategy=new Kt;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(o){if(o){let e=Object.keys(o);for(let t of e)o[t]!==void 0&&(this[t]=o[t])}}};var Ui=class{connectionPair;scrollableViewProperties;constructor(o,e){this.connectionPair=o,this.scrollableViewProperties=e}};var pa=(()=>{class n{_attachedOverlays=[];_document=s(H);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let t=this._attachedOverlays.indexOf(e);t>-1&&this._attachedOverlays.splice(t,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,t,i){return i.observers.length<1?!1:e.eventPredicate?e.eventPredicate(t):!0}static \u0275fac=function(t){return new(t||n)};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),_a=(()=>{class n extends pa{_ngZone=s(N);_renderer=s(Le).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let t=this._attachedOverlays;for(let i=t.length-1;i>-1;i--){let r=t[i];if(this.canReceiveEvent(r,e,r._keydownEvents)){this._ngZone.run(()=>r._keydownEvents.next(e));break}}};static \u0275fac=(()=>{let e;return function(i){return(e||(e=ye(n)))(i||n)}})();static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),ga=(()=>{class n extends pa{_platform=s(W);_ngZone=s(N);_renderer=s(Le).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let t=this._document.body,i={capture:!0},r=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[r.listen(t,"pointerdown",this._pointerDownListener,i),r.listen(t,"click",this._clickListener,i),r.listen(t,"auxclick",this._clickListener,i),r.listen(t,"contextmenu",this._clickListener,i)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=t.style.cursor,t.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=ce(e)};_clickListener=e=>{let t=ce(e),i=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:t;this._pointerDownEventTarget=null;let r=this._attachedOverlays.slice();for(let a=r.length-1;a>-1;a--){let l=r[a],d=l._outsidePointerEvents;if(!(!l.hasAttached()||!this.canReceiveEvent(l,e,d))){if(sa(l.overlayElement,t)||sa(l.overlayElement,i))break;this._ngZone?this._ngZone.run(()=>d.next(e)):d.next(e)}}};static \u0275fac=(()=>{let e;return function(i){return(e||(e=ye(n)))(i||n)}})();static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function sa(n,o){let e=typeof ShadowRoot<"u"&&ShadowRoot,t=o;for(;t;){if(t===n)return!0;t=e&&t instanceof ShadowRoot?t.host:t.parentNode}return!1}var ba=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=C({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(t,i){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2,changeDetection:0})}return n})(),va=(()=>{class n{_platform=s(W);_containerElement;_document=s(H);_styleLoader=s(Te);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||Nn()){let i=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let r=0;r<i.length;r++)i[r].remove()}let t=this._document.createElement("div");t.classList.add(e),Nn()?t.setAttribute("platform","test"):this._platform.isBrowser||t.setAttribute("platform","server"),this._document.body.appendChild(t),this._containerElement=t}_loadStyles(){this._styleLoader.load(ba)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Yn=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(o,e,t,i){this._renderer=e,this._ngZone=t,this.element=o.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",i)}detach(){this._ngZone.runOutsideAngular(()=>{let o=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(o,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),o.style.pointerEvents="none",o.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function qn(n){return n&&n.nodeType===1}var Wi=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new v;_attachments=new v;_detachments=new v;_positionStrategy;_scrollStrategy;_locationChanges=ve.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new v;_outsidePointerEvents=new v;_afterNextRenderRef;constructor(o,e,t,i,r,a,l,d,f,u=!1,_,O){this._portalOutlet=o,this._host=e,this._pane=t,this._config=i,this._ngZone=r,this._keyboardDispatcher=a,this._document=l,this._location=d,this._outsideClickDispatcher=f,this._animationsDisabled=u,this._injector=_,this._renderer=O,i.scrollStrategy&&(this._scrollStrategy=i.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=i.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(o){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(o);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=De(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let o=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),o}dispose(){if(this._disposed)return;let o=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,o&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(o){o!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=o,this.hasAttached()&&(o.attach(this),this.updatePosition()))}updateSize(o){this._config=q(q({},this._config),o),this._updateElementSize()}setDirection(o){this._config=ro(q({},this._config),{direction:o}),this._updateElementDirection()}addPanelClass(o){this._pane&&this._toggleClasses(this._pane,o,!0)}removePanelClass(o){this._pane&&this._toggleClasses(this._pane,o,!1)}getDirection(){let o=this._config.direction;return o?typeof o=="string"?o:o.value:"ltr"}updateScrollStrategy(o){o!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=o,this.hasAttached()&&(o.attach(this),o.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let o=this._pane.style;o.width=ee(this._config.width),o.height=ee(this._config.height),o.minWidth=ee(this._config.minWidth),o.minHeight=ee(this._config.minHeight),o.maxWidth=ee(this._config.maxWidth),o.maxHeight=ee(this._config.maxHeight)}_togglePointerEvents(o){this._pane.style.pointerEvents=o?"":"none"}_attachHost(){if(!this._host.parentElement){let o=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;qn(o)?o.after(this._host):o?.type==="parent"?o.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let o="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new Yn(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(o))}):this._backdropRef.element.classList.add(o)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(o,e,t){let i=xt(e||[]).filter(r=>!!r);i.length&&(t?o.classList.add(...i):o.classList.remove(...i))}_detachContentWhenEmpty(){let o=!1;try{this._detachContentAfterRenderRef=De(()=>{o=!0,this._detachContent()},{injector:this._injector})}catch(e){if(o)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let o=this._scrollStrategy;o?.disable(),o?.detach?.()}},la="cdk-overlay-connected-position-bounding-box",sl=/([A-Za-z%]+)$/;function Jt(n,o){return new Qi(o,n.get(Qe),n.get(H),n.get(W),n.get(va))}var Qi=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new v;_resizeSubscription=ve.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(o,e,t,i,r){this._viewportRuler=e,this._document=t,this._platform=i,this._overlayContainer=r,this.setOrigin(o)}attach(o){this._overlayRef&&this._overlayRef,this._validatePositions(),o.hostElement.classList.add(la),this._overlayRef=o,this._boundingBox=o.hostElement,this._pane=o.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let o=this._originRect,e=this._overlayRect,t=this._viewportRect,i=this._containerRect,r=[],a;for(let l of this._preferredPositions){let d=this._getOriginPoint(o,i,l),f=this._getOverlayPoint(d,e,l),u=this._getOverlayFit(f,e,t,l);if(u.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(l,d);return}if(this._canFitWithFlexibleDimensions(u,f,t)){r.push({position:l,origin:d,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(d,l)});continue}(!a||a.overlayFit.visibleArea<u.visibleArea)&&(a={overlayFit:u,overlayPoint:f,originPoint:d,position:l,overlayRect:e})}if(r.length){let l=null,d=-1;for(let f of r){let u=f.boundingBoxRect.width*f.boundingBoxRect.height*(f.position.weight||1);u>d&&(d=u,l=f)}this._isPushed=!1,this._applyPosition(l.position,l.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(a.position,a.originPoint);return}this._applyPosition(a.position,a.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&ut(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(la),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let o=this._lastPosition;o?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(o,this._getOriginPoint(this._originRect,this._containerRect,o))):this.apply()}withScrollableContainers(o){return this._scrollables=o,this}withPositions(o){return this._preferredPositions=o,o.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(o){return this._viewportMargin=o,this}withFlexibleDimensions(o=!0){return this._hasFlexibleDimensions=o,this}withGrowAfterOpen(o=!0){return this._growAfterOpen=o,this}withPush(o=!0){return this._canPush=o,this}withLockedPosition(o=!0){return this._positionLocked=o,this}setOrigin(o){return this._origin=o,this}withDefaultOffsetX(o){return this._offsetX=o,this}withDefaultOffsetY(o){return this._offsetY=o,this}withTransformOriginOn(o){return this._transformOriginSelector=o,this}withPopoverLocation(o){return this._popoverLocation=o,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof k?this._origin.nativeElement:qn(this._origin)?this._origin:null}_getOriginPoint(o,e,t){let i;if(t.originX=="center")i=o.left+o.width/2;else{let a=this._isRtl()?o.right:o.left,l=this._isRtl()?o.left:o.right;i=t.originX=="start"?a:l}e.left<0&&(i-=e.left);let r;return t.originY=="center"?r=o.top+o.height/2:r=t.originY=="top"?o.top:o.bottom,e.top<0&&(r-=e.top),{x:i,y:r}}_getOverlayPoint(o,e,t){let i;t.overlayX=="center"?i=-e.width/2:t.overlayX==="start"?i=this._isRtl()?-e.width:0:i=this._isRtl()?0:-e.width;let r;return t.overlayY=="center"?r=-e.height/2:r=t.overlayY=="top"?0:-e.height,{x:o.x+i,y:o.y+r}}_getOverlayFit(o,e,t,i){let r=ca(e),{x:a,y:l}=o,d=this._getOffset(i,"x"),f=this._getOffset(i,"y");d&&(a+=d),f&&(l+=f);let u=0-a,_=a+r.width-t.width,O=0-l,T=l+r.height-t.height,$=this._subtractOverflows(r.width,u,_),X=this._subtractOverflows(r.height,O,T),re=$*X;return{visibleArea:re,isCompletelyWithinViewport:r.width*r.height===re,fitsInViewportVertically:X===r.height,fitsInViewportHorizontally:$==r.width}}_canFitWithFlexibleDimensions(o,e,t){if(this._hasFlexibleDimensions){let i=t.bottom-e.y,r=t.right-e.x,a=da(this._overlayRef.getConfig().minHeight),l=da(this._overlayRef.getConfig().minWidth),d=o.fitsInViewportVertically||a!=null&&a<=i,f=o.fitsInViewportHorizontally||l!=null&&l<=r;return d&&f}return!1}_pushOverlayOnScreen(o,e,t){if(this._previousPushAmount&&this._positionLocked)return{x:o.x+this._previousPushAmount.x,y:o.y+this._previousPushAmount.y};let i=ca(e),r=this._viewportRect,a=Math.max(o.x+i.width-r.width,0),l=Math.max(o.y+i.height-r.height,0),d=Math.max(r.top-t.top-o.y,0),f=Math.max(r.left-t.left-o.x,0),u=0,_=0;return i.width<=r.width?u=f||-a:u=o.x<this._getViewportMarginStart()?r.left-t.left-o.x:0,i.height<=r.height?_=d||-l:_=o.y<this._getViewportMarginTop()?r.top-t.top-o.y:0,this._previousPushAmount={x:u,y:_},{x:o.x+u,y:o.y+_}}_applyPosition(o,e){if(this._setTransformOrigin(o),this._setOverlayElementStyles(e,o),this._setBoundingBoxStyles(e,o),o.panelClass&&this._addPanelClasses(o.panelClass),this._positionChanges.observers.length){let t=this._getScrollVisibility();if(o!==this._lastPosition||!this._lastScrollVisibility||!ll(this._lastScrollVisibility,t)){let i=new Ui(o,t);this._positionChanges.next(i)}this._lastScrollVisibility=t}this._lastPosition=o,this._isInitialRender=!1}_setTransformOrigin(o){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),t,i=o.overlayY;o.overlayX==="center"?t="center":this._isRtl()?t=o.overlayX==="start"?"right":"left":t=o.overlayX==="start"?"left":"right";for(let r=0;r<e.length;r++)e[r].style.transformOrigin=`${t} ${i}`}_calculateBoundingBoxRect(o,e){let t=this._viewportRect,i=this._isRtl(),r,a,l;if(e.overlayY==="top")a=o.y,r=t.height-a+this._getViewportMarginBottom();else if(e.overlayY==="bottom")l=t.height-o.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),r=t.height-l+this._getViewportMarginTop();else{let T=Math.min(t.bottom-o.y+t.top,o.y),$=this._lastBoundingBoxSize.height;r=T*2,a=o.y-T,r>$&&!this._isInitialRender&&!this._growAfterOpen&&(a=o.y-$/2)}let d=e.overlayX==="start"&&!i||e.overlayX==="end"&&i,f=e.overlayX==="end"&&!i||e.overlayX==="start"&&i,u,_,O;if(f)O=t.width-o.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),u=o.x-this._getViewportMarginStart();else if(d)_=o.x,u=t.right-o.x-this._getViewportMarginEnd();else{let T=Math.min(t.right-o.x+t.left,o.x),$=this._lastBoundingBoxSize.width;u=T*2,_=o.x-T,u>$&&!this._isInitialRender&&!this._growAfterOpen&&(_=o.x-$/2)}return{top:a,left:_,bottom:l,right:O,width:u,height:r}}_setBoundingBoxStyles(o,e){let t=this._calculateBoundingBoxRect(o,e);!this._isInitialRender&&!this._growAfterOpen&&(t.height=Math.min(t.height,this._lastBoundingBoxSize.height),t.width=Math.min(t.width,this._lastBoundingBoxSize.width));let i={};if(this._hasExactPosition())i.top=i.left="0",i.bottom=i.right="auto",i.maxHeight=i.maxWidth="",i.width=i.height="100%";else{let r=this._overlayRef.getConfig().maxHeight,a=this._overlayRef.getConfig().maxWidth;i.width=ee(t.width),i.height=ee(t.height),i.top=ee(t.top)||"auto",i.bottom=ee(t.bottom)||"auto",i.left=ee(t.left)||"auto",i.right=ee(t.right)||"auto",e.overlayX==="center"?i.alignItems="center":i.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?i.justifyContent="center":i.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",r&&(i.maxHeight=ee(r)),a&&(i.maxWidth=ee(a))}this._lastBoundingBoxSize=t,ut(this._boundingBox.style,i)}_resetBoundingBoxStyles(){ut(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){ut(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(o,e){let t={},i=this._hasExactPosition(),r=this._hasFlexibleDimensions,a=this._overlayRef.getConfig();if(i){let u=this._viewportRuler.getViewportScrollPosition();ut(t,this._getExactOverlayY(e,o,u)),ut(t,this._getExactOverlayX(e,o,u))}else t.position="static";let l="",d=this._getOffset(e,"x"),f=this._getOffset(e,"y");d&&(l+=`translateX(${d}px) `),f&&(l+=`translateY(${f}px)`),t.transform=l.trim(),a.maxHeight&&(i?t.maxHeight=ee(a.maxHeight):r&&(t.maxHeight="")),a.maxWidth&&(i?t.maxWidth=ee(a.maxWidth):r&&(t.maxWidth="")),ut(this._pane.style,t)}_getExactOverlayY(o,e,t){let i={top:"",bottom:""},r=this._getOverlayPoint(e,this._overlayRect,o);if(this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,t)),o.overlayY==="bottom"){let a=this._document.documentElement.clientHeight;i.bottom=`${a-(r.y+this._overlayRect.height)}px`}else i.top=ee(r.y);return i}_getExactOverlayX(o,e,t){let i={left:"",right:""},r=this._getOverlayPoint(e,this._overlayRect,o);this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,t));let a;if(this._isRtl()?a=o.overlayX==="end"?"left":"right":a=o.overlayX==="end"?"right":"left",a==="right"){let l=this._document.documentElement.clientWidth;i.right=`${l-(r.x+this._overlayRect.width)}px`}else i.left=ee(r.x);return i}_getScrollVisibility(){let o=this._getOriginRect(),e=this._pane.getBoundingClientRect(),t=this._scrollables.map(i=>i.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:aa(o,t),isOriginOutsideView:Qn(o,t),isOverlayClipped:aa(e,t),isOverlayOutsideView:Qn(e,t)}}_subtractOverflows(o,...e){return e.reduce((t,i)=>t-Math.max(i,0),o)}_getNarrowedViewportRect(){let o=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,t=this._viewportRuler.getViewportScrollPosition();return{top:t.top+this._getViewportMarginTop(),left:t.left+this._getViewportMarginStart(),right:t.left+o-this._getViewportMarginEnd(),bottom:t.top+e-this._getViewportMarginBottom(),width:o-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(o,e){return e==="x"?o.offsetX==null?this._offsetX:o.offsetX:o.offsetY==null?this._offsetY:o.offsetY}_validatePositions(){}_addPanelClasses(o){this._pane&&xt(o).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(o=>{this._pane.classList.remove(o)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let o=this._origin;if(o instanceof k)return o.nativeElement.getBoundingClientRect();if(o instanceof Element)return o.getBoundingClientRect();let e=o.width||0,t=o.height||0;return{top:o.y,bottom:o.y+t,left:o.x,right:o.x+e,height:t,width:e}}_getContainerRect(){let o=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();o&&(e.style.display="block");let t=e.getBoundingClientRect();return o&&(e.style.display=""),t}};function ut(n,o){for(let e in o)o.hasOwnProperty(e)&&(n[e]=o[e]);return n}function da(n){if(typeof n!="number"&&n!=null){let[o,e]=n.split(sl);return!e||e==="px"?parseFloat(o):null}return n||null}function ca(n){return{top:Math.floor(n.top),right:Math.floor(n.right),bottom:Math.floor(n.bottom),left:Math.floor(n.left),width:Math.floor(n.width),height:Math.floor(n.height)}}function ll(n,o){return n===o?!0:n.isOriginClipped===o.isOriginClipped&&n.isOriginOutsideView===o.isOriginOutsideView&&n.isOverlayClipped===o.isOverlayClipped&&n.isOverlayOutsideView===o.isOverlayOutsideView}var ma="cdk-global-overlay-wrapper";function ya(n){return new Yi}var Yi=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(o){let e=o.getConfig();this._overlayRef=o,this._width&&!e.width&&o.updateSize({width:this._width}),this._height&&!e.height&&o.updateSize({height:this._height}),o.hostElement.classList.add(ma),this._isDisposed=!1}top(o=""){return this._bottomOffset="",this._topOffset=o,this._alignItems="flex-start",this}left(o=""){return this._xOffset=o,this._xPosition="left",this}bottom(o=""){return this._topOffset="",this._bottomOffset=o,this._alignItems="flex-end",this}right(o=""){return this._xOffset=o,this._xPosition="right",this}start(o=""){return this._xOffset=o,this._xPosition="start",this}end(o=""){return this._xOffset=o,this._xPosition="end",this}width(o=""){return this._overlayRef?this._overlayRef.updateSize({width:o}):this._width=o,this}height(o=""){return this._overlayRef?this._overlayRef.updateSize({height:o}):this._height=o,this}centerHorizontally(o=""){return this.left(o),this._xPosition="center",this}centerVertically(o=""){return this.top(o),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let o=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,t=this._overlayRef.getConfig(),{width:i,height:r,maxWidth:a,maxHeight:l}=t,d=(i==="100%"||i==="100vw")&&(!a||a==="100%"||a==="100vw"),f=(r==="100%"||r==="100vh")&&(!l||l==="100%"||l==="100vh"),u=this._xPosition,_=this._xOffset,O=this._overlayRef.getConfig().direction==="rtl",T="",$="",X="";d?X="flex-start":u==="center"?(X="center",O?$=_:T=_):O?u==="left"||u==="end"?(X="flex-end",T=_):(u==="right"||u==="start")&&(X="flex-start",$=_):u==="left"||u==="start"?(X="flex-start",T=_):(u==="right"||u==="end")&&(X="flex-end",$=_),o.position=this._cssPosition,o.marginLeft=d?"0":T,o.marginTop=f?"0":this._topOffset,o.marginBottom=this._bottomOffset,o.marginRight=d?"0":$,e.justifyContent=X,e.alignItems=f?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let o=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,t=e.style;e.classList.remove(ma),t.justifyContent=t.alignItems=o.marginTop=o.marginBottom=o.marginLeft=o.marginRight=o.position="",this._overlayRef=null,this._isDisposed=!0}},xa=(()=>{class n{_injector=s(G);constructor(){}global(){return ya()}flexibleConnectedTo(e){return Jt(this._injector,e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),ei=new b("OVERLAY_DEFAULT_CONFIG");function ti(n,o){n.get(Te).load(ba);let e=n.get(va),t=n.get(H),i=n.get(we),r=n.get(It),a=n.get(Oe),l=n.get(Ne,null,{optional:!0})||n.get(Le).createRenderer(null,null),d=new Zt(o),f=n.get(ei,null,{optional:!0})?.usePopover??!0;d.direction=d.direction||a.value,"showPopover"in t.body?d.usePopover=o?.usePopover??f:d.usePopover=!1;let u=t.createElement("div"),_=t.createElement("div");u.id=i.getId("cdk-overlay-"),u.classList.add("cdk-overlay-pane"),_.appendChild(u),d.usePopover&&(_.setAttribute("popover","manual"),_.classList.add("cdk-overlay-popover"));let O=d.usePopover?d.positionStrategy?.getPopoverInsertionPoint?.():null;return qn(O)?O.after(_):O?.type==="parent"?O.element.appendChild(_):e.getContainerElement().appendChild(_),new Wi(new Bi(u,r,n),_,u,d,n.get(N),n.get(_a),t,n.get(Ao),n.get(ga),o?.disableAnimations??n.get(mi,null,{optional:!0})==="NoopAnimations",n.get(gt),l)}var wa=(()=>{class n{scrollStrategies=s(fa);_positionBuilder=s(xa);_injector=s(G);constructor(){}create(e){return ti(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(t){return new(t||n)};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),dl=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],cl=new b("cdk-connected-overlay-scroll-strategy",{providedIn:"root",factory:()=>{let n=s(G);return()=>ht(n)}}),Dt=(()=>{class n{elementRef=s(k);constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=g({type:n,selectors:[["","cdk-overlay-origin",""],["","overlay-origin",""],["","cdkOverlayOrigin",""]],exportAs:["cdkOverlayOrigin"]})}return n})(),Ca=new b("cdk-connected-overlay-default-config"),Gi=(()=>{class n{_dir=s(Oe,{optional:!0});_injector=s(G);_overlayRef;_templatePortal;_backdropSubscription=ve.EMPTY;_attachSubscription=ve.EMPTY;_detachSubscription=ve.EMPTY;_positionSubscription=ve.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=s(cl);_ngZone=s(N);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(e){this._offsetX=e,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(e){this._offsetY=e,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(e){typeof e!="string"&&this._assignConfig(e)}backdropClick=new Z;positionChange=new Z;attach=new Z;detach=new Z;overlayKeydown=new Z;overlayOutsideClick=new Z;constructor(){let e=s(Se),t=s(Me),i=s(Ca,{optional:!0}),r=s(ei,{optional:!0});this.usePopover=r?.usePopover===!1?null:"global",this._templatePortal=new $t(e,t),this.scrollStrategy=this._scrollStrategyFactory(),i&&this._assignConfig(i)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:"ltr"}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(e){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),e.origin&&this.open&&this._position.apply()),e.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=dl);let e=this._overlayRef=ti(this._injector,this._buildConfig());this._attachSubscription=e.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=e.detachments().subscribe(()=>this.detach.emit()),e.keydownEvents().subscribe(t=>{this.overlayKeydown.next(t),t.keyCode===27&&!this.disableClose&&!Ae(t)&&(t.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(t=>{let i=this._getOriginElement(),r=ce(t);(!i||i!==r&&!i.contains(r))&&this.overlayOutsideClick.next(t)})}_buildConfig(){let e=this._position=this.positionStrategy||this._createPositionStrategy(),t=new Zt({direction:this._dir||"ltr",positionStrategy:e,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(t.height=this.height),(this.minWidth||this.minWidth===0)&&(t.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(t.minHeight=this.minHeight),this.backdropClass&&(t.backdropClass=this.backdropClass),this.panelClass&&(t.panelClass=this.panelClass),t}_updatePositionStrategy(e){let t=this.positions.map(i=>({originX:i.originX,originY:i.originY,overlayX:i.overlayX,overlayY:i.overlayY,offsetX:i.offsetX||this.offsetX,offsetY:i.offsetY||this.offsetY,panelClass:i.panelClass||void 0}));return e.setOrigin(this._getOrigin()).withPositions(t).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?"global":this.usePopover)}_createPositionStrategy(){let e=Jt(this._injector,this._getOrigin());return this._updatePositionStrategy(e),e}_getOrigin(){return this.origin instanceof Dt?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof Dt?this.origin.elementRef.nativeElement:this.origin instanceof k?this.origin.nativeElement:typeof Element<"u"&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let e=this._overlayRef;e.getConfig().hasBackdrop=this.hasBackdrop,e.updateSize({width:this._getWidth()}),e.hasAttached()||e.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=e.backdropClick().subscribe(t=>this.backdropClick.emit(t)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(fo(()=>this.positionChange.observers.length>0)).subscribe(t=>{this._ngZone.run(()=>this.positionChange.emit(t)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(e){this.origin=e.origin??this.origin,this.positions=e.positions??this.positions,this.positionStrategy=e.positionStrategy??this.positionStrategy,this.offsetX=e.offsetX??this.offsetX,this.offsetY=e.offsetY??this.offsetY,this.width=e.width??this.width,this.height=e.height??this.height,this.minWidth=e.minWidth??this.minWidth,this.minHeight=e.minHeight??this.minHeight,this.backdropClass=e.backdropClass??this.backdropClass,this.panelClass=e.panelClass??this.panelClass,this.viewportMargin=e.viewportMargin??this.viewportMargin,this.scrollStrategy=e.scrollStrategy??this.scrollStrategy,this.disableClose=e.disableClose??this.disableClose,this.transformOriginSelector=e.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=e.hasBackdrop??this.hasBackdrop,this.lockPosition=e.lockPosition??this.lockPosition,this.flexibleDimensions=e.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=e.growAfterOpen??this.growAfterOpen,this.push=e.push??this.push,this.disposeOnNavigation=e.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=e.usePopover??this.usePopover,this.matchWidth=e.matchWidth??this.matchWidth}static \u0275fac=function(t){return new(t||n)};static \u0275dir=g({type:n,selectors:[["","cdk-connected-overlay",""],["","connected-overlay",""],["","cdkConnectedOverlay",""]],inputs:{origin:[0,"cdkConnectedOverlayOrigin","origin"],positions:[0,"cdkConnectedOverlayPositions","positions"],positionStrategy:[0,"cdkConnectedOverlayPositionStrategy","positionStrategy"],offsetX:[0,"cdkConnectedOverlayOffsetX","offsetX"],offsetY:[0,"cdkConnectedOverlayOffsetY","offsetY"],width:[0,"cdkConnectedOverlayWidth","width"],height:[0,"cdkConnectedOverlayHeight","height"],minWidth:[0,"cdkConnectedOverlayMinWidth","minWidth"],minHeight:[0,"cdkConnectedOverlayMinHeight","minHeight"],backdropClass:[0,"cdkConnectedOverlayBackdropClass","backdropClass"],panelClass:[0,"cdkConnectedOverlayPanelClass","panelClass"],viewportMargin:[0,"cdkConnectedOverlayViewportMargin","viewportMargin"],scrollStrategy:[0,"cdkConnectedOverlayScrollStrategy","scrollStrategy"],open:[0,"cdkConnectedOverlayOpen","open"],disableClose:[0,"cdkConnectedOverlayDisableClose","disableClose"],transformOriginSelector:[0,"cdkConnectedOverlayTransformOriginOn","transformOriginSelector"],hasBackdrop:[2,"cdkConnectedOverlayHasBackdrop","hasBackdrop",w],lockPosition:[2,"cdkConnectedOverlayLockPosition","lockPosition",w],flexibleDimensions:[2,"cdkConnectedOverlayFlexibleDimensions","flexibleDimensions",w],growAfterOpen:[2,"cdkConnectedOverlayGrowAfterOpen","growAfterOpen",w],push:[2,"cdkConnectedOverlayPush","push",w],disposeOnNavigation:[2,"cdkConnectedOverlayDisposeOnNavigation","disposeOnNavigation",w],usePopover:[0,"cdkConnectedOverlayUsePopover","usePopover"],matchWidth:[2,"cdkConnectedOverlayMatchWidth","matchWidth",w],_config:[0,"cdkConnectedOverlay","_config"]},outputs:{backdropClick:"backdropClick",positionChange:"positionChange",attach:"attach",detach:"detach",overlayKeydown:"overlayKeydown",overlayOutsideClick:"overlayOutsideClick"},exportAs:["cdkConnectedOverlay"],features:[Pe]})}return n})(),ii=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=S({providers:[wa],imports:[Q,oa,Lt,Lt]})}return n})();var Fe=(function(n){return n[n.FADING_IN=0]="FADING_IN",n[n.VISIBLE=1]="VISIBLE",n[n.FADING_OUT=2]="FADING_OUT",n[n.HIDDEN=3]="HIDDEN",n})(Fe||{}),Gn=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=Fe.HIDDEN;constructor(o,e,t,i=!1){this._renderer=o,this.element=e,this.config=t,this._animationForciblyDisabledThroughCss=i}fadeOut(){this._renderer.fadeOutRipple(this)}},Da=wt({passive:!0,capture:!0}),Xn=class{_events=new Map;addHandler(o,e,t,i){let r=this._events.get(e);if(r){let a=r.get(t);a?a.add(i):r.set(t,new Set([i]))}else this._events.set(e,new Map([[t,new Set([i])]])),o.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,Da)})}removeHandler(o,e,t){let i=this._events.get(o);if(!i)return;let r=i.get(e);r&&(r.delete(t),r.size===0&&i.delete(e),i.size===0&&(this._events.delete(o),document.removeEventListener(o,this._delegateEventHandler,Da)))}_delegateEventHandler=o=>{let e=ce(o);e&&this._events.get(o.type)?.forEach((t,i)=>{(i===e||i.contains(e))&&t.forEach(r=>r.handleEvent(o))})}},ni={enterDuration:225,exitDuration:150},ml=800,Sa=wt({passive:!0,capture:!0}),ka=["mousedown","touchstart"],Ea=["mouseup","mouseleave","touchend","touchcancel"],ul=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=C({type:n,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(t,i){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return n})(),oi=class n{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Xn;constructor(o,e,t,i,r){this._target=o,this._ngZone=e,this._platform=i,i.isBrowser&&(this._containerElement=We(t)),r&&r.get(Te).load(ul)}fadeInRipple(o,e,t={}){let i=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),r=q(q({},ni),t.animation);t.centered&&(o=i.left+i.width/2,e=i.top+i.height/2);let a=t.radius||hl(o,e,i),l=o-i.left,d=e-i.top,f=r.enterDuration,u=document.createElement("div");u.classList.add("mat-ripple-element"),u.style.left=`${l-a}px`,u.style.top=`${d-a}px`,u.style.height=`${a*2}px`,u.style.width=`${a*2}px`,t.color!=null&&(u.style.backgroundColor=t.color),u.style.transitionDuration=`${f}ms`,this._containerElement.appendChild(u);let _=window.getComputedStyle(u),O=_.transitionProperty,T=_.transitionDuration,$=O==="none"||T==="0s"||T==="0s, 0s"||i.width===0&&i.height===0,X=new Gn(this,u,t,$);u.style.transform="scale3d(1, 1, 1)",X.state=Fe.FADING_IN,t.persistent||(this._mostRecentTransientRipple=X);let re=null;return!$&&(f||r.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let me=()=>{re&&(re.fallbackTimer=null),clearTimeout(oo),this._finishRippleTransition(X)},ft=()=>this._destroyRipple(X),oo=setTimeout(ft,f+100);u.addEventListener("transitionend",me),u.addEventListener("transitioncancel",ft),re={onTransitionEnd:me,onTransitionCancel:ft,fallbackTimer:oo}}),this._activeRipples.set(X,re),($||!f)&&this._finishRippleTransition(X),X}fadeOutRipple(o){if(o.state===Fe.FADING_OUT||o.state===Fe.HIDDEN)return;let e=o.element,t=q(q({},ni),o.config.animation);e.style.transitionDuration=`${t.exitDuration}ms`,e.style.opacity="0",o.state=Fe.FADING_OUT,(o._animationForciblyDisabledThroughCss||!t.exitDuration)&&this._finishRippleTransition(o)}fadeOutAll(){this._getActiveRipples().forEach(o=>o.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(o=>{o.config.persistent||o.fadeOut()})}setupTriggerEvents(o){let e=We(o);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,ka.forEach(t=>{n._eventManager.addHandler(this._ngZone,t,e,this)}))}handleEvent(o){o.type==="mousedown"?this._onMousedown(o):o.type==="touchstart"?this._onTouchStart(o):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Ea.forEach(e=>{this._triggerElement.addEventListener(e,this,Sa)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(o){o.state===Fe.FADING_IN?this._startFadeOutTransition(o):o.state===Fe.FADING_OUT&&this._destroyRipple(o)}_startFadeOutTransition(o){let e=o===this._mostRecentTransientRipple,{persistent:t}=o.config;o.state=Fe.VISIBLE,!t&&(!e||!this._isPointerDown)&&o.fadeOut()}_destroyRipple(o){let e=this._activeRipples.get(o)??null;this._activeRipples.delete(o),this._activeRipples.size||(this._containerRect=null),o===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),o.state=Fe.HIDDEN,e!==null&&(o.element.removeEventListener("transitionend",e.onTransitionEnd),o.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),o.element.remove()}_onMousedown(o){let e=jt(o),t=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+ml;!this._target.rippleDisabled&&!e&&!t&&(this._isPointerDown=!0,this.fadeInRipple(o.clientX,o.clientY,this._target.rippleConfig))}_onTouchStart(o){if(!this._target.rippleDisabled&&!Ht(o)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=o.changedTouches;if(e)for(let t=0;t<e.length;t++)this.fadeInRipple(e[t].clientX,e[t].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(o=>{let e=o.state===Fe.VISIBLE||o.config.terminateOnPointerUp&&o.state===Fe.FADING_IN;!o.config.persistent&&e&&o.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let o=this._triggerElement;o&&(ka.forEach(e=>n._eventManager.removeHandler(e,o,this)),this._pointerUpEventsRegistered&&(Ea.forEach(e=>o.removeEventListener(e,this,Sa)),this._pointerUpEventsRegistered=!1))}};function hl(n,o,e){let t=Math.max(Math.abs(n-e.left),Math.abs(n-e.right)),i=Math.max(Math.abs(o-e.top),Math.abs(o-e.bottom));return Math.sqrt(t*t+i*i)}var $n=new b("mat-ripple-global-options"),Ra=(()=>{class n{_elementRef=s(k);_animationsDisabled=be();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=s(N),t=s(W),i=s($n,{optional:!0}),r=s(G);this._globalOptions=i||{},this._rippleRenderer=new oi(this,e,this._elementRef,t,r)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:q(q(q({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,t=0,i){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,t,q(q({},this.rippleConfig),i)):this._rippleRenderer.fadeInRipple(0,0,q(q({},this.rippleConfig),e))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=g({type:n,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(t,i){t&2&&L("mat-ripple-unbounded",i.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return n})();var Ma=(()=>{class n{_animationsDisabled=be();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=C({type:n,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(t,i){t&2&&L("mat-pseudo-checkbox-indeterminate",i.state==="indeterminate")("mat-pseudo-checkbox-checked",i.state==="checked")("mat-pseudo-checkbox-disabled",i.disabled)("mat-pseudo-checkbox-minimal",i.appearance==="minimal")("mat-pseudo-checkbox-full",i.appearance==="full")("_mat-animation-noopable",i._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(t,i){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2,changeDetection:0})}return n})();var Xi=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=C({type:n,selectors:[["structural-styles"]],decls:0,vars:0,template:function(t,i){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var fl=["text"],pl=[[["mat-icon"]],"*"],_l=["mat-icon","*"];function gl(n,o){if(n&1&&U(0,"mat-pseudo-checkbox",1),n&2){let e=y();D("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function bl(n,o){if(n&1&&U(0,"mat-pseudo-checkbox",3),n&2){let e=y();D("disabled",e.disabled)}}function vl(n,o){if(n&1&&(c(0,"span",4),p(1),m()),n&2){let e=y();h(),j("(",e.group.label,")")}}var Zn=new b("MAT_OPTION_PARENT_COMPONENT"),Jn=new b("MatOptgroup");var Kn=class{source;isUserInput;constructor(o,e=!1){this.source=o,this.isUserInput=e}},St=(()=>{class n{_element=s(k);_changeDetectorRef=s(ge);_parent=s(Zn,{optional:!0});group=s(Jn,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=s(we).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=Re(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new Z;_text;_stateChanges=new v;constructor(){let e=s(Te);e.load(Xi),e.load(Yt),this._signalDisableRipple=!!this._parent&&Mt(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,t){let i=this._getHostElement();typeof i.focus=="function"&&i.focus(t)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!Ae(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new Kn(this,e))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=C({type:n,selectors:[["mat-option"]],viewQuery:function(t,i){if(t&1&&ke(fl,7),t&2){let r;M(r=I())&&(i._text=r.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(t,i){t&1&&B("click",function(){return i._selectViaInteraction()})("keydown",function(a){return i._handleKeydown(a)}),t&2&&(ui("id",i.id),J("aria-selected",i.selected)("aria-disabled",i.disabled.toString()),L("mdc-list-item--selected",i.selected)("mat-mdc-option-multiple",i.multiple)("mat-mdc-option-active",i.active)("mdc-list-item--disabled",i.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",w]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:_l,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(t,i){t&1&&(oe(pl),A(0,gl,1,2,"mat-pseudo-checkbox",1),P(1),c(2,"span",2,0),P(4,1),m(),A(5,bl,1,1,"mat-pseudo-checkbox",3),A(6,vl,2,1,"span",4),U(7,"div",5)),t&2&&(F(i.multiple?0:-1),h(5),F(!i.multiple&&i.selected&&!i.hideSingleSelectionIndicator?5:-1),h(),F(i.group&&i.group._inert?6:-1),h(),D("matRippleTrigger",i._getHostElement())("matRippleDisabled",i.disabled||i.disableRipple))},dependencies:[Ma,Ra],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--mat-option-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-option-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-option-label-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return n})();function Ia(n,o,e){if(e.length){let t=o.toArray(),i=e.toArray(),r=0;for(let a=0;a<n+1;a++)t[a].group&&t[a].group===i[r]&&r++;return r}return 0}function Oa(n,o,e,t){return n<e?n:n+o>e+t?Math.max(0,n-t+o):e}var Ta=(()=>{class n{isErrorState(e,t){return!!(e&&e.invalid&&(e.touched||t&&t.submitted))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Zi=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(o,e,t,i,r){this._defaultMatcher=o,this.ngControl=e,this._parentFormGroup=t,this._parentForm=i,this._stateChanges=r}updateErrorState(){let o=this.errorState,e=this._parentFormGroup||this._parentForm,t=this.matcher||this._defaultMatcher,i=this.ngControl?this.ngControl.control:null,r=t?.isErrorState(i,e)??!1;r!==o&&(this.errorState=r,this._stateChanges.next())}};var Aa=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=S({imports:[Oi,zi,Q]})}return n})();var Ji=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=S({imports:[Q]})}return n})();var Fa=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=S({imports:[Q]})}return n})();var eo=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=S({imports:[Ji,Fa,St,Q]})}return n})();var yl=["trigger"],xl=["panel"],wl=[[["mat-select-trigger"]],"*"],Cl=["mat-select-trigger","*"];function Dl(n,o){if(n&1&&(c(0,"span",4),p(1),m()),n&2){let e=y();h(),Xe(e.placeholder)}}function Sl(n,o){n&1&&P(0)}function kl(n,o){if(n&1&&(c(0,"span",11),p(1),m()),n&2){let e=y(2);h(),Xe(e.triggerValue)}}function El(n,o){if(n&1&&(c(0,"span",5),A(1,Sl,1,0)(2,kl,2,1,"span",11),m()),n&2){let e=y();h(),F(e.customTrigger?1:2)}}function Rl(n,o){if(n&1){let e=he();c(0,"div",12,1),B("keydown",function(i){ae(e);let r=y();return se(r._handleKeydown(i))}),P(2,1),m()}if(n&2){let e=y();it(e.panelClass),L("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",(e._parentFormField==null?null:e._parentFormField.color)==="primary")("mat-accent",(e._parentFormField==null?null:e._parentFormField.color)==="accent")("mat-warn",(e._parentFormField==null?null:e._parentFormField.color)==="warn")("mat-undefined",!(e._parentFormField!=null&&e._parentFormField.color)),J("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}var Ml=new b("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let n=s(G);return()=>ht(n)}}),Il=new b("MAT_SELECT_CONFIG"),Ol=new b("MatSelectTrigger"),to=class{source;value;constructor(o,e){this.source=o,this.value=e}},Pa=(()=>{class n{_viewportRuler=s(Qe);_changeDetectorRef=s(ge);_elementRef=s(k);_dir=s(Oe,{optional:!0});_idGenerator=s(we);_renderer=s(Ne);_parentFormField=s(Hn,{optional:!0});ngControl=s(Uo,{self:!0,optional:!0});_liveAnnouncer=s(Mn);_defaultOptions=s(Il,{optional:!0});_animationsDisabled=be();_popoverLocation;_initialized=new v;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let i=this.panel.nativeElement,r=Ia(e,this.options,this.optionGroups),a=t._getHostElement();e===0&&r===1?i.scrollTop=0:i.scrollTop=Oa(a.offsetTop,a.offsetHeight,i.scrollTop,i.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new to(this,e)}_scrollStrategyFactory=s(Ml);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new v;_errorStateTracker;stateChanges=new v;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=Re(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(Ee.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=co(()=>{let e=this.options;return e?e.changes.pipe(Je(e),li(()=>Ye(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(li(()=>this.optionSelectionChanges))});openedChange=new Z;_openedStream=this.openedChange.pipe(Ce(e=>e),ie(()=>{}));_closedStream=this.openedChange.pipe(Ce(e=>!e),ie(()=>{}));selectionChange=new Z;valueChange=new Z;constructor(){let e=s(Ta),t=s(gi,{optional:!0}),i=s(bi,{optional:!0}),r=s(new bt("tabindex"),{optional:!0}),a=s(ei,{optional:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new Zi(e,this.ngControl,i,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=r==null?0:parseInt(r)||0,this._popoverLocation=a?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new Bt(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(V(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(V(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(Je(null),V(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let i=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?i.setAttribute("aria-labelledby",e):i.removeAttribute("aria-labelledby")}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._applyModalPanelOwnership(),this._panelOpen=!0,this._overlayDir.positionChange.pipe(pt(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}_trackedModal=null;_applyModalPanelOwnership(){let e=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let t=`${this.id}-panel`;this._trackedModal&&Li(this._trackedModal,"aria-owns",t),Ln(e,"aria-owns",t),this._trackedModal=e}_clearFromModal(){if(!this._trackedModal)return;let e=`${this.id}-panel`;Li(this._trackedModal,"aria-owns",e),this._trackedModal=null}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(i),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,"animationend",r=>{r.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),i=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,i=t===40||t===38||t===37||t===39,r=t===13||t===32,a=this._keyManager;if(!a.isTyping()&&r&&!Ae(e)||(this.multiple||e.altKey)&&i)e.preventDefault(),this.open();else if(!this.multiple){let l=this.selected;a.onKeydown(e);let d=this.selected;d&&l!==d&&this._liveAnnouncer.announce(d.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,i=e.keyCode,r=i===40||i===38,a=t.isTyping();if(r&&e.altKey)e.preventDefault(),this.close();else if(!a&&(i===13||i===32)&&t.activeItem&&!Ae(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!a&&this._multiple&&i===65&&e.ctrlKey){e.preventDefault();let l=this.options.some(d=>!d.disabled&&!d.selected);this.options.forEach(d=>{d.disabled||(l?d.select():d.deselect())})}else{let l=t.activeItemIndex;t.onKeydown(e),this._multiple&&r&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==l&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!Ae(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(i=>{if(this._selectionModel.isSelected(i))return!1;try{return(i.value!=null||this.canSelectNullableOptions)&&this._compareWith(i.value,e)}catch{return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof Dt?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new qt(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=Ye(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(V(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),Ye(...this.options.map(t=>t._stateChanges)).pipe(V(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let i=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(i!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),i!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,i)=>this.sortComparator?this.sortComparator(t,i,e):e.indexOf(t)-e.indexOf(i)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(i=>i.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(e){let t=ce(e);t&&(t.tagName==="MAT-OPTION"||t.classList.contains("cdk-overlay-backdrop")||t.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=C({type:n,selectors:[["mat-select"]],contentQueries:function(t,i,r){if(t&1&&ot(r,Ol,5)(r,St,5)(r,Jn,5),t&2){let a;M(a=I())&&(i.customTrigger=a.first),M(a=I())&&(i.options=a),M(a=I())&&(i.optionGroups=a)}},viewQuery:function(t,i){if(t&1&&ke(yl,5)(xl,5)(Gi,5),t&2){let r;M(r=I())&&(i.trigger=r.first),M(r=I())&&(i.panel=r.first),M(r=I())&&(i._overlayDir=r.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(t,i){t&1&&B("keydown",function(a){return i._handleKeydown(a)})("focus",function(){return i._onFocus()})("blur",function(){return i._onBlur()}),t&2&&(J("id",i.id)("tabindex",i.disabled?-1:i.tabIndex)("aria-controls",i.panelOpen?i.id+"-panel":null)("aria-expanded",i.panelOpen)("aria-label",i.ariaLabel||null)("aria-required",i.required.toString())("aria-disabled",i.disabled.toString())("aria-invalid",i.errorState)("aria-activedescendant",i._getAriaActiveDescendant()),L("mat-mdc-select-disabled",i.disabled)("mat-mdc-select-invalid",i.errorState)("mat-mdc-select-required",i.required)("mat-mdc-select-empty",i.empty)("mat-mdc-select-multiple",i.multiple)("mat-select-open",i.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",w],disableRipple:[2,"disableRipple","disableRipple",w],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Ue(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",w],placeholder:"placeholder",required:[2,"required","required",w],multiple:[2,"multiple","multiple",w],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",w],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",Ue],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",w]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[le([{provide:jn,useExisting:n},{provide:Zn,useExisting:n}]),Pe],ngContentSelectors:Cl,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(t,i){if(t&1&&(oe(wl),c(0,"div",2,0),B("click",function(){return i.open()}),c(3,"div",3),A(4,Dl,2,1,"span",4)(5,El,3,1,"span",5),m(),c(6,"div",6)(7,"div",7),et(),c(8,"svg",8),U(9,"path",9),m()()()(),z(10,Rl,3,16,"ng-template",10),B("detach",function(){return i.close()})("backdropClick",function(){return i.close()})("overlayKeydown",function(a){return i._handleOverlayKeydown(a)})),t&2){let r=rt(1);h(3),J("id",i._valueId),h(),F(i.empty?4:5),h(6),D("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",i._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",i._scrollStrategy)("cdkConnectedOverlayOrigin",i._preferredOverlayOrigin||r)("cdkConnectedOverlayPositions",i._positions)("cdkConnectedOverlayWidth",i._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",i._popoverLocation)}},dependencies:[Dt,Gi],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--mat-select-enabled-trigger-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-select-trigger-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-select-trigger-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-select-trigger-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-select-trigger-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-select-trigger-text-tracking, var(--mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--mat-select-invalid-arrow-color, var(--mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--mat-select-enabled-arrow-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--mat-select-focused-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--mat-select-disabled-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--mat-select-panel-background-color, var(--mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--mat-select-placeholder-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2,changeDetection:0})}return n})();var La=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=S({imports:[ii,eo,Q,lt,Aa,eo]})}return n})();var Tl={capture:!0},Al=["focus","mousedown","mouseenter","touchstart"],io="mat-ripple-loader-uninitialized",no="mat-ripple-loader-class-name",Na="mat-ripple-loader-centered",en="mat-ripple-loader-disabled",za=(()=>{class n{_document=s(H);_animationsDisabled=be();_globalRippleOptions=s($n,{optional:!0});_platform=s(W);_ngZone=s(N);_injector=s(G);_eventCleanups;_hosts=new Map;constructor(){let e=s(Le).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>Al.map(t=>e.listen(this._document,t,this._onInteraction,Tl)))}ngOnDestroy(){let e=this._hosts.keys();for(let t of e)this.destroyRipple(t);this._eventCleanups.forEach(t=>t())}configureRipple(e,t){e.setAttribute(io,this._globalRippleOptions?.namespace??""),(t.className||!e.hasAttribute(no))&&e.setAttribute(no,t.className||""),t.centered&&e.setAttribute(Na,""),t.disabled&&e.setAttribute(en,"")}setDisabled(e,t){let i=this._hosts.get(e);i?(i.target.rippleDisabled=t,!t&&!i.hasSetUpEvents&&(i.hasSetUpEvents=!0,i.renderer.setupTriggerEvents(e))):t?e.setAttribute(en,""):e.removeAttribute(en)}_onInteraction=e=>{let t=ce(e);if(t instanceof HTMLElement){let i=t.closest(`[${io}="${this._globalRippleOptions?.namespace??""}"]`);i&&this._createRipple(i)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let t=this._document.createElement("span");t.classList.add("mat-ripple",e.getAttribute(no)),e.append(t);let i=this._globalRippleOptions,r=this._animationsDisabled?0:i?.animation?.enterDuration??ni.enterDuration,a=this._animationsDisabled?0:i?.animation?.exitDuration??ni.exitDuration,l={rippleDisabled:this._animationsDisabled||i?.disabled||e.hasAttribute(en),rippleConfig:{centered:e.hasAttribute(Na),terminateOnPointerUp:i?.terminateOnPointerUp,animation:{enterDuration:r,exitDuration:a}}},d=new oi(l,this._ngZone,t,this._platform,this._injector),f=!l.rippleDisabled;f&&d.setupTriggerEvents(e),this._hosts.set(e,{target:l,renderer:d,hasSetUpEvents:f}),e.removeAttribute(io)}destroyRipple(e){let t=this._hosts.get(e);t&&(t.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Fl=["mat-icon-button",""],Pl=["*"],Ll=new b("MAT_BUTTON_CONFIG");function Ba(n){return n==null?void 0:Ue(n)}var Nl=(()=>{class n{_elementRef=s(k);_ngZone=s(N);_animationsDisabled=be();_config=s(Ll,{optional:!0});_focusMonitor=s(Qt);_cleanupClick;_renderer=s(Ne);_rippleLoader=s(za);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){s(Te).load(Xi);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",t){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,t):this._elementRef.nativeElement.focus(t)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=g({type:n,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(t,i){t&2&&(J("disabled",i._getDisabledAttribute())("aria-disabled",i._getAriaDisabled())("tabindex",i._getTabIndex()),it(i.color?"mat-"+i.color:""),L("mat-mdc-button-disabled",i.disabled)("mat-mdc-button-disabled-interactive",i.disabledInteractive)("mat-unthemed",!i.color)("_mat-animation-noopable",i._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",w],disabled:[2,"disabled","disabled",w],ariaDisabled:[2,"aria-disabled","ariaDisabled",w],disabledInteractive:[2,"disabledInteractive","disabledInteractive",w],tabIndex:[2,"tabIndex","tabIndex",Ba],_tabindex:[2,"tabindex","_tabindex",Ba]}})}return n})(),Va=(()=>{class n extends Nl{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=C({type:n,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[K],attrs:Fl,ngContentSelectors:Pl,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,i){t&1&&(oe(),Ge(0,"span",0),P(1),Ge(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--mat-icon-button-state-layer-size, 40px);
  height: var(--mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--mat-icon-button-icon-size, 24px);
  color: var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-icon-button-touch-target-size, 48px);
  display: var(--mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--mat-icon-button-icon-size, 24px);
  height: var(--mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var zl=["tooltip"],Bl=20;var Vl=new b("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{let n=s(G);return()=>ht(n,{scrollThrottle:Bl})}}),jl=new b("mat-tooltip-default-options",{providedIn:"root",factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var ja="tooltip-panel",Hl={passive:!0},Ul=8,Wl=8,Ql=24,Yl=200,Ha=(()=>{class n{_elementRef=s(k);_ngZone=s(N);_platform=s(W);_ariaDescriber=s(Wr);_focusMonitor=s(Qt);_dir=s(Oe);_injector=s(G);_viewContainerRef=s(Me);_mediaMatcher=s(Ct);_document=s(H);_renderer=s(Ne);_animationsDisabled=be();_defaultOptions=s(jl,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position="below";_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=ql;_viewportMargin=8;_currentPosition;_cssClassPrefix="mat-mdc";_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(e){e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(e){this._positionAtOrigin=Vt(e),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(e){let t=Vt(e);this._disabled!==t&&(this._disabled=t,t?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=At(e)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=At(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures="auto";get message(){return this._message}set message(e){let t=this._message;this._message=e!=null?String(e).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(t)}_message="";get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new v;_isDestroyed=!1;constructor(){let e=this._defaultOptions;e&&(this._showDelay=e.showDelay,this._hideDelay=e.hideDelay,e.position&&(this.position=e.position),e.positionAtOrigin&&(this.positionAtOrigin=e.positionAtOrigin),e.touchGestures&&(this.touchGestures=e.touchGestures),e.tooltipClass&&(this.tooltipClass=e.tooltipClass)),this._viewportMargin=Ul}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(V(this._destroyed)).subscribe(e=>{e?e==="keyboard"&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let e=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(t=>t()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(e,this.message,"tooltip"),this._focusMonitor.stopMonitoring(e)}show(e=this.showDelay,t){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let i=this._createOverlay(t);this._detach(),this._portal=this._portal||new Xt(this._tooltipComponent,this._viewContainerRef);let r=this._tooltipInstance=i.attach(this._portal).instance;r._triggerElement=this._elementRef.nativeElement,r._mouseLeaveHideDelay=this._hideDelay,r.afterHidden().pipe(V(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),r.show(e)}hide(e=this.hideDelay){let t=this._tooltipInstance;t&&(t.isVisible()?t.hide(e):(t._cancelPendingAnimations(),this._detach()))}toggle(e){this._isTooltipVisible()?this.hide():this.show(void 0,e)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(e){if(this._overlayRef){let a=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!e)&&a._origin instanceof k)return this._overlayRef;this._detach()}let t=this._injector.get(vt).getAncestorScrollContainers(this._elementRef),i=`${this._cssClassPrefix}-${ja}`,r=Jt(this._injector,this.positionAtOrigin?e||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(t).withPopoverLocation("global");return r.positionChanges.pipe(V(this._destroyed)).subscribe(a=>{this._updateCurrentPositionClass(a.connectionPair),this._tooltipInstance&&a.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=ti(this._injector,{direction:this._dir,positionStrategy:r,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,i]:i,scrollStrategy:this._injector.get(Vl)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(V(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(V(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(V(this._destroyed)).subscribe(a=>{a.preventDefault(),a.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(V(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(e){let t=e.getConfig().positionStrategy,i=this._getOrigin(),r=this._getOverlayPosition();t.withPositions([this._addOffset(q(q({},i.main),r.main)),this._addOffset(q(q({},i.fallback),r.fallback))])}_addOffset(e){let t=Wl,i=!this._dir||this._dir.value=="ltr";return e.originY==="top"?e.offsetY=-t:e.originY==="bottom"?e.offsetY=t:e.originX==="start"?e.offsetX=i?-t:t:e.originX==="end"&&(e.offsetX=i?t:-t),e}_getOrigin(){let e=!this._dir||this._dir.value=="ltr",t=this.position,i;t=="above"||t=="below"?i={originX:"center",originY:t=="above"?"top":"bottom"}:t=="before"||t=="left"&&e||t=="right"&&!e?i={originX:"start",originY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(i={originX:"end",originY:"center"});let{x:r,y:a}=this._invertPosition(i.originX,i.originY);return{main:i,fallback:{originX:r,originY:a}}}_getOverlayPosition(){let e=!this._dir||this._dir.value=="ltr",t=this.position,i;t=="above"?i={overlayX:"center",overlayY:"bottom"}:t=="below"?i={overlayX:"center",overlayY:"top"}:t=="before"||t=="left"&&e||t=="right"&&!e?i={overlayX:"end",overlayY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(i={overlayX:"start",overlayY:"center"});let{x:r,y:a}=this._invertPosition(i.overlayX,i.overlayY);return{main:i,fallback:{overlayX:r,overlayY:a}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),De(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e instanceof Set?Array.from(e):e,this._tooltipInstance._markForCheck())}_invertPosition(e,t){return this.position==="above"||this.position==="below"?t==="top"?t="bottom":t==="bottom"&&(t="top"):e==="end"?e="start":e==="start"&&(e="end"),{x:e,y:t}}_updateCurrentPositionClass(e){let{overlayY:t,originX:i,originY:r}=e,a;if(t==="center"?this._dir&&this._dir.value==="rtl"?a=i==="end"?"left":"right":a=i==="start"?"left":"right":a=t==="bottom"&&r==="top"?"above":"below",a!==this._currentPosition){let l=this._overlayRef;if(l){let d=`${this._cssClassPrefix}-${ja}-`;l.removePanelClass(d+this._currentPosition),l.addPanelClass(d+a)}this._currentPosition=a}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!=="off"&&(this._disableNativeGesturesIfNecessary(),this._addListener("touchstart",e=>{let t=e.targetTouches?.[0],i=t?{x:t.clientX,y:t.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let r=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,i)},this._defaultOptions?.touchLongPressShowDelay??r)})):this._addListener("mouseenter",e=>{this._setupPointerExitEventsIfNeeded();let t;e.x!==void 0&&e.y!==void 0&&(t=e),this.show(void 0,t)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener("mouseleave",e=>{let t=e.relatedTarget;(!t||!this._overlayRef?.overlayElement.contains(t))&&this.hide()}),this._addListener("wheel",e=>{if(this._isTooltipVisible()){let t=this._document.elementFromPoint(e.clientX,e.clientY),i=this._elementRef.nativeElement;t!==i&&!i.contains(t)&&this.hide()}});else if(this.touchGestures!=="off"){this._disableNativeGesturesIfNecessary();let e=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener("touchend",e),this._addListener("touchcancel",e)}}}_addListener(e,t){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,e,t,Hl))}_isTouchPlatform(){let e=this._defaultOptions?.detectHoverCapability;return typeof e=="function"?!e():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!e&&this._mediaMatcher.matchMedia("(any-hover: none)").matches:!1}_disableNativeGesturesIfNecessary(){let e=this.touchGestures;if(e!=="off"){let t=this._elementRef.nativeElement,i=t.style;(e==="on"||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA")&&(i.userSelect=i.msUserSelect=i.webkitUserSelect=i.MozUserSelect="none"),(e==="on"||!t.draggable)&&(i.webkitUserDrag="none"),i.touchAction="none",i.webkitTapHighlightColor="transparent"}}_syncAriaDescription(e){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,e,"tooltip"),this._isDestroyed||De({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")}},{injector:this._injector}))}_overlayEventPredicate=e=>e.type==="keydown"?this._isTooltipVisible()&&e.keyCode===27&&!Ae(e):!0;static \u0275fac=function(t){return new(t||n)};static \u0275dir=g({type:n,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],hostVars:2,hostBindings:function(t,i){t&2&&L("mat-mdc-tooltip-disabled",i.disabled)},inputs:{position:[0,"matTooltipPosition","position"],positionAtOrigin:[0,"matTooltipPositionAtOrigin","positionAtOrigin"],disabled:[0,"matTooltipDisabled","disabled"],showDelay:[0,"matTooltipShowDelay","showDelay"],hideDelay:[0,"matTooltipHideDelay","hideDelay"],touchGestures:[0,"matTooltipTouchGestures","touchGestures"],message:[0,"matTooltip","message"],tooltipClass:[0,"matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]})}return n})(),ql=(()=>{class n{_changeDetectorRef=s(ge);_elementRef=s(k);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=be();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new v;_showAnimation="mat-mdc-tooltip-show";_hideAnimation="mat-mdc-tooltip-hide";constructor(){}show(e){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},e)}hide(e){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},e)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let e=this._elementRef.nativeElement.getBoundingClientRect();return e.height>Ql&&e.width>=Yl}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(e){e?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(e){let t=this._tooltip.nativeElement,i=this._showAnimation,r=this._hideAnimation;if(t.classList.remove(e?r:i),t.classList.add(e?i:r),this._isVisible!==e&&(this._isVisible=e,this._changeDetectorRef.markForCheck()),e&&!this._animationsDisabled&&typeof getComputedStyle=="function"){let a=getComputedStyle(t);(a.getPropertyValue("animation-duration")==="0s"||a.getPropertyValue("animation-name")==="none")&&(this._animationsDisabled=!0)}e&&this._onShow(),this._animationsDisabled&&(t.classList.add("_mat-animation-noopable"),this._finalizeAnimation(e))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=C({type:n,selectors:[["mat-tooltip-component"]],viewQuery:function(t,i){if(t&1&&ke(zl,7),t&2){let r;M(r=I())&&(i._tooltip=r.first)}},hostAttrs:["aria-hidden","true"],hostBindings:function(t,i){t&1&&B("mouseleave",function(a){return i._handleMouseLeave(a)})},decls:4,vars:5,consts:[["tooltip",""],[1,"mdc-tooltip","mat-mdc-tooltip",3,"animationend"],[1,"mat-mdc-tooltip-surface","mdc-tooltip__surface"]],template:function(t,i){t&1&&(He(0,"div",1,0),Co("animationend",function(a){return i._handleAnimationEnd(a)}),He(2,"div",2),p(3),qe()()),t&2&&(it(i.tooltipClass),L("mdc-tooltip--multiline",i._isMultiline),h(3),Xe(i.message))},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--mat-tooltip-container-color, var(--mat-sys-inverse-surface));
  color: var(--mat-tooltip-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-tooltip-container-shape, var(--mat-sys-corner-extra-small));
  font-family: var(--mat-tooltip-supporting-text-font, var(--mat-sys-body-small-font));
  font-size: var(--mat-tooltip-supporting-text-size, var(--mat-sys-body-small-size));
  font-weight: var(--mat-tooltip-supporting-text-weight, var(--mat-sys-body-small-weight));
  line-height: var(--mat-tooltip-supporting-text-line-height, var(--mat-sys-body-small-line-height));
  letter-spacing: var(--mat-tooltip-supporting-text-tracking, var(--mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2,changeDetection:0})}return n})();var Ua=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=S({imports:[In,ii,Q,lt]})}return n})();var Wa=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=S({imports:[Ji,Q]})}return n})();function Gl(n,o){if(n&1&&(c(0,"mat-option",17),p(1),m()),n&2){let e=o.$implicit;D("value",e),h(),j(" ",e," ")}}function Xl(n,o){if(n&1){let e=he();c(0,"mat-form-field",14)(1,"mat-select",16,0),B("selectionChange",function(i){ae(e);let r=y(2);return se(r._changePageSize(i.value))}),xo(3,Gl,2,2,"mat-option",17,yo),m(),c(5,"div",18),B("click",function(){ae(e);let i=rt(2);return se(i.open())}),m()()}if(n&2){let e=y(2);D("appearance",e._formFieldAppearance)("color",e.color),h(),D("value",e.pageSize)("disabled",e.disabled),vo("aria-labelledby",e._pageSizeLabelId),D("panelClass",e.selectConfig.panelClass||"")("disableOptionCentering",e.selectConfig.disableOptionCentering),h(2),wo(e._displayedPageSizeOptions)}}function $l(n,o){if(n&1&&(c(0,"div",15),p(1),m()),n&2){let e=y(2);h(),Xe(e.pageSize)}}function Kl(n,o){if(n&1&&(c(0,"div",3)(1,"div",13),p(2),m(),A(3,Xl,6,7,"mat-form-field",14),A(4,$l,2,1,"div",15),m()),n&2){let e=y();h(),J("id",e._pageSizeLabelId),h(),j(" ",e._intl.itemsPerPageLabel," "),h(),F(e._displayedPageSizeOptions.length>1?3:-1),h(),F(e._displayedPageSizeOptions.length<=1?4:-1)}}function Zl(n,o){if(n&1){let e=he();c(0,"button",19),B("click",function(){ae(e);let i=y();return se(i._buttonClicked(0,i._previousButtonsDisabled()))}),et(),c(1,"svg",8),U(2,"path",20),m()()}if(n&2){let e=y();D("matTooltip",e._intl.firstPageLabel)("matTooltipDisabled",e._previousButtonsDisabled())("disabled",e._previousButtonsDisabled())("tabindex",e._previousButtonsDisabled()?-1:null),J("aria-label",e._intl.firstPageLabel)}}function Jl(n,o){if(n&1){let e=he();c(0,"button",21),B("click",function(){ae(e);let i=y();return se(i._buttonClicked(i.getNumberOfPages()-1,i._nextButtonsDisabled()))}),et(),c(1,"svg",8),U(2,"path",22),m()()}if(n&2){let e=y();D("matTooltip",e._intl.lastPageLabel)("matTooltipDisabled",e._nextButtonsDisabled())("disabled",e._nextButtonsDisabled())("tabindex",e._nextButtonsDisabled()?-1:null),J("aria-label",e._intl.lastPageLabel)}}var ed=(()=>{class n{changes=new v;itemsPerPageLabel="Items per page:";nextPageLabel="Next page";previousPageLabel="Previous page";firstPageLabel="First page";lastPageLabel="Last page";getRangeLabel=(e,t,i)=>{if(i==0||t==0)return`0 of ${i}`;i=Math.max(i,0);let r=e*t,a=r<i?Math.min(r+t,i):r+t;return`${r+1} \u2013 ${a} of ${i}`};static \u0275fac=function(t){return new(t||n)};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),td=50;var id=new b("MAT_PAGINATOR_DEFAULT_OPTIONS"),ri=(()=>{class n{_intl=s(ed);_changeDetectorRef=s(ge);_formFieldAppearance;_pageSizeLabelId=s(we).getId("mat-paginator-page-size-label-");_intlChanges;_isInitialized=!1;_initializedStream=new so(1);color;get pageIndex(){return this._pageIndex}set pageIndex(e){this._pageIndex=Math.max(e||0,0),this._changeDetectorRef.markForCheck()}_pageIndex=0;get length(){return this._length}set length(e){this._length=e||0,this._changeDetectorRef.markForCheck()}_length=0;get pageSize(){return this._pageSize}set pageSize(e){this._pageSize=Math.max(e||0,0),this._updateDisplayedPageSizeOptions()}_pageSize;get pageSizeOptions(){return this._pageSizeOptions}set pageSizeOptions(e){this._pageSizeOptions=(e||[]).map(t=>Ue(t,0)),this._updateDisplayedPageSizeOptions()}_pageSizeOptions=[];hidePageSize=!1;showFirstLastButtons=!1;selectConfig={};disabled=!1;page=new Z;_displayedPageSizeOptions;initialized=this._initializedStream;constructor(){let e=this._intl,t=s(id,{optional:!0});if(this._intlChanges=e.changes.subscribe(()=>this._changeDetectorRef.markForCheck()),t){let{pageSize:i,pageSizeOptions:r,hidePageSize:a,showFirstLastButtons:l}=t;i!=null&&(this._pageSize=i),r!=null&&(this._pageSizeOptions=r),a!=null&&(this.hidePageSize=a),l!=null&&(this.showFirstLastButtons=l)}this._formFieldAppearance=t?.formFieldAppearance||"outline"}ngOnInit(){this._isInitialized=!0,this._updateDisplayedPageSizeOptions(),this._initializedStream.next()}ngOnDestroy(){this._initializedStream.complete(),this._intlChanges.unsubscribe()}nextPage(){this.hasNextPage()&&this._navigate(this.pageIndex+1)}previousPage(){this.hasPreviousPage()&&this._navigate(this.pageIndex-1)}firstPage(){this.hasPreviousPage()&&this._navigate(0)}lastPage(){this.hasNextPage()&&this._navigate(this.getNumberOfPages()-1)}hasPreviousPage(){return this.pageIndex>=1&&this.pageSize!=0}hasNextPage(){let e=this.getNumberOfPages()-1;return this.pageIndex<e&&this.pageSize!=0}getNumberOfPages(){return this.pageSize?Math.ceil(this.length/this.pageSize):0}_changePageSize(e){let t=this.pageIndex*this.pageSize,i=this.pageIndex;this.pageIndex=Math.floor(t/e)||0,this.pageSize=e,this._emitPageEvent(i)}_nextButtonsDisabled(){return this.disabled||!this.hasNextPage()}_previousButtonsDisabled(){return this.disabled||!this.hasPreviousPage()}_updateDisplayedPageSizeOptions(){this._isInitialized&&(this.pageSize||(this._pageSize=this.pageSizeOptions.length!=0?this.pageSizeOptions[0]:td),this._displayedPageSizeOptions=this.pageSizeOptions.slice(),this._displayedPageSizeOptions.indexOf(this.pageSize)===-1&&this._displayedPageSizeOptions.push(this.pageSize),this._displayedPageSizeOptions.sort((e,t)=>e-t),this._changeDetectorRef.markForCheck())}_emitPageEvent(e){this.page.emit({previousPageIndex:e,pageIndex:this.pageIndex,pageSize:this.pageSize,length:this.length})}_navigate(e){let t=this.pageIndex;e!==t&&(this.pageIndex=e,this._emitPageEvent(t))}_buttonClicked(e,t){t||this._navigate(e)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=C({type:n,selectors:[["mat-paginator"]],hostAttrs:["role","group",1,"mat-mdc-paginator"],inputs:{color:"color",pageIndex:[2,"pageIndex","pageIndex",Ue],length:[2,"length","length",Ue],pageSize:[2,"pageSize","pageSize",Ue],pageSizeOptions:"pageSizeOptions",hidePageSize:[2,"hidePageSize","hidePageSize",w],showFirstLastButtons:[2,"showFirstLastButtons","showFirstLastButtons",w],selectConfig:"selectConfig",disabled:[2,"disabled","disabled",w]},outputs:{page:"page"},exportAs:["matPaginator"],decls:14,vars:14,consts:[["selectRef",""],[1,"mat-mdc-paginator-outer-container"],[1,"mat-mdc-paginator-container"],[1,"mat-mdc-paginator-page-size"],[1,"mat-mdc-paginator-range-actions"],["aria-atomic","true","aria-live","polite","role","status",1,"mat-mdc-paginator-range-label"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-first",3,"matTooltip","matTooltipDisabled","disabled","tabindex"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-previous",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["viewBox","0 0 24 24","focusable","false","aria-hidden","true",1,"mat-mdc-paginator-icon"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-next",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-last",3,"matTooltip","matTooltipDisabled","disabled","tabindex"],["aria-hidden","true",1,"mat-mdc-paginator-page-size-label"],[1,"mat-mdc-paginator-page-size-select",3,"appearance","color"],[1,"mat-mdc-paginator-page-size-value"],["hideSingleSelectionIndicator","",3,"selectionChange","value","disabled","aria-labelledby","panelClass","disableOptionCentering"],[3,"value"],[1,"mat-mdc-paginator-touch-target",3,"click"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-first",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-last",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"]],template:function(t,i){t&1&&(c(0,"div",1)(1,"div",2),A(2,Kl,5,4,"div",3),c(3,"div",4)(4,"div",5),p(5),m(),A(6,Zl,3,5,"button",6),c(7,"button",7),B("click",function(){return i._buttonClicked(i.pageIndex-1,i._previousButtonsDisabled())}),et(),c(8,"svg",8),U(9,"path",9),m()(),po(),c(10,"button",10),B("click",function(){return i._buttonClicked(i.pageIndex+1,i._nextButtonsDisabled())}),et(),c(11,"svg",8),U(12,"path",11),m()(),A(13,Jl,3,5,"button",12),m()()()),t&2&&(h(2),F(i.hidePageSize?-1:2),h(3),j(" ",i._intl.getRangeLabel(i.pageIndex,i.pageSize,i.length)," "),h(),F(i.showFirstLastButtons?6:-1),h(),D("matTooltip",i._intl.previousPageLabel)("matTooltipDisabled",i._previousButtonsDisabled())("disabled",i._previousButtonsDisabled())("tabindex",i._previousButtonsDisabled()?-1:null),J("aria-label",i._intl.previousPageLabel),h(3),D("matTooltip",i._intl.nextPageLabel)("matTooltipDisabled",i._nextButtonsDisabled())("disabled",i._nextButtonsDisabled())("tabindex",i._nextButtonsDisabled()?-1:null),J("aria-label",i._intl.nextPageLabel),h(3),F(i.showFirstLastButtons?13:-1))},dependencies:[zi,Pa,St,Va,Ha],styles:[`.mat-mdc-paginator {
  display: block;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--mat-paginator-container-text-color, var(--mat-sys-on-surface));
  background-color: var(--mat-paginator-container-background-color, var(--mat-sys-surface));
  font-family: var(--mat-paginator-container-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-paginator-container-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-paginator-container-text-size, var(--mat-sys-body-small-size));
  font-weight: var(--mat-paginator-container-text-weight, var(--mat-sys-body-small-weight));
  letter-spacing: var(--mat-paginator-container-text-tracking, var(--mat-sys-body-small-tracking));
  --mat-form-field-container-height: var(--mat-paginator-form-field-container-height, 40px);
  --mat-form-field-container-vertical-padding: var(--mat-paginator-form-field-container-vertical-padding, 8px);
}
.mat-mdc-paginator .mat-mdc-select-value {
  font-size: var(--mat-paginator-select-trigger-text-size, var(--mat-sys-body-small-size));
}
.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper {
  display: none;
}
.mat-mdc-paginator .mat-mdc-select {
  line-height: 1.5;
}

.mat-mdc-paginator-outer-container {
  display: flex;
}

.mat-mdc-paginator-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 8px;
  flex-wrap: wrap;
  width: 100%;
  min-height: var(--mat-paginator-container-size, 56px);
}

.mat-mdc-paginator-page-size {
  display: flex;
  align-items: baseline;
  margin-right: 8px;
}
[dir=rtl] .mat-mdc-paginator-page-size {
  margin-right: 0;
  margin-left: 8px;
}

.mat-mdc-paginator-page-size-label {
  margin: 0 4px;
}

.mat-mdc-paginator-page-size-select {
  margin: 0 4px;
  width: var(--mat-paginator-page-size-select-width, 84px);
}

.mat-mdc-paginator-range-label {
  margin: 0 32px 0 24px;
}

.mat-mdc-paginator-range-actions {
  display: flex;
  align-items: center;
}

.mat-mdc-paginator-icon {
  display: inline-block;
  width: 28px;
  fill: var(--mat-paginator-enabled-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon {
  fill: var(--mat-paginator-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
[dir=rtl] .mat-mdc-paginator-icon {
  transform: rotate(180deg);
}

@media (forced-colors: active) {
  .mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon,
  .mat-mdc-paginator-icon {
    fill: currentColor;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button {
    outline: solid 1px;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button[aria-disabled] {
    color: GrayText;
  }
}
.mat-mdc-paginator-touch-target {
  display: var(--mat-paginator-touch-target-display, block);
  position: absolute;
  top: 50%;
  left: 50%;
  width: var(--mat-paginator-page-size-select-width, 84px);
  height: var(--mat-paginator-page-size-select-touch-target-height, 48px);
  background-color: transparent;
  transform: translate(-50%, -50%);
  cursor: pointer;
}
`],encapsulation:2,changeDetection:0})}return n})(),Qa=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=S({imports:[Wa,La,Ua,ri]})}return n})();var Y=os(rs());var tn=class n{http=s(pi);getQuotes(o){return this.http.get(de.quotes.getQuotes+"/"+o).pipe(ne(e=>te(()=>e)))}getRefs(o){return this.http.get(de.refs.getRefs+"/"+o).pipe(ne(e=>te(()=>e)))}createQuote(o){let e={cliente:o};return this.http.post(de.quotes.createQuote,e).pipe(ne(t=>te(()=>t)))}createQuoteDet(o){let e={altoCM:Number(o.altoCM),anchoCM:Number(o.anchoCM),cantidad:Number(o.cantidad),id_cotizacion:Number(o.id_cotizacion),id_detalle:Number(o.id_detalle),largoCM:Number(o.largoCM),peso_kg:Number(o.peso_kg)};return this.http.post(de.quotes.createQuoteDet,e).pipe(ne(t=>te(()=>t)))}updateQuoteDet(o){let e={id_cotdetalle:Number(o.id_cotdetalle),cantidad:Number(o.cantidad),largoCM:Number(o.largoCM),anchoCM:Number(o.anchoCM),altoCM:Number(o.altoCM),peso_kg:Number(o.peso_kg)};return this.http.put(de.quotes.updateQuoteDet,e).pipe(ne(t=>te(()=>t)))}generateQuote(o){let e={id_detalle:Number(o.id_detalle),id_cotdetalle:Number(o.id_cotdetalle)};return this.http.put(de.quotes.generateQuote,e).pipe(ne(t=>te(()=>t)))}closeQuote(o){let e={id_cotizacion:o};return this.http.post(de.quotes.closeQuote,e).pipe(ne(t=>te(()=>t)))}closeQuoteRow(o,e){let t={id_cotTotales:o,id_cotizacion:e};return this.http.put(de.quotes.closeQuoteRow,t).pipe(ne(i=>te(()=>i)))}cpeso(o){let e={id_detalle:o.id_detalle,cantidad:o.cantidad,peso_kg:o.peso_kg,largoCM:o.largoCM,anchoCM:o.anchoCM,altoCM:o.altoCM};return this.http.put(de.peso.cpeso,e).pipe(ne(t=>te(()=>t)))}deleteIdQuoete(o){return this.http.delete(de.quotes.deleteQuoteDet+"/"+o).pipe(ne(e=>te(()=>e)))}gettotal(o){return this.http.get(de.quotes.getTotalDto+"/"+o).pipe(ne(e=>te(()=>e)))}getQuoteDetail(o){return this.http.get(de.quotes.getQuoteDetail+"/"+o).pipe(ne(e=>te(()=>e)))}getIdQuote(o,e){return this.http.get(de.quotes.getIdQuotes+"/"+o+"/"+e).pipe(ne(t=>te(()=>t)))}getBrands(){return this.http.get(de.quotes.getBrands).pipe(ne(o=>te(()=>o)))}getSellers(){return this.http.get(de.quotes.getSellers).pipe(ne(o=>te(()=>o)))}getCustomers(o){return this.http.get(de.quotes.getCustomers+"/"+o).pipe(ne(e=>te(()=>e)))}squareAsync(o){return new Ke(e=>{setTimeout(()=>{e.next(o*o),e.complete()},1e3)})}asyncSum(o,e){return new Promise(t=>{setTimeout(()=>{t(o+e)},1e3)})}getRescue(o){return this.http.get(de.quotes.rescue+"/"+o).pipe(ne(e=>te(()=>e)))}static \u0275fac=function(e){return new(e||n)};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})};var Ya=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=S({imports:[Q]})}return n})();function qa(n){return Error(`Unable to find icon with the name "${n}"`)}function od(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function Ga(n){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${n}".`)}function Xa(n){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${n}".`)}var $e=class{url;svgText;options;svgElement=null;constructor(o,e,t){this.url=o,this.svgText=e,this.options=t}},Ka=(()=>{class n{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,t,i,r){this._httpClient=e,this._sanitizer=t,this._errorHandler=r,this._document=i}addSvgIcon(e,t,i){return this.addSvgIconInNamespace("",e,t,i)}addSvgIconLiteral(e,t,i){return this.addSvgIconLiteralInNamespace("",e,t,i)}addSvgIconInNamespace(e,t,i,r){return this._addSvgIconConfig(e,t,new $e(i,null,r))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,t,i,r){let a=this._sanitizer.sanitize(tt.HTML,i);if(!a)throw Xa(i);let l=ct(a);return this._addSvgIconConfig(e,t,new $e("",l,r))}addSvgIconSet(e,t){return this.addSvgIconSetInNamespace("",e,t)}addSvgIconSetLiteral(e,t){return this.addSvgIconSetLiteralInNamespace("",e,t)}addSvgIconSetInNamespace(e,t,i){return this._addSvgIconSetConfig(e,new $e(t,null,i))}addSvgIconSetLiteralInNamespace(e,t,i){let r=this._sanitizer.sanitize(tt.HTML,t);if(!r)throw Xa(t);let a=ct(r);return this._addSvgIconSetConfig(e,new $e("",a,i))}registerFontClassAlias(e,t=e){return this._fontCssClassesByAlias.set(e,t),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let t=this._sanitizer.sanitize(tt.RESOURCE_URL,e);if(!t)throw Ga(e);let i=this._cachedIconsByUrl.get(t);return i?ue(nn(i)):this._loadSvgIconFromConfig(new $e(e,null)).pipe(_t(r=>this._cachedIconsByUrl.set(t,r)),ie(r=>nn(r)))}getNamedSvgIcon(e,t=""){let i=$a(t,e),r=this._svgIconConfigs.get(i);if(r)return this._getSvgFromConfig(r);if(r=this._getIconConfigFromResolvers(t,e),r)return this._svgIconConfigs.set(i,r),this._getSvgFromConfig(r);let a=this._iconSetConfigs.get(t);return a?this._getSvgFromIconSetConfigs(e,a):te(qa(i))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?ue(nn(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(ie(t=>nn(t)))}_getSvgFromIconSetConfigs(e,t){let i=this._extractIconWithNameFromAnySet(e,t);if(i)return ue(i);let r=t.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(ne(l=>{let f=`Loading icon set URL: ${this._sanitizer.sanitize(tt.RESOURCE_URL,a.url)} failed: ${l.message}`;return this._errorHandler.handleError(new Error(f)),ue(null)})));return mo(r).pipe(ie(()=>{let a=this._extractIconWithNameFromAnySet(e,t);if(!a)throw qa(e);return a}))}_extractIconWithNameFromAnySet(e,t){for(let i=t.length-1;i>=0;i--){let r=t[i];if(r.svgText&&r.svgText.toString().indexOf(e)>-1){let a=this._svgElementFromConfig(r),l=this._extractSvgIconFromSet(a,e,r.options);if(l)return l}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(_t(t=>e.svgText=t),ie(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?ue(null):this._fetchIcon(e).pipe(_t(t=>e.svgText=t))}_extractSvgIconFromSet(e,t,i){let r=e.querySelector(`[id="${t}"]`);if(!r)return null;let a=r.cloneNode(!0);if(a.removeAttribute("id"),a.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(a,i);if(a.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(a),i);let l=this._svgElementFromString(ct("<svg></svg>"));return l.appendChild(a),this._setSvgAttributes(l,i)}_svgElementFromString(e){let t=this._document.createElement("DIV");t.innerHTML=e;let i=t.querySelector("svg");if(!i)throw Error("<svg> tag not found");return i}_toSvgElement(e){let t=this._svgElementFromString(ct("<svg></svg>")),i=e.attributes;for(let r=0;r<i.length;r++){let{name:a,value:l}=i[r];a!=="id"&&t.setAttribute(a,l)}for(let r=0;r<e.childNodes.length;r++)e.childNodes[r].nodeType===this._document.ELEMENT_NODE&&t.appendChild(e.childNodes[r].cloneNode(!0));return t}_setSvgAttributes(e,t){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),t&&t.viewBox&&e.setAttribute("viewBox",t.viewBox),e}_fetchIcon(e){let{url:t,options:i}=e,r=i?.withCredentials??!1;if(!this._httpClient)throw od();if(t==null)throw Error(`Cannot fetch icon from URL "${t}".`);let a=this._sanitizer.sanitize(tt.RESOURCE_URL,t);if(!a)throw Ga(t);let l=this._inProgressUrlFetches.get(a);if(l)return l;let d=this._httpClient.get(a,{responseType:"text",withCredentials:r}).pipe(ie(f=>ct(f)),uo(()=>this._inProgressUrlFetches.delete(a)),ho());return this._inProgressUrlFetches.set(a,d),d}_addSvgIconConfig(e,t,i){return this._svgIconConfigs.set($a(e,t),i),this}_addSvgIconSetConfig(e,t){let i=this._iconSetConfigs.get(e);return i?i.push(t):this._iconSetConfigs.set(e,[t]),this}_svgElementFromConfig(e){if(!e.svgElement){let t=this._svgElementFromString(e.svgText);this._setSvgAttributes(t,e.options),e.svgElement=t}return e.svgElement}_getIconConfigFromResolvers(e,t){for(let i=0;i<this._resolvers.length;i++){let r=this._resolvers[i](t,e);if(r)return rd(r)?new $e(r.url,null,r.options):new $e(r,null)}}static \u0275fac=function(t){return new(t||n)(Et(pi,8),Et(_i),Et(H,8),Et(di))};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function nn(n){return n.cloneNode(!0)}function $a(n,o){return n+":"+o}function rd(n){return!!(n.url&&n.options)}var ad=["*"],sd=new b("MAT_ICON_DEFAULT_OPTIONS"),ld=new b("mat-icon-location",{providedIn:"root",factory:()=>{let n=s(H),o=n?n.location:null;return{getPathname:()=>o?o.pathname+o.search:""}}}),Za=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],dd=Za.map(n=>`[${n}]`).join(", "),cd=/^url\(['"]?#(.*?)['"]?\)$/,Ja=(()=>{class n{_elementRef=s(k);_iconRegistry=s(Ka);_location=s(ld);_errorHandler=s(di);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let t=this._cleanupFontValue(e);t!==this._fontSet&&(this._fontSet=t,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let t=this._cleanupFontValue(e);t!==this._fontIcon&&(this._fontIcon=t,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=ve.EMPTY;constructor(){let e=s(new bt("aria-hidden"),{optional:!0}),t=s(sd,{optional:!0});t&&(t.color&&(this.color=this._defaultColor=t.color),t.fontSet&&(this.fontSet=t.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let t=e.split(":");switch(t.length){case 1:return["",t[0]];case 2:return t;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let t=this._location.getPathname();t!==this._previousPath&&(this._previousPath=t,this._prependPathToReferences(t))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let t=this._location.getPathname();this._previousPath=t,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(t),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,t=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();t--;){let i=e.childNodes[t];(i.nodeType!==1||i.nodeName.toLowerCase()==="svg")&&i.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,t=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(i=>i.length>0);this._previousFontSetClass.forEach(i=>e.classList.remove(i)),t.forEach(i=>e.classList.add(i)),this._previousFontSetClass=t,this.fontIcon!==this._previousFontIconClass&&!t.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let t=this._elementsWithExternalReferences;t&&t.forEach((i,r)=>{i.forEach(a=>{r.setAttribute(a.name,`url('${e}#${a.value}')`)})})}_cacheChildrenWithExternalReferences(e){let t=e.querySelectorAll(dd),i=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let r=0;r<t.length;r++)Za.forEach(a=>{let l=t[r],d=l.getAttribute(a),f=d?d.match(cd):null;if(f){let u=i.get(l);u||(u=[],i.set(l,u)),u.push({name:a,value:f[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[t,i]=this._splitIconName(e);t&&(this._svgNamespace=t),i&&(this._svgName=i),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(i,t).pipe(pt(1)).subscribe(r=>this._setSvgElement(r),r=>{let a=`Error retrieving icon ${t}:${i}! ${r.message}`;this._errorHandler.handleError(new Error(a))})}}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=C({type:n,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(t,i){t&2&&(J("data-mat-icon-type",i._usingFontIcon()?"font":"svg")("data-mat-icon-name",i._svgName||i.fontIcon)("data-mat-icon-namespace",i._svgNamespace||i.fontSet)("fontIcon",i._usingFontIcon()?i.fontIcon:null),it(i.color?"mat-"+i.color:""),L("mat-icon-inline",i.inline)("mat-icon-no-color",i.color!=="primary"&&i.color!=="accent"&&i.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",w],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:ad,decls:1,vars:0,template:function(t,i){t&1&&(oe(),P(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2,changeDetection:0})}return n})(),es=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=S({imports:[Q]})}return n})();var ud=["*"];var hd=new b("MAT_CARD_CONFIG"),ts=(()=>{class n{appearance;constructor(){let e=s(hd,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=C({type:n,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(t,i){t&2&&L("mat-mdc-card-outlined",i.appearance==="outlined")("mdc-card--outlined",i.appearance==="outlined")("mat-mdc-card-filled",i.appearance==="filled")("mdc-card--filled",i.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:ud,decls:1,vars:0,template:function(t,i){t&1&&(oe(),P(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-elevated-container-elevation, var(--mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--mat-card-outlined-container-color, var(--mat-sys-surface));
  border-radius: var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));
  border-width: var(--mat-card-outlined-outline-width, 1px);
  border-color: var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));
  box-shadow: var(--mat-card-outlined-container-elevation, var(--mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));
  border-radius: var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-filled-container-elevation, var(--mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--mat-card-title-text-font, var(--mat-sys-title-large-font));
  line-height: var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-size: var(--mat-card-title-text-size, var(--mat-sys-title-large-size));
  letter-spacing: var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));
  font-weight: var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));
  line-height: var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));
  font-size: var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));
  letter-spacing: var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));
  font-weight: var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2,changeDetection:0})}return n})();var is=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=S({imports:[Q]})}return n})();var pd=()=>[5,10,20];function _d(n,o){if(n&1&&(c(0,"option",54),p(1),fe(2,"uppercase"),fe(3,"uppercase"),m()),n&2){let e=o.$implicit;h(),ko("",Ot(2,2,e.id_proveedor)," <=> ",Ot(3,4,e.proveedor))}}function gd(n,o){if(n&1&&(c(0,"div",51)(1,"select",52),z(2,_d,4,6,"option",53),m()()),n&2){let e=y();h(2),D("ngForOf",e.brandsList)}}function bd(n,o){if(n&1&&(c(0,"option",63),p(1),fe(2,"uppercase"),m()),n&2){let e=o.$implicit;D("ngValue",e.id_detalle),h(),Eo("ref: ",e.part_number," : ",e.herramienta," marca : ",Ot(2,4,e.proveedor))}}function vd(n,o){if(n&1){let e=he();c(0,"div",64)(1,"button",65),B("click",function(){ae(e);let i=y(2);return se(i.cotizarButton=!0)}),c(2,"a",66)(3,"mat-icon"),p(4,"note_add"),m()()()()}}function yd(n,o){n&1&&U(0,"div",51)}function xd(n,o){if(n&1){let e=he();c(0,"div",3)(1,"div",4)(2,"div",55)(3,"input",56),B("change",function(){ae(e);let i=y();return se(i.getRefs())}),m()(),c(4,"div",3)(5,"div",57)(6,"div",58)(7,"select",59),z(8,bd,3,6,"option",60),m(),c(9,"label",61),p(10,"select menu part_number"),m()()(),z(11,vd,5,0,"div",62),m()(),c(12,"div",4),z(13,yd,1,0,"div",7),m()()}if(n&2){let e=y();h(8),D("ngForOf",e.refsList),h(3),D("ngIf",e.addButton),h(2),D("ngIf",e.statusForms)}}function wd(n,o){n&1&&(c(0,"th",67),p(1," No. "),m())}function Cd(n,o){if(n&1&&(c(0,"td",68),p(1),m()),n&2){let e=o.$implicit;h(),j(" ",e.index," ")}}function Dd(n,o){n&1&&(c(0,"th",67),p(1," Part_number "),m())}function Sd(n,o){if(n&1&&(c(0,"td",68),p(1),m()),n&2){let e=o.$implicit;h(),j(" ",e.part_number," ")}}function kd(n,o){n&1&&(c(0,"th",67),p(1," Brand "),m())}function Ed(n,o){if(n&1&&(c(0,"td",68),p(1),fe(2,"uppercase"),m()),n&2){let e=o.$implicit;h(),j(" ",Ot(2,1,e.proveedor)," ")}}function Rd(n,o){n&1&&(c(0,"th",67),p(1," Description "),m())}function Md(n,o){if(n&1&&(c(0,"td",68),p(1),m()),n&2){let e=o.$implicit;h(),j(" ",e.descripcion," ")}}function Id(n,o){n&1&&(c(0,"th",67),p(1," Cantidad "),m())}function Od(n,o){if(n&1&&(c(0,"td",68),p(1),m()),n&2){let e=o.$implicit;h(),j(" ",e.cantidad," ")}}function Td(n,o){n&1&&(c(0,"th",67),p(1," Peso_total "),m())}function Ad(n,o){if(n&1&&(c(0,"td",68),p(1),m()),n&2){let e=o.$implicit;h(),j(" ",e.peso_total," ")}}function Fd(n,o){n&1&&(c(0,"th",67),p(1," PrecioCop "),m())}function Pd(n,o){if(n&1&&(c(0,"td",68),p(1),fe(2,"currency"),m()),n&2){let e=o.$implicit;h(),j(" ",ze(2,1,e.preciolistaCOP,"COP","symbol-narrow","1.0-0")," ")}}function Ld(n,o){n&1&&(c(0,"th",67),p(1," PrecioRes "),m())}function Nd(n,o){if(n&1&&(c(0,"td",68),p(1),fe(2,"currency"),m()),n&2){let e=o.$implicit;h(),j(" ",ze(2,1,e.precioRescateCOP,"COP","symbol-narrow","1.0-0")," ")}}function zd(n,o){n&1&&(c(0,"th",67),p(1," Preciototal "),m())}function Bd(n,o){if(n&1&&(c(0,"td",68),p(1),fe(2,"currency"),m()),n&2){let e=o.$implicit;h(),j(" ",ze(2,1,e.preciototal,"COP","symbol-narrow","1.0-0")," ")}}function Vd(n,o){n&1&&(c(0,"th",67),p(1," PrecioTotalRes "),m())}function jd(n,o){if(n&1&&(c(0,"td",68),p(1),fe(2,"currency"),m()),n&2){let e=o.$implicit;h(),j(" ",ze(2,1,e.preciototalRescate,"COP","symbol-narrow","1.0-0")," ")}}function Hd(n,o){n&1&&(c(0,"th",67),p(1,"Dto%"),m())}function Ud(n,o){if(n&1&&(c(0,"td",68),p(1),fe(2,"percent"),m()),n&2){let e=o.$implicit;h(),j(" ",Mo(2,1,e.descuentoPER,"2.1-2")," ")}}function Wd(n,o){n&1&&(c(0,"th",67),p(1," Actions "),m())}function Qd(n,o){if(n&1){let e=he();c(0,"a",72),B("click",function(){ae(e);let i=y().$implicit,r=y();return se(r.viewData(i.peso_total,i.zona,i.flete,i.moneda,i.ajuste200USD,i.costoLandedUSD,i.costo_unitario,i.costo_total))}),c(1,"mat-icon"),p(2,"search"),m()()}}function Yd(n,o){if(n&1){let e=he();c(0,"td",68),z(1,Qd,3,0,"a",69),c(2,"a",70),B("click",function(){let i=ae(e).$implicit,r=y();return se(r.editButton(i.id_cotdetalle,i.cantidad,i.largoCM,i.anchoCM,i.altoCM,i.peso_kg))}),c(3,"mat-icon"),p(4,"edit"),m()(),c(5,"a",71),B("click",function(){let i=ae(e).$implicit,r=y();return se(r.deleteIdQuote(i.id_cotdetalle))}),c(6,"mat-icon"),p(7,"delete"),m()()()}if(n&2){let e=y();h(),D("ngIf",e.idRol!="3")}}function qd(n,o){n&1&&U(0,"tr",73)}function Gd(n,o){if(n&1){let e=he();c(0,"tr",74),B("click",function(){let i=ae(e).$implicit,r=y();return se(r.clickedRows.add(i))}),m()}if(n&2){let e=o.$implicit,t=y();L("demo-row-is-clicked",t.clickedRows.has(e))}}function Xd(n,o){if(n&1){let e=he();c(0,"button",78),B("click",function(){ae(e);let i=y(2);return se(i.closeQuote())}),p(1,"Terminar"),m()}}function $d(n,o){if(n&1){let e=he();c(0,"div",75),z(1,Xd,2,0,"button",76),c(2,"button",77),B("click",function(){ae(e);let i=y();return se(i.newQuote())}),p(3,"Limpiar"),m()()}if(n&2){let e=y();h(),D("ngIf",e.addButton)}}function Kd(n,o){if(n&1){let e=he();c(0,"button",50),B("click",function(){ae(e);let i=y();return se(i.createQuoteDet())}),p(1,"Cotizar"),m()}}function Zd(n,o){if(n&1){let e=he();c(0,"button",79),B("click",function(){ae(e);let i=y();return se(i.updateQuoteDet())}),p(1,"Cotizar"),m()}}var ns=class n{displayedColumns=["Index","Part_number","Brand","Description","Cantidad","Peso_total","PrecioCop","PrecioRes","Preciototal","PrecioTotalRes","Dto%","Actions"];dataSource=new Ei([]);clickedRows=new Set;paginator;quoteDetList=[];quoteTotList=[];viewDta={peso_real:0,zona:0,flete:0,moneda:"",ajuste200USD:0,costoLandedUSD:0,costo_unitario:0,costo_total:0};refsList=[];statusForms=!1;addButton=!0;cotizarButton=!0;id_quote=0;total=0;idRol="";brandsList=[];propiedadesDecimales;formBrands;formQuoteDet;utils=s(er);quotesService=s(tn);cd=s(ge);ngOnInit(){this.formBrands=new un({searchPart:new Ie("",[Ee.required]),cliente:new Ie("",[Ee.required]),"part-number":new Ie("",[Ee.required])}),this.formQuoteDet=new un({id_cotizacion:new Ie("",[Ee.required]),id_cotdetalle:new Ie(""),id_detalle:new Ie("",[Ee.required]),cantidad:new Ie("",[Ee.required]),largoCM:new Ie("",[Ee.required]),anchoCM:new Ie("",[Ee.required]),altoCM:new Ie("",[Ee.required]),peso_kg:new Ie("",[Ee.required])}),this.propiedadesDecimales=["peso_total","costo_unitario","costo_total","ajuste200USD","costoLandedUSD","preciolistaCOP","precioRescateCOP","preciototal","preciototalRescate","descuentoCOP"],this.getbrands()}ngAfterViewInit(){this.dataSource.paginator=this.paginator}listar(o){this.dataSource.data=[],o!=0&&(Y.default.fire({allowOutsideClick:!1,icon:"info",text:"Espere por favor..."}),Y.default.showLoading(),this.quotesService.getQuotes(o).subscribe({next:e=>{this.total=e.total;let t=e.list,i=new Array;if(t.length<=0){Y.default.fire({allowOutsideClick:!0,icon:"error",title:"datos no encontrados",text:"Error cargardo detalle"});return}t.forEach((r,a)=>{r.index=a+1,this.propiedadesDecimales.forEach(l=>{r[l]=this.utils.decimales(r[l],2)}),i.push(r)}),this.dataSource.data=i,this.cd.detectChanges(),Y.default.close()},error:e=>{Y.default.fire({allowOutsideClick:!0,icon:"error",title:e.error.msg,text:"Error cargardo cotizacion"})}}))}getRefs(){let o=this.formBrands.get("searchPart")?.value;this.refsList=[],this.quotesService.getRefs(o).subscribe({next:e=>{e.list.length>0&&(this.refsList=e.list,this.cd.detectChanges())},error:e=>{Y.default.fire({allowOutsideClick:!0,icon:"error",title:e.error.msg,text:"Error cargardo referencias"})}})}createQuote(){let o=this.formBrands.get("cliente")?.value;if(o==""){this.statusForms=!1;return}this.quotesService.createQuote(o).subscribe({next:e=>{this.statusForms=!1,e.id_quote>0&&(this.id_quote=Number(e.id_quote),this.statusForms=!0)},error:e=>{Y.default.fire({allowOutsideClick:!0,icon:"error",title:e.error.msg,text:"Error creando cotizacion"})}})}createQuoteDet(){Y.default.fire({allowOutsideClick:!1,icon:"info",text:"Espere por favor..."}),Y.default.showLoading(),this.cotizarButton=!0,this.formQuoteDet.get("id_cotizacion")?.setValue(this.id_quote);let o=this.formBrands.get("part-number")?.value;if(this.formQuoteDet.get("id_detalle")?.setValue(o),this.formQuoteDet.status=="INVALID"){Y.default.fire({allowOutsideClick:!0,icon:"error",title:"Error",text:"Debe completar datos"});return}this.quotesService.cpeso(this.formQuoteDet.value).subscribe({next:e=>{if(e.code==201){Y.default.fire({allowOutsideClick:!0,icon:"error",title:"Error",text:e.message});return}this.quotesService.createQuoteDet(this.formQuoteDet.value).subscribe({next:t=>{let i={id_detalle:o,id_cotdetalle:t.id_quote_detail};this.quotesService.generateQuote(i).subscribe({next:r=>{this.listar(this.id_quote),this.formQuoteDet.reset(),Y.default.close()},error:r=>{Y.default.fire({allowOutsideClick:!0,icon:"error",title:r.error.msg,text:"Error generando cotizacion"})}})},error:t=>{Y.default.fire({allowOutsideClick:!0,icon:"error",title:t.error.msg,text:"Error creando dellate cotizacion"})}})},error:e=>{Y.default.fire({allowOutsideClick:!0,icon:"error",title:e.error.msg,text:"Error calculando peso"})}})}updateQuoteDet(){Y.default.fire({allowOutsideClick:!1,icon:"info",text:"Espere por favor..."}),Y.default.showLoading(),this.quotesService.cpeso(this.formQuoteDet.value).subscribe({next:o=>{if(o.code==201){Y.default.fire({allowOutsideClick:!0,icon:"error",title:"Error",text:o.message});return}this.quotesService.updateQuoteDet(this.formQuoteDet.value).subscribe({next:e=>{this.cotizarButton=!1;let t=JSON.parse(e.data);this.quotesService.generateQuote(t).subscribe({next:i=>{this.listar(this.id_quote),this.formQuoteDet.reset(),Y.default.close()},error:i=>{Y.default.fire({allowOutsideClick:!0,icon:"error",title:i.error.msg,text:"Error generando cotizacion"})}})},error:e=>{Y.default.fire({allowOutsideClick:!0,icon:"error",title:e.error.msg,text:"Error actualizando detalle"})}})},error:o=>{Y.default.fire({allowOutsideClick:!0,icon:"error",title:o.error.msg,text:"Error calculando peso"})}})}closeQuote(){this.quoteDetList=[],this.quotesService.closeQuote(this.id_quote).subscribe({next:o=>{this.total=o.total,this.addButton=!1;let e=JSON.parse(o.rows);this.getTotalDto(this.id_quote)},error:o=>{Y.default.fire({allowOutsideClick:!0,icon:"error",title:o.error.msg,text:"Error cerrando cotizacion"})}})}newQuote(){this.formBrands.reset(),this.dataSource.data=[],this.quoteDetList=[],this.quoteTotList=[],this.refsList=[],this.statusForms=!1,this.addButton=!0,this.id_quote=0,this.total=0,this.clearViewData(),this.formBrands.get("cliente")?.setValue("")}deleteIdQuote(o){this.quotesService.deleteIdQuoete(o).subscribe({next:e=>{this.listar(this.id_quote)},error:e=>{Y.default.fire({allowOutsideClick:!0,icon:"error",title:e.error.msg,text:"Error borrando cotizacion"})}})}viewData(o,e,t,i,r,a,l,d){this.viewDta.peso_real=o,this.viewDta.zona=e,this.viewDta.flete=t,this.viewDta.moneda=i,this.viewDta.ajuste200USD=r,this.viewDta.costoLandedUSD=a,this.viewDta.costo_unitario=l,this.viewDta.costo_total=d}clearViewData(){this.viewDta.peso_real=0,this.viewDta.zona=0,this.viewDta.flete=0,this.viewDta.moneda="",this.viewDta.ajuste200USD=0,this.viewDta.costoLandedUSD=0,this.viewDta.costo_unitario=0,this.viewDta.costo_total=0}editButton(o,e,t,i,r,a){this.cotizarButton=!1,this.formQuoteDet.get("id_cotdetalle")?.setValue(o),this.formQuoteDet.get("cantidad")?.setValue(e),this.formQuoteDet.get("largoCM")?.setValue(t),this.formQuoteDet.get("anchoCM")?.setValue(i),this.formQuoteDet.get("altoCM")?.setValue(r),this.formQuoteDet.get("peso_kg")?.setValue(a)}getTotalDto(o){this.quoteTotList=[],this.quotesService.gettotal(o).subscribe({next:e=>{this.quoteTotList=e.totalDto,this.listar(this.id_quote)},error:e=>{Y.default.fire({allowOutsideClick:!0,icon:"error",title:e.error.msg,text:"Error calculando descuento"})}})}getbrands(){this.quotesService.getBrands().subscribe({next:o=>{this.brandsList=[],this.brandsList=o.list,this.cd.detectChanges()},error:o=>{Y.default.fire({allowOutsideClick:!0,icon:"error",title:o.error.msg,text:"Error obteniendo marcas"})}})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=C({type:n,selectors:[["app-quote"]],viewQuery:function(e,t){if(e&1&&ke(ri,5),e&2){let i;M(i=I())&&(t.paginator=i.first)}},decls:138,vars:52,consts:[[1,"row","m-5"],[1,"col-12","mb-0","text-center"],[3,"formGroup"],[1,"row"],[1,"col-6","mb-1"],[1,"input-group","flex-nowrap"],["formControlName","cliente","type","text","placeholder","Cliente","aria-label","Username","aria-describedby","addon-wrapping",1,"form-control",3,"blur"],["class","m-1",4,"ngIf"],["class","row",4,"ngIf"],[1,"col-12"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","Index"],["class","header","mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","Part_number"],["matColumnDef","Brand"],["matColumnDef","Description"],["matColumnDef","Cantidad"],["matColumnDef","Peso_total"],["matColumnDef","PrecioCop"],["matColumnDef","PrecioRes"],["matColumnDef","Preciototal"],["matColumnDef","PrecioTotalRes"],["matColumnDef","Dto%"],["matColumnDef","Actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"demo-row-is-clicked","click",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","","aria-label","Select page of periodic elements",3,"pageSizeOptions"],[1,"col-12","mb-0","text-end"],["class","mt-2",4,"ngIf"],["id","exampleModal","tabindex","-1","aria-labelledby","exampleModalLabel","aria-hidden","true",1,"modal","fade"],[1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],["id","exampleModalLabel",1,"modal-title","fs-5"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close"],[1,"modal-body"],[1,"mb-3"],["for","recipient-name",1,"col-form-label"],["formControlName","cantidad","type","number","id","recipient-name",1,"form-control"],["formControlName","largoCM","type","number","id","recipient-name",1,"form-control"],["formControlName","anchoCM","type","number","id","recipient-name",1,"form-control"],["formControlName","altoCM","type","number","id","recipient-name",1,"form-control"],["formControlName","peso_kg","type","number","id","recipient-name",1,"form-control"],[1,"modal-footer"],["type","button","data-bs-dismiss","modal",1,"btn","btn-secondary"],["type","button","class","btn btn-primary","data-bs-dismiss","modal",3,"click",4,"ngIf"],["type","button","class","btn btn-danger","data-bs-dismiss","modal",3,"click",4,"ngIf"],["id","exampleModal-1","tabindex","-1","aria-labelledby","exampleModalLabel","aria-hidden","true",1,"modal","fade"],[1,"m-0"],["type","button","data-bs-dismiss","modal",1,"btn","btn-primary",3,"click"],[1,"m-1"],["size","4","aria-label","size 3 select example",1,"form-select"],["value","1",4,"ngFor","ngForOf"],["value","1"],[1,"input-group","flex-nowrap","mb-2"],["formControlName","searchPart","type","text","placeholder","Part-number","aria-label","Username","aria-describedby","addon-wrapping",1,"form-control",3,"change"],[1,"col-10"],[1,"form-floating"],["formControlName","part-number","aria-label","Default select example",1,"form-select"],["id","floatingSelect",3,"ngValue",4,"ngFor","ngForOf"],["for","floatingSelect"],["class","col-1 p-0",4,"ngIf"],["id","floatingSelect",3,"ngValue"],[1,"col-1","p-0"],["type","button","data-bs-toggle","modal","data-bs-target","#exampleModal","data-bs-whatever","@mdo",1,"btn","btn-danger","mt-1",3,"click"],["type","button",1,"pointer",2,"color","#f7f6f4"],["mat-header-cell","",1,"header"],["mat-cell",""],["type","button","class","pointer","matTooltip","ver datos","style","color: #2649C3","data-bs-toggle","modal","data-bs-target","#exampleModal-1","data-bs-whatever","@mdo",3,"click",4,"ngIf"],["type","button","data-bs-toggle","modal","data-bs-target","#exampleModal","data-bs-whatever","@mdo",1,"pointer",2,"color","#FFD433",3,"click"],["type","button",1,"pointer",2,"color","#FF4233",3,"click"],["type","button","matTooltip","ver datos","data-bs-toggle","modal","data-bs-target","#exampleModal-1","data-bs-whatever","@mdo",1,"pointer",2,"color","#2649C3",3,"click"],["mat-header-row",""],["mat-row","",3,"click"],[1,"mt-2"],["type","button","class","btn btn-warning m-1",3,"click",4,"ngIf"],["type","button",1,"btn","btn-primary","m-1",3,"click"],["type","button",1,"btn","btn-warning","m-1",3,"click"],["type","button","data-bs-dismiss","modal",1,"btn","btn-danger",3,"click"]],template:function(e,t){e&1&&(c(0,"div",0)(1,"div",1)(2,"h2"),p(3),m()(),c(4,"form",2)(5,"div",3)(6,"div",4)(7,"div",5)(8,"input",6),B("blur",function(){return t.createQuote()}),m()()(),c(9,"div",4),z(10,gd,3,1,"div",7),m()(),z(11,xd,14,3,"div",8),m()(),c(12,"div",3)(13,"div",9)(14,"mat-card")(15,"table",10),pe(16,11),z(17,wd,2,0,"th",12)(18,Cd,2,1,"td",13),_e(),pe(19,14),z(20,Dd,2,0,"th",12)(21,Sd,2,1,"td",13),_e(),pe(22,15),z(23,kd,2,0,"th",12)(24,Ed,3,3,"td",13),_e(),pe(25,16),z(26,Rd,2,0,"th",12)(27,Md,2,1,"td",13),_e(),pe(28,17),z(29,Id,2,0,"th",12)(30,Od,2,1,"td",13),_e(),pe(31,18),z(32,Td,2,0,"th",12)(33,Ad,2,1,"td",13),_e(),pe(34,19),z(35,Fd,2,0,"th",12)(36,Pd,3,6,"td",13),_e(),p(37," PrecioRes "),pe(38,20),z(39,Ld,2,0,"th",12)(40,Nd,3,6,"td",13),_e(),pe(41,21),z(42,zd,2,0,"th",12)(43,Bd,3,6,"td",13),_e(),pe(44,22),z(45,Vd,2,0,"th",12)(46,jd,3,6,"td",13),_e(),pe(47,23),z(48,Hd,2,0,"th",12)(49,Ud,3,4,"td",13),_e(),pe(50,24),z(51,Wd,2,0,"th",12)(52,Yd,8,1,"td",13),_e(),z(53,qd,1,0,"tr",25)(54,Gd,1,2,"tr",26),m(),U(55,"mat-paginator",27),m()()(),c(56,"div",28)(57,"h3"),p(58),fe(59,"currency"),m()(),z(60,$d,4,1,"div",29),c(61,"div",30)(62,"div",31)(63,"div",32)(64,"div",33)(65,"h1",34),p(66,"Datos Requeridos"),m(),U(67,"button",35),m(),c(68,"div",36)(69,"form",2)(70,"div",37)(71,"label",38),p(72,"Cantidad:"),m(),U(73,"input",39),m(),c(74,"div",37)(75,"label",38),p(76,"Largo Cm :"),m(),U(77,"input",40),m(),c(78,"div",37)(79,"label",38),p(80,"Ancho Cm:"),m(),U(81,"input",41),m(),c(82,"div",37)(83,"label",38),p(84,"Alto Cm:"),m(),U(85,"input",42),m(),c(86,"div",37)(87,"label",38),p(88,"Peso Unitario kg:"),m(),U(89,"input",43),m()()(),c(90,"div",44)(91,"button",45),p(92,"Close"),m(),z(93,Kd,2,0,"button",46)(94,Zd,2,0,"button",47),m()()()(),c(95,"div",48)(96,"div",31)(97,"div",32)(98,"div",33)(99,"h1",34),p(100,"Costos Calculados"),m(),U(101,"button",35),m(),c(102,"div",36)(103,"form")(104,"div",49)(105,"label",38),p(106),m()(),c(107,"div",49)(108,"label",38),p(109),m()(),c(110,"div",49)(111,"label",38),p(112),fe(113,"currency"),m()(),c(114,"div",49)(115,"label",38),p(116),m()(),c(117,"div",49)(118,"label",38),p(119),fe(120,"currency"),m()(),c(121,"div",49)(122,"label",38),p(123),fe(124,"currency"),m()(),c(125,"div",49)(126,"label",38),p(127),fe(128,"currency"),m()(),c(129,"div",49)(130,"label",38),p(131),fe(132,"currency"),m()()()(),c(133,"div",44)(134,"button",45),p(135,"Close"),m(),c(136,"button",50),B("click",function(){return t.createQuoteDet()}),p(137,"Cotizar"),m()()()()()),e&2&&(h(3),j("COTIZACION NUMERO: ",t.id_quote," "),h(),D("formGroup",t.formBrands),h(6),D("ngIf",t.statusForms),h(),D("ngIf",t.statusForms),h(4),D("dataSource",t.dataSource),h(38),D("matHeaderRowDef",t.displayedColumns),h(),D("matRowDefColumns",t.displayedColumns),h(),D("pageSizeOptions",Ro(51,pd)),h(3),j("Total COP: ",ze(59,21,t.total,"COP","symbol-narrow","1.0-0")),h(2),D("ngIf",t.statusForms),h(9),D("formGroup",t.formQuoteDet),h(24),D("ngIf",t.cotizarButton),h(),D("ngIf",!t.cotizarButton),h(12),j("Peso Total: ",t.viewDta.peso_real," kg"),h(3),j("Zona: ",t.viewDta.zona),h(3),j("Flete: USD ",ze(113,26,t.viewDta.flete,"USD","symbol-narrow","1.0-0")),h(4),j("Moneda: ",t.viewDta.moneda),h(3),j("AjusteUSD: ",ze(120,31,t.viewDta.ajuste200USD,"USD","symbol-narrow","1.0-0")),h(4),j("CostoLandedUSD: ",ze(124,36,t.viewDta.costoLandedUSD,"USD","symbol-narrow","1.0-0")),h(4),j("Costo_unitario: USD ",ze(128,41,t.viewDta.costo_unitario,"USD","symbol-narrow","1.0-0")),h(4),j("Costo_total: USD ",ze(132,46,t.viewDta.costo_total,"USD","symbol-narrow","1.0-0")))},dependencies:[Vo,Fo,Po,Jo,Yo,$o,Ko,Ho,qo,Xo,Wo,Qo,bi,Go,Zo,gi,wr,ur,fr,br,pr,hr,vr,_r,gr,yr,xr,Ya,Qa,ri,es,Ja,is,ts,No,zo,Bo],styles:["table[_ngcontent-%COMP%]{width:100%;text-align:center}.header[_ngcontent-%COMP%]{text-align:center;font-weight:700}.container[_ngcontent-%COMP%]{width:100%}table[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{border:1px solid #000}"]})};export{ns as QuotesComponent};
