const connection = require("../config/database")
const { getALLusers, getuserbyid } = require('../services/CRUDservice')


let USERS = []
const getHomepage = async (req, res) => {

    let results = await getALLusers();
    return res.render('homepage.ejs', { listuser: results })
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

const postCreateUser = async (req, res) => {
    let email = req.body.email;
    let myname = req.body.myname;
    let city = req.body.city
    // let{email,name,city}=req.body;


    //   console.log(">>>>email:", email, '>>>>myname:', myname, ">>>city:", city);
    // connection.query(
    //     ` INSERT INTO  ver1 (email, name, city) VALUES (?, ?, ?) `,
    //     [email, myname, city],
    //     function (err, results) {

    //         console.log(results);

    //         res.send(' Created user succeed !')
    //     }
    // );
    let [results, fields] = await
        connection.query(
            ` INSERT INTO  ver1 (email, name, city) VALUES (?, ?, ?) `,
            [email, myname, city]);
    console.log(">>>>>>>>>>checkkk:", results);
    res.send(' Created user succeed !')
    // const [results, fields] = await connection.query('select * from ver1 v');

    // res.send(' Created user succeed !')

}
const getcreatepage = (req, res) => {
    res.render('create.ejs')
}
const getupdatepage = async (req, res) => {
    const userID = req.params.id;

    let user = await getuserbyid(userID);
    res.render('edit.ejs', { useredit: user })   /// x < y

}
const postUpdateUser = async (req, res) => {
    let email = req.body.email;
    let myname = req.body.myname;
    let city = req.body.city
    let userID = req.body.userID

    let [results, fields] = await
        connection.query(
            ` UPDATE ver1 SET email =?, name=?, city=?  WHERE id =? `,
            [email, myname, city, userID]

        );

    res.send(' UPDATE user succeed !')

}



module.exports = {
    getHomepage, getabcd, postCreateUser, getcreatepage, getupdatepage, postUpdateUser
}