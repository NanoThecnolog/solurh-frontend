import { destroyCookie } from "nookies"
import { BackendService } from "./backendService"
import { UserProps } from "@/@types/login"

export class LoginService extends BackendService {

    public async login(email: string, password: string): Promise<UserProps | null> {
        if (!this.validateEmail(email)) {
            this.debug.log('Email inválido', email)
            return null
        }
        const validUser = await this.validateUser({ email, password })
        if (!validUser) {
            return null
        }
        //this.setUserCookie(validUser)
        //this.debug.log(`Olá ${validUser.user.nome}. Bem vindo(a)!`)
        this.debug.log("Login bem sucedido", validUser)

        return validUser
    }

    public logout() {
        destroyCookie(null, 'user')
    }
}

export const loginService = new LoginService()