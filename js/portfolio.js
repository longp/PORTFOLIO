$(document).ready(function(){
$(".jumbotron").hide();






// scrolling to section on click btn
$("a[href='#top']").click(function() { 
  $('.jumbotron').fadeOut('slow', function(){
  $("html, body").animate({ scrollTop: 0 }, "fast"); return false; });

});

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



$(window).scroll(function () {
    hideVid();
    if($(document).scrollTop() == 0) showVid();


});
 
});



function hideVid() {
$("#bgvid").css("z-index","-100");
$(".jumbotron").show();


} 
function showVid() {
  $("#bgvid").css("z-index","100");


  
}

// $(function(){
//   $(document).scroll(function() {
//     if($(document).scrollTop() == 0) alert("top");
//   })
// })
