jQuery(document).ready(function($){

	$.fn.visible = function(partial) {
 		var $t            = $(this),
 			$w            = $(window),
 			viewTop       = $w.scrollTop(),
 			viewBottom    = viewTop + $w.height(),
 			_top          = $t.offset().top,
 			_bottom       = _top + $t.height(),
 			compareTop    = partial === true ? _bottom : _top,
 			compareBottom = partial === true ? _top : _bottom;

 		return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
 	};

 	$(window).on('resize scroll', function(){

 		$('section > .frame > .row > .column:nth-child(odd)').each(function(){
 			if ($(this).visible(true)) {
				$(this).addClass('animate__animated animate__fadeInLeft');
			}
 		});

 		$('section > .frame > .row > .column:nth-child(even)').each(function(){
 			if ($(this).visible(true)) {
				$(this).addClass('animate__animated animate__fadeInRight');
			}
 		});

	});

 });