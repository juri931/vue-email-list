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
      const result =  ref(null);
      axios.get(this.apiUrl)
        .then(data => response.value = data);
      
      this.totalEmails++;

      return result
    }
  },
}).mount('#app')