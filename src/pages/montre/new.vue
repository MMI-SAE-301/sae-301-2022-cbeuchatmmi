<script setup lang="ts">

import Rond from "@/components/MontreRonde.vue"
import FormMontre from "@/components/FormMontre.vue";

</script>

<template >

    <h1 class="bg-noir2  text-center font-darker-grotesque text-xl text-brun2">Personnaliser</h1>
    <FormMontre class="bg-noir2" />
    <div class="text-center">
        <h2 class="font-darker-grotesque text-xl text-brun mb-8 ">Styles de Montres</h2>
        <div class="flex flex-warp items-center justify-center gap-4  lg:gap-10 ">
            <img src="@/assets/Montre1.png" alt="exemple de montre">
            <img src="@/assets/Montre2.png" alt="exemple de montre">
            <img src="@/assets/Montre3.png" alt="exemple de montre">
        </div>
    </div>
</template>