const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("../models/user")


exports.signup = async (req, res) => {
     try {
          const { name, email, password } = req.body;
          if (!name || !email || !password) {
               return res.status(400).json({
                    success: false,
                    message:
                         "Password and Confirm Password do not match. Please try again.",
               });
          }
          const existingUser = await User.findOne({ email });
          if (existingUser) {
               return res.status(400).json({
                    success: false,
                    message: "User already exists. Please sign in to continue.",
               });
          }
          const hashedPassword = await bcrypt.hash(password, 10);
          const user = await User.create({
               name,
               email,
               password: hashedPassword,
          })
          return res.status(200).json({
               success: true,
               user,
               message: "User registered successfully",
          })
     } catch (e) {
          console.error(e);
          return res.status(500).json({
               success: false,
               message: "User cannot be registered. Please try again.",
          });
     }
}


exports.login = async (req, res) => {
     try {
          const { email, password } = req.body;
          if (!email || !password) {
               // Return 400 Bad Request status code with error message
               return res.status(400).json({
                    success: false,
                    message: `Please Fill up All the Required Fields ra donkey `,
               });
          }
          const user = await User.findOne({ email })
          if (!user) {
               // Return 401 Unauthorized status code with error message
               return res.status(401).json({
                    success: false,
                    message: `User is not Registered with Us Please SignUp to Continue`,
               });
          }
          if (await bcrypt.compare(password, user.password)) {
               const token = jwt.sign(
                    { email: user.email, id: user._id },
                    "Sohith",
                    {
                         expiresIn: "24h",
                    }
               );
               // Save token to user document in database
               user.token = token;
               user.id = user._id;
               user.password = undefined;
               // Set cookie for token and return success response
               const options = {
                    expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                    httpOnly: true,
               };
               res.cookie("token", token, options).status(200).json({
                    success: true,
                    token,
                    user,
                    message: `User Login Success`,
               });
          } else {
               return res.status(401).json({
                    success: false,
                    message: `Password is incorrect`,
               });
          }
     } catch (error) {
          console.error(error);
          // Return 500 Internal Server Error status code with error message
          return res.status(500).json({
               success: false,
               message: `Login Failure Please Try Again`,
          });
     }
}