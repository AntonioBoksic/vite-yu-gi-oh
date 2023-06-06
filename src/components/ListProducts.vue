<script>
// import { ref } from 'vue'

// defineProps({
//   msg: String,
// })

// const count = ref(0)

// export default {
//   name: "AppFooter",
// }

import ProductCard from './ProductCard.vue';
import { store } from "./../store.js";

export default {
  name: "ListProducts",

  components: {
    ProductCard
  },

  //I DATA QUA NON MI SERVONO LI SPOSTO IN STORE
  // data() {
  //   return {
  //     yugiohCardsArray: [

  //     ]
            
  //   }
  // },
  data() {
     return {
       store,
            
     }
   },

  mounted() {
    console.log("caricato");

    // SPOSTATO TUTTA LA CHIAMATA DI AXIOS IN APP.VUE CHE PRENDERà I DATI DALLO STORE
    // non faccio il ciclo qua come facevamo nell'esercizio email-list, perchè in quel caso mi servivano 10 email e la risposta del server era un email unica, in questo caso ricevo in risposta un array e non voiglio ricevere l'array n volte, mi basta una volta chiaramente, ho già tutto lì.
    // for (let i=0 ; i<10; i++) {
      // axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php?num=200&offset=0") 
      //   .then
      //   ( (datoindietro) => {

      //   console.log(datoindietro.data.data)
      //   const resultArray = datoindietro.data.data
      //   console.log(resultArray[0].name);

        //HO PERSO UN SACCO DI TEMPO QUA
        // pusho tutto l'array che ottengo in risposta nel mio array vuoto
        //this.yugiohCardsArray.push(resultArray)

        //LA SOLUZIONE ERA QUESTA, yugiohCardArray diventa resultArray, se io avessi pushato resultArray dentro a yugiohCardsArray avrei ottenuto un array yugiohcards con all'interno un array all'indice 0.
        // Quello che volevo io invece era avere un array di oggetti, non un array con all'interno un array di oggetti.
      //   this.yugiohCardsArray = (resultArray)

      // }
      // );
      
      // console.log(this.yugiohCardsArray)
    }
  //  }
}
</script>

<!-- HTML -->
<template>
  <div class="container">
    <section class="products">

      <div class="boxes">

        <!-- blocco prodotto -->
        <ProductCard v-for="(product,index) in store.yugiohCardsArray" :key='index'
        :details="product"
        />

      </div>   

    </section>
  </div>

</template>

<!-- STILE -->

<style scoped lang="scss">

.boxes {
    display: flex;
    flex-wrap: wrap;
}

.container {
    color: white;
    height: 100%;
}




</style>


