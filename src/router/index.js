import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/components/HomeView";
import PhotoView from "@/components/PhotoView";
import AuthView from "@/components/AuthView";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '', name: 'Home', component: HomeView },
    { path: '/faves', name: 'Favourites', component: HomeView },
    { path: '/photo/:id', name: 'Photo', component: PhotoView },
    { path: '/user/:username', name: 'User', component: () => import('../components/UserView') },
    { path: '/auth', name: 'Auth', component: AuthView }
  ],
});

export default router;
