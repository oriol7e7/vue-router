<script setup></script>

<template>
  <main>
    <h1>Benvinguts a FoodExplorer</h1>
    <p>Descobreix, explora i consulta delicioses receptes</p>
    <img
      src="https://imgs.search.brave.com/XDyPOmMsqJY8LnQtWJKIYPiyzMEJ2NTqMIbJKShSOqI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93ZXVy/LWNkbi5jYXJ0YS5t/ZW51L3N0b3JhZ2Uv/bWVkaWEvY29tcGFu/eV9nYWxsZXJ5LzY2/ODUwMzY3L2NvbnZl/cnNpb25zL2dhbGxl/cnlfdGh1bWJuYWls/LmpwZw"
      alt=""
    />
  </main>
</template>

<style scoped>
main {
  padding: 2rem 1.25rem;
}

h1 {
  margin-bottom: 0.5rem;
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.1;
}

p {
  margin-bottom: 1.25rem;
  color: #b3b3b8;
}

img {
  width: min(440px, 100%);
  height: 400px;
  object-fit: cover;
  border-radius: 4px;
  border: 1px solid #2c2c31;
  background: #151518;
}
</style>
