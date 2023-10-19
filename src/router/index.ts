import {
    createRouter,
    createWebHashHistory, NavigationGuardNext,
    RouteLocationNormalized,
    RouteRecordRaw
} from 'vue-router'
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
// @ts-ignore
router.beforeEach(async (to:RouteLocationNormalized, from:RouteLocationNormalized, next:NavigationGuardNext) => {

    //如果是去白名单直接放行
    if (whiteList.indexOf(to.fullPath) > -1) return next()
    next('/')
})

export default router
