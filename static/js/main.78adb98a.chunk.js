(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e,t,a){e.exports={Result:"Result_Result__q3dnv",Wrapper:"Result_Wrapper__3FVLi",FlexMain:"Result_FlexMain__2l1hY",Image:"Result_Image__333xa",Mini:"Result_Mini__3ggVq",Votes:"Result_Votes__3VO9R"}},,,,,,function(e,t,a){e.exports={Vote:"Vote_Vote__3eBvc",Title:"Vote_Title__32QJX",PageTitle:"Vote_PageTitle__3xGuG",Main:"Vote_Main__16W0r",Info:"Vote_Info__2wQuy",Spinner:"Vote_Spinner__3kbx0"}},,function(e,t,a){e.exports=a.p+"static/media/react.9a28da9f.svg"},function(e,t,a){e.exports=a.p+"static/media/vue.22efb7c2.svg"},function(e,t,a){e.exports={Wrapper:"Framework_Wrapper__3UmQS",FlexMain:"Framework_FlexMain__cnrjf",Image:"Framework_Image__1pja1",Audio:"Framework_Audio__1j_-H"}},,,,,function(e,t,a){e.exports={Button:"Button_Button__2s97z",Custom:"Button_Custom__29IMv"}},,,,,,function(e,t,a){e.exports=a.p+"static/media/spinner.914933fe.gif"},function(e,t,a){e.exports=a(34)},,,,,function(e,t,a){},,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(21),l=a.n(o),c=(a(28),a(2)),i=a(3),s=a(5),u=a(4),m=a(6),d=a(14),p=a(15),v=a.n(p),h=(a(29),v.a.initializeApp({apiKey:"AIzaSyDJLjU8GK6RbaZ7ISa9qk08JQRtCPp8L7M",authDomain:"frameworkvoting.firebaseapp.com",databaseURL:"https://frameworkvoting.firebaseio.com",projectId:"frameworkvoting",storageBucket:"frameworkvoting.appspot.com",messagingSenderId:"602552600472",appId:"1:602552600472:web:814b80827372362a"})),g=v.a.firestore(h),f=r.a.createContext();console.log(f);var E=function(e,t){switch(t.type){case"ADD_VOTE":return Object(d.a)({},e,{voters:t.payload});case"CHANGE_ROUTE":return Object(d.a)({},e,{route:t.payload});default:return e}},_=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={voters:[],route:"landing",dispatch:function(e){a.setState(function(t){return E(t,e)})}},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){var e=this,t=[];g.collection("votes").get().then(function(a){a.forEach(function(e){t.push(e.data())}),e.setState({voters:t})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return r.a.createElement(f.Provider,{value:this.state},this.props.children)}}]),t}(n.Component),w=f.Consumer,C=a(8),N=(a(32),a(16)),b=a.n(N),V=function(e){var t=e.landingBtn,a=e.onClick,n=e.handleNewUser;return r.a.createElement("button",{className:"Custom"===t?b.a.Custom:b.a.Button,onClick:a||n}," ",e.children)},y=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={Name:"",instagramHandle:"",twitterHandle:"",voted:!1},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(C.a)({},n,r))},a.handleNewUser=function(e){var t=a.state,n=t.Name,r={Name:n,instagramHandle:t.instagramHandle,twitterHandle:t.twitterHandle,voteFor:"",time:(new Date).toUTCString()};localStorage.getItem("voted")&&(a.setState({voted:!0}),setTimeout(function(){return a.setState({voted:!1})},4e3));var o=localStorage.getItem("IP");n&&(o||(e({type:"CHANGE_ROUTE",payload:"vote page"}),sessionStorage.setItem("user",JSON.stringify(r))))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.Name,n=t.instagramHandle,o=t.twitterHandle,l=t.voted;return r.a.createElement(w,null,function(t){var c=t.dispatch;return r.a.createElement("div",{className:"landingPage"},r.a.createElement("h2",null,"AYE, THERE DEV!"),r.a.createElement("p",null,"It time to vote for your fav framework. But before that, let\u2019s know your name!"),r.a.createElement("div",{className:"usersName"},r.a.createElement("input",{className:"Input",placeholder:"Your Name!",value:a,name:"Name",onChange:e.handleChange})),r.a.createElement("div",{id:"userSocialMedia"},r.a.createElement("p",null,"Optional"),r.a.createElement("section",{className:"SocialInputs"},r.a.createElement("input",{className:"Social",placeholder:"Instagram Handle",value:n,name:"instagramHandle",onChange:e.handleChange}),r.a.createElement("input",{className:"Social",placeholder:"Twitter Handle",value:o,name:"twitterHandle",onChange:e.handleChange})),r.a.createElement("div",{id:"goButton"},l?r.a.createElement("h3",{className:"error"},"Seems like You've already Voted"):null,r.a.createElement(V,{landingBtn:"Custom",handleNewUser:e.handleNewUser.bind(e,c)},"Let's Go ",r.a.createElement("span",null,">>")))))})}}]),t}(r.a.Component),O=a(7),S=a.n(O),I=a(9),j=a.n(I),R=a(10),k=a.n(R),T=a(22),x=a.n(T),M=a(11),H=a.n(M),F=function(e){var t=e.src,a=e.name,n=e.alt,o=e.handleCastVote;return r.a.createElement("div",{className:H.a.Wrapper},r.a.createElement("div",{className:H.a.FlexMain},r.a.createElement("img",{className:H.a.Image,src:t,alt:n}),r.a.createElement(V,{onClick:o},a)))},P=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={isLoading:!1},a.handleCastVote=function(e,t){var n=[],r=JSON.parse(sessionStorage.getItem("user"));r.voteFor=t,a.setState({isLoading:!0}),g.collection("votes").doc(r.time).set(r),g.collection("votes").get().then(function(t){t.forEach(function(e){n.push(e.data())}),e({type:"ADD_VOTE",payload:n}),setTimeout(function(){return e({type:"CHANGE_ROUTE",payload:"result"})},1300)});var o=[];if(window.RTCPeerConnection=window.RTCPeerConnection||window.mozRTCPeerConnection||window.webkitRTCPeerConnection,window.RTCPeerConnection){var l=new RTCPeerConnection;l.createDataChannel(""),l.createOffer(l.setLocalDescription.bind(l),function(){}),l.onicecandidate=function(e){e.candidate&&o.push(e.candidate.address),localStorage.setItem("IP",o)}}localStorage.setItem("voted",!0)},a.handleReactVotes=function(e){a.handleCastVote(e,"ReactJs")},a.handleVueVotes=function(e){a.handleCastVote(e,"VueJs")},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(w,null,function(t){var a=t.dispatch,n=t.voters,o=n.length-1,l=0;return n.map(function(e){return l+=1}),r.a.createElement("div",{className:S.a.Vote},r.a.createElement("div",{className:S.a.Title},r.a.createElement("h1",{className:S.a.PageTitle},"Vote Count"),r.a.createElement("strong",null,l," People Voted")),r.a.createElement("div",{className:S.a.Main},r.a.createElement(F,{name:"React",src:j.a,alt:"React Svg",handleCastVote:e.handleReactVotes.bind(e,a)}),r.a.createElement(F,{name:"Vue",src:k.a,alt:"Vue Svg",handleCastVote:e.handleVueVotes.bind(e,a)})),r.a.createElement("p",{className:S.a.Info},"Last Dev to vote:"," ",r.a.createElement("span",null,n[o].Name||"Nobody yet")," =>"," ",r.a.createElement("span",null,n[o].voteFor||"Nothing yet")," "),e.state.isLoading?r.a.createElement("div",{className:S.a.Spinner},r.a.createElement("img",{src:x.a,alt:"Loader"})):null)})}}]),t}(r.a.Component),A=(a(33),a(1)),B=a.n(A),L=function(){return r.a.createElement(w,null,function(e){var t=[],a=[],n=e.voters,o=!0,l=!1,c=void 0;try{for(var i,s=n[Symbol.iterator]();!(o=(i=s.next()).done);o=!0){var u=i.value;console.log(u),"ReactJs"===u.voteFor?t.push(u):a.push(u)}}catch(p){l=!0,c=p}finally{try{o||null==s.return||s.return()}finally{if(l)throw c}}var m=[B.a.Image],d=[B.a.Image];return t.length<a.length?m=[B.a.Image,B.a.Mini]:t.length>a.length&&(d=[B.a.Image,B.a.Mini]),console.log(n.length,t.length,a.length),r.a.createElement("div",{className:B.a.Result},r.a.createElement("div",{className:B.a.Wrapper},r.a.createElement("div",{className:B.a.FlexMain},r.a.createElement("img",{className:m.join(" "),src:j.a,alt:"React Logo"}),r.a.createElement("h2",{className:B.a.Votes},"VOTES: ",t.length))),r.a.createElement("div",{className:B.a.Wrapper},r.a.createElement("div",{className:B.a.FlexMain},r.a.createElement("img",{className:d.join(" "),src:k.a,alt:"Vue Logo"}),r.a.createElement("h2",{className:B.a.Votes},"VOTES: ",a.length))))})},D=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(_,null,r.a.createElement(w,null,function(e){var t=e.route;return r.a.createElement("div",{className:"App"},"landing"===t?r.a.createElement(y,null):"vote page"===t?r.a.createElement(P,null):r.a.createElement(L,null))}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var U=r.a.createElement(D,null);l.a.render(U,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[23,1,2]]]);
//# sourceMappingURL=main.78adb98a.chunk.js.map