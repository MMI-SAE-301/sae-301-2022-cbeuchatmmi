<script setup lang="ts">
import { supabase } from "@/supabase";
import Montre from "@/components/MontreRonde.vue";
const props = defineProps<{
    max?: number;
}>();
const { data: montres, error } = await supabase
    .from("montre")
    .select("*")
    .limit(props.max ?? 100);
if (error) {
    console.log("n'a pas pu récupérer les montres", { error });
}
</script>
<template>
    <ul class="flex flex-col items-center justify-center gap-4">
        <li v-for="montre in montres" :key="montre.id">
            <router-link :to="{ name: 'montre-edit-id', params: { id: montre.idmontre } }">
                <Montre class="w-64" v-bind="montre" />
            </router-link>
        </li>
    </ul>
</template>