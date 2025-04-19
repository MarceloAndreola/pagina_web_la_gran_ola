<template>
  <h1>Buscador:</h1>
  <input type="text" v-model="frase" />
  <br><br>
  <div class="cards-cont">
    <CardComponent
      v-for="pelicula in peliculasFiltradas"
      :key="pelicula.id"
      :movie="pelicula"
      @like="sumarLike(pelicula.id)"
      @unlike="restarLike(pelicula.id)"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import CardComponent from './components/CardComponent.vue';
import peliculasData from '../src/resource/movies';
import type { Pelicula } from './interfaces/Pelicula';

const frase = ref('');
const peliculas = ref<Pelicula[]>(peliculasData);

const peliculasFiltradas = computed(() => {
  return peliculas.value.filter((pelicula: Pelicula) =>
    pelicula.titulo.toLowerCase().includes(frase.value.toLowerCase())
  );
});

function sumarLike(id: number) {
  const peli = peliculas.value.find((p) => p.id === id);
  if (peli) {
    peli.likes++;
  }
}

function restarLike(id: number) {
  const peli = peliculas.value.find((p) => p.id === id);
  if (peli && peli.likes > 0) {
    peli.likes--;
  }
}

</script>

<style scoped>
.cards-cont {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}
</style>
