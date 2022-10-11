let e=null;const t=document.querySelector("[data-start]"),r=document.querySelector("[data-stop]"),o=document.querySelector("body");t.addEventListener("click",(()=>{e=setInterval((()=>{o.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t.disabled=!0})),r.addEventListener("click",(()=>{clearInterval(e)}));
//# sourceMappingURL=01-color-switcher.f22ab1f8.js.map
