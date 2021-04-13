(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],{43:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},49:function(e,t,a){e.exports=a(62)},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(7),l=a.n(r),m=(a(54),a(33)),s=a(24),o=a(25),c=a(31),d=a(30),h=(a(55),a(56),a(57),function(e){var t=e.title,a=e.description,i=e.imgUrl,r=e.imdbUrl;return n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-image"},n.a.createElement("figure",{className:"image is-4by3"},n.a.createElement("img",{src:i,alt:"Film logo"}))),n.a.createElement("div",{className:"card-content"},n.a.createElement("div",{className:"media"},n.a.createElement("div",{className:"media-left"},n.a.createElement("figure",{className:"image is-48x48"},n.a.createElement("img",{src:"images/imdb-logo.jpeg",alt:"imdb"}))),n.a.createElement("div",{className:"media-content"},n.a.createElement("p",{className:"title is-8"},t))),n.a.createElement("div",{className:"content"},a,n.a.createElement("br",null),n.a.createElement("a",{href:r},"IMDB"))))});h.defaultProps={description:""};var u=function(e){var t=e.movies;return n.a.createElement("div",{className:"movies"},t.map((function(e){return n.a.createElement(h,Object.assign({key:e.imdbId},e))})))};u.defaultProps={movies:[]};var g=a(26),v=a(37),p=a(94),b=a(95),f=(a(58),function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""},e.handleSubmit=function(t){t.preventDefault(),e.props.addMovie(Object(v.a)({},e.state)),e.setState({title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""})},e.handleChange=function(t){var a=t.target,i=a.name,n=a.value;e.setState(Object(g.a)({},i,n))},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state,t=e.title,a=e.description,i=e.imgUrl,r=e.imdbUrl,l=e.imdbId;return n.a.createElement("form",{className:"form",onSubmit:this.handleSubmit},n.a.createElement("div",{className:"form__field"},n.a.createElement(p.a,{id:"standard-basic",label:"Title",variant:"outlined",name:"title",value:t,onChange:this.handleChange,required:!0})),n.a.createElement("div",{className:"form__field"},n.a.createElement(p.a,{id:"standard-basic",label:"Description",variant:"outlined",value:a,name:"description",onChange:this.handleChange,required:!0})),n.a.createElement("div",{className:"form__field"},n.a.createElement(p.a,{id:"standard-basic",label:"Image URL",variant:"outlined",value:i,name:"imgUrl",onChange:this.handleChange,required:!0})),n.a.createElement("div",{className:"form__field"},n.a.createElement(p.a,{id:"standard-basic",label:"IMDB URL",variant:"outlined",value:r,name:"imdbUrl",onChange:this.handleChange,required:!0})),n.a.createElement("div",{className:"form__field"},n.a.createElement(p.a,{id:"standard-basic",label:"IMDB URL",variant:"outlined",value:l,name:"imdbId",onChange:this.handleChange,required:!0})),n.a.createElement(b.a,{variant:"contained",color:"primary",type:"submit"},"Add movie"))}}]),a}(i.Component)),M=a(43),E=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={movies:Object(m.a)(M)},e.addMovie=function(t){e.setState((function(e){return{movies:[].concat(Object(m.a)(e.movies),[t])}}))},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state.movies;return n.a.createElement("div",{className:"page"},n.a.createElement("div",{className:"page-content"},n.a.createElement(u,{movies:e})),n.a.createElement("div",{className:"sidebar"},n.a.createElement(f,{addMovie:this.addMovie})))}}]),a}(i.Component);l.a.render(n.a.createElement(E,null),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.7b505431.chunk.js.map