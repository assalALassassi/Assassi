void function(){var e="20230921";var i="//fa.micstatic.com/probe/video?v=".concat(e,"&t=perf");var m=function e(t){var t="d=".concat(encodeURIComponent(JSON.stringify(t)));if(navigator.sendBeacon){navigator.sendBeacon(i,t)}else{(new Image).src="".concat(i,"&").concat(t)}};var y=function e(t){var i=new RegExp("(?:^|;\\s*)".concat(t,"=([\\w\\W]*?)(?:;|$)")).exec(document.cookie);return i?i[1]:null};var t=function e(i){var t=location.href;var a=y("pid");var n=(parseInt(Math.random()*1e8)+parseInt(Date.now().toString().substring(0,8))).toString(16).toUpperCase();var r=i.config.videoUrl;var o=i.config.fileID;var l=i.config.appID;var s={pid:a,pfid:n,href:t,videoUrl:r};if(o){s.fileID=o}if(l){s.appID=l}var c=[];var d=0;i.on("apiloadstart",function(e){d=Date.now();s.type=e.type;s.api=e.api;s.css=e.css});i.on("apiloaded",function(e){d=Date.now()-d;s.loadApi=d});var u=[];var f=-1;i.on("waiting",function(e){u.push(i.currentTime())});var p=false;i.on("play",function(e){if(!p&&i.api().playbackRate){p=true;var t=i.api().playbackRate();c.push({rate:t,time:0})}});i.on("ratechange",function(e){var t=i.api().playbackRate();c.push({rate:t,time:i.currentTime()})});i.on("loadstart",function(e){f=Date.now()});i.on("loadeddata",function(e){s.loadTime=Date.now()-f;s.duration=i.api().duration();if(e.video){s.width=e.video.videoWidth||-1;s.height=e.video.videoHeight||-1}});i.on("canplay",function(e){s.canplay=Date.now()-f});var v=false;var h=function e(){if(v){return}v=true;s.waittimes=u;if(c.length){s.rates=c}m(s)};i.on("ended",function(e){s.ended=1;s.currentTime=i.api().duration();h(s)});window.addEventListener("beforeunload",function(e){s.currentTime=i.currentTime();h(s)},false)};window.videoPerf=t}.call(this);var VideoPlayer=function(){var n=window;var i=function e(){var t=arguments[0];var i=[].slice.call(arguments,1);for(var a=0;a<i.length;a++){var n=i[a];for(var r in n){t[r]=n[r]}}return t};var a=function e(t){var i=null;if(t){if(typeof t==="string"){if(document.querySelector){i=document.querySelector(t)}else{i=document.getElementById(t.replace(/^#/,""))}}else{if(t.jquery&&t.length){i=t[0]}else if(t&&t.nodeType===1){i=t}}}return i};var c="<!DOCTYPE html>"+'<html lang="en">'+"<head>"+'\t<meta charset="UTF-8">'+'\t<meta name="viewport" content="width=device-width, initial-scale=1.0">'+'\t<meta http-equiv="X-UA-Compatible" content="ie=edge">'+"\t<title>Video Player</title>"+"\t<style>"+"\thtml,body{"+"\t\tpadding: 0;"+"\t\tmargin: 0;"+"\t\tborder: 0;"+"\t\twidth: 100%;"+"\t\theight: 100%;"+"\t\toverflow: hidden;"+"\t}"+"\t#player{"+"\t\twidth: 100%;"+"\t\theight: 100%;"+"\t}"+"   .ykplayer .x-video-poster img{"+"       position: absolute;"+"       top: 50%;"+"       left: 50%;"+"       transform: translate(-50%, -50%);"+"       margin: auto;"+"       width: 100%!important;"+"       height: auto!important;"+"   }"+"   .azuremediaplayer .vjs-tech {"+"       object-fit: cover"+"   }"+"   .azuremediaplayer .vjs-player>div:nth-child(1){"+"       display: flex;"+"       justify-content: center;"+"       flex-direction: column;"+"       height: 100%;"+"       width: 100%;"+"   }"+"   .azuremediaplayer .vjs-player>div:nth-child(1) video{"+"       position: static;"+"       height: auto;"+"   }"+"   .amp-default-skin{"+"       min-width: 120px !important"+"   }"+"\t</style>"+"{{style}}"+"<script>{{domain}}<\/script>"+"<script>var params = {{params}};<\/script>"+"</head>"+"<body>"+'<div id="player"></div>'+'<script charset="utf-8" src="'+"https://www.micstatic.com/common/js/assets/player/playVideo_00eae0b7.js"+'"><\/script>'+"</body>"+"</html>";var r={lang:"en",player:"auto",el:null,oriEL:null,videoUrl:"",autoplay:false,muted:false,controls:"default",token:"",inSwiper:false,blank:"",poster:undefined,subtitles:[],exConfig:null,style:"",callback:null,perf:true};var o=[];var l=function e(t){this.config=i({},r,t);observe(this);this.__init();if(this.config.perf){videoPerf(this)}};l.prototype={constructor:l,__init:function e(){this.id="mvideo_"+parseInt(Math.random()*1e6);this.__init_events();this.__createPlayer()},api:function e(){return this.ifr&&this.ifr.contentWindow&&this.ifr.contentWindow.videoPlayer},currentTime:function e(){var t=this.api();return t&&(t.currentTime&&t.currentTime()||t.getCurrentTime&&t.getCurrentTime())||0},play:function e(){var t=false;var i=this.api();if(i){try{if(i.play){i.play();t=true}else if(i.playVideo){i.playVideo();t=true}}catch(e){}}return t},pause:function e(){var t=false;var i=this.api();if(i){try{if(i.pause){i.pause();t=true}else if(i.pauseVideo){i.pauseVideo();t=true}}catch(e){}}return t},__init_events:function e(){var a=this;this.EVENT_SIGN="__VIDEO_EVENT_"+this.id+"_";this.__EVENT_NAMES__="apiloadstart,apiloaded,error,ready,canplay,play,playing,ended,loadstart,loadeddata,pause,seeked,playing,loadedmetadata,through,waiting,ratechange,resolutionswitching,resolutionswitched,fullscreenchange";this.__EVENT_NAMES__.replace(/\w+/g,function(i){n[a.EVENT_SIGN+i.toUpperCase()]=function(e){a.fire(i,e);var t={type:e.event,currentTime:e.currentTime,duration:e.duration,videoSourceType:e.type,videoUrl:e.params.videoUrl,errorCode:e.errorCode,el:a.config.oriEl||a.config.el,video:e.video};if(document.readyState==="complete"&&l.eventHandler){if(o.length>0){o.forEach(function(e){l.eventHandler&&l.eventHandler(e)});o.length=0}else{l.eventHandler&&l.eventHandler(t)}}else{o.push(t)}}})},__removeEvent:function e(){var t=this;this.off();this.__EVENT_NAMES__.replace(/\w+/g,function(e){n[t.EVENT_SIGN+e.toUpperCase()]=null})},checkType:function e(t){var i=this.config.videoUrl;var a=/^nodata$/i.test(i);var n=/youku\.com/i.test(i);var r=/(youtube\.com|youtu\.be)/i.test(i);var o=/(?:micmedia\.azureedge\.net|micmedia2\.streaming\.mediaservices\.windows\.net)/i.test(i);var l=/\.vod2\.myqcloud\.com/i.test(i);var s=/v\.made-in-china\.com/i.test(i);var c=this.config.videoUrl&&!a&&!n&&!r&&!o;this.type=n?"youku":o?"ms":r?"youtube":l?"tc":s?"tcn":c?"h5":"none";if(t){t.isNoData=a;t.isYouku=n;t.isYoutube=r;t.isMS=o;t.isTc=l;t.isTcn=s;t.isH5=c}},__createPlayer:function e(){var o=this;var l=document.createElement("iframe");l.id=this.id;l.player=this;if(this.config.blank){l.src=this.config.blank+(document.domain===location.hostname?"":"?domain="+document.domain)}l.style.cssText="display:block; width:100%; height:100%;";l.frameBorder="0";l.allowFullscreen=true;l.allowTransparency=true;l.setAttribute("allowfullscreen",true);l.setAttribute("allowtransparency",true);a(this.config.el).appendChild(l);this.ifr=l;var s={lang:this.config.lang||"en",player:this.config.player,videoUrl:this.config.videoUrl,autoplay:this.config.autoplay,muted:this.config.muted,controls:this.config.controls,poster:this.config.poster,token:this.config.token,sign:this.EVENT_SIGN,msControls:this.config.msControls,msMuted:this.config.msMuted,swiper:!!this.config.inSwiper,subtitles:this.config.subtitles||[],exConfig:this.config.exConfig,style:this.config.style||"",callback:this.config.callback||null};var t=function e(){o.timer=setInterval(function(){try{var e=l.contentWindow;var t=e.document;var i=e.location;clearInterval(o.timer);t.open();var a=c;var n=document.domain!==location.hostname?'document.domain = "'+document.domain+'"':"";a=a.replace(/{{domain}}/g,n);var r=s.style?'<style type="text/css">'.concat(s.style,"</style>"):"";a=a.replace(/{{style}}/,r);delete s.style;if(typeof s.callback==="function"){s.callback=s.callback.toString()}if(typeof s.callback!=="string"){delete s.callback}a=a.replace(/{{params}}/,JSON.stringify(s));t.write(a);t.close()}catch(e){}},19)};if(this.config.blank){var i=function e(){l.removeEventListener("load",e);t()};l.addEventListener("load",i,false)}else{t()}},dispose:function e(){clearInterval(this.timer);delete this.ifr.player;this.__removeEvent();this.ifr.parentNode.removeChild(this.ifr)}};return l}.call(this);
//# sourceMappingURL=../../../../__sources__/common/js/assets/player/player_6880fbf4.js.map
