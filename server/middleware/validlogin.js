module.exports = options => {
    const jwt = require("jsonwebtoken")
    const Admin = require("../models/Admin")
    const assert = require("http-assert")
    return async (req, res,next) => {
        const token = String(req.headers.authorization || '').split(' ').pop()
        assert(token, 401, '请先登录')

        const { id } = jwt.verify(token, req.app.get('secret'))
        assert(id, 401, '请先登录')

        req.user = await Admin.findById(id)
        assert(req.user, 401, '请先登录')

        await next();
    }
}