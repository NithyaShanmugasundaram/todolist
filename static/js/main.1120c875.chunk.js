(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(7),i=n.n(r),c=(n(14),n(1)),s=n(2),l=n(4),u=n(3),h=n(5),p=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"Task"},o.a.createElement("span",{style:{textDecoration:this.props.todo.done?"line-through":"none"}},this.props.todo.value),o.a.createElement("button",{onClick:function(){return e.props.handleClick(e.props.i)}},this.props.todo.done?"undo":"complete"))}}]),t}(a.Component),d=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"List"},this.props.todos.map(function(t,n){return o.a.createElement(p,{key:n,i:n,handleClick:e.props.handleClick,todo:t})}))}}]),t}(a.Component),m=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"Form"},o.a.createElement("form",{onSubmit:this.props.handleSubmit},o.a.createElement("input",{placeholder:"Enter your input",onChange:this.props.handleChange})))}}]),t}(a.Component),b=(n(15),function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={inputValue:"",todos:[]},n.handleChange=function(e){console.log(e.target.value),n.setState({inputValue:e.target.value})},n.handleSubmit=function(e){e.preventDefault();var t={value:n.state.inputValue,done:!1},a=n.state.todos;a.push(t),n.setState({todos:a,inputValue:""})},n.handleClick=function(e){console.log("1",e);var t=n.state.todos;t[e].done=!t[e].done,n.setState({todos:t})},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(m,{inputValue:this.state.inputValue,handleChange:this.handleChange,handleSubmit:this.handleSubmit}),o.a.createElement(d,{todos:this.state.todos,handleClick:this.handleClick}))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.1120c875.chunk.js.map