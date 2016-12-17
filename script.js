function scrollFunction(){
	var distance = $(document).scrollTop();
    if(distance > 128){
    	$('body').addClass('checked');
    }else{
    	$('body').removeClass('checked');
    }
}
window.onscroll = scrollFunction;
window.onresize = scrollFunction;

// 判断是否支持video标签
var hasVideo = !!(document.createElement('video').canPlayType);
if(hasVideo){
	var video = $('#supportVideo')[0];
	// video.currentTime = 0;
	$('#control').on('click',function(){
		$(this).css('display','none');
		video.play();
	});
}else{
	alert('请使用支持HTML5的浏览器，如Chrome、Safari访问以查看视频')
}

$(function(){
    $("img.lazy").lazyload({
	    effect : "fadeIn",
	    threshold : 500
    });
});