export default {
    name: "KidsMusicThumbs",

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
                <div class="musicPlayerArea">
                    <img :src="'images/music/' + music.music_thumbnail" :alt="music.music_title" @click="playAudio()" draggable="false">
                  
                    <audio controls>
                        <source :src="'music/'+ music.music_media" type="audio/mpeg">
                    </audio>
                </div>
                <div class="infoBox">
                    <h4>{{music.music_title}} | {{music.music_singer}}</h4>
                    <h5>Album: {{music.music_album}} | Year: {{music.music_year}} | Genre: {{music.music_genre}}</h5>
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