<script setup>
import { food } from '@/Recipes'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const id = parseInt(route.params.id)
const recipe = food.find((f) => f.id == id)
</script>

<template>
  <h1 v-if="recipe === undefined">Recepta no trobada</h1>
  <main v-else>
    <img :src="recipe.foto" alt="sd" />
    <section>
      <h1>{{ recipe.nom }}</h1>
      <p>{{ recipe.descripcio }}</p>
      <strong>Ingredients:</strong>
      <ul>
        <li v-for="i in recipe.ingredients">
          {{ i }}
        </li>
      </ul>
      <strong>Preparacio:</strong>
      <ul>
        <li v-for="p in recipe.preparacio">
          {{ p }}
        </li>
      </ul>
    </section>
  </main>
</template>

<style scoped>
main {
  display: flex;
  gap: 1.5rem;
  padding: 1.5rem 1.25rem 2rem;
}

img {
  width: min(420px, 100%);
  height: 420px;
  object-fit: cover;
  border-radius: 14px;
  border: 1px solid #2c2c31;
  background: #151518;
}

section {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

h1 {
  font-size: clamp(2rem, 3vw, 2.8rem);
}

p,
li {
  color: #b3b3b8;
}

strong {
  margin-top: 0.5rem;
  display: block;
  font-size: 1rem;
}

ul {
  padding-left: 1.2rem;
  display: grid;
  gap: 0.35rem;
}
</style>
