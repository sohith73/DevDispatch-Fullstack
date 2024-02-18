const express = require("express")
const database = require("./config/database");

const cookieParser = require("cookie-parser")
const cors = require("cors")
require('dotenv').config();

const userRoutes = require("./routes/user");

const PORT = process.env.PORT || 4001
const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }));

app.use(
     cors({
          // origin: FRONTEND_URL,
          credentials: true
     })
)
app.use("/api/v1/auth", userRoutes);

app.get("/", (req, res) => {
     res.status(200).json({
          message: "Welcome to the API"
     })
});
app.listen(PORT, () => {
     console.log(`server started on port no. ${PORT}`);
})

database.connect();