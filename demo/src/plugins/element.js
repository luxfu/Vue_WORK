import { Bell, ArrowDown } from "@element-plus/icons-vue"
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"

const installElementPlus = (app) => {
    app.component("bell", Bell),
        app.component("arrow-down", ArrowDown),
        app.use(ElementPlus)
}

export default installElementPlus