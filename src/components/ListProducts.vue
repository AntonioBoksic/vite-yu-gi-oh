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
            productsArray: [

            {

            "thumb": "https://www.coverbrowser.com/image/action-comics/1-1.jpg",

            "price": "$19.99",

            "series": "Action Comics",

            "type": "comic book"

            },

            {

            "thumb": "https://www.panini.it/media/catalog/product/cache/a5b5dd3adfe0d321084804c738f29601/M/1/M1BLLA015ISBN_0.jpg",

            "price": "$3.99",

            "series": "American Vampire 1976",

            "type": "comic book"

            },

            {

            "thumb": "https://media.wired.com/photos/593384dad80dd005b42b2817/master/w_2560%2Cc_limit/Aquaman-16.jpg",

            "price": "$16.99",

            "series": "Aquaman",

            "type": "graphic novel"

            },

            {

            "thumb": "https://d29xot63vimef3.cloudfront.net/image/batgirl/1-1.jpg",

            "price": "$2.99",

            "series": "Batgirl",

            "type": "comic book"

            },

            {

            "thumb": "https://static.posters.cz/image/750/locandine-film-in-plexiglass-batman-prowl-comic-cover-i69653.jpg",

            "price": "$3.99",

            "series": "Batman",

            "type": "comic book"

            },

            {

            "thumb": "https://static.wikia.nocookie.net/marvel_dc/images/5/50/Batman_Beyond_v.1_1.jpg",

            "price": "$2.99",

            "series": "Batman Beyond",

            "type": "comic book"

            },

            {

            "thumb": "https://static.wikia.nocookie.net/marvel_dc/images/0/0d/Batman_Superman_Vol_1_1.jpg",

            "price": "$3.99",

            "series": "Batman/Superman",

            "type": "comic book"

            },

            {

            "thumb": "https://static.wikia.nocookie.net/marvel_dc/images/c/cf/Batman_Superman_Annual_Vol_2_1.jpg",

            "price": "$4.99",

            "series": "Batman/Superman Annual",

            "type": "comic book"

            },

            {

            "thumb": "https://static.wikia.nocookie.net/marvel_dc/images/5/54/Batman_The_Joker_War_Zone_Vol_1_1.jpg",

            "price": "$5.99",

            "series": "Batman: The Joker War Zone",

            "type": "comic book"

            },

            {

            "thumb": "https://static.wikia.nocookie.net/marvel_dc/images/6/64/Batman_Three_Jokers_Collected.jpg",

            "price": "$6.99",

            "series": "Batman: Three Jokers",

            "type": "comic book"

            },

            {

            "thumb": "https://static.wikia.nocookie.net/marvel_dc/images/f/f8/Batman_White_Knight_Presents_Harley_Quinn_Vol_1_1.jpg",

            "price": "$4.99",

            "series": "Batman: White Knight Presents: Harley Quinn",

            "type": "comic book"

            },

            {

            "thumb": "https://static.wikia.nocookie.net/marvel_dc/images/c/c8/Catwoman_Vol_2_1.jpg",

            "price": "$16.99",

            "series": "Catwoman",

            "type": "graphic novel"

            }

            ]
        }
    }
}

</script>

<!-- HTML -->
<template>
    <div class="container">
        <section class="products">

            <div class="etiquette current-series">CURRENT SERIES</div>

            <div class="boxes">

                <!-- blocco prodotto -->
                <ProductCard v-for="(product,index) in productsArray" :key='index'
                :details="product"
                />

            </div>

            <div class="etiquette load-more">Load More</div>

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




.etiquette {
    background-color: #0282f9;
    padding: 10px 20px;
    width: max-content;
    text-align: center;
    font-weight: 900;


}

.load-more{
        margin: 20px 0px;
        position: relative;
        left: 50%;
        transform: translate(-50%,0);

    }

    .current-series {
        position: relative;
        bottom: 15px;
        font-size: 20px;
        
    }
</style>


