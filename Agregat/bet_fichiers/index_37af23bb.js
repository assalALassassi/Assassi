$(function(){$(".J-async-velocity").each(function(e,n){var r=n.querySelector("form");var t=n.hasAttribute("replace-dom");var a=n.querySelector('script[type="text/x-velocity"]');var i=a&&a.innerHTML;var c=n.querySelector('script[type="text/x-callback"]');var o=c&&c.innerHTML;var l=n.querySelector('script[type="text/x-error-callback"]');var s=l&&l.innerHTML;var u=n.querySelector('script[type="text/x-jsondata"]');var d=JSON.parse($.trim(u&&u.innerHTML||"")||"{}");var v=window.velocity;var f=v.render;var y=function e(r,t,a){return f(r,t,a)};var x=function e(r,t){setTimeout(function(){window.postMessage({type:r,data:t},"*")},1e3)};var p=function e(r,t){if(i){var a=y(i,r);if(t){$(n).replaceWith(a)}else{n.innerHTML=a}}if(o){new Function("data",o)(r)}else{x("async_callback",r)}};var w=function e(r){if(s){new Function("data",s)(r)}else{x("async_callback_error",r)}};if(r){var h=r.getAttribute("action");var T=window.croAjax?window.croAjax(h):{url:h,xhrFields:false};$.ajax({type:r.method||"GET",url:T.url,data:$(r).serialize(),xhrFields:{withCredentials:T.xhrFields},dataType:"json",success:function e(r){if(r.code==200){p($.extend(true,d,r.data),t)}else if(r.status===0){p($.extend(true,d,r.data),t)}else{w(r)}},error:function e(r){w(r)}})}else{p(d,t)}})});
//# sourceMappingURL=../../../../__sources__/common/js/assets/async-velocity/index_37af23bb.js.map
