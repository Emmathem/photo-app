import Toast from "vue-toastification";
// Import one of the available themes
//import 'vue-toast-notification/dist/theme-default.css';
import 'vue-toastification/dist/index.css';

import { createApp } from 'vue'

const app = createApp({})
app.use(Toast, {
    position: 'top'
});

// const toastPlugin = {
//     install(app, options) {
//         console.log('ope', options);
//         // configure the app
//         app.use(Toast, {
//             position: 'top'
//         });
//     }
// }
//
// export default toastPlugin