$(function() {

	/*Wrapper
	===============================================*/
	$('.wrapper').addClass('_loaded');

	/*IBG
	===============================================*/
	function ibg(){

	  $.each($('.ibg'), function(index, val) {
	    if($(this).find('img').length>0){
	  $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
	      }
	    });
	  }

	ibg();

	/*Burger
	===============================================*/
	$('.menu__icon').on('click', function() {
	  $(this).toggleClass('_active');
	  $('.header__menu').toggleClass('_active');
	  $('body').toggleClass('_lock');
	});

	function checkScroll() {
		if ($(window).scrollTop() > 120){
			$('header').addClass("_sticky");
		} else{
			$('header').removeClass("_sticky");
		}
	}
	checkScroll();
	$(window).on('scroll', checkScroll)

	function moveDiv() {
 		if ($(window).width() < 651) {
    		$(".how-it-works__item--three").appendTo($(".how-it-works__items-box"));
  		} else {
    		$(".how-it-works__item--three").appendTo($(".how-it-works__items"));
  		}
	}
	moveDiv();
	$(window).resize(moveDiv);

	/*Slider
	===============================================*/
	$('.intro__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		fade: true,
		arrows: false,
		dots: true,
	});

	$('.contact-us__slider').slick({
		slidesToShow: 10,
		slidesToScroll: 10,
		infinite: true,
		fade: false,
		arrows: false,
		dots: true,
		dotsClass: 'slick-dots slick-dots__contact-us',
		responsive: [
			{
				breakpoint: 1361,
				settings: {
					slidesToShow: 8,
					slidesToScroll: 8
				}
			},
			{
				breakpoint: 993,
				settings: {
					slidesToShow: 6,
					slidesToScroll: 6
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4
				}
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},
			{
				breakpoint: 521,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 481,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
		]
	});

	$('.blog-full__item-gallery').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		fade: true,
		dots: false,
		arrows: true,
		prevArrow: '<button type="button" class="slick-btn slick-btn__prev"><img src="img/blog-full/back.svg" alt=""></button>',
		nextArrow: '<button type="button" class="slick-btn slick-btn__next"><img src="img/blog-full/next.svg" alt=""></button>',
	});

});

/*Filter
===============================================*/
function testFilter() {
	const buttons = document.querySelectorAll('.gallery__btn');
	const items   = document.querySelectorAll('.gallery__item');

	buttons.forEach(function(btn) {
		btn.addEventListener('click', function(clickBtn) {
			document.querySelector('.gallery__btn._active').classList.remove('_active');
			btn.classList.add('_active');
			const currentCategory = btn.dataset.filter;
			filter(currentCategory, items);
		});
	});

	function filter(currentCategory, cards) {
		const isShowAll = currentCategory === 'all';
		cards.forEach(function(card) {
			const category  = card.dataset.set;
			if (currentCategory != category && isShowAll == false) {
				card.classList.add('_hide')
			} else {
				card.classList.remove('_hide')
			}
		});
	};
}

testFilter();


/*Lock-Padding
===============================================*/
function openMenu() {
	const headerBtn     	 = document.querySelector('.header__btn');
	const rightsideMenu 	 = document.querySelector('.rightside-menu');
	const body 				 = document.querySelector('body');
	const rightsideMenuClose = document.querySelector('.rightside-menu__close');
	const lockPadding 	     = document.querySelectorAll('._lock-padding');
	const wrapper 		     = document.querySelector('.wrapper');

	const lockPaddingValue   = window.innerWidth - wrapper.offsetWidth + 'px';
	//console.log(window.innerWidth);
	//console.log(wrapper.offsetWidth + 'px');
	//console.log(lockPaddingValue);

	headerBtn.addEventListener('click', function() {
		for (let i = 0; i < lockPadding.length; i++) {
			lockPadding[i].style.paddingRight = lockPaddingValue;
		}
		body.style.paddingRight = lockPaddingValue;
		rightsideMenu.classList.add('_active');
		body.classList.add('_lock');
	});

	rightsideMenuClose.addEventListener('click', function() {
		rightsideMenu.classList.remove('_active');
		setTimeout(function() {
			for (let i = 0; i < lockPadding.length; i++) {
				lockPadding[i].style.paddingRight = '0px';
			}
			body.style.paddingRight = '0px';
			body.classList.remove('_lock');
		}, 600);
	})

}

openMenu();