$(function() {
	var menuStatus;

	$.ajax({
		url : "http://ufc.rlino.cloudbees.net/deslogar",
		data : "GET",
		success : function(data){
			alert("Bem vindo");
		}
	});
	
	$("a.showMenu").click(function() {

		if (menuStatus != true) {
			$(".ui-page-active").animate({
				marginLeft : "165px",
			}, 300, function() {
				menuStatus = true
			});
			return false;
		} else {
			$(".ui-page-active").animate({
				marginLeft : "0px",
			}, 300, function() {
				menuStatus = false
			});
			return false;
		}
	});
//	
//	$('.pages').live("swipeleft", function(){
//		if (menuStatus){
//		$(".ui-page-active").animate({
//			marginLeft: "0px",
//		  }, 300, function(){menuStatus = false});
//		  }
//	});
// 
//	$('.pages').live("swiperight", function(){
//		if (!menuStatus){
//		$(".ui-page-active").animate({
//			marginLeft: "165px",
//		  }, 300, function(){menuStatus = true});
//		  }
//	});

	$("#menu li a").click(function(e) {
		var p = $(this).parent();
		menuStatus = false;
		if ($(p).hasClass('active')) {
			$("#menu li").removeClass('active');
		} else {
			$("#menu li").removeClass('active');
			$(p).addClass('active');
		}
	});

});