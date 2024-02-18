const express = require("express")
const router = express.Router()
router.use(function (req, res, next) {
     res.header("Access-Control-Allow-Origin", "*");
     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
     next();
});

const { signup, login } = require("../controllers/auth")

router.post("/signup", signup)
router.post("/login", login)


module.exports = router;