(this.webpackJsonpmovie_app_2022=this.webpackJsonpmovie_app_2022||[]).push([[0],{34:function(e,t,a){e.exports=a(72)},39:function(e,t,a){},40:function(e,t,a){},60:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(29),s=a.n(o),c=(a(39),a(7)),l=a(1);a(40);var i=function(e){return console.log(e),r.a.createElement("div",{className:"about__container"},r.a.createElement("span",null,'"Freedom is the freedom to say that two plus two make four. If that is granted, all else foloows."'),r.a.createElement("span",null,"- George Orwell, 1984"))},m=a(17),u=a.n(m),p=a(30),v=a(11),d=a(12),E=a(14),f=a(13),h=a(31),y=a.n(h);a(60);var g=function(e){var t=e.title,a=e.year,n=e.summary,o=e.poster,s=e.genres;return r.a.createElement("div",{className:"movie"},r.a.createElement(c.b,{to:{pathname:"/movie-detail",state:{year:a,title:t,summary:n,poster:o,genres:s}}},r.a.createElement("img",{src:o,alt:t,title:t}),r.a.createElement("div",{className:"movie__data"},r.a.createElement("h3",{className:"movie__title"},t),r.a.createElement("h5",{className:"movie_year"},a),r.a.createElement("ul",{className:"movie__genres"},s.map((function(e,t){return r.a.createElement("li",{key:t,className:"movie__genre"},e)}))),r.a.createElement("p",{className:"movie_summary"},n.slice(0,180),"..."))))},_=(a(69),function(e){Object(E.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,movies:[]},e.getMoives=Object(p.a)(u.a.mark((function t(){var a,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:a=t.sent,n=a.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.getMoives()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Loading...")):r.a.createElement("div",{className:"movies"},a.map((function(e){return r.a.createElement(g,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),a}(r.a.Component));a(70);var b=function(){return r.a.createElement("div",{className:"nav"},r.a.createElement(c.b,{to:"/"},"Home"),r.a.createElement(c.b,{to:"/about"},"About"))},N=(a(71),function(e){Object(E.a)(a,e);var t=Object(f.a)(a);function a(){return Object(v.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,a=e.history;t.state&&void 0===t.state&&a.push("/")}},{key:"render",value:function(){console.log(this.props);var e=this.props.location;return e.state?r.a.createElement("div",{className:"details"},r.a.createElement("span",{className:"mTitle"},e.state.title),r.a.createElement("br",null),r.a.createElement("span",null,e.state.summary),r.a.createElement("img",{src:e.state.poster,alt:e.state.title})):null}}]),a}(r.a.Component));var j=function(){return r.a.createElement(c.a,null,r.a.createElement(b,null),r.a.createElement(l.a,{path:"/",exact:!0,component:_}),r.a.createElement(l.a,{path:"/about",component:i}),r.a.createElement(l.a,{path:"/movie-detail",component:N}))};s.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.6ae42e23.chunk.js.map