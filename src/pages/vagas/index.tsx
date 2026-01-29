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

export default function Jobs() {
    const [jobs, setJobs] = useState<JobsProps[]>([])
    const [vaga, setVaga] = useState<JobsProps | null>(null)
    const [htmlDesc, setHtmlDesc] = useState('')
    const [modalVisible, setModalVisible] = useState(false)
    //debug.log(jobs)
    const render = new Render()

    useEffect(() => {
        if (jobs.length !== 0) setVaga(jobs[0])
    }, [jobs])
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
        //busca pela vaga de banco de talentos
        const talentBank = jobs.find(vaga => vaga.id === "ccc3b486-9da3-4af3-b702-6e422d343287")
        if (talentBank) setVaga(talentBank)

        setModalVisible(true)
    }
    return (
        <>
            <SEO
                title="Vagas | Solurh - Soluções em Recursos Humanos"
                description="Candidate-se hoje mesmo para a vaga que mais combina com seu perfil"
            />
            <main className={styles.mainContainer}>
                <section className={styles.talentsContainer}>
                    <div className={styles.text}>
                        {
                            //<h1>Banco de Talentos</h1>
                        }
                        <h1>Envie seu currículo para nosso banco de talentos</h1>
                    </div>
                    <Button text='Enviar Currículo' padding='20px' click={handleTalentBank} />
                </section>
                <section className={styles.titleContainer}>
                    <h1>Vagas Disponiveis</h1>
                </section>

                <article className={styles.articleContainer}>
                    {
                        //<h3>Lista de Vagas</h3>
                    }
                    <aside className={styles.asideContainer}>
                        {jobs.length > 0 && jobs.map((job) => {
                            //vaga equivalente ao banco de talentos
                            if (job.id === "ccc3b486-9da3-4af3-b702-6e422d343287") return
                            return <div key={job.id} className={styles.jobsContainer} onClick={() => setVaga(job)}>
                                <h4>{job.nome}</h4>
                                <h5>{job.localizacao}</h5>
                                <p>{render.salario(job.salario)}</p>
                            </div>
                        }
                        )}
                    </aside>
                    <section className={styles.sectionContainer}>
                        {vaga && vaga.id !== "ccc3b486-9da3-4af3-b702-6e422d343287" &&
                            <>
                                <div>
                                    <h1>{vaga.nome}</h1>
                                </div>
                                <div>
                                    <span>
                                        Local da vaga: {vaga.localizacao}
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        Salário: {render.salario(vaga.salario)}
                                    </span>
                                </div>
                                <div className={styles.descriptionContainer}>
                                    <p dangerouslySetInnerHTML={{ __html: htmlDesc }}></p>
                                </div>
                                <div className={styles.buttonContainer}>
                                    <Button text='candidatar-se' click={() => setModalVisible(true)} />
                                </div>
                            </>
                        }
                    </section>
                </article>
                {modalVisible && vaga && <SendCurriculo vaga={vaga} func={setModalVisible} />}
            </main>
        </>
    )
}