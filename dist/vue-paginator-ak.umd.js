!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):(e=e||self,t(e.Paginator={}))}(this,function(e){"use strict";function t(e,t,n,a,i,r,o,s,l,d){"boolean"!=typeof o&&(l=s,s=o,o=!1);var p="function"==typeof n?n.options:n;e&&e.render&&(p.render=e.render,p.staticRenderFns=e.staticRenderFns,p._compiled=!0,i&&(p.functional=!0)),a&&(p._scopeId=a);var c;if(r?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,l(e)),e&&e._registeredComponents&&e._registeredComponents.add(r)},p._ssrRegister=c):t&&(c=o?function(){t.call(this,d(this.$root.$options.shadowRoot))}:function(e){t.call(this,s(e))}),c)if(p.functional){var u=p.render;p.render=function(e,t){return c.call(t),u(e,t)}}else{var f=p.beforeCreate;p.beforeCreate=f?[].concat(f,c):[c]}return n}function n(e){return function(e,t){return a(e,t)}}function a(e,t){var n=o?t.media||"default":e,a=l[n]||(l[n]={ids:new Set,styles:[]});if(!a.ids.has(e)){a.ids.add(e);var i=t.source;if(t.map&&(i+="\n/*# sourceURL="+t.map.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t.map))))+" */"),a.element||(a.element=document.createElement("style"),a.element.type="text/css",t.media&&a.element.setAttribute("media",t.media),s.appendChild(a.element)),"styleSheet"in a.element)a.styles.push(i),a.element.styleSheet.cssText=a.styles.filter(Boolean).join("\n");else{var r=a.ids.size-1,d=document.createTextNode(i),p=a.element.childNodes;p[r]&&a.element.removeChild(p[r]),p.length?a.element.insertBefore(d,p[r]):a.element.appendChild(d)}}}var i={name:"paginator",props:{DataSet:{type:Object,required:!1},dataLength:{type:[String,Number],required:!0},dataLimit:{type:[String,Number],required:!0},totalLinks:{type:[String,Number],required:!1,default:5},alignment:{type:String,required:!1,default:"flex-end"},preserveUrl:{type:Boolean,required:!1,default:!1}},data:function(){return{page:1,total:0,current_page:0,total:1}},watch:{page:function(){this.broadcast().updateUrl()}},computed:{paginationType:function(){},paginationNO:function(){this.total=Math.floor(this.dataLength/this.dataLimit);var e=Math.min(this.totalLinks,this.total);this.current_page=this.page-Math.floor(this.totalLinks/2);var t=[];for(this.current_page<1&&(this.current_page=1),this.current_page+e>this.total+1&&(this.current_page=this.total+1-e);0!=e&&this.current_page<=this.total;)t.push(this.current_page),this.current_page++,e--;return t},shouldPaginat:function(){return this.total>1},nextUrl:function(){return!(this.page+1>this.total)&&this.page+1},prevUrl:function(){return 1!==this.page&&this.page-1}},methods:{broadcast:function(){return this.$emit("changed",this.page)},updateUrl:function(){this.preserveUrl||history.pushState(null,null,"?page="+this.page)}}},r=t,o="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase()),s=document.head||document.getElementsByTagName("head")[0],l={},d=n,p=i,c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{directives:[{name:"show",rawName:"v-show",value:e.shouldPaginat,expression:"shouldPaginat"}],staticClass:"pagination-ak",style:e.alignment?"justify-content: "+e.alignment+";":""},[n("li",{directives:[{name:"show",rawName:"v-show",value:e.prevUrl,expression:"prevUrl"}],staticClass:"page-item-ak"},[n("a",{staticClass:"page-link-ak",attrs:{href:"#",tabindex:"-1",rel:"previous"},on:{click:function(t){t.preventDefault(),e.page--}}},[e._v("Previous")])]),e._v(" "),e._l(e.paginationNO,function(t){return n("li",{key:t.id,staticClass:"page-item-ak",class:{active:t==e.page}},[n("a",{staticClass:"page-link-ak",attrs:{href:"#"},domProps:{textContent:e._s(t)},on:{click:function(n){n.preventDefault(),e.page=t}}})])}),e._v(" "),n("li",{directives:[{name:"show",rawName:"v-show",value:e.nextUrl,expression:"nextUrl"}],staticClass:"page-item-ak"},[n("a",{staticClass:"page-link-ak",attrs:{href:"#",rel:"next"},on:{click:function(t){t.preventDefault(),e.page++}}},[e._v("Next")])])],2)},u=[];c._withStripped=!0;var f=r({render:c,staticRenderFns:u},function(e){e&&e("data-v-0da46840_0",{source:".pagination-ak {\n  padding-left: 0;\n  list-style: none;\n  border-radius: 0.25rem;\n  display: flex;\n  justify-content: flex-end;\n  margin: auto;\n  max-width: 1400px;\n}\n.page-link-ak {\n  position: relative;\n  display: block;\n  padding: 0.5rem 0.75rem;\n  margin-left: -1px;\n  line-height: 1.25;\n  color: #496c94;\n  background-color: #ffffff;\n  border: 1px solid #dee2e6;\n  cursor: pointer;\n}\n.page-item-ak.active .page-link-ak {\n  z-index: 1;\n  color: #ffffff;\n  background-color: rgba(26, 69, 122, 0.77);\n  border-color: rgba(26, 69, 122, 0.77);\n}\n\n/*# sourceMappingURL=Paginator.vue.map */",map:{version:3,sources:["Paginator.vue"],names:[],mappings:"AAAA;EACE,eAAe;EACf,gBAAgB;EAChB,sBAAsB;EACtB,aAAa;EACb,yBAAyB;EACzB,YAAY;EACZ,iBAAiB;AAAE;AAErB;EACE,kBAAkB;EAClB,cAAc;EACd,uBAAuB;EACvB,iBAAiB;EACjB,iBAAiB;EACjB,cAAc;EACd,yBAAyB;EACzB,yBAAyB;EACzB,eAAe;AAAE;AAEnB;EACE,UAAU;EACV,cAAc;EACd,yCAAyC;EACzC,qCAAqC;AAAE;;AAEzC,wCAAwC",file:"Paginator.vue",sourcesContent:[".pagination-ak {\n  padding-left: 0;\n  list-style: none;\n  border-radius: 0.25rem;\n  display: flex;\n  justify-content: flex-end;\n  margin: auto;\n  max-width: 1400px; }\n\n.page-link-ak {\n  position: relative;\n  display: block;\n  padding: 0.5rem 0.75rem;\n  margin-left: -1px;\n  line-height: 1.25;\n  color: #496c94;\n  background-color: #ffffff;\n  border: 1px solid #dee2e6;\n  cursor: pointer; }\n\n.page-item-ak.active .page-link-ak {\n  z-index: 1;\n  color: #ffffff;\n  background-color: rgba(26, 69, 122, 0.77);\n  border-color: rgba(26, 69, 122, 0.77); }\n\n/*# sourceMappingURL=Paginator.vue.map */"]},media:void 0})},p,void 0,!1,void 0,d,void 0);e.default=f,Object.defineProperty(e,"__esModule",{value:!0})});
