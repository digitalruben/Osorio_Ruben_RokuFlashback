export default {
    name: "Thumbnails",

    props: ["music"],

    data() {
        return {
            showdetails: false,
        }
    },

    template: `
        <section class="music-item">
            <img :src="'images/music/' + music.music_thumbnail" :alt="music.music_title"  @click="showAudioDetails()" class="item-image">

            <div class="detailsBox musicBox" v-if="showdetails">
            <button @click="closeAudioDetails()"><img src="images/arrow.svg"><span>BACK</span></button>
                <div class="musicPlayerArea">
                    <img :src="'images/music/' + music.music_thumbnail" :alt="music.music_title" @click="playAudio()" draggable="false">
                  
                    <audio controls>
                        <source :src="'music/'+ music.music_media" type="audio/mpeg">
                        Your browser does not support the audio element.
                    </audio>
                </div>
                <div class="infoBox">
                    <div class="likeBox"><img src="images/like.svg" alt="Likes"><h4>{{music.music_likes}}</h4></div>
                    <h4>{{music.music_title}}</h4>
                    <h6>{{music.music_singer}}</h6>
                    <h5>Album: {{music.music_album}}</h5>
                    <h5>Released: {{music.music_year}}</h5>
                    <h5>Genre: {{music.music_genre}}</h5>
                </div>
            </div>
        </section>
    `,

    methods: {
        showAudioDetails() {
            this.showdetails = true;
        },
        closeAudioDetails() {
            this.showdetails = false;
        },
        playAudio() {
            console.log(this.music.music_title);
        }
    }

}