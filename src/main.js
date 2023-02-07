import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";
import router from "./router";

import "./axios";
import "./style.css";
import App from "./App.vue";

import mdiVue from 'mdi-vue/v3';
import * as mdijs from '@mdi/js';

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


const vuetify = createVuetify({
  components,
  directives,
})

const pinia = createPinia();

pinia.use(({ store }) => {
  store.router = markRaw(router);
});

const app = createApp(App);
app.use(pinia);
app.use(router);
app.use(vuetify);
app.use(mdiVue, {
  icons: mdijs
})

app.mount("#app");
