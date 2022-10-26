<script setup lang="ts">
import chevronBas from '@/components/chevronBas.vue'
defineProps({
    nom: String,
});
</script>
<template>

    <button class=" bg-brun text-blanc font-darker-grotesque text-lg p-2 rounded-xl">
        {{ nom }}
    </button>
</template>