$(document).ready(function(){
$(document).on( "click", "a", function(e){
    e.preventDefault();
  });


  $(document).on( "click", ".leftlink", function(e){
    e.preventDefault();
    var repoCommits = $(this).attr("href") + "/commits";
    $.ajax ({      
      type: "GET",
      url: repoCommits,
      success: function(commits) {
        for (var i =0;i<commits.length; i++)
        var newLink = buildTable(showCommits(commits[i]));
        console.log(newLink);
        $("tbody").append(newLink);
      }

    });
  




  });
function buildTable (tableData) {
var newTd = $("<td>").append(tableData);
var newTr = $("<tr>");
var newRow = newTr.append(newTd);
return newRow;
}

function showCommits (commits) {
// debugger;
var commitsMsg =commits.commit.message;
console.log(commitsMsg);
var commitsUrl =commits.html_url;
console.log(commitsUrl);
commitsUrl = 'https://crossorigin.me/'+commitsUrl
var commitsLink = $("<a>").attr("href", commitsUrl).html(commitsMsg);
console.log(commitsLink);
// return commitsMsg;
// console.log(commitsUrl);
return commitsLink;
}



});