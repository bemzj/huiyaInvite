$(function(){
	$('.playgoing').on('click',function(){
		swiper.slideNext();
	});
	
	var rStatus = false
	var run = setInterval(function(){
		if(rStatus == false)
		{
			rStatus = true;
			$('.page92').find('img').attr('src','img/page93.png');
		}else{
			rStatus = false;
			$('.page92').find('img').attr('src','img/page92.png');
		}
	},200);
});
