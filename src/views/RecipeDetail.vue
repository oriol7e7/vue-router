<script setup>
import { food } from '@/Recipes'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const id = parseInt(route.params.id)
const recipe = food.find((f) => f.id == id)
if (!recipe) {
  router.push('/not-found')
}
</script>

<template>
  <main>
    <h1>{{ recipe.nom }}</h1>
  </main>
</template>

<style scoped>
main {
  width: 100%;
  padding: 0.5rem;
}
</style>
