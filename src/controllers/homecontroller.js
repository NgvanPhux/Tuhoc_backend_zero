const getHomepage = (req, res) => {
    res.send('Hello World!  dsdsaadsads')

}
const getabcd = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomepage, getabcd
}