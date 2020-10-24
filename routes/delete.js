const user = require('../user.json')
const fs = require('fs')

module.exports = (Router) => {
    Router.delete('/delete/:TamilMovies', (req, res) => {
        var TamilMovies = req.params.TamilMovies
        for(var i = 0; i < user.length; i++){
            if(TamilMovies == user[i]['TamilMovies']){
                delete user[i]
                console.log(user[i])
                fs.writeFile('user.json', JSON.stringify(user), err => {
                    if(err){
                        res.send(err)
                    }else{
                        res.send('deleted....')
                    }
                })
            }
        }
    
    })
}