function normalizeComponent(e,t,n,i,a,r,o,s,l,d){"boolean"!=typeof o&&(l=s,s=o,o=!1);var c="function"==typeof n?n.options:n;e&&e.render&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0,a&&(c.functional=!0)),i&&(c._scopeId=i);var p;if(r?(p=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,l(e)),e&&e._registeredComponents&&e._registeredComponents.add(r)},c._ssrRegister=p):t&&(p=o?function(){t.call(this,d(this.$root.$options.shadowRoot))}:function(e){t.call(this,s(e))}),p)if(c.functional){var u=c.render;c.render=function(e,t){return p.call(t),u(e,t)}}else{var _=c.beforeCreate;c.beforeCreate=_?[].concat(_,p):[p]}return n}function createInjector(e){return function(e,t){return addStyle(e,t)}}function addStyle(e,t){var n=isOldIE?t.media||"default":e,i=styles[n]||(styles[n]={ids:new Set,styles:[]});if(!i.ids.has(e)){i.ids.add(e);var a=t.source;if(t.map&&(a+="\n/*# sourceURL="+t.map.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t.map))))+" */"),i.element||(i.element=document.createElement("style"),i.element.type="text/css",t.media&&i.element.setAttribute("media",t.media),HEAD.appendChild(i.element)),"styleSheet"in i.element)i.styles.push(a),i.element.styleSheet.cssText=i.styles.filter(Boolean).join("\n");else{var r=i.ids.size-1,o=document.createTextNode(a),s=i.element.childNodes;s[r]&&i.element.removeChild(s[r]),s.length?i.element.insertBefore(o,s[r]):i.element.appendChild(o)}}}var script={name:"paginator",props:{DataSet:{type:Object,required:!1},dataLength:{type:[String,Number],required:!0},dataLimit:{type:[String,Number],required:!0},totalLinks:{type:[String,Number],required:!1,default:5},alignment:{type:String,required:!1,default:"flex-end"},preserveUrl:{type:Boolean,required:!1,default:!1}},data:function(){return{page:1,total:0,current_page:0,total:1}},watch:{page:function(){this.broadcast().updateUrl()}},computed:{paginationType:function(){},paginationNO:function(){this.total=Math.floor(this.dataLength/this.dataLimit);var e=Math.min(this.totalLinks,this.total);this.current_page=this.page-Math.floor(this.totalLinks/2);var t=[];for(this.current_page<1&&(this.current_page=1),this.current_page+e>this.total+1&&(this.current_page=this.total+1-e);0!=e&&this.current_page<=this.total;)t.push(this.current_page),this.current_page++,e--;return t},shouldPaginat:function(){return this.total>1},nextUrl:function(){return!(this.page+1>this.total)&&this.page+1},prevUrl:function(){return 1!==this.page&&this.page-1}},methods:{broadcast:function(){return this.$emit("changed",this.page)},updateUrl:function(){this.preserveUrl||history.pushState(null,null,"?page="+this.page)}}},normalizeComponent_1=normalizeComponent,isOldIE="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase()),HEAD=document.head||document.getElementsByTagName("head")[0],styles={},browser=createInjector,__vue_script__=script,__vue_render__=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{directives:[{name:"show",rawName:"v-show",value:e.shouldPaginat,expression:"shouldPaginat"}],staticClass:"pagination",style:e.alignment?"justify-content: "+e.alignment+";":""},[n("li",{directives:[{name:"show",rawName:"v-show",value:e.prevUrl,expression:"prevUrl"}],staticClass:"page-item"},[n("a",{staticClass:"page-link",attrs:{href:"#",tabindex:"-1",rel:"previous"},on:{click:function(t){t.preventDefault(),e.page--}}},[e._v("Previous")])]),e._v(" "),e._l(e.paginationNO,function(t){return n("li",{key:t.id,staticClass:"page-item",class:{active:t==e.page}},[n("a",{staticClass:"page-link",attrs:{href:"#"},domProps:{textContent:e._s(t)},on:{click:function(n){n.preventDefault(),e.page=t}}})])}),e._v(" "),n("li",{directives:[{name:"show",rawName:"v-show",value:e.nextUrl,expression:"nextUrl"}],staticClass:"page-item"},[n("a",{staticClass:"page-link",attrs:{href:"#",rel:"next"},on:{click:function(t){t.preventDefault(),e.page++}}},[e._v("Next")])])],2)},__vue_staticRenderFns__=[];__vue_render__._withStripped=!0;var __vue_inject_styles__=function(e){e&&e("data-v-50b6fb2a_0",{source:".pagination {\n  padding-left: 0;\n  list-style: none;\n  border-radius: 0.25rem;\n  display: flex;\n  justify-content: flex-end;\n  margin: auto;\n  max-width: 1400px;\n}\n.page-link {\n  position: relative;\n  display: block;\n  padding: 0.5rem 0.75rem;\n  margin-left: -1px;\n  line-height: 1.25;\n  color: rgba(26, 69, 122, 0.77);\n  background-color: #ffffff;\n  border: 1px solid #dee2e6;\n}\n.page-link {\n  position: relative;\n  display: block;\n  padding: 0.5rem 0.75rem;\n  margin-left: -1px;\n  line-height: 1.25;\n  color: #496c94;\n  background-color: #ffffff;\n  border: 1px solid #dee2e6;\n  cursor: pointer;\n}\n.page-item.active .page-link {\n  z-index: 1;\n  color: #ffffff;\n  background-color: rgba(26, 69, 122, 0.77);\n  border-color: rgba(26, 69, 122, 0.77);\n}\n\n/*# sourceMappingURL=Paginator.vue.map */",map:{version:3,sources:["Paginator.vue"],names:[],mappings:"AAAA;EACE,eAAe;EACf,gBAAgB;EAChB,sBAAsB;EACtB,aAAa;EACb,yBAAyB;EACzB,YAAY;EACZ,iBAAiB;AAAE;AAErB;EACE,kBAAkB;EAClB,cAAc;EACd,uBAAuB;EACvB,iBAAiB;EACjB,iBAAiB;EACjB,8BAA8B;EAC9B,yBAAyB;EACzB,yBAAyB;AAAE;AAE7B;EACE,kBAAkB;EAClB,cAAc;EACd,uBAAuB;EACvB,iBAAiB;EACjB,iBAAiB;EACjB,cAAc;EACd,yBAAyB;EACzB,yBAAyB;EACzB,eAAe;AAAE;AAEnB;EACE,UAAU;EACV,cAAc;EACd,yCAAyC;EACzC,qCAAqC;AAAE;;AAEzC,wCAAwC",file:"Paginator.vue",sourcesContent:[".pagination {\n  padding-left: 0;\n  list-style: none;\n  border-radius: 0.25rem;\n  display: flex;\n  justify-content: flex-end;\n  margin: auto;\n  max-width: 1400px; }\n\n.page-link {\n  position: relative;\n  display: block;\n  padding: 0.5rem 0.75rem;\n  margin-left: -1px;\n  line-height: 1.25;\n  color: rgba(26, 69, 122, 0.77);\n  background-color: #ffffff;\n  border: 1px solid #dee2e6; }\n\n.page-link {\n  position: relative;\n  display: block;\n  padding: 0.5rem 0.75rem;\n  margin-left: -1px;\n  line-height: 1.25;\n  color: #496c94;\n  background-color: #ffffff;\n  border: 1px solid #dee2e6;\n  cursor: pointer; }\n\n.page-item.active .page-link {\n  z-index: 1;\n  color: #ffffff;\n  background-color: rgba(26, 69, 122, 0.77);\n  border-color: rgba(26, 69, 122, 0.77); }\n\n/*# sourceMappingURL=Paginator.vue.map */"]},media:void 0})},__vue_scope_id__=void 0,__vue_module_identifier__=void 0,__vue_is_functional_template__=!1,Paginator=normalizeComponent_1({render:__vue_render__,staticRenderFns:__vue_staticRenderFns__},__vue_inject_styles__,__vue_script__,__vue_scope_id__,__vue_is_functional_template__,__vue_module_identifier__,browser,void 0);export default Paginator;