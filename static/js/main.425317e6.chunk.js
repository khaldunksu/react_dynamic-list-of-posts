(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(4),o=n.n(r),s=n(5),l=n(2),i=n.n(l),u=n(6),m=n(1),d=(n(13),function(e){var t=e.user;return c.a.createElement("div",null,c.a.createElement("p",{className:"name"},t.name),c.a.createElement("p",{className:"email"},t.email),c.a.createElement("p",null,t.phone),c.a.createElement("p",null,t.address.street))}),p=function(e){var t=e.comment;return c.a.createElement("div",{className:"comment"},c.a.createElement("div",{className:"comment_name"},t.name))},f=function(e){var t=e.comments;return c.a.createElement("div",null,t.map(function(e){return c.a.createElement(p,{comment:e,key:e.id})}))},E=function(e){var t=e.post;return c.a.createElement("div",{className:"onePost"},c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"header"},c.a.createElement(d,{user:t.user})),c.a.createElement("div",{className:"title"},t.title),c.a.createElement("div",{className:"descrip"},c.a.createElement(f,{comments:t.comment}))),c.a.createElement("div",{className:"extra content"},c.a.createElement("span",null,c.a.createElement("i",{"aria-hidden":"true",className:"user icon"}),t.body)))},h=function(e){var t=e.filterPosts;return c.a.createElement("div",{className:"postList"},t.map(function(e){return c.a.createElement(E,{post:e,key:e.id})}))},v=function(){return fetch("https://jsonplaceholder.typicode.com/posts").then(function(e){return e.ok?e.json():[]}).catch(function(){return[]})},b=function(){return fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.ok?e.json():[]}).catch(function(){return[]})},N=function(){return fetch("https://jsonplaceholder.typicode.com/comments").then(function(e){return e.ok?e.json():[]}).catch(function(){return[]})};var j=function(){var e=Object(a.useState)([]),t=Object(m.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(!1),l=Object(m.a)(o,2),d=l[0],p=l[1],f=Object(a.useState)(""),E=Object(m.a)(f,2),j=E[0],y=E[1],w=j?n.filter(function(e){return e.title.toLowerCase().includes(j)||e.body.toLowerCase().includes(j)}):Object(s.a)(n);return c.a.createElement("div",{className:"App"},c.a.createElement("h1",{className:"h1"},"Dynamic list of posts"),n.length>0?c.a.createElement("div",null,c.a.createElement("div",{className:"ui action input"},c.a.createElement("input",{type:"text",onChange:function(e){y(e.target.value.toLowerCase())},placeholder:"Search..."})),c.a.createElement(h,{filterPosts:w})):c.a.createElement("button",{className:"ui positive button",type:"button",onClick:function(){var e,t,n,a,c;return i.a.async(function(o){for(;;)switch(o.prev=o.next){case 0:return p(!0),o.next=3,i.a.awrap(Promise.all([v(),b(),N()]));case 3:e=o.sent,t=Object(m.a)(e,3),n=t[0],a=t[1],c=t[2],r(n.map(function(e){return Object(u.a)({},e,{user:a.find(function(t){return t.id===e.userId}),comment:c.filter(function(t){return t.postId===e.id})})}));case 9:case"end":return o.stop()}})}},d?"Loading...":"Load"))};o.a.render(c.a.createElement(j,null),document.getElementById("root"))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.425317e6.chunk.js.map