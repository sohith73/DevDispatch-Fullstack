const express = require("express")
const router = express.Router()
router.use(function (req, res, next) {
     res.header("Access-Control-Allow-Origin", "*");
     res.header("Access-Control-Allow-Methods", "*");
     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,Authorization,id");
     next();
});

const { create, deletePost, getPosts } = require("../controllers/post")

router.post("/create", create)
router.get("/", getPosts)
router.delete("/", deletePost)

module.exports = router;