import vue from '@vitejs/plugin-vue'
//打包结果分析插件
import {visualizer} from 'rollup-plugin-visualizer'
//vue全家桶的hook自动导入
import VueHookAutoImport from "./vue-hook-auto-import"
//antdv自动导入
import AntdvAutoimport from "./antdv-auto-import";
//自动注入html
import injectHtmlPlugin from "./inject-html";
//vueJSX支持
import vuejsx from "@vitejs/plugin-vue-jsx"


const vitePlugins = [vue(),vuejsx(), AntdvAutoimport, VueHookAutoImport, visualizer(),injectHtmlPlugin]
export default vitePlugins;
