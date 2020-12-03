const axios = require("axios");

// fetch the user's details on github using API
// API url lists profile details about the specified user.
function getRepos(user) {
  var reposArray = [];
  axios
    .get(
      `https://api.github.com/users/${user}/repos?sort=created?direction=asc`
    )
    .then((res) => {
      // if the user has repositories on github
      res.data.forEach((repo) => {
        reposArray.push(repo.name);
      });
      return reposArray;
    });
}
module.exports = getRepos;
