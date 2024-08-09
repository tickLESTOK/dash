var express = require('express');
var router = express.Router();
const userModel = require("./users"); // user model require schema of our database in user model
const passport = require('passport');
const localStrategy = require("passport-local");
const upload = require('./multer');
const postmodel = require('./post');
const bodyParser = require('body-parser'); // Add body-parser middleware

// Use body-parser middleware
router.use(bodyParser.urlencoded({ extended: true }));

passport.use(new localStrategy(userModel.authenticate()));

router.get('/', function(req, res, next) {
  res.render('index', { nav: false });
});

router.get('/signUp', function(req, res, next) {
  res.render("signUp", { nav: false });
});

router.get('/profile', isLoggedIn, async function(req, res, next) {
  const user = await userModel.findOne({ username: req.session.passport.user });
  const Ram = user.username;
  res.render("profile", { user, nav: true, name: Ram });
});

router.get('/add', isLoggedIn, async function(req, res, next) {
  const user = await userModel.findOne({ username: req.session.passport.user });
  res.render("add", { user, nav: true });
});

router.post('/signUp', function(req, res, next) {
  const data = new userModel({
    username: req.body.username,
    email: req.body.email,
    contact: req.body.contact
  });

  userModel.signUp(data, req.body.password) // The signUp method provided by Passport-Local Mongoose signUps the user.
    .then(function() {
      passport.authenticate("local")(req, res, function() {
        res.redirect("/profile");
      });
    })
    .catch(function(err) {
      console.error(err);
      res.redirect("/signUp"); // Redirect to signUp page if there's an error
    });
});

router.post('/login', passport.authenticate("local", {
  failureRedirect: "/",
  successRedirect: "/profile"
}), function(req, res, next) {});

router.get("/logout", function(req, res, next) {
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/");
}

router.post('/fileupload', isLoggedIn, upload.single("image"), async function(req, res, next) {
  const user = await userModel.findOne({ username: req.session.passport.user });
  user.profileImage = req.file.filename;
  await user.save();
  res.redirect("/profile");
});

router.post('/createpost', isLoggedIn, upload.single("postimage"), async function(req, res, next) {
  const user = await userModel.findOne({ username: req.session.passport.user });
  const post = await postmodel.create({
    user: user._id,
    title: req.body.title,
    description: req.body.description,
    image: req.file.filename
  });
  user.posts.push(post._id);
  await user.save();
  res.redirect("/profile");
});

module.exports = router;
