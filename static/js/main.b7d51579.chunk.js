(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{35:function(e,n,t){"use strict";t.r(n);var o=t(2),a=t(0),r=t(9),d=t.n(r),c=[{name:"\u5168\u90e8",value:"all"},{name:"\u5b8c\u6210",value:"done"},{name:"\u672a\u5b8c\u6210",value:"undone"}],l="\u65b0\u589e",i="\u5b8c\u6210",u="\u672a\u5b8c\u6210",s="\u522a\u9664",j="\u5132\u5b58",h="\u5b8c\u6210\u522a\u9664",b=t(10),v=t(24),O=t(7);var x=t(39);function f(e){var n=e.error,t=e.handleError;return Object(o.jsx)(x.a,{variant:"danger",onClose:function(){return t("")},dismissible:!0,children:n})}var T=t(37),m=t(22),g=t(40);function D(e){var n=e.todo,t=e.handleTodoDone,a=e.handleTodoEdit,r=e.handleTodoDelete,d=e.buttonDoneText,c=e.buttonUndoneText,l=e.buttonDeleteText;return Object(o.jsxs)(T.a,{className:"todo mb-3",children:[Object(o.jsx)(T.a.Prepend,{children:Object(o.jsx)(m.a,{variant:"outline-info",active:n.done,onClick:function(){return t(n.id)},children:n.done?d:c})}),Object(o.jsx)(g.a,{value:n.content,disabled:n.done,onChange:function(e){return a(n.id,e.target.value)}}),Object(o.jsx)(T.a.Append,{children:Object(o.jsx)(m.a,{variant:"outline-danger",onClick:function(){return r(n.id)},children:l})})]})}function p(e){var n=e.handleTodoAdd,t=e.handleError,r=e.explanation,d=e.emptyMessage,c=e.buttonAddText,l=Object(a.useState)(""),i=Object(O.a)(l,2),u=i[0],s=i[1];return Object(o.jsxs)(T.a,{className:"my-3",children:[Object(o.jsx)(g.a,{value:u,placeholder:r,onChange:function(e){return s(e.target.value)}}),Object(o.jsx)(T.a.Append,{children:Object(o.jsx)(m.a,{variant:"outline-secondary",onClick:function(){if(""===u)return t(d);n({content:u,done:!1}),s("")},children:c})})]})}var S=t(41),y=t(23),C=t(38);function E(){var e=Object(a.useContext)(A),n=Object(O.a)(e,4),t=n[0],r=n[1],d=n[2],c=n[3];return Object(o.jsxs)(S.a,{type:"radio",name:"filter",value:r,onChange:function(e){return d(e)},children:[Object(o.jsxs)(y.a,{value:c[0].value,variant:"outline-secondary",children:[c[0].name,Object(o.jsx)(C.a,{className:"ml-1",variant:"light",children:t[0]})]}),Object(o.jsxs)(y.a,{value:c[1].value,variant:"outline-secondary",children:[c[1].name,Object(o.jsx)(C.a,{className:"ml-1",variant:"light",children:t[1]})]}),Object(o.jsxs)(y.a,{value:c[2].value,variant:"outline-secondary",children:[c[2].name,Object(o.jsx)(C.a,{className:"ml-1",variant:"light",children:t[2]})]})]})}function N(e){var n=e.handleTodoSave,t=e.handleTodoDeleteDone,a=e.buttonSaveText,r=e.buttonDeleteDoneText;return Object(o.jsxs)("div",{className:"container d-flex justify-content-between fixed-bottom py-3 bg-white",children:[Object(o.jsx)(m.a,{variant:"outline-info",onClick:n,children:a}),Object(o.jsx)(E,{}),Object(o.jsx)(m.a,{variant:"danger",onClick:t,children:r})]})}var A=Object(a.createContext)();function k(){var e=function(e){var n=Object(a.useRef)(1),t=Object(a.useState)((function(){var t=localStorage.getItem(e);return t&&""!==t&&"[]"!==t?(t=JSON.parse(t),n.current=t[0].id):t=[],t})),o=Object(O.a)(t,2),r=o[0],d=o[1],c=Object(a.useState)("all"),l=Object(O.a)(c,2),i=l[0],u=l[1],s=Object(a.useState)(""),j=Object(O.a)(s,2),h=j[0],x=j[1],f=r.filter((function(e){return e.done})).length,T=[r.length,f,r.length-f];return{todos:r,select:i,count:T,error:h,handleTodoAdd:function(e){d([Object(b.a)({id:n.current},e)].concat(Object(v.a)(r))),n.current++},handleTodoDone:function(e){d(r.map((function(n){return n.id!==e?n:Object(b.a)(Object(b.a)({},n),{},{done:!n.done})})))},handleTodoEdit:function(e,n){d(r.map((function(t){return t.id!==e?t:Object(b.a)(Object(b.a)({},t),{},{content:n})})))},handleTodoDelete:function(e){d(r.filter((function(n){return n.id!==e})))},handleTodoDeleteDone:function(){d(r.filter((function(e){return!e.done})))},handleTodoSave:function(){localStorage.setItem(e,JSON.stringify(r))},handleSelect:function(e){u(e)},handleError:function(e){x(e)}}}("ZoeHYHTodoList"),n=e.todos,t=e.select,r=e.count,d=e.error,x=e.handleTodoAdd,T=e.handleTodoDone,m=e.handleTodoEdit,g=e.handleTodoDelete,S=e.handleTodoDeleteDone,y=e.handleTodoSave,C=e.handleSelect,E=e.handleError;return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h1",{className:"my-3 text-secondary",children:"TODO LIST"}),""!==d?Object(o.jsx)(f,{error:d,handleError:E}):"",Object(o.jsx)(p,{handleTodoAdd:x,handleError:E,explanation:"\u5728\u9019\u88e1\u8f38\u5165\u65b0\u7684 Todo\uff01",emptyMessage:"\u4f60\u6c92\u6709\u8f38\u5165 Todo \u5594\uff01",buttonAddText:l}),Object(o.jsx)("div",{children:n.map((function(e){return(t===c[0].value||t===c[1].value===e.done)&&Object(o.jsx)(D,{todo:e,handleTodoDone:T,handleTodoEdit:m,handleTodoDelete:g,buttonDoneText:i,buttonUndoneText:u,buttonDeleteText:s},e.id)}))}),Object(o.jsx)(A.Provider,{value:[r,t,C,c],children:Object(o.jsx)(N,{handleTodoSave:y,handleTodoDeleteDone:S,buttonSaveText:j,buttonDeleteDoneText:h})})]})}var I=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,42)).then((function(n){var t=n.getCLS,o=n.getFID,a=n.getFCP,r=n.getLCP,d=n.getTTFB;t(e),o(e),a(e),r(e),d(e)}))};d.a.render(Object(o.jsx)(k,{}),document.getElementById("root")),I()}},[[35,1,2]]]);
//# sourceMappingURL=main.b7d51579.chunk.js.map