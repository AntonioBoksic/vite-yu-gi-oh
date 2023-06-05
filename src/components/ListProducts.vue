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

    for (let i=0 ; i<10; i++) {
      axios.get("https://flynn.boolean.careers/exercises/api/random/mail") 
        .then
        ( (datoindietro) => {

        console.log.datoindietro;
        const result = datoindietro.data.response
        console.log(datoindietro.data.response);
        this.yugiohCardsArray.push(result)

      })
    }
  }
    
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


