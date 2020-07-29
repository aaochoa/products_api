const router = require('express').Router();
const User = require('../models/User');
const {registerValidation, loginValidation} = require('../validation')

router.post('/register', async (req, res) => {
  const {error} = registerValidation(req.body);
  if (error) return res.status(400).send(error);
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });
  try {
    const savedUser = await user.save();
    console.log(savedUser);
    res.send(savedUser);
  } catch(err) {
    res.status(400).send(err);
  }
});

module.exports = router;