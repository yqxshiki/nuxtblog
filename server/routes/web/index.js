module.exports = app => {
    const express = require("express")
    const router = express.Router();
    const mongoose = require("mongoose")
    const User = mongoose.model('User')
    const Acticle = mongoose.model('Acticle')
    const Category = mongoose.model('Category')
    const Img = mongoose.model('Img')

    router.get("/imglist", async (req, res) => {
        const data = await Img.find()
        res.send(data);
    })
    // 用户信息
    router.get('/user/info', async (req, res) => {
        const data = await User.find()
        res.send(data)
    })
    // 标签列表
    router.get('/category', async (req, res) => {
        const queryOptions = {
            populate: 'parents'
        }
        const items = await Category.find().setOptions(queryOptions)
        res.send(items)
    })
    // 按照标签获取文章
    router.get('/categorylist/:id', async (req, res) => {
        const model = await Acticle.find({
            categories: req.params.id
        })
        res.send(model);
    })
    // 文章列表
    router.get("/blog", async (req, res) => {
        const data = await Acticle.find();
        res.send(data)
    })
    // 文章详情
    router.get('/blog/:id', async (req, res) => {
        const data = await Acticle.findById(req.params.id)
        res.send(data);
    })
    // 修改文章
    router.post("/resive/:id", async (req, res) => {
        const acticle = await Acticle.findByIdAndUpdate(req.params.id, req.body);
        res.send(acticle)
    })
    app.use('/web/api', router)
}