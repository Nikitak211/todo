const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
    app.use(createProxyMiddleware("/**", { // https://github.com/chimurai/http-proxy-middleware
        target: "http://localhost:7000",
        changeOrigin: true
    }));
};