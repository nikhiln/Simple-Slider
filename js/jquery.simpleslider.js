/*!jQuery Simple Slider*/
/**
 *
 * Version: 1.0.0 (29/04/2013)
 * Requires: jQuery v1.7+
 *
 * Copyright (c) 2013 Nikhil Navadiya
 *
 */
(function($){
	$.fn.simpleslider = function(_params){
		_childElements = new Array();
		/* getting each child element's and also adding simple-text class */
		$.each($(this).children(), function(_index, _value){ 
			$(this).addClass("simple-text");
			_childElements[_index] = $(this); 
        });
		
		$(".simple-text:first").addClass("selected"); //assigning the selected class to first element so that it won't be hide.
		
		$(".simple-text:not(.selected)").hide(); //hiding all of the elements accept one with selected class
		
		_preIndex = 0;
		_duration = 1000; //default duration for hiding and showing text elements
		if(_params) {
			if(_params['duration']) 
				_duration = _params['duration'];
		}
		
		/* this funxtion will be called every given milliseconds */
		function _slide() {
			if(_preIndex >= _childElements.length)
				return;
				
			if(_preIndex < _childElements.length-1) {
				_childElements[_preIndex].removeClass("selected");
				_childElements[++_preIndex].addClass("selected");
				$(".simple-text:not(.selected)").hide(_duration);
				$(".selected").show(_duration);
			} else {
				_childElements[_preIndex].removeClass("selected");
				_preIndex = 0;
				_childElements[_preIndex].addClass("selected");
				$(".simple-text:not(.selected)").hide(_duration);
				$(".selected").show(_duration);
			}
		}
		_slidetransition=1000; //setting default duration to 1000 milliseconds
		if(_params) {
			if(_params['slide-transition']) 
				_slidetransition = _params['slide-transition'];
		}
		setInterval(_slide ,_slidetransition);
	};
})(jQuery);
