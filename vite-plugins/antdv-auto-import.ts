import Components from 'unplugin-vue-components/vite';
import {AntDesignVueResolver} from 'unplugin-vue-components/resolvers';

//组件自动导入
const ComponentsImport = Components({
    dirs: ['src/components'], // 目标文件夹
    extensions: ['vue', 'jsx'], // 文件类型
    dts: './components.d.ts', // 输出文件，里面都是一些import的组件键值对
    resolvers: [
        AntDesignVueResolver({
            importStyle: false, // css in js
            resolveIcons: true
        }),
    ],
})

export default ComponentsImport

