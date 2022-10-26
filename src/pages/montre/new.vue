<script setup lang="ts">

import Rond from "@/components/MontreRonde.vue"
import FormMontre from "@/components/FormMontre.vue";

</script>

<template >

    <h1 class="bg-noir2  text-center font-darker-grotesque text-xl text-brun2">Personnaliser</h1>
    <FormMontre class="bg-noir2" />
    <h2 class="bg-noir2  text-center font-darker-grotesque text-xl text-brun2"> Styles de Montres</h2>
    <div class="flex flex-col items-center justify-center gap-4">

        <img class="w-[75%]" src="@/assets/Montre1.png" alt="">
        <img class="w-[75%]" src="@/assets/Montre2.png" alt="">
        <img class="w-[75%]" src="@/assets/Montre3.png" alt="">

    </div>
</template>