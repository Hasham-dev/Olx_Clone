(this["webpackJsonpecommerce-app"]=this["webpackJsonpecommerce-app"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__25a1n",Link:"SideDrawer_Link__3Pr4D",Open:"SideDrawer_Open__M_hcj",Close:"SideDrawer_Close__2YA8Z",Active:"SideDrawer_Active__wqKRw"}},,,,,,,,,,,,function(e,t,n){e.exports={UserAds:"UserAds_UserAds__2y-rj",PublicAdContainer:"UserAds_PublicAdContainer__2qH_M",NoAd:"UserAds_NoAd__3ogoK"}},,,,function(e,t,n){e.exports={Spinner:"Spinner_Spinner__1RlgH",spin:"Spinner_spin__1jouq",SpinnerPink:"Spinner_SpinnerPink__3tNLM"}},function(e,t,n){e.exports={Explore:"Explore_Explore__70z5H",PublicAdContainer:"Explore_PublicAdContainer__1YueR"}},,,,function(e,t,n){e.exports={NavBar:"NavBar_NavBar__2n7aG"}},,function(e,t,n){e.exports={SignUp:"SignUp_SignUp__3fv4P"}},function(e,t,n){e.exports={LogIn:"LogIn_LogIn__3HefK"}},,function(e,t,n){e.exports={Profile:"Profile_Profile__2F06_"}},function(e,t,n){e.exports={Ad:"Ad_Ad__13p4I"}},function(e,t,n){e.exports={Modal:"Modal_Modal__UX1bC"}},function(e,t,n){e.exports={CreateAd:"CreateAd_CreateAd__2RE2E"}},function(e,t,n){e.exports={Alert:"Alert_Alert__kpDoA",alert:"Alert_alert__kb7J7"}},function(e,t,n){e.exports=n(58)},,,,,function(e,t,n){},,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(31),i=n.n(l),s=(n(47),n(15)),o=n(16),c=n(22),u=n(21),m=n(18),d=n(13),p=n(32),h=n.n(p),f=function(e){return r.a.createElement("nav",{className:h.a.NavBar},r.a.createElement("i",{className:"fas fa-bars",onClick:e.openSideDrawer}),r.a.createElement("h1",null,"OLX - ",r.a.createElement("span",null,"Buy and Sell Online")))},g=n(11),E=n.n(g),S=n(6),A=function(e){var t=[E.a.SideDrawer,e.openSideDrawer?E.a.Open:E.a.Close];return r.a.createElement("div",{className:t.join(" ")},r.a.createElement("i",{className:"fas fa-times",onClick:e.closeSideDrawer}),r.a.createElement("h2",null,"OLX"),r.a.createElement("ul",null,e.isSignIn?r.a.createElement("li",{onClick:e.closeSideDrawer},r.a.createElement(S.b,{className:E.a.Link,to:"/profile"},"My Profile")):null,r.a.createElement("li",{onClick:e.closeSideDrawer},r.a.createElement(S.b,{className:E.a.Link,to:"/"},"Home")),e.isSignIn?r.a.createElement("li",{onClick:e.closeSideDrawer},r.a.createElement(S.b,{className:E.a.Link,to:"/userads"},"My Ads")):null,e.isSignIn?r.a.createElement("li",{onClick:e.closeSideDrawer},r.a.createElement(S.b,{className:E.a.Link,to:"/createad"},"Create an Ad")):null,e.isSignIn?r.a.createElement("li",{onClick:function(){e.closeSideDrawer(),e.signOut()}},"SignOut"):null,e.isSignIn?null:r.a.createElement("li",{onClick:e.closeSideDrawer},r.a.createElement(S.b,{className:E.a.Link,to:"/signup"},"SignUp")),e.isSignIn?null:r.a.createElement("li",{onClick:e.closeSideDrawer},r.a.createElement(S.b,{className:E.a.Link,to:"/login"},"LogIn"))))},w=function(e){return r.a.createElement("div",{style:{width:"100vw",height:"100vh",backgroundColor:"rgba(0,0,0,0.4)",position:"fixed",top:"0",left:"0",zIndex:500},onClick:e.close})},v=n(34),b=n.n(v),_=n(2),C=Object(_.f)((function(e){return r.a.createElement("div",{className:b.a.SignUp},r.a.createElement("h2",null,"Sign Up"),r.a.createElement("p",null,e.error),r.a.createElement("form",{onSubmit:e.signUp},r.a.createElement("input",{onChange:function(t){return e.signUpChange(t,"name")},type:"text",placeholder:"Name..."}),r.a.createElement("input",{onChange:function(t){return e.signUpChange(t,"email")},type:"email",placeholder:"Email..."}),r.a.createElement("input",{onChange:function(t){return e.signUpChange(t,"password")},type:"password",placeholder:"Password..."}),r.a.createElement("button",null,"SignUp")),r.a.createElement("h4",null,"OR"),r.a.createElement("button",{onClick:function(){return e.history.push("/login")}},"LogIn"))})),I=n(35),D=n.n(I),y=Object(_.f)((function(e){return r.a.createElement("div",{className:D.a.LogIn},r.a.createElement("h2",null,"Log In"),r.a.createElement("p",null,e.error),r.a.createElement("form",{onSubmit:e.logIn},r.a.createElement("input",{onChange:function(t){return e.logInChange(t,"email")},type:"email",placeholder:"Email..."}),r.a.createElement("input",{onChange:function(t){return e.logInChange(t,"password")},type:"password",placeholder:"Password..."}),r.a.createElement("button",null,"LogIn")),r.a.createElement("h4",null,"OR"),r.a.createElement("button",{onClick:function(){return e.history.push("/signup")}},"SignUp"))})),U=n(5),k=n.n(U);n(59),n(52),n(60),n(54);k.a.initializeApp({apiKey:"AIzaSyAYlvi49_-4QKCKrlExnW4a_T4bUxayUgU",authDomain:"blogapp-hv.firebaseapp.com",databaseURL:"https://blogapp-hv.firebaseio.com",projectId:"blogapp-hv",storageBucket:"blogapp-hv.appspot.com",messagingSenderId:"80401392620",appId:"1:80401392620:web:5e8b6a1a8198a48d2356c9",measurementId:"G-0DLDLD215L"}),k.a.analytics();var P=new(function(){function e(){Object(s.a)(this,e)}return Object(o.a)(e,[{key:"signUp",value:function(e,t,n){return new Promise((function(a,r){k.a.auth().createUserWithEmailAndPassword(t,n).then((function(){k.a.auth().onAuthStateChanged((function(t){t.updateProfile({displayName:e}).then((function(){return a(t)}))}))})).catch((function(e){r(e.message)}))}))}},{key:"logIn",value:function(e,t){return new Promise((function(n,a){k.a.auth().signInWithEmailAndPassword(e,t).then((function(e){console.log(e),n(e.user)})).catch((function(e){a(e.message)}))}))}},{key:"signOut",value:function(){return new Promise((function(e,t){k.a.auth().signOut().then((function(){return e()})).catch((function(e){return t(e)}))}))}},{key:"isSignIn",value:function(){return new Promise((function(e,t){k.a.auth().onAuthStateChanged((function(n){n?e(n):t()}))}))}},{key:"store",value:function(e){return new Promise((function(t,n){k.a.storage().ref("pic/"+e.name).put(e).then((function(e){k.a.storage().ref(e.metadata.fullPath).getDownloadURL().then((function(e){t(e)})).catch((function(e){n(e),console.log(e)}))})).catch((function(e){n(e),console.log(e)}))}))}},{key:"storeAd",value:function(e,t){return new Promise((function(n,a){k.a.firestore().collection("publicAds").doc().set(e).then((function(){return n()})).catch((function(e){return a(e)})),k.a.firestore().collection(t).doc().set(e)}))}},{key:"getPublicAds",value:function(){return new Promise((function(e,t){var n=k.a.firestore().collection("publicAds"),a=[];n.get().then((function(t){t.forEach((function(e){a.push(e.data())})),e(a)})).catch((function(e){return t(e)}))}))}},{key:"getUserAds",value:function(e){return new Promise((function(t,n){var a=k.a.firestore().collection(e),r=[];a.get().then((function(e){e.forEach((function(e){r.push(e.data())})),t(r)})).catch((function(e){return n(e)}))}))}}]),e}()),O=n(27),N=n.n(O),x=function(e){var t=[N.a.Spinner,e.pink?N.a.SpinnerPink:null];return r.a.createElement("div",{className:t.join(" ")},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},j=n(37),L=n.n(j),M=function(e){return r.a.createElement("div",{className:L.a.Profile},r.a.createElement("h2",null,"Your Profile"),r.a.createElement("h3",null,"Name: ",r.a.createElement("span",null,e.user.name)),r.a.createElement("h3",null,"Email: ",r.a.createElement("span",null,e.user.email)))},T=n(28),Y=n.n(T),B=n(38),R=n.n(B),H=function(e){return r.a.createElement("div",{className:R.a.Ad,onClick:e.showDetails},r.a.createElement("img",{src:e.ad.img,alt:"House"}),r.a.createElement("h4",null,"Title: ",r.a.createElement("span",null,e.ad.title)),r.a.createElement("h4",null,"Price: ",r.a.createElement("span",null,e.ad.price)),r.a.createElement("p",null,"Click to show details"))},K=function(e){return r.a.createElement("div",{className:Y.a.Explore},r.a.createElement("h2",null,"Explore"),e.loader?r.a.createElement(x,{pink:!0}):r.a.createElement("div",{className:Y.a.PublicAdContainer},e.publicAds.map((function(t,n){return r.a.createElement(H,{ad:t,key:n,showDetails:function(){return e.showDetails(n)}})}))))},W=n(39),z=n.n(W),q=function(e){return r.a.createElement("div",{className:z.a.Modal},r.a.createElement("img",{src:e.info.img,alt:"Ad Pic"}),r.a.createElement("h4",null,"Title: ",e.info.title),r.a.createElement("h4",null,"Price: ",e.info.price),r.a.createElement("h4",null,"Description: ",r.a.createElement("span",null,e.info.description)),r.a.createElement("h4",null,"Address: ",r.a.createElement("span",null,e.info.address)),r.a.createElement("h4",null,"Ph_Num: ",r.a.createElement("span",null,e.info.ph_num)),r.a.createElement("p",null,"Posted by ",e.info.userName),r.a.createElement("button",{onClick:e.close},"CLOSE"))},J=n(23),X=n.n(J),G=Object(_.f)((function(e){var t=0===e.userAds.length?r.a.createElement("div",{className:X.a.NoAd},"You haven't created any Ad."):r.a.createElement("div",{className:X.a.PublicAdContainer},e.userAds.map((function(t,n){return r.a.createElement(H,{ad:t,key:n,showDetails:function(){return e.showDetails(n)}})})));return r.a.createElement("div",{className:X.a.UserAds},r.a.createElement("h2",null,"Your Ads"),t,r.a.createElement("i",{className:"fas fa-plus",onClick:function(){return e.history.push("/createad")}}))})),F=n(40),Q=n.n(F),Z=function(e){return r.a.createElement("div",{className:Q.a.CreateAd},r.a.createElement("h2",null,"Create an Ad"),r.a.createElement("p",null,e.error),r.a.createElement("form",{onSubmit:e.submitAd},r.a.createElement("input",{onChange:function(t){return e.inputChange(t,"title")},type:"text",placeholder:"Title..."}),r.a.createElement("input",{onChange:function(t){return e.inputChange(t,"price")},type:"text",placeholder:"Price..."}),r.a.createElement("textarea",{onChange:function(t){return e.inputChange(t,"description")},placeholder:"Description..."}),r.a.createElement("input",{onChange:function(t){return e.inputChange(t,"address")},type:"text",placeholder:"Address..."}),r.a.createElement("input",{onChange:function(t){return e.inputChange(t,"ph_num")},type:"number",placeholder:"Phone Num..."}),r.a.createElement("h4",null,"Add a Pic"),r.a.createElement("input",{onChange:e.imgChange,type:"file"}),r.a.createElement("img",{src:e.img}),r.a.createElement("button",null,"Submit Ad")))},$=n(41),V=n.n($),ee=function(e){return r.a.createElement("div",{className:V.a.Alert},e.msg)},te=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,l=new Array(a),i=0;i<a;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).state={openSideDrawer:!1,signUp:{name:"",email:"",password:""},logIn:{email:"",password:""},user:{name:"",email:""},signUpError:"",showSpinner:!1,logInError:"",publicAds:[],showModal:!1,modalInfo:{},userAds:[],createAd:{title:"",price:"",description:"",address:"",ph_num:"",img:""},createAdError:"",loader:!1,isSignIn:!1,alert:null},e.openSideDrawer=function(){e.setState({openSideDrawer:!0})},e.closeSideDrawer=function(){e.setState({openSideDrawer:!1})},e.signUpChange=function(t,n){var a=t.target.value,r=Object(d.a)({},e.state.signUp);"name"===n?r.name=a:"email"===n?r.email=a:r.password=a,e.setState({signUp:r})},e.logInChange=function(t,n){var a=t.target.value,r=Object(d.a)({},e.state.logIn);"email"===n?r.email=a:r.password=a,e.setState({logIn:r})},e.signUp=function(t){if(t.preventDefault(),""===e.state.signUp.name.trim()||""===e.state.signUp.email.trim()||""===e.state.signUp.password.trim())e.setState({signUpError:"Please fill all fields",alert:r.a.createElement(ee,{msg:"Please fill all the fields"})}),setTimeout((function(){return e.setState({alert:null})}),6e3);else{e.setState({showSpinner:!0});var n=Object(d.a)({},e.state.user);P.signUp(e.state.signUp.name,e.state.signUp.email,e.state.signUp.password).then((function(t){n.name=t.displayName,n.email=t.email,e.setState({user:n,showSpinner:!1,isSignIn:!0,alert:r.a.createElement(ee,{msg:"You Signed Up"})}),setTimeout((function(){return e.setState({alert:null})}),6e3),e.props.history.push("/")})).catch((function(t){console.log(t),e.setState({signUpError:t,showSpinner:!1})}))}},e.logIn=function(t){if(t.preventDefault(),""===e.state.logIn.email.trim()||""===e.state.logIn.password.trim())e.setState({logInError:"Please fill all fields",alert:r.a.createElement(ee,{msg:"Please fill all the fields"})}),setTimeout((function(){return e.setState({alert:null})}),6e3);else{e.setState({showSpinner:!0});var n=Object(d.a)({},e.state.user);P.logIn(e.state.logIn.email,e.state.logIn.password).then((function(t){n.name=t.displayName,n.email=t.email,e.setState({user:n,showSpinner:!1,isSignIn:!0,alert:r.a.createElement(ee,{msg:"You Logged In"})}),setTimeout((function(){return e.setState({alert:null})}),6e3),e.props.history.push("/"),e.fetchUserAds()})).catch((function(t){console.log(t),e.setState({logInError:t,showSpinner:!1})}))}},e.signOut=function(){P.signOut().then((function(){e.props.history.push("/"),e.setState({isSignIn:!1,alert:r.a.createElement(ee,{msg:"You Signed Out"}),userAds:[]}),setTimeout((function(){return e.setState({alert:null})}),6e3)}))},e.showPublicAdDetails=function(t){var n=Object(m.a)(e.state.publicAds);e.setState({modalInfo:n[t],showModal:!0})},e.showUserAdDetails=function(t){var n=Object(m.a)(e.state.userAds);e.setState({modalInfo:n[t],showModal:!0})},e.closeAdDetails=function(){e.setState({showModal:!1})},e.createAdChange=function(t,n){var a=Object(d.a)({},e.state.createAd);"title"===n?a.title=t.target.value:"price"===n?a.price=t.target.value:"description"===n?a.description=t.target.value:"address"===n?a.address=t.target.value:"ph_num"===n&&(a.ph_num=t.target.value),e.setState({createAd:a})},e.imgChange=function(t){e.setState({showSpinner:!0});var n=t.target.files[0],a=Object(d.a)({},e.state.createAd);console.log(n),P.store(n).then((function(t){a.img=t,e.setState({createAd:a,showSpinner:!1})})).catch((function(t){e.setState({createAdError:t,showSpinner:!1})}))},e.submitAd=function(t){t.preventDefault();var n=Object(m.a)(e.state.publicAds),a=Object(m.a)(e.state.userAds),l=Object(d.a)({},e.state.createAd),i=!0;for(var s in l){if(""===l[s].trim()&&"img"!==s){i=!1,e.setState({alert:r.a.createElement(ee,{msg:"Please fill all the fields"})}),setTimeout((function(){return e.setState({alert:null})}),6e3);break}if(""===l.img.trim()){e.setState({alert:r.a.createElement(ee,{msg:"Please add an image"})}),setTimeout((function(){return e.setState({alert:null})}),6e3),i=!1;break}}i?(e.setState({showSpinner:!0,createAdError:""}),l.userName=e.state.user.name,P.storeAd(l,e.state.user.email).then((function(){n.push(l),a.push(l),e.setState({publicAds:n,userAds:a,showSpinner:!1,alert:r.a.createElement(ee,{msg:"You have posted an Ad"})}),e.props.history.push("/userads"),setTimeout((function(){return e.setState({alert:null})}),6e3),console.log("Ad Stored")})).catch((function(t){console.log(t),e.setState({showSpinner:!1})}))):e.setState({createAdError:"Please fill all the fields"})},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.props.history.push("/"),this.setState({loader:!0});var t=Object(d.a)({},this.state.user);try{P.isSignIn().then((function(n){t.name=n.displayName,t.email=n.email,e.setState({user:t,isSignIn:!0}),e.fetchUserAds()})).catch((function(){console.log("not Signed In"),e.setState({isSignIn:!1})})),P.getPublicAds().then((function(t){e.setState({publicAds:t,loader:!1})})).catch((function(e){return console.log(e)}))}catch(n){console.log(n)}}},{key:"fetchUserAds",value:function(){var e=this;P.getUserAds(this.state.user.email).then((function(t){return e.setState({userAds:t})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.state.openSideDrawer?r.a.createElement(w,{close:this.closeSideDrawer}):null;return r.a.createElement("div",null,this.state.alert,r.a.createElement(f,{openSideDrawer:this.openSideDrawer}),r.a.createElement(A,{openSideDrawer:this.state.openSideDrawer,closeSideDrawer:this.closeSideDrawer,isSignIn:this.state.isSignIn,signOut:this.signOut}),t,r.a.createElement(_.c,null,r.a.createElement(_.a,{path:"/",exact:!0,render:function(){return r.a.createElement(K,{publicAds:e.state.publicAds,showDetails:e.showPublicAdDetails,loader:e.state.loader})}}),r.a.createElement(_.a,{path:"/signup",exact:!0,render:function(){return r.a.createElement(C,{signUpChange:e.signUpChange,signUp:e.signUp,error:e.state.signUpError})}}),r.a.createElement(_.a,{path:"/login",exact:!0,render:function(){return r.a.createElement(y,{logInChange:e.logInChange,logIn:e.logIn,error:e.state.logInError})}}),r.a.createElement(_.a,{path:"/profile",exact:!0,render:function(){return r.a.createElement(M,{user:e.state.user})}}),r.a.createElement(_.a,{path:"/userads",exact:!0,render:function(){return r.a.createElement(G,{userAds:e.state.userAds,showDetails:e.showUserAdDetails})}}),r.a.createElement(_.a,{path:"/createad",exact:!0,render:function(){return r.a.createElement(Z,{inputChange:e.createAdChange,imgChange:e.imgChange,error:e.state.createAdError,img:e.state.createAd.img,submitAd:e.submitAd})}})),this.state.showModal?r.a.createElement("div",null,r.a.createElement(q,{info:this.state.modalInfo,close:this.closeAdDetails}),r.a.createElement(w,{close:this.closeAdDetails})):null,this.state.showSpinner?r.a.createElement("div",null,r.a.createElement(x,null),r.a.createElement(w,null)):null)}}]),n}(a.Component),ne=Object(_.f)(te),ae=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(ne,null))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(S.a,null,r.a.createElement(ae,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[42,1,2]]]);
//# sourceMappingURL=main.80850287.chunk.js.map