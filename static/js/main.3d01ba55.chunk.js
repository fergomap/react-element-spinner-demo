(this["webpackJsonpreact-element-spinner-demo"]=this["webpackJsonpreact-element-spinner-demo"]||[]).push([[0],{10:function(e,n,t){e.exports=t(19)},17:function(e,n,t){},18:function(e,n,t){},19:function(e,n,t){"use strict";t.r(n);var m=t(0),i=t.n(m),a=t(9),o=t.n(a),r=t(3),s=t(4),l=t(6),d=t(5),u=t(1),c=t(7),p=t(2),h=t.n(p);!function(e){if(e&&"undefined"!==typeof window){var n=document.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=e,document.head.appendChild(n)}}(".hidden {\n  display: none !important;\n}\n\n.background {\n  width: 100%;\n  height: 100%;\n  opacity: 0.7;\n  position: absolute;\n  z-index: 1;\n}\n\n.inline {\n  display: inline;\n}\n\n.centered {\n  position: absolute;\n}\n\n.loader-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.loader {\n  z-index: 2;\n}\n\n.global {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 5;\n}\n.global .loader.default {\n  position: absolute;\n  width: 100px;\n  height: 100px;\n}\n\n.default {\n  border: 3px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 3px solid #3578E5;\n  width: calc(100% - 6px);\n  height: calc(100% - 6px);\n  -webkit-animation: spin 1s linear infinite;\n  animation: spin 1s linear infinite;\n}\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n  }\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.circle-dots {\n  color: #ffffff;\n  font-size: 10px;\n  width: 1em;\n  height: 1em;\n  border-radius: 50%;\n  -webkit-animation: circle-dots 1.6s infinite linear;\n  animation: circle-dots 1.6s infinite linear;\n  -webkit-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  transform: translateZ(0);\n}\n\n@-webkit-keyframes circle-dots {\n  0%, 100% {\n    box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;\n  }\n  12.5% {\n    box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n  }\n  25% {\n    box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n  }\n  37.5% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;\n  }\n  50% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;\n  }\n  62.5% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;\n  }\n  75% {\n    box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;\n  }\n  87.5% {\n    box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;\n  }\n}\n@keyframes circle-dots {\n  0%, 100% {\n    box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;\n  }\n  12.5% {\n    box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n  }\n  25% {\n    box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n  }\n  37.5% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;\n  }\n  50% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;\n  }\n  62.5% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;\n  }\n  75% {\n    box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;\n  }\n  87.5% {\n    box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;\n  }\n}\n.circle-dots-collapse {\n  color: #ffffff;\n  font-size: 90px;\n  width: 1em;\n  height: 1em;\n  border-radius: 50%;\n  margin: 72px auto;\n  position: relative;\n  -webkit-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-animation: circle-dots-collapse 1.7s infinite ease, round 1.7s infinite ease;\n  animation: circle-dots-collapse 1.7s infinite ease, round 1.7s infinite ease;\n}\n\n@-webkit-keyframes circle-dots-collapse {\n  0% {\n    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n  }\n  5%, 95% {\n    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n  }\n  10%, 59% {\n    box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;\n  }\n  20% {\n    box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;\n  }\n  38% {\n    box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;\n  }\n  100% {\n    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n  }\n}\n@keyframes circle-dots-collapse {\n  0% {\n    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n  }\n  5%, 95% {\n    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n  }\n  10%, 59% {\n    box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;\n  }\n  20% {\n    box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;\n  }\n  38% {\n    box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;\n  }\n  100% {\n    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n  }\n}\n@-webkit-keyframes round {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n@keyframes round {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}");var f,E,b={BLUE:"#3578e5",WHITE:"#ffffff",BACKGROUND:"#d3d3d3",SECONDARY:"#f3f3f3"},g={CIRCLE_DOTS:10,CIRCLE_DOTS_COLLAPSE:90},C={CENTERED_DEFAULT:5,CENTERED_NOT_DEFAULT:2,CIRCLE_DOTS:.15,CIRCLE_DOTS_COLLAPSE:.7};!function(e){e.INLINE="inline",e.GLOBAL="global",e.CENTERED="centered"}(f||(f={})),function(e){e.DEFAULT="default",e.CIRCLE_DOTS="circle-dots",e.CIRCLE_DOTS_COLLAPSE="circle-dots-collapse"}(E||(E={}));var L=function(e){return!e||e===E.DEFAULT},w=function(e){return parseInt(e.replace("px",""))},x=function(e){function n(e){var t;return Object(r.a)(this,n),(t=Object(l.a)(this,Object(d.a)(n).call(this,e))).ref=h.a.createRef(),t.setUpSpinner=t.setUpSpinner.bind(Object(u.a)(t)),t.getContent=t.getContent.bind(Object(u.a)(t)),t}return Object(c.a)(n,e),Object(s.a)(n,[{key:"componentDidMount",value:function(){this.setUpSpinner(),this.props.resize&&this.props.position===f.CENTERED&&window.addEventListener("resize",this.setUpSpinner)}},{key:"componentDidUpdate",value:function(){this.setUpSpinner()}},{key:"componentWillUnmount",value:function(){this.props.resize&&this.props.position===f.CENTERED&&window.removeEventListener("resize",this.setUpSpinner)}},{key:"setUpSpinner",value:function(){this.ref.current.parentNode.disabled=this.props.loading;var e=window.getComputedStyle(this.ref.current.parentNode);if(this.props.position===f.CENTERED){var n=w(e.getPropertyValue("border-bottom-width")),t=this.ref.current.parentNode.clientHeight>this.ref.current.parentNode.clientWidth?this.ref.current.parentNode.clientWidth:this.ref.current.parentNode.clientHeight;if(L(this.props.spinnerType)){var m=t/C.CENTERED_DEFAULT+"px";this.ref.current.firstChild.style.width=m,this.ref.current.firstChild.style.height=m}else this.ref.current.firstChild.style.fontSize=function(e,n){switch(n){case E.CIRCLE_DOTS:return e>g.CIRCLE_DOTS?g.CIRCLE_DOTS:e;case E.CIRCLE_DOTS_COLLAPSE:return e>g.CIRCLE_DOTS_COLLAPSE?g.CIRCLE_DOTS_COLLAPSE:e;default:return 0}}(t/C.CENTERED_NOT_DEFAULT,this.props.spinnerType)+"px";this.ref.current.style.marginTop="-"+e.getPropertyValue("padding-top"),this.ref.current.style.marginLeft="-"+e.getPropertyValue("padding-left"),this.ref.current.style.width=this.ref.current.parentNode.clientWidth+n+"px",this.ref.current.style.height=this.ref.current.parentNode.clientHeight+n+"px"}else if(this.props.position===f.INLINE&&!this.props.customSpinner){var i=e.getPropertyValue("font-size"),a=w(i);this.ref.current.style.marginLeft="5px",this.ref.current.style.width=i,this.ref.current.style.minWidth=i,this.ref.current.style.height=i,this.ref.current.style.minHeight=i,this.ref.current.firstChild.style.fontSize=a*function(e){switch(e){case E.CIRCLE_DOTS:return C.CIRCLE_DOTS;case E.CIRCLE_DOTS_COLLAPSE:return C.CIRCLE_DOTS_COLLAPSE;default:return 0}}(this.props.spinnerType)+"px"}}},{key:"getContent",value:function(){if(this.props.customSpinner)return this.props.customSpinner;var e=L(this.props.spinnerType)?{border:"solid 3px "+(this.props.secondaryColor||b.SECONDARY),borderTop:"solid 3px "+(this.props.color||b.BLUE)}:{color:this.props.color||b.WHITE};return h.a.createElement("div",{className:"loader ".concat(this.props.spinnerType||E.DEFAULT),style:e})}},{key:"render",value:function(){var e=this.props.position!==f.INLINE&&h.a.createElement("div",{className:"background",style:{backgroundColor:this.props.backgroundColor||b.BACKGROUND}});return h.a.createElement("div",{ref:this.ref,className:"loader-container ".concat(this.props.loading?"":"hidden"," ").concat(this.props.position)},this.getContent(),e)}}]),n}(h.a.Component),S=(t(17),t(18),function(){return i.a.createElement("div",{className:"custom-spinner"},i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null))}),N=function(e){function n(e){var t;return Object(r.a)(this,n),(t=Object(l.a)(this,Object(d.a)(n).call(this,e))).state={loading:!1,globalLoading:!1,isSubmitting:!1},t.loadGlobal=t.loadGlobal.bind(Object(u.a)(t)),t.onSubmit=t.onSubmit.bind(Object(u.a)(t)),t}return Object(c.a)(n,e),Object(s.a)(n,[{key:"loadGlobal",value:function(){var e=this;this.setState({globalLoading:!0}),setTimeout((function(){return e.setState({globalLoading:!1})}),1500)}},{key:"onSubmit",value:function(e){var n=this;e.preventDefault(),this.setState({isSubmitting:!0}),setTimeout((function(){return n.setState({isSubmitting:!1})}),1500)}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement("h1",null,"React element spinner demo")),i.a.createElement("div",{className:"margin-bottom button-container"},i.a.createElement(x,{loading:this.state.globalLoading,position:f.GLOBAL}),i.a.createElement("button",{onClick:this.loadGlobal,className:"margin-bottom"},this.state.globalLoading?"SHOWING GLOBAL SPINNER...":"SHOW GLOBAL SPINNER"),i.a.createElement("button",{onClick:function(){return e.setState({loading:!e.state.loading})},className:"margin-bottom"},this.state.loading?"HIDE ELEMENT SPINNERS":"LOAD ELEMENT SPINNERS")),i.a.createElement("div",{className:"margin-bottom"},i.a.createElement("h4",null,"Button spinner"),i.a.createElement("div",{className:"button-container"},i.a.createElement("button",null,"Button default spinner",i.a.createElement(x,{loading:this.state.loading,position:f.INLINE,color:"#498DFF"})),i.a.createElement("button",null,"Button dots spinner",i.a.createElement(x,{loading:this.state.loading,position:f.INLINE,spinnerType:E.CIRCLE_DOTS})),i.a.createElement("button",null,"Button dots collapse spinner",i.a.createElement(x,{loading:this.state.loading,position:f.INLINE,spinnerType:E.CIRCLE_DOTS_COLLAPSE})),i.a.createElement("button",null,"Button custom spinner",i.a.createElement(x,{loading:this.state.loading,position:f.INLINE,customSpinner:i.a.createElement(S,null)})),i.a.createElement("button",{className:"big-button"},"Big button",i.a.createElement(x,{loading:this.state.loading,position:f.INLINE,spinnerType:E.CIRCLE_DOTS})))),i.a.createElement("div",null,i.a.createElement(x,{loading:this.state.loading,position:f.CENTERED,color:"#FF1493",secondaryColor:"pink",backgroundColor:"black",resize:!0}),i.a.createElement("h4",null,"Div with resizable default spinner with custom colors"),i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi."),i.a.createElement("p",{className:"hidden-mobile"},"Expetenda tincidunt in sed, ex partem placerat sea, porro commodo ex eam. His putant aeterno interesset at. Usu ea mundi tincidunt, omnium virtute aliquando ius ex. Ea aperiri sententiae duo. Usu nullam dolorum quaestio ei, sit vidit facilisis ea. Per ne impedit iracundia neglegentur. Consetetur neglegentur eum ut, vis animal legimus inimicus id."),i.a.createElement("p",{className:"hidden-mobile"},"Expetenda tincidunt in sed, ex partem placerat sea, porro commodo ex eam. His putant aeterno interesset at. Usu ea mundi tincidunt, omnium virtute aliquando ius ex. Ea aperiri sententiae duo. Usu nullam dolorum quaestio ei, sit vidit facilisis ea. Per ne impedit iracundia neglegentur. Consetetur neglegentur eum ut, vis animal legimus inimicus id."),i.a.createElement("p",{className:"hidden-mobile"},"Expetenda tincidunt in sed, ex partem placerat sea, porro commodo ex eam. His putant aeterno interesset at. Usu ea mundi tincidunt, omnium virtute aliquando ius ex. Ea aperiri sententiae duo. Usu nullam dolorum quaestio ei, sit vidit facilisis ea. Per ne impedit iracundia neglegentur. Consetetur neglegentur eum ut, vis animal legimus inimicus id.")),i.a.createElement("form",{noValidate:!0,onSubmit:this.onSubmit},i.a.createElement(x,{loading:this.state.isSubmitting,position:f.CENTERED,customSpinner:i.a.createElement(S,null)}),i.a.createElement("h4",null,"Form with custom spinner"),i.a.createElement("label",null,"Name"),i.a.createElement("input",{type:"text",placeholder:"Name"}),i.a.createElement("label",null,"Password"),i.a.createElement("input",{type:"password",placeholder:"Password"}),i.a.createElement("label",null,"Address"),i.a.createElement("input",{type:"text",placeholder:"Address"}),i.a.createElement("label",null,"Phone"),i.a.createElement("input",{type:"phone",placeholder:"Phone"}),i.a.createElement("button",null,"SUBMIT")))}}]),n}(m.Component);o.a.render(i.a.createElement(N,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.3d01ba55.chunk.js.map