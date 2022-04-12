const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  res.json({
    status: 200,
    message: 'you get the result'
  })
})


module.exports = router;
