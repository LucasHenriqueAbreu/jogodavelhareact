'use strict';

var passport = require('passport'),
  FacebookTokenStrategy = require('passport-facebook-token'),
  User = require('mongoose').model('User');

module.exports = function () {

  passport.use(new FacebookTokenStrategy({
      clientID: '1957892444499542',
      clientSecret: 'f00cb039cf4af2961fecbfa4e4495ed2'
    },
    function (accessToken, refreshToken, profile, done) {
      User.upsertFbUser(accessToken, refreshToken, profile, function(err, user) {
        return done(err, user);
      });
    }));

};