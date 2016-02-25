$(window).load(function() {
$('body').addClass('bg1');
});

$(document).ready(function(){

$("a[href='#top']").click(function() { 
  
  $("html, body").animate({ scrollTop: 0 }, "fast"); return false; });


$('a[href$="portfolio"]').click(function() {
     $('html, body').animate({
         scrollTop: $("#portfolio").offset().top   }, 500);
 });

$('a[href$="blog"]').click(function() {
     $('html, body').animate({
         scrollTop: $("#blog").offset().top   }, 500);
 });

$('a[href$="about"]').click(function() {
     $('html, body').animate({
         scrollTop: $("#about").offset().top   }, 500);
 });

changeBackground();
});


// switches background images of body
function changeBackground () {
	setInterval(function() {
		var $body = $('body');
		if ($body.hasClass("bg1")) {
			switchBackground("bg1", "bg2");
		}
		else if ($body.hasClass("bg2")) {
			switchBackground("bg2", "bg3");
		}
		else if ($body.hasClass("bg3")) {
			switchBackground("bg3", "bg4");
		}
		else if ($body.hasClass("bg4")) {
			switchBackground("bg4", "bg5");
		}
		else if ($body.hasClass("bg5")) {
			switchBackground("bg5", "bg6");
		}
		else if ($body.hasClass("bg6")) {
			switchBackground("bg6", "bg7");
		}
		else if ($body.hasClass("bg7")) {
			switchBackground("bg7", "bg8");
		}
		else if ($body.hasClass("bg8")) {
			switchBackground("bg8", "bg1");
		}
	}, 5000);
}


function switchBackground (firstBG, secondBG) {
	var $body = $('body');
	$body.removeClass(firstBG);
  $body.addClass(secondBG);
    
}

// trying to make promise
function myfunction () {
	promise = first().then(second).then(third);	
}

function first () {
	d = new $.Deferred();
	switchBackground("bg1", "bg2");
	return d.promise()
}
function second () {
	d = new $.Deferred();
	switchBackground("bg2", "bg3");
	return d.promise()
}
function third () {
	d = new $.Deferred();
	switchBackground("bg3", "bg1");
	return d.promise()
}
