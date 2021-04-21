export default {
    name: "ErrorPage",

    template: `
        <section class="errorPage">
            <img src="images/login_background.jpg" class="mainbg">
            <div class="errorWrapper">
                <div class="errorArea">
                    <h2>Sorry. Page not found.</h2>
                    <router-link to="/"><h4>Return</h4></router-link>
                </div>
            </div>
        </section>
    `,
}