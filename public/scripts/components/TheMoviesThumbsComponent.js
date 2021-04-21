export default {
    name: "MoviesThumbnails",

    props: ["movie", "moviepage", "tv", "tvpage", "music", "musicpage", "kidsmedia", "kidspage"],

    data() {
        return {
            showInfo: false,
            playvideo: false
        }
    },

    template: `
        <section class="movie-item" v-if="moviepage">

            <!--Media thumbnails -->
            <img :src="'images/movies/' + movie.movies_thumbnail" :alt="movie.movies_title" @click="showVideoInfo()" class="item-image">
            
            <div class="titleBox"  @click="showVideoInfo()">
                <h3> {{ movie.movies_title }} </h3>
            </div>
            
            <div class="detailsBox movieBox" v-if="showInfo">

                <button @click="closeVideoDetails()" v-if="!playvideo"><img src="images/arrow.svg"><span>BACK</span></button>
            
                <!--Player cover image and content information-->
                <div class="movieDetails">

                    <img :src="'images/movies/' + movie.movies_cover" :alt="movie.movies_title" @click="playVideo()" v-if="!playvideo" id="mediaDetailsCover" draggable="false">
                    <img src="images/play.svg" alt="Play" @click="playVideo()" v-if="!playvideo" class="mediaDetailsPlayButton">

                    <div v-if="playvideo" class="mediaBox">

                        <button @click="closeVideo()"><img src="images/close.svg"></button>

                        <iframe :src="movie.movies_media+'?rel=0&autoplay=1'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                
                    </div>

                </div>

                <!--Media information coming from the Database-->
                <div class="infoBox">
                    <h3> {{ movie.movies_title }}</h3>
                    <h4> {{ movie.movies_genre }}</h4>
                    <h5> Duration: {{ movie.movies_runtime }} | Rating: {{ movie.movies_rating }} | Classification: {{ movie.movies_arating }}</h5>
                    <p> {{ movie.movies_desc }}</p>
                    <h5>Cast: {{ movie.movies_cast }}</h5>
                    <h5>Directed by: {{ movie.movies_director }}</h5>
                    <h5>Released: {{ movie.movies_year }}</h5>
                </div>

            </div>

        </section>
    `,

    methods: {
        showVideoInfo() {
            this.showInfo = true;
        },
        closeVideoDetails() {
            this.showInfo = false;
        },
        playVideo() {
            this.playvideo = true;
        },
        closeVideo() {
            this.playvideo = false;
        }
    }
}