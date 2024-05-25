!/**
 * Highcharts JS v11.4.3 (2024-05-22)
 *
 * Dot plot series type for Highcharts
 *
 * (c) 2010-2024 Torstein Honsi
 *
 * License: www.highcharts.com/license
 */function(t){"object"==typeof module&&module.exports?(t.default=t,module.exports=t):"function"==typeof define&&define.amd?define("highcharts/modules/dotplot",["highcharts"],function(e){return t(e),t.Highcharts=e,t}):t("undefined"!=typeof Highcharts?Highcharts:void 0)}(function(t){"use strict";var e=t?t._modules:{};function s(t,e,s,i){t.hasOwnProperty(e)||(t[e]=i.apply(null,s),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:e,module:t[e]}})))}s(e,"Series/DotPlot/DotPlotSeriesDefaults.js",[],function(){return{itemPadding:.1,marker:{symbol:"circle",states:{hover:{},select:{}}},slotsPerBar:void 0}}),s(e,"Series/DotPlot/DotPlotSeries.js",[e["Series/DotPlot/DotPlotSeriesDefaults.js"],e["Core/Series/SeriesRegistry.js"],e["Core/Utilities.js"]],function(t,e,s){let{column:i}=e.seriesTypes,{extend:o,isNumber:r,merge:l,pick:d}=s;class n extends i{drawPoints(){let t=this.options,e=this.chart.renderer,s=t.marker,i=this.points.reduce((t,e)=>t+Math.abs(e.y||0),0),l=this.points.reduce((t,e)=>t+(e.shapeArgs?.height||0),0),n=t.itemPadding||0,a=this.points[0]?.shapeArgs?.width||0,h=t.slotsPerBar,c=a;if(!r(h))for(h=1;h<i&&!(i/h<l/c*1.2);)c=a/++h;let p=l*h/i;for(let t of this.points){let i=t.marker||{},r=i.symbol||s.symbol,l=d(i.radius,s.radius),a="rect"!==r?p:c,u=t.shapeArgs||{},f=(u.x||0)+((u.width||0)-h*a)/2,g=Math.abs(t.y??0),m=u.y||0,y=u.height||0,v,P=f,b=t.negative?m:m+y-p,A=0;t.graphics=v=t.graphics||[];let w=t.pointAttr?t.pointAttr[t.selected?"selected":""]||this.pointAttr[""]:this.pointAttribs(t,t.selected&&"select");if(delete w.r,this.chart.styledMode&&(delete w.stroke,delete w["stroke-width"]),"number"==typeof t.y){t.graphic||(t.graphic=e.g("point").add(this.group));for(let s=0;s<g;s++){let i={x:P+a*n,y:b+p*n,width:a*(1-2*n),height:p*(1-2*n),r:l},d=v[s];d?d.animate(i):d=e.symbol(r).attr(o(i,w)).add(t.graphic),d.isActive=!0,v[s]=d,P+=a,++A>=h&&(A=0,P=f,b=t.negative?b+p:b-p)}}let S=-1;for(let t of v)++S,t&&(t.isActive?t.isActive=!1:(t.destroy(),v.splice(S,1)))}}}return n.defaultOptions=l(i.defaultOptions,t),o(n.prototype,{markerAttribs:void 0}),e.registerSeriesType("dotplot",n),n}),s(e,"masters/modules/dotplot.src.js",[e["Core/Globals.js"]],function(t){return t})});