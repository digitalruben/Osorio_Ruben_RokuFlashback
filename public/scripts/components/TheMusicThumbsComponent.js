export default {
    name: "MusicThumb",

    props: ["music", "musicpage", "kidsmedia", "kidspage"],

    data() {
        return {
            showdetails: false,
        }
    },

    template: `
        <section class="music-item" v-if="musicpage">

            <img :src="'images/music/' + music.music_thumbnail" :alt="music.music_title"  @click="showAudioDetails()" class="item-image">
            
            <div class="titleBox"  @click="showAudioDetails()">
                <h3> {{music.music_title}} </h3>
                
            </div>

            <div class="detailsBox musicBox" v-if="showdetails">
            
                <div class="musicPlayerArea">
                    <img :src="'images/music/' + music.music_thumbnail" :alt="music.music_title" @click="playAudio()" draggable="false">
                    <audio controls>
                        <source :src="'music/'+ music.music_media" type="audio/mpeg">
                        Your browser does not support the audio element.
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