const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const User = require('../models/Users');

const mongoose = require('mongoose');
//create post
router.post('/create', async (req,res)=>{


    const post = new Post(req.body);
    try {
        await post.save(post);
        res.status(201).json("The post is created successfully.")
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
})

// update post 

router.put('/:id', async (req,res)=>{
    const  post = await Post.findById(req.params.id);
    if(post.userId === req.body.userId){
        try {
            await Post.updateOne({_id:post._id},{
                $set: req.body
            })
            res.status(200).json("Post is updated successfully")
        } catch (err) {
            console.log(err)
            res.status(400).json(err)
        }
    }else{
        res.status(400).json("no post available")
    }
})
// delete post

router.delete('/:id', async (req,res)=> {
    const post = await Post.findById(req.params.id);
    if (post !== null&& post.userId === req.body.userId){
        try {
            await Post.findByIdAndDelete(post._id)
            res.status(200).json("Post is deleted successfully")
        } catch (err) {
            res.status(403).json(err)
        }
    }else{
        res.status(400).json("no post available")
    }
})

//like a post
router.put('/:id/like', async(req, res) =>{
    try {
        const post =await Post.findById(req.params.id);
        if(req.body.reaction==='like'){

            if(post.loves.includes(req.body.userId)){
                await Post.updateOne({_id:post._id}, {
                    $pull: {
                        loves: req.body.userId
                    }
                });
            }




            if(!post.likes.includes(req.body.userId)){
                
                await Post.updateOne({_id:post._id}, {
                    $push: {
                        likes: req.body.userId
                    }
                });
                res.status(201).json("You liked the post");
            }else {
                await Post.updateOne({_id:post._id}, {
                    $pull: {
                        likes: req.body.userId
                    }
                });
                res.status(200).json("You disliked the post");
            }








        }else if(req.body.reaction==='love'){

            if(post.likes.includes(req.body.userId)){
                await Post.updateOne({_id:post._id}, {
                    $pull: {
                        likes: req.body.userId
                    }
                });
            }
            if(!post.loves.includes(req.body.userId)){
                
                await Post.updateOne({_id:post._id}, {
                    $push: {
                        loves: req.body.userId
                    }
                });
                res.status(201).json("You loved the post");
            }else {
                await Post.updateOne({_id:post._id}, {
                    $pull: {
                        loves: req.body.userId
                    }
                });
                res.status(200).json("You disloved the post");
            }





        }
        



    } catch (err) {
        res.status(403).json(err)
    }
})

// get a user's all posts

router.get('/profile', async (req,res)=>{
    try {
        const id = req.query.userId;
        const user = await User.findById(id);
        
        const posts =await Post.find({userId:user._id})
        res.status(200).json(posts);
    } catch (err) {
        console.error(err)
        res.status(400).json(err)
    }
})
//get timeline post
router.get('/timeline/:userId', async (req,res)=>{
    try {
        const currentUser = await User.findById(req.params.userId);
        const userPosts = await Post.find({userId:currentUser._id});
        const friendPosts = await Promise.all(
            currentUser.following.map((friendId)=>{
                return Post.find({userId: friendId});
            })
        );
        res.json(userPosts.concat(...friendPosts))
    } catch (err) {
        console.error(err)
        res.status(400).json(err)
    }
})
// get a post
// router.get('/:id', async (req,res)=>{
//     try {
//         const post = await Post.findById(req.params.id);
//         res.json(post)
//     } catch (err) {
//         console.error(err)
//         res.status(400).json(err)
//     }
// })


module.exports = router