$(document).ready(function(){
$(".jumbotron").hide();

$(window).on('beforeunload', function() {
    $(window).scrollTop(0); 
});


// // scrolling to section on click btn
// $("a[href='#top']").click(function() { 
  
//   $("html, body").animate({ scrollTop: 0 }, "fast"); return false; });


// $('a[href$="portfolio"]').click(function() {
//      $('html, body').animate({
//          scrollTop: $("#portfolio").offset().top   }, 500);
//  });

// $('a[href$="blog"]').click(function() {
//      $('html, body').animate({
//          scrollTop: $("#blog").offset().top   }, 500);
//  });

// $('a[href$="about"]').click(function() {
//      $('html, body').animate({
//          scrollTop: $("#about").offset().top   }, 500);
//  });



$(window).scroll(function () {
    hideVid();
    if($(document).scrollTop() == 0) showVid();
  });
});




// video FX
function hideVid() {
$("#bgvid").css("z-index","-100");
$(".jumbotron").show();


} 
function showVid() {
  $("#bgvid").css("z-index","100"); 
}

