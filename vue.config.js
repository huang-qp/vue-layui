// const path = require('path')
module.exports = {
    // css: {
    // 	requireModuleExtension: true,
    // 	sourceMap: true,
    // 	loaderOptions: {
    // 		scss: {
    // 			additionalData(content, loaderContext) {
    // 				const { resourcePath, rootContext } = loaderContext;
    // 				const relativePath = path.relative(rootContext, resourcePath);
    // 				if (
    // 					relativePath.replace(/\\/g, "/") !== "src/styles/index.scss"
    // 				) {
    // 					return '@import "~@/styles/index.scss";' + content;
    // 				}
    // 				return content;
    // 			},
    // 		},
    // 	},
    // },
    devServer: {
        open: process.platform === 'darwin',
        host: '127.0.0.1',
        port: 8080,
        https: false,
        hotOnly: false,
        proxy: null // 设置代理
        // before: app => {}
    },
}
