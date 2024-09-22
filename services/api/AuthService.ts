export default class AuthService {
    async login(payload: {email: string, password: string}): Promise<{
        token?: string,
        token_type?: string,
        error?: string|null
    }> {
        try {
            const { data } = await $fetch('/api/login', {method: 'POST', body: payload})

            if (data?.session && data?.user) {
                return {
                    token: data?.session?.access_token,
                    token_type: data?.session?.token_type,
                    error: null
                }
            }

            return {
                error: 'Invalid Credentials',
            }
        } catch (e) {
            console.error(e)
        }
    }

    async logout(): Promise<{error?: string|null}> {
        try {
            return await $fetch('/api/logout', {method: 'POST'})
        } catch (e) {
            console.error(e)
        }
    }
}