const user = require('../user.json')
const fs = require('fs')

module.exports = (Router) => {
    Router.post('/post', (req, res) => {
        var userDetails = {
            TamilMovies: req.body.TamilMovies,
            Images: req.body.Images,
            shows_link: req.body.shows_link,
            Type_of_shows: req.body.Type_of_shows,
            Discription: req.body.Discription
        }
        user.push(userDetails);
        fs.writeFile('user.json', JSON.stringify(user), err => {
            if(err){
                res.send(err)
            }else{
                res.send('posted data....')
            }
        })
    })
}