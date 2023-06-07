<script>
import ListProducts from './components/ListProducts.vue';
import AppSearch from './components/AppSearch.vue';
import { store } from "./store";


export default {
  components: {
    ListProducts,
    AppSearch,
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getCharachters() {

      let myURL = store.apiURL_allCards

      if(store.chosenArchetype !== ""){
        // qua possiamo usare o backtick o concat, entrambi uniscono/aggiungono una stringa all altra
        myURL = store.apiURL_archetypes + `${store.chosenArchetype}`

      }

      axios.get(myURL)
      .then
        ( (datoindietro) => {

        
        const resultArray = datoindietro.data.data
        // console.log(resultArray[0].name);

        store.yugiohCardsArray = resultArray

        //aggiungo anche che il loading diventa false quando ha finito di eseguire questa funzione, in modo che posso potenzialmente usare un v-if su un componente da far vedere finchè il loading è ancora true.
        store.loading = false
      })
      // aggiungiamo il catch che ci permette di fare qualcosa se avviene un errore: in questo caso stampami l errore
      .catch(err =>{
        console.log(err)
      });
    },
    getArchetypes() {
      axios.get("https://db.ygoprodeck.com/api/v7/archetypes.php")
      .then
      ( (archetypeindietro) => {
        // console.log(archetypeindietro.data)
        const resultArray2 = archetypeindietro.data
        store.archetypesArray = resultArray2
      }
      )
    },
    showChosenArchetype() {
      console.log(store.chosenArchetype)
      
    }

  },
  created(){
    this.getCharachters();
    this.getArchetypes();
    
  },
}
</script>

<template>
  <header>
    <h1>Yu-Gi-Oh API</h1>
  </header>

  <main>

<!-- questo va qua sotto in AppSearch, ma mi dà errore, lascio fuori un attimo -->
<!-- @mySearch="getCharachters" -->
    
    <AppSearch @mySelection="getCharachters"/>
    <ListProducts />

    <!-- bottone di prova per vedere se prende archetipo selezionato -->
    <button @click="showChosenArchetype">showChosenArchetype</button>

  </main>

</template>

<style lang="scss">

@use './styles/partials/variables.scss' as *;
@use './styles/general.scss' as *;


main {
  background-color: orange;
  // height: 100px;
  padding-bottom: 20px;
 

  // .container {
  // margin: 0 auto;
  // width: 80%;
  // // border: 1px solid red;
  // text-align: center;
  
  // }

.jumbotron {
  height: 300px;
  
    img{
      width: 100%;
      height: 100%;
      object-fit:cover;
      object-position: top;
      
    }
  
}
  
}



</style>

