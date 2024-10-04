import { createMemoryHistory, createRouter } from 'vue-router'

import Home from "../components/Home.vue";
import About from "../components/About.vue";

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About},
    { path: '/about/:id', component: About, props: true},
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router