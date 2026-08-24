import styles from './styles.module.scss'
import { useEffect, useState } from 'react'
import { jobsService } from '@/services/jobService'
import { debug } from '@/utils/DebugLogger'
import { JobsProps } from '@/@types/jobs'
import { Render } from '@/utils/utilities'
import DOMPurify from 'dompurify'
import Button from '@/components/ui/Button'
import SendCurriculo from '@/components/ui/modals/EnvioCurriculo'
import SEO from '@/components/SEO'
import { TALENT_BANK_JOB_ID } from '@/utils/constants'
import { FaBriefcase, FaMapMarkerAlt, FaMoneyBillWave } from 'react-icons/fa'

export default function Jobs() {
    const [jobs, setJobs] = useState<JobsProps[]>([])
    const [vaga, setVaga] = useState<JobsProps | null>(null)
    const [htmlDesc, setHtmlDesc] = useState('')
    const [modalVisible, setModalVisible] = useState(false)
    const render = new Render()

    const vagasPublicadas = jobs.filter((job) => job.id !== TALENT_BANK_JOB_ID)
    const vagaDetalhe =
        vaga && vaga.id !== TALENT_BANK_JOB_ID ? vaga : null

    useEffect(() => {
        if (jobs.length === 0 || vaga) return
        const primeiraPublicada = jobs.find((job) => job.id !== TALENT_BANK_JOB_ID)
        if (primeiraPublicada) setVaga(primeiraPublicada)
    }, [jobs, vaga])
    useEffect(() => {
        if (vaga) {
            const safeHtml = DOMPurify.sanitize(vaga.descricao)
            setHtmlDesc(safeHtml)
        }
    }, [vaga])

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await jobsService.findJobs()
                if (response && Array.isArray(response)) setJobs(response)
                debug.log(response)
            } catch (err) {
                debug.error(err)
            }
        }
        fetchJobs()
    }, [])

    const handleTalentBank = () => {
        const talentBank = jobs.find((job) => job.id === TALENT_BANK_JOB_ID)
        if (talentBank) setVaga(talentBank)

        setModalVisible(true)
    }

    return (
        <>
            <SEO
                title="Vagas | Solurh - Soluções em Recursos Humanos"
                description="Candidate-se hoje mesmo para a vaga que mais combina com seu perfil"
            />
            <main className={styles.main}>
                <section className={styles.hero}>
                    <div className={styles.heroContent}>
                        <p className={styles.heroEyebrow}>Não encontrou a vaga ideal?</p>
                        <h1>Envie seu currículo para nosso banco de talentos</h1>
                        <Button text="Enviar currículo" padding="20px" click={handleTalentBank} />
                    </div>
                </section>

                <section className={styles.listing}>
                    <header className={styles.header}>
                        <h2>Vagas disponíveis</h2>
                        <p>
                            {vagasPublicadas.length === 0
                                ? 'Nenhuma oportunidade aberta no momento.'
                                : `${vagasPublicadas.length} ${
                                      vagasPublicadas.length === 1 ? 'oportunidade aberta' : 'oportunidades abertas'
                                  } para você se candidatar.`}
                        </p>
                    </header>

                    <div className={styles.grid}>
                        <aside className={styles.jobsList}>
                            {vagasPublicadas.map((job) => (
                                <button
                                    type="button"
                                    key={job.id}
                                    className={`${styles.jobItem} ${vagaDetalhe?.id === job.id ? styles.selected : ''}`}
                                    onClick={() => setVaga(job)}
                                >
                                    <h3>{job.nome}</h3>
                                    <p>{render.salario(job.salario)}</p>
                                    <span>
                                        <FaMapMarkerAlt size={13} /> {job.localizacao}
                                    </span>
                                </button>
                            ))}

                            {vagasPublicadas.length === 0 && (
                                <p className={styles.empty}>
                                    Nenhuma vaga aberta no momento. Envie seu currículo pelo banco de talentos.
                                </p>
                            )}
                        </aside>

                        <section className={styles.detail}>
                            {vagaDetalhe ? (
                                <>
                                    <h2>{vagaDetalhe.nome}</h2>

                                    <div className={styles.metaGrid}>
                                        <span>
                                            <FaMapMarkerAlt size={14} /> {vagaDetalhe.localizacao}
                                        </span>
                                        <span>
                                            <FaMoneyBillWave size={14} /> {render.salario(vagaDetalhe.salario)}
                                        </span>
                                    </div>

                                    <div className={styles.description} dangerouslySetInnerHTML={{ __html: htmlDesc }} />

                                    <div className={styles.actions}>
                                        <Button text="Candidatar-se" click={() => setModalVisible(true)} />
                                    </div>
                                </>
                            ) : (
                                <div className={styles.placeholder}>
                                    <FaBriefcase size={36} />
                                    <p>Selecione uma vaga na lista para ver os detalhes.</p>
                                </div>
                            )}
                        </section>
                    </div>
                </section>

                {modalVisible && vaga && <SendCurriculo vaga={vaga} func={setModalVisible} />}
            </main>
        </>
    )
}
