<script>
import ListProducts from './components/ListProducts.vue';


export default {
  components: {
    ListProducts,
  },

  // copia/incollato array "links da figlio a padre" e cambiato nome in menu per non dover passare il props: " links="links" a riga 75 (funzionerebbe comunque ma così è più chiaro cosa succede)"
  data() {
    return {
      menu: [ 
        {
          text:"CHARACHTERS",
          url:"#",
          current: false
      },
      {
          text:"COMICS",
          url:"#",
          current: true
      },
      {
          text:"MOVIES",
          url:"#",
          current: false
      },
      {
          text:"TV",
          url:"#",
          current: false
      },
      {
          text:"GAMES",
          url:"#",
          current: false
      },
      {
          text:"COLLECTIBLES",
          url:"#",
          current: false
      },
      {
          text:"VIDEOS",
          url:"#",
          current: false
      },
      {
          text:"FANS",
          url:"#",
          current: false
      },
      {
          text:"NEWS",
          url:"#",
          current: false
      },
      {
          text:"SHOP",
          url:"#",
          current: false
      },

      ]
    }
  }
}
</script>

<template>
  
  <!-- qui passo array "menu" da padre a figlio, array che chiamerò "links" nel componente figlio, perchè li avevo chiamati così in precedenza e quindi non ho bisogno di cambiare nient'altro all'interno del componente figlio -->
  <AppHeader :links="menu" />

  <main>


    <div class="jumbotron">
      <img src="../public/jumbotron.jpg" alt="">
    </div>


    
    <ListProducts />
    
    
  </main>

  <AppFooter />

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

