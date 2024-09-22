import {defineStore} from 'pinia'
import AuthService from "~/services/api/AuthService";
import useNotify from "~/composables/use-notify";

export const useAuthStore = defineStore('auth', {
    state: () => {
        return {
            token: useCookie('token') || null,
        }
    },

    actions: {
        async setToken(type: string, token: string) {
            this.token = type + ' ' + token
        },

        async logout() {
            const {error} = await (new AuthService()).logout();

            if (error) {
                useNotify('error', 'Logout', 'Erro ao deslogar!')
            }

            this.token = null;
            useNotify('success', 'Logout', 'Deslogado com sucesso')
        },

        async login(payload: { email: string, password: string }) {
            const {token, token_type, error} = await (new AuthService()).login(payload);

            if (token_type && token) {
                await this.setToken(token_type, token)
                useNotify('success', 'Login', 'Realizado com sucesso!')
            }

            if (!!error) {
                useNotify('error', 'Login', 'Credenciais inválidas!')
            }
        }
    }
})