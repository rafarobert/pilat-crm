/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Sep 21 2020 22:55:51 GMT-0400 (Bolivia Time)
 * Time: 22:55:51
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Sep 21 2020 22:55:51 GMT-0400 (Bolivia Time)
 * Last time updated: 22:55:51
 *
 * Caution: es-sections will be replaced by script execution
 */
 
require('dotenv').config();
//<es-section>
const authService = require('./auth.service');
//</es-section>
const sys = process.env.SYSTEM;
const Util = require('../../../utils/Utils');
const util = new Util();
const passport = require('passport');

// Controller for DB Mongoose

const authsCtrl = {};
authsCtrl.service = authService;

authsCtrl.localLogin = () => {
    return (req, res, next) => {
        passport.authenticate('local-login', {
            successRedirect: `/${sys}/profile`,
            failureRedirect: `/${sys}/signup`,
            failureFlash: true
        })(req, res, next);
    }
}

authsCtrl.localSignup = () => {
    return (req, res, next) => {
        passport.authenticate('local-signup', {
            successRedirect: `/${sys}/profile`,
            failureRedirect: `/${sys}/signup`,
            failureFlash: true
        })(req, res, next);
    }
}

authsCtrl.facebookLogin = () => {
    passport.authenticate('facebook', {scope: ['email', 'user_age_range', 'user_gender']});
}

authsCtrl.facebookLoginCallback = () => {
    passport.authenticate('facebook', {
        successRedirect: `/${sys}/profile`,
        failureRedirect: `/${sys}/`
    })
}

authsCtrl.logout = async (req, res) => {
    req.logOut();
    res.redirect(`/${sys}/`);
}

authsCtrl.isLoggedIn = (req, res, next) => {
    if(req.isAuthenticated()){
        return next()
    }
    res.status(400);
    util.setError(400, `Sorry, you're not authenticated`);
    return util.send(res);
}


//<es-section>
module.exports = authsCtrl;
//</es-section>
