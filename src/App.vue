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
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 1.25rem;
  border-bottom: 1px solid #2c2c31;
  background: #111114;
}

h2 {
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 0.04em;
}

nav {
  display: flex;
  gap: 0.6rem;
  align-items: center;
}

nav a {
  padding: 0.45rem 0.8rem;
  border: 1px solid #2c2c31;
  border-radius: 999px;
  color: #b3b3b8;
  background: transparent;
  transition: all 0.15s ease;
}

nav a:hover {
  border-color: #4a4a50;
  color: #f5f5f5;
}

nav a.router-link-active {
  background: #1d1d21;
  color: #f5f5f5;
}
</style>
