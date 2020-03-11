(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,t,a){e.exports=a(60)},60:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(28),o=a.n(c),l=a(8),i=a(9),s=a(11),m=a(10),u=a(12),d=a(30),h=a(6),v=function(){return r.a.createElement("div",null,r.a.createElement("ul",{className:"nav bg-primary a-white justify-content-center"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("h1",null,r.a.createElement("a",{className:"nav-link text-white",href:"/"},"Google Books Search")))),r.a.createElement("ul",{className:"nav bg-secondary a-white justify-content-center"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link text-white",href:"/"},"Search")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link text-white",href:"/saved"},"Saved"))))},f=function(e){return r.a.createElement("div",Object.assign({className:"container"},e))},E=function(e){return r.a.createElement("div",Object.assign({className:"row"},e))},b=function(e){return r.a.createElement("div",{className:"card"},r.a.createElement("h5",{className:"card-header text-left"},e.title),r.a.createElement("div",{className:"card-body"},r.a.createElement(E,null,r.a.createElement("div",{className:"col-sm-9"},r.a.createElement("h6",{className:"card-subtitle text-left my-auto"},"Written by ",e.authors)),r.a.createElement("div",{className:"col-sm-3"},r.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("button",{className:"btn btn-primary m-1"},"View")),r.a.createElement("button",{className:"btn btn-danger m-1",onClick:e.delete},"Delete"))),r.a.createElement(E,null,r.a.createElement("div",{className:"col-sm-3"},r.a.createElement("img",{alt:e.title,className:"img-thumbnail",src:e.image})),r.a.createElement("div",{className:"col-sm-9 my-auto"},e.description))))},p=a(13),g=a.n(p),k=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={savedBooks:[]},a.loadSavedBooks=function(){g.a.get("/api/books").then(function(e){var t=e.data;a.setState({savedBooks:t})}).catch(function(e){return console.log(e)})},a.deleteBook=function(e){g.a.delete("/api/books/"+e).then(function(e){return a.loadSavedBooks()}).catch(function(e){return console.log(e)})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.loadSavedBooks()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"card mt-3 w-100 border-primary"},r.a.createElement("h4",{className:"card-header"},"Saved"),r.a.createElement("div",{className:"card-body"},this.state.savedBooks.map(function(t){return r.a.createElement(b,{key:t._id,title:t.title,id:t._id,link:t.link,image:t.image,description:t.description,authors:t.authors,delete:function(){return e.deleteBook(t._id)}})})))}}]),t}(n.Component),N=a(29),w=function(e){return r.a.createElement("div",{className:"card w-100 mt-3 border-primary"},r.a.createElement("h4",{className:"card-header"},"Book Search"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("h5",null,"Book Name"),r.a.createElement("input",{name:"title",type:"text",onChange:e.change})),r.a.createElement("button",{className:"btn btn-primary",onClick:e.search},"Search"))))},y=function(e){return r.a.createElement("div",{className:"card"},r.a.createElement("h5",{className:"card-header text-left"},e.title),r.a.createElement("div",{className:"card-body"},r.a.createElement(E,null,r.a.createElement("div",{className:"col-sm-9"},r.a.createElement("h6",{className:"card-subtitle text-left my-auto"},"Written by ",e.authors," ")),r.a.createElement("div",{className:"col-sm-3 justify-content-end"},r.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("button",{className:"btn btn-primary m-1"},"View")),r.a.createElement("button",{className:"btn btn-success m-1",onClick:e.save},"Save"))),r.a.createElement(E,null,r.a.createElement("div",{className:"col-sm-3"},r.a.createElement("img",{alt:e.title,className:"img-thumbnail",src:e.image})),r.a.createElement("div",{className:"col-sm-9 my-auto"},e.description))))},j=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",books:[]},a.handleInputChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(N.a)({},n,r))},a.handleFormSubmit=function(e){e.preventDefault(),a.state.title&&g.a.get("https://www.googleapis.com/books/v1/volumes?q=intitle:".concat(a.state.title)).then(function(e){var t=e.data.items;a.setState({books:t})}).catch(function(e){return console.log(e)})},a.saveBook=function(e){g.a.post("/api/books",{title:e.volumeInfo.title,authors:e.volumeInfo.authors,link:e.volumeInfo.previewLink,description:e.volumeInfo.description,image:e.volumeInfo.imageLinks.thumbnail}).then(function(e){return console.log("hi")}).catch(function(e){return console.log(e)})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return console.log(this.state.books),r.a.createElement("div",null,r.a.createElement(w,{change:this.handleInputChange,search:this.handleFormSubmit}),r.a.createElement("div",{className:"card mt-3 w-100 border-primary"},r.a.createElement("h4",{className:"card-header"},"Results"),this.state.books?r.a.createElement("div",{className:"card-body"},this.state.books.map(function(t){return r.a.createElement(y,{key:t.id,title:t.volumeInfo.title,authors:t.volumeInfo.authors,link:t.volumeInfo.previewLink,image:t.volumeInfo.imageLinks.thumbnail,description:t.volumeInfo.description,save:function(){return e.saveBook(t)}})})):r.a.createElement("div",{className:"p-3"},r.a.createElement("h3",null,"No Results Found"))))}}]),t}(n.Component),O=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement(f,null,r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/"},r.a.createElement(E,{className:"text-center"},r.a.createElement(j,null))),r.a.createElement(h.a,{exact:!0,path:"/saved"},r.a.createElement(E,{className:"text-center"},r.a.createElement(k,null)))))))}}]),t}(n.Component),B=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function S(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(r.a.createElement(O,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");B?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):S(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):S(e)})}}()}},[[33,1,2]]]);
//# sourceMappingURL=main.26125233.chunk.js.map