const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser");
const jsonParser  = bodyParser.json();
const Customer = require('../models/user.js');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

router.use(passport.initialize());
router.use(passport.session());
passport.use(new LocalStrategy(
  function(username, password, done) {
   Customer.findOne({ email: username}, function(err, user) {
      if (err) {
        console.log('ERROR');
        return done(err);
      }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));
passport.serializeUser(function(user, done) {
  done(null, user._id);
});

passport.deserializeUser(function(id, done) {
  Profile.findById(id, function(err, user) {
    done(err, user);
  });
});


router.get("/customers", async function(req, res){
    const allCustomers = await Customer.find({});
    res.status(200).json(allCustomers);
});

router.post("/customer", jsonParser,async function(req, res) {
    if (req.body.name === undefined || req.body.email === undefined || req.body.password === undefined) {
      res.status(500).json( {
        error: "Please fill all mandatory fields"
        }
      );
    } else {
      const newCustomer = new Customer(req.body);
      newCustomer.save();
      res.status(200).json(newCustomer);
    }
});

router.post("/login",jsonParser,passport.authenticate('local'), function(req, res){
  console.log(req.user);
  res.status(200).json(req.user);
});

router.delete("/customer/:id", async function(req, res){
  await Customer.remove(Customer.find({_id: req.params.id}));
  res.status(200).json({
    message: "User with id " + req.params.id + " has been removed"
  });
});

// const LocalStrategy = require('passport-local').Strategy;
// var flash = require('connect-flash');
// app.use(flash());
// const passport = require('passport');
// var session = require('express-session');
// app.use(passport.initialize());
// app.use(passport.session());
//
// app.use(session({ cookie: { maxAge: 60000 },
//   secret: 'woot',
//   resave: false,
//   saveUninitialized: false})
// );
//
// app.get('/logout', function(req, res){
//   console.log('logging out');
//   req.logout();
//   res.redirect('/main');
// });
//
// passport.use(new LocalStrategy(
//   function(username, password, done) {
//     var currentUser = User.findOne({ email: username}, function(err, user) {
//       if (err) {
//         return done(err);
//         console.log('ERROR');
//       }
//       if (!user) {
//         return done(null, false, { message: 'Incorrect username.' });
//       }
//       if (!user.validPassword(password)) {
//         return done(null, false, { message: 'Incorrect password.' });
//       }
//       return done(null, user);
//     });
//   }
// ));
//
// passport.serializeUser(function(user, done) {
//   done(null, user.id);
// });
//
// passport.deserializeUser(function(id, done) {
//   Profile.findById(id, function(err, user) {
//     done(err, user);
//   });
// });
// app.post('/login', jsonParser, passport.authenticate('local'),
//
//
 module.exports = router;
