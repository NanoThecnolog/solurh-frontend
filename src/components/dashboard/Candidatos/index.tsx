import { InscricaoProps } from '@/@types/inscricoes'
import styles from './styles.module.scss'
import { Render } from '@/utils/utilities'
import Link from 'next/link'
import {
    FaCalendarAlt,
    FaFileAlt,
    FaMapMarkerAlt,
    FaMoneyBillWave,
    FaStar,
    FaUserFriends,
} from 'react-icons/fa'

interface CandidatosProps {
    subs: InscricaoProps[]
    talentBank?: boolean
}

export default function Candidatos({ subs, talentBank = false }: CandidatosProps) {
    const url = 'https://solurh.pro/uploads/curriculos'
    const render = new Render()
    const getFileName = (path: string) => path.split('/').pop() || path

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.titleGroup}>
                    <div className={`${styles.iconBadge} ${talentBank ? styles.yellowBadge : styles.blueBadge}`}>
                        {talentBank ? <FaStar size={18} /> : <FaUserFriends size={18} />}
                    </div>
                    <div>
                        <h1>{talentBank ? 'Banco de talentos' : 'Candidatos'}</h1>
                        <p>
                            {talentBank
                                ? 'Currículos recebidos fora de vagas específicas.'
                                : 'Inscrições recebidas nas vagas publicadas.'}
                        </p>
                    </div>
                </div>
                <span className={styles.counter}>{subs.length}</span>
            </header>

            {subs.length === 0 ? (
                <div className={styles.empty}>
                    <FaFileAlt size={30} />
                    <p>
                        {talentBank
                            ? 'Nenhuma inscrição no banco de talentos.'
                            : 'Nenhuma inscrição encontrada.'}
                    </p>
                </div>
            ) : (
                <div className={styles.grid}>
                    {subs.map((inscricao) => (
                        <article key={inscricao.id} className={styles.card}>
                            <h3>{inscricao.vaga.nome}</h3>

                            {!talentBank && (
                                <div className={styles.chips}>
                                    <span>
                                        <FaMapMarkerAlt size={13} />
                                        {inscricao.vaga.localizacao || 'Sem local definido'}
                                    </span>
                                    <span>
                                        <FaMoneyBillWave size={13} />
                                        {render.salario(inscricao.vaga.salario)}
                                    </span>
                                </div>
                            )}

                            <div className={styles.footer}>
                                <span className={styles.date}>
                                    <FaCalendarAlt size={13} />
                                    Inscrição em {new Date(inscricao.createdAt).toLocaleDateString()}
                                </span>

                                <Link
                                    href={`${url}/${getFileName(inscricao.candidato.cv_path)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.cvLink}
                                >
                                    <FaFileAlt size={13} /> Ver currículo
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            )}
        </div>
    )
}
