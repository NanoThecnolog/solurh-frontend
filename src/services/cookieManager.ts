import { User } from "@/@types/login"
import { destroyCookie, parseCookies, setCookie } from "nookies"

class ClientCookieManager {
    setUserCookie(user: User) {
        this.removeCookie('user')
        setCookie(null, 'user', JSON.stringify(user))
    }
    getUserCookie() {
        const cookies = parseCookies()
        const user: User = JSON.parse(cookies.user)
        return user
    }
    removeCookie(cookieName: string) {
        return destroyCookie(null, cookieName)
    }
}
export const clientCookie = new ClientCookieManager()