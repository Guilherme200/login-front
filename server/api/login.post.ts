import useSupabase from "~/composables/use-supabase";

export default defineEventHandler(async (event) => {
    const data = await readBody(event);
    return await useSupabase().auth.signInWithPassword(data);
})