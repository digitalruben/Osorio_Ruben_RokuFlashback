export default {
    name: "MusicLightbox",

    props: ["lightbox"],

    data() {
        return {
            showInfo: false,
        }
    },

    template: `
        <section>
            <div class="lightboxThumb">
                <img :src="'images/music/' + lightbox.music_thumbnail" :alt="lightbox.music_title" @click="showAudio()">
            </div>

            <div class="detailsBox musicLightbox" v-if="showInfo">
                <button @click="closeAudio()"><img src="images/arrow.svg"><span>BACK</span></button>
                <div class="musicPlayerArea">
                <img :src="'images/music/' + lightbox.music_thumbnail" :alt="lightbox.music_title" @click="playAudio()" draggable="false">
                <audio controls>
                    <source :src="'music/'+ lightbox.music_media" type="audio/mpeg">
                </audio>
            </div>

        </section>
    `,

    methods: {
        showAudio() {
            this.showInfo = true;
        },
        closeAudio() {
            this.showInfo = false;
        },
        playAudio() {
            console.log(this.lightbox.music_title);
        },
    }
}