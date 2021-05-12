const path = require("path");
const router = require("express").Router();

router.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname,  "public", "index.html"));
});
  const book = require('../models/book');
router.post('/',async (req, res) => {
  console.log(req.body)
book.create(req.body).then((db)=>{

    res.json(db)
}).catch((err)=>{
    res.status(500).json(err);
})
})

router.get('/bookmarks', async(req, res)=>{
  console.log(req.query, req)
  book.find(req.query).sort({date: -1})
  .then((data) => res.json(data))
  .catch((err)=>{
    res.status(500).json(err);
})
})

router.delete('/:id', (req, res)=>{
  book.findById({_id: req.params.id})
  .then((data) => data.remove())
  .then((results) => res.json(results) 
  .catch((err)=>{
    res.status(500).json(err);
}))
})
module.exports = router;