const router = require('express').Router();
const verify = require('./verifyToken');

router.get('/', verify, (req, res) => {
  res.json({
    products: {
      name: "One",
      other: "Thing"
    }
  });
});


module.exports = router;