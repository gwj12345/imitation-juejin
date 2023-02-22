// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
	transpileDependencies: true,
	lintOnSave: false, /*关闭语法检查*/
	// lintOnSave:false, //不使用ES6语法检查
	devServer: {
		allowedHosts: "all",
		port:9999,
		proxy: {   
            '/api': {    
              target: "http://win.gwj1314.cn:1337",
              changOrigin: true,   //如果接口跨域这里就要这个参数配置
              pathRewrite: {
                  //'^/api': '/xxx'  //实际请求地址是http://localhost/xxx/findname
                  '^/api': '/api'       //实际请求地址是http://localhost/findname
              }
			}
		}
	}
})
