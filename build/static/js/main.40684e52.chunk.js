(this.webpackJsonplearningreact=this.webpackJsonplearningreact||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(7),i=n.n(r),c=n(1),d=n(2),s=n(5),l=n(4),u=n(3),m=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"todo-item"},o.a.createElement("input",{type:"checkbox",checked:this.props.item.completed,onChange:function(){return e.props.handleChange(e.props.item.id)}}),o.a.createElement("span",{style:this.props.item.completed?{textDecoration:"line-through",color:"#cdcdcd",fontStyle:"italic"}:null},this.props.item.todo),o.a.createElement("input",{type:"button",defaultValue:"x",className:"remove",onClick:function(){return e.props.removeItem(e.props.item.id)}}))}}]),n}(a.Component),h=n(8),p=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={text:""},e.handleChange=function(t){var n=t.target,a=n.name,o=n.value;e.setState(Object(h.a)({},a,o))},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"todo-menu"},o.a.createElement("input",{type:"text",name:"text",className:"text-input",onChange:this.handleChange,placeholder:"Enter a todo item",style:this.props.warning?{backgroundColor:"red"}:null}),o.a.createElement("input",{type:"button",defaultValue:"ADD",className:"add",onClick:function(){return e.props.addItem(e.state.text)}}))}}]),n}(a.Component),f=[{id:1,todo:"Dark",Completed:!1},{id:2,todo:"Vikings",Completed:!1},{id:3,todo:"Stranger Things",Completed:!1},{id:4,todo:"You",Completed:!0}],g=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).state={todos:f,warning:!1},e.handleChange=e.handleChange.bind(Object(s.a)(e)),e.removeItem=e.removeItem.bind(Object(s.a)(e)),e.addItem=e.addItem.bind(Object(s.a)(e)),e}return Object(d.a)(n,[{key:"handleChange",value:function(e){this.setState((function(t){return{todos:t.todos.map((function(t){return t.id===e&&(t.completed=!t.completed),t}))}}))}},{key:"removeItem",value:function(e){this.setState((function(t){return t.todos=t.todos.filter((function(t){return t.id!==e})),t}))}},{key:"addItem",value:function(e){if(""!==(e=e.trim())){var t={id:(0!==this.state.todos.length?this.state.todos[this.state.todos.length-1].id:0)+1,todo:e,completed:!1};this.setState((function(e){return e.todos.push(t),e.warning=!1,e}))}else this.setState({warning:!0})}},{key:"render",value:function(){var e=this,t=this.state.todos.map((function(t){return o.a.createElement(m,{key:t.id,item:t,handleChange:e.handleChange,removeItem:e.removeItem})}));return o.a.createElement("div",{className:"todo-list"},o.a.createElement(p,{handleChange:this.handleChange,warning:this.warning,addItem:this.addItem}),t)}}]),n}(a.Component);n(14);i.a.render(o.a.createElement(g,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.40684e52.chunk.js.map