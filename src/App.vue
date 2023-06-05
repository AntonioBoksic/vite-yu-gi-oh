<script>
import ListProducts from './components/ListProducts.vue';


export default {
  components: {
    ListProducts,
  }
}
</script>

<template>

  <main>

    <ListProducts />

  </main>

</template>

<style lang="scss">

@use './styles/partials/variables.scss' as *;
@use './styles/general.scss' as *;


main {
  background-color: rgb(30, 30, 30);
  // height: 100px;
  padding-bottom: 20px;
 

  .container {
  margin: 0 auto;
  width: 80%;
  // border: 1px solid red;
  text-align: center;
  
}

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

