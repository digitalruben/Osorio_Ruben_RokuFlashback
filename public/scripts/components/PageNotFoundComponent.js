import Header from "./HeaderComponent.js";

export default {
    name: "PageNotFound",

    template: `
        <section id="errorPage">
            <img src="images/login_background.jpg" class="drawnBackground" draggable="false">
            <header-area :purplelogo=purplelogo></header-area>
            <div class="errorWrapper">
                <div class="errorArea">
                    <h2>Sorry. Page not found.</h2>
                    <router-link to="/">Return</router-link>
                </div>
            </div>
        </section>
    `,

    created: function () {
        this.purplelogo = true;
    },

    components: {
        "header-area": Header
    }
}