import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false

Vue.use(VueRouter)

import Dashboard from './components/Dashboard.vue'

const routes = [
    { path: '/', component: Dashboard },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

Vue.use(BootstrapVue)

new Vue({
    router,
    render: h => h(Dashboard)
}).$mount('#app')
