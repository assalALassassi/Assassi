void function(){var i=$("#productId").val();var c=$(".J-download-catalog-label");var t=$(".J-cat-link",c);var r=$(".J-cat-cnt",c);var n='<div class="catalog-info">\n        <div class="catalog-pic size-40">\n            <div class="pic-cover"></div>\n            {{ if(catalogCoverPicUrl){ }}\n                <img src="{{-catalogCoverPicUrl}}">\n            {{ }else{ }}\n                <img src="https://www.micstatic.com/common/img/noimage/no_photo_60_04616494.gif">\n            {{ } }}\n        </div>\n        <div class="catalog-detail">\n            <div class="name text-ellipsis">{{=catalogName}}</div>\n            <div class="desc">{{=prodNumContent}}</div>\n        </div>\n    </div>\n    <div class="catalog-prod">\n        <div class="catalog-pic size-80">\n            <div class="pic-cover"></div>\n            {{ if(product.firstPicUrl100){ }}\n                <img src="{{-product.firstPicUrl100}}">\n            {{ }else{ }}\n                <img src="https://www.micstatic.com/common/img/noimage/no_photo_60_04616494.gif">\n            {{ } }}\n        </div>\n        <div class="catalog-detail">\n            <div class="name text-ellipsis-two">{{=product.prodName}}</div>\n            {{ if(product.theMinOrderPriceRang) { }}\n                <div class="desc">FOB Price: {{-product.theMinOrderPriceRang}}</div>\n            {{ } }}\n            {{ if(product.theMinOrder) { }}\n                <div class="desc">Min. Order: {{-product.theMinOrder}}</div>\n            {{ } }}\n        </div>\n    </div>\n    {{ if(first5OtherProdUrls && first5OtherProdUrls.length) { }}\n        <div class="catalog-other-prod">\n            <div class="catalog-other-title">Other Products</div>\n            <div class="catalog-other-list">\n                {{ for(var i = 0; i < first5OtherProdUrls.length; i++) { }}\n                    <div class="catalog-pic size-48">\n                        <div class="pic-cover"></div>\n                        {{ if(first5OtherProdUrls[i]){ }}\n                            <img src="{{-first5OtherProdUrls[i]}}">\n                        {{ }else{ }}\n                            <img src="https://www.micstatic.com/common/img/noimage/no_photo_60_04616494.gif">\n                        {{ } }}\n                    </div>\n                {{ } }}\n            </div>\n        </div>\n    {{ } }}';if(i&&c.length){t.click(function(i){i.preventDefault()});var a="/ref/catalog";var s=window.croAjax?window.croAjax(a):{url:a,xhrFields:false};$.ajax({type:"GET",url:s.url,dataType:"json",data:{productId:i},xhrFields:{withCredentials:s.xhrFields},cache:false,timeout:300*1e3,success:function i(a){if(a.canDownFlag){t.attr("cz-url",a.sendEmailUrl);t.attr("cz-catalog-id",a.catalogId);t.addClass(a.supplier?"J-supplier-catalog":"J-download-catalog");r.html(template(n,a));c.show()}else{}},error:function i(){}})}}.call(this);
//# sourceMappingURL=../../../../__sources__/athena/2017/js/business/downloadCatalog_5d5631e6.js.map
