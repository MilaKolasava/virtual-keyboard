(new class{constructor(){this.keys=[["`","1","2","3","4","5","6","7","8","9","0","-","=","Bksp"],["Q","W","E","R","T","Y","U","I","O","P","[","]","'","Del"],["Caps Lock","A","S","D","F","G","H","J","K","L",";","\\","Enter"],["Shift","/","Z","X","C","V","B","N","M",",",".","/","↑","Shift"],["Ctrl","Win","Alt"," ","Alt","Ctrl","←","↓","→"]],this.textarea=document.createElement("textarea"),this.textarea.classList.add("textarea"),this.textarea.disabled=!0}init(){const e=document.createElement("div");e.classList.add("keyboard");for(let t of this.keys){const s=document.createElement("div");s.classList.add("keyboard-row");for(let e of t){const t=document.createElement("div");t.classList.add("key"),t.textContent=e,t.addEventListener("mousedown",(t=>{this.onKeyPress(t.target,e),console.log("mousedoun")})),t.addEventListener("mouseup",(e=>{e.target.classList.remove("active-button")})),window.addEventListener("keydown",(s=>{s.code.slice(3)===e&&this.onKeyPress(t,e)})),document.addEventListener("keyup",(()=>{t.classList.remove("active-button")}))," "===e&&t.classList.add("space-button"),s.append(t)}e.append(s)}document.body.append(e),document.body.append(this.textarea)}onKeyPress(e,t){switch(console.log(t),e.classList.add("active-button"),t){case"Alt":case"Ctrl":case"Shift":return;default:this.textarea.value+=t}}}).init();