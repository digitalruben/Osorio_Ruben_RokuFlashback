import Header from "./TheHeaderComponent.js";
import MusicHighlight from "./TheMusicLightboxComponent.js";
import Thumbnails from "./TheMusicThumbsComponent.js";

export default {
    name: "AdultsMusic",

    template: `
    <section class="adultsMusic">
        
        <header-area :settings=settings :adults=adults :reachedhome=reachedhome @click="openMenu()" @pairData="getData" :whitelogo=whitelogo></header-area>
        
        <!-- Decades filtering/selection coming from the API-->
        <section class="filterSection">
            <div class="musicEraWrapper">
                <div class="eraItem" ><img src="images/profile_background.jpg" alt="Filter Button" @click="seventies = false, eighties = false, nineties = false, getEra()"><span>ALL</span></div>
                <div class="eraItem" ><img src="images/profile_background.jpg" alt="Filter Button" @click="seventies = true, eighties = false, nineties = false, getEra()"><span>70s</span></div>
                <div class="eraItem" ><img src="images/profile_background.jpg" alt="Filter Button" @click="seventies = false, eighties = true, nineties = false, getEra()"><span>80s</span></div>
                <div class="eraItem" ><img src="images/profile_background.jpg" alt="Filter Button" @click="seventies = false, eighties = false, nineties = true, getEra()"><span>90s</span></div>
            </div>
        </section>

        <section class="mediaArea">
    
                <div class="thumbnailsWrapper">
                    <load-thumbnail v-for="music in allmusic" :music=music :key=music.music_id :musicpage=musicpage></load-thumbnail>
                </div>

        </section>

    </section>
    `,

    data() {
        return {
            current: {},
            allmusic: [],
            highlights: [],
            seventies: false,
            eighties: false,
            nineties: false,
            url: `/api/adults/music`,
            showdetails: false,
        }
    },

    created: function () {
        this.musicpage = true;
        this.reachedhome = true;
        this.whitelogo = true;
        this.adults = true;
        this.settings = true;

        fetch(this.url)
            .then(res => res.json())
            .then(data => {
                this.allmusic = data;
                this.highlights = data.sort(() => Math.random() - 0.5);
                this.highlights = this.highlights.slice(2);
            })
            .catch((err) => console.error(err));

    },

    methods: {
        getData(data) {
            this.current = data;
        },

        getEra() {
            if (this.seventies == true) {
                this.url = `/api/adults/music/70s`;
            } else if (this.eighties == true) {
                this.url = `/api/adults/music/80s`;
            } else if (this.nineties == true) {
                this.url = `/api/adults/music/90s`;
            } else {
                this.url = `/api/adults/music`;
            }
            fetch(this.url)
                .then(res => res.json())
                .then(data => {
                    this.allmusic = data;
                })
                .catch((err) => console.error(err));
            this.$forceUpdate();
        },
    },

    components: {
        "header-area": Header,
        "load-thumbnail": Thumbnails,
        "music-highlight": MusicHighlight,
    }
}