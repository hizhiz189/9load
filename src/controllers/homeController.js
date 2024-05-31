

const getEx = (req, res) => {
    res.render('index');
}

const getHome = (req, res) => {
    res.send('Home');
}

module.exports = {
    getEx,
    getHome
};