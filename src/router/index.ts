import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'
const whiteList: string[] = ["/","/login"]
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: "/login"
    }, {
        path: '/login',
        name: 'Login',
        component: () => import("@/views/login/index.vue")
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach(async (to, from, next) => {

    //如果是去白名单直接放行
    if (whiteList.indexOf(to.fullPath) > -1) return next()
    next('/')
})

export default router