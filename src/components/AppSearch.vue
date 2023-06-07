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
    
    <!-- <input type="text" class="form-control" placeholder="search"
    v-model.trim="store.searchText"> -->
            <!-- il .trim serve ad eliminare gli spazi -->

    <!-- <button type="submit" class="btn" -->
    
    <!-- > -->
            <!-- questo sotto bisogna aggiungerlo sopra ma mi dà errore e lo lascio un attimo qua -->
            <!-- @click.prevent="$emit('mySearch')"  -->
            <!-- in @click devo mettere "$emit('quapossometterequellochevoglio')" -->
            <!-- metterò mySearch -->

            <!-- aggiungiamo .prevent dopo @click per evitare   che si ricarichi la pagina (in questo caso si ricarica perchè c'è type="submit"-->
        <!-- search
    </button> -->
    


    <select name="archetypes" id="archetypes-select" v-model="store.chosenArchetype" @change="$emit('mySelection')">
        
        <!-- option che non viene presa in considerazione da v-model -->
        <option value=""> --Please choose an Archetype-- </option>

        <option v-for="(elemento,index) in store.archetypesArray" :value="elemento.archetype_name" :key="index">
        {{ elemento.archetype_name }}
        </option>
       
    </select>

</template>

<style lang="scss" scoped>

</style>