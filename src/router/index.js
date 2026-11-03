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
      component: Home,
    },
    {
      path: '/recipes',
      name: 'recipe',
      component: Recipes,
    },
    {
      path: '/recipes/:id',
      name: 'recipe-detail',
      component: RecipeDetail,
    },
    {
      path: '/not-found',
      name: 'not-found',
      component: NotFound,
    },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound },
  ],
})

export default router
