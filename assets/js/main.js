$(document).ready(function(){
	
	
	$(".svg-cont use").on("mouseover", function(e){
		$(this).attr({"stroke-width":"4","stroke":"#00a4ff"});
	});
	
	$(".svg-cont use").on("mouseout", function(e){
		$(this).attr({"stroke-width":"1","stroke":"#cecece"});
	});
	
});