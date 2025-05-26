import { GetServerSideProps } from 'next'
import styles from './styles.module.scss'
import { parseCookies } from 'nookies'
import { User } from '@/@types/login'
import { debug } from '@/utils/DebugLogger'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import { clientCookie } from '@/services/cookieManager'
import Geral from '@/components/dashboard/Geral'
import { jobsService } from '@/services/jobService'
import { JobsProps } from '@/@types/jobs'
import Vagas from '@/components/dashboard/Vagas'

interface DashProps {
    user: User
    jobs: JobsProps[]
}

export default function Dashboard({ user, jobs }: DashProps) {
    const router = useRouter()
    const [componentToRender, setComponentToRender] = useState('a')

    const changeComponent = (value: string) => {
        setComponentToRender(value)
    }
    const renderComponent = () => {
        if (componentToRender === 'a') {
            return <Geral vagas={jobs} />
        }
        if (componentToRender === 'b') {
            return <Vagas vagas={jobs} />
        }
        if (componentToRender === 'c') { }
    }

    const handleLogout = async () => {
        try {
            const response = await axios.get(`/api/user/logout`)
            const data = response.data
            clientCookie.removeCookie('user')
            toast.success(data.message)
            router.push('/')
        } catch (err) {
            debug.log('Erro ao realizar logout', err)
        }
    }

    return (
        <>
            <main className={styles.main}>
                <div>Olá, {user.nome}! Essa é a página de dashboard!</div>
                <article className={styles.container}>
                    <aside className={styles.menu}>
                        <ul>
                            <li
                                onClick={() => changeComponent('a')}
                            >início</li>
                            <li
                                onClick={() => changeComponent('b')}
                            >vagas</li>
                            <li
                                onClick={() => changeComponent('c')}
                            >candidatos</li>
                            <li
                                onClick={handleLogout}
                            >sair</li>
                        </ul>
                    </aside>
                    <section className={styles.content}>
                        sessão com os conteúdos do menu
                        {renderComponent()}
                    </section>
                </article>
            </main>
        </>
    )
}
export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { token, user } = parseCookies(ctx)

    if (!token || !user) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }
    const vagas = await jobsService.findJobs()

    /*
    vagas .post => criar vaga
    vagas .get => buscar todas
    vagas/:id .get => buscar vaga pelo id
    vagas/:id .put => edita vaga pelo id
    vagas/:id .delete => remove vaga pelo id
    */

    return {
        props: {
            user: JSON.parse(user),
            jobs: vagas
        }
    }
}