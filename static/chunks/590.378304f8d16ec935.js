"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[590],{158:function(e,t,n){n.r(t);var r=n(5893),o=n(6342),i=n(9941),l=n(795),u=n(4284),a=n(7409),s=n(8543),c=(n(5254),n(5243)),h=n.n(c),m=n(1664),d=n.n(m),g=n(7294);function f(e){var t=e.getCurrentZoom,n=e.getCurrentCenter,r=this,o=(0,i.zV)({zoomend:function(){t.call(r,o.getZoom()),n.call(r,o.getCenter())}});return null}n(4653);function x(e){var t="/image/"+e.id;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(a.J,{position:[e.lat,e.lon],children:(0,r.jsx)(s.G,{children:(0,r.jsx)(d(),{href:t,children:(0,r.jsx)("a",{children:e.name})})})})})}t.default=function(e){var t=(0,g.useState)(e.zoom?e.zoom:4),n=t[0],i=t[1],a=(0,g.useState)(e.center?e.center:[37.98,23.72]),s=a[0],c=a[1];return h().Icon.Default.imagePath="/img/",(0,r.jsxs)(l.h,{center:s,zoom:n,scrollWheelZoom:!1,style:{height:400,width:"100%",zIndex:"1"},children:[(0,r.jsx)(f,{getCurrentZoom:function(e){i(e)},getCurrentCenter:function(e){c(e)}}),(0,r.jsx)(u.I,{attribution:"",url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),(0,r.jsx)(o.Z,{children:e.mapInfo.map((function(e){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(x,{id:e.id,name:e.title,lat:e.latitude,lon:e.longitude})})}))}),(0,r.jsx)(l.h,{})]})}}}]);