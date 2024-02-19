const mongoose = require('mongoose')
const postSchema = new mongoose.Schema({
     title: {
          type: String,
          required: true,
     },
     body: {
          type: String,
          required: true,
          unique: true
     },
     img: {
          type: String,
          required: true
     },
     tags: {
          type: String,
     }
},
     {
          versionKey: false,
          timestamps: true,
     })

     module.exports = mongoose.model("post", postSchema);