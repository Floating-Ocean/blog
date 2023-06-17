const btf={debounce:function(o,a,i){let r;return function(){const t=this,e=arguments;var n=i&&!r;clearTimeout(r),r=setTimeout(function(){r=null,i||o.apply(t,e)},a),n&&o.apply(t,e)}},throttle:function(n,o,a){let i,r,l,s=0;a=a||{};function d(){s=!1===a.leading?0:(new Date).getTime(),i=null,n.apply(r,l),i||(r=l=null)}return function(){var t=(new Date).getTime(),e=(s||!1!==a.leading||(s=t),o-(t-s));r=this,l=arguments,e<=0||o<e?(i&&(clearTimeout(i),i=null),s=t,n.apply(r,l),i||(r=l=null)):i||!1===a.trailing||(i=setTimeout(d,e))}},sidebarPaddingR:()=>{var t=window.innerWidth,e=document.body.clientWidth;t!==e&&(document.body.style.paddingRight=t-e+"px")},snackbarShow:(t,e=!1,n=2e3)=>{var{position:o,bgLight:a,bgDark:i}=GLOBAL_CONFIG.Snackbar,r="light"===document.documentElement.getAttribute("data-theme")?a:i,i="light"===document.documentElement.getAttribute("data-theme")?i:a;Snackbar.show({text:t,textColor:i,backgroundColor:r,showAction:e,duration:n,pos:o,customClass:"snackbar-css"})},snackbarActionShow:(t,e,n,o=1e4)=>{var{position:a,bgLight:i,bgDark:r}=GLOBAL_CONFIG.Snackbar,l="light"===document.documentElement.getAttribute("data-theme")?i:r,r="light"===document.documentElement.getAttribute("data-theme")?r:i;Snackbar.show({text:t,textColor:r,backgroundColor:l,showAction:!1,showSecondButton:!0,secondButtonText:e,secondButtonTextColor:r,onSecondButtonClick:n,duration:o,pos:a,customClass:"snackbar-css"})},diffDate:(t,e=!1)=>{var n,o,a,i=new Date,t=new Date(t),i=i.getTime()-t.getTime(),r=864e5;let l;return l=e?(e=i/r,o=i/36e5,a=i/6e4,12<(n=i/2592e6)?t.toISOString().slice(0,10):1<=n?parseInt(n)+" "+GLOBAL_CONFIG.date_suffix.month:1<=e?parseInt(e)+" "+GLOBAL_CONFIG.date_suffix.day:1<=o?parseInt(o)+" "+GLOBAL_CONFIG.date_suffix.hour:1<=a?parseInt(a)+" "+GLOBAL_CONFIG.date_suffix.min:GLOBAL_CONFIG.date_suffix.just):parseInt(i/r)},date:(t,e)=>{var n,o,a={"Z+":"UTC"+(t.getTimezoneOffset()<=0?"+":"")+-t.getTimezoneOffset()/60,"y+":t.getFullYear(),"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds(),"q+":Math.floor((t.getMonth()+3)/3),"S+":t.getMilliseconds()};for(n in a)new RegExp("("+n+")").test(e)&&(e="y+"==n?e.replace(RegExp.$1,(""+a[n]).substr(4-RegExp.$1.length)):"S+"==n?(o=1==(o=RegExp.$1.length)?3:o,e.replace(RegExp.$1,("00"+a[n]).substr((""+a[n]).length-1,o))):e.replace(RegExp.$1,1==RegExp.$1.length?a[n]:("00"+a[n]).substr((""+a[n]).length)));return e},loadComment:(t,e)=>{if("IntersectionObserver"in window){const n=new IntersectionObserver(t=>{t[0].isIntersecting&&(e(),n.disconnect())},{threshold:[0]});n.observe(t)}else e()},scrollToDest:(o,a=500)=>{const i=window.pageYOffset;var t=document.getElementById("page-header").classList.contains("fixed");if((i>o||t)&&(o-=70),"scrollBehavior"in document.documentElement.style)window.scrollTo({top:o,behavior:"smooth"});else{let n=null;o=+o,window.requestAnimationFrame(function t(e){e-=n=n||e;i<o?window.scrollTo(0,(o-i)*e/a+i):window.scrollTo(0,i-(i-o)*e/a),e<a?window.requestAnimationFrame(t):window.scrollTo(0,o)})}},animateIn:(t,e)=>{t.style.display="block",t.style.animation=e},animateOut:(e,t)=>{e.addEventListener("animationend",function t(){e.style.display="",e.style.animation="",e.removeEventListener("animationend",t)}),e.style.animation=t},getParents:(t,e)=>{for(;t&&t!==document;t=t.parentNode)if(t.matches(e))return t;return null},siblings:(e,n)=>[...e.parentNode.children].filter(t=>n?t!==e&&t.matches(n):t!==e),wrap:(t,e,n)=>{var o,a,i=document.createElement(e);for([o,a]of Object.entries(n))i.setAttribute(o,a);t.parentNode.insertBefore(i,t),i.appendChild(t)},unwrap:t=>{var e=t.parentNode;e!==document.body&&(e.parentNode.insertBefore(t,e),e.parentNode.removeChild(e))},isHidden:t=>0===t.offsetHeight&&0===t.offsetWidth,getEleTop:t=>{let e=t.offsetTop,n=t.offsetParent;for(;null!==n;)e+=n.offsetTop,n=n.offsetParent;return e},loadLightbox:t=>{var e=GLOBAL_CONFIG.lightbox;if("mediumZoom"===e){const n=mediumZoom(t);n.on("open",t=>{var e="dark"===document.documentElement.getAttribute("data-theme")?"#121212":"#fff";n.update({background:e})})}"fancybox"===e&&(t.forEach(t=>{var e,n;"A"!==t.parentNode.tagName&&(e=t.dataset.lazySrc||t.src,n=t.title||t.alt||"",btf.wrap(t,"a",{href:e,"data-fancybox":"gallery","data-caption":n,"data-thumb":e}))}),window.fancyboxRun||(Fancybox.bind("[data-fancybox]",{Hash:!1,Thumbs:{autoStart:!1}}),window.fancyboxRun=!0))},initJustifiedGallery:function(t){const e=t=>{btf.isHidden(t)||fjGallery(t,{itemSelector:".fj-gallery-item",rowHeight:t.getAttribute("data-rowHeight"),gutter:4,onJustify:function(){this.$container.style.opacity="1"}})};0===Array.from(t).length?e(t):t.forEach(t=>{e(t)})},updateAnchor:t=>{var e;t!==window.location.hash&&(t=t||location.pathname,e=GLOBAL_CONFIG_SITE.title,window.history.replaceState({url:location.href,title:e},e,t))},getScrollPercent:(t,e)=>{var n=e.clientHeight,o=document.documentElement.clientHeight,e=e.offsetTop,n=o<n?n-o:document.documentElement.scrollHeight-o,o=Math.round(100*((t-e)/n));return 100<o?100:o<=0?0:o}};