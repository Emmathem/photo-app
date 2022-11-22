import { createApp } from 'vue'
import App from './App.vue'
import store from "@/store/store"
import '@/assets/styles/tailwind.css'
import '@/assets/styles/main.css';
import router from "@/router";
import './http/'
// import Toast from "vue-toastification";
// import "vue-toastification/dist/index.css";
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon,  } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faUserSecret, faSearch, faAngleDown, faHome, faHeart, faCertificate, faSignal, faUsers, faEnvelopeOpen, faGlobe, faDrum, faIndent, faBell, faHeartBroken } from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret, faSearch, faAngleDown, faHome, faHeart, faCertificate, faSignal, faUsers, faEnvelopeOpen, faGlobe, faDrum, faIndent, faBell, faHeartBroken)

const app = createApp(App)

app.config.productionTip = false
app.component('font-awesome-icon', FontAwesomeIcon)
app.provide('client_id', localStorage.getItem('client_id'))
app.use(router);
// app.use(Toast, {});
app.use(store);
app.mount('#app')
