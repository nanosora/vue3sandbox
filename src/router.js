import { createMemoryHistory, createRouter } from 'vue-router'
import LoginView from './views/LoginView.vue'
import HomeView from './views/Home.vue'
import FirstPageView from './views/FirstPage.vue'
import SecondPageView from './views/SecondPage.vue'

const routes = [
    { path: '/', name: "login", component: LoginView, meta: { title: "ログイン画面" } },
    { path: '/login', redirect: '/' },
    { path: '/home', name: "home", component: HomeView, meta: { title: "Home" } },
    { path: '/first', name: "first", component: FirstPageView, meta: { title: "VueFlow Test" } },
    { path: '/second', name: "second", component: SecondPageView, meta: { title: "CheetahGrid Test" } }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router