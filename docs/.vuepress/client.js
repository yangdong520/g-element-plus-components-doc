import { defineClientConfig } from '@vuepress/client'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import gUI from 'g-element-plus-components/g-e-choose-area/index'
import 'g-element-plus-components/style.css'

export default defineClientConfig({
    enhance({ app}) {
        app.use(ElementPlus)
        app.use(gUI)
    }
})
