const { createApp } = Vue 


createApp({ 
    data() { 
    return { 
        url:"https://perenual.com/api/species-list?key=sk-DTLr6537cba0b11932676",
        error: false,
        datos:[] 
    } 
   
    },
    methods:{
        fetchData(url){
            fetch(url)
            .then(response => response.json())
            .then(   data => {
                
                this.datos=data.data
            }   );


        }
    },
    created(){
        this.fetchData(this.url)
    }


}).mount('#app')


