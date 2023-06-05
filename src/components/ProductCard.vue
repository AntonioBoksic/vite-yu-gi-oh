<script>
// import { ref } from 'vue'

// defineProps({
//   msg: String,
// })

// const count = ref(0)

// export default {
//   name: "AppFooter",
// }

export default {
    name: "ProductCard",
    props: {
    details: Object
  }
}

</script>

<!-- HTML -->
<template>
    
    <!-- blocco prodotto -->
    <div class="prod-card">

            <div class="img-card">
                <img :src="details.card_images[0].image_url" alt="">

            </div>
        
            <div class="titolo-card">{{ details.name }}</div>

    </div>


</template>

<!-- STILE -->

<style scoped lang="scss">

.prod-card {
    // border: 1px solid black;
    width: calc(100%/6 - 20px);
    margin: 10px;

    height: 300px;

    .img-card{
        height: 80%;

        img{
        height: 100%;
        width: 100%;
        }

    }

    .titolo-card {
        padding-top: 6px;
        height: 20%;
        text-align: left;
    }

    
}


</style>
