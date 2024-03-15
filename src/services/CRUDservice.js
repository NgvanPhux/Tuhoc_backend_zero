const connection = require("../config/database");



const getALLusers = async () => {
    let [results, fields] = await connection.query('select* from ver1')
    return results;


}

const getuserbyid = async (userID) => {
    let [results, fields] = await connection.query('select* from ver1 where id=?', [userID])
    let user = results && results.length > 0 ? results[0] : {};
    return user;


}

module.exports = {
    getALLusers, getuserbyid
}
