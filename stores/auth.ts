import {defineStore} from 'pinia'

export const useAuthStore = defineStore('auth', {
    state: () => {
        return {
            token: useCookie('token'),
        }
    },

    actions: {
        async setToken(type: string, token: string) {
            this.token = type + ' ' + token
        },

        async login(payload: { email: string, password: string }) {
            try {
                const { data, error } = await $fetch('/api/login', {method: 'POST', body: payload})

                if (data?.session && data?.user) {
                    const token = data?.session?.access_token
                    const token_type = data?.session?.token_type
                    await this.setToken(token_type, token);
                }

                if (error?.code === 'invalid_credentials') {
                    return {}
                }

                return {}
            } catch (e) {
                console.error(e)
            }
        }
    }
})