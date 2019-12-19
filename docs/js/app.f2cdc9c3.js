(function(t){function e(e){for(var o,c,s=e[0],a=e[1],l=e[2],f=0,d=[];f<s.length;f++)c=s[f],i[c]&&d.push(i[c][0]),i[c]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(t[o]=a[o]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,s=1;s<n.length;s++){var a=n[s];0!==i[a]&&(o=!1)}o&&(r.splice(e--,1),t=c(c.s=n[0]))}return t}var o={},i={app:0},r=[];function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],a=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=a;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0cee":function(t,e,n){},"0ef7":function(t,e,n){},"126f":function(t,e,n){"use strict";var o=n("82fc"),i=n.n(o);i.a},"189f":function(t,e,n){"use strict";var o=n("3830"),i=n.n(o);i.a},"2a7e":function(t,e,n){"use strict";var o=n("faa0"),i=n.n(o);i.a},3313:function(t,e,n){"use strict";var o=n("0cee"),i=n.n(o);i.a},3830:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"root"},[n("Header"),n("GameArea")],1)},r=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header"},[n("div",{staticClass:"header__container"},[n("div",{staticClass:"header__pauseButton",on:{click:t.togglePause}},[n("font-awesome-icon",{attrs:{icon:t.pauseButton}})],1)])])},s=[],a=n("c93e"),l=n("c074"),u=n("2f62"),f=10,d=3,p=10,b=1,h=30,g=-30,m=20,k=2,v="TOGGLE_PAUSE",B="ADD_RIGHT_SIDE_BLOCK",_="ADD_LEFT_SIDE_BLOCK",w="RESET_STATE",O="FINISH_FALLING",S="START_NEW_GAME",y="INITIALIZE_FALLING_BLOCKS",j="ADD_FALLING_BLOCK",x="MOVE_RIGHT",T="MOVE_LEFT",C={name:"Header",computed:Object(a["a"])({},Object(u["c"])({isPaused:function(t){return t.isPaused}}),{pauseButton:function(){return this.isPaused?l["b"]:l["a"]}}),methods:Object(a["a"])({},Object(u["b"])({togglePause:v}))},P=C,E=(n("892a"),n("2877")),D=Object(E["a"])(P,c,s,!1,null,"683b9d8c",null);D.options.__file="Header.vue";var A=D.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"gameArea"},[n("Dropbox"),n("TeetleTottle")],1)},M=[],$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"dropbox"},t._l(t.fallingBlocks,function(t,e){return n("FallingBlock",{key:t.id,attrs:{block:t,index:e}})}))},I=[],F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Block",{ref:"block",attrs:{block:t.block,top:t.blockDropboxTop,index:t.index,isPaused:t.isPaused}})],1)},G=[],W=(n("c5f6"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"element",class:t.blockClassName,style:t.blockInlineStyle},[t._v("\n    "+t._s(t.block.weight)+"\n")])}),N=[],R={name:"Block",props:{block:{type:Object,required:!0},side:{type:Boolean},top:{type:Number}},methods:{roundUp:function(t){return Math.round(100*t)/100},getBlockBottomCoord:function(){var t=this.$refs.element;return t.getBoundingClientRect().bottom}},computed:{blockClassName:function(){var t=this.block.type;switch(t){case 0:return"block-circle";case 1:return"block-triangle";case 2:return"block-rectangle"}},blockInlineStyle:function(){var t=this.block,e=t.offset,n=t.type,o=t.height,i=this.side,r=this.roundUp,c=this.top,s=c||0,l=i?50+10*e:50-10*e,u=1!==n?{height:"".concat(r(o),"px"),width:"".concat(r(o),"px"),lineHeight:"".concat(r(o),"px")}:{borderWidth:"0 ".concat(r(o),"px ").concat(r(o),"px ").concat(r(o/2),"px"),lineHeight:"".concat(r(1.2*o),"px")};return Object(a["a"])({top:"".concat(s,"px"),left:"".concat(l,"%")},u)}}},H=R,K=(n("9435"),Object(E["a"])(H,W,N,!1,null,"f6ba163e",null));K.options.__file="Block.vue";var q=K.exports,U={name:"FallingBlock",props:{block:{type:Object,required:!0},index:{type:Number}},components:{Block:q},data:function(){return{swingWindowCoords:{top:0,bottom:0},blockWindowBottom:0,blockDropboxTop:this.block.height,timer:0}},computed:{isPaused:function(){return this.$store.state.isPaused},swingBending:function(){return this.$store.getters.swingBending},blockFinalPosition:function(){this.getSwingCoords();var t=this.swingWindowCoords,e=t.top,n=t.bottom;return this.swingBending>=0?e+(n-e)/2*(1-this.block.offset/(f/2)):n-(n-e)/2*(1-this.block.offset/(f/2))}},methods:{getSwingCoords:function(){var t=document.querySelector(".swing").getBoundingClientRect(),e=t.top,n=t.bottom;this.swingWindowCoords.top=e,this.swingWindowCoords.bottom=n},incrementBlockDropboxTop:function(){this.blockDropboxTop+=20}},updated:function(){var t=this;if(this.isPaused)return clearTimeout(this.timer);0===this.index&&(this.swingWindowCoords.top&&this.swingWindowCoords.bottom||this.getSwingCoords(),this.blockWindowBottom=this.$refs.block.getBlockBottomCoord(),this.timer=setTimeout(function(){if(t.blockWindowBottom>=t.blockFinalPosition-20)return clearTimeout(t.timer),void t.$store.dispatch(O);t.incrementBlockDropboxTop()},250))}},z=U,J=(n("3313"),Object(E["a"])(z,F,G,!1,null,"43005a3a",null));J.options.__file="FallingBlock.vue";var V=J.exports,Z={name:"Dropbox",components:{FallingBlock:V},computed:{fallingBlocks:function(){return this.$store.state.fallingBlocks}},methods:Object(a["a"])({},Object(u["b"])({initializeFallingBlocks:y,moveBlockRight:x,moveBlockLeft:T}),{onKeyDown:function(t){39===t.keyCode&&this.moveBlockRight(),37===t.keyCode&&this.moveBlockLeft()}}),beforeMount:function(){this.initializeFallingBlocks(),window.addEventListener("keydown",this.onKeyDown)},beforeDestroy:function(){window.removeEventListener("keydown",this.onKeyDown)}},Q=Z,X=(n("189f"),Object(E["a"])(Q,$,I,!1,null,"14d72ee2",null));X.options.__file="Dropbox.vue";var Y=X.exports,tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"teetleTottle"},[n("Swing"),n("Pillar")],1)},et=[],nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"swing",style:t.inlineStyleSwing},[t._l(t.leftSideBlocks,function(t){return n("Block",{key:t.id,attrs:{block:t}})}),t._l(t.rightSideBlocks,function(t){return n("Block",{key:t.id,attrs:{block:t,side:!0}})})],2)},ot=[],it={name:"Swing",components:{Block:q},computed:Object(a["a"])({},Object(u["c"])(["rightSideBlocks","leftSideBlocks"]),{swingBending:function(){return this.$store.getters.swingBending},inlineStyleSwing:function(){return{transform:"rotate(".concat(this.swingBending/2,"deg)")}}}),methods:Object(a["a"])({},Object(u["b"])({addRightBlock:B})),beforeMount:function(){this.addRightBlock()}},rt=it,ct=(n("7433"),Object(E["a"])(rt,nt,ot,!1,null,"6f10687c",null));ct.options.__file="Swing.vue";var st=ct.exports,at=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pillar"})},lt=[],ut={name:"Pillar"},ft=ut,dt=(n("2a7e"),Object(E["a"])(ft,at,lt,!1,null,"45059a2a",null));dt.options.__file="Pillar.vue";var pt=dt.exports,bt={name:"TeetleTottle",components:{Swing:st,Pillar:pt}},ht=bt,gt=(n("c688"),Object(E["a"])(ht,tt,et,!1,null,"49137299",null));gt.options.__file="TeetleTottle.vue";var mt=gt.exports,kt={name:"GameArea",components:{Dropbox:Y,TeetleTottle:mt}},vt=kt,Bt=(n("126f"),Object(E["a"])(vt,L,M,!1,null,"7daed68d",null));Bt.options.__file="GameArea.vue";var _t=Bt.exports,wt={name:"app",components:{Header:A,GameArea:_t}},Ot=wt,St=(n("5c0b"),Object(E["a"])(Ot,i,r,!1,null,null,null));St.options.__file="App.vue";var yt,jt,xt=St.exports,Tt=n("a322"),Ct=n("11c1");function Pt(){var t=Object(Ct["v4"])(),e=Math.floor(Math.random()*d),n=Math.floor(Math.random()*p)+b,o=Math.floor(Math.random()*f/2)+1,i=8*n;return{id:t,type:e,weight:n,offset:o,height:i}}function Et(t){return t.reduce(function(t,e){return t+e.weight*e.offset},0)}o["a"].use(u["a"]);var Dt=new u["a"].Store({state:{isPaused:!0,leftSideBlocks:[],rightSideBlocks:[],fallingBlocks:[]},getters:{leftSum:function(t){return Et(t.leftSideBlocks)},rightSum:function(t){return Et(t.rightSideBlocks)},swingBending:function(t,e){var n=e.leftSum,o=e.rightSum;return n?n===o?0:n>o?(n-o)/n*-100:(o-n)/o*100:h},gameOverStatus:function(t,e){var n=e.leftSum,o=e.rightSum,i=e.swingBending;return console.log(i),console.log(Math.abs(n-o)),i>h||i<g||Math.abs(n-o)>m}},mutations:(yt={},Object(Tt["a"])(yt,v,function(t){t.isPaused=!t.isPaused}),Object(Tt["a"])(yt,B,function(t){var e=Pt();t.rightSideBlocks.push(e)}),Object(Tt["a"])(yt,_,function(t){var e=t.fallingBlocks.shift();t.leftSideBlocks.push(e)}),Object(Tt["a"])(yt,y,function(t){t.fallingBlocks=[];for(var e=0;e<k;e++){var n=Pt();t.fallingBlocks.push(n)}}),Object(Tt["a"])(yt,j,function(t){var e=Pt();t.fallingBlocks.push(e)}),Object(Tt["a"])(yt,x,function(t){t.isPaused||t.fallingBlocks[0].offset-1<=0||(t.fallingBlocks[0].offset-=1)}),Object(Tt["a"])(yt,T,function(t){t.isPaused||t.fallingBlocks[0].offset+1>5||(t.fallingBlocks[0].offset+=1)}),Object(Tt["a"])(yt,w,function(t){t.isPaused=!0,t.leftSideBlocks=[],t.rightSideBlocks=[],t.fallingBlocks=[]}),yt),actions:(jt={},Object(Tt["a"])(jt,O,function(t){var e=t.commit,n=t.state,o=t.getters,i=t.dispatch;e(_),e(j),n.leftSideBlocks.length&&n.leftSideBlocks.length!==n.rightSideBlocks.length&&e(B),o.gameOverStatus&&setTimeout(function(){alert("game over"),i(S)},0)}),Object(Tt["a"])(jt,S,function(t){var e=t.commit;e(w),e(B),e(y)}),jt),strict:!1}),At=n("ecee"),Lt=n("7a55");At["library"].add(l["a"],l["b"]),o["a"].component("font-awesome-icon",Lt["FontAwesomeIcon"]),o["a"].config.productionTip=!1,new o["a"]({store:Dt,render:function(t){return t(xt)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var o=n("b19e"),i=n.n(o);i.a},"61df":function(t,e,n){},7433:function(t,e,n){"use strict";var o=n("d211"),i=n.n(o);i.a},"82fc":function(t,e,n){},"892a":function(t,e,n){"use strict";var o=n("bc44"),i=n.n(o);i.a},9435:function(t,e,n){"use strict";var o=n("0ef7"),i=n.n(o);i.a},b19e:function(t,e,n){},bc44:function(t,e,n){},c688:function(t,e,n){"use strict";var o=n("61df"),i=n.n(o);i.a},d211:function(t,e,n){},faa0:function(t,e,n){}});
//# sourceMappingURL=app.f2cdc9c3.js.map