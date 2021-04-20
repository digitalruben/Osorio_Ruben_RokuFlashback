import Header from "./TheNavComponent.js";

export default {
    name: "AvatarsPage",

    data() {
        return {
            current: {}
        }
    },

    template: `
        <section class="profilesPage">

            <img src="images/users_bg.jpg" class="drawnBackground" draggable="false">

            <header-area :kids=kids :reachedhome=reachedhome @pairData="getData" :whitelogo=whitelogo></header-area>
            
            <div class="profilesMain">
                <div class="profilesWrapper">
                    <h2>Welcome again to the Rokuniverse!</h2>

                    <div class="eachProfile">

                        <div class="adults">
                            <img :src="'images/' + current.adults_img" class="profileImage" :alt="current.user_adults" @click="toAdults">
                            <h3 @click="toAdults">{{ current.user_adults }}</h3>
                        </div>

                        <div class="adults">
                            <img :src="'images/' + current.adults_img" class="profileImage" :alt="current.user_adults" @click="toAdults">
                            <h3 @click="toAdults">{{ current.user_adults }}</h3>
                        </div>                        

                        <div class="kids">
                            <img :src="'images/' + current.kids_img" class="profileImage" :alt="current.user_kids" @click="toKids">
                            <h3 @click="toKids">{{ current.user_kids }}</h3>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    `,

    created: function () {
        this.settings = true;
        this.edit = true;
        this.purplelogo = true;
    },

    methods: {
        toAdults() {
            this.$router.push({
                name: "AdultsMovies",
            });
        },

        toKids() {
            this.$router.push({
                name: "KidsMedia",
            });
        },

        getData(data) {
            this.current = data;
        }
    },

    components: {
        "header-area": Header
    }
}