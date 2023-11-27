import {defineConfig} from 'vite'
import vitePlugins from "./vite-plugins";
import postcssPxToViewport from 'postcss-px-to-viewport'
import path from "path";

const buildDir = "docs"
export const projectTitle = "Vite-Vue3-TS";
// https://vitejs.dev/config/
export default defineConfig({
    base: "./",
    publicDir: "public",
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'], // 导入时想要忽略的扩展名列表
    },
    css: {
        postcss: {
            plugins: [
                postcssPxToViewport({
                    viewportWidth: 1920 //---基于1920宽度为100vw
                })
            ]
        },
        preprocessorOptions: {
            less: {
                charset:false,
                javascriptEnabled: true,
                additionalData:`@import "./src/style/global-variable.less";`
            }
        }
    },
    //开发服务器
    server: {
        port: 9527,
        open: true,
        //使用IP能访问
        host: "0.0.0.0",
        // 热更新
        hmr: true,
        //为开发服务器配置 CORS。默认启用并允许任何源
        cors: true,
        //设为 true 时若端口已被占用则会直接退出，而不是尝试下一个可用端口
        strictPort: false,
        //自定义代理规则  https://cn.vitejs.dev/config/server-options.html#server-proxy
        proxy: {
            '/foo': 'http://localhost:4567',
            '/api': {
                target: 'http://jsonplaceholder.typicode.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
            },
            '/socket.io': {
                target: 'ws://localhost:5174',
                ws: true,
            },
        },
        fs: {
            // strict: true, // 限制为工作区 root 路径以外的文件的访问
            // allow: [], // 限制哪些文件可以通过 /@fs/ 路径提供服务
            deny: ['.env', '.env.*', '*.{pem,crt}'], // 用于限制 Vite 开发服务器提供敏感文件的黑名单
        }

    },

    //打包构建选项
    build: {
        outDir:buildDir,
        target: "",
        assetsInlineLimit: 4096, // 小于此阈值的导入或引用资源将内联为 base64 编码
        cssCodeSplit: true, // 启用 CSS 代码拆分
        minify: 'terser', // 启用 terser 压缩
        terserOptions: {
            compress: {
                pure_funcs: ['console.log'], // 只删除 console.log
                drop_debugger: true, // 删除 debugger
            }
        },
        rollupOptions: {
            output: {
                // 最小化拆分包
                manualChunks(chunkAlias) {
                    if (chunkAlias.includes('node_modules')) {
                        return chunkAlias.toString().split('node_modules/')[1].split('/')[0].toString();
                    }
                },
                chunkFileNames: 'js/[name]-[hash].js', // 引入文件名的名称
                entryFileNames: 'js/[name]-[hash].js', // 包的入口文件名称
                assetFileNames: '[ext]/[name]-[hash].[ext]', // 资源文件像 字体，图片等
            }
        }
    },
    plugins: vitePlugins,
})
