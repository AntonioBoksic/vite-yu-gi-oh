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

export default {
  name: "ListProducts",

  components: {
    ProductCard
  },

  data() {
    return {
      yugiohCardsArray: [

      ]
            
    }
  },

  mounted() {
    console.log("caricato");

    // non faccio il ciclo qua come facevamo nell'esercizio email-list, perchè in quel caso mi servivano 10 email e la risposta del server era un email unica, in questo caso ricevo in risposta un array e non voiglio ricevere l'array n volte, mi basta una volta chiaramente, ho già tutto lì.
    // for (let i=0 ; i<10; i++) {
      axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php?num=200&offset=0") 
        .then
        ( (datoindietro) => {

        console.log(datoindietro.data.data)
        const resultArray = datoindietro.data.data
        console.log(resultArray[0].name);
        // pusho tutto l'array che ottengo in risposta nel mio array vuoto
        this.yugiohCardsArray = (resultArray)

      }
      );
      
      console.log(this.yugiohCardsArray)
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
                <ProductCard v-for="(product,index) in yugiohCardsArray" :key='index'
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


