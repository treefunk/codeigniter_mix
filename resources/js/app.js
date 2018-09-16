import Vue from 'vue';
import App from './components/app.vue';


new Vue({
    el: "#app",
    data(){
        return {
            message: 'Hi jhondz'
        }
    },
    components: {
        'app' : App
    }
})