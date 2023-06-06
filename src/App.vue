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
      axios.get(store.apiURL)
      .then
        ( (datoindietro) => {

        console.log(datoindietro.data.data)
        const resultArray = datoindietro.data.data
        console.log(resultArray[0].name);

        store.yugiohCardsArray = (resultArray)

      }
      );

    }

  },


  created(){
    this.getCharachters();
  }
}
</script>

<template>
  <header>
    <h1>Yu-Gi-Oh API</h1>
  </header>

  <main>


    <!-- questo va in AppSearch qua sotto: @mySearch="getCharachters" -->
    <AppSearch />
    <ListProducts />

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

