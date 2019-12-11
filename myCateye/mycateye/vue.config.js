//对vue进行相关配
module.exports={
    devServer: {
        proxy: {
          '/reander': {
            target: 'http://m.maoyan.com/',
            changeOrigin: true,
            pathRewrite:{
                "^/reander":''
            }
          },
          '/foo': {
            target: '<other_url>'
          }
        }
      }
}