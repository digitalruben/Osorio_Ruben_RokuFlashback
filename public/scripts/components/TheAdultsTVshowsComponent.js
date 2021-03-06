import Header from "./TheHeaderComponent.js";
import Thumbnails from "./TheTvThumbsComponent.js";

export default {
    name: "TVThumbsAdults",

    template: `
    <section class="adultsTV">

        <header-area :settings=settings :adults=adults :reachedhome=reachedhome @click="openMenu()" @pairData="getData"></header-area>
        
        <!-- Lightbox-->
        <section class="lightboxArea" @click=playVideo()>
            <iframe :src="lightbox.tv_media+'?playlist='+this.playlist+'&autoplay=1&mute=1&loop=1&controls=0'" width="100%" height="800px" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <img src="images/play.svg" alt="Play" @click="playVideo()" v-if="!playvideo">
            <h3>Welcome again to Roku TV Flashback<br>Watch the new releases of the week<br>And enjoy at home</h3>
        </section>

        <div v-if="playvideo" class="mediaBox">
            <button @click="closeVideo()"><img src="images/close.svg"></button>
            <iframe :src="lightbox.tv_media+'?rel=0&autoplay=1'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        </div>

        <!-- Decades filtering/selection coming from the API-->
        <section class="filterSection">
                <div class="filter"><img src="images/btn.jpg" alt="Filter Button" @click="seventies = false, eighties = false, nineties = false, getResults()"><span>SHOW ALL</span></div>
                <div class="filter"><img src="images/btn.jpg" alt="Filter Button" @click="seventies = true, eighties = true, nineties = true, getResults()"><span>70s</span></div>
                <div class="filter"><img src="images/btn.jpg" alt="Filter Button" @click="seventies = false, eighties = true, nineties = false, getResults()"><span>80s</span></div>
                <div class="filter"><img src="images/btn.jpg" alt="Filter Button" @click="seventies = false, eighties = false, nineties = true, getResults()"><span>90s</span></div>                               
        </section>

        <section class="mediaArea">
            <div class="thumbnailsWrapper">
                <load-thumbnail v-for="tv in alltvs" :tv=tv :key=tv.tv_id :tvpage=tvpage></load-thumbnail>
            </div>
        </section>

    </section>
    `,

    data() {
        return {
            current: {},
            alltvs: [],
            lightbox: {},
            playlist: "",
            playvideo: false,
            url: `/api/adults/tv`,
            seventies: false,
            eighties: false,
            nineties: false,
        }
    },

    created: function () {
        this.adults = true;
        this.settings = true;
        this.tvpage = true;
        this.reachedhome = true;

        fetch(this.url)
            .then(res => res.json())
            .then(data => {
                this.alltvs = data;
                this.lightbox = data[Math.floor(Math.random() * data.length)];
                this.playlist = this.lightbox.tv_media.split("embed/").pop();
            })
            .catch((err) => console.error(err));
    },

    methods: {
        getData(data) {
            this.current = data;
        },

        getResults() {
            if (this.seventies == true) {
                this.url = `/api/adults/tv/70s`;
            }
            else if (this.eighties == true) {
                this.url = `/api/adults/tv/80s`;
            } else if (this.nineties == true) {
                this.url = `/api/adults/tv/90s`;
            } else {
                this.url = `/api/adults/tv`;
            }
            fetch(this.url)
                .then(res => res.json())
                .then(data => {
                    this.alltvs = data;
                })
                .catch((err) => console.error(err));
            this.$forceUpdate();
        },
        playVideo() {
            this.playvideo = true;
        },
        closeVideo() {
            this.playvideo = false;
        }
    },

    components: {
        "header-area": Header,
        "load-thumbnail": Thumbnails,
    }
}