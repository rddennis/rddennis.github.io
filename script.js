$(window).on("load", function(){
	$("#loader").fadeOut("slow");
});

$(document).ready(function(){
	var dataNumber = 0;
	var n = 0;

	$('#arrow').click(function(){
	    $('html,body').animate({
	        scrollTop: $("#my-intro").offset().top},
	        'slow');
	});

	$('#scroll-contact').click(function(){
		$('html,body').animate({
	        scrollTop: $("#contact").offset().top},
	        3000);
	});

	$('.left-arrow').click(function(){
		dataNumber = $(this).parent().data("index");
		var slides = $(".web").toArray().length;
		nextItem = dataNumber + 1;

		if (dataNumber == slides) {
			dataNumber = 2;
			nextItem = dataNumber - 1;
		}
		
		if (dataNumber == 1) {
			nextItem = dataNumber + 1;
		}

		$(this).parent().css("display", "none");
		$(".web[data-index='" + nextItem + "']").css("display", "block");

	})

	$('.right-arrow').click(function(){
		dataNumber = $(this).parent().data("index");
		nextItem = dataNumber - 1;
		var slides = $(".web").toArray().length;
		console.log(slides);

		if (dataNumber == 1) {
			nextItem = slides;
		}

		$(this).parent().css("display", "none");
		$(".web[data-index='" + nextItem + "']").css("display", "block");
	})

})