export default defineNuxtRouteMiddleware(() => {
  const authStore = useAuthStore()

  if (!authStore.token) {
    return navigateTo('/login')
  }
})
