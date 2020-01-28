module.exports = app => {
    const express = require("express")
    const assert = require("http-assert")
    const Admin = require("../../models/Admin")
    const jwt = require('jsonwebtoken')
    const router = express.Router({
        mergeParams: true
    })

    // 新增
    router.post('/create', async (req, res) => {
        const acticle = await req.Model.create(req.body);
        res.send(acticle)
    })
    //删除
    router.delete('/delete/:id', async (req, res) => {
        const acticle = await req.Model.findByIdAndDelete(req.params.id);
        res.send({
            status: true
        })
    })
    // 修改
    router.post("/resive/:id", async (req, res) => {
        const acticle = await req.Model.findByIdAndUpdate(req.params.id, req.body);
        res.send(acticle)
    })
    // 列表
    router.get("/blog", async (req, res) => {
        const blog = await req.Model.find();
        res.send(blog);
    })
    // 详情
    router.get("/details/:id", async (req, res) => {
        const acticle = await req.Model.findById(req.params.id)
        res.send(acticle);
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

    // 转换接口名中间件
    const resourceMiddleware = require("../../middleware/resource")
    // 登录校验中间件
    const validloginMiddleware = require("../../middleware/validlogin")

    // 通用接口
    app.use('/api/rest/:resource', validloginMiddleware(), resourceMiddleware(), router)


    // 上传图片
    const multer = require("multer")
    const MAO = require('multer-aliyun-oss');

    // 上传到本地uploads文件夹
    const upload = multer({
        dest: __dirname + '/../../uploads'
    })

    // 上传到阿里云oss
    // const upload = multer({
    //     storage: MAO({
    //         config: {
    //             region: '<region>',
    //             accessKeyId: '<accessKeyId>',
    //             accessKeySecret: '<accessKeySecret>',
    //             bucket: '<bucket>'
    //         }
    //     })
    // });
    app.post("/api/uploads", validloginMiddleware(), upload.single('file'), async (req, res) => {
        const file = req.file;

        // 如果是阿里云就注释下面这行代码
        file.url = `http://localhost:4000/uploads/${file.filename}`

        res.send(file);
    })

    // 登录
    app.post('/api/login', async (req, res) => {
        // 获取用户提交信息
        const { username, password } = req.body;

        const user = await Admin.findOne({
            username
        }).select('+password')

        assert(user, 422, '用户名不存在')

        // 密码对比
        const isValid = require("bcryptjs").compareSync(password, user.password)
        assert(isValid, 422, '密码错误')

        // 生成token
        const token = jwt.sign({
            id: user._id
        }, app.get("secret"))

        res.send(token)
    })
    // 错误处理函数
    app.use(async (err, req, res, next) => {
        res.status(err.statusCode || 500).send({
            message: err.message
        })
    })
}