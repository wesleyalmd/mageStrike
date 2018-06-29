/**
 *
 * @category:   design
 * @package:    magestack_default
 * @author:     Wesley Almeida <wesleyalmd@gmail.com>
 *
 */



//== CEP autocomplete
//

document.addEventListener('DOMContentLoaded', function() {
	MagicAddress.start({
	  'selectors' : {
	    'inputCEP'          : '.input-zip, #zip',
	    'inputAddress'      : '.input-address1',
	    'inputNumber'       : '.input-address2',
	    'inputNeighborhood' : '.input-address4',
	    'inputCity'         : '.input-city, #city',
	    'inputState'        : '.input-region, #region'
	  }
	});
});

//==

