(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{10:function(t,e,a){},14:function(t,e,a){t.exports=a(21)},19:function(t,e,a){},21:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),s=a(12),l=a.n(s),i=(a(8),a(19),a(13)),o=a(6),r=a.n(o),u=a(9),d=a(7),h=a(2),p=a(3),m=a(1),f=a(4),k=a(5),v=(a(10),function(t){Object(k.a)(a,t);var e=Object(f.a)(a);function a(t,n,c){var s;return Object(h.a)(this,a),(s=e.call(this,t)).id=n,s.parentFunc=c,s}return Object(p.a)(a,[{key:"render",value:function(){var t=this;return c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){return t.props.parentFunc(t.props.id)},className:"btn btn-danger"},"X"))}}]),a}(n.Component)),b=function(t){Object(k.a)(a,t);var e=Object(f.a)(a);function a(t){var n;return Object(h.a)(this,a),(n=e.call(this,t)).state={checked:!1},n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){!0===this.props.value&&this.setState({checked:this.props.value})}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("input",{className:"".concat(!0===this.props.value?"d-none":""),type:"checkbox",onChange:this.props.handleChecked}))}}]),a}(n.Component),y=function(t){Object(k.a)(a,t);var e=Object(f.a)(a);function a(t){var n;return Object(h.a)(this,a),(n=e.call(this,t)).state={id:"",value:"",checked:!1},n.handleCheck=n.handleCheck.bind(Object(m.a)(n)),n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var t=Object(d.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.setState({id:this.props.item.id,value:this.props.item.value,checked:this.props.item.checked});case 2:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"handleCheck",value:function(){var t=Object(d.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.setState({checked:!this.state.checked});case 2:console.log(this.state.checked),this.props.parentFunc2(this.state.id,this.state.checked);case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return c.a.createElement("li",{className:"py-2 d-flex justify-content-around",key:this.state.id},c.a.createElement(b,{value:this.state.checked,handleChecked:this.handleCheck}),c.a.createElement("p",{className:"".concat(!0===this.state.checked?"del":""," col-4 text-center")},this.state.value),c.a.createElement(v,{id:this.state.id,parentFunc:this.props.parentFunc}))}}]),a}(c.a.Component),j=function(t){Object(k.a)(a,t);var e=Object(f.a)(a);function a(t){var n;return Object(h.a)(this,a),(n=e.call(this,t)).state={list:[],text:"",total:0,completed:0},n.addItem=n.addItem.bind(Object(m.a)(n)),n.updateInput=n.updateInput.bind(Object(m.a)(n)),n.deleteItem=n.deleteItem.bind(Object(m.a)(n)),n.clearAll=n.clearAll.bind(Object(m.a)(n)),n.handleCheck=n.handleCheck.bind(Object(m.a)(n)),n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){if(null!==localStorage.getItem("list")){var t=JSON.parse(window.localStorage.getItem("list"));console.log(t),this.setState({list:t,total:t.length,completed:this.state.completed})}else this.setState({list:[],total:0})}},{key:"handleCheck",value:function(){var t=Object(d.a)(r.a.mark((function t(e,a){var n,c=this;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(n=Object(u.a)(this.state.list)).map((function(t){t.id===e&&(t.checked=a,!0===a?(console.log("you clicked it on"),c.setState({completed:c.state.completed+1})):(console.log("you clicked it off"),c.setState({completed:c.state.completed-1})))})),this.setState({list:n}),window.localStorage.setItem("list",JSON.stringify(n));case 4:case"end":return t.stop()}}),t,this)})));return function(e,a){return t.apply(this,arguments)}}()},{key:"updateInput",value:function(t,e){this.setState(Object(i.a)({},t,e))}},{key:"addItem",value:function(){if(""!==this.state.text.slice()){var t={id:Date.now(),value:this.state.text.slice(),checked:!1},e=Object(u.a)(this.state.list);e.push(t),this.setState({list:e,text:"",total:this.state.list.length+1}),window.localStorage.setItem("list",JSON.stringify(e))}!0===this.state.checked&&(console.log("you clicked it on"),this.setState({completed:this.state.completed+1}))}},{key:"deleteItem",value:function(t){var e=Object(u.a)(this.state.list),a=[];e.map((function(e){e.id!==t&&a.push(e)})),this.setState({list:a,total:this.state.list.length-1}),window.localStorage.setItem("list",JSON.stringify(a))}},{key:"clearAll",value:function(){this.setState({list:[],total:0,completed:0}),localStorage.clear()}},{key:"render",value:function(){var t=this;return c.a.createElement("div",{className:"todoListContainer"},c.a.createElement("div",{className:"container-fluid d-flex justify-content-center toDoList"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12 d-flex justify-content-around pt-3"},c.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:this.clearAll},"Clear all"),c.a.createElement("h1",{className:"text-center"},"To-do List:"),c.a.createElement("h2",{className:""},this.state.total," total")),c.a.createElement("div",{className:"pt-3 col-12 d-flex justify-content-around"},c.a.createElement("input",{className:" btn btn-light",type:"text",value:this.state.text,placeholder:"task",onChange:function(e){return t.updateInput("text",e.target.value)}}),c.a.createElement("button",{className:"btn btn-dark",onClick:this.addItem},"Add Item")),c.a.createElement("h2",{className:"".concat(0!==this.state.completed?"col-12 text-center pt-2":"d-none")},this.state.completed," completed"),c.a.createElement("div",{className:"col-12"},c.a.createElement("ul",{className:"p-2 list-unstyled"},this.state.list.map((function(e){return c.a.createElement(y,{key:e.id,item:e,parentFunc:t.deleteItem,parentFunc2:t.handleCheck,handleChecked:t.handleCheck})})))))))}}]),a}(c.a.Component);var O=function(){return c.a.createElement("div",{className:"app"},c.a.createElement(j,null))};l.a.render(c.a.createElement(O,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.13bd0738.chunk.js.map