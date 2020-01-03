module.exports = options => {
    return async (req, res, next) => {
        const modelname = require('inflection').classify(req.params.resource)
        req.Model = require(`../models/${modelname}`)
        await next();
    }
}


