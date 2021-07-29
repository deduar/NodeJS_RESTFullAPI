const { response } = require('express');
const Validator = require('fastest-validator');
const models = require('../models');

// List all Post
function index(req,res,next){
    models.Post.findAll().then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "Something went worng",
            error: error
        })
    });
}

// Show single Post by Id
function show(req,res,next){
    const id = req.params.id;
    models.Post.findByPk(id).then(result => {
        if(result){
            res.status(200).json(result);
        }else{
            res.status(404).json({
                message: "Post not found!"
            });
        }
    }).catch(error => {
        res.status(500).json({
            message: "Something went worng",
            error: error
        })
    });
}

// Save new Post
function save(req,res,nex){
    const post = {
        title: req.body.title,
        content: req.body.content,
        imageUrl: req.body.image_url,
        categoryId: req.body.category_id,
        userId: 1
    };
    const schema = {
        title: {type:"string", optional: false, max: "100"},
        content: {type: "string", optional: false, max: "100"},
        category: {type: "number", optional: false}
    }
    const v = new Validator();
    const validationResponse = v.validate(post, schema);

    if(validationResponse !== true){
        return res.status(400).json({
            message: "Validation failes",
            error: validationResponse
        });
    }

    models.Post.create(post).then(result => {
        res.status(201).json({
            message: "Post created succesfuly",
            post: result
        });
    }).catch(error => {
        res.status(500).json({
            message: "Something went worng",
            error: error
        });
    });
}

// Update Post bu Id
function update(req,res,next){
    const id = req.params.id;
    const updatePost = {
        title: req.body.title,
        content: req.body.content,
        imageUrl: req.body.image_url,
        categoryId: req.body.category_id
    };
    const userId = 1;
    models.Post.update(updatePost,{where: {id:id, userId:userId}}).then(result => {
        res.status(200).json({
            message: "Post updated successfully",
            post: result
        });
    }).catch(error => 
        res.status(500).json({
            message: "Something went worng",
            error: error
        })
    );
}

// Delete Post by Id
function destroy(req,res,next){
    const id = req.params.id;
    const userId = 1;
    models.Post.destroy({where:{id:id, userId:userId}}).then(result => {
        res.status(200).json({
            message: "Post deleted successfully"
        });
    }).catch(error => {
        res.status(500).json({
            message: "Something went worng",
            error: error
        })
    });
}

module.exports = {
    index: index,
    show: show,
    save: save,
    update: update,
    destroy: destroy
}