module.exports = {
    outputDir: __dirname + '/../server/public/admin',
    publicPath: process.env.NODE_ENV === 'production' ? '/admin' : '/'
}