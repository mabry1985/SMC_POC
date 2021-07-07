import{b}from"../chunk-EYHKTYML.js";import{a as U}from"../chunk-CEBFPWXS.js";import{a as E,b as D,e as g,g as w}from"../chunk-H7J6AKNR.js";var u=t=>U.setOutlet(t);function T(t,r,e,i){var o=h();if(i)for(var n=0;n<i.length;n++)o=i[n](o);var a=r(function(l){o.initializeInstanceElements(l,s.elements)},e),s=o.decorateClass(A(a.d.map(P)),t);return o.initializeClassElements(a.F,s.elements),o.runClassFinishers(a.F,s.finishers)}function h(){h=function(){return t};var t={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(r,e){["method","field"].forEach(function(i){e.forEach(function(o){o.kind===i&&o.placement==="own"&&this.defineClassElement(r,o)},this)},this)},initializeClassElements:function(r,e){var i=r.prototype;["method","field"].forEach(function(o){e.forEach(function(n){var a=n.placement;if(n.kind===o&&(a==="static"||a==="prototype")){var s=a==="static"?r:i;this.defineClassElement(s,n)}},this)},this)},defineClassElement:function(r,e){var i=e.descriptor;if(e.kind==="field"){var o=e.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:o===void 0?void 0:o.call(r)}}Object.defineProperty(r,e.key,i)},decorateClass:function(r,e){var i=[],o=[],n={static:[],prototype:[],own:[]};if(r.forEach(function(s){this.addElementPlacement(s,n)},this),r.forEach(function(s){if(!p(s))return i.push(s);var c=this.decorateElement(s,n);i.push(c.element),i.push.apply(i,c.extras),o.push.apply(o,c.finishers)},this),!e)return{elements:i,finishers:o};var a=this.decorateConstructor(i,e);return o.push.apply(o,a.finishers),a.finishers=o,a},addElementPlacement:function(r,e,i){var o=e[r.placement];if(!i&&o.indexOf(r.key)!==-1)throw new TypeError("Duplicated element ("+r.key+")");o.push(r.key)},decorateElement:function(r,e){for(var i=[],o=[],n=r.decorators,a=n.length-1;a>=0;a--){var s=e[r.placement];s.splice(s.indexOf(r.key),1);var c=this.fromElementDescriptor(r),l=this.toElementFinisherExtras((0,n[a])(c)||c);r=l.element,this.addElementPlacement(r,e),l.finisher&&o.push(l.finisher);var d=l.extras;if(d){for(var f=0;f<d.length;f++)this.addElementPlacement(d[f],e);i.push.apply(i,d)}}return{element:r,finishers:o,extras:i}},decorateConstructor:function(r,e){for(var i=[],o=e.length-1;o>=0;o--){var n=this.fromClassDescriptor(r),a=this.toClassDescriptor((0,e[o])(n)||n);if(a.finisher!==void 0&&i.push(a.finisher),a.elements!==void 0){r=a.elements;for(var s=0;s<r.length-1;s++)for(var c=s+1;c<r.length;c++)if(r[s].key===r[c].key&&r[s].placement===r[c].placement)throw new TypeError("Duplicated element ("+r[s].key+")")}}return{elements:r,finishers:i}},fromElementDescriptor:function(r){var e={kind:r.kind,key:r.key,placement:r.placement,descriptor:r.descriptor},i={value:"Descriptor",configurable:!0};return Object.defineProperty(e,Symbol.toStringTag,i),r.kind==="field"&&(e.initializer=r.initializer),e},toElementDescriptors:function(r){if(r!==void 0)return _(r).map(function(e){var i=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),i},this)},toElementDescriptor:function(r){var e=String(r.kind);if(e!=="method"&&e!=="field")throw new TypeError(`An element descriptor's .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "`+e+'"');var i=m(r.key),o=String(r.placement);if(o!=="static"&&o!=="prototype"&&o!=="own")throw new TypeError(`An element descriptor's .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "`+o+'"');var n=r.descriptor;this.disallowProperty(r,"elements","An element descriptor");var a={kind:e,key:i,placement:o,descriptor:Object.assign({},n)};return e!=="field"?this.disallowProperty(r,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),a.initializer=r.initializer),a},toElementFinisherExtras:function(r){var e=this.toElementDescriptor(r),i=y(r,"finisher"),o=this.toElementDescriptors(r.extras);return{element:e,finisher:i,extras:o}},fromClassDescriptor:function(r){var e={kind:"class",elements:r.map(this.fromElementDescriptor,this)},i={value:"Descriptor",configurable:!0};return Object.defineProperty(e,Symbol.toStringTag,i),e},toClassDescriptor:function(r){var e=String(r.kind);if(e!=="class")throw new TypeError(`A class descriptor's .kind property must be "class", but a decorator created a class descriptor with .kind "`+e+'"');this.disallowProperty(r,"key","A class descriptor"),this.disallowProperty(r,"placement","A class descriptor"),this.disallowProperty(r,"descriptor","A class descriptor"),this.disallowProperty(r,"initializer","A class descriptor"),this.disallowProperty(r,"extras","A class descriptor");var i=y(r,"finisher"),o=this.toElementDescriptors(r.elements);return{elements:o,finisher:i}},runClassFinishers:function(r,e){for(var i=0;i<e.length;i++){var o=(0,e[i])(r);if(o!==void 0){if(typeof o!="function")throw new TypeError("Finishers must return a constructor.");r=o}}return r},disallowProperty:function(r,e,i){if(r[e]!==void 0)throw new TypeError(i+" can't have a ."+e+" property.")}};return t}function P(t){var r=m(t.key),e;t.kind==="method"?e={value:t.value,writable:!0,configurable:!0,enumerable:!1}:t.kind==="get"?e={get:t.value,configurable:!0,enumerable:!1}:t.kind==="set"?e={set:t.value,configurable:!0,enumerable:!1}:t.kind==="field"&&(e={configurable:!0,writable:!0,enumerable:!0});var i={kind:t.kind==="field"?"field":"method",key:r,placement:t.static?"static":t.kind==="field"?"own":"prototype",descriptor:e};return t.decorators&&(i.decorators=t.decorators),t.kind==="field"&&(i.initializer=t.value),i}function S(t,r){t.descriptor.get!==void 0?r.descriptor.get=t.descriptor.get:r.descriptor.set=t.descriptor.set}function A(t){for(var r=[],e=function(a){return a.kind==="method"&&a.key===o.key&&a.placement===o.placement},i=0;i<t.length;i++){var o=t[i],n;if(o.kind==="method"&&(n=r.find(e)))if(v(o.descriptor)||v(n.descriptor)){if(p(o)||p(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(p(o)){if(p(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}S(o,n)}else r.push(o)}return r}function p(t){return t.decorators&&t.decorators.length}function v(t){return t!==void 0&&!(t.value===void 0&&t.writable===void 0)}function y(t,r){var e=t[r];if(e!==void 0&&typeof e!="function")throw new TypeError("Expected '"+r+"' to be a function");return e}function m(t){var r=C(t,"string");return typeof r=="symbol"?r:String(r)}function C(t,r){if(typeof t!="object"||t===null)return t;var e=t[Symbol.toPrimitive];if(e!==void 0){var i=e.call(t,r||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(t)}function _(t){return I(t)||R(t)||z(t)||x()}function x(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function z(t,r){if(!!t){if(typeof t=="string")return k(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return k(t,r)}}function k(t,r){(r==null||r>t.length)&&(r=t.length);for(var e=0,i=new Array(r);e<r;e++)i[e]=t[e];return i}function R(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function I(t){if(Array.isArray(t))return t}var F=T([E("app-root")],function(t,r){class e extends r{constructor(...o){super(...o);t(this)}}return{F:e,d:[{kind:"field",decorators:[b("main")],key:"main",value:void 0},{kind:"field",static:!0,key:"styles",value(){return[D]}},{kind:"method",key:"render",value:function(){return g`
      <!-- The main content is added / removed dynamically by the router -->
      <main role="main"></main>
    `}},{kind:"method",key:"firstUpdated",value:function(){u(this.main)}}]}},w);export{F as AppRoot};
//# sourceMappingURL=app-root.js.map
