import LoginPage from "./TheLoginPageComponent.js";
import ProfilesPage from "./TheAvatarsComponent.js";
import AdultsMovies from "./TheAdultsMoviesComponent.js";
import AdultsTV from "./TheAdultsTVshowsComponent.js";
import AdultsMusic from "./TheAdultsMusicComponent.js";
import KidsMedia from "./TheKidsPageComponent.js";
import PageNotFound from "./TheErrorPageComponent.js";

let cacheduser = JSON.parse(localStorage.getItem('cacheduser'));

const routes = [
    {
        path: "/", name: "LoginPage", component: LoginPage,
        beforeEnter: (to, from, next) => {
            if (localStorage.getItem('cacheduser')) {
                next({ name: 'AdultsMovies', params: { current: cacheduser } });
            } else {
                next();
            }
        },
    },

    { path: "/profiles", name: "ProfilesPage", component: ProfilesPage, props: true },
    { path: "/adultsmovies", name: "AdultsMovies", component: AdultsMovies, props: true },
    { path: "/adultstv", name: "AdultsTV", component: AdultsTV, props: true },
    { path: "/adultsmusic", name: "AdultsMusic", component: AdultsMusic, props: true },
    { path: "/adults", redirect: "adultsmovies" },
    { path: "/kids", name: "KidsMedia", component: KidsMedia, props: true },
    { path: "*", name: "PageNotFound", component: PageNotFound },
]

const router = new VueRouter({
    routes
})

export default router