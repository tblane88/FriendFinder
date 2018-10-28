
var friendsData = require("../data/friends");


module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function(req, res) {
        var newFriend = req.body;

        console.log("inside the function");
        console.log(newFriend);
        
    
            
        var comparison = [];
        var closeFriend = "";
        
        for (var i = 0; i < friendsData.length; i++) {
            var total = 0;
    
            for (var h = 0; h < friendsData[i].answerArray.length; h++) {
    
    
                total += Math.abs(parseInt(friendsData[i].answerArray[h]) - parseInt(newFriend.answerArray[h]));
            };
            comparison.push(total)
        };
        
    
            var lowestNum = Math.min.apply(null, comparison);
    
            var location = comparison.indexOf(lowestNum);
    
            closeFriend = friendsData[location];
            console.log(closeFriend);
            
            friendsData.push(newFriend);

            res.json(closeFriend);
      
        


    });


  

};