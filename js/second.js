$(document).ready(function(){
$(document).on( "click", "a", function(e){
    e.preventDefault();
  });


  $(document).on( "click", "a", function(e){
    e.preventDefault();
  
    $.ajax ({
      type: "GET",
      url: $(this).attr("href") + "/commits",
      success: function(commits) {
        for (var i =0;i<commits.length; i++)

        $("tbody").append
      (buildTable(showCommits
        (commits[i], commits[i])));
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
debugger;
var commitsMsg =commits.commit.message;
var commitsUrl =commits.html_url;
var commitsLink = $("<a>").attr("href", commitsUrl)
return commitsMsg;
return commitsLink;
}



});