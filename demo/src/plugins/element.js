import { Bell, ArrowDown } from '@element-plus/icons-vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


const installElementPlus = (app) => {
  app.use(ElementPlus)
  app.component("bell", Bell)
  app.component("arrow-down", ArrowDown)
}

export default installElementPlus
