var friendData = require("./data/friends");

module.exports = function (app) {
// Displays all possible friends
app.get("/api/friends", function(req, res) {
    return res.json(friendData);
  });
  
// Create New Friends Data - takes in JSON input
app.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newFriend = req.body;

    console.log(newFriend);
  
    friendData.push(newFriend);
  
    res.json(true);
  });
};