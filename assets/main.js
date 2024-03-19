const {createApp} = Vue;

createApp({
  data() {
    return {
      risultato: [],
      apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
    };
  },
  
  methods: {
    
    getApi(){
      this.risultato =  "Caricamento...";
      axios.get(this.apiUrl)
        .then((risposta) => {
          risultato = this.risposta.data.response;
        })
        .catch(()=>{
          alert("Errore! Impossibile ottenere l'indirizzo email.");
          this.risultato="";
        });
        this.risultato.push(this.data.response)
        console.log(risultato);
    }
  },
}).mount('#app')