const user = require('../user.json');
const fs = require('fs')
module.exports = (Router) => {
    Router.put('/update/:TamilMovies', (req, res) => {
        var TamilMovies = req.params.TamilMovies
        for(var i = 0; i < user.length; i++){
            if(TamilMovies == user[i]['TamilMovies']){
                var userDeatils = req.body
                user[i]['TamilMovies'] = userDeatils.TamilMovies,
                user[i]['Images'] = userDeatils.Images,
                user[i]['shows_link'] = userDeatils.shows_link,
                user[i]['Type_of_shows'] = userDeatils.Type_of_shows,
                user[i]['Discription'] = userDeatils.Discription
                fs.writeFile('user.json', JSON.stringify(user), err => {
                    if(err){
                        res.send(err)
                    }else{
                        res.send('updated....')
                    }
                })
            }
        }
    

    })
}