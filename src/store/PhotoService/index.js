import axios from "axios";
export const ROOT = 'https://api.unsplash.com'
export const ENDPOINT = '/photos'
export const BASE_URL = ROOT + ENDPOINT

export default {
    namespaced: true,
    name: 'PhotoService',
    state: {
        photos: [],
        serverResponse: null,
        fetching: false,
        favPhotos: [],
    },
    mutations: {
        GET_ALL_PHOTOS: (state, data) => (state.photos = data),
        TOGGLE_FETCHING: (state, data) => (state.fetching = data),
        ADD_TO_FAV: (state, data) => {
            console.log('da', data);
            state.favPhotos.push(data)
        }
    },
    actions: {
        async getPhotos ({commit}, payload) {
            try {
                commit('TOGGLE_FETCHING', true);
                const response = await axios.get(`${BASE_URL}`, { params: { ...payload } });
                if (response) {
                    commit('GET_ALL_PHOTOS', response.data)
                }
                commit('TOGGLE_FETCHING', false);
                return response.data;
            } catch (e) {
                commit('TOGGLE_FETCHING', false);
            }
        },
        async searchForPhotos ({commit}, payload) {
            try {
                commit('TOGGLE_FETCHING', true);
                const response = await axios.get(`${BASE_URL}/search/photos`, {
                    params: {
                        ...payload,
                    },
                });
                console.log(response, 'in ass')
                if (response) {
                    commit('GET_ALL_PHOTOS', response.data)
                    commit('TOGGLE_FETCHING', false);
                }
                commit('TOGGLE_FETCHING', false);
                return response.data;
            } catch (e) {
                commit('GET_ALL_PHOTOS', [])
                commit('TOGGLE_FETCHING', false);
            }
        }
    },
}