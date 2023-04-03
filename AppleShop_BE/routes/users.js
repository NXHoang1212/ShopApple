var express = require("express");
var router = express.Router();
var UserController = require("../modules/users/UserController");
var jwt = require("jsonwebtoken");
var authen = require("../middleware/authen");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

/* http://localhost:3000/users/api/register */
router.post("/api/register", async function (req, res, next) {
  try {
    const { name, email, password, confirm_password, mobile} = req.body;
    const user = await UserController.register( name, email, password, confirm_password, mobile );
    res.status(200).json({ user });
  } catch (error) {
    res.status(414).json({ error: error.message });
    console.log(error);
    next(error);
  }
});

/* http://localhost:3000/users/api/login */
router.post("/api/login", async function (req, res, next) {
  try {
    const { email, password } = req.body;
    const user = await UserController.login(email, password);
    if (user) {
      const access_token = jwt.sign({ user }, 'shhhhh', { expiresIn: 4 * 60 });
      const refresh_token = jwt.sign({ user }, 'shhhhh', { expiresIn: 90 * 24 * 60 * 60 });
      res.status(200).json({ user, access_token, refresh_token });
    } else {
      res.status(401).json({ error: 'Sai email hoặc mật khẩu' });
    }
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

router.get("/api/token-jwt", [authen], function (req, res, next) {
  console.log(req.user);
  res.json({ message: "ok" });
});


router.post("/api/refresh-token", async function (req, res, next) {
  try {
    let { refresh_token } = req.body;
    const data = jwt.verify(refresh_token, 'shhhhh');
    const access_token = jwt.sign({ user: data.user }, 'shhhhh', { expiresIn: 4 * 60 });
    refresh_token = jwt.sign ({ user: data.user }, 'shhhhh', { expiresIn: 90 * 24 * 60 * 60 });
    res.status(200).json({ user: data.user, access_token, refresh_token });
  } catch (error) {
    res.status(414).json({ error: error.message });
  }
});

/*  http://localhost:3000/users/cpanel/login  */
router.get("/cpanel/login", async function (req, res, next) {
    res.render("login");
});


router.post("/cpanel/login", async function (req, res, next) {
  try {
    const { email, password } = req.body;
    if (email == 'admin@gmail.com' && password == '123') {
      res.render('index');
    } else {
      throw new Error("Sai email hoặc mật khẩu");
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
});


router.post("/api/updateUser/:id", async function (req, res, next) {
  try {
    const { name, age, gender, dateofbirth, city, address } = req.body;
    const id = req.params.id;
    const user = await UserController.update(id, name, age, gender, dateofbirth, city, address );
    res.status(200).json({ user });
  } catch (error) {
    res.status(414).json({ error: error.message });
    console.log(error);
    next(error);
  }
});

router.get("/api/user/:id", async function (req, res, next) {
  try {

    const id = req.params.id;
    const user = await UserController.get(id); 
    res.status(200).json({ user });
  } catch (error) {
    res.status(414).json({ error: error.message });
    console.log(error);
    next(error);
  }
});

/*http://localhost:3000/users/api/forgot-password */
router.post('/api/forgot-password', async function (req, res, next) {
  try {
    const { email } = req.body;
    await UserController.forgotPassword( email );
    res.status(200).json({ status: 'ok' });
  } catch (error) {
    res.status(414).json({ error: error.message });
  }
});



// http://localhost:3000/users/cpanel/reset-password
router.post('/cpanel/reset-password', async function (req, res, next) {
  try {
    const { password, password_confirmation, token } = req.body;
    const response = await UserController.resetPassword(password, password_confirmation, token);
    res.status(200).json({ status: response });
  } catch (error) {
    console.log(error);
    res.status(414).json({ error: error.message });
  }
});


module.exports = router;
