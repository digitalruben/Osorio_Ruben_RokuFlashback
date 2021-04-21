import Header from "./TheHeaderComponent.js";
import MusicLightbox from "./TheMusicLightboxComponent.js";
import Thumbnails from "./TheMusicThumbsComponent.js";

export default {
    name: "AdultsMusic",

    template: `
    <section class="adultsMusic">
        
        <header-area :settings=settings :adults=adults :reachedhome=reachedhome @click="openMenu()" @pairData="getData"></header-area>
        
        <!-- Decades filtering/selection coming from the API -->
        <section class="filterSection">
            <div class="filtersCont">
                <div class="filter" ><img src="images/btn.jpg" alt="Filter Button" @click="seventies = false, eighties = false, nineties = false, getResults()"><span>ALL</span></div>
                <div class="filter" ><img src="images/btn.jpg" alt="Filter Button" @click="seventies = true, eighties = false, nineties = false, getResults()"><span>70s</span></div>
                <div class="filter" ><img src="images/btn.jpg" alt="Filter Button" @click="seventies = false, eighties = true, nineties = false, getResults()"><span>80s</span></div>
                <div class="filter" ><img src="images/btn.jpg" alt="Filter Button" @click="seventies = false, eighties = false, nineties = true, getResults()"><span>90s</span></div>
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
            url: `/api/adults/music`,
            seventies: false,
            eighties: false,
            nineties: false,
            showInfo: false,
        }
    },

    created: function () {
        this.adults = true;
        this.settings = true;        
        this.musicpage = true;
        this.reachedhome = true;

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

        getResults() {
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
        "music-lightbox": MusicLightbox,
    }
}