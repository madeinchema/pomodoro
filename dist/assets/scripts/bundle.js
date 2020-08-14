!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(module,exports){const overlay=document.getElementById("overlay"),pageTitleElement=document.getElementById("page-title"),pageTitle="Pomodoro App",faviconElement=document.getElementById("favicon"),taskTitleInput=document.getElementById("task-title-input"),timerElement=document.getElementById("timer"),sessionStatus=document.getElementById("session-status"),startButton=document.getElementById("start"),stopButton=document.getElementById("stop"),applySettingsButton=document.getElementById("timer-settings-apply"),workTime=document.getElementById("work-time"),shortBreak=document.getElementById("short-break"),longBreak=document.getElementById("long-break"),longBreakInterval=document.getElementById("long-break-interval"),settingsModal=document.getElementById("settings-container"),audioEndSession=document.getElementById("end-session"),audioEndBreak=document.getElementById("end-break"),muteButton=document.getElementById("mute"),volumeSlider=document.getElementById("volume-slider"),defaultTimerValues={workTime:25,shortBreak:5,longBreak:15,longBreakInterval:4};function Timer(){let countdownInterval;this.timerState="stopped",this.currentSession="workTime",this.sessionCounter={session:0,shortBreak:0,longBreak:0},this.time=60*parseInt(localStorage.workTime),this.timerController={countdown:()=>{countdownInterval=setInterval(()=>{this.time--,this.timeHandler.format(),0===this.time&&this.timerController.stop()},1e3)},start:()=>{"stopped"===this.timerState||"paused"===this.timerState?(this.timerController.countdown(),this.timerController.setState("active")):(this.timerController.pause(),this.timerController.setState("paused"))},pause:()=>{clearInterval(countdownInterval),this.timerController.setState("paused")},stop:e=>{let t=this.timerState;if("button"===e){if("stopped"!==t){if(!confirm("Are you sure you want to stop the timer?"))return this.timerController.setState("paused");this.sessionHandler.stop()}}else setTimeout(()=>{let e="workTime"===this.currentSession?"Break":"Session";alert(e+" completed!")},50),"workTime"===this.currentSession?audioEndSession.play():audioEndBreak.play(),this.sessionHandler.next();clearInterval(countdownInterval),this.timerController.setState("stopped"),this.timeHandler.format()},setState:e=>{"active"===e?(this.timerState="active",startButton.innerText="Pause"):"paused"===e?(this.timerState="paused",startButton.innerText="Resume"):"stopped"===e&&(this.timerState="stopped",startButton.innerText="Start"),faviconElement.setAttribute("href",`assets/img/icons/${this.currentSession}-${this.timerState}.png`)},update:option=>{const sessionNames=Object.keys(defaultTimerValues),defaultValues=Object.values(defaultTimerValues);if("start"===option){for(let e=0;e<sessionNames.length;e++)!localStorage.getItem(sessionNames[e])&&localStorage.setItem(sessionNames[e],defaultValues[e].toString());sessionNames.forEach(item=>eval(item).value=parseInt(localStorage.getItem(item)))}sessionNames.forEach(item=>localStorage.setItem(item,eval(item).value.toString())),setTimeout(()=>this.timeHandler.format(),25),this.timeHandler.update()}},this.sessionHandler={stop:()=>{"workTime"===this.currentSession&&this.timeHandler.set("workTime"),"shortBreak"===this.currentSession&&this.timeHandler.set("shortBreak"),"longBreak"===this.currentSession&&this.timeHandler.set("longBreak"),this.timeHandler.update()},next:()=>{"workTime"===this.currentSession?(this.sessionCounter.session++,this.sessionCounter.session%parseInt(localStorage.longBreakInterval)==0?this.sessionHandler.set("longBreak"):this.sessionHandler.set("shortBreak")):"shortBreak"===this.currentSession?(this.sessionCounter.shortBreak++,this.currentSession="workTime"):"longBreak"===this.currentSession&&(this.sessionCounter.longBreak++,this.currentSession="workTime"),this.timeHandler.update()},set:e=>{"workTime"===e?this.currentSession="workTime":"shortBreak"===e?this.currentSession="shortBreak":"longBreak"===e&&(this.currentSession="longBreak"),this.timeHandler.update()}},this.timeHandler={set:e=>{if("workTime"===e)this.time=60*parseInt(localStorage.workTime);else{if("shortBreak"===e)return this.time=60*parseInt(localStorage.shortBreak);if("longBreak"===e)return this.time=60*parseInt(localStorage.longBreak)}},update:()=>{"workTime"===this.currentSession?(this.timeHandler.set("workTime"),sessionStatus.innerHTML="Work Time"):"shortBreak"===this.currentSession?(this.timeHandler.set("shortBreak"),sessionStatus.innerHTML="Short Break"):"longBreak"===this.currentSession&&(this.timeHandler.set("longBreak"),sessionStatus.innerHTML="Long Break")},format:()=>{let e=()=>Math.floor(this.time/60)+(this.time%60<10?":0":":")+this.time%60;timerElement.innerHTML=e(),pageTitleElement.innerHTML=e()+" "+pageTitle}}}const timer=new Timer;timer.timerController.update("start"),timer.timeHandler.update();const taskTitleHandler=(e,t)=>{if("start"===t)return localStorage.getItem("title")?"":localStorage.setItem("title",taskTitleInput.innerText);e.target.innerText.length>60?taskTitleInput.style.fontSize="1.5em":taskTitleInput.style.fontSize="1.8em",setTimeout(()=>localStorage.setItem("title",taskTitleInput.innerText),25)};taskTitleInput.addEventListener("keydown",e=>taskTitleHandler(e)),taskTitleHandler(null,"start"),taskTitleInput.innerText=localStorage.getItem("title"),0==localStorage.getItem("title")&&taskTitleInput.focus(),startButton.addEventListener("click",timer.timerController.start),stopButton.addEventListener("click",()=>timer.timerController.stop("button")),applySettingsButton.addEventListener("click",e=>{e.preventDefault(),timer.timerController.update()});const toggleSettings=()=>{settingsModal.classList.toggle("invisible"),overlay.classList.toggle("invisible"),"visible"===document.body.style.overflow||""===document.body.style.overflow?document.body.style.overflow="hidden":document.body.style.overflow="visible"};overlay.addEventListener("click",toggleSettings);let muted=!1;const muteButtonHandler=e=>{if("start"===e)return!localStorage.getItem("muted")&&localStorage.setItem("muted",muted.toString()),void("false"===localStorage.getItem("muted")?muteButton.innerText="Mute":muteButton.innerText="Unmute");"true"===localStorage.getItem("muted")?(localStorage.setItem("muted","false"),audioEndSession.muted=!1,audioEndBreak.muted=!1,muteButton.innerText="Mute"):(localStorage.setItem("muted","true"),audioEndSession.muted=!0,audioEndBreak.muted=!0,muteButton.innerText="Unmute")};muteButton.addEventListener("click",muteButtonHandler),muteButtonHandler("start");let volume=50;const volumeHandler=(e,t)=>{const n=()=>{audioEndSession.volume=+localStorage.getItem("volume")/100,audioEndBreak.volume=+localStorage.getItem("volume")/100};if("start"===t)return localStorage.getItem("volume")?volumeSlider.value=+localStorage.getItem("volume"):localStorage.setItem("volume",volume.toString()),n();localStorage.setItem("volume",e.target.value),volumeSlider.setAttribute("value",localStorage.getItem("volume")),n()};volumeSlider.addEventListener("change",e=>volumeHandler(e)),volumeHandler(null,"start")}]);