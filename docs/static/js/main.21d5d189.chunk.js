(this["webpackJsonp07-heroes-app"]=this["webpackJsonp07-heroes-app"]||[]).push([[0],{23:function(e,a,t){e.exports=t(45)},45:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(20),l=t.n(c),s=t(9),i=t(3),o=t(1),m=Object(r.createContext)(),u="[auth] login",p="[auth] logout",h=function(e){var a=e.history,t=Object(r.useContext)(m).dispatch;return n.a.createElement("div",{className:"container mt-5"},n.a.createElement("h1",null,"Login screen"),n.a.createElement("hr",null),n.a.createElement("button",{className:"btn btn-primary",onClick:function(){var e=localStorage.getItem("lastPath")||"/";t({type:u,payload:{name:"Alejandro"}}),a.replace(e)}},"Login"))},d=function(){var e=Object(r.useContext)(m),a=e.user.name,t=e.dispatch,c=Object(o.g)();return n.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark"},n.a.createElement(i.b,{className:"navbar-brand",to:"/"},"HEROES-APP"),n.a.createElement("div",{className:"navbar-collapse"},n.a.createElement("div",{className:"navbar-nav"},n.a.createElement(i.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/marvel"},"Marvel"),n.a.createElement(i.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/dc"},"DC"),n.a.createElement(i.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/search"},"Search"))),n.a.createElement("div",{className:"navbar-collapse collapse w-100 order-3 dual-collapse2"},n.a.createElement("ul",{className:"navbar-nav ml-auto"},n.a.createElement("span",{className:"nav-item nav-link text-info"},a),n.a.createElement("button",{className:"btn nav-item nav-link",onClick:function(){t({type:p}),c.replace("/")}},"Logout"))))},v=[{id:"dc-batman",superhero:"Batman",publisher:"DC Comics",alter_ego:"Bruce Wayne",first_appearance:"Detective Comics #27",characters:"Bruce Wayne"},{id:"dc-superman",superhero:"Superman",publisher:"DC Comics",alter_ego:"Kal-El",first_appearance:"Action Comics #1",characters:"Kal-El"},{id:"dc-flash",superhero:"Flash",publisher:"DC Comics",alter_ego:"Jay Garrick",first_appearance:"Flash Comics #1",characters:"Jay Garrick, Barry Allen, Wally West, Bart Allen"},{id:"dc-green",superhero:"Green Lantern",publisher:"DC Comics",alter_ego:"Alan Scott",first_appearance:"All-American Comics #16",characters:"Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz"},{id:"dc-arrow",superhero:"Green Arrow",publisher:"DC Comics",alter_ego:"Oliver Queen",first_appearance:"More Fun Comics #73",characters:"Oliver Queen"},{id:"dc-wonder",superhero:"Wonder Woman",publisher:"DC Comics",alter_ego:"Princess Diana",first_appearance:"All Star Comics #8",characters:"Princess Diana"},{id:"dc-martian",superhero:"Martian Manhunter",publisher:"DC Comics",alter_ego:"J'onn J'onzz",first_appearance:"Detective Comics #225",characters:"Martian Manhunter"},{id:"dc-robin",superhero:"Robin/Nightwing",publisher:"DC Comics",alter_ego:"Dick Grayson",first_appearance:"Detective Comics #38",characters:"Dick Grayson"},{id:"dc-blue",superhero:"Blue Beetle",publisher:"DC Comics",alter_ego:"Dan Garret",first_appearance:"Mystery Men Comics #1",characters:"Dan Garret, Ted Kord, Jaime Reyes"},{id:"dc-black",superhero:"Black Canary",publisher:"DC Comics",alter_ego:"Dinah Drake",first_appearance:"Flash Comics #86",characters:"Dinah Drake, Dinah Lance"},{id:"marvel-spider",superhero:"Spider Man",publisher:"Marvel Comics",alter_ego:"Peter Parker",first_appearance:"Amazing Fantasy #15",characters:"Peter Parker"},{id:"marvel-captain",superhero:"Captain America",publisher:"Marvel Comics",alter_ego:"Steve Rogers",first_appearance:"Captain America Comics #1",characters:"Steve Rogers"},{id:"marvel-iron",superhero:"Iron Man",publisher:"Marvel Comics",alter_ego:"Tony Stark",first_appearance:"Tales of Suspense #39",characters:"Tony Stark"},{id:"marvel-thor",superhero:"Thor",publisher:"Marvel Comics",alter_ego:"Thor Odinson",first_appearance:"Journey into Myster #83",characters:"Thor Odinson"},{id:"marvel-hulk",superhero:"Hulk",publisher:"Marvel Comics",alter_ego:"Bruce Banner",first_appearance:"The Incredible Hulk #1",characters:"Bruce Banner"},{id:"marvel-wolverine",superhero:"Wolverine",publisher:"Marvel Comics",alter_ego:"James Howlett",first_appearance:"The Incredible Hulk #180",characters:"James Howlett"},{id:"marvel-daredevil",superhero:"Daredevil",publisher:"Marvel Comics",alter_ego:"Matthew Michael Murdock",first_appearance:"Daredevil #1",characters:"Matthew Michael Murdock"},{id:"marvel-hawkeye",superhero:"Hawkeye",publisher:"Marvel Comics",alter_ego:"Clinton Francis Barton",first_appearance:"Tales of Suspense #57",characters:"Clinton Francis Barton"},{id:"marvel-cyclops",superhero:"Cyclops",publisher:"Marvel Comics",alter_ego:"Scott Summers",first_appearance:"X-Men #1",characters:"Scott Summers"},{id:"marvel-silver",superhero:"Silver Surfer",publisher:"Marvel Comics",alter_ego:"Norrin Radd",first_appearance:"The Fantastic Four #48",characters:"Norrin Radd"}],b=function(e){var a=e.id,t=e.superhero,r=(e.publisher,e.alter_ego),c=e.first_appearance,l=e.characters;return n.a.createElement("div",{className:"card ms-3",style:{maxWidth:540}},n.a.createElement("div",{className:"row no-gutters"},n.a.createElement("div",{className:"col-md-4"},n.a.createElement("img",{src:"./assets/heroes/".concat(a,".jpg"),className:"card-img",alt:t})),n.a.createElement("div",{className:"col-md-8"},n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},t," "),n.a.createElement("p",{className:"card-text"},r),r!==l&&n.a.createElement("p",{className:"card-text"},l),n.a.createElement("p",{className:"card-text"}," ",n.a.createElement("small",{className:"text-muted"},c)),n.a.createElement(i.b,{className:"btn btn-primary",to:"./hero/".concat(a)},"More !")))))},E=function(e){var a=e.publisher,t=Object(r.useMemo)((function(){return function(e){if(!["DC Comics","Marvel Comics"].includes(e))throw new Error('Publisher "'.concat(e,'" no existe'));return v.filter((function(a){return a.publisher===e}))}(a)}),[a]);return n.a.createElement("div",{className:"card-columns animate__animated animate__fadeIn"},t.map((function(e){return n.a.createElement(b,Object.assign({key:e.id},e))})))},f=function(){return n.a.createElement("div",null,n.a.createElement("h1",null,"Marvel Screen"),n.a.createElement(E,{publisher:"Marvel Comics"}))},g=function(e){var a=e.history,t=Object(o.i)().heroeId,c=Object(r.useMemo)((function(){return e=t,v.find((function(a){return a.id===e}));var e}),[t]);if(!c)return n.a.createElement(o.a,{to:"/"});var l=c.superhero,s=c.publisher,i=c.alter_ego,m=c.first_appearance,u=c.characters.split(",");return n.a.createElement("div",{className:"row mt-5"},n.a.createElement("div",{className:"col-4"},n.a.createElement("img",{alt:l,className:"img-thumbnail animate__animated animate__fadeInLeft",src:"../assets/heroes/".concat(t,".jpg")})),n.a.createElement("div",{className:"col-8"},n.a.createElement("h3",null,l),n.a.createElement("ul",{className:"list-group list-group-flush"},n.a.createElement("li",{className:"list-group-item"},n.a.createElement("b",null,"Alterego:")," ",i),n.a.createElement("li",{className:"list-group-item"},n.a.createElement("b",null,"Publisher:")," ",s),n.a.createElement("li",{className:"list-group-item"},n.a.createElement("b",null,"First appearance:")," ",m)),n.a.createElement("h5",null,"Characters"),n.a.createElement("ul",null,u.map((function(e,a){return n.a.createElement("li",{key:a},e)}))),n.a.createElement("button",{className:"btn btn-outline-info mt-4",onClick:function(){a.length<=2?a.push("/"):a.goBack()}},"Return")))},C=function(){return n.a.createElement("div",null,n.a.createElement("h1",null,"DC Screen"),n.a.createElement(E,{publisher:"DC Comics"}))},_=t(22),N=t.n(_),y=t(11),k=t(10),S=function(e){var a=e.history,t=Object(o.h)(),c=N.a.parse(t.search).q,l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=Object(r.useState)(e),t=Object(s.a)(a,2),n=t[0],c=t[1],l=function(){c(e)},i=function(e){var a=e.target;c(Object(k.a)(Object(k.a)({},n),{},Object(y.a)({},a.name,a.value)))};return[n,i,l]}({searchText:void 0===c?"":c}),i=Object(s.a)(l,2),m=i[0],u=i[1],p=m.searchText,h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return""===e?v:v.filter((function(a){return a.superhero.toLocaleLowerCase().includes(e)}))}(p);return n.a.createElement("div",null,n.a.createElement("h1",null,"Search Screen"),n.a.createElement("hr",null),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-5"},n.a.createElement("h4",null,"Search Form"),n.a.createElement("hr",null),n.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a.push("?q=".concat(p))}},n.a.createElement("input",{type:"text",placeholder:"Find ur hero",className:"form-control",name:"searchText",value:p,onChange:u}),n.a.createElement("button",{type:"submit",className:"btn m-1 btn-block btn-outline-primary"},"Search"))),n.a.createElement("div",{className:"col-7"},n.a.createElement("h4",null,"Results"),h.map((function(e){return n.a.createElement(b,Object.assign({key:e.id},e))})))))},M=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(d,null),n.a.createElement("div",{className:"container mt-2"},n.a.createElement(o.d,null,n.a.createElement(o.b,{exact:!0,path:"/marvel",component:f}),n.a.createElement(o.b,{exact:!0,path:"/hero/:heroeId",component:g}),n.a.createElement(o.b,{exact:!0,path:"/dc",component:C}),n.a.createElement(o.b,{exact:!0,path:"/search",component:S}),n.a.createElement(o.a,{to:"/marvel"}))))},O=t(12),D=t(7),j=t.n(D),x=function(e){var a=e.isAuthenticated,t=e.component,r=Object(O.a)(e,["isAuthenticated","component"]);return localStorage.setItem("lastPath",r.location.pathname),n.a.createElement(o.b,Object.assign({},r,{component:function(e){return a?n.a.createElement(t,e):n.a.createElement(o.a,{to:"/login"})}}))};x.prototypes={isAuthenticated:j.a.bool.isRequired,component:j.a.func.isRequired};var A=x,w=function(e){var a=e.isAuthenticated,t=e.component,r=Object(O.a)(e,["isAuthenticated","component"]);return n.a.createElement(o.b,Object.assign({},r,{component:function(e){return a?n.a.createElement(o.a,{to:"/"}):n.a.createElement(t,e)}}))};w.prototypes={isAuthenticated:j.a.bool.isRequired,component:j.a.func.isRequired};var B=w,J=function(){var e=Object(r.useContext)(m).user;return n.a.createElement(i.a,null,n.a.createElement("div",null,n.a.createElement(o.d,null,n.a.createElement(B,{exact:!0,path:"/login",component:h,isAuthenticated:e.logged}),n.a.createElement(A,{path:"/",component:M,isAuthenticated:e.logged}))))},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case u:return Object(k.a)(Object(k.a)({},a.payload),{},{logged:!0});case p:return{logged:!1};default:return e}},F=function(){return JSON.parse(localStorage.getItem("user"))||{logged:!1}},T=function(){var e=Object(r.useReducer)(R,{},F),a=Object(s.a)(e,2),t=a[0],c=a[1];return Object(r.useEffect)((function(){localStorage.setItem("user",JSON.stringify(t))}),[t]),n.a.createElement(n.a.Fragment,null,n.a.createElement(m.Provider,{value:{user:t,dispatch:c}},n.a.createElement(J,null)))};l.a.render(n.a.createElement(T,null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.21d5d189.chunk.js.map