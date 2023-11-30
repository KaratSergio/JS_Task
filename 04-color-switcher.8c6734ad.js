!function(){let t;let e=document.querySelector("[data-start]"),a=document.querySelector("[data-stop]"),r=document.body,d=(t,d,n)=>{e.disabled=t,a.disabled=d,r.style.backgroundColor=n};function n(){return`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}e.addEventListener("click",()=>{d(!0,!1,n()),t=setInterval(()=>{d(!0,!1,n())},1e3)}),a.addEventListener("click",()=>{d(!1,!0,""),clearInterval(t)})}();//# sourceMappingURL=04-color-switcher.8c6734ad.js.map

//# sourceMappingURL=04-color-switcher.8c6734ad.js.map
