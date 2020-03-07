const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');
//console.developers.google.com
//sign up oauth api so that google knows where the req come from and where the send res back


const User = mongoose.model('users');
//Users-Model Class

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user);
    });
});

passport.use(new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true
    },
    (accessToken, refreshToken, profile, done) => {
        // console.log('access token', accessToken);
        // console.log('refresh token', refreshToken);
        // console.log('profile', profile);
        User.findOne({ googleId: profile.id }).then((existingUser) => {
            if (existingUser) {
                //we already have a record with the given profile ID
                done(null, existingUser);
                //null-no error
            } else {
                new User({ googleId: profile.id }).save()
                    .then(user => done(null, user));
            }
        })
    }));