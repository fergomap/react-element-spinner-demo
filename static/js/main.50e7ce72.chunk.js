(this["webpackJsonpreact-element-spinner-demo"]=this["webpackJsonpreact-element-spinner-demo"]||[]).push([[0],{10:function(e,t,n){e.exports=n(17)},15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),l=n(9),o=n.n(l),s=n(3),u=n(4),r=n(6),m=n(5),c=n(2),d=n(7),p=n(1),g=(n(15),n(16),function(){return i.a.createElement("div",{className:"custom-spinner"},i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null))}),E=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(r.a)(this,Object(m.a)(t).call(this,e))).state={loading:!1,globalLoading:!1,isSubmitting:!1},n.loadGlobal=n.loadGlobal.bind(Object(c.a)(n)),n.onSubmit=n.onSubmit.bind(Object(c.a)(n)),n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"loadGlobal",value:function(){var e=this;this.setState({globalLoading:!0}),setTimeout((function(){return e.setState({globalLoading:!1})}),1500)}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault(),this.setState({isSubmitting:!0}),setTimeout((function(){return t.setState({isSubmitting:!1})}),1500)}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement("h1",null,"React element spinner demo")),i.a.createElement("div",{className:"margin-bottom button-container"},i.a.createElement(p.a,{loading:this.state.globalLoading,position:"global",message:"Loading"}),i.a.createElement("button",{onClick:this.loadGlobal,className:"margin-bottom"},this.state.globalLoading?"SHOWING GLOBAL SPINNER...":"SHOW GLOBAL SPINNER"),i.a.createElement("button",{onClick:function(){return e.setState({loading:!e.state.loading})},className:"margin-bottom"},this.state.loading?"HIDE ELEMENT SPINNERS":"LOAD ELEMENT SPINNERS")),i.a.createElement("div",{className:"margin-bottom"},i.a.createElement("h4",null,"Button spinner"),i.a.createElement("div",{className:"button-container"},i.a.createElement("button",null,"Button default spinner",i.a.createElement(p.a,{loading:this.state.loading,position:"inline",color:"#498DFF"})),i.a.createElement("button",null,"Button dots spinner",i.a.createElement(p.a,{loading:this.state.loading,position:"inline",spinnerType:"circle-dots"})),i.a.createElement("button",null,"Button dots collapse spinner",i.a.createElement(p.a,{loading:this.state.loading,position:"inline",spinnerType:"circle-dots-collapse"})),i.a.createElement("button",null,"Button custom spinner",i.a.createElement(p.a,{loading:this.state.loading,position:"inline",customSpinner:i.a.createElement(g,null)})),i.a.createElement("button",{className:"big-button"},"Big button",i.a.createElement(p.a,{loading:this.state.loading,position:"inline",spinnerType:"circle-dots"})))),i.a.createElement("div",null,i.a.createElement(p.a,{message:"Please wait",loading:this.state.loading,position:"centered",color:"#FF1493",secondaryColor:"pink",backgroundColor:"black",resize:!0}),i.a.createElement("h4",null,"Div with resizable default spinner with custom colors"),i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi."),i.a.createElement("p",{className:"hidden-mobile"},"Expetenda tincidunt in sed, ex partem placerat sea, porro commodo ex eam. His putant aeterno interesset at. Usu ea mundi tincidunt, omnium virtute aliquando ius ex. Ea aperiri sententiae duo. Usu nullam dolorum quaestio ei, sit vidit facilisis ea. Per ne impedit iracundia neglegentur. Consetetur neglegentur eum ut, vis animal legimus inimicus id."),i.a.createElement("p",{className:"hidden-mobile"},"Expetenda tincidunt in sed, ex partem placerat sea, porro commodo ex eam. His putant aeterno interesset at. Usu ea mundi tincidunt, omnium virtute aliquando ius ex. Ea aperiri sententiae duo. Usu nullam dolorum quaestio ei, sit vidit facilisis ea. Per ne impedit iracundia neglegentur. Consetetur neglegentur eum ut, vis animal legimus inimicus id."),i.a.createElement("p",{className:"hidden-mobile"},"Expetenda tincidunt in sed, ex partem placerat sea, porro commodo ex eam. His putant aeterno interesset at. Usu ea mundi tincidunt, omnium virtute aliquando ius ex. Ea aperiri sententiae duo. Usu nullam dolorum quaestio ei, sit vidit facilisis ea. Per ne impedit iracundia neglegentur. Consetetur neglegentur eum ut, vis animal legimus inimicus id.")),i.a.createElement("form",{noValidate:!0,onSubmit:this.onSubmit},i.a.createElement(p.a,{loading:this.state.isSubmitting,position:"centered",customSpinner:i.a.createElement(g,null)}),i.a.createElement("h4",null,"Form with custom spinner"),i.a.createElement("label",null,"Name"),i.a.createElement("input",{type:"text",placeholder:"Name"}),i.a.createElement("label",null,"Password"),i.a.createElement("input",{type:"password",placeholder:"Password"}),i.a.createElement("label",null,"Address"),i.a.createElement("input",{type:"text",placeholder:"Address"}),i.a.createElement("label",null,"Phone"),i.a.createElement("input",{type:"phone",placeholder:"Phone"}),i.a.createElement("button",null,"SUBMIT")))}}]),t}(a.Component);o.a.render(i.a.createElement(E,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.50e7ce72.chunk.js.map