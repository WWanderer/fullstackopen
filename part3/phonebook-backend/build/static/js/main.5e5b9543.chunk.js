(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},19:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(13),c=t.n(r),u=(t(19),t(2)),i=t(3),l=t.n(i),s="/api/persons",m=function(){return l.a.get(s).then((function(e){return e.data}))},f=function(e){return l.a.put("".concat(s,"/").concat(e.id),e).then((function(e){return e.data}))},d=function(e){return l.a.post(s,e).then((function(e){return e.data}))},h=function(e){return l.a.delete("".concat(s,"/").concat(e.id)).then((function(e){return e.data}))},p=function(e){var n=e.setFilter;return o.a.createElement("div",null,"search ",o.a.createElement("input",{onChange:function(e){n(e.target.value)}}))},b=function(e){var n=e.persons,t=e.setPersons,r=e.setNotification,c=Object(a.useState)(""),i=Object(u.a)(c,2),l=i[0],s=i[1],m=Object(a.useState)(""),h=Object(u.a)(m,2),p=h[0],b=h[1];return o.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a={name:l,number:p};if(n.some((function(e){return e.name===a.name}))){if(window.confirm("".concat(l," is already in the phonebook, would you like to replace this person's number?"))){var o=n.find((function(e){return e.name===a.name}));o.number=a.number,f(o).then((function(e){t(n.map((function(e){return e.id===o.id?o:e})))})).catch((function(e){r("".concat(o.name," was already removed from the database")),setTimeout((function(){r(null)}),2e3)}))}}else d(a).then((function(e){t(n.concat(e))})).finally((function(e){r("".concat(a.name," was added to the database")),setTimeout((function(){r(null)}),2e3)}));s(""),b("")}},o.a.createElement("div",null,"name: ",o.a.createElement("input",{onChange:function(e){s(e.target.value)},value:l})),o.a.createElement("div",null,"number: ",o.a.createElement("input",{type:"tel",onChange:function(e){b(e.target.value)},value:p})),o.a.createElement("div",null,o.a.createElement("button",{type:"submit"},"add")))},v=function(e){var n=e.person,t=e.persons,a=e.setPersons;return o.a.createElement("div",null,n.name," : ",n.number," ",o.a.createElement("button",{onClick:function(){window.confirm("Delete person ".concat(n.name,"?"))&&h(n).then((function(e){a(t.filter((function(e){return e.id!==n.id})))}))}},"delete"))},E=function(e){var n=e.persons,t=e.flt,a=e.setPersons,r=n.filter((function(e){return e.name.toLowerCase().includes(t)}));return console.log(r),r.map((function(e){return o.a.createElement(v,{key:e.id,person:e,persons:n,setPersons:a})}))},g=function(e){var n=e.message;return null===n?null:n.includes("removed")?o.a.createElement("div",{style:{color:"red",fontStyle:"italic",fontSize:16}},n):o.a.createElement("div",{style:{color:"green",fontStyle:"italic",fontSize:16}},n)},w=function(){var e=Object(a.useState)([]),n=Object(u.a)(e,2),t=n[0],r=n[1],c=Object(a.useState)(""),i=Object(u.a)(c,2),l=i[0],s=i[1],f=Object(a.useState)(""),d=Object(u.a)(f,2),h=d[0],v=d[1];return Object(a.useEffect)((function(){m().then((function(e){r(e)}))}),[]),o.a.createElement("div",null,o.a.createElement("h2",null,"Phonebook"),o.a.createElement(p,{setFilter:s}),o.a.createElement(g,{message:h}),o.a.createElement("h2",null,"Add person"),o.a.createElement(b,{persons:t,setPersons:r,setNotification:v}),o.a.createElement("h2",null,"Numbers"),o.a.createElement(E,{persons:t,flt:l,setPersons:r}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.5e5b9543.chunk.js.map