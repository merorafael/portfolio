webpackJsonp([1],{"20s7":function(s,t){},"9M+g":function(s,t){},Gt1W:function(s,t){},Jmt5:function(s,t){},LoDY:function(s,t){},NHnr:function(s,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});e("Jmt5"),e("9M+g");var a=e("7+uW"),n=e("Tqaz"),i={render:function(){var s=this.$createElement,t=this._self._c||s;return t("div",{attrs:{id:"app"}},[t("div",{staticClass:"container"},[t("router-view")],1)])},staticRenderFns:[]};var o=e("VU/8")({name:"App"},i,!1,function(s){e("fKtD")},null,null).exports,r=e("/ocq"),c={render:function(){var s=this.$createElement,t=this._self._c||s;return t("div",{attrs:{id:"social_profiles"}},this._l(this.profiles,function(s){return t("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.bottom",value:s.name,expression:"profile.name",modifiers:{hover:!0,bottom:!0}}],staticClass:"btn btn-link social-icon",attrs:{href:s.url,target:"_blank"}},[t("i",{class:s.icon})])}),0)},staticRenderFns:[]};var l=e("VU/8")({data:function(){return{profiles:[{name:"GitHub",url:"https://github.com/merorafael",icon:"fab fa-github"},{name:"LinkedIn",url:"https://br.linkedin.com/in/merorafael",icon:"fab fa-linkedin"},{name:"Telegram",url:"https://telegram.me/merorafael",icon:"fab fa-telegram"},{name:"Medium",url:"https://medium.com/@merorafael",icon:"fab fa-medium"}]}}},c,!1,function(s){e("Gt1W")},"data-v-3cbcdfee",null).exports,m={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"row align-items-center"},[t("div",{staticClass:"col-auto"},[t("img",{staticClass:"rounded-circle",attrs:{id:"avatar",src:"https://pt.gravatar.com/userimage/45329789/184585da111cd6efe45ee09852886185.jpg?size=130",alt:"Avatar"}})]),this._v(" "),t("div",{staticClass:"col"},[t("h3",[this._v("Rafael Mello")]),this._v(" "),t("p",[this._v("“Do or do not. There is no try.” — Yoda(Star Wars)")])])])}]};var j=e("VU/8")({name:"identifier"},m,!1,function(s){e("20s7")},"data-v-246af6c2",null).exports,d={render:function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{attrs:{id:"jobs"}},[e("h2",[s._v("Certifications")]),s._v(" "),s._l(s.certifications,function(t){return e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"col-xs-12 col-sm-auto text-center"},[e("img",{staticClass:"company-logo",attrs:{src:t.icon,alt:t.name}})]),s._v(" "),e("div",{staticClass:"col-xs-12 col-sm"},[e("h5",{staticClass:"card-title"},[s._v(s._s(t.name))]),s._v(" "),e("a",{staticClass:"btn btn-outline-primary btn-sm",attrs:{href:t.url,target:"_blank"}},[s._v("Access")])])])])])})],2)},staticRenderFns:[]};var u=e("VU/8")({name:"certificatons",data:function(){return{certifications:[{name:"Symfony Commenter",icon:"/static/images/certifications/symfony_commenter.png",url:"https://connect.sensiolabs.com/profile/merorafael"},{name:"Symfony Documentation Contributor",icon:"/static/images/certifications/symfony_doc.png",url:"https://connect.sensiolabs.com/profile/merorafael"}]}}},d,!1,function(s){e("hT+i")},"data-v-148898fc",null).exports,f=e("PJh5"),v=e.n(f),p={name:"jobs",data:function(){return{companies:[{company:{name:"M4U",logo:"/static/images/companies/m4u.png"},jobs:[{job:"Software Engineer",description:"",startDate:v()("04/2020","MM/YYYY"),endDate:null}]},{company:{name:"Ame Digital",logo:"/static/images/companies/ame.png"},jobs:[{job:"Software Engineer",description:"",startDate:v()("01/2019","MM/YYYY"),endDate:v()("04/2020","MM/YYYY")}]},{company:{name:"B2W Digital",logo:"/static/images/companies/b2w.png"},jobs:[{job:"Software Engineer",description:"",startDate:v()("01/2017","MM/YYYY"),endDate:v()("04/2020","MM/YYYY")}]},{company:{name:"Funcional Health Tech (Fidelize)",logo:"/static/images/companies/fidelize.png"},jobs:[{job:"Senior Software Developer",description:"",startDate:v()("05/2016","MM/YYYY"),endDate:v()("12/2016","MM/YYYY")}]},{company:{name:"Zoox Media & Connectivy",logo:"/static/images/companies/zoox.png"},jobs:[{job:"Development Coordinator",description:"",startDate:v()("11/2014","MM/YYYY"),endDate:v()("05/2016","MM/YYYY")},{job:"Software Developer",description:"",startDate:v()("09/2011","MM/YYYY"),endDate:v()("11/2014","MM/YYYY")}]}]}}},h={render:function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{attrs:{id:"jobs"}},[e("h2",[s._v("Jobs")]),s._v(" "),s._l(s.companies,function(t){return e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-12 col-sm-auto text-center"},[e("img",{staticClass:"company-logo",attrs:{src:t.company.logo,alt:t.company.name}})]),s._v(" "),e("div",{staticClass:"col-xs-12 col-sm"},[e("h5",{staticClass:"card-title"},[s._v(s._s(t.company.name))]),s._v(" "),s._l(t.jobs,function(a,n){return e("div",[e("h6",{staticClass:"card-subtitle mb-2 text-muted"},[s._v(s._s(a.job))]),s._v(" "),e("div",{staticClass:"text-muted"},[a.startDate?e("span",[s._v("\n                                "+s._s(a.startDate.format("MMMM YYYY"))+"\n                            ")]):s._e(),s._v(" "),a.endDate?e("span",[s._v("\n                                -\n                                "+s._s(a.endDate.format("MMMM YYYY"))+"\n                            ")]):e("span",[s._v("\n                                -\n                                "),e("b",[s._v("currently")])])]),s._v(" "),e("p",{staticClass:"card-text"},[s._v("\n                            "+s._s(a.description)+"\n                        ")]),s._v(" "),n!=t.jobs.length-1?e("hr"):s._e()])})],2)])])])})],2)},staticRenderFns:[]};var g={name:"profile",components:{Jobs:e("VU/8")(p,h,!1,function(s){e("npLv")},"data-v-119cadf0",null).exports,Certificatons:u,Identifier:j,Social:l}},b={render:function(){var s=this.$createElement,t=this._self._c||s;return t("div",{attrs:{id:"profile"}},[t("div",{staticClass:"row align-items-center header"},[t("div",{staticClass:"col-sm-6"},[t("identifier")],1),this._v(" "),t("div",{staticClass:"col-sm-6 text-right"},[t("social")],1)]),this._v(" "),t("certificatons"),this._v(" "),t("jobs")],1)},staticRenderFns:[]};var Y=e("VU/8")(g,b,!1,function(s){e("LoDY")},"data-v-5b06f7ae",null).exports;a.default.use(r.a);var _=new r.a({routes:[{path:"/",name:"Profile",component:Y}]});a.default.config.productionTip=!1,a.default.use(n.a),new a.default({el:"#app",router:_,components:{App:o},template:"<App/>"})},fKtD:function(s,t){},"hT+i":function(s,t){},npLv:function(s,t){},uslO:function(s,t,e){var a={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-SG":"oYA3","./en-SG.js":"oYA3","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./ga":"U5Iz","./ga.js":"U5Iz","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it-ch":"/E8D","./it-ch.js":"/E8D","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ku":"kI9l","./ku.js":"kI9l","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function n(s){return e(i(s))}function i(s){var t=a[s];if(!(t+1))throw new Error("Cannot find module '"+s+"'.");return t}n.keys=function(){return Object.keys(a)},n.resolve=i,s.exports=n,n.id="uslO"}},["NHnr"]);
//# sourceMappingURL=app.d1036dba44adb978f759.js.map