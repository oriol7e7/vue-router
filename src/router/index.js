import Home from '@/views/Home.vue'
import NotFound from '@/views/NotFound.vue'
import RecipeDetail from '@/views/RecipeDetail.vue'
import Recipes from '@/views/Recipes.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/recipes',
      name: 'recipe',
      component: () => import('../views/Recipes.vue'),
    },
    {
      path: '/recipes/:id',
      name: 'recipe-detail',
      component: () => import('../views/RecipeDetail.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFound.vue'),
    },
  ],
})

export default router
