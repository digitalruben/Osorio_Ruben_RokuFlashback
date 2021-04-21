import Header from "./TheHeaderComponent.js";
import Thumbnails from "./TheMoviesThumbsComponent.js";

export default {
    name: "AdultsMovies",

    template: `
    <section class="adultsMovies">

        <header-area :settings=settings :adults=adults :reachedhome=reachedhome @click="openMenu()" @pairData="getData"></header-area>
        
        <!-- Lightbox-->
        <section class="lightboxArea" @click=playVideo()>
            <iframe :src="lightbox.movies_media+'?playlist='+this.playlist+'&autoplay=1&mute=1&loop=1&controls=0'" width="100%" height="800px" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <img src="images/play.svg" alt="Play icon" @click="playVideo()" v-if="!playvideo">
            <h3>Welcome again to Roku Movies Flashback<br>Watch the new releases of the week<br>And enjoy at home</h3>
        </section>

        <div v-if="playvideo" class="mediaBox">
            <button @click="closeVideo()"><img src="images/close.svg"></button>
            <iframe :src="lightbox.movies_media+'?rel=0&autoplay=1'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
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
                <load-thumbnail v-for="movie in allmovies" :movie=movie :key=movie.movies_id :moviepage=moviepage></load-thumbnail>
            </div>
        </section>

    </section>
    `,

    data() {
        return {
            current: {},
            allmovies: [],
            lightbox: {},
            playlist: "",
            playvideo: false,
            url: `/api/adults/movies`,
            seventies: false,
            eighties: false,
            nineties: false,
        }
    },

    created: function () {
        this.adults = true;
        this.settings = true;
        this.moviepage = true;
        this.reachedhome = true;


        fetch(this.url)
            .then(res => res.json())
            .then(data => {
                this.allmovies = data;
                this.lightbox = data[Math.floor(Math.random() * data.length)];
                this.playlist = this.lightbox.movies_media.split("embed/").pop();
            })
            .catch((err) => console.error(err));

    },

    methods: {
        getData(data) {
            this.current = data;
        },

        getResults() {
            if (this.seventies == true) {
                this.url = `/api/adults/movies/70s`;

            } else if (this.eighties == true) {
                this.url = `/api/adults/movies/80s`;

            } else if (this.nineties == true) {
                this.url = `/api/adults/movies/90s`;
                
            } else {
                this.url = `/api/adults/movies`;
            }
            fetch(this.url)
                .then(res => res.json())
                .then(data => {
                    this.allmovies = data;
                })
                .catch((err) => console.error(err));
            this.$forceUpdate();
        },
        playVideo() {
            this.playvideo = true;
        },
        closeVideo() {
            this.playvideo = false;
        },
    },

    components: {
        "header-area": Header,
        "load-thumbnail": Thumbnails,
    }
}