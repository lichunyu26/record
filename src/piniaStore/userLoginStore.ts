/**
 * 用户登陆状态以及token等数据
 */
import {defineStore} from "pinia";
import {ref} from "vue"
const useUserLoginStore = defineStore("userLoginStore", () => {
    const testNum = ref(1)
    return {
        testNum
    }
}, {
    persist: {
        storage: sessionStorage,
    }
})
export default useUserLoginStore;
