import"./hoisted.DmX9OANV.js";function c(o,i){o.forEach(e=>{if(e.isIntersecting){const t=document.getElementById("reveal-text"),n=document.getElementById("reveal-button");t&&t.classList.add("reveal-visible"),n&&setTimeout(()=>{n.classList.add("reveal-visible")},200),i.unobserve(e.target)}})}const r=new IntersectionObserver(c,{threshold:.2}),s=document.getElementById("cta-section");s&&r.observe(s);