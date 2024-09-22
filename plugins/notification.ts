import Notifications from '@kyvg/vue3-notification'

export default defineNuxtPlugin((app) => {
    app.vueApp.use(Notifications)
})
