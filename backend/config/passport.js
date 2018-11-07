const passport = require('passport')
const JWTStrategy = require ('passport-local').Strategy 
const ExtractJWT = passportJWT.ExtractJWT
const User = '../models'.User
passport.use(new JWTStrategy({
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey : process.env.SECRET_OR_KEY
},
  function (email, password, cb) {
    return User.findOne({ email, password })
      .then( user => {
        if (!user) {
          return cb(null, false, {message: 'Incorrect Email or password'})
        }
        return cb(null, user, {message: 'Logged In Successfully'})
      })
      .catch(err => cb(err))
  }
))
