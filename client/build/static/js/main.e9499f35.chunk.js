(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){e.exports=n.p+"static/media/rocket.68cceff8.svg"},21:function(e,t,n){e.exports=n(62)},60:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(12),o=n.n(r),c=n(13),s=n(14),l=n(19),m=n(15),u=n(20),h=n(2),f=n(7),d=n.n(f),g=n(3),v=n(18);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var E=i.a.createElement("title",null,"Group 27"),y=i.a.createElement("desc",null,"Created with Sketch."),k=i.a.createElement("g",{id:"Page-1",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},i.a.createElement("g",{id:"icn_step3",transform:"translate(-167.000000, -29.000000)"},i.a.createElement("g",{id:"Group-28",transform:"translate(45.000000, 29.000000)"},i.a.createElement("g",{id:"Group-27",transform:"translate(122.000000, 0.000000)"},i.a.createElement("circle",{id:"Oval-12",fill:"#B81064",cx:17.5,cy:17.5,r:17.5}),i.a.createElement("path",{d:"M13.0445701,9.5 C11.5796448,9.5 10.156977,10.125972 9.21322701,11.2282271 C6.6355219,14.2083981 8.11453303,18.0594868 10.8330963,20.6314152 C13.3403724,23.0128305 15.6786185,24.7002333 17.678805,27 L24.7921442,20.903577 C27.6093083,18.4405132 29.2573493,14.657465 26.8064165,11.5684292 C25.8626666,10.3845257 24.3836555,9.67690513 22.848301,9.67690513 C21.0312302,9.67690513 19.1296445,10.6566874 17.9746072,12.9700622 C16.8759132,10.5478227 14.9179842,9.5 13.0445701,9.5",id:"Shape",fill:"#FFFFFF",fillRule:"nonzero"}))))),x=function(e){return i.a.createElement("svg",p({width:"35px",height:"35px",viewBox:"0 0 35 35",version:1.1,xmlnsXlink:"http://www.w3.org/1999/xlink"},e),E,y,k)},w=(n.p,Object(v.a)({wrapper:{"& circle":{fill:"#B81064"}}}));function b(e){var t=w();return i.a.createElement(x,{className:t.wrapper})}function O(e){function t(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e))+e}var n=t(-20,20),a=20+10*(2*t(0,1)-1),r=Object(g.useAnimation)();return!0===e.animating?(r.start({x:0,y:0,rotate:0,scale:0,opacity:1,transition:{duration:0}}),r.start({scale:1,transition:{ease:"easeInOut",duration:.2,delay:.4*e.index}}),r.start({y:-140,opacity:0,transition:{ease:"easeOut",duration:2.6,delay:.4*e.index}}),r.start({rotate:[n,-n,n,-n,n],x:[a,-a,a,-a,a],transition:{ease:"easeOut",duration:3,delay:.4*e.index}})):r.start({x:0,y:0,rotate:0,scale:0,opacity:1,transition:{duration:0}}),i.a.createElement(g.Frame,{center:!0,background:{},initial:{x:0,y:0,width:85,height:74.575,rotate:0,scale:0,opacity:1},animate:r},i.a.createElement(b,null))}var T=n(17),C=n.n(T);function j(e){return i.a.createElement("div",null,i.a.createElement(g.Frame,{center:!0,background:{},initial:{x:0,y:0,width:220,height:220,rotate:0,scale:1,opacity:1}},i.a.createElement("img",{src:C.a,alt:"Rocket"}),i.a.createElement(O,{animating:e.animating,index:0}),i.a.createElement(O,{animating:e.animating,index:1}),i.a.createElement(O,{animating:e.animating,index:2}),i.a.createElement(O,{animating:e.animating,index:3}),i.a.createElement(O,{animating:e.animating,index:4})))}n(58);var F=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={fundraisers:0,fundraising_pages:0,animating:!1},n.handleClick=n.handleClick.bind(Object(h.a)(Object(h.a)(n))),n.eventSearchTime=d()().utc(),n.eventsToProcess=[],n.fetchData(),n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"playAnimation",value:function(){var e=this;this.state.animating||(this.setState({fundraisers:10}),this.setState({animating:!0}),setTimeout(function(){e.setState({animating:!1})},4e3))}},{key:"checkForEvent",value:function(){if(this.eventsToProcess.length&&!this.state.animating){var e=this.eventsToProcess[0];console.log("EVENT"),console.log(e),this.eventsToProcess.shift(),this.playAnimation()}}},{key:"handleClick",value:function(){this.playAnimation()}},{key:"fetchData",value:function(){var e=this;console.log("fetchData");var t=this.eventSearchTime;console.log(t.format("YYYY-MM-DD HH:mm:ss"));var n="/fp-events?eventTime="+t.format("YYYY-MM-DD HH:mm:ss");this.eventSearchTime=d()().utc();var a=this;fetch(n).then(function(e){return e.json()}).then(function(t){console.log(t),t.length&&(t.forEach(function(e,t){a.eventsToProcess.push(e)}),console.log("EVENTS:"+e.eventsToProcess.length),console.log(e.eventsToProcess)),e.checkForEvent(),setTimeout(function(){e.fetchData()},4e3)})}},{key:"render",value:function(){return i.a.createElement("div",{onClick:this.handleClick},i.a.createElement(j,{animating:this.state.animating}))}}]),t}(a.Component);n(60);o.a.render(i.a.createElement(F,null),document.getElementById("root"))}},[[21,2,1]]]);
//# sourceMappingURL=main.e9499f35.chunk.js.map