export default {
    name: "KidsMusicThumbs",

    props: ["music"],

    data() {
        return {
            showInfo: false,
        }
    },

    template: `
        <section class="music-item">

            <!--Media thumbnails -->
            <img :src="'images/music/' + music.music_thumbnail" :alt="music.music_title"  @click="showAudio()" class="item-image">

            <!--Audio player-->
            <div class="detailsBox musicBox" v-if="showInfo">

                <div class="musicPlayerArea">

                    <img :src="'images/music/' + music.music_thumbnail" :alt="music.music_title" @click="playAudio()" draggable="false">
                  
                    <audio controls>
                        <source :src="'music/'+ music.music_media" type="audio/mpeg">
                    </audio>

                </div>

                <!--Media information coming from the Database-->
                <div class="infoBox">

                    <h4>{{music.music_title}} | {{music.music_singer}}</h4>
                    <h5>Album: {{music.music_album}} | Year: {{music.music_year}} | Genre: {{music.music_genre}}</h5>

                </div>

            </div>

        </section>
    `,

    methods: {
        showAudio() {
            this.showInfo = true;
        },
        closeAudioDetails() {
            this.showInfo = false;
        },
        playAudio() {
            console.log(this.music.music_title);
        }
    }
}