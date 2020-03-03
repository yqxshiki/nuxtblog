module.exports = app => {
    const express = require("express")
    const router = express.Router();

    const axios = require("axios")

    const querystring = require("querystring")
    const Admin = require("../../models/Admin")

    // github配置参数
    const config = {
        _id: "35568306969cf82761dd",
        _secret: "5e203e8347c5e892aff1edd8fac5a5f911b8053a"
    }

    router.get("/login", async (req, res) => {
        let path = 'https://github.com/login/oauth/authorize?client_id=' + config._id;
        res.redirect(path);
    })

    router.get("/callback", async (req, res) => {
        // 认证成功
        let code = req.query.code;

        const params = {
            client_id: config._id,
            client_secret: config._secret,
            code: code
        }


        let data = await axios.post("https://github.com/login/oauth/access_token", params)

        // 秘钥
        const access_token = querystring.parse(data.data).access_token;

        // 获取信息
        data = await axios.get('https://api.github.com/user?access_token=' + access_token)

        const admin = {
            username: data.data.login,
            icon: data.data.avatar_url
        }
        Admin.create(admin)
        res.redirect("http://localhost:8080/")
        // res.send(data.data)
    })
    app.use("/api/github", router)
}