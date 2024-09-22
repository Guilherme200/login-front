export default defineEventHandler(async (event) => {
    const data = await readBody(event);

    const apiKey = process.env['SUPABASE_KEY'];
    const baseUrl = process.env['SUPABASE_URL'];

    return await $fetch(`${baseUrl}/auth/v1/token?grant_type=password`, {
        method: 'POST',
        headers: {
            'apikey': apiKey,
            'Content-Type': 'application/json',
        },
        body: data
    })
})