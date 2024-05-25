!/**
 * Highstock JS v11.4.3 (2024-05-22)
 *
 * Money Flow Index indicator for Highcharts Stock
 *
 * (c) 2010-2024 Grzegorz Blachliński
 *
 * License: www.highcharts.com/license
 */function(t){"object"==typeof module&&module.exports?(t.default=t,module.exports=t):"function"==typeof define&&define.amd?define("highcharts/indicators/mfi",["highcharts","highcharts/modules/stock"],function(e){return t(e),t.Highcharts=e,t}):t("undefined"!=typeof Highcharts?Highcharts:void 0)}(function(t){"use strict";var e=t?t._modules:{};function r(t,e,r,o){t.hasOwnProperty(e)||(t[e]=o.apply(null,r),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:e,module:t[e]}})))}r(e,"Stock/Indicators/MFI/MFIIndicator.js",[e["Core/Series/SeriesRegistry.js"],e["Core/Utilities.js"]],function(t,e){var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),n=t.seriesTypes.sma,i=e.extend,s=e.merge,u=e.error,a=e.isArray;function c(t){return t.reduce(function(t,e){return t+e})}function f(t){return(t[1]+t[2]+t[3])/3}var p=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.getValues=function(t,e){var r,o,n,i,s,p,l=e.period,h=t.xData,d=t.yData,y=d?d.length:0,m=e.decimals,v=t.chart.get(e.volumeSeriesID),g=v&&v.yData,_=[],x=[],S=[],j=[],D=[],I=!1,w=1;if(!v){u("Series "+e.volumeSeriesID+" not found! Check `volumeSeriesID`.",!0,t.chart);return}if(!(h.length<=l)&&a(d[0])&&4===d[0].length&&g){for(r=f(d[w]);w<l+1;)o=r,I=(r=f(d[w]))>=o,n=r*g[w],j.push(I?n:0),D.push(I?0:n),w++;for(p=w-1;p<y;p++)p>w-1&&(j.shift(),D.shift(),o=r,I=(r=f(d[p]))>o,n=r*g[p],j.push(I?n:0),D.push(I?0:n)),i=c(D),s=parseFloat((100-100/(1+c(j)/i)).toFixed(m)),_.push([h[p],s]),x.push(h[p]),S.push(s);return{values:_,xData:x,yData:S}}},e.defaultOptions=s(n.defaultOptions,{params:{index:void 0,volumeSeriesID:"volume",decimals:4}}),e}(n);return i(p.prototype,{nameBase:"Money Flow Index"}),t.registerSeriesType("mfi",p),p}),r(e,"masters/indicators/mfi.src.js",[e["Core/Globals.js"]],function(t){return t})});