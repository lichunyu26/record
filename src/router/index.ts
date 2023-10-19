import {
    createRouter,
    createWebHashHistory, NavigationGuardNext,
    RouteLocationNormalized,
    RouteRecordRaw
} from 'vue-router'

const whiteList: string[] = ["/"]
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name:"Home",
        component: () => import("@/views/home/index.vue")
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})
// @ts-ignore
router.beforeEach(async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {

    //如果是去白名单直接放行
    if (whiteList.indexOf(to.fullPath) > -1) return next()
    next('/')
})

export default router
