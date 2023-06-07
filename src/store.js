import { reactive } from "vue"


export const store= reactive({
    apiURL_allCards: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",
    yugiohCardsArray:[],
    
    loading: true,

    // parte che mi serve per il search

    //questo sarà riferimento al v-model che agganceremo all input
    chosenArchetype: "",
    archetypesArray:[],

    apiURL_archetypes:"https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype="
    
})