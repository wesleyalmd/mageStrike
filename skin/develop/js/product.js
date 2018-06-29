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


	//== EasyZoom
	//

	var $easyzoom = $('.easyzoom').easyZoom();
	var api1 = $easyzoom.filter('.easyzoom--with-thumbnails').data('easyZoom');
	$('.thumbnails').on('click', 'a', function(e) {
		var $this = $(this);
		e.preventDefault();
		api1.swap($this.data('standard'), $this.attr('href'));
	});


	//==


});
})(jQuery);
