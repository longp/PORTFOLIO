$(document).ready(function(){
$(window).scroll(function () {
  hideVid();
    if($(document).scrollTop() == 0) showVid();
});
 




});



function hideVid() {
$("#bgvid").css("z-index","-100");
} 
function showVid() {
  $("#bgvid").css("z-index","20");
}

// $(function(){
//   $(document).scroll(function() {
//     if($(document).scrollTop() == 0) alert("top");
//   })
// })
