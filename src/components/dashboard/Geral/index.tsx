import { JobsProps } from '@/@types/jobs'
import styles from './styles.module.scss'
import { InscricaoProps, VagaProps } from '@/@types/inscricoes'
import { useMemo } from 'react'
import { INTERNAL_JOB_ID } from '@/utils/constants'
import { FaBriefcase, FaFileAlt, FaStar } from 'react-icons/fa'

interface GeralProps {
    vagas: JobsProps[],
    subs: InscricaoProps[]
}

export default function Geral({ vagas, subs }: GeralProps) {
    const totalVagas = vagas.filter((vaga) => vaga.id !== INTERNAL_JOB_ID).length

    const vagaDestaque = useMemo<{ vaga: VagaProps; total: number } | null>(() => {
        const count = new Map<string, { vaga: VagaProps; total: number }>()

        for (const inscricao of subs) {
            const atual = count.get(inscricao.vaga.id)
            if (atual) atual.total++
            else count.set(inscricao.vaga.id, { vaga: inscricao.vaga, total: 1 })
        }

        let destaque: { vaga: VagaProps; total: number } | null = null
        for (const entry of count.values()) {
            if (!destaque || entry.total > destaque.total) destaque = entry
        }
        return destaque
    }, [subs])

    return (
        <div className={styles.section}>
            <header className={styles.header}>
                <h1>Panorama geral</h1>
                <p>Acompanhe o desempenho das vagas e o volume de candidatos.</p>
            </header>

            {vagas.length === 0 ? (
                <div className={styles.empty}>
                    <FaBriefcase size={32} />
                    <p>Nenhuma vaga cadastrada até o momento.</p>
                </div>
            ) : (
                <div className={styles.cards}>
                    <article className={styles.card}>
                        <div className={`${styles.iconBadge} ${styles.blueBadge}`}>
                            <FaBriefcase size={20} />
                        </div>
                        <div className={styles.cardInfo}>
                            <span>Vagas cadastradas</span>
                            <strong className={styles.count}>{totalVagas}</strong>
                        </div>
                    </article>

                    <article className={styles.card}>
                        <div className={`${styles.iconBadge} ${styles.greenBadge}`}>
                            <FaFileAlt size={20} />
                        </div>
                        <div className={styles.cardInfo}>
                            <span>Currículos recebidos</span>
                            <strong className={styles.count}>{subs.length}</strong>
                        </div>
                    </article>

                    <article className={`${styles.card} ${styles.highlight}`}>
                        <div className={`${styles.iconBadge} ${styles.yellowBadge}`}>
                            <FaStar size={20} />
                        </div>
                        <div className={styles.cardInfo}>
                            <span>Vaga com mais candidatos</span>
                            <strong>{vagaDestaque?.vaga.nome || 'Nenhuma ainda'}</strong>
                            {vagaDestaque && (
                                <em>
                                    {vagaDestaque.total} candidato{vagaDestaque.total > 1 ? 's' : ''}
                                </em>
                            )}
                        </div>
                    </article>
                </div>
            )}
        </div>
    )
}
