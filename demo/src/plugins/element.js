import * as icons from '@element-plus/icons-vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const installElementPlus = (app) => {
  app.use(ElementPlus)
  Object.keys(icons).forEach((key) => {
    app.component(key, icons[key])
  })
}

export default installElementPlus
