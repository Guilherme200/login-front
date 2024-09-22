export default class AuthService {
    async login(payload: {email: string, password: string}): Promise<{
        token?: string,
        token_type?: string,
        error?: string
    }> {
        try {
            const { data, error } = await $fetch('/api/login', {method: 'POST', body: payload})

            if (data?.session && data?.user) {
                return {
                    token: data?.session?.access_token,
                    token_type: data?.session?.token_type,
                }
            }

            if (error?.code === 'invalid_credentials') {
                return {
                    error: error.message,
                }
            }

            return {
                error: 'Invalid Credentials',
            }
        } catch (e) {
            console.error(e)
        }
    }
}