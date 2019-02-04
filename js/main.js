$('header .menu ul li a').click(function(){
	$('header ul li a').removeClass('active');
	$(this).addClass('active');
});

$('header .right-menu ul li').click(function(){
	$('header ul li').removeClass('active');
	$(this).addClass('active');
});


var $modalContainer = $('.modal-container');

$('.lnr-menu').click(function(){
	$modalContainer.addClass('active');
	$modalContainer.children('.modal').addClass('active');
});

$('.lnr-cross-circle').click(function(){
	$modalContainer.removeClass('active');
	$modalContainer.find('.modal').removeClass('active');
});

var count = 0;
var selector = $('.slider-container');
var slideCount = selector.find('.slide').length;


function slideNext() {
	$('.slider-container').find('.slide').removeClass('active');

	count++;
	if (count > slideCount - 1) {
		count = 0;
	}

	var current = $( '.slide' ).eq(count);
	current.addClass('active');
}

function slidePrev() {
	$('.slider-container').find('.slide').removeClass('active');

	count--;
	if (count < 0) {
		count = slideCount - 1;
	}

	var current = $( '.slide' ).eq(count);
	current.addClass('active');
}

var intervalID;
$('.arrow-prev').click(function () {
	slideController();
	slidePrev();
	slidesNumber();
});

$('.arrow-next').click(function () {
	slideController();
	slideNext();
	slidesNumber();
});


var sliderCounter = $('.slider-container').find('.slide').length;
$('.slider-counter .counter').text(sliderCounter);
var activeSlide;

function slidesNumber() {
	activeSlide = $('.slide.active ').index('.slider-container .slide') + 1;
	$('.slider-counter .active').text(activeSlide);
}
slidesNumber();


function slideController() {
	var i = 0;
	clearInterval(intervalID);
	$('.slick-active .slide-control .active-bar').css('width', '0%');

	intervalID = setInterval(function() {

		i++;
		progressController('.progress-bar', i);

		if (i == 100) {
			i = 0;
			slideNext();
			slidesNumber();
		}

	}, 50);
}
function progressController(selector, value) {

	var $selector = $(selector).find('.active-bar');

	if (value <= 0) {
		value = 0;
		slideController();
	}
	else if (value >= 100) {
		value = 100;
		slideController();
		}

	$selector.css('width', value + '%');
}
slideController();

$(window).scroll(function() {
  $('.animated').each(function(){
    var imagePos = $(this).offset().top;
    var topOfWindow = $(window).scrollTop();
		var windowHeight = $(window).height();
		var bottomOfWindow = windowHeight - (windowHeight / 3);

    if (imagePos < topOfWindow + bottomOfWindow) {
			if ($(this).hasClass('first')) {
				$(this).addClass('bounceInLeft');
			} else if ($(this).hasClass('third')) {
				$(this).addClass('bounceInRight');
			} else if ($(this).hasClass('fourth')) {
				$(this).addClass('zoomIn');
			} else if ($(this).hasClass('fifth')) {
				$(this).addClass('slideInRight');
			} else if ($(this).hasClass('second') ||
								 $(this).hasClass('sixth') ||
								 $(this).hasClass('seventh')) {
				$(this).addClass('flipInX');
			} else {
				console.log('Добавьте блоку класс-модификатор');
			}
    }
  });
});
