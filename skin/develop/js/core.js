/**
 *
 * @category:   design
 * @package:    magestack_default
 * @author:     Wesley Almeida <wesleyalmd@gmail.com>
 *
 */



jQuery.noConflict();
(function( $ ) {
  $(function() {


	//== Inc/dec btn 
	//

	$(".qty-btn").on("click", function() {
  		var $button = $(this);
  		var oldValue = $button.parents().eq(2).find("input").val();

	  	if ($button.text() == "+") {
	  		var newVal = parseFloat(oldValue) + 1;
		} else {
		   // Don't allow decrementing below zero
		    if (oldValue > 0) {
	      		var newVal = parseFloat(oldValue) - 1;
		    } else {
	      		newVal = 0;
		    }
		}

  		$button.parents().eq(2).find("input").val(newVal);

	});


	//==




	//== SVG color
	//


	$('img.svg').each(function(){
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG
            if(typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');

    });


	//==



	//== Push
	//

	// Push navbar on .hamburger
	$('.hamburger').on('click', function(e) {
		$(".hamburger, #pushNavbar, .push-hidden-area").toggleClass("is-active");

		//header default
    	$("header").toggleClass("affix");
  		e.preventDefault();
    });

	// push cart
    $('.push-cart').on('click', function(e) {
    	$(".push-menu, .push-hidden-area").removeClass("is-active");
		$("#pushCart, .push-hidden-area").toggleClass("is-active");
    	
  		//header default
    	$("header").addClass("affix");
  		e.preventDefault();
    });

    // Push wishlist
    $('.push-wishlist').on('click', function(e) {
    	$(".push-menu, .push-hidden-area").removeClass("is-active");
		$("#pushWishlist, .push-hidden-area").toggleClass("is-active");

    	//header default
    	$("header").addClass("affix");
  		e.preventDefault();
    });

    // Push filters
    $('.btn-filters').on('click', function(e) {
    	$(".push-menu, .push-hidden-area").removeClass("is-active");
		$("#pushFilters, .push-hidden-area").toggleClass("is-active");

    	//header default
    	$("header").addClass("affix");
  		e.preventDefault();
    });

    // Close push menu
    $('.push-hidden-area, .push-close').on('click', function(e) {
		$(".push-menu, .hamburger, .push-hidden-area").removeClass("is-active");

		//header default
    	$("header").removeClass("affix");
    	e.preventDefault();
    });


    //==



    //== Header
    //

    // Navbar dropdown

    $(".navbar-dropdown #nav li.parent").hover(function() {
	  	$(this).find('> .dropdown-menu')
	  	.stop(true, true).delay(100)
	  	.fadeIn(200);
	}, function() {
	  	$(this).find('> .dropdown-menu')
	  	.stop(true, true)
	  	.delay(100)
	  	.fadeOut(200);
	});
	
    $.mediaquery("bind", "mq-key", "(min-width: 1024px)", {
	    enter: function() {
    		// remove all obj in active on resize
    		$(".push-menu, .push-hidden-area, .hamburger").removeClass("is-active");

        	// calc header height for affix
	        $('.push-top.is-active, .push-left, .push-right').css({ 'padding-top': $("header").innerHeight() });
	    },
	    leave: function() {
        	// calc header height for affix
	        $('.push-top.is-active, .push-left, .push-right').css({ 'padding-top': $("header").innerHeight() });

			// Navbar collapse

			$('.navbar-collapse .parent > a').on('click', function(e) {
		        var $el = $(this);
		        var $parent = $(this).offsetParent(".dropdown-menu");
		        $(this).parent("li").toggleClass('open');

		        if(!$parent.parent().hasClass('nav')) {
		            $el.next().css({"top": $el[0].offsetTop, "left": $parent.outerWidth() - 4});
		        }

		        $('.nav li.open').not($(this).parents("li")).removeClass("open");

		        return false;
		    });

	    }
	});


    //==



    //== Collapse
    //

	//** Simple collapse
    $('.collapse-title').click(function() {
    	$(this).parent().find(".collapse-content").toggle();
    	$(this).toggleClass("active");
	});

	$('.footer-links h5, .footer-newsletter h5').click(function() {
    	$(this).parent().find("ul, .block").toggle();
    	$(this).toggleClass("active");
	});


    //==



	//== jQuery mask
	//

	/*

    $("[for='billing:taxvat']").parent().find(".input-text").addClass("input-vat");

	$('.input-zip, #zip').mask('00000-000');
	$('.input-vat, #taxvat').mask('000.000.000-00', {reverse: true});
	$('.input-cnpj').mask('00.000.000/0000-00', {reverse: true});

	// 9-dig phone mask
    $('.input-phone, #telephone, #fax').mask('(00) 0000-00009');
	$('.input-phone, #telephone, #fax').blur(function(event) {
	   if($(this).val().length == 15){ // Celular com 9 dígitos + 2 dígitos DDD e 4 da máscara
	      $('.input-phone, #telephone, #fax').mask('(00) 00000-0009');
	   } else {
	      $('.input-phone, #telephone, #fax').mask('(00) 0000-00009');
	   }
	});

	*/

	//==



	//== Gambs!
	//

	//** intro HTML5 required forms
	$(".required-entry").attr("required", "");

	//** tables matching bootstrap
	$("table").addClass("table");

	$(".radio, .checkbox").parent().find("span.label label").unwrap();

	// Select wrap
	$("select").wrap("<div class='select-wrap'></div>");


	// Onestep checkout
	$("#onestepcheckout-address-shipping-wrapper").detach().appendTo("#onestepcheckout-address-shipping-wrapper-body");

	// Whatsapp btn
    $('.whats-on').click(function() {
    	$(this).toggleClass("btn-success");
	});

	//==


  });
})(jQuery);
