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
 
//<es-section>
const authService = require('./auth.service');
//</es-section>
const Util = require('../../../utils/Utils');
const util = new Util();
const passport = require('passport');

// Controller for DB Mongoose

const authsCtrl = {};
authsCtrl.service = authService;

authsCtrl.restOnLogin = async (req, res) => {
    if (!req.user) {
        util.setError(404, `Sorry, something went wrong`);
    } else {
        util.setSuccess(200, 'Hello, nice to see you again', req.user);
    }
    return util.send(res);
}

authsCtrl.restOnSignup = async (req, res) => {
    if (!req.user) {
        util.setError(404, `Sorry, something went wrong`);
    } else {
        util.setSuccess(200, 'Hello, thanks for signing up', req.user);
    }
    return util.send(res);
}

authsCtrl.restLocalLogin = () => {
    return (req, res, next) => {
        passport.authenticate('local-login', (error, user, info) => {
            if(error) {
                if (user) {
                    if(info) {
                        util.data = error;
                        util.setError(200, info);
                        return util.send(res);
                    }
                    util.data = error;
                    util.setError(200, error.message);
                    return util.send(res);
                }
                util.data = error;
                util.setError(200, error.message);
                return util.send(res);
            }
            req.login(user, (error) => {
                if (error) return next(error);
                next();
            });
        })(req, res, next);
    }
}

authsCtrl.restLogout = async (req, res) => {
    req.logOut();
    util.setSuccess(200, 'Bye, have a nice day', req.user);
    return util.send(res);
}

authsCtrl.restLocalSignup = () => {
    return (req, res, next) => {
        passport.authenticate('local-signup', (error, user, info) => {
            if(error) {
                if(!user) {
                    res.status(400).json({"statusCode" : 200 ,"message" : info});
                }
                res.status(400).json({"statusCode" : 200 ,"message" : error});
            }
            req.login(user, (error) => {
                if (error) return next(error);
                next();
            });
        })(req, res, next);
    }
}

authsCtrl.restFacebookLogin = async (req, res) => {
    passport.authenticate('facebook', {scope: ['email', 'user_age_range', 'user_gender']})
}

authsCtrl.restFacebookLoginCallback = async (req, res) => {
    passport.authenticate('facebook', {
        successRedirect: '/es-auths/profile',
        failureRedirect: '/es-auths/'
    })
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
