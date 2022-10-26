<script setup lang="ts">
import Bouton from '@/components/Bouton.vue';
import chevronBas from '@/components/chevronBas.vue';
import ChevronDroit from '@/components/chevronDroit.vue';
import ChevronGauche from '@/components/chevronGauche.vue';
</script>
<template class="bg-gris">

  <div class="sm:flex">

    <div class="bg-noir max-w-[800px] grid place-content-center items-center text-center">
      <div class="">

        <h1 class="font-cantarell text-2xl text-blanc">TiK•TaK</h1>
        <p class="font-darker-grotesque text-lg text-blanc m-4">Les montres connectées à votre personnalité</p>
        <button class="">
          <span
            class="before:block before:absolute before:-inset-1 before:-translate-x-0.5 before:-translate-y-0.5 before:border-brun relative before:border-2  inline-block">
            <span
              class="before:block before:absolute before:-inset-1 before:translate-x-0.5 before:translate-y-0.5 before:border-brun relative before:border-2  inline-block">
              <span class="relative text-brun text-lg p-5">Personnaliser</span>
            </span>
          </span>
        </button>
        <div class=" flex justify-center m-10">

          <chevronBas />
        </div>
      </div>
    </div>
    <div class="col-6">
      <img class="m-auto max-w-[100%] h-auto " src="../assets/accueil.jpg" alt="montre">
    </div>
  </div>


  <div>
    <span class="bg-brun absolute translate-x-6 -translate-y-20 rounded-full text-[64px] text-blanc p-2">-20%</span>

    <div class="flex m-32 text-center">

      <div class="bg-blanc">
        <h2 class="font-darker-grotesque text-3xl text-noir m-auto">Mirror Watch</h2>
        <p class="font-darker-grotesque text-xl text-noir">Des montres connectées uniques avec plus d’un
          millier de
          façons de les customiser</p>
        <Bouton nom="Personnaliser" class="bg-brun  text-blanc font-darker-grotesque text-lg rounded-xl text-center" />
      </div>
      <div class="bg-noir">
        <img src="@/assets/montre-accueil.png" alt="montre connecté">
      </div>
    </div>
  </div>

  <div class="text-center">
    <h2 class="font-darker-grotesque text-xl text-brun">Styles de Montres</h2>
    <div class="flex justify-center gap-10 items-center">
      <ChevronGauche />
      <img src="@/assets/Montre1.jpg" alt="">
      <img src="@/assets/Montre2.jpg" alt="">
      <img src="@/assets/Montre3.jpg" alt="">
      <ChevronDroit />
    </div>
  </div>


  <div>
    <div class="flex m-32">

      <div class="bg-noir2">
        <h2 class="font-darker-grotesque text-2xl m-4 text-brun2">Notre Histoire</h2>
        <p class="font-darker-grotesque text-xl m-4 text-brun2">Des montres connectées uniques avec plus d’un millier
          de
          façons de les customiser</p>
        <div class="text-center">

          <Bouton nom="Personnaliser"
            class="bg-brun mt-7  text-blanc font-darker-grotesque text-lg rounded-xl text-center" />
        </div>
      </div>
      <div>
        <img class="m-auto  h-[594px]" src="@/assets/Notre_histoire.jpg" alt="montre connecté">
      </div>
    </div>
  </div>

</template>