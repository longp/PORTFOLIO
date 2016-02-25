

$(document).ready(function(){

var bkgrdOne = "url(http://i.imgur.com/NNoFNWf.png)";
var bkgrdTwo ="url(http://i.imgur.com/VW2DYbL.png)";
var bkgrdThree ="url('http://i.imgur.com/UZKEjzG.png')";
var bkgrdFour ="url('http://i.imgur.com/6EhAM7G.png')";
var bkgrdFive ="url('http://i.imgur.com/QOfZ5r8.png')";
var bkgrdSix ="url('http://i.imgur.com/Y4BHWJM.png')";
var bkgrdSeven ="url('http://i.imgur.com/laSSeYN.png')";
var bkgrdEight ="url('http://i.imgur.com/HaYuGQi.png')";


backgroundArray = [bkgrdOne, bkgrdTwo, bkgrdThree, bkgrdFour, bkgrdFive, bkgrdSix, bkgrdSeven, bkgrdEight];

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

$("div").addClass(".bg6");
// $("body").css("background-image", "url(http://i.imgur.com/VW2DYbL.png)");

}

function backgroundGif (img) {
  $('body').css("background-image", img);
}





