const getHome = (req, res, next)=>{
    res.render('general/home', {
        pageTitle: 'Home Page',
        path: '/'
    })
}

module.exports = {
    getHome
}