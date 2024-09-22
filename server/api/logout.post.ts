import useSupabase from "~/composables/use-supabase";

export default defineEventHandler(async () => {
    return await useSupabase().auth.signOut()
})