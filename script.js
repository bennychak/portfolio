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
