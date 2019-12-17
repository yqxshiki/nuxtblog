module.exports = app => {
    const express = require("express")

    const router = express.Router({
        mergeParams: true
    })

    // 新增
    router.post('/create', async (req, res) => {
        const acticle = await req.Model.create(req.body);
        res.send(acticle)
    })
    // 展示
    router.get("/blog", async (req, res) => {
        const blog = await req.Model.find();
        res.send(blog);
    })
    // 修改文章
    router.post("/resive/:id", async (req, res) => {
        const acticle = await req.Model.findByIdAndUpdate(req.params.id, req.body);
        res.send({
            status: true
        })
    })
    // 详情
    router.get("/blog/:id", async (req, res) => {
        const acticle = await req.Model.findById(req.params.id)
        res.send(acticle);
    })
    //删除
    router.delete('/delete/:id', async (req, res) => {
        const acticle = await req.Model.findByIdAndDelete(req.params.id);
        res.send({
            status: true
        })
    })
    // 文章类别列表
    router.get('/category', async (req, res) => {
        const queryOptions = {}
        if (req.Model.modelName === "Category") {
            queryOptions.populate = 'parents';
        }
        const items = await req.Model.find().setOptions(queryOptions)
        res.send(items)
    })
    // 类别详情获取
    router.get('/category/:id', async (req, res) => {
        const model = await req.Model.findById(req.params.id)
        res.send(model)
    })


    app.use('/api/rest/:resource', async (req, res, next) => {
        const modelname = require('inflection').classify(req.params.resource)
        req.Model = require(`../models/${modelname}`)
        next();
    }, router)
}