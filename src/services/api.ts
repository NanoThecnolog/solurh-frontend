import { UserProps } from "@/@types/login";
import axios from "axios";
import { parseCookies } from "nookies";

const url = process.env.NEXT_PUBLIC_BACKEND_URL
if (!url) console.warn('URL do backend não carregada ou ausente.')
const apiKey = process.env.API_KEY
if (!apiKey) console.warn("Chave da api não carregada ou ausente")

export const api = axios.create({
    baseURL: url,
    withCredentials: true
})

api.interceptors.request.use(async (config) => {
    config.headers = config.headers ?? {}
    if (apiKey) {
        config.headers['key'] = apiKey
    }
    /*const { 'user': cookie } = parseCookies()
    if (cookie) {
        try {
            const user: UserProps = JSON.parse(cookie)
            if (user) config.headers.Authorization = `Bearer ${user.token}`
            else console.warn('User não encontrado ou não definido.')
        } catch (err) {
            console.warn('Erro ao fazer o parse do cookie do usuario', err)
        }
    }*/
    return config
}, (err) => {
    return Promise.reject(err)
})