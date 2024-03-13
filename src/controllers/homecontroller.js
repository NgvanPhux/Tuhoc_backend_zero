const connection = require("../config/database")



let USERS = []
const getHomepage = (req, res) => {
    return res.render('homepage.ejs')
    // connection.query(
    //     'SELECT *FROM  ver1 u',
    //     function (err, results, fields) {
    //         USERS = results;
    //         console.log(">>>>>>>>> results =", results);
    //         console.log(">>>>>check user", USERS)
    //     }
    // );


    // res.send('Hello World!  dsdsaadsads')

}
const getabcd = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomepage, getabcd
}