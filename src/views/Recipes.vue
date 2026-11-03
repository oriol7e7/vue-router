<script setup>
import { food } from '@/Recipes'
</script>

<template>
  <main>
    <h1>Receptes</h1>
    <section class="grid">
      <article v-for="r in food" :key="r.id">
        <img :src="r.foto" alt="" />
        <h4>{{ r.nom }}</h4>
        <p>{{ r.descripcio }}</p>
        <button>
          <RouterLink :to="'/recipes/' + r.id">Veure detall</RouterLink>
        </button>
      </article>
    </section>
  </main>
</template>

<style scoped>
main {
  width: 100%;
  padding: 0.5rem;
}
.grid {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
}

img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}
</style>
