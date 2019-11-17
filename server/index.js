const express = require('express')
const app = express()
//跨域
app.use(require('cors')())
// 解析json
app.use(express.json())
const mongoose = require('mongoose')
// 创建数据库
mongoose.connect('mongodb://localhost:27017/nuxtblog', {
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
// 创建模型
const Acticle = mongoose.model("Acticle", new mongoose.Schema({
    title: { type: String },
    body: { type: String }
}))
app.get('/', (req, res) => res.send('Hello World!'))
// 新增
app.post('/api/create', async (req, res) => {
    const acticle = await Acticle.create(req.body);
    res.send(acticle)
})
// 展示
app.get("/api/blog", async (req, res) => {
    const blog = await Acticle.find();
    res.send(blog);
})
// 修改
app.post("/api/resive/:id", async (req, res) => {
    const acticle = await Acticle.findByIdAndUpdate(req.params.id, req.body);
    res.send({
        status: true
    })
})
// 详情
app.get("/api/blog/:id", async (req, res) => {
    const acticle = await Acticle.findById(req.params.id)
    res.send(acticle);
})
//删除
app.delete('/api/delete/:id', async (req, res) => {
    const acticle = await Acticle.findByIdAndDelete(req.params.id);
    res.send({
        status: true
    })
})
app.listen(4000, () => console.log('app listening on port 4000!'))