import { createApp } from 'vue'
// import './style.css'
import router from './router'
import App from './App.vue'
import * as cheetahGrid from "cheetah-grid";
import * as CGrid from "vue-cheetah-grid";

import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
  })


createApp(App).use(router).use(vuetify).use(cheetahGrid).use(CGrid).mount('#app')
