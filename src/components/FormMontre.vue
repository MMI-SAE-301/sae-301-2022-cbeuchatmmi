<script setup lang="ts">
import type { Montre } from '@/types';
import { ref } from "vue";
import MontreCarre from "./MontreCarre.vue";
import MontreRonde from "./MontreRonde.vue";
import { colors, materiaux, ecran } from "@/types"
import { useRouter } from "vue-router";
import FormKitListColors from '@/components/FormKitListColors.vue'
import FormKitEcran from '@/components/FormKitEcran.vue'
//import FormKitListMateriaux from './FormKitListMateriaux.vue'

const router = useRouter();
const props = defineProps<{
    data?: Montre;
    id?: string;
}>();

const montre = ref<Montre>(props.data ?? {});


async function upsertMontre(dataForm, node) {
    const { data, error } = await supabase.from("montre").upsert(dataForm);
    if (error) node.setErrors([error.message]);
    else {
        node.setErrors([]);
        router.push({ name: "montre-edit-id", params: { id: data[0].idmontre } });
    }
}

if (props.id) {
    let { data, error } = await supabase
        .from("montre")
        .select("*")
        .eq("idmontre", props.id);
    if (error || !data)
        console.log("n'a pas pu charger le table Montre :", error);
    else montre.value = (data as any[])[0];
}


if (props.id) {
    let { data, error } = await supabase
        .from("montre")
        .select("*")
        .eq("id", props.id);
    if (error || !data) console.log("n'a pas pu charger les montres :", error);
    else montre.value = data[0];
}
// async function supprimerMontre() {
//     const { data, error } = await supabase
//         .from("montre")
//         .delete()
//         .match({ idmontre: montre.value.idmontre });
//     if (error) {
//         console.error(
//             "Erreur à la suppression de ",
//             montre.value,
//             "erreur :",
//             error
//         );
//     } else {
//         router.push("/montre/new");
//     }
// }
</script>
<template>
    <div class="p-2">

        <div class="carousel w-64">
            <MontreCarre class="carousel-item w-64" v-bind="montre" id="carre" />
            <MontreRonde class="carousel-item w-64" v-bind="montre" id="ronde" />
        </div>
        <FormKit type="form" v-model="montre" @submit="upsertMontre">


            <FormKitListColors name="boitier" label="boitier" />
            <FormKitListColors name="bracelet" label="Bracelet" />
            <FormKitEcran name="ecran" label="ecran" />


        </FormKit>



    </div>
</template>
