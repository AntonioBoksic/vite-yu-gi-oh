<script>
import { store } from "./../store.js";

export default {
    name: "AppSearch",
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <input type="text" class="form-control" placeholder="search"
    v-model.trim="store.searchText">
    <!-- il .trim serve ad eliminare gli spazi -->

    <button type="submit" class="btn"
    @click.prevent="$emit('mySearch')"
    >

    <!-- in @click devo mettere "$emit('quapossometterequellochevoglio')" -->
    <!-- metterò mySearch -->

    <!-- aggiungiamo .prevent dopo @click per evitare   che si ricarichi la pagina (in questo caso si ricarica perchè c'è type="submit"-->
        search
    </button>

</template>

<style lang="scss" scoped>

</style>