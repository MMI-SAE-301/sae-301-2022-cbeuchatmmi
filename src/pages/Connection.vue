
<script setup lang = "ts" >
import { supabase, user } from '../supabase'
</script>

<template>

    <h2 class="bg-noir  text-center font-darker-grotesque text-xl text-brun2">Connectez vous</h2>
    <div class="bg-noir2 flex flex-col items-center justify-center gap-4">

        <button class="border-2 mt-6 border-brun2 text-brun2 p-2 rounded-full lg:text-lg"
            @pointerdown="supabase.auth.signIn({ provider: 'google' })">
            Se connecter avec Google
        </button>
        <br />


        <button class="border-2 mb-6 border-brun2 text-brun2 p-2 rounded-full lg:text-lg"
            @pointerdown="supabase.auth.signIn({ provider: 'facebook' })">
            Se connecter avec Facebook
        </button>
        <button class="border-2 mb-6 bg-brun2 text-noir2 p-2 rounded-full lg:text-lg" v-if="user"
            @pointerdown="supabase.auth.signOut()">
            Se déconnecter ({{ user.email }})
        </button>
    </div>
</template>
