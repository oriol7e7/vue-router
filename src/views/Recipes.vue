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
  padding: 1.5rem 1.25rem 2rem;
}

h1 {
  margin-bottom: 1rem;
  font-size: clamp(1.8rem, 3vw, 2.5rem);
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

article {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 0.85rem;
  background: #151518;
  border: 1px solid #2c2c31;
  border-radius: 12px;
}

img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 10px;
  border: 1px solid #2c2c31;
}

h4 {
  font-size: 1.1rem;
}

p {
  color: #b3b3b8;
  font-size: 0.95rem;
}

button {
  margin-top: auto;
  border: 1px solid #2c2c31;
  background: #232329;
  border-radius: 8px;
  padding: 0.6rem 0.8rem;
}

button a {
  display: inline-block;
  width: 100%;
  color: #f5f5f5;
}
</style>
