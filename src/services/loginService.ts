import { destroyCookie } from "nookies"
import { BackendService } from "./backendService"

class LoginService extends BackendService {

    public async login(email: string, password: string): Promise<string | null> {
        if (!this.validateEmail(email)) {
            this.debug.log('Email inválido', email)
            return 'Email inválido!'
        }
        const validUser = await this.validateUser({ email, password })
        if (!validUser) {
            return 'Não foi possivel realizar login. Verifique email e senha.'
        }
        this.setUserCookie(validUser)
        this.success(`Olá ${validUser.user.nome}. Bem vindo(a)!`)
        this.debug.log("Login bem sucedido", validUser)

        return null
    }
    public logout() {
        destroyCookie(null, 'user')
    }
}

export const loginService = new LoginService()