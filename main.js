$(document).ready(function(){
	var $black_white = $('.black_white'),
		img_width = $('.black_white img').width(),
		init_split = Math.round(img_width/2);
		document.getElementById("text_after").style.left = init_split+5;
		
  
  $black_white.width(init_split);  

		$('.before_after_slider').mousemove(function(e){
		var offX  = (e.offsetX || e.clientX - $black_white.offset().left);
			$black_white.width(offX);
			var x = $black_white.width();
				        	
        	document.getElementById("text_after").style.left = x+5;
		});

		

		$('.before_after_slider').mouseleave(function(e){
		$black_white.stop().animate({
		//width: init_split
		},1000)
		});
});

$(document).ready(function(){
	$('.slideshow__pic').on('click', function (e) {
		e.preventDefault();

		var
			$this = $(this),
			item = $this.closest('.slideshow__item'),
			container = $this.closest('.slideshow'),
			display = container.find('.slideshow__display'),
			path = item.find('img').attr('src'),
			duration = 300,
			path_bw = item.find('img').attr('src').replace("images/kitchen", "images/rsz_kitchen");

			console.log(path);
			

		display.find('.color img').fadeOut(duration, function(){
			$(this).attr('src', path).fadeIn(duration);
		});
		display.find('.black_white img').fadeOut(duration, function(){
			$(this).attr('src', path_bw).fadeIn(duration);
		});
		
	});


});
