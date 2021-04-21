import Header from "./TheNavComponent.js";
import MoviesThumbnails from "./TheKidsMoviesThumbsComponent.js";
import TVThumbnails from "./TheKidsTvThumbsComponent.js";
import MusicThumbnails from "./TheKidsMusicThumbsComponent.js";

export default {
    name: "KidsPage",

    template: `
    <section id="kidsMedia">

        <header-area :kids=kids :reachedhome=reachedhome @pairData="getData"></header-area>

        <!-- Lightbox player -->
        <section class="lightboxArea" @click=playVideo()>
            <iframe :src="lightbox.movies_media+'?playlist='+this.playlist+'&autoplay=1&mute=1&loop=1&controls=0'" width="100%" height="800px" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <img src="images/play.svg" alt="Play" @click="playVideo()" v-if="!playvideo">
            <h3>Welcome kids!</h3>
        </section>

        <div  v-if="playvideo" class="mediaBox">
            <button @click="closeVideo()"><img src="images/close.svg"></button>
            <iframe :src="lightbox.movies_media+'?rel=0&autoplay=1'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        </div>

        <!-- Kids Movies Section -->
        <section class="mediaArea">

            <section class="kidsMovies">
                <div class="kidsMenuWrapper"><h2>MOVIES</h2><img src="images/kids_movies.svg" alt="Kids Movies"></div>
                <div class="kidsThumbnailsWrapper">
                    <movies-thumbnails v-for="movie in allmovies" :movie=movie :key=movie.movies_id></movies-thumbnails>
                </div>
            </section>

            <!-- Kids TV shows Section -->
            <section class="kidsTV">
                <div class="kidsMenuWrapper"><h2>TV</h2><img src="images/kids_tv.svg" alt="Kids TV"></div>
                <div class="kidsThumbnailsWrapper">
                    <tv-thumbnails v-for="tv in alltvs" :tv=tv :key=tv.tv_id></tv-thumbnails>
                </div>
            </section>

            <!-- Kids Music Section -->
            <section class="kidsMusic">
                <div class="kidsMenuWrapper"><h2>MUSIC</h2><img src="images/kids_music.svg" alt="Kids Movies"></div>
                    <div class="kidsThumbnailsWrapper">
                        <music-thumbnails v-for="music in allmusic" :music=music :key=music.music_id></music-thumbnails>
                    </div>
            </section>
            
        </section>
        
    </section>
    `,

    data() {
        return {
            current: {},
            allmovies: [],
            alltvs: [],
            allmusic: [],
            lightbox: {},
            playlist: "",
            playvideo: false
        }
    },

    created: function () {
        this.reachedhome = true;
        this.kids = true;

        fetch('/api/kids/movies')
            .then(res => res.json())
            .then(movie => {
                this.allmovies = movie;
                this.lightbox = movie[Math.floor(Math.random() * movie.length)];
                this.playlist = this.lightbox.movies_media.split("embed/").pop();
            })
            .catch((err) => console.error(err));

        fetch('/api/kids/tvs')
            .then(res => res.json())
            .then(tv => {
                this.alltvs = tv;
            })
            .catch((err) => console.error(err));

        fetch('/api/kids/music')
            .then(res => res.json())
            .then(music => {
                this.allmusic = music;
            })
            .catch((err) => console.error(err));
    },

    methods: {
        getData(data) {
            this.current = data;
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
        "movies-thumbnails": MoviesThumbnails,
        "tv-thumbnails": TVThumbnails,
        "music-thumbnails": MusicThumbnails
    }
}