import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: "#app",
        data:{
            words: "",
            count: 0,

        },
        methods: {
            countWords: function(){
                this.count = this.words.split(" ").length

                
                

            }
        }
    })
})