void function(){var e=$("#J-catalog-dialog");if(e&&e.length>0){var r=template($("#J-catalog-dialog").html());var o={};window.urlForward=function(){closePopupDialog();s(o.url,o,1)};var l=template($("#J-dia-success").html());var n=template($("#J-dia-warn").html());var i=template($("#J-dia-error").html());$(document).on("click",".J-supplier-catalog",function(){var e={retResult:{tipMessage:"Sorry, this service is only available for buyers."}};var a=new artDialog({title:false,cancel:false,content:n(e),lock:true,time:3})});var c=function e(a,t,r){var o=new artDialog({title:"",content:n(t),button:[{name:"Confirm",highlight:true,callback:function e(){switch(a){case 1:showPoploginArtdialog(window.location.href,"quoteUrl=1&loginName="+r.email);break;case 2:showPopRegisterArtdialog(window.location.href,"quoteUrl=1&userName="+r.name+"&userEmail="+r.email+"&comCountry="+r.comCountry);break;case 0:o.close();break;default:;}}},{name:"Cancel",callback:function e(){o.close()}}],lock:true})};var s=function e(a,r,o){$.ajax({url:a,type:"POST",data:r,dataType:"json",cache:false,success:function e(a){if(a){if(a.retCode==="100"){f&&f.close();var t=new artDialog({title:"",content:l(a),init:function e(){},button:[{name:"Confirm",highlight:true,callback:function e(){if(o===0){t.close()}else if(o===1){window.location.reload()}}}],lock:true})}else if(a.retCode==="200"){f&&f.close();if(a.retResult.needLogin){c(1,a,r)}else if(a.retResult.needRegister){c(2,a,r)}else{var t=new artDialog({title:"",content:i(a),init:function e(){},button:[{name:"Confirm",highlight:true,callback:function e(){if(o===0){t.close()}else if(o===1){window.location.reload()}}}],lock:true})}}else if(a.retCode==="201"){$(".J-vcode-error").html('<label for="faptcha_response_field" generated="true" class="error">Please enter the correct characters you see in the image.</label>')}}else{alert("net err!")}},error:function e(){alert("net err!")}})};var u=false;var f=null;var d=function e(t,a){f=new artDialog({title:"Request Free Catalogs",content:r(a),init:function e(){var a=$(".J-catalog-form");Select.use($(".J-countrySelect"));if(u){$(".J-validator-box").removeClass("hide");$.ajax({url:"//"+window.location.host+"/captcha?action=widget&k=6LfzAc0SAADE5CteqEn5zUBDtNHIGZ6NGtaHh0g9",type:"get",dataType:"html",cache:false,success:function e(a){$("#J-validator").html(a)},error:function e(){}})}else{$(".J-validator-box").removeClass("hide").addClass("hide");$("#J-validator").empty()}a.validate({errorWrap:true,rules:{email:{email:true,required:true,remote:{url:"/Product-Catalogs/Emial-Check",type:"post",data:{email:function e(){return $("[name=email]").val()}},dataType:"json",dataFilter:function e(a){return JSON.parse(a).flag}}},name:{required:true,enonly:true},comCountry:{required:true},faptcha_response_field:{required:true}},messages:{email:{required:"Please enter your email address.",email:"Please enter your valid email address.Example: name@yourcompany.com.",remote:"Sorry, this service is only available for buyers."},name:{required:"Please enter your name.",enonly:"Please enter your name in English."},comCountry:{required:"Please select your country."},faptcha_response_field:{required:"Please enter the Verification Code."}}});a.submit(function(e){e.preventDefault()})},button:[{name:"Confirm",highlight:true,callback:function e(){var a=$(".J-catalog-form");if(a.valid()){o={source:$("[name=source]",a).val(),email:$("[name=email]",a).val(),name:$("[name=name]",a).val(),comCountry:$("[name=comCountry]",a).val(),comCountryCode:$("[name=comCountry] option:selected").attr("select-countrycode"),productId:$("#productId").val(),faptcha_public_key:$("[name=faptcha_public_key]",a).val()||"",faptcha_response_field:$("[name=faptcha_response_field]",a).val()||"",faptcha_challenge_field:$("[name=faptcha_challenge_field]",a).val()||"",url:t};s(t,o,0)}return false}},{name:"Cancel"}],width:590,fixed:true,lock:true,resize:false,drag:false})};var m=function e(r){$.ajax({url:"/countryList",dataType:"json",cache:false,success:function e(a){if(a){var t={hotCountries:a.retResult.country.hotCountries||[],allCountries:a.retResult.country.allCountries||[],selected:a.retResult.comCountry||""};d(r,t)}else{alert("net err!")}},error:function e(){alert("net err!")}})};$(document).on("click",".J-download-catalog",function(e){e.preventDefault();var t=$(this).attr("cz-url");var a=$(this).attr("cz-catalog-id");$.ajax({url:"/Product-Catalogs/Ip-Check?catalogId="+a,type:"get",dataType:"json",cache:false,success:function e(a){if(a){u=!!a.showFaptcha;if(a.execflag==="0"){m(t)}else{showPoploginArtdialog(window.location.href,"logonNotice="+encodeURIComponent(a.errormsg))}}else{alert("net err!")}},error:function e(){alert("net err!")}})})}}.call(this);
//# sourceMappingURL=../../../../../__sources__/athena/2017/js/business/catalogList/catalogListInfo_f445d935.js.map
