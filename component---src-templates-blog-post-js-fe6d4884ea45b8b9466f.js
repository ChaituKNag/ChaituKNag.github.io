(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{143:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return A});a(32);var r=a(7),n=a.n(r),i=a(0),o=a.n(i),s=a(148),l=a(157),d=a(152),c=a(153),u=a(149),f=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.title,a=this.props.pageContext,r=a.previous,n=a.next;return o.a.createElement(d.a,{location:this.props.location,title:t},o.a.createElement(c.a,{title:e.frontmatter.title,description:e.excerpt}),o.a.createElement("h1",null,e.frontmatter.title),o.a.createElement("p",{style:Object.assign({},Object(u.b)(-.2),{display:"block",marginBottom:Object(u.a)(1),marginTop:Object(u.a)(-1)})},e.frontmatter.date),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}),o.a.createElement("hr",{style:{marginBottom:Object(u.a)(1)}}),o.a.createElement(l.a,null),o.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},o.a.createElement("li",null,r&&o.a.createElement(s.Link,{to:r.frontmatter.path||r.fields.slug,rel:"prev"},"← ",r.frontmatter.title)),o.a.createElement("li",null,n&&o.a.createElement(s.Link,{to:n.frontmatter.path||n.fields.slug,rel:"next"},n.frontmatter.title," →"))))},t}(o.a.Component);t.default=f;var A="2761936148"},148:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return f}),a.d(t,"StaticQuery",function(){return A});var r=a(0),n=a.n(r),i=a(4),o=a.n(i),s=a(147),l=a.n(s);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return s.withPrefix}),a.d(t,"navigate",function(){return s.navigate}),a.d(t,"push",function(){return s.push}),a.d(t,"replace",function(){return s.replace}),a.d(t,"navigateTo",function(){return s.navigateTo});var d=a(150),c=a.n(d);a.d(t,"PageRenderer",function(){return c.a});var u=a(33);a.d(t,"parsePath",function(){return u.a});var f=n.a.createContext({}),A=function(e){return n.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}A.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},149:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return d});var r=a(162),n=a.n(r),i=a(163),o=a.n(i);o.a.overrideThemeStyles=function(){return{a:{color:"#470FF4",background:"linear-gradient(to top,#CEBBC9,#CEBBC9 100%,#0000 100%,#0000)",backgroundSize:"100% 30%",backgroundPosition:"center 100%",backgroundRepeat:"no-repeat"},"a:hover":{backgroundSize:"100% 100%"},"a.no-underline":{background:"none"},"a.no-underline:hover":{background:"none"},p:{lineHeight:1.6}}};var s=new n.a(o.a);var l=s.rhythm,d=s.scale},150:function(e,t,a){var r;e.exports=(r=a(151))&&r.default||r},151:function(e,t,a){"use strict";a.r(t);a(32);var r=a(0),n=a.n(r),i=a(4),o=a.n(i),s=a(52),l=a(2),d=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return n.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};d.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=d},152:function(e,t,a){"use strict";a(32);var r=a(7),n=a.n(r),i=a(0),o=a.n(i),s=a(148),l=a(149),d=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e,t=this.props,a=t.location,r=t.title,n=t.children;return e="/"===a.pathname?o.a.createElement("h1",{style:Object.assign({},Object(l.b)(1.5),{marginBottom:Object(l.a)(1.5),marginTop:0})},o.a.createElement(s.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r)):o.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0,display:"flex",justifyContent:"space-between"}},r,o.a.createElement(s.Link,{style:{boxShadow:"none",textDecoration:"none"},to:"/"}," Home ")),o.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(l.a)(24),padding:Object(l.a)(1.5)+" "+Object(l.a)(.75)}},e,n,o.a.createElement("footer",null,"© ",(new Date).getFullYear()," -- with ",o.a.createElement("span",{style:{color:"red"}},"❤")," from Naga Chaitanya Konada."))},t}(o.a.Component);t.a=d},153:function(e,t,a){"use strict";var r=a(154),n=a(0),i=a.n(n),o=a(4),s=a.n(o),l=a(164),d=a.n(l),c=a(148);function u(e){var t=e.description,a=e.lang,n=e.meta,o=e.keywords,s=e.title;return i.a.createElement(c.StaticQuery,{query:f,render:function(e){var r=t||e.site.siteMetadata.description;return i.a.createElement(d.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:r},{property:"og:title",content:s},{property:"og:description",content:r},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:r}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(n)})},data:r})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=u;var f="1025518380"},154:function(e){e.exports={data:{site:{siteMetadata:{title:"KNC - Blog",description:"A starter blog demonstrating what Gatsby can do.",author:"Naga Chaitanya Konada"}}}}},157:function(e,t,a){"use strict";a(158);var r=a(160),n=a(0),i=a.n(n),o=a(148),s=a(161),l=a.n(s),d=a(149),c={width:30,height:30,marginRight:20,marginTop:15};var u="664875446";t.a=function(){return i.a.createElement(o.StaticQuery,{query:u,render:function(e){var t=e.site.siteMetadata,a=t.author,r=t.social;return i.a.createElement("div",{style:{display:"flex",marginBottom:Object(d.a)(2.5)}},i.a.createElement(l.a,{fixed:e.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(d.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"}}),i.a.createElement("p",null,"Personal and technical views of ",i.a.createElement("strong",null,a)," ",i.a.createElement("br",null)," ",i.a.createElement("a",{className:"no-underline",target:"_blank",rel:"noreferrer",href:"https://twitter.com/"+r.twitter},i.a.createElement("img",{style:c,src:"/twitter.svg",alt:"Twitter"}))," ",i.a.createElement("a",{className:"no-underline",target:"_blank",rel:"noreferrer",href:"https://github.com/"+r.github},i.a.createElement("img",{style:c,src:"/github.svg",alt:"Github"}))," ",i.a.createElement("a",{className:"no-underline",target:"_blank",rel:"noreferrer",href:"https://www.instagram.com/"+r.instagram},i.a.createElement("img",{style:c,src:"/instagram.svg",alt:"Instagram"}))," ",i.a.createElement("a",{className:"no-underline",target:"_blank",rel:"noreferrer",href:"https://facebook.com/"+r.facebook},i.a.createElement("img",{style:c,src:"/facebook.svg",alt:"Facebook"}))," ",i.a.createElement("a",{className:"no-underline",target:"_blank",rel:"noreferrer",href:"https://medium.com/"+r.medium},i.a.createElement("img",{style:c,src:"/medium.svg",alt:"Medium"}))))},data:r})}},158:function(e,t,a){"use strict";a(159)("fixed",function(e){return function(){return e(this,"tt","","")}})},159:function(e,t,a){var r=a(11),n=a(16),i=a(17),o=/"/g,s=function(e,t,a,r){var n=String(i(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(r).replace(o,"&quot;")+'"'),s+">"+n+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),r(r.P+r.F*n(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},160:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAQEAAwAAAAAAAAAAAAAAAAMEAQUG/8QAFwEAAwEAAAAAAAAAAAAAAAAAAAEDBP/aAAwDAQACEAMQAAABw8a7i61RSHoJGfbYM//EABoQAQACAwEAAAAAAAAAAAAAAAIBAwAQERP/2gAIAQEAAQUCnvPNDVYc4q0igonK9f/EABkRAAEFAAAAAAAAAAAAAAAAAAIAARARIv/aAAgBAwEBPwERy6qf/8QAFxEAAwEAAAAAAAAAAAAAAAAAAQIgIv/aAAgBAgEBPwFjqP/EABsQAAICAwEAAAAAAAAAAAAAAAABECECETFx/9oACAEBAAY/AqOxtIovFw/Y/8QAGxABAQEBAAMBAAAAAAAAAAAAAQARMSFBUZH/2gAIAQEAAT8hKx23hLoe56mdMB9ZYIUebY78EXVbl//aAAwDAQACAAMAAAAQiP8Agf/EABkRAAIDAQAAAAAAAAAAAAAAAAERABAhUf/aAAgBAwEBPxARcNjcv//EABgRAQADAQAAAAAAAAAAAAAAAAEAEBEh/9oACAECAQE/EFBjyaX/AP/EAB0QAQADAAIDAQAAAAAAAAAAAAEAESExUUFxseH/2gAIAQEAAT8QOirVnUqG8dZMdvmHYrw0eM/ZqvCr2xCS+z8gGipoaMUVgn//2Q==",width:50,height:50,src:"/static/4a3a5a4ef7ae77443abddd994d5b66aa/d2d31/profile-pic.jpg",srcSet:"/static/4a3a5a4ef7ae77443abddd994d5b66aa/d2d31/profile-pic.jpg 1x,\n/static/4a3a5a4ef7ae77443abddd994d5b66aa/0b804/profile-pic.jpg 1.5x,\n/static/4a3a5a4ef7ae77443abddd994d5b66aa/753c3/profile-pic.jpg 2x,\n/static/4a3a5a4ef7ae77443abddd994d5b66aa/31ca8/profile-pic.jpg 3x"}}},site:{siteMetadata:{author:"Naga Chaitanya Konada",social:{twitter:"itsKNC",github:"ChaituKNag",facebook:"ChaituKNag",instagram:"chaituknag",medium:"@nagachaitanyakonada"}}}}}},161:function(e,t,a){"use strict";var r=a(8);t.__esModule=!0,t.default=void 0;var n,i=r(a(7)),o=r(a(51)),s=r(a(155)),l=r(a(156)),d=r(a(0)),c=r(a(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},A=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},p=[];var h=function(e,t){(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){p.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),n).observe(e),p.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",n=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",i=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.opacity?e.opacity:"1";return"<picture>"+r+n+"<img "+s+l+t+o+i+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+d+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},m=d.default.forwardRef(function(e,t){var a=e.style,r=e.onLoad,n=e.onError,i=(0,s.default)(e,["style","onLoad","onError"]);return d.default.createElement("img",(0,l.default)({},i,{onLoad:r,onError:n,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});m.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var b=function(e){function t(t){var a;a=e.call(this,t)||this;var r=!0,n=!1,i=t.fadeIn,s=A(t);!s&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,n=!0),"undefined"==typeof window&&(r=!1),t.critical&&(r=!0,n=!1);var l=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:r,imgLoaded:!1,IOSupported:n,fadeIn:i,hasNoScript:l,seenBefore:s},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,o.default)((0,o.default)(a))),a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:A(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&h(e,function(){var e=A(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0,imgLoaded:e})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,o=e.imgStyle,s=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,A=e.placeholderClassName,p=e.fluid,h=e.fixed,b=e.backgroundColor,y=e.Tag,E=e.itemProp,w="boolean"==typeof b?"lightgray":b,v=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},s,f),S=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},s),j={title:t,alt:this.state.isVisible?"":a,style:v,className:A};if(p){var R=p;return d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(R.srcSet)},d.default.createElement(y,{style:{width:"100%",paddingBottom:100/R.aspectRatio+"%"}}),R.base64&&d.default.createElement(m,(0,l.default)({src:R.base64},j)),R.tracedSVG&&d.default.createElement(m,(0,l.default)({src:R.tracedSVG},j)),w&&d.default.createElement(y,{title:t,style:{backgroundColor:w,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&d.default.createElement("picture",null,R.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:R.srcSetWebp,sizes:R.sizes}),d.default.createElement("source",{srcSet:R.srcSet,sizes:R.sizes}),d.default.createElement(m,{alt:a,title:t,src:R.src,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t},R))}}))}if(h){var x=h,k=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:x.width,height:x.height},i);return"inherit"===i.display&&delete k.display,d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:k,ref:this.handleRef,key:"fixed-"+JSON.stringify(x.srcSet)},x.base64&&d.default.createElement(m,(0,l.default)({src:x.base64},j)),x.tracedSVG&&d.default.createElement(m,(0,l.default)({src:x.tracedSVG},j)),w&&d.default.createElement(y,{title:t,style:{backgroundColor:w,width:x.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:x.height}}),this.state.isVisible&&d.default.createElement("picture",null,x.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:x.srcSetWebp,sizes:x.sizes}),d.default.createElement("source",{srcSet:x.srcSet,sizes:x.sizes}),d.default.createElement(m,{alt:a,title:t,width:x.width,height:x.height,src:x.src,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t,width:x.width,height:x.height},x))}}))}return null},t}(d.default.Component);b.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var y=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),E=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});b.propTypes={resolutions:y,sizes:E,fixed:y,fluid:E,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string};var w=b;t.default=w}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-fe6d4884ea45b8b9466f.js.map