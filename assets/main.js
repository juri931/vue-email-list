const {createApp} = Vue;

createApp({
  data() {
    return {
      risultato: '',
      apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
      totalEmails: 0
    };
  },
  
  methods: {
    
    getApi(){
      this.risultato =  ref(null);
      axios.get(this.apiUrl)
        .then(data => risultato.value = data);
      
      this.totalEmails++;
    }
  },
}).mount('#app')