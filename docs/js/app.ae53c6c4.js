(function(t){function e(e){for(var o,c,l=e[0],a=e[1],s=e[2],f=0,d=[];f<l.length;f++)c=l[f],i[c]&&d.push(i[c][0]),i[c]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(t[o]=a[o]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,l=1;l<n.length;l++){var a=n[l];0!==i[a]&&(o=!1)}o&&(r.splice(e--,1),t=c(c.s=n[0]))}return t}var o={},i={app:0},r=[];function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],a=l.push.bind(l);l.push=e,l=l.slice();for(var s=0;s<l.length;s++)e(l[s]);var u=a;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0ef7":function(t,e,n){},"126f":function(t,e,n){"use strict";var o=n("82fc"),i=n.n(o);i.a},"2a7e":function(t,e,n){"use strict";var o=n("faa0"),i=n.n(o);i.a},"2f92":function(t,e,n){},"37f4":function(t,e,n){"use strict";var o=n("2f92"),i=n.n(o);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"root"},[n("Header"),n("GameArea")],1)},r=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header"},[n("div",{staticClass:"header__container"},[n("div",{staticClass:"header__pauseButton",on:{click:t.togglePause}},[n("font-awesome-icon",{attrs:{icon:t.pauseButton}})],1)])])},l=[],a=n("c93e"),s=n("c074"),u=n("2f62"),f=10,d=3,p=10,h=1,b=30,g=-30,m=20,k=2,v=300,B=50,_=5,O="TOGGLE_PAUSE",S="ADD_RIGHT_SIDE_BLOCK",w="ADD_LEFT_SIDE_BLOCK",y="RESET_STATE",j="FINISH_FALLING",x="START_NEW_GAME",T="INITIALIZE_FALLING_BLOCKS",P="ADD_FALLING_BLOCK",C="MOVE_RIGHT",E="MOVE_LEFT",D={name:"Header",computed:Object(a["a"])({},Object(u["c"])({isPaused:function(t){return t.isPaused}}),{pauseButton:function(){return this.isPaused?s["b"]:s["a"]}}),methods:Object(a["a"])({},Object(u["b"])({togglePause:O}))},F=D,A=(n("892a"),n("2877")),L=Object(A["a"])(F,c,l,!1,null,"683b9d8c",null);L.options.__file="Header.vue";var M=L.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"gameArea"},[n("Dropbox"),n("TeetleTottle")],1)},I=[],G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"dropbox"},t._l(t.fallingBlocks,function(e,o){return n("FallingBlock",{key:e.id,attrs:{block:e,index:o,timeOut:t.timeOut},on:{"finished-falling":t.onFinishFalling}})}))},N=[],R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Block",{ref:"block",attrs:{block:t.block,top:t.blockDropboxTop,index:t.index,isPaused:t.isPaused}})],1)},H=[],K=(n("c5f6"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"element",class:t.blockClassName,style:t.blockInlineStyle},[t._v("\n    "+t._s(t.block.weight)+"\n")])}),W=[],q={name:"Block",props:{block:{type:Object,required:!0},side:{type:Boolean},top:{type:Number}},methods:{roundUp:function(t){return Math.round(100*t)/100},getBlockBottomCoord:function(){var t=this.$refs.element;return t.getBoundingClientRect().bottom}},computed:{blockClassName:function(){var t=this.block.type;switch(t){case 0:return"block-circle";case 1:return"block-triangle";case 2:return"block-rectangle"}},blockInlineStyle:function(){var t=this.block,e=t.offset,n=t.type,o=t.height,i=this.side,r=this.roundUp,c=this.top,l=c||0,s=i?50+10*e:50-10*e,u=1!==n?{height:"".concat(r(o),"px"),width:"".concat(r(o),"px"),lineHeight:"".concat(r(o),"px")}:{borderWidth:"0 ".concat(r(o),"px ").concat(r(o),"px ").concat(r(o/2),"px"),lineHeight:"".concat(r(1.2*o),"px")};return Object(a["a"])({top:"".concat(l,"px"),left:"".concat(s,"%")},u)}}},U=q,z=(n("9435"),Object(A["a"])(U,K,W,!1,null,"f6ba163e",null));z.options.__file="Block.vue";var J=z.exports,V={name:"FallingBlock",props:{block:{type:Object,required:!0},index:{type:Number},timeOut:{type:Number}},components:{Block:J},data:function(){return{blockWindowBottom:0,blockDropboxTop:this.block.height,timer:0}},computed:{isPaused:function(){return this.$store.state.isPaused},swingBending:function(){return this.$store.getters.swingBending},blockFinalPosition:function(){var t=this.getSwingCoords(),e=t.top,n=t.bottom;return this.swingBending>=0?e+(n-e)/2*(1-this.block.offset/(f/2)):n-(n-e)/2*(1-this.block.offset/(f/2))}},methods:{getSwingCoords:function(){var t=document.querySelector(".swing").getBoundingClientRect(),e=t.top,n=t.bottom;return{top:e,bottom:n}},incrementBlockDropboxTop:function(){this.blockDropboxTop+=20}},updated:function(){var t=this;if(console.log(this.timeOut),this.isPaused)return clearTimeout(this.timer);0===this.index&&(this.blockWindowBottom=this.$refs.block.getBlockBottomCoord(),this.timer=setTimeout(function(){if(t.blockWindowBottom>=t.blockFinalPosition-20)return clearTimeout(t.timer),t.$store.dispatch(j),void t.$emit("finished-falling");t.incrementBlockDropboxTop()},this.timeOut))}},Z=V,Q=(n("f910"),Object(A["a"])(Z,R,H,!1,null,"0bf2e92c",null));Q.options.__file="FallingBlock.vue";var X=Q.exports,Y={name:"Dropbox",components:{FallingBlock:X},data:function(){return{timeOut:v,iterationCounter:0}},computed:{fallingBlocks:function(){return this.$store.state.fallingBlocks}},methods:Object(a["a"])({},Object(u["b"])({initializeFallingBlocks:T,moveBlockRight:C,moveBlockLeft:E}),{onKeyDown:function(t){39===t.keyCode&&this.moveBlockRight(),37===t.keyCode&&this.moveBlockLeft()},onFinishFalling:function(){this.iterationCounter++,this.iterationCounter===_&&(this.timeOut-=B,this.iterationCounter=0)}}),beforeMount:function(){this.initializeFallingBlocks(),window.addEventListener("keydown",this.onKeyDown)},beforeDestroy:function(){window.removeEventListener("keydown",this.onKeyDown)}},tt=Y,et=(n("37f4"),Object(A["a"])(tt,G,N,!1,null,"d7570370",null));et.options.__file="Dropbox.vue";var nt=et.exports,ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"teetleTottle"},[n("Swing"),n("Pillar")],1)},it=[],rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"swing",style:t.inlineStyleSwing},[t._l(t.leftSideBlocks,function(t){return n("Block",{key:t.id,attrs:{block:t}})}),t._l(t.rightSideBlocks,function(t){return n("Block",{key:t.id,attrs:{block:t,side:!0}})})],2)},ct=[],lt={name:"Swing",components:{Block:J},computed:Object(a["a"])({},Object(u["c"])(["rightSideBlocks","leftSideBlocks"]),{swingBending:function(){return this.$store.getters.swingBending},inlineStyleSwing:function(){return{transform:"rotate(".concat(this.swingBending/2,"deg)")}}}),methods:Object(a["a"])({},Object(u["b"])({addRightBlock:S})),beforeMount:function(){this.addRightBlock()}},at=lt,st=(n("7433"),Object(A["a"])(at,rt,ct,!1,null,"6f10687c",null));st.options.__file="Swing.vue";var ut=st.exports,ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pillar"})},dt=[],pt={name:"Pillar"},ht=pt,bt=(n("2a7e"),Object(A["a"])(ht,ft,dt,!1,null,"45059a2a",null));bt.options.__file="Pillar.vue";var gt=bt.exports,mt={name:"TeetleTottle",components:{Swing:ut,Pillar:gt}},kt=mt,vt=(n("c688"),Object(A["a"])(kt,ot,it,!1,null,"49137299",null));vt.options.__file="TeetleTottle.vue";var Bt=vt.exports,_t={name:"GameArea",components:{Dropbox:nt,TeetleTottle:Bt}},Ot=_t,St=(n("126f"),Object(A["a"])(Ot,$,I,!1,null,"7daed68d",null));St.options.__file="GameArea.vue";var wt=St.exports,yt={name:"app",components:{Header:M,GameArea:wt}},jt=yt,xt=(n("5c0b"),Object(A["a"])(jt,i,r,!1,null,null,null));xt.options.__file="App.vue";var Tt,Pt,Ct=xt.exports,Et=n("a322"),Dt=n("11c1");function Ft(){var t=Object(Dt["v4"])(),e=Math.floor(Math.random()*d),n=Math.floor(Math.random()*p)+h,o=Math.floor(Math.random()*f/2)+1,i=8*n;return{id:t,type:e,weight:n,offset:o,height:i}}function At(t){return t.reduce(function(t,e){return t+e.weight*e.offset},0)}o["a"].use(u["a"]);var Lt=new u["a"].Store({state:{isPaused:!0,leftSideBlocks:[],rightSideBlocks:[],fallingBlocks:[]},getters:{leftSum:function(t){return At(t.leftSideBlocks)},rightSum:function(t){return At(t.rightSideBlocks)},swingBending:function(t,e){var n=e.leftSum,o=e.rightSum;return n?n===o?0:n>o?(n-o)/n*-100:(o-n)/o*100:b},gameOverStatus:function(t,e){var n=e.leftSum,o=e.rightSum,i=e.swingBending;return console.log(i),console.log(Math.abs(n-o)),i>b||i<g||Math.abs(n-o)>m}},mutations:(Tt={},Object(Et["a"])(Tt,O,function(t){t.isPaused=!t.isPaused}),Object(Et["a"])(Tt,S,function(t){var e=Ft();t.rightSideBlocks.push(e)}),Object(Et["a"])(Tt,w,function(t){var e=t.fallingBlocks.shift();t.leftSideBlocks.push(e)}),Object(Et["a"])(Tt,T,function(t){t.fallingBlocks=[];for(var e=0;e<k;e++){var n=Ft();t.fallingBlocks.push(n)}}),Object(Et["a"])(Tt,P,function(t){var e=Ft();t.fallingBlocks.push(e)}),Object(Et["a"])(Tt,C,function(t){t.isPaused||t.fallingBlocks[0].offset-1<=0||(t.fallingBlocks[0].offset-=1)}),Object(Et["a"])(Tt,E,function(t){t.isPaused||t.fallingBlocks[0].offset+1>5||(t.fallingBlocks[0].offset+=1)}),Object(Et["a"])(Tt,y,function(t){t.isPaused=!0,t.leftSideBlocks=[],t.rightSideBlocks=[],t.fallingBlocks=[]}),Tt),actions:(Pt={},Object(Et["a"])(Pt,j,function(t){var e=t.commit,n=t.state,o=t.getters,i=t.dispatch;e(w),e(P),n.leftSideBlocks.length&&n.leftSideBlocks.length!==n.rightSideBlocks.length&&e(S),o.gameOverStatus&&setTimeout(function(){alert("game over"),i(x)},0)}),Object(Et["a"])(Pt,x,function(t){var e=t.commit;e(y),e(S),e(T)}),Pt),strict:!1}),Mt=n("ecee"),$t=n("7a55");Mt["library"].add(s["a"],s["b"]),o["a"].component("font-awesome-icon",$t["FontAwesomeIcon"]),o["a"].config.productionTip=!1,new o["a"]({store:Lt,render:function(t){return t(Ct)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var o=n("b19e"),i=n.n(o);i.a},"61df":function(t,e,n){},7433:function(t,e,n){"use strict";var o=n("d211"),i=n.n(o);i.a},7912:function(t,e,n){},"82fc":function(t,e,n){},"892a":function(t,e,n){"use strict";var o=n("bc44"),i=n.n(o);i.a},9435:function(t,e,n){"use strict";var o=n("0ef7"),i=n.n(o);i.a},b19e:function(t,e,n){},bc44:function(t,e,n){},c688:function(t,e,n){"use strict";var o=n("61df"),i=n.n(o);i.a},d211:function(t,e,n){},f910:function(t,e,n){"use strict";var o=n("7912"),i=n.n(o);i.a},faa0:function(t,e,n){}});
//# sourceMappingURL=app.ae53c6c4.js.map