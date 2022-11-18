import { createApp } from 'vue'
import App from './App.vue'
import store from "@/store/store"
import '@/assets/styles/tailwind.css'
import '@/assets/styles/main.css';
import router from "@/router";
import './http/'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon,  } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faUserSecret, faAngleDown, faHome, faHeart, faCertificate, faSignal, faUsers, faEnvelopeOpen, faGlobe, faDrum, faIndent } from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret, faAngleDown, faHome, faHeart, faCertificate, faSignal, faUsers, faEnvelopeOpen, faGlobe, faDrum, faIndent)

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon)

app.config.productionTip = false

app.provide('client_id', localStorage.getItem('client_id'))
app.use(router);
app.use(store);
app.mount('#app')
