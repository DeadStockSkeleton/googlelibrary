const path = require("path");
const router = require("express").Router();

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });

  const book = require('../models/book');
router.post('/',async (req, res) => {
book.create(req).then((db)=>{
    res.json(db)
}).catch((err)=>{
    res.status(500).json(err);
})
})


module.exports = router;