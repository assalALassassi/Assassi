void function(i){if(this.PicRound)return;var t=new Abstract({picRoundStart:function i(){},picRoundStop:function i(){},onChangeDerection:function i(t){},getRoundDirection:function i(){},changeSpeed:function i(t){}});var n={isAutoPlay:true,autoPlayAction:"",speed:1e3,roundDirection:"right",roundTimeOut:null,picSize:null,imgNum:0,imgs:[],carrier:{imgbox:"#egimgbox",imgboxWrap:"#egimgboxWrap",startBtn:null,stopBtn:null,turnRightBtn:null,turnLeftBtn:null}};var o=new Clazz(t,{config:n,inherit:Component},function(i){this.setConfig(i);this._init()});o.extend({_init:function i(){var t=this;this.picRoundStart.implement(this._start);this.picRoundStop.implement(this._stop);this.onChangeDerection.implement(this._onChangeDerection);this.getRoundDirection.implement(this._getRoundDirection);this.changeSpeed.implement(this._changeSpeed);this.config.imgs=$(this.config.carrier.imgbox);this.config.hasloaded=false;this.config.imgs.css({position:"relative"});this.config.imgNum=$(this.config.carrier.imgbox).find(".J-gif-mainPic").length>0?1:0;var n=$(this.config.carrier.imgbox).find("img:eq(0)");n.css({display:"block",margin:"auto",position:"relative",top:0});var o=n.attr("data-giforiginal")||n.attr("data-original");if(o){n.attr("src",o).css({display:"block",margin:"auto",position:"relative",top:0})}this.config.imgs.find("img").filter(function(i){return i>0}).css({display:"block",margin:"auto",position:"absolute",top:0,left:-9999});if(t.config.isAutoPlay){t._start()}if(this.config.carrier.startBtn){$(this.config.carrier.startBtn).bind("click",function(){t._start();$(t.config.carrier.startBtn).hide();if(t.config.carrier.stopBtn){$(t.config.carrier.stopBtn).show()}})}if(this.config.carrier.stopBtn){$(this.config.carrier.stopBtn).bind("click",function(){t._stop();$(t.config.carrier.stopBtn).hide();if(t.config.carrier.startBtn){$(t.config.carrier.startBtn).show()}})}if(this.config.carrier.turnRightBtn){$(this.config.carrier.turnRightBtn).bind("click",function(){t._onChangeDerection("right")})}if(this.config.carrier.turnLeftBtn){$(this.config.carrier.turnLeftBtn).bind("click",function(){t._onChangeDerection("left")})}if(this.config.autoPlayAction=="hover"){$(this.config.carrier.imgbox).hover(function(){t._start()},function(){t._stop()})}},_change:function i(){if(!this.isPlayed){return}var t=this;var n=$(t.config.carrier.imgbox);if(n){if(this.config.roundDirection=="right"){if(this.config.imgNum>=this.config.picSize){this.config.imgNum=$(this.config.carrier.imgbox).find(".J-gif-mainPic").length>0?1:0}$(this.config.carrier.imgbox).find("img").css({left:-9999,position:"absolute"});$(this.config.carrier.imgbox).find("img:eq("+this.config.imgNum+")").css({left:0,position:"relative"});this.config.imgNum++}else{if(this.config.imgNum<0){this.config.imgNum=this.config.picSize-1}$(this.config.carrier.imgbox).find("img").css({left:-9999,position:"absolute"});$(this.config.carrier.imgbox).find("img:eq("+this.config.imgNum+")").css({left:0,position:"relative"});this.config.imgNum--}}},_onChangeDerection:function i(t){this.config.roundDirection=t},_getRoundDirection:function i(){var t=event.clientX;var n=t;var o=t-n;if(o>0)direction="right";if(o<0)direction="left";this._stop()},_start:function i(){var o=this;if(!this.isPlayed){this.isPlayed=true;var r=$(this.config.carrier.imgbox).find("img");this.config.imgs.find("img").css({display:"block",margin:"auto",position:"absolute",top:0,left:-9999});var t=$(this.config.carrier.imgbox).find("img:eq("+this.config.imgNum+")");var n=t.attr("data-giforiginal")||t.attr("data-original");if(n&&t.attr("src")!=n){t.attr("src",n)}t.css({display:"block",margin:"auto",position:"relative",top:0,left:0});this.config.picSize=this.config.picSize?this.config.picSize:$(this.config.carrier.imgbox).find("img").size();$(this.config.carrier.imgbox).prepend("<div class='J-picround-loading' style='position: absolute;background: #fff;border-radius: 40px;width:80px;height:80px;top:50%;left:50%;margin-left: -40px;margin-top: -40px;'><div style='position: absolute;text-align:center;width:55px;height:55px;top:50%;left:50%;margin-left: -28px;margin-top: -28px;z-index:1'><img src='' style='position: absolute;text-align:center;width:55px;height:55px;top:50%;left:50%;margin-left: -28px;margin-top: -28px;z-index:1'/></div></div>");$(this.config.carrier.imgbox).find(".J-picround-loading img").attr("src","https://www.micstatic.com/common/img/loading_e7ad1158.gif");if(o.config.hasloaded===true){c(r)}else{var e=0;r.each(function(i,t){var n=$(this).attr("data-giforiginal")||$(this).attr("data-original");if(n){$(this).attr("src",n)}if(t.complete){e++;if(e>=r.length){o.config.hasloaded=true;c(r)}}else{t.onload=t.onerror=function(){e++;if(e>=r.length){o.config.hasloaded=true;c(r)}t.onload=t.onerror=null}}})}function c(i){$(o.config.carrier.imgbox).find(".J-picround-loading").remove();i.show();setTimeout(function(){if(o.isPlayed){o.config.roundTimeOut=setInterval(function(){o._change()},o.config.speed)}},19)}}},_stop:function i(){clearInterval(this.config.roundTimeOut);this.config.roundTimeOut=null;this.isPlayed=false;if(this.config.carrier.startBtn){$(this.config.carrier.startBtn).show()}if(this.config.carrier.stopBtn){$(this.config.carrier.stopBtn).hide()}var t=$(this.config.carrier.imgbox).find(".J-gif-mainPic").length>0?1:0;if(this.config.imgNum!==t){$(this.config.carrier.imgbox).find("img").css({left:-9999,position:"absolute"});$(this.config.carrier.imgbox).find("img:eq("+t+")").css({left:0,position:"relative"});this.config.imgNum=$(this.config.carrier.imgbox).find(".J-gif-mainPic").length>0?1:0}},_changeSpeed:function i(t){var n=this;if(this.config.roundTimeOut!=null){this._stop();this.config.roundTimeOut=setInterval(function(){n._change()},t)}}});this.PicRound=o}.call(window,document);
//# sourceMappingURL=../../../../__sources__/common/js/assets/picRound/picRound_26b74f74.js.map
