<script setup lang="ts">
import Bouton from '@/components/Bouton.vue';
import chevronBas from '@/components/chevronBas.vue';
import ChevronDroit from '@/components/chevronDroit.vue';
import ChevronGauche from '@/components/chevronGauche.vue';
</script>
<template class="bg-gris">

  <div class="bg-noir">

    <div class="text-center h-[700px]  grid place-content-center items-center">


      <h1 class="font-cantarell text-2xl text-blanc">TiK•TaK</h1>
      <p class="font-darker-grotesque text-lg text-blanc m-4">Les montres connectées à votre personnalité</p>
      <RouterLink to="/montre/new">
        <button class="">
          <span
            class="before:block before:absolute before:-inset-1 before:-translate-x-0.5 before:-translate-y-0.5 before:border-brun relative before:border-2  inline-block">
            <span
              class="before:block before:absolute before:-inset-1 before:translate-x-0.5 before:translate-y-0.5 before:border-brun relative before:border-2  inline-block">
              <span class="relative text-brun text-lg p-5">Personnaliser</span>
            </span>
          </span>
        </button>
      </RouterLink>
      <div class="flex justify-center m-8">

        <chevronBas />
      </div>
    </div>
  </div>
  <div class="hidden lg:flex">
    <img class=" " src="../assets/accueil.jpg" alt="montre">
  </div>


  <div class="">
    <span class="bg-brun rounded-full  text-[30px] text-blanc p-1">-20%</span>

    <div class="">

      <div class="bg-blanc text-center">
        <h2 class="font-darker-grotesque text-xl text-noir">Mirror Watch</h2>
        <p class="font-darker-grotesque text-lg text-noir">Des montres connectées uniques avec plus d’un
          millier de
          façons de les customiser</p>
        <RouterLink to="/montre/new">
          <Bouton nom="Personnaliser"
            class="bg-brun mb-2 text-blanc font-darker-grotesque text-lg rounded-xl text-center" />
        </RouterLink>
      </div>
      <div class="bg-noir">
        <img src="@/assets/montre-accueil.png" alt="montre connecté">
      </div>
    </div>
  </div>

  <div class="text-center">
    <h2 class="font-darker-grotesque text-xl text-brun">Styles de Montres</h2>
    <div class="flex flex-col items-center justify-center gap-4">
      <ChevronGauche class="hidden" />
      <img src="@/assets/Montre1.png" alt="">
      <img src="@/assets/Montre2.png" alt="">
      <img src="@/assets/Montre3.png" alt="">
      <ChevronDroit class="hidden" />
    </div>
  </div>


  <div>
    <div class="bg-noir2">
      <h2 class="font-darker-grotesque text-xl m-4 text-brun2">Notre Histoire</h2>
      <p class="font-darker-grotesque text-lg m-4 text-brun2">Des montres connectées uniques avec plus d’un millier
        de
        façons de les customiser</p>
      <div class="flex justify-center mb-4">

        <Bouton nom="Notre Histoire"
          class="bg-brun mt-7  text-blanc font-darker-grotesque text-lg rounded-xl text-center" />
      </div>
      <div>
        <img class="m-auto  lg:h-[594px]" src="@/assets/Notre_histoire.jpg" alt="montre connecté">
      </div>
    </div>
  </div>

</template>