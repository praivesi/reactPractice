(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{10:function(e,t,n){e.exports=n(19)},15:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(3),i=n.n(a),c=(n(15),n(1)),s=n.n(c),u=n(4),l=n(5),m=n(6),v=n(8),p=n(7),f=n(9);n(17),n(18);function h(e){var t=e.poster;return r.a.createElement("img",{src:t})}var d=function(e){var t=e.title,n=e.poster;return r.a.createElement("div",null,r.a.createElement(h,{poster:n}),r.a.createElement("h1",null,t))},g=function(e){function t(){var e,n;Object(l.a)(this,t);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(n=Object(v.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(a)))).state={},n._getMovies=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._callApi();case 2:t=e.sent,n.setState({movies:t});case 4:case"end":return e.stop()}}),e)}))),n._callApi=function(){return fetch("https://yts.mx/api/v2/list_movies.json?sort_by=rating").then((function(e){return e.json()})).then((function(e){return e.data.movies})).catch((function(e){return console.log(e)}))},n._renderMovies=function(){return n.state.movies.map((function(e){return r.a.createElement(d,{title:e.title,poster:e.large_cover_image,key:e.id})}))},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){console.log("will mount")}},{key:"componentDidMount",value:function(){this._getMovies()}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},this.state.movies?this._renderMovies():"Loading")}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.f407a4d1.chunk.js.map