<script setup></script>

<template>
  <header>
    <h2>FoodExplorer</h2>
    <nav>
      <RouterLink to="/">Inici</RouterLink>
      <RouterLink to="/recipes">Recipes</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>

<style scoped>
header {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 0.5rem;
}
nav {
  display: flex;
  gap: 0.5rem;
}
</style>
