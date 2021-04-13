//import at the top
import HomePage from "./components/TheHomePageComponent.js";
import LoginPage from "./components/TheLoginComponent.js";
import Protected from "./components/TheProtectedComponent.js";

(() => {
    console.log('fired!');

    // ad our VueRouter here
    const router = new VueRouter({
        routes: [
            { path: "/", component: HomePage },
            { path: "/login", component: LoginPage },

            // only access this route or section if you're logged in / authenticate
            { 
                path: "/admin",
                component: Protected,

                beforeEnter: (to, from, next) => {
                    // if you're NOT authenticated, then go to the login page
                    if (!vm.authenticated) {
                        next("/login");
                    } else {
                        // you're logged in, you can go to the protected setion
                        next();
                    }
                }
            }
        ]
    })

    const vm = new Vue({
        data: {
            message: "Hello!",
            authenticated: false,
            user: ""
        },

        created: function() {
            if (window.localStorage.getItem("creds")) {
                this.authenticated = true;
                this.user = JSON.parse(window.localStorage.getItem("creds")).name;
            }
        },

        router
    }).$mount("#app");
})();

