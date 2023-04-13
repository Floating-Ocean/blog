document.addEventListener("DOMContentLoaded",function(){let o,c,t=!1;function l(){var e=GLOBAL_CONFIG.highlight;if(e){var t=e.highlightCopy,n=e.highlightLang,o=GLOBAL_CONFIG_SITE.isHighlightShrink;const s=e.highlightHeightLimit,r=t||n||void 0!==o;var i="highlighjs"===e.plugin?document.querySelectorAll("figure.highlight"):document.querySelectorAll('pre[class*="language-"]');if((r||s)&&i.length){const d="prismjs"===e.plugin;let a="",c="";const u=!0===o?"closed":"",m=(void 0!==o&&(a=`<i class="fas fa-angle-down expand ${u}"></i>`),t&&(c='<div class="copy-notice"></div><i class="far fa-paste copy-button"></i>'),e=>{var t=e.parentNode,n=(t.classList.add("copy-true"),window.getSelection()),o=document.createRange(),o=(d?o.selectNodeContents(t.querySelectorAll("pre code")[0]):o.selectNodeContents(t.querySelectorAll("table .code pre")[0]),n.removeAllRanges(),n.addRange(o),n.toString(),e.lastChild);if(document.queryCommandSupported&&document.queryCommandSupported("copy"))if(document.execCommand("copy"),void 0!==GLOBAL_CONFIG.Snackbar)btf.snackbarShow(GLOBAL_CONFIG.copy.success);else{const i=o.previousElementSibling;i.innerText=GLOBAL_CONFIG.copy.success,i.style.opacity=1,setTimeout(()=>{i.style.opacity=0},1e3)}else void 0!==GLOBAL_CONFIG.Snackbar?btf.snackbarShow(GLOBAL_CONFIG.copy.noSupport):o.previousElementSibling.innerText=GLOBAL_CONFIG.copy.noSupport;n.removeAllRanges(),t.classList.remove("copy-true")}),g=e=>{var t=[...e.parentNode.children].slice(1);e.firstChild.classList.toggle("closed"),btf.isHidden(t[t.length-1])?t.forEach(e=>{e.style.display="block"}):t.forEach(e=>{e.style.display="none"})},h=function(e){e=e.target.classList;e.contains("expand")?g(this):e.contains("copy-button")&&m(this)},f=function(){this.classList.toggle("expand-done")};function l(e,t,n){var o,i=document.createDocumentFragment();r&&((o=document.createElement("div")).className="highlight-tools "+u,o.innerHTML=a+e+c,o.addEventListener("click",h),i.appendChild(o)),s&&t.offsetHeight>s+30&&((e=document.createElement("div")).className="code-expand-btn",e.innerHTML='<i class="fas fa-angle-double-down"></i>',e.addEventListener("click",f),i.appendChild(e)),"hl"===n?t.insertBefore(i,t.firstChild):t.parentNode.insertBefore(i,t)}n?d?i.forEach(function(e){var t=`<div class="code-lang">${e.getAttribute("data-language")?e.getAttribute("data-language"):"Code"}</div>`;btf.wrap(e,"figure",{class:"highlight"}),l(t,e)}):i.forEach(function(e){let t=e.getAttribute("class").split(" ")[1];l(`<div class="code-lang">${t="plain"!==t&&void 0!==t?t:"Code"}</div>`,e,"hl")}):d?i.forEach(function(e){btf.wrap(e,"figure",{class:"highlight"}),l("",e)}):i.forEach(function(e){l("",e,"hl")})}}}const s=e=>{var t=e=>{let t=0;return e.length&&Array.from(e).forEach(e=>{t+=e.offsetWidth}),t};e&&(e=t(document.querySelector("#blog-info > a").children),t=t(document.getElementById("menus").children),o=e+t,c=document.getElementById("nav"));let n="";(n=window.innerWidth<=768||o>c.offsetWidth-120)?c.classList.add("hide-menu"):c.classList.remove("hide-menu")},r={open:()=>{btf.sidebarPaddingR(),document.body.style.overflow="hidden",btf.animateIn(document.getElementById("menu-mask"),"to_show 0.5s"),document.getElementById("sidebar-menus").classList.add("open"),t=!0},close:()=>{var e=document.body;e.style.overflow="",e.style.paddingRight="",btf.animateOut(document.getElementById("menu-mask"),"to_hide 0.5s"),document.getElementById("sidebar-menus").classList.remove("open"),t=!1}};function d(e){const a=e=>{let o="";const i=e=>e.replace(/"/g,"&quot;");return e.forEach(e=>{var t=e.alt?`alt="${i(e.alt)}"`:"",n=e.title?`title="${i(e.title)}"`:"";o+=`<div class="fj-gallery-item"><img src="${e.url}" ${t+n}"></div>`}),o},c=(e,t,n)=>{var o=t.length;return n<o?e.insertAdjacentHTML("beforeend",a(t.splice(0,n))):(e.insertAdjacentHTML("beforeend",a(t)),e.classList.remove("lazyload")),n<o?n:o},n=(t,n)=>{if(t.classList.contains("lazyload")){const o=t.getAttribute("data-limit"),i=(c(t,n,o),()=>{var e=c(t,n,o);fjGallery(t,"appendImages",t.querySelectorAll(`.fj-gallery-item:nth-last-child(-n+${e})`)),btf.loadLightbox(t.querySelectorAll("img")),e<o&&t.nextElementSibling.removeEventListener("click",i)});t.nextElementSibling.addEventListener("click",i)}else t.innerHTML=a(n);btf.initJustifiedGallery(t),btf.loadLightbox(t.querySelectorAll("img"))};var t=()=>{e.forEach(t=>{t.classList.contains("url")?(async e=>{return(await fetch(e)).json()})(t.textContent).then(e=>{n(t,e)}):n(t,JSON.parse(t.textContent))})};window.fjGallery?t():(getCSS(""+GLOBAL_CONFIG.source.justifiedGallery.css),getScript(""+GLOBAL_CONFIG.source.justifiedGallery.js).then(t))}function u(){const o=document.getElementById("rightside"),i=window.innerHeight+56;if(document.body.scrollHeight<=i)return o.style.cssText="opacity: 1; transform: translateX(-58px)";let a=0,c=!0;const l=document.getElementById("page-header"),s="function"==typeof chatBtnHide,r="function"==typeof chatBtnShow,d=GLOBAL_CONFIG.percent.rightside;var e=btf.throttle(()=>{var e,t,n=window.scrollY||document.documentElement.scrollTop;t=(e=n)>a,a=e,56<n?(t?(l.classList.contains("nav-visible")&&l.classList.remove("nav-visible"),r&&!0===c&&(chatBtnHide(),c=!1)):(l.classList.contains("nav-visible")||l.classList.add("nav-visible"),s&&!1===c&&(chatBtnShow(),c=!0)),l.classList.add("nav-fixed"),"0"===window.getComputedStyle(o).getPropertyValue("opacity")&&(o.style.cssText="opacity: 0.8; transform: translateX(-58px)")):(0===n&&l.classList.remove("nav-fixed","nav-visible"),o.style.cssText="opacity: ''; transform: ''"),d&&(e=n,e=btf.getScrollPercent(e,document.body),t=document.getElementById("go-up"),e<95?(t.classList.add("show-percent"),t.querySelector(".scroll-percent").textContent=e):t.classList.remove("show-percent")),document.body.scrollHeight<=i&&(o.style.cssText="opacity: 0.8; transform: translateX(-58px)")},200);window.scrollCollect=e,window.addEventListener("scroll",scrollCollect)}function m(){const r=GLOBAL_CONFIG_SITE.isToc,d=GLOBAL_CONFIG.isAnchor,n=document.getElementById("article-container");if(n&&(r||d)){let e,a,c,t,l;if(r){const i=document.getElementById("card-toc");a=i.getElementsByClassName("toc-content")[0],e=a.querySelectorAll(".toc-link"),t=i.querySelector(".toc-percentage"),l=a.classList.contains("is-expand"),window.mobileToc={open:()=>{i.style.cssText="animation: toc-open .3s; opacity: 1; right: 55px"},close:()=>{i.style.animation="toc-close .2s",setTimeout(()=>{i.style.cssText="opacity:''; animation: ''; right: ''"},100)}},a.addEventListener("click",e=>{e.preventDefault();var t=e.target.classList;t.contains("toc-content")||(t=t.contains("toc-link")?e.target:e.target.parentElement,btf.scrollToDest(btf.getEleTop(document.getElementById(decodeURI(t.getAttribute("href")).replace("#",""))),300),window.innerWidth<900&&window.mobileToc.close())}),c=e=>{var e=e.getBoundingClientRect().top,t=a.scrollTop;e>document.documentElement.clientHeight-100&&(a.scrollTop=t+150),e<100&&(a.scrollTop=t-150)}}const u=n.querySelectorAll("h1,h2,h3,h4,h5,h6");let s="";const o=function(n){if(0===n)return!1;let o="",i="";if(u.forEach(function(e,t){n>btf.getEleTop(e)-80&&(e=e.id,o=e?"#"+encodeURI(e):"",i=t)}),s!==i&&(d&&btf.updateAnchor(o),s=i,r)&&(a.querySelectorAll(".active").forEach(e=>{e.classList.remove("active")}),""!==o)){const t=e[i];if(t.classList.add("active"),setTimeout(()=>{c(t)},0),!l){let e=t.parentNode;for(;!e.matches(".toc");e=e.parentNode)e.matches("li")&&e.classList.add("active")}}};window.tocScrollFn=btf.throttle(()=>{var e=window.scrollY||document.documentElement.scrollTop;r&&GLOBAL_CONFIG.percent.toc&&(t.textContent=btf.getScrollPercent(e,n)),o(e)},100),window.addEventListener("scroll",tocScrollFn)}}function g(e){e.forEach(e=>{var t=e.getAttribute("datetime");e.innerText=btf.diffDate(t,!0),e.style.display="inline"})}const n={switchReadMode:()=>{const t=document.body,n=(t.classList.add("read-mode"),document.createElement("button"));n.type="button",n.className="fas fa-sign-out-alt exit-readmode",t.appendChild(n),n.addEventListener("click",function e(){t.classList.remove("read-mode"),n.remove(),n.removeEventListener("click",e)})},switchDarkMode:()=>{"light"==("dark"===document.documentElement.getAttribute("data-theme")?"dark":"light")?(activateDarkMode(),saveToLocal.set("theme","dark",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)):(activateLightMode(),saveToLocal.set("theme","light",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)),"function"==typeof utterancesTheme&&utterancesTheme(),"function"==typeof changeGiscusTheme&&changeGiscusTheme(),"object"==typeof FB&&window.loadFBComment&&window.loadFBComment(),"function"==typeof runMermaid&&window.runMermaid()},showOrHideBtn:e=>{const t=document.getElementById("rightside-config-hide").classList;t.toggle("show"),e.classList.contains("show")&&(t.add("status"),setTimeout(()=>{t.remove("status")},300)),e.classList.toggle("show")},scrollToTop:()=>{btf.scrollToDest(0,500)},hideAsideBtn:()=>{var e=document.documentElement.classList;e.contains("hide-aside")?saveToLocal.set("aside-status","show",2):saveToLocal.set("aside-status","hide",2),e.toggle("hide-aside")},runMobileToc:()=>{"0"===window.getComputedStyle(document.getElementById("card-toc")).getPropertyValue("opacity")?window.mobileToc.open():window.mobileToc.close()}},h=(document.getElementById("rightside").addEventListener("click",function(e){var t=e.target.id?e.target:e.target.parentNode;switch(t.id){case"go-up":n.scrollToTop();break;case"rightside_config":n.showOrHideBtn(t);break;case"mobile-toc-button":n.runMobileToc();break;case"readmode":n.switchReadMode();break;case"darkmode":n.switchDarkMode();break;case"hide-aside-btn":n.hideAsideBtn()}}),{clickFnOfTabs:function(){document.querySelectorAll("#article-container .tab > button").forEach(function(e){e.addEventListener("click",function(e){var t=this.parentNode;if(!t.classList.contains("active")){var n=t.parentNode.nextElementSibling,o=btf.siblings(t,".active")[0];o&&o.classList.remove("active"),t.classList.add("active");const i=this.getAttribute("data-href").replace("#","");[...n.children].forEach(e=>{e.id===i?e.classList.add("active"):e.classList.remove("active")});o=n.querySelectorAll(`#${i} .fj-gallery`);0<o.length&&btf.initJustifiedGallery(o)}})})},backToTop:()=>{document.querySelectorAll("#article-container .tabs .tab-to-top").forEach(function(e){e.addEventListener("click",function(){btf.scrollToDest(btf.getEleTop(btf.getParents(this,".tabs")),300)})})}});if(window.refreshFn=function(){s(!0),c.classList.add("show"),GLOBAL_CONFIG_SITE.isPost?(void 0!==GLOBAL_CONFIG.noticeOutdate&&(n=GLOBAL_CONFIG.noticeOutdate,(o=btf.diffDate(GLOBAL_CONFIG_SITE.postUpdate))>=n.limitDay)&&((t=document.createElement("div")).className="post-outdate-notice",t.textContent=n.messagePrev+" "+o+" "+n.messageNext,o=document.getElementById("article-container"),"top"===n.position?o.insertBefore(t,o.firstChild):o.appendChild(t)),GLOBAL_CONFIG.relativeDate.post&&g(document.querySelectorAll("#post-meta time"))):(GLOBAL_CONFIG.relativeDate.homepage&&g(document.querySelectorAll("#recent-posts time")),GLOBAL_CONFIG.runtime&&(n=document.getElementById("runtimeshow"))&&(o=n.getAttribute("data-publishDate"),n.innerText=btf.diffDate(o)+" "+GLOBAL_CONFIG.runtime),(t=document.getElementById("last-push-date"))&&(e=t.getAttribute("data-lastPushDate"),t.innerText=btf.diffDate(e,!0)),(e=document.querySelectorAll("#aside-cat-list .card-category-list-item.parent i")).length&&e.forEach(function(e){e.addEventListener("click",function(e){e.preventDefault();this.classList.toggle("expand");e=this.parentNode.nextElementSibling;btf.isHidden(e)?e.style.display="block":e.style.display="none"})})),m(),GLOBAL_CONFIG_SITE.isHome&&(i=document.getElementById("scroll-down"))&&i.addEventListener("click",function(){btf.scrollToDest(document.getElementById("content-inner").offsetTop,300)}),l(),GLOBAL_CONFIG.isPhotoFigcaption&&document.querySelectorAll("#article-container img").forEach(function(e){var t,n=e.parentNode,o=e.title||e.alt;o&&!n.parentNode.classList.contains("justified-gallery")&&((t=document.createElement("div")).className="img-alt is-center",t.textContent=o,n.insertBefore(t,e.nextSibling))}),u();var e,t,n,o,i=document.querySelectorAll("#article-container .fj-gallery");i.length&&d(i),btf.loadLightbox(document.querySelectorAll("#article-container img:not(.no-lightbox)")),(a=document.querySelectorAll("#article-container :not(.highlight) > table, #article-container > table")).length&&a.forEach(e=>{btf.wrap(e,"div",{class:"table-wrap"})}),(a=document.querySelectorAll("#article-container .hide-button")).length&&a.forEach(function(e){e.addEventListener("click",function(e){this.classList.add("open");var t=this.nextElementSibling.querySelectorAll(".fj-gallery");t.length&&btf.initJustifiedGallery(t)})}),h.clickFnOfTabs(),h.backToTop();{let e=!1;var a=document.querySelector("#comment-switch > .switch-btn");a&&a.addEventListener("click",function(){this.classList.toggle("move"),document.querySelectorAll("#post-comment > .comment-wrap > div").forEach(function(e){btf.isHidden(e)?e.style.cssText="display: block;animation: tabshow .5s":e.style.cssText="display: none;animation: ''"}),e||"function"!=typeof loadOtherComment||(e=!0,loadOtherComment())})}document.getElementById("toggle-menu").addEventListener("click",()=>{r.open()})},refreshFn(),window.addEventListener("resize",()=>{s(!1),btf.isHidden(document.getElementById("toggle-menu"))&&t&&r.close()}),document.getElementById("menu-mask").addEventListener("click",e=>{r.close()}),document.querySelectorAll("#sidebar-menus .site-page.group").forEach(function(e){e.addEventListener("click",function(){this.classList.toggle("hide")})}),GLOBAL_CONFIG.islazyload&&(window.lazyLoadInstance=new LazyLoad({elements_selector:"img",threshold:0,data_src:"lazy-src"})),void 0!==GLOBAL_CONFIG.copyright){const i=GLOBAL_CONFIG.copyright;document.body.oncopy=e=>{e.preventDefault();let t;var n=window.getSelection(0).toString();return t=n.length>i.limitCount?n+"\n\n\n"+i.languages.author+"\n"+i.languages.link+window.location.href+"\n"+i.languages.source+"\n"+i.languages.info:n,(e.clipboardData?e:window).clipboardData.setData("text",t)}}});