(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{"+0pD":function(t,e){var i="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();function s(t){return"[object Arguments]"==Object.prototype.toString.call(t)}function n(t){return t&&"object"==typeof t&&"number"==typeof t.length&&Object.prototype.hasOwnProperty.call(t,"callee")&&!Object.prototype.propertyIsEnumerable.call(t,"callee")||!1}(e=t.exports=i?s:n).supported=s,e.unsupported=n},"06eB":function(t,e,i){var s=Array.prototype.slice,n=i("kgfz"),o=i("+0pD"),r=t.exports=function(t,e,i){return i||(i={}),t===e||(t instanceof Date&&e instanceof Date?t.getTime()===e.getTime():!t||!e||"object"!=typeof t&&"object"!=typeof e?i.strict?t===e:t==e:function(t,e,i){var c,d;if(a(t)||a(e))return!1;if(t.prototype!==e.prototype)return!1;if(o(t))return!!o(e)&&(t=s.call(t),e=s.call(e),r(t,e,i));if(h(t)){if(!h(e))return!1;if(t.length!==e.length)return!1;for(c=0;c<t.length;c++)if(t[c]!==e[c])return!1;return!0}try{var l=n(t),u=n(e)}catch(t){return!1}if(l.length!=u.length)return!1;for(l.sort(),u.sort(),c=l.length-1;c>=0;c--)if(l[c]!=u[c])return!1;for(c=l.length-1;c>=0;c--)if(d=l[c],!r(t[d],e[d],i))return!1;return typeof t==typeof e}(t,e,i))};function a(t){return null==t}function h(t){return!(!t||"object"!=typeof t||"number"!=typeof t.length)&&("function"==typeof t.copy&&"function"==typeof t.slice&&!(t.length>0&&"number"!=typeof t[0]))}},"64vW":function(t,e,i){"use strict";var s=i("ERkP");const n=s.createContext({heightsReady:!0});e.a=n},A9rn:function(t,e,i){"use strict";const s={...i("IRWI").a,pinToTopWhenAtTop:!0};e.a=s},BqYg:function(t,e){function i(t,e,i){var s,n,o,r,a;function h(){var c=Date.now()-r;c<e&&c>=0?s=setTimeout(h,e-c):(s=null,i||(a=t.apply(o,n),o=n=null))}null==e&&(e=100);var c=function(){o=this,n=arguments,r=Date.now();var c=i&&!s;return s||(s=setTimeout(h,e)),c&&(a=t.apply(o,n),o=n=null),a};return c.clear=function(){s&&(clearTimeout(s),s=null)},c.flush=function(){s&&(a=t.apply(o,n),o=n=null,clearTimeout(s),s=null)},c}i.debounce=i,t.exports=i},FwSR:function(t,e,i){"use strict";i.r(e),i.d(e,"default",(function(){return rt}));var s=i("KEM+"),n=i.n(s),o=(i("kYxP"),i("ERkP"));class r{constructor(t,e,i,s,n){this.id=t,this._renderer=i,this.canBeAnchor=s,this.data=e,this.sortIndex=n}render(t){const{_renderer:e,data:i}=this;return e(i,t)}}const a=(t,e,i,s,n="-1")=>new r(t,e,i,s,n),h=Object.freeze({FocusedItem:"focusedItem",Anchor:"anchor"});var c=t=>({anchor:t,type:h.Anchor}),d=t=>({itemId:t,type:h.FocusedItem}),l=i("A9rn"),u=i("Resy");class p{constructor({viewportRect:t,listRect:e,listLength:i,renderedItems:s}){this._viewportRect=t,this._listRect=e,this._listLength=i,this._renderedItems=s}getForList(){return this._listRect}getForViewport(){return this._viewportRect}getListLength(){return this._listLength}getRenderedItems(){return this._renderedItems}}var m=i("oi7R"),_=i("Lqdf"),g=i("aWzz"),f=i("oQhu"),I=i("fs1G"),v=i("zrc3"),b=i("7nmT"),T=i.n(b);const w=t=>{var e;return null==(e=t.find((t=>t.focusable)))?void 0:e.id};var R=i("dPJJ"),y=i("E6XO"),A=i("64vW"),E=i("z0MJ"),S=i.n(E),H=i("pQ3Z"),F=i.n(H),O=i("iBK2"),P=i("aITJ"),x=i("Irs7"),C=i("v6aA"),j=i("38/B"),U=i("06eB"),M=i.n(U),V=i("GVND");const L=()=>window.performance?window.performance.now():Date.now(),D="transform 0.15s linear";class B extends o.Component{constructor(t,e){super(t,e),n()(this,"_contentsFocusable",!1),n()(this,"_perfReported",!1),n()(this,"_shouldAnimateTranslate",!1),n()(this,"_observeElement",(t=>{const e=this._resizeObserver;e&&(e.disconnect(),e.observe(t))})),n()(this,"_handleResize",(t=>{const{onHeightChanged:e,item:i}=this.props,[s]=t,n=(s&&Math.floor(s.contentRect.height))!==(this._currentHeight&&Math.floor(this._currentHeight));s&&n&&(this._currentHeight=s.contentRect.height,e(i.id,s.contentRect.height)),this._recordTTFV()})),n()(this,"_setRef",(t=>{const{item:e,setAPI:i}=this.props;t?(this._element=t,i(e.id,this),this._observeElement(t)):(i(e.id,void 0),this._element=void 0)})),n()(this,"_setIsItemFocusable",(t=>{this._contentsFocusable=t})),n()(this,"_handleAnimationStarted",((t=D)=>{this._resizeObserver&&this._resizeObserver.disconnect(),this.props.onAnimationStarted(this.props.item.id,t),this._animationTTLTimeoutId&&clearTimeout(this._animationTTLTimeoutId),this._animationTTLTimeoutId=setTimeout(this._handleAnimationEnded,1e3)})),n()(this,"_handleAnimationEnded",(()=>{this._animationTTLTimeoutId&&(clearTimeout(this._animationTTLTimeoutId),this._animationTTLTimeoutId=null),this._element&&this._observeElement(this._element),this.props.onAnimationEnded(this.props.item.id)})),n()(this,"_handleHeightChanged",(t=>{this._currentHeight=t,this.props.onHeightChanged(this.props.item.id,t)}));const i=P.b.isSafari()?window.PolyfillResizeObserver:window.ResizeObserver;this._resizeObserver=new i(this._handleResize),this._animationContext={onAnimationEnded:this._handleAnimationEnded,onAnimationStarted:this._handleAnimationStarted,onHeightChanged:this._handleHeightChanged},this._perfStart=L(),this._shouldUseTopPositioning=P.b.isMobileOS()&&P.b.isSafari()}shouldComponentUpdate(t){const{item:e,offset:i,visible:s,shouldAnimate:n}=this.props;return this._shouldAnimateTranslate=t.offset!==i&&t.visible===s,!M()(t.item,e)||t.offset!==i||t.visible!==s||t.shouldAnimate!==n}componentWillUnmount(){this._animationTTLTimeoutId&&(clearTimeout(this._animationTTLTimeoutId),this.props.onAnimationEnded(this.props.item.id)),this._resizeObserver&&this._resizeObserver.disconnect(),this._resizeObserver=void 0}componentDidUpdate(t){const{item:e,setAPI:i}=this.props;t.item.id!==e.id&&(i(t.item.id,void 0),i(e.id,this)),this._recordTTFV()}getElement(){return this._element}isFocusable(){return this._contentsFocusable}measureHeight(){return this._currentHeight||(this._currentHeight=this._element?this._element.getBoundingClientRect().height:0),this._currentHeight}render(){const{item:t,offset:e,visible:i,shouldAnimate:s,translationTransitionStyle:n}=this.props,r=this._shouldAnimateTranslate&&!j.a.reducedMotionEnabled?n:"opacity 0.3s ease-out";return o.createElement(V.a.Provider,{value:this._animationContext},o.createElement("div",{ref:this._setRef,style:{position:"absolute",opacity:i?void 0:.01,width:"100%",top:this._shouldUseTopPositioning?`${e}px`:void 0,transform:this._shouldUseTopPositioning?void 0:`translateY(${e}px)`,transition:s&&!this._isAnimationDisabled?r:void 0}},t.render(this._setIsItemFocusable)))}_recordTTFV(){const{item:t,onVisible:e,visible:i}=this.props;void 0!==this._currentHeight&&!this._perfReported&&i&&(e(t.id,L()-this._perfStart),this._perfReported=!0)}}n()(B,"contextType",C.a),n()(B,"defaultProps",{translationTransitionStyle:D});var z=i("VY6S"),k=i("Qyxo"),N=i("xN10"),W=i("+d3d"),q=i("mN6z"),K=i("qdp+"),J=i("/NU0"),Y=i("6vUc"),$=i("jat/"),G=i("tn7R"),Q=i("Myq3"),X=i("I7xG"),Z=i("jHwr");const tt={},et=({cssPixels:t,dpr:e})=>Math.ceil(t*e)/e;class it extends o.Component{constructor(t,e){super(t,e),n()(this,"_areAnchorsInvalidated",!1),n()(this,"_cells",new Map),n()(this,"_cellAnimations",new Set),n()(this,"_cellAnimationStyle",D),n()(this,"_isFullScreened",!1),n()(this,"_isIdle",!0),n()(this,"_pendingHeightUpdates",new Map),n()(this,"_renderedItemsStatus",new Set),n()(this,"_rootRef",o.createRef()),n()(this,"_slice",{start:0,end:0}),n()(this,"_visibilityMeasurements",new Map),n()(this,"_handleScroll",(()=>{this._isInitialAnchoring||this._viewport.scrollY()<0||(this._isIdle=!1,this._updateScrollEnd(),this._scheduleCriticalUpdateThrottled())})),n()(this,"_updateScrollEnd",Object(z.a)((()=>{this._isIdle=!0,this.props.onScrollEnd(),this._scheduleCriticalUpdate()}),100)),n()(this,"_handleEnterFullscreen",(()=>{this._isFullScreened=!0})),n()(this,"_handleExitFullscreen",(()=>{this._isFullScreened=!1,this._scheduleCriticalUpdate()})),n()(this,"_getPositioningContext",Object(f.a)((t=>({heightsReady:t})))),n()(this,"_getFinalRenderedItems",Object(X.a)(this,((t,e,i)=>i._getItemMap()),((t,e)=>e.renderedItems),((t,e)=>Object(k.a)(e,(({itemId:e,...i})=>{const s=t.get(e);return s&&{...i,item:s}}))))),n()(this,"_getItemMap",Object(X.a)(this,(t=>t.list),(t=>{const e=new Map;return t.forEach((t=>{e.set(t.id,t)})),e}))),n()(this,"_getViewportOffsetCorrection",(()=>{const t=this._rootRef.current&&this._rootRef.current.getBoundingClientRect();if(!t||!this._viewport)return 0;const e=this._viewport instanceof m.a?0:this._viewport.getRect()._top;return et({cssPixels:t.top-e,dpr:this._devicePixelRatio})})),n()(this,"_getItemPositionsMap",(t=>{const{list:e}=this.props,i=this._getDistanceFromTop(t.itemId);let s=t.offset-i;const n={};return e.forEach((t=>{const e=this._getHeight(t);n[t.id]={item:t,rectangle:new u.a(s,e)},s+=e})),n})),n()(this,"_getIsHeightsReady",(t=>Object(N.a)(t,(({itemId:t})=>this._heights.has(t))))),n()(this,"_updatePositioning",(({renderedItems:t,relativeViewportRect:e,firstItem:i,height:s})=>{const{list:n,onPositionUpdate:o}=this.props;this._getIsHeightsReady(t)&&o(new p({viewportRect:e,listRect:new u.a(i?i.rectangle.getTop():0,s),listLength:n.length,renderedItems:t.map((t=>({id:t.itemId,rectangle:new u.a(t.offset,this._getHeightForItemId(t.itemId))})))}))})),n()(this,"_getAnchorItemCandidates",(()=>{const{analytics:t}=this.props,e=this._getFinalRenderedItems().filter((({item:t})=>t.canBeAnchor&&(this._isInitialAnchoring||!!this._heights.get(t.id))));if(this._areAnchorsInvalidated){const e=this._getFinalRenderedItems().filter((({item:t})=>{var e;const i=null==(e=this._previousItemMap.get(t.id))?void 0:e.sortIndex;return i===O.a||t.sortIndex===O.a||i===t.sortIndex}));if(e.length!==this._getFinalRenderedItems().length){if(t.scribe({element:"scroller",action:"hoisted_anchor_invalidation"}),this.context.featureSwitches.isTrue("responsive_web_hoisting_anchor_invalidation_enabled"))return e}else t.scribe({element:"scroller",action:"no_hoisted_anchor_invalidation"})}return e})),n()(this,"_handleAnimationStarted",((t,e)=>{this._cellAnimations.add(t),e&&(this._cellAnimationStyle=e)})),n()(this,"_handleAnimationEnded",(t=>{this._cellAnimations.delete(t),this._cellAnimationStyle=D})),n()(this,"_handleItemVisible",((t,e)=>{this._visibilityMeasurements.has(t)||this._visibilityMeasurements.set(t,e)})),n()(this,"_reportVisibilityMeasurements",(()=>{if(!this._visibilityMeasurements.size)return;let t=0;this._visibilityMeasurements.forEach((e=>t+=e));const e=Math.round(t/this._visibilityMeasurements.size),i=P.b.isDesktopOS()?"scroller_v3":"scroller_v3_mobile";y.c(`scroller:ttfv:${i}`,{duration_ms:e}),this._visibilityMeasurements.clear()})),n()(this,"_updateItemHeight",((t,e)=>{this._pendingHeightUpdates.set(t,e);(Object(N.a)(this.state.renderedItems,(({itemId:t})=>this._heights.has(t)||this._pendingHeightUpdates.has(t)))||this._pendingHeightUpdates.size>50)&&(this._update(),this._pendingHeightUpdates.clear())})),n()(this,"_handleHeightChanged",((t,e,i=!1)=>{this._heights.get(t)!==e&&(this._cellAnimations.has(t)?this._scheduleCriticalUpdate():this._updateItemHeight(t,e))})),n()(this,"_setItemRef",((t,e)=>{e?(this._cells.set(t,e),this._renderedItemsStatus.add(t)):(this._cells.delete(t),this._renderedItemsStatus.delete(t))})),this._viewport=t.viewport,this._devicePixelRatio=window.devicePixelRatio||1,this.state={renderedItems:[],listHeight:0,shouldAnimate:!1};const{cacheKey:i}=this.props;i&&tt.hasOwnProperty(i)?this._heights=tt[i]:(this._heights=new Map,tt[i]=this._heights),this._scheduleCriticalUpdate=Object(Z.a)((()=>this._update()),window.requestAnimationFrame),this._scheduleUpdate=window.requestIdleCallback?Object(Z.a)((()=>{this._update()}),window.requestIdleCallback):this._scheduleCriticalUpdate,this._scheduleCriticalUpdateThrottled=Object(W.a)((()=>{this._scheduleCriticalUpdate()}),100,{trailing:!0}),this._scheduleUpdateDebounced=Object(z.a)(this._scheduleUpdate,250),this._removeViewportResizeHandler=this._viewport.addRectChangeListener(this._scheduleCriticalUpdateThrottled),window.scroller=this}render(){const{listHeight:t,shouldAnimate:e,renderedItems:i}=this.state,s=this._getIsHeightsReady(i);return o.createElement(A.a.Provider,{value:this._getPositioningContext(s)},o.createElement("div",{ref:this._rootRef,style:{position:"relative",minHeight:t}},this._getFinalRenderedItems().map((({item:t,offset:i,visible:s})=>o.createElement(B,{item:t,key:t.id,offset:i,onAnimationEnded:this._handleAnimationEnded,onAnimationStarted:this._handleAnimationStarted,onHeightChanged:this._handleHeightChanged,onVisible:this._handleItemVisible,setAPI:this._setItemRef,shouldAnimate:e,translationTransitionStyle:this._cellAnimationStyle,visible:s})))))}shouldComponentUpdate(t,e){return!F()(this.props,t)||!Object(q.a)(this.state,e)}componentDidUpdate(t){t.list!==this.props.list&&(this._isInitialAnchoring||(this._previousItemMap=new Map,t.list.forEach((t=>{this._previousItemMap.set(t.id,t)})),this._areAnchorsInvalidated=!0),this._scheduleCriticalUpdate()),t.cacheKey!==this.props.cacheKey&&(this._hasUserChangedFocus=!1)}componentDidMount(){this._removeScrollHandler=this._viewport.addScrollListener(this._handleScroll),this._removeFullscreenEnterHandler=R.a(this._handleEnterFullscreen),this._removeFullscreenExitHandler=R.b(this._handleExitFullscreen);const t=this._getInitialRenderedItems();if(this.props.isManualScrollRestoration&&this._viewport.scrollBy(-1),t.length>0){const e=this._getDocumentViewportHeight();this.setState({renderedItems:t,shouldAnimate:!0,listHeight:e},(()=>{this._isInitialAnchoring=!0;const{initialAnchor:t}=this.props;t&&t.type===h.Anchor?(this._viewport.scrollBy(this._getViewportOffsetCorrection()),t.anchor.wasFocused&&this._updateFocusToItem(t.anchor.id)):t&&t.type===h.FocusedItem&&this._updateFocusToItem(t.itemId),window.requestAnimationFrame((()=>window.requestAnimationFrame((()=>this._scheduleCriticalUpdate()))))}))}else this._scheduleCriticalUpdate()}componentWillUnmount(){this._removeScrollHandler&&this._removeScrollHandler(),this._removeFullscreenEnterHandler&&this._removeFullscreenEnterHandler(),this._removeFullscreenExitHandler&&this._removeFullscreenExitHandler(),this._removeViewportResizeHandler&&this._removeViewportResizeHandler(),this._reportVisibilityMeasurements()}_getDocumentViewportHeight(){var t;return(null==(t=document.documentElement)?void 0:t.clientHeight)||0}_getInitialRenderedItems(){const{initialAnchor:t,list:e}=this.props,i=[];if(!t)return i;if(t.type===h.FocusedItem){const s=Object(K.a)(e,(e=>e.id===t.itemId?{itemId:e.id,offset:0,visible:!0}:void 0));s&&i.push(s)}else if(t.type===h.Anchor&&Object(J.a)(t.anchor.distanceToViewportTop)){const{anchor:s}=t,n=this._getDocumentViewportHeight();let o=s.distanceToViewportTop||0,r=e.findIndex((t=>t.id===s.id));for(;r>-1&&r<e.length&&o<n;){const t=e[r],s=this._heights.get(t.id);if(!Object(J.a)(s))break;i.push({itemId:t.id,offset:o,visible:!0}),o+=s,r+=1}}return i}getAnchors(){const t=this._rootRef.current&&this._rootRef.current.getBoundingClientRect(),e=this._measureRelativeViewportRect();return t&&e?this._getItemsWithin(e).filter((t=>t.item.canBeAnchor)).map((t=>({id:t.item.id,distanceToViewportTop:et({cssPixels:t.offset+this._getViewportOffsetCorrection(),dpr:this._devicePixelRatio}),wasFocused:this._hasUserChangedFocus&&t.item.id===this._activeEntryId}))):[]}_update(){const t=this._measureRelativeViewportRect();if(!t)return;if(this._isFullScreened)return;const e=this._getAnchor(t);this._measureHeights(),e&&(this._updateRenderedItems(e,t),this._areAnchorsInvalidated=!1)}_getSliceForCandidates(t,e,i){const s=Object(Y.a)(t),n=Object($.a)(t);return{start:s?e.indexOf(i[s.itemId]):0,end:n?e.indexOf(i[n.itemId])+1:0}}_getRenderCandidates(t,e){const{minimumOffscreenToViewportRatio:i,preferredOffscreenToViewportRatio:s}=this.props,n=ot(e,i),o=ot(e,s),r=this._isIdle&&!this._isInitialAnchoring,a=this._getItemPositionsMap(t),h=Object(G.a)(a),c=h.filter((({item:t,rectangle:e})=>e.doesIntersectWith(r?o:n))).map((({item:t,rectangle:e})=>({itemId:t.id,offset:e.getTop(),visible:this._heights.has(t.id)}))),d=this._getSliceForCandidates(c,h,a),l=r?d:((t,e)=>{if(e.start>=t.start&&e.end<=t.end)return t;if(e.start>=t.end||e.end<=t.start)return e;{const i=Math.max(t.start-e.start,e.end-t.end);return{start:Math.min(t.start+i,e.start),end:Math.max(t.end-i,e.end)}}})(this._slice,d),u=h.slice(l.start,l.end).map((({item:t,rectangle:e})=>({itemId:t.id,offset:e.getTop(),visible:this._heights.has(t.id)})));return{itemPositions:h,newRenderedItems:u,slice:l,arePreferredItemsRendered:r}}_updateRenderedItems(t,e){const{newRenderedItems:i,itemPositions:s,arePreferredItemsRendered:n,slice:o}=this._getRenderCandidates(t,e),r=0!==this._cellAnimations.size,a=0!==this._getListOffset(t),h=Object(Y.a)(s),c=Object($.a)(s),d=h&&c?c.rectangle.getBottom()-h.rectangle.getTop():0,l=d+this._calculateHeadroom(s,e),u=this._getIsHeightsReady(i),p=!(P.b.isSafari()||P.b.isIOS()),m=!r&&u&&(this._isIdle||p||l<=e.getHeight())||u&&this._isInitialAnchoring;let _=i;if(this._slice=o,u&&(this._isInitialAnchoring=!1),a&&m){const{offset:s,renderedItems:n}=this._normalization(t,i);_=n,this.setState({renderedItems:n,listHeight:l,shouldAnimate:!a},(()=>{let t=e;0!==s&&(this._viewport.scrollBy(-s),t=this._measureRelativeViewportRect()),t&&this._updatePositioning({renderedItems:_,relativeViewportRect:t,firstItem:h,height:d})}))}else this.setState({renderedItems:i,listHeight:l,shouldAnimate:!0},(()=>{!a&&n||this._scheduleUpdateDebounced(),this._updatePositioning({renderedItems:_,relativeViewportRect:e,firstItem:h,height:d})}))}_normalization(t,e){const i=this._getListOffset(t);return 0!==i?{offset:i,renderedItems:e.map((({offset:t,...e})=>({...e,offset:t-i})))}:{offset:0,renderedItems:e}}_calculateHeadroom(t,e){const i=Object(Q.a)(t,(({item:t})=>t.canBeAnchor)),s=Object($.a)(t);if(!s)return 0;const n=s.rectangle.getBottom()-(i?i.rectangle.getTop():s.rectangle.getTop());return Math.max(0,e.getHeight()-n)}_getListOffset(t){if(!t)return 0;const e=this._getDistanceFromTop(t.itemId);return t.offset-e}_getAnchor(t){if(!this._isInitialAnchoring&&this.props.pinToTopWhenAtTop&&t.getTop()<=0){const t=Object(Y.a)(this.props.list);return t?{itemId:t.id,offset:0}:void 0}const e=e=>{const i=(s=e,n=t,Math.max(0,Math.min(s.getBottom(),n.getBottom())-Math.max(s.getTop(),n.getTop())));var s,n;return(e.getHeight()>0?i/e.getHeight():0)>.01?1:0},i=e=>e.getBottom()-t.getTop(),s=this._getAnchorItemCandidates(),n=nt(s,((t,s)=>{const n=new u.a(t.offset,this._getHeight(t.item)),o=new u.a(s.offset,this._getHeight(s.item));return e(n)-e(o)||i(o)-i(n)}));if(n)return{itemId:n.item.id,offset:n.offset};const o=Object(Y.a)(s);if(o)return{itemId:o.item.id,offset:o.offset};{const t=Object(Y.a)(this.props.list);return t?{itemId:t.id,offset:0}:void 0}}_measureRelativeViewportRect(){const t=this._rootRef.current;if(t)return this._viewport.getRect().translateBy(-t.getBoundingClientRect().top)}_getHeight(t){return this._getHeightForItemId(t.id)}_getHeightForItemId(t){const{assumedItemHeight:e}=this.props,i=this._heights.get(t),s=Object(J.a)(i)?i:e;return et({cssPixels:s,dpr:this._devicePixelRatio})}_getDistanceFromTop(t){const{list:e}=this.props,i=e.findIndex((e=>e.id===t));return i>=0?e.slice(0,i).reduce(((t,e)=>this._getHeight(e)+t),0):0}_getItemsWithin(t){return this._getFinalRenderedItems().filter((({item:e,offset:i})=>new u.a(i,this._getHeight(e)).doesIntersectWith(t)))}_measureHeights(){this._cells.forEach(((t,e)=>{this._heights.set(e,t.measureHeight())}))}_getRenderedItemsWithFocusability(){return this._getFinalRenderedItems().map((({item:t,visible:e})=>{const i=this._cells.get(t.id);return{id:t.id,focusable:!(!i||!i.isFocusable()),visible:e}}))}_findTopmostVisibleId(){const t=this._measureRelativeViewportRect(),e=t&&this._getFinalRenderedItems().find((({item:e,offset:i})=>new u.a(i,this._getHeight(e)).doesIntersectWith(t)));return e&&e.item.id}adjustFocusBy(t){this._hasUserChangedFocus=!0;const e=this._getRenderedItemsWithFocusability();let i=this._activeEntryId&&((t,e,i)=>{const s=t?Object(v.a)(i,(e=>e.id===t)):-1;if(s>=0)for(let t=s>=0?s+e:0;t>=0&&t<i.length;t+=e)if(i[t].focusable)return i[t].id;return s>=0?t:void 0})(this._activeEntryId,t,e);if(!i){const t=this._findTopmostVisibleId();i=t?((t,e)=>{const i=Object(v.a)(e,(e=>e.id===t));let s;if(i>=0){const t=e.find(((t,e)=>e>=i&&t.focusable));s=t?t.id:void 0}return s||w(e)})(t,e):w(e)}i&&this._updateFocusToItem(i)}_updateFocusToItem(t,e){if(t!==this._activeEntryId){const i=this._getRenderedItemsWithFocusability().find((e=>e.visible&&e.id===t)),s=this._cells.get(t),n=s&&s.getElement();i&&(this._activeEntryId=t,n&&((t,e,i)=>{const s=T.a.findDOMNode(t),n=s&&s instanceof window.HTMLElement&&s.querySelector("a, [tabindex='0']");if(n){n.scrollIntoView(i),n.focus();const t=(e||m.a.root()).getRect().getTop();t>0&&window.scrollBy(0,-1*t)}})(n,this.context.viewport,e))}}scrollToTop(t){this._hasUserChangedFocus=!0,this._viewport.scrollToTop(),t&&(this._update(),S()((()=>{const t=this._getRenderedItemsWithFocusability(),e=w(t);e&&this._updateFocusToItem(e,{block:"nearest"})})))}isAtTop(){const t=this._measureRelativeViewportRect();return!t||t.getTop()<50}}n()(it,"contextType",C.a),n()(it,"defaultProps",{nearEndProximityRatio:1.75,nearStartProximityRatio:.25,assumedItemHeight:400,minimumOffscreenToViewportRatio:.5,preferredOffscreenToViewportRatio:2.5});var st=Object(x.a)(it);const nt=(t,e)=>{if(t.length)return t.reduce(((t,i)=>e(i,t)>0?i:t))},ot=(t,e)=>{const i=e*t.getHeight();return new u.a(t.getTop()-i,t.getHeight()+2*i)};class rt extends o.PureComponent{constructor(t,e){super(t,e),n()(this,"_renderer",o.createRef()),n()(this,"_getList",Object(f.a)(((t,e,i,s,n,o)=>{const r=[];return t&&r.push(a("$header","header",(()=>t),!1)),r.push(...i.map((t=>a(n(t),t,s,!0,o&&o(t))))),e&&r.push(a("$footer","footer",(()=>e),!1)),r}))),n()(this,"_handleScrollEnd",(()=>{this.props.onScrollEnd&&this.props.onScrollEnd()})),n()(this,"_handlePositionUpdate",(t=>{const{onItemsRendered:e}=this.props;this._edgeProximity.handlePositioningUpdate(t),e&&e({positions:t.getRenderedItems(),viewport:t.getForViewport()}),this._preservePosition(this._customLocation)}));const{nearStartProximityRatio:i,nearEndProximityRatio:s}=t;this._edgeProximity=new _.b([{condition:_.a.nearTop(5),callback:t=>this.props.onAtStart(t)},{condition:_.a.nearTopRatio(i),callback:t=>this.props.onNearStart(t)},{condition:_.a.nearBottomRatio(s),callback:t=>this.props.onNearEnd(t)},{condition:_.a.nearBottom(5),callback:t=>this.props.onAtEnd(t)}]),this._viewport=t.viewport||this.context&&this.context.viewport||m.a.root(),this._loadStoredPosition(t,this.context)}render(){const{anchoring:t,assumedItemHeight:e,cacheKey:i,footer:s,header:n,identityFunction:r,initialAnchor:a,items:h,noItemsRenderer:l,renderer:u,sortIndexFunction:p}=this.props,m=this._scrollRestorationAnchor[i],_=m?c(m):a?d(a.id):void 0;return h.length?o.createElement(st,{assumedItemHeight:e,cacheKey:i,initialAnchor:_,isManualScrollRestoration:window.history&&"manual"===window.history.scrollRestoration,key:i,list:this._getList(n,s,h,u,r,p),onPositionUpdate:this._handlePositionUpdate,onScrollEnd:this._handleScrollEnd,pinToTopWhenAtTop:t.pinToTopWhenAtTop,ref:this._renderer,viewport:this._viewport}):l()}componentDidMount(){const{onPositionRestored:t}=this.props;t()}componentDidUpdate(t){const{cacheKey:e,onPositionRestored:i}=this.props;e!==t.cacheKey&&i()}UNSAFE_componentWillReceiveProps(t){const{cacheKey:e}=this.props;e!==t.cacheKey&&(this._preservePosition(this._customLocation),this._loadStoredPosition(t,this.context))}componentWillUnmount(){this._preservePosition(this._customLocation)}_preservePosition(t){if(t&&this._renderer.current){const e=this._renderer.current.getAnchors();t.savePosition(e)}}_loadStoredPosition(t,e){const{getCustomLocation:i}=e;this._customLocation=i&&i();let s=[];if(this._customLocation){const t=this._customLocation.getSavedPosition();s=t&&t.length?t:[],s.length>0&&this._customLocation&&this._customLocation.claimScrollRestoration()}const n=s.find((({id:e,wasFocused:i})=>i&&t.items.some((i=>t.identityFunction(i)===e))))||s.find((({id:e,distanceToViewportTop:i})=>t.items.some((i=>t.identityFunction(i)===e))));this._scrollRestorationAnchor={[t.cacheKey]:n}}adjustFocusBy(t){this._renderer.current&&this._renderer.current.adjustFocusBy(t)}scrollToTop(t){this._renderer.current&&this._renderer.current.scrollToTop(t)}isAtTop(){return!this._renderer.current||this._renderer.current.isAtTop()}}n()(rt,"contextTypes",{viewport:g.object,getCustomLocation:g.func}),n()(rt,"defaultProps",{anchoring:l.a,onPositionRestored:I.a,onAtEnd:I.a,onAtStart:I.a,onNearEnd:I.a,onNearStart:I.a,onScrollEnd:I.a,nearEndProximityRatio:1.75,nearStartProximityRatio:.25,noItemsRenderer:()=>null,assumedItemHeight:400,minimumOffscreenToViewportRatio:.5,preferredOffscreenToViewportRatio:2.5})},GVND:function(t,e,i){"use strict";var s=i("ERkP");const n=s.createContext({onAnimationStarted:()=>{},onAnimationEnded:()=>{},onHeightChanged:()=>{}});e.a=n},Lqdf:function(t,e,i){"use strict";i.d(e,"a",(function(){return n})),i.d(e,"b",(function(){return a}));i("Resy");var s=Object.freeze({MOVEMENT:"movement",LIST_UPDATE:"list_update",INITIAL_POSITION:"initial_position"});const n={nearTop:t=>(e,i)=>i.getTop()-e.getTop()<=t,nearBottom:t=>(e,i)=>e.getBottom()-i.getBottom()<=t,nearTopRatio:t=>(e,i)=>{const s=i.getHeight()*t;return i.getTop()-e.getTop()<=s},nearBottomRatio:t=>(e,i)=>{const s=i.getHeight()*t;return e.getBottom()-i.getBottom()<=s}},o=Object.freeze({INSIDE:"inside",OUTSIDE:"outside"}),r=(t,e,i,n)=>((t,e)=>!t&&e===o.INSIDE)(t,i)?s.INITIAL_POSITION:((t,e)=>t===o.OUTSIDE&&e===o.INSIDE)(t,i)?s.MOVEMENT:((t,e)=>t===o.INSIDE&&e===o.INSIDE)(t,i)&&n!==e?s.LIST_UPDATE:null;class a{constructor(t){this._handlers=t.map((t=>({zone:t,state:{}})))}handlePositioningUpdate(t){this._handlers.forEach((({zone:e,state:i})=>{const{condition:s,callback:n}=e,{proximity:a,listLength:h}=i,c=((t,e)=>t(e.getForList(),e.getForViewport())?o.INSIDE:o.OUTSIDE)(s,t),d=t.getListLength(),l=r(a,h,c,d);i.proximity=c,i.listLength=d,l&&n({triggerCause:l})}))}}},VY6S:function(t,e,i){"use strict";var s=i("BqYg"),n=i.n(s);e.a=(t,e,i)=>n()(t,e,i)},dPJJ:function(t,e,i){"use strict";i.d(e,"a",(function(){return h})),i.d(e,"b",(function(){return c}));i("kYxP");var s=i("6/RC");const n=new Set,o=new Set;let r=!1;function a(){if(s.canUseDOM&&!r){const t=["fullscreenElement","webkitFullscreenElement","webkitCurrentFullScreenElement","mozFullScreenElement","msFullscreenElement"];["webkitfullscreenchange","mozfullscreenchange","fullscreenchange","msfullscreenchange"].forEach((e=>{document.addEventListener(e,(()=>{const e=t.map((t=>document[t])).filter(Boolean)[0];e?n.forEach((t=>t(e))):o.forEach((t=>t()))}))}))}r=!0}const h=t=>(r||a(),n.add(t),()=>n.delete(t)),c=t=>(r||a(),o.add(t),()=>o.delete(t))},jHwr:function(t,e,i){"use strict";e.a=(t,e)=>{let i=null;const s=()=>{i=null,t()};return()=>(i||(i=e(s)),i)}},kgfz:function(t,e){function i(t){var e=[];for(var i in t)e.push(i);return e}(t.exports="function"==typeof Object.keys?Object.keys:i).shim=i}}]);
//# sourceMappingURL=https://ton.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.AbsolutePower.ad5f1f15.js.map