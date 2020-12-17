import dataComponent from "./components/dataComponent.js";
import { fetchData } from "./components/TheDataMiner.js";


(() => {
    const myVM = new Vue({
        data: {
            currentItem: {},
            mediaType: "",
            mediaCollection: []
        },

        mounted: function() {
            fetchData('./includes/index.php').then(data => {
                this.mediaCollection = data;
            })
        },

        methods: {
            setComponent(project) {
                // debugger;
                this.mediaType = project.mediatype;
                this.currentItem = project;
            }
        },

        components: {
            "datacomponent": dataComponent,
        }
    }).$mount("#app");

})();