/*
 * @Date: 2020-05-02 15:14:16
 * @LastEditors: lifangdi
 * @LastEditTime: 2020-05-02 15:22:04
 */
// import { createProxyMiddleware } from 'http-proxy-middleware';
const proxy = require("http-proxy-middleware");

module.exports = function(app){
  app.use(
    proxy("/api",{
      target:"http://localhost:7001/",
      changeOrigin:true,
      pathRewrite:{
      "^/api":""
      }
    })
  )
}