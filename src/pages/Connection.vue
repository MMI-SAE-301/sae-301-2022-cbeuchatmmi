
<script setup lang = "ts" >
import { supabase, user } from '../supabase'
</script>

<template>
    <button @pointerdown="supabase.auth.signIn({ provider: 'google' })">
        Se connecter avec Google
    </button>
    <br />


    <button @pointerdown="supabase.auth.signIn({ provider: 'facebook' })">
        Se connecter avec Facebook
    </button>
    <button class="bg-amber-500 rounded-[25px] m-5" v-if="user" @pointerdown="supabase.auth.signOut()">
        Se déconnecter ({{ user.email }})
    </button>
</template>
