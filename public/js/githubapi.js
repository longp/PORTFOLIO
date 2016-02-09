$(document).ready(function(){




$.ajax ({
  type: "GET",
  url: "https://api.github.com/users/longp/repos",
  success: function(repos) {
    for (var i=0; i<repos.length;  i++) {
      var newRepoList = buildRepo(repos[i]);
    $(".list-group").append(newRepoList);
    };
  }

});

Url(reposData);
}

function buildRepo(reposData) {
  
  var repoUrl = "https://api.github.com/repos/longp/" + reposData.name;
  var newlink = $("<a>")
  .prop("href", repoUrl)
  .addClass("list-group-item btn leftlink")
  .append(repoUrl) ;
  return newlink;
    
    }

});