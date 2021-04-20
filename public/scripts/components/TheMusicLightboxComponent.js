export default {
    name: "MusicLightbox",

    props: ["highlight"],

    data() {
        return {
            showdetails: false,
        }
    },

    template: `
        <section>
            <div class="highlightThumbnail">
                    <img :src="'images/music/' + highlight.music_thumbnail" :alt="highlight.music_title" @click="showAudioDetails()">
            </div>

            <div class="detailsBox musicHighlight" v-if="showdetails">
                <button @click="closeAudioDetails()"><img src="images/arrow.svg"><span>BACK</span></button>
            <div class="musicPlayerArea">
                <img :src="'images/music/' + highlight.music_thumbnail" :alt="highlight.music_title" @click="playAudio()" draggable="false">
                <audio controls>
                    <source :src="'music/'+ highlight.music_media" type="audio/mpeg">
                </audio>
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
            console.log(this.highlight.music_title);
        },
    }
}