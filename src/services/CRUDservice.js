const connection = require("../config/database");



const getALLusers = async () => {
    let [results, fields] = await connection.query('select* from ver1')
    return results;


}
module.exports = {
    getALLusers
}
