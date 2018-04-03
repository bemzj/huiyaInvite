$(function(){
	//音乐
	var music = 0;
	var musicOpen = true;
	var musicTween = setInterval(function() {
		music += 2;
		$('#music').css('transform', "rotate(" + music + "deg)");
		if(music == 360) {
			music = 0;
		}
	}, 10);
	$('#music').on('click', function() {
		if(musicOpen == true) {
			musicOpen = false;
			clearInterval(musicTween);
			$('#bg')[0].pause();
		} else {
			musicOpen = true;
			musicTween = setInterval(function() {
				music += 2;
				$('#music').css('transform', "rotate(" + music + "deg)");
				if(music == 360) {
					music = 0;
				}
			}, 10);
			$('#bg')[0].play();
		}
	});
	
	$('#bg')[0].volume=0.6;
	//实例化切换
	var swiper = new Swiper('.swiper-container', {
		initialSlide: 0,
		direction: 'vertical',
		allowSlidePrev: false,
		pagination: {
			clickable: true,
		},
		on: {
			init: function() {
				swiperAnimateCache(this); //隐藏动画元素 
				swiperAnimate(this); //初始化完成开始动画
				$('#main').hide();
			},
			slideChangeTransitionEnd: function() {
				swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
				if(this.activeIndex == 1)
				{
					$('.swiper-container').find('.swiper-slide').eq(0).children().remove();
					setTimeout(function() {
						$('.page22').find('img').addClass('bas5');
					}, 1400);
				}else if(this.activeIndex == 2){
					$('.swiper-container').find('.swiper-slide').eq(1).children().remove();
					$('#music3')[0].volume = 1;
					$('#music3')[0].play();
					setTimeout(function() {
						$('.page32').find('img').addClass('bas5');
						$('.page33').find('img').addClass('bas5');
					}, 1300);
				}
				else if(this.activeIndex == 3){
					$('.swiper-container').find('.swiper-slide').eq(2).children().remove();
					var html = "";
					html += '<div class="page42 ani"><img src="img/page42.gif" /></div>';
					$('.page41').after(html);
					$('#music3')[0].pause();
					setTimeout(function() {
						$('.page42').find('img').attr('src', 'img/page45.png');
						$('#music2')[0].play();
						$('.page41').find('img').addClass('bas4');
					}, 1000);
				}
				else if(this.activeIndex == 4) {
					$('.page53').removeClass('page533');
					$('.swiper-container').find('.swiper-slide').eq(3).children().remove();
					$('#music4')[0].play();
					setTimeout(function() {
						$('.page51').find('img').addClass('bas5');
						$('.page53').css('opacity', 1).addClass('page533');
						setTimeout(function(){
							$('#music2')[0].play();
						},100);
						
					}, 1000);
				} else if(this.activeIndex == 5) {
					$('.swiper-container').find('.swiper-slide').eq(4).children().remove();
					$('#music4')[0].pause();
					for(var i = 0; i < 8; i++) {
						$('.page6').children('div').eq(2 + i).addClass('page6' + (i + 1));
					}
					setTimeout(function() {
						$('.page70').css('opacity', 1).addClass('page701');
						$('#music5')[0].play();
						setTimeout(function(){
							$('.page70').find('img').addClass('shanks');
						},500);
						setTimeout(function() {
							$('.page6').fadeOut();
							$('.page6two').fadeIn();
							setTimeout(function() {
								$('.page751').css('opacity', 1).addClass('page7511');
								$('#music5')[0].currentTime = 0;
								$('#music5')[0].play();
								setTimeout(function() {
									$('.page752').css('opacity', 1).addClass('page7522');
									$('#music5')[0].currentTime = 0;
									$('#music5')[0].play();
									setTimeout(function() {
										$('.page753').css('opacity', 1).addClass('page7533');
										$('#music5')[0].currentTime = 0;
										$('#music5')[0].play();
										setTimeout(function() {
											$('.page754').css('opacity', 1).addClass('page7544');
											$('#music5')[0].currentTime = 0;
											$('#music5')[0].play();
										}, 400);
									}, 400);
								}, 400);
								$('.page73').fadeIn(750, function() {
									$('.page74').fadeIn(750, function() {
										$('.page6').parents('.swiper-slide').removeClass('swiper-no-swiping');
									});
								});
							}, 400);
						}, 5000);
					}, 1000);
	
				} else if(this.activeIndex == 6) {
					$('.swiper-container').find('.swiper-slide').eq(5).children().remove();
//					$('#music4')[0].play();
//					setTimeout(function() {
						$('.page78').show();
						$('#music4')[0].pause();
						$('.hand').show();
						$('.page7in button').on('click', function() {
							$('.page7in').hide().remove();
							$('.page7two').show();
							$('.page78').addClass('page788');
							$('.page79').addClass('page799');
							$('.page80').addClass('page800');
							$('.page81').addClass('page811');
							$('.page82').addClass('page822');
							$('.page7').parents('.swiper-slide').removeClass('swiper-no-swiping');
							setTimeout(function(){
								$('#music6')[0].play();
							},700);
							
						});
//					}, 2000);
	
				}else if(this.activeIndex == 7) {
					$('.swiper-container').find('.swiper-slide').eq(6).children().remove();
					var html = "";
					html += '<div class="page92 ani"><img src="img/page92.gif" /></div>';
					$('.page91').after(html);
				}
			}
		}
	});
	//消除广告插入
	$('.delete1').prevAll().remove();
	$('.delete2').nextAll().remove();
	//下一页
	$('.playgoing').on('click',function(){
		swiper.slideNext();
	});
	var href = "http://huiya.hengdikeji.com/api/huiya/index.html";
	$('.page96').find('a').attr('href',href);
});
