import { createApp } from 'vue'
import App from './App.vue'
import router from '../src/router/index'
import store from '@/store'
import installElementPlus from './plugins/element'

const app = createApp(App)
installElementPlus(app)
app.use(router).use(store).mount('#app')
