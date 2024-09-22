import {defineStore} from 'pinia'
import AuthService from "~/services/api/AuthService";

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
            const {token, token_type, error} = await (new AuthService()).login(payload);

            if (token_type && token) {
                await this.setToken(token_type, token)
            }

            if (error) return error;
        }
    }
})