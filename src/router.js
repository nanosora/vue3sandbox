import { createMemoryHistory, createRouter } from 'vue-router'
import LoginView from './views/LoginView.vue'
import FirstPageView from './views/FirstPage.vue'

const routes = [
    { path: '/', component: LoginView, meta: { title: "ログイン" } },
    { path: '/menu', component: FirstPageView, meta: { title: "メニュー" } }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router