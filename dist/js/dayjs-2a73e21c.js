"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;function t(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var e={exports:{}},n=e.exports=function(){var t=1e3,e=6e4,n=36e5,r="millisecond",s="second",i="minute",u="hour",a="day",o="week",c="month",f="quarter",d="year",h="date",l="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,_=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},M=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},y={s:M,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),s=n%60;return(e<=0?"+":"-")+M(r,2,"0")+":"+M(s,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),s=e.clone().add(r,c),i=n-s<0,u=e.clone().add(r+(i?-1:1),c);return+(-(r+(n-s)/(i?s-u:u-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:d,w:o,d:a,D:h,h:u,m:i,s:s,ms:r,Q:f}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},D="en",p={};p[D]=m;var Y="$isDayjsObject",v=function(t){return t instanceof b||!(!t||!t[Y])},g=function t(e,n,r){var s;if(!e)return D;if("string"==typeof e){var i=e.toLowerCase();p[i]&&(s=i),n&&(p[i]=n,s=i);var u=e.split("-");if(!s&&u.length>1)return t(u[0])}else{var a=e.name;p[a]=e,s=a}return!r&&s&&(D=s),s||!r&&D},S=function(t,e){if(v(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new b(n)},w=y;w.l=g,w.i=v,w.w=function(t,e){return S(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var b=function(){function m(t){this.$L=g(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[Y]=!0}var M=m.prototype;return M.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(w.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var s=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],s,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],s,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(e)}(t),this.init()},M.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},M.$utils=function(){return w},M.isValid=function(){return!(this.$d.toString()===l)},M.isSame=function(t,e){var n=S(t);return this.startOf(e)<=n&&n<=this.endOf(e)},M.isAfter=function(t,e){return S(t)<this.startOf(e)},M.isBefore=function(t,e){return this.endOf(e)<S(t)},M.$g=function(t,e,n){return w.u(t)?this[e]:this.set(n,t)},M.unix=function(){return Math.floor(this.valueOf()/1e3)},M.valueOf=function(){return this.$d.getTime()},M.startOf=function(t,e){var n=this,r=!!w.u(e)||e,f=w.p(t),l=function(t,e){var s=w.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?s:s.endOf(a)},$=function(t,e){return w.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},_=this.$W,m=this.$M,M=this.$D,y="set"+(this.$u?"UTC":"");switch(f){case d:return r?l(1,0):l(31,11);case c:return r?l(1,m):l(0,m+1);case o:var D=this.$locale().weekStart||0,p=(_<D?_+7:_)-D;return l(r?M-p:M+(6-p),m);case a:case h:return $(y+"Hours",0);case u:return $(y+"Minutes",1);case i:return $(y+"Seconds",2);case s:return $(y+"Milliseconds",3);default:return this.clone()}},M.endOf=function(t){return this.startOf(t,!1)},M.$set=function(t,e){var n,o=w.p(t),f="set"+(this.$u?"UTC":""),l=(n={},n[a]=f+"Date",n[h]=f+"Date",n[c]=f+"Month",n[d]=f+"FullYear",n[u]=f+"Hours",n[i]=f+"Minutes",n[s]=f+"Seconds",n[r]=f+"Milliseconds",n)[o],$=o===a?this.$D+(e-this.$W):e;if(o===c||o===d){var _=this.clone().set(h,1);_.$d[l]($),_.init(),this.$d=_.set(h,Math.min(this.$D,_.daysInMonth())).$d}else l&&this.$d[l]($);return this.init(),this},M.set=function(t,e){return this.clone().$set(t,e)},M.get=function(t){return this[w.p(t)]()},M.add=function(r,f){var h,l=this;r=Number(r);var $=w.p(f),_=function(t){var e=S(l);return w.w(e.date(e.date()+Math.round(t*r)),l)};if($===c)return this.set(c,this.$M+r);if($===d)return this.set(d,this.$y+r);if($===a)return _(1);if($===o)return _(7);var m=(h={},h[i]=e,h[u]=n,h[s]=t,h)[$]||1,M=this.$d.getTime()+r*m;return w.w(M,this)},M.subtract=function(t,e){return this.add(-1*t,e)},M.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",s=w.z(this),i=this.$H,u=this.$m,a=this.$M,o=n.weekdays,c=n.months,f=n.meridiem,d=function(t,n,s,i){return t&&(t[n]||t(e,r))||s[n].slice(0,i)},h=function(t){return w.s(i%12||12,t,"0")},$=f||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(_,(function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return w.s(e.$y,4,"0");case"M":return a+1;case"MM":return w.s(a+1,2,"0");case"MMM":return d(n.monthsShort,a,c,3);case"MMMM":return d(c,a);case"D":return e.$D;case"DD":return w.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return d(n.weekdaysMin,e.$W,o,2);case"ddd":return d(n.weekdaysShort,e.$W,o,3);case"dddd":return o[e.$W];case"H":return String(i);case"HH":return w.s(i,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return $(i,u,!0);case"A":return $(i,u,!1);case"m":return String(u);case"mm":return w.s(u,2,"0");case"s":return String(e.$s);case"ss":return w.s(e.$s,2,"0");case"SSS":return w.s(e.$ms,3,"0");case"Z":return s}return null}(t)||s.replace(":","")}))},M.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},M.diff=function(r,h,l){var $,_=this,m=w.p(h),M=S(r),y=(M.utcOffset()-this.utcOffset())*e,D=this-M,p=function(){return w.m(_,M)};switch(m){case d:$=p()/12;break;case c:$=p();break;case f:$=p()/3;break;case o:$=(D-y)/6048e5;break;case a:$=(D-y)/864e5;break;case u:$=D/n;break;case i:$=D/e;break;case s:$=D/t;break;default:$=D}return l?$:w.a($)},M.daysInMonth=function(){return this.endOf(c).$D},M.$locale=function(){return p[this.$L]},M.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=g(t,e,!0);return r&&(n.$L=r),n},M.clone=function(){return w.w(this.$d,this)},M.toDate=function(){return new Date(this.valueOf())},M.toJSON=function(){return this.isValid()?this.toISOString():null},M.toISOString=function(){return this.$d.toISOString()},M.toString=function(){return this.$d.toUTCString()},m}(),O=b.prototype;return S.prototype=O,[["$ms",r],["$s",s],["$m",i],["$H",u],["$W",a],["$M",c],["$y",d],["$D",h]].forEach((function(t){O[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),S.extend=function(t,e){return t.$i||(t(e,b,S),t.$i=!0),S},S.locale=g,S.isDayjs=v,S.unix=function(t){return S(1e3*t)},S.en=p[D],S.Ls=p,S.p={},S}();const r=t(n);!function(t){function e(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var n=e(t),r={name:"zh-cn",weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(t,e){return"W"===e?t+"周":t+"日"},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日Ah点mm分",LLLL:"YYYY年M月D日ddddAh点mm分",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},relativeTime:{future:"%s内",past:"%s前",s:"几秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"},meridiem:function(t,e){var n=100*t+e;return n<600?"凌晨":n<900?"早上":n<1100?"上午":n<1300?"中午":n<1800?"下午":"晚上"}};n.default.locale(r,null,!0)}(n);export{r as d};
