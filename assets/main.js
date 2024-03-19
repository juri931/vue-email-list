const {createApp} = Vue;

createApp({
  data() {
    return {
      risultato: "",
      apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
    };
  },
  
  methods: {
    
    getRandomMail(){
      axios.get(this.apiUrl)
        .then((data) => this.risultato = data);
        this.risultato.push(this.data)
        console.log(risultato);
    }
  },
}).mount('#app')