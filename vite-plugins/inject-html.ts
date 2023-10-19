/**
 * 需要注入html的内容
 */
import { loadEnv} from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import {projectTitle} from "../vite.config";

console.log(projectTitle)
const injectHtmlPlugin = createHtmlPlugin({
    minify: true,
    /**
     * 在这里写entry后，你将不需要在`index.html`内添加 script 标签，原有标签需要删除
     * @default src/main.ts
     */
    entry: '/src/main.ts',
    /**
     * 需要注入 index.html ejs 模版的数据
     */
    inject: {
        data: {
            title: projectTitle,
            preInjectScript: `<script src="/preInjectScript.js"></script>`,
            afterInjectScript: `<script src="/afterInjectScript.js"></script>`,
        },
    },
})

export default  injectHtmlPlugin
