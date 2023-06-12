(function(){"use strict";var e={9349:function(e,t,a){var n=a(9242),o=a(3396);function r(e,t,a,n,r,s){const i=(0,o.up)("main-layout");return(0,o.wg)(),(0,o.j4)(i)}var s=a(7139);const i={class:"main"};function l(e,t,a,n,r,l){const c=(0,o.up)("weather-label"),u=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",{class:(0,s.C_)(e.$store.getters.theme)},[(0,o._)("div",i,[(0,o.Wm)(c),(0,o.Wm)(u)])],2)}const c=e=>((0,o.dD)("data-v-290ddd76"),e=e(),(0,o.Cn)(),e),u={class:"weather-label"},d={class:"weather-label__temp"},m={class:"weather-label__details"},p={class:"weather-label__city"},h={class:"weather-label__date"},w={class:"weather-label__weather"},f=c((()=>(0,o._)("div",{class:"weather-label__icon icon"},null,-1))),g={class:"weather-label__type"};function v(e,t,a,n,r,i){return(0,o.wg)(),(0,o.iD)("div",u,[(0,o._)("span",d,(0,s.zw)(e.$store.getters["weatherModule/currentWeather"]?.temp||"...")+"°",1),(0,o._)("div",m,[(0,o._)("span",p,(0,s.zw)(e.$store.getters["citiesModule/curCity"]?.name),1),(0,o._)("span",h,(0,s.zw)(n.date.time)+" - "+(0,s.zw)(n.date.day)+", "+(0,s.zw)(n.date.date),1)]),(0,o._)("div",w,[f,(0,o._)("span",g,(0,s.zw)(e.$store.getters["weatherModule/currentWeather"]?.weather||"..."),1)])])}var y=a(4870);function A(e){return 1===`${e}`.length?`0${e}`:2===`${e}`.length?e:void 0}var C={name:"WeatherLabel",setup(){const e=A,t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],a=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];let n,r=new Date;const s=(0,y.iH)({time:`${e(r.getHours())}:${e(r.getMinutes())}`,day:t[+r.getDay()],date:`${r.getDate()} ${a[+r.getMonth()]} '${r.getFullYear()-2e3}`}),i=()=>{r=new Date,s.value={time:`${e(r.getHours())}:${e(r.getMinutes())}`,day:t[+r.getDay()],date:`${r.getDate()} ${a[+r.getMonth()]} '${r.getFullYear()-2e3}`}};return(0,o.bv)((()=>{n=setInterval((()=>{i()}),1e3)})),(0,o.Ah)((()=>{clearInterval(n)})),{date:s}}},I=a(89);const _=(0,I.Z)(C,[["render",v],["__scopeId","data-v-290ddd76"]]);var b=_,M={name:"MainLayout",components:{WeatherLabel:b}};const L=(0,I.Z)(M,[["render",l]]);var S=L,D=a(65),O={components:{MainLayout:S},setup(){const e=(0,D.oR)(),t=async()=>{if(localStorage.getItem("city")&&"null"!==localStorage.getItem("city")&&"undefined"!==localStorage.getItem("city")||(localStorage.setItem("city",JSON.stringify({country:"United Kingdom",id:"328328",lat:52,lon:-0,name:"London"})),console.log(localStorage.getItem("city"))),!localStorage.getItem("recommendCities")||"null"===localStorage.getItem("recommendCities")||"undefined"===localStorage.getItem("recommendCities")){const e=[{country:"United Kingdom",id:"328328",lat:52,lon:-0,name:"London"},{country:"Ukraine",id:"324505",lat:"50",lon:"31",name:"Kiev"},{country:"United States",id:"349727",lat:"41",lon:"-74",name:"New York"},{country:"Japan",id:"226396",lat:"36",lon:"140",name:"Tokyo"}];localStorage.setItem("recommendCities",JSON.stringify(e))}e.commit("citiesModule/setRecCities",JSON.parse(localStorage.getItem("recommendCities"))),e.commit("citiesModule/setCurCity",JSON.parse(localStorage.getItem("city"))),await e.dispatch("citiesModule/loadCities"),await e.dispatch("weatherModule/loadWeatherInfo")};t()}};const k=(0,I.Z)(O,[["render",r]]);var z=k,W=a(678),H="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAuQAAALkB4qdB6AAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAKfSURBVFiFxdfPi1ZVGMDxz31HCnOq0ZkK00THlxhpIToELdxILkQMRMN1bly1EAlxY/0BswqiFi7KnW3aBSJFKTg2iJY/CsIfEZqjmSJiipKdFvfR9/Jy7zv3bd55PXA4l3vO8zzf85zznPOcLKWkU8mybCE2YhPGsATDuIGr+Blf43BK6U5HZWUlpVRaMQ/78ACpRr2H3WhU6SyrWZkHsixbjc+xJpSfwUmcivZCeGMtxqO+EeLHsCOldL5rD2AAH+FhGP4Nb9eZCd7BHwVv7Kol16bkk1DwLz7FYDfuxBC+KCzLh7UBsLMguLUbwyUgOwoT2T4jABbjbgh9NhvjBYiDoe8vDM0EsD8GX8CCHgEskodpwkSHcYbxT7hrXS+MF5RvCoC/8VwVwHsx6JdeGi8YmA79W8r6G9gcEXmiVtx2X05Gu7mss4FmnwCaZZ0N+dneD4AlZZ0NDMb39TkCeKz3mSqA6fheO0cAa6I9XQVwJb7fnCOA8WhPVQFMPk0AeEsep7cxv8dnwItaN+trVQdRhvMx6OMeAxwIvd/OdBe8q3V7re+R8S1auUGzI0AIHAmB3/HCLI2/JA+/hL0dxxaEFssjIuEoVvxP42PyQy3JQ29eLYAQHsefIXwX75PnjTUMD2AP7mslNsfxfG2Agvu+LCj5PtazaheviD00VZCZLExkstOSdprRtsI6Pq43cEieO36Dm239l0QKJs+Sr8X/KRVZ0UxuHcEEfm0zVKz38SM+wLNt8qu08oETWNhuo/RdUFayLFup9TIakqdv53AxpfSog9zr+A6vBuiGlNKtJwNmE25dREYTl8MTP2Gk1hL0GGJUfsYknMXLfQUIiOXy11aSP2pfqb0HelWyLFsm3xOj+KHvAAGxFF/h8n+GU+2I7XnhZwAAAABJRU5ErkJggg==";const x=e=>((0,o.dD)("data-v-49a2f794"),e=e(),(0,o.Cn)(),e),E=x((()=>(0,o._)("img",{src:H,alt:"search"},null,-1))),F=[E],U={class:"info-group with-input"};function P(e,t,a,r,s,i){const l=(0,o.up)("app-drop-list"),c=(0,o.up)("cities-recommended"),u=(0,o.up)("weather-info"),d=(0,o.up)("weather-forecast-list"),m=(0,o.up)("page-content");return(0,o.wg)(),(0,o.j4)(m,null,{default:(0,o.w5)((()=>[(0,o._)("button",{class:"search-btn",onClick:t[0]||(t[0]=(...e)=>r.search&&r.search(...e))},F),(0,o._)("div",U,[(0,o.wy)((0,o._)("input",{type:"text",class:"input",ref:"searchInput",placeholder:"Another location","onUpdate:modelValue":t[1]||(t[1]=e=>r.inputModel=e),onKeypress:t[2]||(t[2]=(0,n.D2)(((...e)=>r.search&&r.search(...e)),["enter"])),onFocus:t[3]||(t[3]=e=>r.showList=!0),onBlur:t[4]||(t[4]=e=>r.showList=!1)},null,544),[[n.nr,r.inputModel]]),r.showList&&r.cities?((0,o.wg)(),(0,o.j4)(l,{key:0,cities:r.cities,onOnSelect:r.select},null,8,["cities","onOnSelect"])):(0,o.kq)("",!0)]),(0,o.Wm)(c,{onOnSelect:r.select},null,8,["onOnSelect"]),(0,o.Wm)(u),(0,o.Wm)(d,{forecast:e.$store.getters["weatherModule/forecastWeather"]},null,8,["forecast"])])),_:1})}const R={class:"container"};function J(e,t,a,n,r,s){return(0,o.wg)(),(0,o.iD)("div",R,[(0,o.WI)(e.$slots,"default")])}var N={name:"PageContent"};const Z=(0,I.Z)(N,[["render",J]]);var $=Z;const T={class:"info-group list"},K={class:"space-between"},B=(0,o._)("span",{class:"prop-label"},"Cloudy",-1),j={class:"prop-value"},G={class:"space-between"},Y=(0,o._)("span",{class:"prop-label"},"Humidity",-1),V={class:"prop-value"},X={class:"space-between"},q=(0,o._)("span",{class:"prop-label"},"Wind",-1),Q={class:"prop-value"},ee={key:0,class:"space-between"},te=(0,o._)("span",{class:"prop-label"},"Rain",-1),ae={class:"prop-value"},ne={key:1,class:"space-between"},oe=(0,o._)("span",{class:"prop-label"},"Snow",-1),re={class:"prop-value"};function se(e,t,a,n,r,i){return(0,o.wg)(),(0,o.iD)("div",T,[(0,o._)("li",K,[B,(0,o._)("span",j,(0,s.zw)(n.weatherInfo?n.weatherInfo?.cloudy+"%":"Loading..."),1)]),(0,o._)("li",G,[Y,(0,o._)("span",V,(0,s.zw)(n.weatherInfo?n.weatherInfo?.humidity+"%":"Loading..."),1)]),(0,o._)("li",X,[q,(0,o._)("span",Q,(0,s.zw)(n.weatherInfo?n.weatherInfo?.wind+"km/h":"Loading..."),1)]),n.weatherInfo?.rain?((0,o.wg)(),(0,o.iD)("li",ee,[te,(0,o._)("span",ae,(0,s.zw)(n.weatherInfo?.rain+"mm"),1)])):(0,o.kq)("",!0),n.weatherInfo?.snow?((0,o.wg)(),(0,o.iD)("li",ne,[oe,(0,o._)("span",re,(0,s.zw)(n.weatherInfo?.snow+"mm"),1)])):(0,o.kq)("",!0)])}var ie={name:"WeatherInfo",setup(){const e=(0,D.oR)(),t=(0,o.Fl)((()=>e.getters["weatherModule/currentWeather"]));return{weatherInfo:t}}};const le=(0,I.Z)(ie,[["render",se]]);var ce=le;function ue(e,t,a,n,r,s){const i=(0,o.up)("weather-forecast-item");return(0,o.wg)(),(0,o.iD)("div",{class:"forecast info-group",onWheel:t[0]||(t[0]=(...e)=>n.horizontalScroll&&n.horizontalScroll(...e)),ref:"forecastList"},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.forecast,(e=>((0,o.wg)(),(0,o.j4)(i,{key:e.dt,weather:e.weather[0].main,temp:`${Math.round(e.temp.min)}° - ${Math.round(e.temp.max)}°`,date:new Date(1e3*e.dt)},null,8,["weather","temp","date"])))),128))],544)}const de={class:"item"},me={class:"item__title prop-label"},pe={class:"item__temp prop-value"},he={class:"item__date prop-label"};function we(e,t,a,n,r,i){return(0,o.wg)(),(0,o.iD)("div",de,[(0,o._)("div",{class:(0,s.C_)(["item__icon","icon",a.weather.toLowerCase()])},null,2),(0,o._)("span",me,(0,s.zw)(a.weather),1),(0,o._)("span",pe,(0,s.zw)(a.temp),1),(0,o._)("span",he,(0,s.zw)(n.validatedDate),1)])}var fe={name:"WeatherForecastItem",props:{weather:{type:String,default:"..."},temp:{type:String,default:"..."},date:{type:Date,default:"..."}},setup(e){const t=A,a=t(e.date.getDate())+"."+t(e.date.getMonth());return{validatedDate:a}}};const ge=(0,I.Z)(fe,[["render",we],["__scopeId","data-v-6e9c1d9a"]]);var ve=ge,ye={name:"WeatherForecastList",components:{WeatherForecastItem:ve},props:{forecast:{type:Array,default:[]}},setup(){const e=(0,y.iH)(null),t=t=>{if(e.value.scrollWidth>=e.value.clientWidth){let a;t.deltaMode==t.DOM_DELTA_PIXEL?a=1:t.deltaMode==t.DOM_DELTA_LINE?a=parseInt(getComputedStyle(this).lineHeight):t.deltaMode==t.DOM_DELTA_PAGE&&(a=this.clientHeight),0!=t.deltaY&&(e.value.scrollLeft+=a*t.deltaY>0?105:-105,t.preventDefault())}};return{horizontalScroll:t,forecastList:e}}};const Ae=(0,I.Z)(ye,[["render",ue],["__scopeId","data-v-38fb1fcc"]]);var Ce=Ae;const Ie={class:"drop-list info-group"},_e=["onMousedown"];function be(e,t,a,r,i,l){return(0,o.wg)(),(0,o.iD)("ul",Ie,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.cities,(t=>((0,o.wg)(),(0,o.iD)("li",{class:"prop-value",key:t.id,onMousedown:(0,n.iM)((a=>e.$emit("onSelect",t)),["prevent"])},(0,s.zw)(t.name)+" ("+(0,s.zw)(t.country)+")",41,_e)))),128))])}var Me={name:"AppDropList",emits:["onSelect"],props:{cities:{type:Array,default:null}}};const Le=(0,I.Z)(Me,[["render",be],["__scopeId","data-v-2738ab1a"]]);var Se=Le;const De={class:"info-group list"},Oe=["onClick"];function ke(e,t,a,n,r,i){return(0,o.wg)(),(0,o.iD)("div",De,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.$store.getters["citiesModule/recommendCities"],(t=>((0,o.wg)(),(0,o.iD)("li",{class:"prop-label btn",key:t.id,onClick:a=>e.$emit("onSelect",t)},(0,s.zw)(t.name),9,Oe)))),128))])}var ze={name:"CitiesRecommended"};const We=(0,I.Z)(ze,[["render",ke]]);var He=We,xe={name:"HomePage",components:{WeatherForecastList:Ce,WeatherInfo:ce,PageContent:$,AppDropList:Se,CitiesRecommended:He},setup(){const e=(0,D.oR)(),t=(0,y.iH)(""),a=(0,y.iH)([]),n=(0,y.iH)(!1),o=(0,y.iH)(null),r=()=>{t.value.length?(o.value.focus(),a.value=e.getters["citiesModule/cities"].filter((e=>e.name.toLowerCase().includes(t.value.toLowerCase())))):a.value=null},s=async a=>{await e.dispatch("citiesModule/setCurCity",a),await e.dispatch("weatherModule/loadWeatherInfo"),n.value=!1,t.value=""};return{inputModel:t,search:r,cities:a,showList:n,select:s,searchInput:o}}};const Ee=(0,I.Z)(xe,[["render",P],["__scopeId","data-v-49a2f794"]]);var Fe=Ee;const Ue=[{path:"/",name:"Home",component:Fe}],Pe=(0,W.p7)({history:(0,W.PO)("/"),routes:Ue});var Re=Pe,Je=a(6265),Ne=a.n(Je);const Ze=Ne().create({baseURL:"https://api.openweathermap.org/data/2.5/onecall"});var $e=Ze,Te={namespaced:!0,state(){return{weatherInfo:null}},getters:{currentWeather(e){if(e.weatherInfo){const t=e.weatherInfo.current,a={temp:Math.round(t.temp),wind:t["wind_speed"].toFixed(1),humidity:t.humidity,cloudy:t.clouds,weather:t.weather[0].main};return t.rain&&(a.rain=t.rain["1h"]),t.snow&&(a.snow=t.snow["1h"]),a}return e.weatherInfo},forecastWeather(e){return e.weatherInfo?e.weatherInfo.daily:e.weatherInfo}},mutations:{setWeatherInfo(e,t){e.weatherInfo=t}},actions:{async loadWeatherInfo({commit:e}){try{const t=Ye.getters["citiesModule/curCity"],{data:a}=await $e.get("",{params:{lat:t.lat,lon:t.lon,exclude:"hourly",units:"metric",appid:"d58d1bafb56b830db08e997a90520be6"}});e("setWeatherInfo",a),e("setTheme",a.current.weather[0].main.toLowerCase(),{root:!0})}catch(t){console.log(t)}}}};const Ke=Ne().create({baseURL:"http://dataservice.accuweather.com/locations/v1/topcities/"});var Be=Ke,je={namespaced:!0,state(){return{cities:null,curCity:null,recommendCities:null}},getters:{cities(e){return console.log("updated"),e.cities?.map((e=>({id:e.Key,name:e.AdministrativeArea.EnglishName.replace(" City",""),country:e.Country.EnglishName,lat:e.GeoPosition.Latitude.toFixed(0),lon:e.GeoPosition.Longitude.toFixed(0)})))||[]},curCity:e=>e.curCity,recommendCities:e=>e.recommendCities},mutations:{setCities(e,t){e.cities=t},setCurCity(e,t){e.curCity=t,localStorage.setItem("city",JSON.stringify(t))},setRecCities(e,t){e.recommendCities=t,localStorage.setItem("recommendCities",JSON.stringify(t))},addRecCity(e,t){e.recommendCities.unshift(t),e.recommendCities.pop(),localStorage.setItem("recommendCities",JSON.stringify(e.recommendCities))}},actions:{async loadCities({commit:e}){try{const t="bfX4I38PLbXYSTH2XjGd0LdAAtVIJAe9",a=`?apikey=${t}&language=en-us`,{data:n}=await Be.get(a);e("setCities",await n)}catch(t){console.log(t)}},setCurCity({state:e,commit:t},a){t("setCurCity",a);let n=!1;e.recommendCities.forEach((e=>{e.name===a.name&&(n=!0)})),n||t("addRecCity",a)}}};const Ge={rain:["thunderstorm","drizzle","rain"],snow:["snow"],clear:["clear"],mist:["mist","smoke","fok","haze","dust","sand","ash","squall","tornado"],clouds:["clouds"]};var Ye=(0,D.MT)({state:{theme:"clouds",weather:null},getters:{theme:e=>{const t=Object.keys(Ge);let a;return t.forEach((t=>{Ge[t].includes(e.theme)&&(a="theme-"+t)})),`theme-${e.theme}`}},mutations:{setTheme:(e,t)=>{e.theme=t}},actions:{},modules:{weatherModule:Te,citiesModule:je}});(0,n.ri)(z).use(Ye).use(Re).mount("#app")}},t={};function a(n){var o=t[n];if(void 0!==o)return o.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,a),r.exports}a.m=e,function(){var e=[];a.O=function(t,n,o,r){if(!n){var s=1/0;for(u=0;u<e.length;u++){n=e[u][0],o=e[u][1],r=e[u][2];for(var i=!0,l=0;l<n.length;l++)(!1&r||s>=r)&&Object.keys(a.O).every((function(e){return a.O[e](n[l])}))?n.splice(l--,1):(i=!1,r<s&&(s=r));if(i){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[n,o,r]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,r,s=n[0],i=n[1],l=n[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(o in i)a.o(i,o)&&(a.m[o]=i[o]);if(l)var u=l(a)}for(t&&t(n);c<s.length;c++)r=s[c],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(u)},n=self["webpackChunkvue_weather"]=self["webpackChunkvue_weather"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(9349)}));n=a.O(n)})();
//# sourceMappingURL=app.4878ed4d.js.map