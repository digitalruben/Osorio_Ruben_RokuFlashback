import LoginPage from "./LoginComponent.js";
import ProfilesPage from "./ProfilesComponent.js";
import ParentsMovies from "./AdultsMoviesComponent.js";
import ParentsTV from "./AdultsTVComponent.js";
import ParentsMusic from "./AdultsMusicComponent.js";
import KidsMedia from "./KidsMediaComponent.js";
import PageNotFound from "./PageNotFoundComponent.js";

let cacheduser = JSON.parse(localStorage.getItem('cacheduser'));

const routes = [
    {
        path: "/", name: "LoginPage", component: LoginPage,
        beforeEnter: (to, from, next) => {
            if (localStorage.getItem('cacheduser')) {
                next({ name: 'ParentsMovies', params: { current: cacheduser } });
            } else {
                next();
            }
        },
    },

    { path: "/profiles", name: "ProfilesPage", component: ProfilesPage, props: true },
    { path: "/parents-movies", name: "ParentsMovies", component: ParentsMovies, props: true },
    { path: "/parents-tv", name: "ParentsTV", component: ParentsTV, props: true },
    { path: "/parents-music", name: "ParentsMusic", component: ParentsMusic, props: true },
    { path: "/parents", redirect: "/parents-movies" },
    { path: "/kids", name: "KidsMedia", component: KidsMedia, props: true },
    { path: "*", name: "PageNotFound", component: PageNotFound },
]

const router = new VueRouter({
    routes
})

export default router