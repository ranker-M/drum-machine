(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],{10:function(e,r,d){},12:function(e,r,d){"use strict";d.r(r);var a=d(1),c=d.n(a),i=d(4),o=d.n(i),t=(d(9),d(3)),s=(d(10),d(0));var n=function(){var e={Q:{keyCode:81,keyTrigger:"Q",id:"Chord-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"},W:{keyCode:87,keyTrigger:"W",id:"Chord-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"},E:{keyCode:69,keyTrigger:"E",id:"Chord-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"},A:{keyCode:65,keyTrigger:"A",id:"Shaker",url:"https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"},S:{keyCode:83,keyTrigger:"S",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"},D:{keyCode:68,keyTrigger:"D",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"},Z:{keyCode:90,keyTrigger:"Z",id:"Punchy-Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"},X:{keyCode:88,keyTrigger:"X",id:"Side-Stick",url:"https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"},C:{keyCode:67,keyTrigger:"C",id:"Snare",url:"https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"}},r=Object.values(e).map((function(e){return e.keyCode})),d=Object(a.useState)("Display"),c=Object(t.a)(d,2),i=c[0],o=c[1],n=Object(a.useState)(20),m=Object(t.a)(n,2),u=m[0],p=m[1],k=function(r){var d=e[r.target.id];o(d.id);var a=r.target.children[0];a.volume=u/100,a.paused||(a.currentTime=0),a.play()};return window.onkeydown=function(e){var d=r.indexOf(e.keyCode);if(-1!==(d=-1!==d?d:r.indexOf(e.keyCode-32))){var a=document.getElementById(String.fromCharCode(e.keyCode).toUpperCase());a.classList.add("click"),a.click()}},window.onkeyup=function(e){var d=r.indexOf(e.keyCode);-1!==(d=-1!==d?d:r.indexOf(e.keyCode-32))&&document.getElementById(String.fromCharCode(e.keyCode).toUpperCase()).classList.remove("click")},Object(s.jsx)("main",{className:"main",children:Object(s.jsxs)("div",{id:"drum-machine",children:[Object(s.jsx)("div",{id:"display",children:i}),Object(s.jsx)("div",{id:"keypad",children:Object.values(e).map((function(e){return Object(s.jsxs)("div",{className:"drum-pad",onClick:k,id:e.keyTrigger,children:[Object(s.jsx)("audio",{className:"clip",id:e.keyTrigger,src:e.url}),e.keyTrigger]},e.keyTrigger)}))}),Object(s.jsx)("input",{type:"range",id:"volume",value:u,min:"10",onChange:function(e){return p(e.target.value)}})]})})};o.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(n,{})}),document.getElementById("root"))},9:function(e,r,d){}},[[12,1,2]]]);
//# sourceMappingURL=main.97385d9e.chunk.js.map