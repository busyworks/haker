$(document).ready(function(){
	$('.main_slider .slider').slick({
		dots: true,
		arrows: false,
		fade: true,
		speed: 0,
	});
	$('.mag_slider').slick();
});

$('.main_slider .slider').on('beforeChange', function(event, slick, direction){
	$('.main_slider .slider .txt, .main_slider .slider .img').addClass('slideBefore');
});

$('.main_slider .slider').on('afterChange', function(event, slick, direction){
	$('.main_slider .slider .txt').removeClass('slideBefore').addClass('slideAfter');
	setTimeout(function(){
		$('.main_slider .slider .txt').removeClass('slideAfter');
	},300);
	setTimeout(function(){
		$('.main_slider .slider .img').removeClass('slideBefore').addClass('slideAfter');;
	},100);
	setTimeout(function(){
		$('.main_slider .slider .img').removeClass('slideAfter');
	},400);
});

$(window).load(function() {
	var firstH = $('.mag_slider .item:nth-child(1) img').height();
	var secondH = $('.mag_slider .item:nth-child(2) img').height();
	if(firstH > secondH){
		$('.mag_slider .item').css('height', firstH);
		$('.mag_slider .item img').each(function(){
			var imgH = $(this).height();
			$(this).css('top',(firstH-imgH)/2);
		});
	}
	else{
		$('.mag_slider .item').css('height', secondH);
		$('.mag_slider .item img').each(function(){
			var imgH = $(this).height();
			$(this).css('top',(secondH-imgH)/2);
		});
	} 
});

$(document).scroll(function(){
	if($(this).scrollTop() > 0){
	    $('header, body').addClass('scrolled');
	}
	else{
		$('header, body').removeClass('scrolled');
	}
	//
	var scrollId = [];
	for($i = 1; $i < 7; $i++){
		scrollId = ['s'+$i];
		var scrollId2 = $('#'+scrollId).position().top-90;
		if($(this).scrollTop() > scrollId2){
			$('header .menu a').removeClass('active');
			$('[data-to='+scrollId+']').addClass('active');
		}
	}
	if($(this).scrollTop() < parseInt($('#s0').position().top) + parseInt($('#s0').height()) - 90 ){
		$('header .menu a').removeClass('active');
		$('.mobile_menu').fadeOut();
		$('.menu_button').removeClass('open');
	}
});

$('.to_top').click(function(){
	$('html, body').animate({
        scrollTop: $('html').offset().top
    }, 900);
});

$('header .menu a, footer .links a').click(function(){
	var whereTo = $(this).data('to');
	$('html, body').animate({
        scrollTop: $('#'+whereTo).offset().top-81
    }, 900);
});

$('.news .links a').click(function(){
	var mag = $(this).data('mag');
	$('.news .current span').html(mag);
	$('.news .links a').removeClass('active');
	$(this).addClass('active');
});

$('.brands .item').click(function(){
	$('body').css('overflow','hidden');
	$('.popup').fadeIn();
});

$('.popup').click(function(){
	$(this).fadeOut();
	$('body').css('overflow','auto');
});

$('.menu_button').click(function(){
	if($('.mobile_menu').css('display') === 'none'){
		$('.mobile_menu').fadeIn();
		$('.menu_button').addClass('open');
	}
	else{
		$('.mobile_menu').fadeOut();
		$('.menu_button').removeClass('open');
	}
});

$('.mobile_menu nav a').click(function(){
	$('.mobile_menu').fadeOut();
	$('.menu_button').removeClass('open');
});