<script setup lang="ts">
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn.js';
import Login from "@/views/login/index.vue";
//dayjs国际化
dayjs.locale('zh-cn');

//处理挂载位置
function getPopupContainer(el, dialogContext) {
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
        <login></login>
    </a-config-provider>
</template>
