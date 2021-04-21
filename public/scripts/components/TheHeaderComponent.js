export default {
    name: "HeaderComponent",

    props: ["settings", "edit", "reachedhome", "adults", "kids"],

    template: `
        <header>
            
            <nav>
                <router-link to="/"><img src="images/roku_white.svg" class="logo" alt="Roku Logo"></router-link >
                <router-link to="/adultsmovies">MOVIES</router-link>
                <router-link to="/adultstv">TV</router-link>
                <router-link to="/adultsmusic">MUSIC</router-link>
                
                <div class="rightWrapper">

                    <div v-if="reachedhome">

                        <router-link to="/profiles"class="profileWrapper">
                            <img :src="'images/' + current.adults_img" class="profileImage" :alt="current.user_adults" v-if="adults">
                            <h4 v-if="adults">{{ current.user_adults }}</h4>
                        </router-link>

                        <router-link to="/profiles" class="profileWrapper">
                            <img :src="'images/' + current.kids_img" class="profileImage" :alt="current.user_kids" v-if="kids">
                            <h4 v-if="kids">{{ current.user_kids }}</h4>
                        </router-link>

                    </div>

                    <button v-if="settings" @click="openSettings()"><img src="images/settings.png" class="navIcon" alt="Settings Icon"></button>
                
                </div>
            </nav>

            <div v-if="settingsmenu" class="settingsWrapper">
                <ul>
                    <li @click.prevent=signOut()>Sign Out</li>
                </ul>
            </div>
        </header>
    `,

    data() {
        return {
            settingsmenu: false,
            current: {},
        }
    },

    created: function () {
        if (localStorage.getItem("cacheduser") == null) {
            return;
        } else {
            this.current = JSON.parse(localStorage.getItem('cacheduser'));
            this.$emit('pairData', this.current);
        }

        if (this.current.adults_img == null) {
            this.current.adults_img = "./placeholder.png";
        }
        if (this.current.kids_img == null) {
            this.current.kids_img = "placeholder.png";
        }

    },

    methods: {
        signOut() {
            if (localStorage.getItem('cacheduser')) {
                localStorage.removeItem('cacheduser');
                this.$router.push({
                    name: "LoginPage",
                });
            }
        },

        openSettings() {
            if (this.settingsmenu == false) {
                this.settingsmenu = true;
            } else {
                this.settingsmenu = false;
            }
        }
    },
}