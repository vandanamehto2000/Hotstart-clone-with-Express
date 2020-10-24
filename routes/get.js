const user = require('../user.json');
module.exports = (Router) => {
    Router.get('/get', (req, res) => {
        res.send(user)
    })
    
    
    Router.get('/get/:genre', (req, res) => {
        var genre = req.params.genre
        // console.log(genre)
        var list = []
        for(var i = 0; i < user.length; i++){
            // console.log(user[i]['TamilMovies'])
            if(genre == user[i]['Type_of_shows']){
                var str = (user[i]['TamilMovies'])
                list.push(str)
                // console.log(list);
            }
        }
        res.send(list)
    }) 
}



