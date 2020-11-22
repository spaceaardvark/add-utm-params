(function () {
    'use strict';

    var n,u,i,t,o,r,f={},e=[],c=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function s(n,l){for(var u in l)n[u]=l[u];return n}function a(n){var l=n.parentNode;l&&l.removeChild(n);}function v(n,l,u){var i,t,o,r=arguments,f={};for(o in l)"key"==o?i=l[o]:"ref"==o?t=l[o]:f[o]=l[o];if(arguments.length>3)for(u=[u],o=3;o<arguments.length;o++)u.push(r[o]);if(null!=u&&(f.children=u),"function"==typeof n&&null!=n.defaultProps)for(o in n.defaultProps)void 0===f[o]&&(f[o]=n.defaultProps[o]);return h(n,f,i,t,null)}function h(l,u,i,t,o){var r={type:l,props:u,key:i,ref:t,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++n.__v:o};return null!=n.vnode&&n.vnode(r),r}function p(n){return n.children}function d(n,l){this.props=n,this.context=l;}function _(n,l){if(null==l)return n.__?_(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?_(n):null}function w(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return w(n)}}function k(l){(!l.__d&&(l.__d=!0)&&u.push(l)&&!g.__r++||t!==n.debounceRendering)&&((t=n.debounceRendering)||i)(g);}function g(){for(var n;g.__r=u.length;)n=u.sort(function(n,l){return n.__v.__b-l.__v.__b}),u=[],n.some(function(n){var l,u,i,t,o,r,f;n.__d&&(r=(o=(l=n).__v).__e,(f=l.__P)&&(u=[],(i=s({},o)).__v=o.__v+1,t=$(f,o,i,l.__n,void 0!==f.ownerSVGElement,null!=o.__h?[r]:null,u,null==r?_(o):r,o.__h),j(u,o),t!=r&&w(o)));});}function m(n,l,u,i,t,o,r,c,s,v){var y,d,w,k,g,m,b,A=i&&i.__k||e,P=A.length;for(s==f&&(s=null!=r?r[0]:P?_(i,0):null),u.__k=[],y=0;y<l.length;y++)if(null!=(k=u.__k[y]=null==(k=l[y])||"boolean"==typeof k?null:"string"==typeof k||"number"==typeof k?h(null,k,null,null,k):Array.isArray(k)?h(p,{children:k},null,null,null):null!=k.__e||null!=k.__c?h(k.type,k.props,k.key,null,k.__v):k)){if(k.__=u,k.__b=u.__b+1,null===(w=A[y])||w&&k.key==w.key&&k.type===w.type)A[y]=void 0;else for(d=0;d<P;d++){if((w=A[d])&&k.key==w.key&&k.type===w.type){A[d]=void 0;break}w=null;}g=$(n,k,w=w||f,t,o,r,c,s,v),(d=k.ref)&&w.ref!=d&&(b||(b=[]),w.ref&&b.push(w.ref,null,k),b.push(d,k.__c||g,k)),null!=g?(null==m&&(m=g),s=x(n,k,w,A,r,g,s),v||"option"!=u.type?"function"==typeof u.type&&(u.__d=s):n.value=""):s&&w.__e==s&&s.parentNode!=n&&(s=_(w));}if(u.__e=m,null!=r&&"function"!=typeof u.type)for(y=r.length;y--;)null!=r[y]&&a(r[y]);for(y=P;y--;)null!=A[y]&&L(A[y],A[y]);if(b)for(y=0;y<b.length;y++)I(b[y],b[++y],b[++y]);}function b(n,l){return l=l||[],null==n||"boolean"==typeof n||(Array.isArray(n)?n.some(function(n){b(n,l);}):l.push(n)),l}function x(n,l,u,i,t,o,r){var f,e,c;if(void 0!==l.__d)f=l.__d,l.__d=void 0;else if(t==u||o!=r||null==o.parentNode)n:if(null==r||r.parentNode!==n)n.appendChild(o),f=null;else {for(e=r,c=0;(e=e.nextSibling)&&c<i.length;c+=2)if(e==o)break n;n.insertBefore(o,r),f=r;}return void 0!==f?f:o.nextSibling}function A(n,l,u,i,t){var o;for(o in u)"children"===o||"key"===o||o in l||C(n,o,null,u[o],i);for(o in l)t&&"function"!=typeof l[o]||"children"===o||"key"===o||"value"===o||"checked"===o||u[o]===l[o]||C(n,o,l[o],u[o],i);}function P(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]=null==u?"":"number"!=typeof u||c.test(l)?u:u+"px";}function C(n,l,u,i,t){var o,r,f;if(t&&"className"==l&&(l="class"),"style"===l)if("string"==typeof u)n.style.cssText=u;else {if("string"==typeof i&&(n.style.cssText=i=""),i)for(l in i)u&&l in u||P(n.style,l,"");if(u)for(l in u)i&&u[l]===i[l]||P(n.style,l,u[l]);}else "o"===l[0]&&"n"===l[1]?(o=l!==(l=l.replace(/Capture$/,"")),(r=l.toLowerCase())in n&&(l=r),l=l.slice(2),n.l||(n.l={}),n.l[l+o]=u,f=o?N:z,u?i||n.addEventListener(l,f,o):n.removeEventListener(l,f,o)):"list"!==l&&"tagName"!==l&&"form"!==l&&"type"!==l&&"size"!==l&&"download"!==l&&"href"!==l&&!t&&l in n?n[l]=null==u?"":u:"function"!=typeof u&&"dangerouslySetInnerHTML"!==l&&(l!==(l=l.replace(/xlink:?/,""))?null==u||!1===u?n.removeAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase()):n.setAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase(),u):null==u||!1===u&&!/^ar/.test(l)?n.removeAttribute(l):n.setAttribute(l,u));}function z(l){this.l[l.type+!1](n.event?n.event(l):l);}function N(l){this.l[l.type+!0](n.event?n.event(l):l);}function T(n,l,u){var i,t;for(i=0;i<n.__k.length;i++)(t=n.__k[i])&&(t.__=n,t.__e&&("function"==typeof t.type&&t.__k.length>1&&T(t,l,u),l=x(u,t,t,n.__k,null,t.__e,l),"function"==typeof n.type&&(n.__d=l)));}function $(l,u,i,t,o,r,f,e,c){var a,v,h,y,_,w,k,g,b,x,A,P=u.type;if(void 0!==u.constructor)return null;null!=i.__h&&(c=i.__h,e=u.__e=i.__e,u.__h=null,r=[e]),(a=n.__b)&&a(u);try{n:if("function"==typeof P){if(g=u.props,b=(a=P.contextType)&&t[a.__c],x=a?b?b.props.value:a.__:t,i.__c?k=(v=u.__c=i.__c).__=v.__E:("prototype"in P&&P.prototype.render?u.__c=v=new P(g,x):(u.__c=v=new d(g,x),v.constructor=P,v.render=M),b&&b.sub(v),v.props=g,v.state||(v.state={}),v.context=x,v.__n=t,h=v.__d=!0,v.__h=[]),null==v.__s&&(v.__s=v.state),null!=P.getDerivedStateFromProps&&(v.__s==v.state&&(v.__s=s({},v.__s)),s(v.__s,P.getDerivedStateFromProps(g,v.__s))),y=v.props,_=v.state,h)null==P.getDerivedStateFromProps&&null!=v.componentWillMount&&v.componentWillMount(),null!=v.componentDidMount&&v.__h.push(v.componentDidMount);else {if(null==P.getDerivedStateFromProps&&g!==y&&null!=v.componentWillReceiveProps&&v.componentWillReceiveProps(g,x),!v.__e&&null!=v.shouldComponentUpdate&&!1===v.shouldComponentUpdate(g,v.__s,x)||u.__v===i.__v){v.props=g,v.state=v.__s,u.__v!==i.__v&&(v.__d=!1),v.__v=u,u.__e=i.__e,u.__k=i.__k,v.__h.length&&f.push(v),T(u,e,l);break n}null!=v.componentWillUpdate&&v.componentWillUpdate(g,v.__s,x),null!=v.componentDidUpdate&&v.__h.push(function(){v.componentDidUpdate(y,_,w);});}v.context=x,v.props=g,v.state=v.__s,(a=n.__r)&&a(u),v.__d=!1,v.__v=u,v.__P=l,a=v.render(v.props,v.state,v.context),v.state=v.__s,null!=v.getChildContext&&(t=s(s({},t),v.getChildContext())),h||null==v.getSnapshotBeforeUpdate||(w=v.getSnapshotBeforeUpdate(y,_)),A=null!=a&&a.type==p&&null==a.key?a.props.children:a,m(l,Array.isArray(A)?A:[A],u,i,t,o,r,f,e,c),v.base=u.__e,u.__h=null,v.__h.length&&f.push(v),k&&(v.__E=v.__=null),v.__e=!1;}else null==r&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=H(i.__e,u,i,t,o,r,f,c);(a=n.diffed)&&a(u);}catch(l){u.__v=null,(c||null!=r)&&(u.__e=e,u.__h=!!c,r[r.indexOf(e)]=null),n.__e(l,u,i);}return u.__e}function j(l,u){n.__c&&n.__c(u,l),l.some(function(u){try{l=u.__h,u.__h=[],l.some(function(n){n.call(u);});}catch(l){n.__e(l,u.__v);}});}function H(n,l,u,i,t,o,r,c){var s,a,v,h,y,p=u.props,d=l.props;if(t="svg"===l.type||t,null!=o)for(s=0;s<o.length;s++)if(null!=(a=o[s])&&((null===l.type?3===a.nodeType:a.localName===l.type)||n==a)){n=a,o[s]=null;break}if(null==n){if(null===l.type)return document.createTextNode(d);n=t?document.createElementNS("http://www.w3.org/2000/svg",l.type):document.createElement(l.type,d.is&&{is:d.is}),o=null,c=!1;}if(null===l.type)p===d||c&&n.data===d||(n.data=d);else {if(null!=o&&(o=e.slice.call(n.childNodes)),v=(p=u.props||f).dangerouslySetInnerHTML,h=d.dangerouslySetInnerHTML,!c){if(null!=o)for(p={},y=0;y<n.attributes.length;y++)p[n.attributes[y].name]=n.attributes[y].value;(h||v)&&(h&&(v&&h.__html==v.__html||h.__html===n.innerHTML)||(n.innerHTML=h&&h.__html||""));}A(n,d,p,t,c),h?l.__k=[]:(s=l.props.children,m(n,Array.isArray(s)?s:[s],l,u,i,"foreignObject"!==l.type&&t,o,r,f,c)),c||("value"in d&&void 0!==(s=d.value)&&(s!==n.value||"progress"===l.type&&!s)&&C(n,"value",s,p.value,!1),"checked"in d&&void 0!==(s=d.checked)&&s!==n.checked&&C(n,"checked",s,p.checked,!1));}return n}function I(l,u,i){try{"function"==typeof l?l(u):l.current=u;}catch(l){n.__e(l,i);}}function L(l,u,i){var t,o,r;if(n.unmount&&n.unmount(l),(t=l.ref)&&(t.current&&t.current!==l.__e||I(t,null,u)),i||"function"==typeof l.type||(i=null!=(o=l.__e)),l.__e=l.__d=void 0,null!=(t=l.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount();}catch(l){n.__e(l,u);}t.base=t.__P=null;}if(t=l.__k)for(r=0;r<t.length;r++)t[r]&&L(t[r],u,i);null!=o&&a(o);}function M(n,l,u){return this.constructor(n,u)}function O(l,u,i){var t,r,c;n.__&&n.__(l,u),r=(t=i===o)?null:i&&i.__k||u.__k,l=v(p,null,[l]),c=[],$(u,(t?u:i||u).__k=l,r||f,f,void 0!==u.ownerSVGElement,i&&!t?[i]:r?null:u.childNodes.length?e.slice.call(u.childNodes):null,c,i||f,t),j(c,l);}function B(n,l){var u={__c:l="__cC"+r++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n,u,i){return this.getChildContext||(u=[],(i={})[l]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(k);},this.sub=function(n){u.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u.splice(u.indexOf(n),1),l&&l.call(n);};}),n.children}};return u.Provider.__=u.Consumer.contextType=u}n={__e:function(n,l){for(var u,i,t,o=l.__h;l=l.__;)if((u=l.__c)&&!u.__)try{if((i=u.constructor)&&null!=i.getDerivedStateFromError&&(u.setState(i.getDerivedStateFromError(n)),t=u.__d),null!=u.componentDidCatch&&(u.componentDidCatch(n),t=u.__d),t)return l.__h=o,u.__E=u}catch(l){n=l;}throw n},__v:0},d.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=s({},this.state),"function"==typeof n&&(n=n(s({},u),this.props)),n&&s(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),k(this));},d.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),k(this));},d.prototype.render=p,u=[],i="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,g.__r=0,o=f,r=0;

    var n$1=function(t,s,r,e){var u;s[0]=0;for(var h=1;h<s.length;h++){var p=s[h++],a=s[h]?(s[0]|=p?1:2,r[s[h++]]):s[++h];3===p?e[0]=a:4===p?e[1]=Object.assign(e[1]||{},a):5===p?(e[1]=e[1]||{})[s[++h]]=a:6===p?e[1][s[++h]]+=a+"":p?(u=t.apply(a,n$1(t,a,r,["",null])),e.push(u),a[0]?s[0]|=2:(s[h-2]=0,s[h]=u)):e.push(a);}return e},t$1=new Map;function htm(s){var r=t$1.get(this);return r||(r=new Map,t$1.set(this,r)),(r=n$1(this,r.get(s)||(r.set(s,r=function(n){for(var t,s,r=1,e="",u="",h=[0],p=function(n){1===r&&(n||(e=e.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?h.push(0,n,e):3===r&&(n||e)?(h.push(3,n,e),r=2):2===r&&"..."===e&&n?h.push(4,n,0):2===r&&e&&!n?h.push(5,0,!0,e):r>=5&&((e||!n&&5===r)&&(h.push(r,0,e,s),r=6),n&&(h.push(r,n,0,s),r=6)),e="";},a=0;a<n.length;a++){a&&(1===r&&p(),p(a));for(var l=0;l<n[a].length;l++)t=n[a][l],1===r?"<"===t?(p(),h=[h],r=3):e+=t:4===r?"--"===e&&">"===t?(r=1,e=""):e=t+e[0]:u?t===u?u="":e+=t:'"'===t||"'"===t?u=t:">"===t?(p(),r=1):r&&("="===t?(r=5,s=e,e=""):"/"===t&&(r<5||">"===n[a][l+1])?(p(),3===r&&(h=h[0]),r=h,(h=h[0]).push(2,0,r),r=0):" "===t||"\t"===t||"\n"===t||"\r"===t?(p(),r=2):e+=t),3===r&&"!--"===e&&(r=4,h=h[0]);}return p(),h}(s)),r),arguments,[])).length>1?r:r[0]}

    const html = htm.bind(v);

    var t$2,u$1,r$1,o$1=0,i$1=[],c$1=n.__b,f$1=n.__r,e$1=n.diffed,a$1=n.__c,v$1=n.unmount;function m$1(t,r){n.__h&&n.__h(u$1,t,o$1||r),o$1=0;var i=u$1.__H||(u$1.__H={__:[],__h:[]});return t>=i.__.length&&i.__.push({}),i.__[t]}function l(n){return o$1=1,p$1(w$1,n)}function p$1(n,r,o){var i=m$1(t$2++,2);return i.t=n,i.__c||(i.__=[o?o(r):w$1(void 0,r),function(n){var t=i.t(i.__[0],n);i.__[0]!==t&&(i.__=[t,i.__[1]],i.__c.setState({}));}],i.__c=u$1),i.__}function y(r,o){var i=m$1(t$2++,3);!n.__s&&k$1(i.__H,o)&&(i.__=r,i.__H=o,u$1.__H.__h.push(i));}function s$1(n){return o$1=5,d$1(function(){return {current:n}},[])}function d$1(n,u){var r=m$1(t$2++,7);return k$1(r.__H,u)&&(r.__=n(),r.__H=u,r.__h=n),r.__}function A$1(n,t){return o$1=8,d$1(function(){return n},t)}function x$1(){i$1.forEach(function(t){if(t.__P)try{t.__H.__h.forEach(g$1),t.__H.__h.forEach(j$1),t.__H.__h=[];}catch(u){t.__H.__h=[],n.__e(u,t.__v);}}),i$1=[];}n.__b=function(n){u$1=null,c$1&&c$1(n);},n.__r=function(n){f$1&&f$1(n),t$2=0;var r=(u$1=n.__c).__H;r&&(r.__h.forEach(g$1),r.__h.forEach(j$1),r.__h=[]);},n.diffed=function(t){e$1&&e$1(t);var o=t.__c;o&&o.__H&&o.__H.__h.length&&(1!==i$1.push(o)&&r$1===n.requestAnimationFrame||((r$1=n.requestAnimationFrame)||function(n){var t,u=function(){clearTimeout(r),b$1&&cancelAnimationFrame(t),setTimeout(n);},r=setTimeout(u,100);b$1&&(t=requestAnimationFrame(u));})(x$1)),u$1=void 0;},n.__c=function(t,u){u.some(function(t){try{t.__h.forEach(g$1),t.__h=t.__h.filter(function(n){return !n.__||j$1(n)});}catch(r){u.some(function(n){n.__h&&(n.__h=[]);}),u=[],n.__e(r,t.__v);}}),a$1&&a$1(t,u);},n.unmount=function(t){v$1&&v$1(t);var u=t.__c;if(u&&u.__H)try{u.__H.__.forEach(g$1);}catch(t){n.__e(t,u.__v);}};var b$1="function"==typeof requestAnimationFrame;function g$1(n){var t=u$1;"function"==typeof n.__c&&n.__c(),u$1=t;}function j$1(n){var t=u$1;n.__c=n.__(),u$1=t;}function k$1(n,t){return !n||n.length!==t.length||t.some(function(t,u){return t!==n[u]})}function w$1(n,t){return "function"==typeof t?t(n):t}

    function S(n,t){for(var e in t)n[e]=t[e];return n}function g$2(n,t){for(var e in n)if("__source"!==e&&!(e in t))return !0;for(var r in t)if("__source"!==r&&n[r]!==t[r])return !0;return !1}function w$2(n){this.props=n;}(w$2.prototype=new d).isPureReactComponent=!0,w$2.prototype.shouldComponentUpdate=function(n,t){return g$2(this.props,n)||g$2(this.state,t)};var R=n.__b;n.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),R&&R(n);};var O$1=n.__e;function L$1(n){return n&&(n.__c&&n.__c.__H&&(n.__c.__H.__.forEach(function(n){"function"==typeof n.__c&&n.__c();}),n.__c.__H=null),(n=S({},n)).__c=null,n.__k=n.__k&&n.__k.map(L$1)),n}function U(n){return n&&(n.__v=null,n.__k=n.__k&&n.__k.map(U)),n}function F(){this.__u=0,this.t=null,this.__b=null;}function M$1(n){var t=n.__.__c;return t&&t.__e&&t.__e(n)}function I$1(){this.u=null,this.o=null;}n.__e=function(n,t,e){if(n.then)for(var r,u=t;u=u.__;)if((r=u.__c)&&r.__c)return null==t.__e&&(t.__e=e.__e,t.__k=e.__k),r.__c(n,t);O$1(n,t,e);},(F.prototype=new d).__c=function(n,t){var e=t.__c,r=this;null==r.t&&(r.t=[]),r.t.push(e);var u=M$1(r.__v),o=!1,i=function(){o||(o=!0,e.componentWillUnmount=e.__c,u?u(c):c());};e.__c=e.componentWillUnmount,e.componentWillUnmount=function(){i(),e.__c&&e.__c();};var c=function(){var n;if(!--r.__u)for(r.__v.__k[0]=U(r.state.__e),r.setState({__e:r.__b=null});n=r.t.pop();)n.forceUpdate();};!0===t.__h||r.__u++||r.setState({__e:r.__b=r.__v.__k[0]}),n.then(i,i);},F.prototype.componentWillUnmount=function(){this.t=[];},F.prototype.render=function(n,t){this.__b&&(this.__v.__k&&(this.__v.__k[0]=L$1(this.__b)),this.__b=null);var e=t.__e&&v(p,null,n.fallback);return e&&(e.__h=null),[v(p,null,t.__e?null:n.children),e]};var T$1=function(n,t,e){if(++e[1]===e[0]&&n.o.delete(t),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.o.size))for(e=n.u;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;n.u=e=e[2];}};(I$1.prototype=new d).__e=function(n){var t=this,e=M$1(t.__v),r=t.o.get(n);return r[0]++,function(u){var o=function(){t.props.revealOrder?(r.push(u),T$1(t,n,r)):u();};e?e(o):o();}},I$1.prototype.render=function(n){this.u=null,this.o=new Map;var t=b(n.children);n.revealOrder&&"b"===n.revealOrder[0]&&t.reverse();for(var e=t.length;e--;)this.o.set(t[e],this.u=[1,0,this.u]);return n.children},I$1.prototype.componentDidUpdate=I$1.prototype.componentDidMount=function(){var n=this;this.o.forEach(function(t,e){T$1(n,e,t);});};var z$1="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,V=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,B$1="undefined"!=typeof Symbol?/fil|che|rad/i:/fil|che|ra/i;d.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(n){Object.defineProperty(d.prototype,n,{configurable:!0,get:function(){return this["UNSAFE_"+n]},set:function(t){Object.defineProperty(this,n,{configurable:!0,writable:!0,value:t});}});});var Y=n.event;function $$1(){}function q(){return this.cancelBubble}function G(){return this.defaultPrevented}n.event=function(n){return Y&&(n=Y(n)),n.persist=$$1,n.isPropagationStopped=q,n.isDefaultPrevented=G,n.nativeEvent=n};var J,K={configurable:!0,get:function(){return this.class}},Q=n.vnode;n.vnode=function(n){var t=n.type,e=n.props,r=e;if("string"==typeof t){for(var u in r={},e){var o=e[u];"defaultValue"===u&&"value"in e&&null==e.value?u="value":"download"===u&&!0===o?o="":/ondoubleclick/i.test(u)?u="ondblclick":/^onchange(textarea|input)/i.test(u+t)&&!B$1.test(e.type)?u="oninput":/^on(Ani|Tra|Tou|BeforeInp)/.test(u)?u=u.toLowerCase():V.test(u)?u=u.replace(/[A-Z0-9]/,"-$&").toLowerCase():null===o&&(o=void 0),r[u]=o;}"select"==t&&r.multiple&&Array.isArray(r.value)&&(r.value=b(e.children).forEach(function(n){n.props.selected=-1!=r.value.indexOf(n.props.value);})),n.props=r;}t&&e.class!=e.className&&(K.enumerable="className"in e,null!=e.className&&(r.class=e.className),Object.defineProperty(r,"className",K)),n.$$typeof=z$1,Q&&Q(n);};var X=n.__r;n.__r=function(n){X&&X(n),J=n.__c;};function rn(n){return !!n&&n.$$typeof===z$1}

    var isHTMLElement = (value) => value instanceof HTMLElement;

    const EVENTS = {
        BLUR: 'blur',
        CHANGE: 'change',
        INPUT: 'input',
    };
    const VALIDATION_MODE = {
        onBlur: 'onBlur',
        onChange: 'onChange',
        onSubmit: 'onSubmit',
        onTouched: 'onTouched',
        all: 'all',
    };
    const SELECT = 'select';
    const UNDEFINED = 'undefined';
    const INPUT_VALIDATION_RULES = {
        max: 'max',
        min: 'min',
        maxLength: 'maxLength',
        minLength: 'minLength',
        pattern: 'pattern',
        required: 'required',
        validate: 'validate',
    };

    function attachEventListeners({ ref }, shouldAttachChangeEvent, handleChange) {
        if (isHTMLElement(ref) && handleChange) {
            ref.addEventListener(shouldAttachChangeEvent ? EVENTS.CHANGE : EVENTS.INPUT, handleChange);
            ref.addEventListener(EVENTS.BLUR, handleChange);
        }
    }

    var isNullOrUndefined = (value) => value == null;

    const isObjectType = (value) => typeof value === 'object';
    var isObject = (value) => !isNullOrUndefined(value) &&
        !Array.isArray(value) &&
        isObjectType(value) &&
        !(value instanceof Date);

    var isKey = (value) => !Array.isArray(value) &&
        (/^\w*$/.test(value) ||
            !/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/.test(value));

    var compact = (value) => value.filter(Boolean);

    var stringToPath = (input) => compact(input
        .replace(/["|']/g, '')
        .replace(/\[/g, '.')
        .replace(/\]/g, '')
        .split('.'));

    function set(object, path, value) {
        let index = -1;
        const tempPath = isKey(path) ? [path] : stringToPath(path);
        const length = tempPath.length;
        const lastIndex = length - 1;
        while (++index < length) {
            const key = tempPath[index];
            let newValue = value;
            if (index !== lastIndex) {
                const objValue = object[key];
                newValue =
                    isObject(objValue) || Array.isArray(objValue)
                        ? objValue
                        : !isNaN(+tempPath[index + 1])
                            ? []
                            : {};
            }
            object[key] = newValue;
            object = object[key];
        }
        return object;
    }

    var transformToNestObject = (data, value = {}) => {
        for (const key in data) {
            !isKey(key) ? set(value, key, data[key]) : (value[key] = data[key]);
        }
        return value;
    };

    var isUndefined = (val) => val === undefined;

    var get = (obj, path, defaultValue) => {
        const result = compact(path.split(/[,[\].]+?/)).reduce((result, key) => (isNullOrUndefined(result) ? result : result[key]), obj);
        return isUndefined(result) || result === obj
            ? isUndefined(obj[path])
                ? defaultValue
                : obj[path]
            : result;
    };

    var focusOnErrorField = (fields, fieldErrors) => {
        for (const key in fields) {
            if (get(fieldErrors, key)) {
                const field = fields[key];
                if (field) {
                    if (field.ref.focus && isUndefined(field.ref.focus())) {
                        break;
                    }
                    else if (field.options) {
                        field.options[0].ref.focus();
                        break;
                    }
                }
            }
        }
    };

    var removeAllEventListeners = (ref, validateWithStateUpdate) => {
        if (isHTMLElement(ref) && ref.removeEventListener) {
            ref.removeEventListener(EVENTS.INPUT, validateWithStateUpdate);
            ref.removeEventListener(EVENTS.CHANGE, validateWithStateUpdate);
            ref.removeEventListener(EVENTS.BLUR, validateWithStateUpdate);
        }
    };

    const defaultReturn = {
        isValid: false,
        value: '',
    };
    var getRadioValue = (options) => Array.isArray(options)
        ? options.reduce((previous, option) => option && option.ref.checked
            ? {
                isValid: true,
                value: option.ref.value,
            }
            : previous, defaultReturn)
        : defaultReturn;

    var getMultipleSelectValue = (options) => [...options]
        .filter(({ selected }) => selected)
        .map(({ value }) => value);

    var isRadioInput = (element) => element.type === 'radio';

    var isFileInput = (element) => element.type === 'file';

    var isCheckBoxInput = (element) => element.type === 'checkbox';

    var isMultipleSelect = (element) => element.type === `${SELECT}-multiple`;

    const defaultResult = {
        value: false,
        isValid: false,
    };
    const validResult = { value: true, isValid: true };
    var getCheckboxValue = (options) => {
        if (Array.isArray(options)) {
            if (options.length > 1) {
                const values = options
                    .filter((option) => option && option.ref.checked)
                    .map(({ ref: { value } }) => value);
                return { value: values, isValid: !!values.length };
            }
            const { checked, value, attributes } = options[0].ref;
            return checked
                ? attributes && !isUndefined(attributes.value)
                    ? isUndefined(value) || value === ''
                        ? validResult
                        : { value: value, isValid: true }
                    : validResult
                : defaultResult;
        }
        return defaultResult;
    };

    function getFieldValue(fieldsRef, name, shallowFieldsStateRef, excludeDisabled) {
        const field = fieldsRef.current[name];
        if (field) {
            const { ref: { value, disabled }, ref, } = field;
            if (disabled && excludeDisabled) {
                return;
            }
            if (isFileInput(ref)) {
                return ref.files;
            }
            if (isRadioInput(ref)) {
                return getRadioValue(field.options).value;
            }
            if (isMultipleSelect(ref)) {
                return getMultipleSelectValue(ref.options);
            }
            if (isCheckBoxInput(ref)) {
                return getCheckboxValue(field.options).value;
            }
            return value;
        }
        if (shallowFieldsStateRef) {
            return get(shallowFieldsStateRef.current, name);
        }
    }

    function isDetached(element) {
        if (!element) {
            return true;
        }
        if (!(element instanceof HTMLElement) ||
            element.nodeType === Node.DOCUMENT_NODE) {
            return false;
        }
        return isDetached(element.parentNode);
    }

    var isEmptyObject = (value) => isObject(value) && !Object.keys(value).length;

    var isBoolean = (value) => typeof value === 'boolean';

    function baseGet(object, updatePath) {
        const path = updatePath.slice(0, -1);
        const length = path.length;
        let index = 0;
        while (index < length) {
            object = isUndefined(object) ? index++ : object[updatePath[index++]];
        }
        return object;
    }
    function unset(object, path) {
        const updatePath = isKey(path) ? [path] : stringToPath(path);
        const childObject = updatePath.length == 1 ? object : baseGet(object, updatePath);
        const key = updatePath[updatePath.length - 1];
        let previousObjRef = undefined;
        if (childObject) {
            delete childObject[key];
        }
        for (let k = 0; k < updatePath.slice(0, -1).length; k++) {
            let index = -1;
            let objectRef = undefined;
            const currentPaths = updatePath.slice(0, -(k + 1));
            const currentPathsLength = currentPaths.length - 1;
            if (k > 0) {
                previousObjRef = object;
            }
            while (++index < currentPaths.length) {
                const item = currentPaths[index];
                objectRef = objectRef ? objectRef[item] : object[item];
                if (currentPathsLength === index &&
                    ((isObject(objectRef) && isEmptyObject(objectRef)) ||
                        (Array.isArray(objectRef) &&
                            !objectRef.filter((data) => (isObject(data) && !isEmptyObject(data)) || isBoolean(data)).length))) {
                    previousObjRef ? delete previousObjRef[item] : delete object[item];
                }
                previousObjRef = objectRef;
            }
        }
        return object;
    }

    const isSameRef = (fieldValue, ref) => fieldValue && fieldValue.ref === ref;
    function findRemovedFieldAndRemoveListener(fieldsRef, handleChange, field, shallowFieldsStateRef, shouldUnregister, forceDelete) {
        const { ref, ref: { name, type }, } = field;
        const fieldRef = fieldsRef.current[name];
        if (!shouldUnregister) {
            const value = getFieldValue(fieldsRef, name, shallowFieldsStateRef);
            !isUndefined(value) && set(shallowFieldsStateRef.current, name, value);
        }
        if (!type) {
            delete fieldsRef.current[name];
            return;
        }
        if ((isRadioInput(ref) || isCheckBoxInput(ref)) && fieldRef) {
            if (Array.isArray(fieldRef.options) && fieldRef.options.length) {
                compact(fieldRef.options).forEach((option, index) => {
                    if ((option.ref &&
                        isDetached(option.ref) &&
                        isSameRef(option, option.ref)) ||
                        forceDelete) {
                        removeAllEventListeners(option.ref, handleChange);
                        unset(fieldRef.options, `[${index}]`);
                    }
                });
                if (fieldRef.options && !compact(fieldRef.options).length) {
                    delete fieldsRef.current[name];
                }
            }
            else {
                delete fieldsRef.current[name];
            }
        }
        else if ((isDetached(ref) && isSameRef(fieldRef, ref)) || forceDelete) {
            removeAllEventListeners(ref, handleChange);
            delete fieldsRef.current[name];
        }
    }

    function setFieldArrayDirtyFields(values, defaultValues, dirtyFields, parentNode, parentName) {
        let index = -1;
        while (++index < values.length) {
            for (const key in values[index]) {
                if (Array.isArray(values[index][key])) {
                    !dirtyFields[index] && (dirtyFields[index] = {});
                    dirtyFields[index][key] = [];
                    setFieldArrayDirtyFields(values[index][key], get(defaultValues[index] || {}, key, []), dirtyFields[index][key], dirtyFields[index], key);
                }
                else {
                    get(defaultValues[index] || {}, key) === values[index][key]
                        ? set(dirtyFields[index] || {}, key)
                        : (dirtyFields[index] = Object.assign(Object.assign({}, dirtyFields[index]), { [key]: true }));
                }
            }
            !dirtyFields.length &&
                parentNode &&
                delete parentNode[parentName];
        }
        return dirtyFields.length ? dirtyFields : undefined;
    }

    var isString = (value) => typeof value === 'string';

    var isPrimitive = (value) => isNullOrUndefined(value) || !isObjectType(value);

    function deepMerge(target, source) {
        if (isPrimitive(target) || isPrimitive(source)) {
            return source;
        }
        for (const key in source) {
            const targetValue = target[key];
            const sourceValue = source[key];
            try {
                target[key] =
                    (isObject(targetValue) && isObject(sourceValue)) ||
                        (Array.isArray(targetValue) && Array.isArray(sourceValue))
                        ? deepMerge(targetValue, sourceValue)
                        : sourceValue;
            }
            catch (_a) { }
        }
        return target;
    }

    var getFieldsValues = (fieldsRef, shallowFieldsState, shouldUnregister, excludeDisabled, search) => {
        const output = {};
        for (const name in fieldsRef.current) {
            if (isUndefined(search) ||
                (isString(search)
                    ? name.startsWith(search)
                    : Array.isArray(search) && search.find((data) => name.startsWith(data)))) {
                output[name] = getFieldValue(fieldsRef, name, undefined, excludeDisabled);
            }
        }
        return shouldUnregister
            ? transformToNestObject(output)
            : deepMerge(shallowFieldsState, transformToNestObject(output));
    };

    function deepEqual(object1, object2, isErrorObject) {
        if (isPrimitive(object1) ||
            isPrimitive(object2) ||
            object1 instanceof Date ||
            object2 instanceof Date) {
            return object1 === object2;
        }
        const keys1 = Object.keys(object1);
        const keys2 = Object.keys(object2);
        if (keys1.length !== keys2.length) {
            return false;
        }
        for (const key of keys1) {
            if (!(isErrorObject && ['ref', 'context'].includes(key))) {
                const val1 = object1[key];
                const val2 = object2[key];
                if ((isObject(val1) || Array.isArray(val1)) &&
                    (isObject(val2) || Array.isArray(val2))
                    ? !deepEqual(val1, val2, isErrorObject)
                    : val1 !== val2) {
                    return false;
                }
            }
        }
        return true;
    }

    function isErrorStateChanged({ errors, name, error, validFields, fieldsWithValidation, }) {
        const isValid = isUndefined(error);
        const previousError = get(errors, name);
        return ((isValid && !!previousError) ||
            (!isValid && !deepEqual(previousError, error, true)) ||
            (isValid && get(fieldsWithValidation, name) && !get(validFields, name)));
    }

    var isRegex = (value) => value instanceof RegExp;

    var getValueAndMessage = (validationData) => isObject(validationData) && !isRegex(validationData)
        ? validationData
        : {
            value: validationData,
            message: '',
        };

    var isFunction = (value) => typeof value === 'function';

    var isMessage = (value) => isString(value) || (isObject(value) && rn(value));

    function getValidateError(result, ref, type = 'validate') {
        if (isMessage(result) || (isBoolean(result) && !result)) {
            return {
                type,
                message: isMessage(result) ? result : '',
                ref,
            };
        }
    }

    var appendErrors = (name, validateAllFieldCriteria, errors, type, message) => {
        if (validateAllFieldCriteria) {
            const error = errors[name];
            return Object.assign(Object.assign({}, error), { types: Object.assign(Object.assign({}, (error && error.types ? error.types : {})), { [type]: message || true }) });
        }
        return {};
    };

    var validateField = async (fieldsRef, validateAllFieldCriteria, { ref, ref: { type, value }, options, required, maxLength, minLength, min, max, pattern, validate, }, shallowFieldsStateRef) => {
        const name = ref.name;
        const error = {};
        const isRadio = isRadioInput(ref);
        const isCheckBox = isCheckBoxInput(ref);
        const isRadioOrCheckbox = isRadio || isCheckBox;
        const isEmpty = value === '';
        const appendErrorsCurry = appendErrors.bind(null, name, validateAllFieldCriteria, error);
        const getMinMaxMessage = (exceedMax, maxLengthMessage, minLengthMessage, maxType = INPUT_VALIDATION_RULES.maxLength, minType = INPUT_VALIDATION_RULES.minLength) => {
            const message = exceedMax ? maxLengthMessage : minLengthMessage;
            error[name] = Object.assign({ type: exceedMax ? maxType : minType, message,
                ref }, (exceedMax
                ? appendErrorsCurry(maxType, message)
                : appendErrorsCurry(minType, message)));
        };
        if (required &&
            ((!isRadio && !isCheckBox && (isEmpty || isNullOrUndefined(value))) ||
                (isBoolean(value) && !value) ||
                (isCheckBox && !getCheckboxValue(options).isValid) ||
                (isRadio && !getRadioValue(options).isValid))) {
            const { value, message } = isMessage(required)
                ? { value: !!required, message: required }
                : getValueAndMessage(required);
            if (value) {
                error[name] = Object.assign({ type: INPUT_VALIDATION_RULES.required, message, ref: isRadioOrCheckbox
                        ? ((fieldsRef.current[name].options || [])[0] || {}).ref
                        : ref }, appendErrorsCurry(INPUT_VALIDATION_RULES.required, message));
                if (!validateAllFieldCriteria) {
                    return error;
                }
            }
        }
        if (!isNullOrUndefined(min) || !isNullOrUndefined(max)) {
            let exceedMax;
            let exceedMin;
            const maxOutput = getValueAndMessage(max);
            const minOutput = getValueAndMessage(min);
            if (type === 'number' || (!type && !isNaN(value))) {
                const valueNumber = ref.valueAsNumber || parseFloat(value);
                if (!isNullOrUndefined(maxOutput.value)) {
                    exceedMax = valueNumber > maxOutput.value;
                }
                if (!isNullOrUndefined(minOutput.value)) {
                    exceedMin = valueNumber < minOutput.value;
                }
            }
            else {
                const valueDate = ref.valueAsDate || new Date(value);
                if (isString(maxOutput.value)) {
                    exceedMax = valueDate > new Date(maxOutput.value);
                }
                if (isString(minOutput.value)) {
                    exceedMin = valueDate < new Date(minOutput.value);
                }
            }
            if (exceedMax || exceedMin) {
                getMinMaxMessage(!!exceedMax, maxOutput.message, minOutput.message, INPUT_VALIDATION_RULES.max, INPUT_VALIDATION_RULES.min);
                if (!validateAllFieldCriteria) {
                    return error;
                }
            }
        }
        if (isString(value) && !isEmpty && (maxLength || minLength)) {
            const maxLengthOutput = getValueAndMessage(maxLength);
            const minLengthOutput = getValueAndMessage(minLength);
            const exceedMax = !isNullOrUndefined(maxLengthOutput.value) &&
                value.length > maxLengthOutput.value;
            const exceedMin = !isNullOrUndefined(minLengthOutput.value) &&
                value.length < minLengthOutput.value;
            if (exceedMax || exceedMin) {
                getMinMaxMessage(exceedMax, maxLengthOutput.message, minLengthOutput.message);
                if (!validateAllFieldCriteria) {
                    return error;
                }
            }
        }
        if (pattern && !isEmpty) {
            const { value: patternValue, message } = getValueAndMessage(pattern);
            if (isRegex(patternValue) && !patternValue.test(value)) {
                error[name] = Object.assign({ type: INPUT_VALIDATION_RULES.pattern, message,
                    ref }, appendErrorsCurry(INPUT_VALIDATION_RULES.pattern, message));
                if (!validateAllFieldCriteria) {
                    return error;
                }
            }
        }
        if (validate) {
            const fieldValue = getFieldValue(fieldsRef, name, shallowFieldsStateRef);
            const validateRef = isRadioOrCheckbox && options ? options[0].ref : ref;
            if (isFunction(validate)) {
                const result = await validate(fieldValue);
                const validateError = getValidateError(result, validateRef);
                if (validateError) {
                    error[name] = Object.assign(Object.assign({}, validateError), appendErrorsCurry(INPUT_VALIDATION_RULES.validate, validateError.message));
                    if (!validateAllFieldCriteria) {
                        return error;
                    }
                }
            }
            else if (isObject(validate)) {
                let validationResult = {};
                for (const [key, validateFunction] of Object.entries(validate)) {
                    if (!isEmptyObject(validationResult) && !validateAllFieldCriteria) {
                        break;
                    }
                    const validateResult = await validateFunction(fieldValue);
                    const validateError = getValidateError(validateResult, validateRef, key);
                    if (validateError) {
                        validationResult = Object.assign(Object.assign({}, validateError), appendErrorsCurry(key, validateError.message));
                        if (validateAllFieldCriteria) {
                            error[name] = validationResult;
                        }
                    }
                }
                if (!isEmptyObject(validationResult)) {
                    error[name] = Object.assign({ ref: validateRef }, validationResult);
                    if (!validateAllFieldCriteria) {
                        return error;
                    }
                }
            }
        }
        return error;
    };

    const getPath = (path, values) => {
        const getInnerPath = (key, value, isObject) => {
            const pathWithIndex = isObject ? `${path}.${key}` : `${path}[${key}]`;
            return isPrimitive(value) ? pathWithIndex : getPath(pathWithIndex, value);
        };
        return Object.entries(values)
            .map(([key, value]) => getInnerPath(key, value, isObject(values)))
            .flat(Infinity);
    };

    var assignWatchFields = (fieldValues, fieldName, watchFields, inputValue, isSingleField) => {
        let value;
        watchFields.add(fieldName);
        if (isEmptyObject(fieldValues)) {
            value = undefined;
        }
        else {
            value = get(fieldValues, fieldName);
            if (isObject(value) || Array.isArray(value)) {
                getPath(fieldName, value).forEach((name) => watchFields.add(name));
            }
        }
        return isUndefined(value)
            ? isSingleField
                ? inputValue
                : get(inputValue, fieldName)
            : value;
    };

    var skipValidation = ({ isOnBlur, isOnChange, isOnTouch, isTouched, isReValidateOnBlur, isReValidateOnChange, isBlurEvent, isSubmitted, isOnAll, }) => {
        if (isOnAll) {
            return false;
        }
        else if (!isSubmitted && isOnTouch) {
            return !(isTouched || isBlurEvent);
        }
        else if (isSubmitted ? isReValidateOnBlur : isOnBlur) {
            return !isBlurEvent;
        }
        else if (isSubmitted ? isReValidateOnChange : isOnChange) {
            return isBlurEvent;
        }
        return true;
    };

    var getFieldArrayParentName = (name) => name.substring(0, name.indexOf('['));

    const isMatchFieldArrayName = (name, searchName) => RegExp(`^${searchName}([|.)\\d+`.replace(/\[/g, '\\[').replace(/\]/g, '\\]')).test(name);
    var isNameInFieldArray = (names, name) => [...names].some((current) => isMatchFieldArrayName(name, current));

    var isSelectInput = (element) => element.type === `${SELECT}-one`;

    function onDomRemove(fieldsRef, removeFieldEventListenerAndRef) {
        const observer = new MutationObserver(() => {
            for (const field of Object.values(fieldsRef.current)) {
                if (field && field.options) {
                    for (const option of field.options) {
                        if (option && option.ref && isDetached(option.ref)) {
                            removeFieldEventListenerAndRef(field);
                        }
                    }
                }
                else if (field && isDetached(field.ref)) {
                    removeFieldEventListenerAndRef(field);
                }
            }
        });
        observer.observe(window.document, {
            childList: true,
            subtree: true,
        });
        return observer;
    }

    function cloneObject(data, isWeb) {
        let copy;
        if (isPrimitive(data) || (isWeb && data instanceof File)) {
            return data;
        }
        if (data instanceof Date) {
            copy = new Date(data.getTime());
            return copy;
        }
        if (data instanceof Set) {
            copy = new Set();
            for (const item of data) {
                copy.add(item);
            }
            return copy;
        }
        if (data instanceof Map) {
            copy = new Map();
            for (const key of data.keys()) {
                copy.set(key, cloneObject(data.get(key), isWeb));
            }
            return copy;
        }
        copy = Array.isArray(data) ? [] : {};
        for (const key in data) {
            copy[key] = cloneObject(data[key], isWeb);
        }
        return copy;
    }

    var modeChecker = (mode) => ({
        isOnSubmit: !mode || mode === VALIDATION_MODE.onSubmit,
        isOnBlur: mode === VALIDATION_MODE.onBlur,
        isOnChange: mode === VALIDATION_MODE.onChange,
        isOnAll: mode === VALIDATION_MODE.all,
        isOnTouch: mode === VALIDATION_MODE.onTouched,
    });

    var isRadioOrCheckboxFunction = (ref) => isRadioInput(ref) || isCheckBoxInput(ref);

    const isWindowUndefined = typeof window === UNDEFINED;
    const isWeb = typeof document !== UNDEFINED &&
        !isWindowUndefined &&
        !isUndefined(window.HTMLElement);
    const isProxyEnabled = isWeb ? 'Proxy' in window : typeof Proxy !== UNDEFINED;
    function useForm({ mode = VALIDATION_MODE.onSubmit, reValidateMode = VALIDATION_MODE.onChange, resolver, context, defaultValues = {}, shouldFocusError = true, shouldUnregister = true, criteriaMode, } = {}) {
        const fieldsRef = s$1({});
        const fieldArrayDefaultValuesRef = s$1({});
        const fieldArrayValuesRef = s$1({});
        const watchFieldsRef = s$1(new Set());
        const useWatchFieldsRef = s$1({});
        const useWatchRenderFunctionsRef = s$1({});
        const fieldsWithValidationRef = s$1({});
        const validFieldsRef = s$1({});
        const defaultValuesRef = s$1(defaultValues);
        const defaultValuesAtRenderRef = s$1({});
        const isUnMount = s$1(false);
        const isWatchAllRef = s$1(false);
        const handleChangeRef = s$1();
        const shallowFieldsStateRef = s$1({});
        const resetFieldArrayFunctionRef = s$1({});
        const contextRef = s$1(context);
        const resolverRef = s$1(resolver);
        const fieldArrayNamesRef = s$1(new Set());
        const modeRef = s$1(modeChecker(mode));
        const { isOnSubmit, isOnTouch } = modeRef.current;
        const isValidateAllFieldCriteria = criteriaMode === VALIDATION_MODE.all;
        const [formState, setFormState] = l({
            isDirty: false,
            dirtyFields: {},
            isSubmitted: false,
            submitCount: 0,
            touched: {},
            isSubmitting: false,
            isSubmitSuccessful: false,
            isValid: !isOnSubmit,
            errors: {},
        });
        const readFormStateRef = s$1({
            isDirty: !isProxyEnabled,
            dirtyFields: !isProxyEnabled,
            touched: !isProxyEnabled || isOnTouch,
            isSubmitting: !isProxyEnabled,
            isValid: !isProxyEnabled,
        });
        const formStateRef = s$1(formState);
        const observerRef = s$1();
        const { isOnBlur: isReValidateOnBlur, isOnChange: isReValidateOnChange, } = s$1(modeChecker(reValidateMode)).current;
        contextRef.current = context;
        resolverRef.current = resolver;
        formStateRef.current = formState;
        shallowFieldsStateRef.current = shouldUnregister
            ? {}
            : isEmptyObject(shallowFieldsStateRef.current)
                ? cloneObject(defaultValues, isWeb)
                : shallowFieldsStateRef.current;
        const updateFormState = A$1((state = {}) => !isUnMount.current &&
            setFormState(Object.assign(Object.assign({}, formStateRef.current), state)), []);
        const shouldRenderBaseOnError = A$1((name, error, shouldRender = false, state = {}, isValid) => {
            let shouldReRender = shouldRender ||
                isErrorStateChanged({
                    errors: formStateRef.current.errors,
                    error,
                    name,
                    validFields: validFieldsRef.current,
                    fieldsWithValidation: fieldsWithValidationRef.current,
                });
            const previousError = get(formStateRef.current.errors, name);
            if (error) {
                unset(validFieldsRef.current, name);
                shouldReRender =
                    shouldReRender ||
                        !previousError ||
                        !deepEqual(previousError, error, true);
                set(formStateRef.current.errors, name, error);
            }
            else {
                if (get(fieldsWithValidationRef.current, name) || resolverRef.current) {
                    set(validFieldsRef.current, name, true);
                    shouldReRender = shouldReRender || previousError;
                }
                unset(formStateRef.current.errors, name);
            }
            if ((shouldReRender && !isNullOrUndefined(shouldRender)) ||
                !isEmptyObject(state)) {
                updateFormState(Object.assign(Object.assign(Object.assign({}, state), { errors: formStateRef.current.errors }), (resolverRef.current ? { isValid: !!isValid } : {})));
            }
        }, []);
        const setFieldValue = A$1((name, rawValue) => {
            const { ref, options } = fieldsRef.current[name];
            const value = isWeb && isHTMLElement(ref) && isNullOrUndefined(rawValue)
                ? ''
                : rawValue;
            if (isRadioInput(ref) && options) {
                options.forEach(({ ref: radioRef }) => (radioRef.checked = radioRef.value === value));
            }
            else if (isFileInput(ref) && !isString(value)) {
                ref.files = value;
            }
            else if (isMultipleSelect(ref)) {
                [...ref.options].forEach((selectRef) => (selectRef.selected = value.includes(selectRef.value)));
            }
            else if (isCheckBoxInput(ref) && options) {
                options.length > 1
                    ? options.forEach(({ ref: checkboxRef }) => (checkboxRef.checked = Array.isArray(value)
                        ? !!value.find((data) => data === checkboxRef.value)
                        : value === checkboxRef.value))
                    : (options[0].ref.checked = !!value);
            }
            else {
                ref.value = value;
            }
        }, []);
        const isFormDirty = A$1((name, data) => {
            if (readFormStateRef.current.isDirty ||
                readFormStateRef.current.dirtyFields) {
                const formValues = getValues();
                name && data && set(formValues, name, data);
                return !deepEqual(formValues, isEmptyObject(defaultValuesRef.current)
                    ? defaultValuesAtRenderRef.current
                    : defaultValuesRef.current);
            }
            return false;
        }, []);
        const updateAndGetDirtyState = A$1((name, shouldRender = true) => {
            if (readFormStateRef.current.isDirty ||
                readFormStateRef.current.dirtyFields) {
                const isFieldDirty = !deepEqual(get(defaultValuesAtRenderRef.current, name), getFieldValue(fieldsRef, name, shallowFieldsStateRef));
                const isDirtyFieldExist = get(formStateRef.current.dirtyFields, name);
                const previousIsDirty = formStateRef.current.isDirty;
                isFieldDirty
                    ? set(formStateRef.current.dirtyFields, name, true)
                    : unset(formStateRef.current.dirtyFields, name);
                const state = {
                    isDirty: isFormDirty(),
                    dirtyFields: formStateRef.current.dirtyFields,
                };
                const isChanged = (readFormStateRef.current.isDirty &&
                    previousIsDirty !== state.isDirty) ||
                    (readFormStateRef.current.dirtyFields &&
                        isDirtyFieldExist !== get(formStateRef.current.dirtyFields, name));
                if (isChanged && shouldRender) {
                    formStateRef.current = Object.assign(Object.assign({}, formStateRef.current), state);
                    updateFormState(Object.assign({}, state));
                }
                return isChanged ? state : {};
            }
            return {};
        }, []);
        const executeValidation = A$1(async (name, skipReRender) => {
            if (fieldsRef.current[name]) {
                const error = (await validateField(fieldsRef, isValidateAllFieldCriteria, fieldsRef.current[name], shallowFieldsStateRef))[name];
                shouldRenderBaseOnError(name, error, skipReRender);
                return isUndefined(error);
            }
            return false;
        }, [shouldRenderBaseOnError, isValidateAllFieldCriteria]);
        const executeSchemaOrResolverValidation = A$1(async (names) => {
            const { errors } = await resolverRef.current(getValues(), contextRef.current, isValidateAllFieldCriteria);
            const previousFormIsValid = formStateRef.current.isValid;
            if (Array.isArray(names)) {
                const isInputsValid = names
                    .map((name) => {
                    const error = get(errors, name);
                    error
                        ? set(formStateRef.current.errors, name, error)
                        : unset(formStateRef.current.errors, name);
                    return !error;
                })
                    .every(Boolean);
                updateFormState({
                    isValid: isEmptyObject(errors),
                    errors: formStateRef.current.errors,
                });
                return isInputsValid;
            }
            else {
                const error = get(errors, names);
                shouldRenderBaseOnError(names, error, previousFormIsValid !== isEmptyObject(errors), {}, isEmptyObject(errors));
                return !error;
            }
        }, [shouldRenderBaseOnError, isValidateAllFieldCriteria]);
        const trigger = A$1(async (name) => {
            const fields = name || Object.keys(fieldsRef.current);
            if (resolverRef.current) {
                return executeSchemaOrResolverValidation(fields);
            }
            if (Array.isArray(fields)) {
                !name && (formStateRef.current.errors = {});
                const result = await Promise.all(fields.map(async (data) => await executeValidation(data, null)));
                updateFormState();
                return result.every(Boolean);
            }
            return await executeValidation(fields, readFormStateRef.current.isValid);
        }, [executeSchemaOrResolverValidation, executeValidation]);
        const setInternalValues = A$1((name, value, { shouldDirty, shouldValidate }) => {
            const data = {};
            set(data, name, value);
            for (const fieldName of getPath(name, value)) {
                if (fieldsRef.current[fieldName]) {
                    setFieldValue(fieldName, get(data, fieldName));
                    shouldDirty && updateAndGetDirtyState(fieldName);
                    shouldValidate && trigger(fieldName);
                }
            }
        }, [trigger, setFieldValue, updateAndGetDirtyState]);
        const setInternalValue = A$1((name, value, config = {}) => {
            if (fieldsRef.current[name]) {
                setFieldValue(name, value);
                config.shouldDirty && updateAndGetDirtyState(name);
            }
            else if (!isPrimitive(value)) {
                setInternalValues(name, value, config);
                if (fieldArrayNamesRef.current.has(name)) {
                    fieldArrayDefaultValuesRef.current[name] = value;
                    resetFieldArrayFunctionRef.current[name]({
                        [name]: value,
                    });
                    if ((readFormStateRef.current.isDirty ||
                        readFormStateRef.current.dirtyFields) &&
                        config.shouldDirty) {
                        set(formStateRef.current.dirtyFields, name, setFieldArrayDirtyFields(value, get(defaultValuesRef.current, name, []), get(formStateRef.current.dirtyFields, name, [])));
                        updateFormState({
                            isDirty: !deepEqual(Object.assign(Object.assign({}, getValues()), { [name]: value }), defaultValuesRef.current),
                            dirtyFields: formStateRef.current.dirtyFields,
                        });
                    }
                }
            }
            !shouldUnregister && set(shallowFieldsStateRef.current, name, value);
        }, [updateAndGetDirtyState, setFieldValue, setInternalValues]);
        const isFieldWatched = (name) => isWatchAllRef.current ||
            watchFieldsRef.current.has(name) ||
            watchFieldsRef.current.has((name.match(/\w+/) || [])[0]);
        const renderWatchedInputs = (name, found = true) => {
            if (!isEmptyObject(useWatchFieldsRef.current)) {
                for (const key in useWatchFieldsRef.current) {
                    if (!name ||
                        !useWatchFieldsRef.current[key].size ||
                        useWatchFieldsRef.current[key].has(name) ||
                        useWatchFieldsRef.current[key].has(getFieldArrayParentName(name))) {
                        useWatchRenderFunctionsRef.current[key]();
                        found = false;
                    }
                }
            }
            return found;
        };
        function setValue(name, value, config) {
            setInternalValue(name, value, config);
            isFieldWatched(name) && updateFormState();
            renderWatchedInputs(name);
            (config || {}).shouldValidate && trigger(name);
        }
        handleChangeRef.current = handleChangeRef.current
            ? handleChangeRef.current
            : async ({ type, target }) => {
                let name = target.name;
                const field = fieldsRef.current[name];
                let error;
                let isValid;
                if (field) {
                    const isBlurEvent = type === EVENTS.BLUR;
                    const shouldSkipValidation = skipValidation(Object.assign({ isBlurEvent,
                        isReValidateOnChange,
                        isReValidateOnBlur, isTouched: !!get(formStateRef.current.touched, name), isSubmitted: formStateRef.current.isSubmitted }, modeRef.current));
                    let state = updateAndGetDirtyState(name, false);
                    let shouldRender = !isEmptyObject(state) || isFieldWatched(name);
                    if (isBlurEvent &&
                        !get(formStateRef.current.touched, name) &&
                        readFormStateRef.current.touched) {
                        set(formStateRef.current.touched, name, true);
                        state = Object.assign(Object.assign({}, state), { touched: formStateRef.current.touched });
                    }
                    if (shouldSkipValidation) {
                        renderWatchedInputs(name);
                        return ((!isEmptyObject(state) ||
                            (shouldRender && isEmptyObject(state))) &&
                            updateFormState(state));
                    }
                    if (resolverRef.current) {
                        const { errors } = await resolverRef.current(getValues(), contextRef.current, isValidateAllFieldCriteria);
                        const previousFormIsValid = formStateRef.current.isValid;
                        error = get(errors, name);
                        if (isCheckBoxInput(target) &&
                            !error &&
                            resolverRef.current) {
                            const parentNodeName = name.substring(0, name.lastIndexOf('.') > name.lastIndexOf('[')
                                ? name.lastIndexOf('.')
                                : name.lastIndexOf('['));
                            const currentError = get(errors, parentNodeName, {});
                            currentError.type &&
                                currentError.message &&
                                (error = currentError);
                            if (parentNodeName &&
                                (currentError ||
                                    get(formStateRef.current.errors, parentNodeName))) {
                                name = parentNodeName;
                            }
                        }
                        isValid = isEmptyObject(errors);
                        if (previousFormIsValid !== isValid) {
                            shouldRender = true;
                        }
                    }
                    else {
                        error = (await validateField(fieldsRef, isValidateAllFieldCriteria, field, shallowFieldsStateRef))[name];
                    }
                    renderWatchedInputs(name);
                    shouldRenderBaseOnError(name, error, shouldRender, state, isValid);
                }
            };
        function setFieldArrayDefaultValues(data) {
            if (!shouldUnregister) {
                let copy = cloneObject(data, isWeb);
                for (const value of fieldArrayNamesRef.current) {
                    if (isKey(value) && !copy[value]) {
                        copy = Object.assign(Object.assign({}, copy), { [value]: [] });
                    }
                }
                return copy;
            }
            return data;
        }
        function getValues(payload) {
            if (isString(payload)) {
                return getFieldValue(fieldsRef, payload, shallowFieldsStateRef);
            }
            if (Array.isArray(payload)) {
                const data = {};
                for (const name of payload) {
                    set(data, name, getFieldValue(fieldsRef, name, shallowFieldsStateRef));
                }
                return data;
            }
            return setFieldArrayDefaultValues(getFieldsValues(fieldsRef, cloneObject(shallowFieldsStateRef.current, isWeb), shouldUnregister));
        }
        const validateResolver = A$1(async (values = {}) => {
            const { errors } = await resolverRef.current(Object.assign(Object.assign(Object.assign({}, defaultValuesRef.current), getValues()), values), contextRef.current, isValidateAllFieldCriteria);
            const isValid = isEmptyObject(errors);
            formStateRef.current.isValid !== isValid &&
                updateFormState({
                    isValid,
                });
        }, [isValidateAllFieldCriteria]);
        const removeFieldEventListener = A$1((field, forceDelete) => findRemovedFieldAndRemoveListener(fieldsRef, handleChangeRef.current, field, shallowFieldsStateRef, shouldUnregister, forceDelete), [shouldUnregister]);
        const updateWatchedValue = A$1((name) => {
            if (isWatchAllRef.current) {
                updateFormState();
            }
            else if (watchFieldsRef) {
                for (const watchField of watchFieldsRef.current) {
                    if (watchField.startsWith(name)) {
                        updateFormState();
                        break;
                    }
                }
                renderWatchedInputs(name);
            }
        }, []);
        const removeFieldEventListenerAndRef = A$1((field, forceDelete) => {
            if (field) {
                removeFieldEventListener(field, forceDelete);
                if (shouldUnregister && !compact(field.options || []).length) {
                    unset(defaultValuesAtRenderRef.current, field.ref.name);
                    unset(validFieldsRef.current, field.ref.name);
                    unset(fieldsWithValidationRef.current, field.ref.name);
                    unset(formStateRef.current.errors, field.ref.name);
                    set(formStateRef.current.dirtyFields, field.ref.name, true);
                    updateFormState({
                        errors: formStateRef.current.errors,
                        isDirty: isFormDirty(),
                        dirtyFields: formStateRef.current.dirtyFields,
                    });
                    readFormStateRef.current.isValid &&
                        resolverRef.current &&
                        validateResolver();
                    updateWatchedValue(field.ref.name);
                }
            }
        }, [validateResolver, removeFieldEventListener]);
        function clearErrors(name) {
            name &&
                (Array.isArray(name) ? name : [name]).forEach((inputName) => fieldsRef.current[inputName] && isKey(inputName)
                    ? delete formStateRef.current.errors[inputName]
                    : unset(formStateRef.current.errors, inputName));
            updateFormState({
                errors: name ? formStateRef.current.errors : {},
            });
        }
        function setError(name, error) {
            const ref = (fieldsRef.current[name] || {}).ref;
            set(formStateRef.current.errors, name, Object.assign(Object.assign({}, error), { ref }));
            updateFormState({
                isValid: false,
                errors: formStateRef.current.errors,
            });
            error.shouldFocus && ref && ref.focus && ref.focus();
        }
        const watchInternal = A$1((fieldNames, defaultValue, watchId) => {
            const watchFields = watchId
                ? useWatchFieldsRef.current[watchId]
                : watchFieldsRef.current;
            const combinedDefaultValues = isUndefined(defaultValue)
                ? defaultValuesRef.current
                : defaultValue;
            let fieldValues = getFieldsValues(fieldsRef, cloneObject(shallowFieldsStateRef.current, isWeb), shouldUnregister, false, fieldNames);
            if (isString(fieldNames)) {
                if (fieldArrayNamesRef.current.has(fieldNames)) {
                    const fieldArrayValue = get(fieldArrayValuesRef.current, fieldNames, []);
                    fieldValues =
                        fieldArrayValue.length !==
                            compact(get(fieldValues, fieldNames, [])).length ||
                            !fieldArrayValue.length
                            ? fieldArrayValuesRef.current
                            : fieldValues;
                }
                return assignWatchFields(fieldValues, fieldNames, watchFields, isUndefined(defaultValue)
                    ? get(combinedDefaultValues, fieldNames)
                    : defaultValue, true);
            }
            if (Array.isArray(fieldNames)) {
                return fieldNames.reduce((previous, name) => (Object.assign(Object.assign({}, previous), { [name]: assignWatchFields(fieldValues, name, watchFields, combinedDefaultValues) })), {});
            }
            isWatchAllRef.current = isUndefined(watchId);
            return transformToNestObject((!isEmptyObject(fieldValues) && fieldValues) ||
                combinedDefaultValues);
        }, []);
        function watch(fieldNames, defaultValue) {
            return watchInternal(fieldNames, defaultValue);
        }
        function unregister(name) {
            for (const fieldName of Array.isArray(name) ? name : [name]) {
                removeFieldEventListenerAndRef(fieldsRef.current[fieldName], true);
            }
        }
        function registerFieldRef(ref, validateOptions = {}) {
            if (process.env.NODE_ENV !== 'production') {
                if (!ref.name) {
                    return console.warn('📋 Field is missing `name` attribute', ref, `https://react-hook-form.com/api#useForm`);
                }
                if (fieldArrayNamesRef.current.has(ref.name.split(/\[\d+\]$/)[0]) &&
                    !RegExp(`^${ref.name.split(/\[\d+\]$/)[0]}[\\d+].\\w+`
                        .replace(/\[/g, '\\[')
                        .replace(/\]/g, '\\]')).test(ref.name)) {
                    return console.warn('📋 `name` prop should be in object shape: name="test[index].name"', ref, 'https://react-hook-form.com/api#useFieldArray');
                }
            }
            const { name, type, value } = ref;
            const fieldRefAndValidationOptions = Object.assign({ ref }, validateOptions);
            const fields = fieldsRef.current;
            const isRadioOrCheckbox = isRadioOrCheckboxFunction(ref);
            const isFieldArray = isNameInFieldArray(fieldArrayNamesRef.current, name);
            const compareRef = (currentRef) => isWeb && (!isHTMLElement(ref) || currentRef === ref);
            let field = fields[name];
            let isEmptyDefaultValue = true;
            let defaultValue;
            if (field &&
                (isRadioOrCheckbox
                    ? Array.isArray(field.options) &&
                        compact(field.options).find((option) => {
                            return value === option.ref.value && compareRef(option.ref);
                        })
                    : compareRef(field.ref))) {
                fields[name] = Object.assign(Object.assign({}, field), validateOptions);
                return;
            }
            if (type) {
                field = isRadioOrCheckbox
                    ? Object.assign({ options: [
                            ...compact((field && field.options) || []),
                            {
                                ref,
                            },
                        ], ref: { type, name } }, validateOptions) : Object.assign({}, fieldRefAndValidationOptions);
            }
            else {
                field = fieldRefAndValidationOptions;
            }
            fields[name] = field;
            const isEmptyUnmountFields = isUndefined(get(shallowFieldsStateRef.current, name));
            if (!isEmptyObject(defaultValuesRef.current) || !isEmptyUnmountFields) {
                defaultValue = get(isEmptyUnmountFields
                    ? defaultValuesRef.current
                    : shallowFieldsStateRef.current, name);
                isEmptyDefaultValue = isUndefined(defaultValue);
                if (!isEmptyDefaultValue && !isFieldArray) {
                    setFieldValue(name, defaultValue);
                }
            }
            if (!isEmptyObject(validateOptions)) {
                set(fieldsWithValidationRef.current, name, true);
                if (!isOnSubmit && readFormStateRef.current.isValid) {
                    validateField(fieldsRef, isValidateAllFieldCriteria, field, shallowFieldsStateRef).then((error) => {
                        const previousFormIsValid = formStateRef.current.isValid;
                        isEmptyObject(error)
                            ? set(validFieldsRef.current, name, true)
                            : unset(validFieldsRef.current, name);
                        if (previousFormIsValid !== isEmptyObject(error)) {
                            updateFormState();
                        }
                    });
                }
            }
            if (!defaultValuesAtRenderRef.current[name] &&
                !(isFieldArray && isEmptyDefaultValue)) {
                const fieldValue = getFieldValue(fieldsRef, name, shallowFieldsStateRef);
                set(defaultValuesAtRenderRef.current, name, isEmptyDefaultValue
                    ? isObject(fieldValue)
                        ? Object.assign({}, fieldValue) : fieldValue
                    : defaultValue);
                !isFieldArray && unset(formStateRef.current.dirtyFields, name);
            }
            if (type) {
                attachEventListeners(isRadioOrCheckbox && field.options
                    ? field.options[field.options.length - 1]
                    : field, isRadioOrCheckbox || isSelectInput(ref), handleChangeRef.current);
            }
        }
        function register(refOrValidationOptions, rules) {
            if (!isWindowUndefined) {
                if (isString(refOrValidationOptions)) {
                    registerFieldRef({ name: refOrValidationOptions }, rules);
                }
                else if (isObject(refOrValidationOptions) &&
                    'name' in refOrValidationOptions) {
                    registerFieldRef(refOrValidationOptions, rules);
                }
                else {
                    return (ref) => ref && registerFieldRef(ref, refOrValidationOptions);
                }
            }
        }
        const handleSubmit = A$1((onValid, onInvalid) => async (e) => {
            if (e && e.preventDefault) {
                e.preventDefault();
                e.persist();
            }
            let fieldErrors = {};
            let fieldValues = setFieldArrayDefaultValues(getFieldsValues(fieldsRef, cloneObject(shallowFieldsStateRef.current, isWeb), shouldUnregister, true));
            readFormStateRef.current.isSubmitting &&
                updateFormState({
                    isSubmitting: true,
                });
            try {
                if (resolverRef.current) {
                    const { errors, values } = await resolverRef.current(fieldValues, contextRef.current, isValidateAllFieldCriteria);
                    formStateRef.current.errors = fieldErrors = errors;
                    fieldValues = values;
                }
                else {
                    for (const field of Object.values(fieldsRef.current)) {
                        if (field) {
                            const { ref: { name }, } = field;
                            const fieldError = await validateField(fieldsRef, isValidateAllFieldCriteria, field, shallowFieldsStateRef);
                            if (fieldError[name]) {
                                set(fieldErrors, name, fieldError[name]);
                                unset(validFieldsRef.current, name);
                            }
                            else if (get(fieldsWithValidationRef.current, name)) {
                                unset(formStateRef.current.errors, name);
                                set(validFieldsRef.current, name, true);
                            }
                        }
                    }
                }
                if (isEmptyObject(fieldErrors) &&
                    Object.keys(formStateRef.current.errors).every((name) => name in fieldsRef.current)) {
                    updateFormState({
                        errors: {},
                        isSubmitting: true,
                    });
                    await onValid(fieldValues, e);
                }
                else {
                    formStateRef.current.errors = Object.assign(Object.assign({}, formStateRef.current.errors), fieldErrors);
                    onInvalid && (await onInvalid(formStateRef.current.errors, e));
                    shouldFocusError &&
                        focusOnErrorField(fieldsRef.current, formStateRef.current.errors);
                }
            }
            finally {
                formStateRef.current.isSubmitting = false;
                updateFormState({
                    isSubmitted: true,
                    isSubmitting: false,
                    isSubmitSuccessful: isEmptyObject(formStateRef.current.errors),
                    errors: formStateRef.current.errors,
                    submitCount: formStateRef.current.submitCount + 1,
                });
            }
        }, [shouldFocusError, isValidateAllFieldCriteria]);
        const resetRefs = ({ errors, isDirty, isSubmitted, touched, isValid, submitCount, dirtyFields, }) => {
            if (!isValid) {
                validFieldsRef.current = {};
                fieldsWithValidationRef.current = {};
            }
            defaultValuesAtRenderRef.current = {};
            fieldArrayDefaultValuesRef.current = {};
            watchFieldsRef.current = new Set();
            isWatchAllRef.current = false;
            updateFormState({
                submitCount: submitCount ? formStateRef.current.submitCount : 0,
                isDirty: isDirty ? formStateRef.current.isDirty : false,
                isSubmitted: isSubmitted ? formStateRef.current.isSubmitted : false,
                isValid: isValid ? formStateRef.current.isValid : false,
                dirtyFields: dirtyFields ? formStateRef.current.dirtyFields : {},
                touched: touched ? formStateRef.current.touched : {},
                errors: errors ? formStateRef.current.errors : {},
                isSubmitting: false,
                isSubmitSuccessful: false,
            });
        };
        const reset = (values, omitResetState = {}) => {
            if (isWeb) {
                for (const field of Object.values(fieldsRef.current)) {
                    if (field) {
                        const { ref, options } = field;
                        const inputRef = isRadioOrCheckboxFunction(ref) && Array.isArray(options)
                            ? options[0].ref
                            : ref;
                        if (isHTMLElement(inputRef)) {
                            try {
                                inputRef.closest('form').reset();
                                break;
                            }
                            catch (_a) { }
                        }
                    }
                }
            }
            fieldsRef.current = {};
            defaultValuesRef.current = cloneObject(values || defaultValuesRef.current, isWeb);
            values && renderWatchedInputs('');
            Object.values(resetFieldArrayFunctionRef.current).forEach((resetFieldArray) => isFunction(resetFieldArray) && resetFieldArray());
            shallowFieldsStateRef.current = shouldUnregister
                ? {}
                : cloneObject(values, isWeb) || {};
            resetRefs(omitResetState);
        };
        y(() => {
            resolver && readFormStateRef.current.isValid && validateResolver();
            observerRef.current =
                observerRef.current || !isWeb
                    ? observerRef.current
                    : onDomRemove(fieldsRef, removeFieldEventListenerAndRef);
        }, [removeFieldEventListenerAndRef, defaultValuesRef.current]);
        y(() => () => {
            isUnMount.current = true;
            observerRef.current && observerRef.current.disconnect();
            Object.values(fieldsRef.current).forEach((field) => removeFieldEventListenerAndRef(field, true));
        }, []);
        if (!resolver && readFormStateRef.current.isValid) {
            formState.isValid =
                deepEqual(validFieldsRef.current, fieldsWithValidationRef.current) &&
                    isEmptyObject(formStateRef.current.errors);
        }
        const commonProps = {
            trigger,
            setValue: A$1(setValue, [setInternalValue, trigger]),
            getValues: A$1(getValues, []),
            register: A$1(register, [defaultValuesRef.current]),
            unregister: A$1(unregister, []),
        };
        const control = d$1(() => (Object.assign({ isFormDirty,
            updateWatchedValue,
            shouldUnregister,
            updateFormState,
            removeFieldEventListener,
            watchInternal, mode: modeRef.current, reValidateMode: {
                isReValidateOnBlur,
                isReValidateOnChange,
            }, validateResolver: resolver ? validateResolver : undefined, fieldsRef,
            resetFieldArrayFunctionRef,
            useWatchFieldsRef,
            useWatchRenderFunctionsRef,
            fieldArrayDefaultValuesRef,
            validFieldsRef,
            fieldsWithValidationRef,
            fieldArrayNamesRef,
            readFormStateRef,
            formStateRef,
            defaultValuesRef,
            shallowFieldsStateRef,
            fieldArrayValuesRef }, commonProps)), [
            defaultValuesRef.current,
            updateWatchedValue,
            shouldUnregister,
            removeFieldEventListener,
            watchInternal,
        ]);
        return Object.assign({ watch,
            control, formState: isProxyEnabled
                ? new Proxy(formState, {
                    get: (obj, prop) => {
                        if (process.env.NODE_ENV !== 'production') {
                            if (prop === 'isValid' && isOnSubmit) {
                                console.warn('📋 `formState.isValid` is applicable with `onTouched`, `onChange` or `onBlur` mode. https://react-hook-form.com/api#formState');
                            }
                        }
                        if (prop in obj) {
                            readFormStateRef.current[prop] = true;
                            return obj[prop];
                        }
                        return undefined;
                    },
                })
                : formState, handleSubmit, reset: A$1(reset, []), clearErrors: A$1(clearErrors, []), setError: A$1(setError, []), errors: formState.errors }, commonProps);
    }

    const FormContext = B(null);
    FormContext.displayName = 'RHFContext';

    const TextInput = ({ name, label, register }) => {
      let id;

      id = `id_${name}`;

      return html`
    <label for=${id}>${label}</label>
    <input
      type="text"
      name=${name}
      id=${id}
      ref=${register}
     />
  `;
    };

    const Campaign = ({ register }) => 
      html`
    <div class="form-group">
      <${TextInput}
        name="campaign"
        label=${html`<i class="fas fa-lg fa-fw fa-bullhorn"></i> Campaign`}
        placeholder="summer-sale"
        register=${register}
      />
      <p class="help">Use this to group URL links across multiple mediums and associate
        them with a marketing campaign or ad buy.</p>
    </div>
  `;

    const Content = ({ register }) => 
      html`
    <div class="form-group">
      <${TextInput}
        name="content"
        label=${html`<i class="fas fa-lg fa-fw fa-map-marker-alt"></i> Content`}
        placeholder="banner-ad or in-text-ad or email-bottom-ad or ..."
        register=${register}
      />
      <p class="help">Use this to be more specific about exactly where and how the
        URL link was made available to readers, e.g. differentiate between the top and
        bottom ads in an email newsletter with <em>email-top</em> or <em>email-bottom</em>.</p>
    </div>
  `;

    const FullURL = ({ value }) =>
      html`
    <div class="form-group">
      <label for="id_fullURL"><i class="fas fa-lg fa-fw fa-link"></i> Final URL</label>
      <textarea
        name="fullURL"
        id="id_fullURL"
        readonly
        rows="3"
      >${value}</textarea>
      <p class="help">This is the complete URL with UTM parameters.</p>
    </div>
  `;

    const Medium = ({ register }) => 
      html`
    <div class="form-group">
      <${TextInput}
        name="medium"
        label=${html`<i class="fas fa-lg fa-fw fa-truck"></i> Medium`}
        placeholder="website or email or social or ..."
        register=${register}
      />
      <p class="help">The marketing medium used to deliver the URL link, e.g., <em>website</em>, <em>email</em>, <em>social</em>, <em>facebook</em>, or <em>linkedin</em>.</p>
    </div>
  `;

    const Source = ({ register }) => 
      html`
    <div class="form-group">
      <${TextInput}
        name="source"
        label=${html`<i class="far fa-lg fa-fw fa-newspaper"></i> Source`}
        register=${register}
      />
      <p class="help">The publisher or website displaying the URL link, e.g., <em>citynews</em> or <em>citynews.com</em>.</p>
    </div>
  `;

    const TargetURL = ({ register }) => {
      let input = s$1();

      y(() => {
        input.current.focus();
      }, [input]);

      return html`
    <div class="form-group">
      <${TextInput}
        name="targetURL"
        label=${html`<i class="fas fa-lg fa-fw fa-bullseye"></i> Target URL`}
        register=${(e) => {
          register(e);
          input.current = e;
        }}
      />
      <p class="help">The target website or page, e.g., <em>https://myproduct.com</em> or <em>https://myproduct.com/special-offer/summer</em>.</p>
    </div>
  `;
    };

    const initialState = {
      targetURL: "",
      source: "",
      medium: "",
      campaign: "",
      content: "",
    };

    const parseSearchParams = () => {
      let searchParams;

      searchParams = new URLSearchParams(window.location.search);

      return {
        targetURL: searchParams.get("url") || initialState.targetURL,
        source: searchParams.get("source") || initialState.source,
        medium: searchParams.get("medium") || initialState.medium,
        campaign: searchParams.get("campaign") || initialState.campaign,
        content: searchParams.get("content") || initialState.content,
      };
    };

    const addUTMParams = (state) => {
      let url, params, param;

      try {
        url = new URL(state.targetURL);
      } catch {
        return null;
      }

      params = [
        ["utm_source", state.source],
        ["utm_medium", state.medium],
        ["utm_campaign", state.campaign],
        ["utm_content", state.content],
      ];

      for (param of params) {
        if (param[1]) {
          url.searchParams.set(param[0], param[1]);
        } else {
          url.searchParams.delete(param[0]);
        }
      }

      return url.toString();
    };

    const UTMForm = () => {
      let supportsClipboard, onCopy, state, url;

      let { register, reset, watch } = useForm({
        defaultValues: parseSearchParams(),
      });

      supportsClipboard = d$1(() => {
        return navigator.clipboard && navigator.clipboard.writeText
      }, []);

      state = watch();
      url = d$1(() => addUTMParams(state), [state]);

      onCopy = () =>
        navigator.clipboard.writeText(url)
          .catch((err) => console.error("Unable to copy to clipboard", err));

      return html`
    <form onsubmit=${(e) => e.preventDefault()}>
      <${TargetURL} register=${register} />
      <${Source} register=${register} />
      <${Medium} register=${register} />
      <${Campaign} register=${register} />
      <${Content} register=${register} />
      <${FullURL} value=${url} />

      <div class="form-group">
        ${supportsClipboard &&
          html`
            <button
              class="btn btn-primary"
              disabled=${!url}
              onclick=${onCopy}>Copy URL to Clipboard</button> `
        }
        <button
          class="btn btn-primary btn-ghost"
          onclick=${() => reset(initialState)}>Reset Form</button>
      </div>
    </form>
  `;
    };

    const App = () =>
      html`<${UTMForm} />`;

    // Fix for packages that are still checking for process.env.NODE_ENV in ES6 module builds
    // window.process = { env: { NODE_DEV: "production" } };

    O(html`<${App}/>`, document.getElementById("app"));

}());
//# sourceMappingURL=main.js.map
