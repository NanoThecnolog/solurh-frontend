import styles from './styles.module.scss'
import Button from '@/components/ui/Button'
import { FormEvent, useState } from 'react'
import axios from 'axios'
import { debug } from '@/utils/DebugLogger'
import { User } from '@/@types/login'
import { toast } from 'react-toastify'
import { clientCookie } from '@/services/cookieManager'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
    const router = useRouter()
    const [email, setEmail] = useState<string>('')
    const [pass, setPass] = useState<string>('')
    const [loading, setLoading] = useState(false)

    const handleLogin = async (e: FormEvent) => {
        e.preventDefault()
        if (loading) return
        setLoading(true)
        const credentials = { email, password: pass }
        debug.log(credentials)
        try {
            const response = await axios.post<{ message: string, data: User }>('http://localhost:4000/api/user/login', credentials)
            const data = response.data
            if (!data.data) {
                debug.log('Verifique a const data na funcao de login')
                toast.warning(data.message)
                return
            }
            clientCookie.setUserCookie(data.data)
            toast.success(data.message)
            router.push('/dashboard')
        } catch (err: unknown) {
            if (axios.isAxiosError(err)) {
                debug.log('Erro ao realizar login!', err)
                toast.error(err.response?.data?.message || 'Erro desconhecido ao fazer login')
            }
            else {
                debug.log('Erro inesperado ao realizar login!', err)
                toast.error('Erro inesperado ao fazer login')
            }

        } finally {
            setLoading(false)
        }
    }

    //fazer a requisição ao backend next. Rota: /api/user/login
    return (
        <>
            <main className={styles.container}>
                <section className={styles.sectionContainer}>
                    <img src="/img/Logomarca/horizontal-white.png" alt="" />
                    <form onSubmit={handleLogin} className={styles.formulario}>
                        <label htmlFor="email">
                            Email:
                            <input
                                type="text"
                                id='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </label>
                        <label htmlFor="pass">
                            Senha:
                            <input
                                type="password"
                                id='pass'
                                value={pass}
                                onChange={(e) => setPass(e.target.value)}
                            />
                        </label>
                        <Button type='submit' text='Acessar' width='100%' loading={loading} />
                    </form>
                </section>
            </main>
        </>
    )
}