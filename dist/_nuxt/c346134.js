(window.webpackJsonp=window.webpackJsonp||[]).push([[52,15,16,18,20,21,25,26,28,29,37,39,40,42,43,44,46,47,50,51],{669:function(e,t,r){"use strict";r(8),r(10),r(14),r(15);var n=r(0),o=(r(6),r(39),r(9),r(26),r(73),r(292),r(41),r(293),r(294),r(295),r(296),r(297),r(298),r(299),r(300),r(301),r(302),r(303),r(304),r(305),r(51),r(40),r(11),r(89),r(306),r(3)),c=r(95),l=r(4);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var O=["sm","md","lg","xl"],j=O.reduce((function(e,t){return e[t]={type:[Boolean,String,Number],default:!1},e}),{}),y=O.reduce((function(e,t){return e["offset"+Object(l.A)(t)]={type:[String,Number],default:null},e}),{}),v=O.reduce((function(e,t){return e["order"+Object(l.A)(t)]={type:[String,Number],default:null},e}),{}),w={col:Object.keys(j),offset:Object.keys(y),order:Object.keys(v)};function S(e,t,r){var n=e;if(null!=r&&!1!==r){if(t){var o=t.replace(e,"");n+="-".concat(o)}return"col"!==e||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var m=new Map;t.a=o.default.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},j),{},{offset:{type:[String,Number],default:null}},y),{},{order:{type:[String,Number],default:null}},v),{},{alignSelf:{type:String,default:null,validator:function(e){return["auto","start","end","center","baseline","stretch"].includes(e)}},tag:{type:String,default:"div"}}),render:function(e,t){var r=t.props,data=t.data,o=t.children,l=(t.parent,"");for(var f in r)l+=String(r[f]);var d=m.get(l);return d||function(){var e,t;for(t in d=[],w)w[t].forEach((function(e){var n=r[e],o=S(t,e,n);o&&d.push(o)}));var o=d.some((function(e){return e.startsWith("col-")}));d.push((e={col:!o||!r.cols},Object(n.a)(e,"col-".concat(r.cols),r.cols),Object(n.a)(e,"offset-".concat(r.offset),r.offset),Object(n.a)(e,"order-".concat(r.order),r.order),Object(n.a)(e,"align-self-".concat(r.alignSelf),r.alignSelf),e)),m.set(l,d)}(),e(r.tag,Object(c.a)(data,{class:d}),o)}})}}]);