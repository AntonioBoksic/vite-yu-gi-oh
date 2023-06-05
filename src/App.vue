<script>
import ListProducts from './components/ListProducts.vue';


export default {
  components: {
    ListProducts,
  }
}
</script>

<template>
  <header>
    <h1>Yu-Gi-Oh API</h1>
  </header>

  <main>

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

