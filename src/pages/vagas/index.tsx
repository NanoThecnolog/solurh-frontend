import Header from '@/components/Header'
import styles from './styles.module.scss'
import { useEffect, useState } from 'react'
import { jobsService } from '@/services/jobService'
import { debug } from '@/utils/DebugLogger'
import { JobsProps } from '@/@types/jobs'
import { Render } from '@/utils/utilities'
import DOMPurify from 'dompurify'
import Button from '@/components/ui/Button'
import SendCurriculo from '@/components/ui/modals/EnvioCurriculo'

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
    return (
        <>
            <main className={styles.mainContainer}>
                <article className={styles.articleContainer}>
                    <aside className={styles.asideContainer}>
                        {jobs.length > 0 && jobs.map((job) =>
                            <div key={job.id} className={styles.jobsContainer} onClick={() => setVaga(job)}>
                                <h4>{job.nome}</h4>
                                <h5>{job.localizacao}</h5>
                                <p>{render.salario(job.salario)}</p>
                            </div>
                        )}
                    </aside>
                    <section className={styles.sectionContainer}>
                        {vaga &&
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