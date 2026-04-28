import{a as u,S as f}from"./assets/vendor-95FE17ni.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function m(i){return u.get(`https://pixabay.com/api/?key=55620354-ac6ed1e79a2ffd89ad6e48679&q=${i}&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>r.data)}const p=new f(".gallery a",{captionsData:"alt",captionPosition:"bottom"});function d(i){const r=i.map(({largeImageURL:o,webformatURL:a,tags:e,likes:t,views:n,comments:l,downloads:c})=>` <li class="gallery-item">
	<a class="gallery-link" href="${o}">
		<img 
		  class="gallery-image" 
		  src="${a}"
		  alt="${e}"
		/>
	</a>
    <p> Likes "${t}"</p>
    <p> Views "${n}"</p>
    <p> Comments "${l}"</p>
    <p> Downloads "${c}"</p>
</li>`).join("");s.gallery.insertAdjacentHTML("beforeend",r),p.refresh()}const s={form:document.querySelector(".form"),gallery:document.querySelector(".gallery")};function y(i){i.preventDefault();const r=i.target.elements["search-text"].value.trim();r&&(s.gallery.innerHTML="",m(r).then(o=>{if(o.hits.length===0)return alert("Sorry, there are no images matching your search query. Please try again!");d(o.hits)}).catch(o=>console.log(o)))}s.form.addEventListener("submit",y);
//# sourceMappingURL=index.js.map
