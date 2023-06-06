import { reactive } from "vue"


export const store= reactive({
    apiURL: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=200&offset=0",
    yugiohCardsArray:[],
    loading: true,

    // parte che mi serve per il search

    //questo sarà riferimento al v-model che agganceremo all input
    searchText: "",

    apiNameParameter: "name"



})