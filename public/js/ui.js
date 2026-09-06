window.UI={
 toast(t){const e=document.getElementById("toast");if(!e)return;e.textContent=t;e.classList.add("show");clearTimeout(window.__fitToast);window.__fitToast=setTimeout(()=>e.classList.remove("show"),2600)},
 esc(v){return String(v??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]))},
 icon(name){const p={home:'M12 3 3 10v10h7v-6h4v6h7V10Z',workout:'M6 8h12M4 12h16M7 16h10',food:'M5 4v16M5 4c4 0 6 2 6 5s-2 5-6 5M15 4v16M19 4v16M15 12h4',ai:'M5 6h14v10H8l-3 3V6ZM8 10h8M8 13h5',progress:'M4 18V9M10 18V5M16 18v-7M22 18V3',settings:'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0-6v3m0 14v3M4.2 4.2l2.1 2.1m11.4 11.4 2.1 2.1M2 12h3m14 0h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1'}[name]||'M12 5v14M5 12h14';return `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${p}"/></svg>`},
 modalClose(){document.querySelector('.modal')?.remove()}
};