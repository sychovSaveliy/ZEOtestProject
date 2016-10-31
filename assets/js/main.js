$(document).ready(function(){
	
	IconJson = `{
	"icon_1": {
		"name":"Human assistance",
		"desc":"Your personal assistant has the solution for your technical problem - whether it is a minor annoyance or a catastrophic failure"
	},
	
	"icon_2": {
		"name":"Internet security",
		"desc":"Protect your Mac from phishing attacks, malware, spyware, adware, viruses and identity theft while you're using the Internet."
	},
	
	"icon_3": {
		"name":"Anti-theft",
		"desc":"If your Mac gets stolen, Anti-Theft will track its location and even make an iSight snapshot of the thief."
	}
}`;
	
	var icons = JSON.parse(IconJson);
	
	
	/*$(".svg-cont use").on("mouseover", function(e){
		$(this).attr({"stroke-width":"4","stroke":"#00a4ff"});
	});
	
	$(".svg-cont use").on("mouseout", function(e){
		$(this).attr({"stroke-width":"1","stroke":"#cecece"});
	});*/
	
	$(".svg-cont use").on("click", function(e){
		var elems = $(".svg-cont use");
		var elem = $(this);
		
		elems.attr({"stroke-width":"1","stroke":"#cecece"});
		
		if(elem.attr("data-selected")!=undefined) {
			elem.removeAttr("data-selected");
		} 
		else {
			elems.removeAttr("data-selected");
			elem.attr({"stroke-width":"4","stroke":"#00a4ff","data-selected":"select"});
			
			var className = elem.attr("id");
			var imgUrl = $('.'+className).attr("xlink:href");
			
			$('.in_head').text(icons[className].name);
			$('.in_desc').text(icons[className].desc);
			$('.in_img').attr("src",imgUrl);
			
		}
		
	});
	
	
	
	/*$.getJSON('assets/js/desc.json', function(data) {         
    alert(data);
	});*/
	
	
	
	
});