export default {
    name: "dataComponent",

    props: ['item'],

    template: `
        <div @click="loadMediaComponent" class="data-wrapper" :data-mediatype="item.mediatype">
            <img class="lb-thumb" :src="'images/' + item.thumb" alt="thumbnail">
            <h4 class="lb-thumb-tittle">{{item.title}}</h4>      
        </div>
    `,

    methods: {
        loadMediaComponent(event) {
            // debugger;
            this.$emit("setmediatype", this.item);
        }
    }
}