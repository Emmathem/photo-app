import axios from "axios";
export const ROOT = 'https://api.unsplash.com'
export const ENDPOINT = '/photos'
export const BASE_URL = ROOT + ENDPOINT

export default {
    state: {
        photos: [],
        serverResponse: null
    },
    mutations: {
        GET_ALL_PHOTOS: (state, data) => (state.photos = data),
        GET_SERVER_RESPONSE: (state, data) => (state.serverResponse = data)
    },
    actions: {
        async getPhotos ({commit}, payload) {
            const response = await axios.get(`${BASE_URL}`, { params: { ...payload } });
            console.log(response, 'in ass')
            if (response) {
                commit('GET_ALL_PHOTOS', response.data)
            }
            return response;
        }
    },
}