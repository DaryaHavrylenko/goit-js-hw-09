const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");let d=null;t.addEventListener("click",(function(){t.disabled=!0,e.disabled=!1,d=setInterval((()=>{let t=`#${Math.floor(16777215*Math.random()).toString(16)}`;document.body.style.background=t}),1e3)})),e.addEventListener("click",(function(){t.disabled=!1,e.disabled=!0,clearInterval(d)}));
//# sourceMappingURL=01-color-switcher.c82d20cd.js.map
