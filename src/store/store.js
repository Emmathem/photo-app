import { createStore } from "vuex"
import createPersistedState from "vuex-persistedstate";

import PhotoService from './PhotoService'

const store = createStore({
    state: {},
    modules: {
        PhotoService,
    },
    plugins: [createPersistedState()],
})

export default store