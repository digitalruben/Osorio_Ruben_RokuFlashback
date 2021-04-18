import Header from "./HeaderComponent.js";
import MusicHighlight from "./MusicHighlightComponent.js";
import Thumbnails from "./MusicThumbnailsComponent.js";

export default {
    name: "ParentsMusic",

    template: `
    <section id="parentsMusic">
        <header-area :settings=settings :parents=parents :reachedhome=reachedhome @click="openMenu()" @pairData="getData" :whitelogo=whitelogo></header-area>
        
        <section class="filterSection">
            <div class="musicEraWrapper">
                <div class="eraItem"  ><img src="images/profile_background.jpg" alt="Filter Button" @click="eraone = false, eratwo = false, erathree = false, getEra()"><span>ALL</span></div>
                <div class="eraItem" ><img src="images/profile_background.jpg" alt="Filter Button" @click="eraone = false, eratwo = true, erathree = false, getEra()"><span>70s</span></div>
                <div class="eraItem" ><img src="images/profile_background.jpg" alt="Filter Button" @click="eraone = false, eratwo = false, erathree = true, getEra()"><span>80s</span></div>
                <div class="eraItem" ><img src="images/profile_background.jpg" alt="Filter Button" @click="eraone = false, eratwo = false, erathree = true, getEra()"><span>90s</span></div>
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
            eraone: false,
            eratwo: false,
            erathree: false,
            url: `/api/parents/music`,
            showdetails: false,
        }
    },

    created: function () {
        this.musicpage = true;
        this.reachedhome = true;
        this.whitelogo = true;
        this.parents = true;
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
            if (this.eraone == true) {
                this.url = `/api/parents/music/eraone`;
            }
            else if (this.eratwo == true) {
                this.url = `/api/parents/music/eratwo`;
            } else if (this.erathree == true) {
                this.url = `/api/parents/music/erathree`;
            } else {
                this.url = `/api/parents/music`;
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