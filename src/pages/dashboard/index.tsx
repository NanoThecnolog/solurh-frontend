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
import { Jobs, jobsService } from '@/services/jobService'
import { JobsProps } from '@/@types/jobs'
import Vagas from '@/components/dashboard/Vagas'
import { InscricaoProps } from '@/@types/inscricoes'
import Candidatos from '@/components/dashboard/Candidatos'
import SEO from '@/components/SEO'
import { TALENT_BANK_JOB_ID } from '@/utils/constants'
import {
    FaBriefcase,
    FaChartPie,
    FaSignOutAlt,
    FaStar,
    FaUserFriends,
} from 'react-icons/fa'
import { IconType } from 'react-icons'

interface DashProps {
    user: User
    jobs: JobsProps[]
    subs: InscricaoProps[]
}

type SectionKey = 'geral' | 'vagas' | 'candidatos' | 'talentos'

const sections: { key: SectionKey; label: string; icon: IconType }[] = [
    { key: 'geral', label: 'Início', icon: FaChartPie },
    { key: 'vagas', label: 'Vagas', icon: FaBriefcase },
    { key: 'candidatos', label: 'Candidatos', icon: FaUserFriends },
    { key: 'talentos', label: 'Banco de talentos', icon: FaStar },
]

export default function Dashboard({ user, jobs, subs }: DashProps) {
    const router = useRouter()
    const [activeSection, setActiveSection] = useState<SectionKey>('geral')

    const renderSection = () => {
        switch (activeSection) {
            case 'vagas':
                return <Vagas />
            case 'candidatos':
                return (
                    <Candidatos
                        subs={subs.filter((sub) => sub.vaga.id !== TALENT_BANK_JOB_ID)}
                    />
                )
            case 'talentos':
                return (
                    <Candidatos
                        subs={subs.filter((sub) => sub.vaga.id === TALENT_BANK_JOB_ID)}
                        talentBank
                    />
                )
            default:
                return <Geral vagas={jobs} subs={subs} />
        }
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
            <SEO title="Dashboard | Solurh - Soluções em Recursos Humanos" description="Painel administrativo" />
            <main className={styles.main}>
                <header className={styles.topbar}>
                    <div>
                        <p className={styles.eyebrow}>Painel administrativo</p>
                        <h1>Olá, {user?.nome}!</h1>
                    </div>
                    <div className={styles.userChip}>
                        <span className={styles.avatar}>{user?.nome?.charAt(0).toUpperCase()}</span>
                        <span>{user?.nome}</span>
                    </div>
                </header>

                <div className={styles.layout}>
                    <aside className={styles.sidebar}>
                        <ul className={styles.nav}>
                            {sections.map(({ key, label, icon: Icon }) => (
                                <li key={key}>
                                    <button
                                        type="button"
                                        className={`${styles.navItem} ${activeSection === key ? styles.active : ''}`}
                                        onClick={() => setActiveSection(key)}
                                    >
                                        <Icon size={18} />
                                        <span>{label}</span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <button type="button" className={styles.logout} onClick={handleLogout}>
                            <FaSignOutAlt size={18} />
                            <span>Sair</span>
                        </button>
                    </aside>

                    <section className={styles.content}>{renderSection()}</section>
                </div>
            </main>
        </>
    )
}
export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { token, user } = parseCookies(ctx)

    if (!token || !user) {
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            },
        }
    }
    const vagas = await jobsService.findJobs()

    const jobs = new Jobs(ctx)
    const subs: InscricaoProps[] = await jobs.getAllSubscriptions()
    //debug.log('Subs em getServerSideProps', subs)

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
            jobs: vagas,
            subs,
        },
    }
}
