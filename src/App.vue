<script setup lang="ts">
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn.js';
//dayjs国际化
dayjs.locale('zh-cn');

//处理挂载位置
// @ts-ignore
function getPopupContainer(el:HTMLElement, dialogContext:any) {
    if (dialogContext) {
        return dialogContext.getDialogWrap();
    } else {
        return document.body;
    }
}
</script>
<template>
    <a-config-provider component-size="middle"
                       :locale="zhCN"
                       :getPopupContainer="getPopupContainer">
        <router-view/>
    </a-config-provider>
</template>
