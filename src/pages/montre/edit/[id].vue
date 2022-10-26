<script setup lang="ts">
import FormMontre from "@/components/FormMontre.vue";
defineProps<{
    id: string;
}>();
</script>
<template>
    <div class="p-2">
        <FormMontre :id="id" />
    </div>
</template>