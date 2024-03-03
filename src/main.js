import '@/style.css'

import {createApp} from 'vue'
import App from './App.vue'
import router from "@/router/router";
import components from "@/components/UI/index";
import {autoAnimatePlugin} from "@formkit/auto-animate/vue";

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})
app
    .use(autoAnimatePlugin)
    .use(router)
    .mount('#app')
