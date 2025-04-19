<template>
    <div class="cards">
      <h2>{{ movie.titulo }}</h2>
      <img v-if="movie.portada" :src="movie.portada" alt="Portada no disponible" />
      <p>Director: {{ movie.director }}</p>
      <p>Año: {{ movie.anio }}</p>
      <p>Genero: {{ movie.generos }}</p>
      <p>Likes: {{ movie.likes }}</p>
  
      <button @click="manejarLike">
        {{ likeDado ? 'Quitar like' : 'Me gusta' }}
      </button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import type { Pelicula } from '../interfaces/Pelicula';
  
  defineProps<{ movie: Pelicula }>();
  const emit = defineEmits(['like', 'unlike']);
  
  const likeDado = ref(false);
  
  function manejarLike() {
    if (likeDado.value) {
      emit('unlike');
    } else {
      emit('like');
    }
    likeDado.value = !likeDado.value;
  }
  </script>
  
  <style scoped>
  .cards {
    width: 40%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    border: 2px solid red;
    padding: 10px;
  }
  
  img {
    width: 50%;
    height: auto;
    display: block;
    margin: 0 auto;
  }
  
  button {
    margin-top: 10px;
  }
  </style>
  