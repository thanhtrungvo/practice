const getLogin = (req, res, next)=>{
    res.render('auth/login', {
        pageTitle: 'Login Page',
        path: '/auth/login'
    })
}

const getSignUp = (req, res, next)=>{
    res.render('auth/signUp', {
        pageTitle: 'Sign Up Page',
        path: '/auth/signUp'
    })
}

module.exports = {
    getLogin,
    getSignUp
}