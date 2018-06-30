/**
 *
 * @category    design
 * @package     magestrike_default
 * @author      Wesley Almeida <wesleyalmd@gmail.com>
 *
 */



jQuery.noConflict();
(function( $ ) {
  $(function() {

	
  	//== Animate.css
  	//

  	/*

  	$.fn.extend({
	    animateCss: function (animationName) {
	        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	        this.addClass('animated ' + animationName).one(animationEnd, function() {
	            $(this).removeClass('animated ' + animationName);
	        });
	        return this;
	    }
	});

	*/

	//==



  	//== Default Product Carousel
  	//

	$('.slick-default, #upsell-product-list, #related-product-list, crosssell-products-list').slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 5,
		arrows: true,
		dots: false,
		responsive: [
		    {
		      breakpoint: 1366,
		      settings: {
		        slidesToShow: 4,
		        slidesToScroll: 4,
		        arrows: true,
		        dots: false
		      }
		    },
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 3,
		        arrows: false,
		        dots: true
		      }
		    },
		    {
		      breakpoint: 568,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2,
		        arrows: false,
		        dots: true
		      }
		    }
		]
	});


	//==



	//== Homepage Slideshow
	//

	$('.hompage-slideshow').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		responsive: [
		    {
		      	breakpoint: 1024,
		      	settings: {
					dots: true,
					arrows: false
		      	}
		    },
		]

	});


	//==



	//== Product image
	//

	$('.product-view .product-img-box .thumbnails').slick({
		infinite: false,
		slidesToShow: 5,
		vertical: true,
		verticalSwiping: true,
		dots: false,
		arrows: true,
		responsive: [
		    {
		      	breakpoint: 1024,
		      	settings: {
			      	infinite: true,
			      	slidesToShow: 1,
			        slidesToScroll: 1,
		      		vertical: false,
					verticalSwiping: false,
					dots: true,
					arrows: false
		      	}
		    },
		]
	});
	

	//==


  });
})(jQuery);
