const Post = require("../models/post");

exports.create = async (req, res) => {
     try {
          const {title , body,tags,img}  = req.body;
          const post = await Post.create({
               title,
               body,
               img,
               tags
          })
          return res.status(200).json({
               success: true,
               post,
               message: "Post created successfully",
          })
     } catch (e) {
          console.error(e);
          return res.status(500).json({
               success: false,
               message: "Post cannot be created. Please try again.",
          });
     }
}

exports.deletePost = async (req, res) => {
     try {
          const { id } = req.headers
          const post_data = await Post.findById({_id: id})
          if (!post_data) {
               return res.status(200).json({
                    success: false,
                    message: "No posts found for delete request",
               })
          }
          await Post.findByIdAndDelete({_id: id})
          return res.status(200).json({
               success: true,
               message: "successfully Deleted Post.",
          })
     } catch (e) {
          console.error(e);
          return res.status(500).json({
               success: false,
               message: "failed to Deleted the post.",
          });
     }
}

exports.getPosts = async (req, res) => {
     try {
          const data = await Post({})
          if (!data) {
               return res.status(404).json({
                    success: false,
                    message: `NO Posts were found`
               })
          }
          return res.status(200).json({
               success: true,
               message: "successfully got the Posts",
               data: data,
          })
     } catch (e) {
          console.error(e);
          return res.status(500).json({
               success: false,
               message: "failed to get notes.",
          });
     }
}