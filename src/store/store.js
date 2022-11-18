import { createStore } from "vuex"
import PhotoService from './PhotoService'

const store = createStore({
    state: {},
    modules: {
        PhotoService,
    },
})

export default store