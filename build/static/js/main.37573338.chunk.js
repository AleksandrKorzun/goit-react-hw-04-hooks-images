(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{12:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__3KSvX",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__18Z51"}},13:function(e,t,a){e.exports={Overlay:"Modal_Overlay__14PJd",Modal:"Modal_Modal__2SzWM"}},26:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__2MUEs"}},27:function(e,t,a){e.exports={Button:"Button_Button__2Iw3G"}},29:function(e,t,a){e.exports={loader:"Loader_loader__1i_ZT"}},34:function(e,t,a){},35:function(e,t,a){},5:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__2POJv",SearchForm:"Searchbar_SearchForm__1RTGR",SearchFormButton:"Searchbar_SearchFormButton__2j29L",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__1rZQ1",SearchFormInput:"Searchbar_SearchFormInput__xSVqk"}},76:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(23),o=a.n(c),u=(a(34),a(14)),i=a(4),s=(a(35),a(5)),l=a.n(s),m=a(0),h=function(e){var t=e.search,a=e.onHandleChange,n=e.onHandleSubmit;return Object(m.jsx)("header",{className:l.a.Searchbar,children:Object(m.jsxs)("form",{className:l.a.SearchForm,onSubmit:n,children:[Object(m.jsx)("button",{type:"submit",className:l.a.SearchFormButton,onSubmit:n,children:Object(m.jsx)("span",{className:l.a.SearchFormButtonLabel,children:"Search"})}),Object(m.jsx)("label",{children:Object(m.jsx)("input",{className:l.a.SearchFormInput,type:"text",name:"search",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:a,value:t})})]})})},b=a(11),g=a.n(b),j=a(24),d=a(25),f=a.n(d),p=function(){var e=Object(j.a)(g.a.mark((function e(t,a){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("".concat("https://pixabay.com/api/","?q=").concat(t,"&page=").concat(a,"&key=").concat("23179954-204c91e2d20c9745fc8192c94","&image_type=photo&orientation=horizontal&per_page=12"));case 3:return n=e.sent,e.abrupt("return",n.data.hits);case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}(),O=a(12),_=a.n(O),S=function(e){var t=e.pictures,a=e.onToggleModal;return Object(m.jsx)(m.Fragment,{children:t.map((function(e){return Object(m.jsx)("li",{className:_.a.ImageGalleryItem,onClick:a,children:Object(m.jsx)("img",{src:e.webformatURL,alt:e.tags,id:e.largeImageURL,className:_.a.ImageGalleryItemImage})},e.id)}))})},x=a(26),I=a.n(x),y=a(2),v=a.n(y),w=function(e){var t=e.pictures,a=e.onToggleModal;return Object(m.jsx)("ul",{className:I.a.ImageGallery,children:Object(m.jsx)(S,{pictures:t,onToggleModal:a})})};S.propTypes={pictures:v.a.array};var F=a(27),M=a.n(F),T=function(e){var t=e.getMorePictures;return Object(m.jsx)("button",{id:"loadMore",type:"button",className:M.a.Button,onClick:t,children:"Load more"})},G=a(13),L=a.n(G),k=function(e){var t=e.largeImageURL,a=e.onToggleModal;Object(n.useEffect)((function(){return window.addEventListener("keydown",r),function(){return window.removeEventListener("keydown",r)}}));var r=function(e){return"Escape"===e.code&&a()};return Object(m.jsx)("div",{className:L.a.Overlay,onClick:function(e){return e.target===e.currentTarget&&a()},children:Object(m.jsx)("div",{className:L.a.Modal,children:Object(m.jsx)("img",{src:t,alt:""})})})},B=a(28),N=a.n(B),C=a(29),E=a.n(C),R=function(){return Object(m.jsx)(N.a,{className:E.a.loader,type:"Rings",color:"#5757c2",height:100,width:100})},P=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(1),o=Object(i.a)(c,2),s=o[0],l=o[1],b=Object(n.useState)(""),g=Object(i.a)(b,2),j=g[0],d=g[1],f=Object(n.useState)(!1),O=Object(i.a)(f,2),_=O[0],S=O[1],x=Object(n.useState)(""),I=Object(i.a)(x,2),y=I[0],v=I[1],F=Object(n.useState)(!1),M=Object(i.a)(F,2),G=M[0],L=M[1];Object(n.useEffect)((function(){s>1&&B()}),[s]);var B=function(){P(),p(j,s).then((function(e){return r((function(t){return[].concat(Object(u.a)(t),Object(u.a)(e))}))})).finally(P()),setTimeout((function(){C()}),600)},N=function(){P(),p(j,s).then((function(e){return r(e)})).finally(P())},C=function(){window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})},E=function(e){S((function(e){return!e}))},P=function(){L((function(e){return!e}))};return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(h,{onHandleSubmit:function(e){e.preventDefault(),l(1),N(),setTimeout((function(){C()}),600)},onHandleChange:function(e){d(e.target.value)},search:j}),G&&Object(m.jsx)(R,{}),Object(m.jsx)(w,{pictures:a,onToggleModal:function(e){v(e.target.id),E()}}),!!a.length&&Object(m.jsx)(T,{getMorePictures:function(e){l((function(e){return e+1}))}}),_&&Object(m.jsx)(k,{largeImageURL:y,onToggleModal:E})]})},H=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,77)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),c(e),o(e)}))};o.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(P,{})}),document.getElementById("root")),H()}},[[76,1,2]]]);
//# sourceMappingURL=main.37573338.chunk.js.map