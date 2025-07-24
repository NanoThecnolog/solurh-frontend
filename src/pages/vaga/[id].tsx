import { debug } from '@/utils/DebugLogger'
import styles from './styles.module.scss'
import { GetServerSideProps } from 'next'
import { jobsService } from '@/services/jobService'
import { JobsProps } from '@/@types/jobs'
import { useEffect, useState } from 'react'
import DOMPurify from 'dompurify'
import { Render } from '@/utils/utilities'
import Head from 'next/head'
import SendCurriculo from '@/components/ui/modals/EnvioCurriculo'

interface VagaProps {
    job: JobsProps | null
}
export default function Vaga({ job }: VagaProps) {
    const [htmlDesc, setHtmlDesc] = useState<string>('')
    const [modalVisible, setModalVisible] = useState<boolean>(false)
    const render = new Render()

    useEffect(() => {
        if (job) {
            const safeHtml = DOMPurify.sanitize(job.descricao)
            setHtmlDesc(safeHtml)
        }
    }, [job])
    return (
        <>
            <Head>
                <title>{`${job?.nome} - Solurh`}</title>
                <meta name="description" content={job?.descricao} />

                {/* Meta OpenGraph */}
                <meta property="og:title" content={`${job?.nome} | Solurh - Soluções em Recursos Humanos`} />
                <meta property="og:description" content={job?.descricao} />
                <meta property="og:image" content={`https://solurh.pro/img/Logomarca/4.png`} />
                <meta property="og:url" content={`https://solurh.pro/vaga/${job?.id}`} />


                {/* Meta Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`${job?.nome} | Solurh - Soluções em Recursos Humanos`} />
                <meta name="twitter:description" content={job?.descricao} />
                <meta name="twitter:image" content={`https://solurh.pro/img/Logomarca/4.png`} />
            </Head>
            {
                job && <main className={styles.main}>
                    <div className={styles.header}>
                        <div>
                            <h1 className={styles.title}>{job.nome}</h1>
                            {
                                //<p className={styles.company}>TechCorp</p>
                            }
                            <p className={styles.location}>{job.localizacao}</p>
                            <p className={styles.salary}>Salario: {render.salario(job.salario)}</p>
                        </div>
                        <button className={styles.applyButton} onClick={() => setModalVisible(true)}>Candidatar-se</button>
                    </div>
                    {
                        /*<div className={styles.badges}>
                            <span className={styles.badge}>Tempo integral</span>
                            <span className={styles.badge}>Remoto parcial</span>
                            <span className={styles.badge}>CLT</span>
                        </div>*/
                    }
                    <div className={styles.description} dangerouslySetInnerHTML={{ __html: htmlDesc }} />
                    {
                        /*<div className={styles.details}>
                        <div className={styles.section}>
                            <p className={styles['section-title']}>Responsabilidades</p>
                            <div className={styles['section-content']}>
                                <ul>
                                    <li>Desenvolver e manter aplicações web</li>
                                    <li>Colaborar com designers e analistas de produto</li>
                                    <li>Revisar código e participar de decisões técnicas</li>
                                </ul>
                            </div>
                        </div>

                        <div className={styles.section}>
                            <p className={styles['section-title']}>Requisitos</p>
                            <div className={styles['section-content']}>
                                <ul>
                                    <li>Experiência com React e Node.js</li>
                                    <li>Conhecimento de banco de dados SQL</li>
                                    <li>Familiaridade com metodologias ágeis</li>
                                </ul>
                            </div>
                        </div>
                    </div>*/
                    }
                    {modalVisible && job && <SendCurriculo vaga={job} func={setModalVisible} />}
                </main>
            }
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { id } = ctx.params!;
    debug.log('id da vaga', id)
    if (!id) return { props: { jobs: null } }
    try {
        const response = await jobsService.findOne(id as string)
        debug.log(response)
        return {
            props: {
                job: response
            }
        }
    } catch (err) {
        debug.error(err)
        return {
            props: {
                jobs: null
            }
        }
    }


}