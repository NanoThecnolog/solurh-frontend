import { JobsProps, UpdateJobProps } from '@/@types/jobs'
import styles from './styles.module.scss'
import { Render } from '@/utils/utilities'
import { useEffect, useState } from 'react'
import Button from '@/components/ui/Button'
import axios from 'axios'
import { toast } from 'react-toastify'
import { debug } from '@/utils/DebugLogger'
import DOMPurify from 'dompurify'
import CreateJobModal from '@/components/ui/modals/createJobModal'
import UpdateJobModal from '@/components/ui/modals/updateJobModal'
import { TALENT_BANK_JOB_ID } from '@/utils/constants'
import {
    FaBriefcase,
    FaCalendarAlt,
    FaExternalLinkAlt,
    FaMapMarkerAlt,
    FaMoneyBillWave,
    FaPlus,
    FaUsers,
} from 'react-icons/fa'

const JOB_URL_BASE = 'https://solurh.pro/vaga'

export default function Vagas() {
    const render = new Render()
    const [jobToShow, setJobToShow] = useState('')
    const [listaVagas, setListaVagas] = useState<JobsProps[]>([])
    const [htmlDesc, setHtmlDesc] = useState<string>('')
    const [modalVisible, setModalVisible] = useState(false)
    const [editModal, setEditModal] = useState(false)
    const [vaga, setVaga] = useState<JobsProps | null>(null)

    const vagasPublicadas = listaVagas.filter((vaga) => vaga.id !== TALENT_BANK_JOB_ID)

    const refreshVagas = async () => {
        try {
            const response = await axios.get('/api/job/all')
            const data = response.data
            setListaVagas(data.request)
        } catch (err) {
            console.error('Erro ao fazer o update da vaga', err)
        }
    }

    const createVaga = async (data: UpdateJobProps) => {
        try {
            const response = await axios.post(`/api/job/create`, { data })
            debug.log(response)
            const dataResponse = response.data
            toast.success(`Vaga ${dataResponse.request.nome} criada com sucesso!`)
            setJobToShow('')
            refreshVagas()

        } catch (err) {
            console.error('Erro ao criar vaga', err)
            toast.error("Erro inesperado ao criar vaga. Tente novamente mais tarde ou entre em contato com o Desenvolvedor.")
            return
        }
    }
    const editVaga = async (id: string, data: UpdateJobProps) => {
        try {
            const response = await axios.put(`/api/job/update/${id}`, { data })
            const dataResponse = response.data
            toast.success(`Vaga ${dataResponse.request.nome} editada com sucesso!`)
            setJobToShow("")
            refreshVagas()
        } catch (err) {
            console.error("Erro ao atualizar vaga", err)
            toast.error("Erro inesperado ao atualizar vaga. Tente novamente mais tarde ou entre em contato com o Desenvolvedor.")
            return
        }
    }
    const removerVaga = async (id: string) => {
        try {
            const response = await axios.delete(`/api/job/remover/${id}`)
            debug.log('request para deletar vaga', response)
            toast.success(response.data.message)
            setJobToShow('')
            refreshVagas()
        } catch (err) {
            console.error('Erro ao remover vaga', err)
            toast.error("Erro inesperado ao remover vaga. Tente novamente mais tarde ou entre em contato com o Desenvolvedor.")
            return []
        }
    }

    useEffect(() => {
        if (vaga) {
            const safeHtml = DOMPurify.sanitize(vaga.descricao)
            setHtmlDesc(safeHtml)
        }
    }, [vaga])
    useEffect(() => {
        setVaga(listaVagas.find((item) => item.id === jobToShow) ?? null)
    }, [jobToShow, listaVagas])
    useEffect(() => {
        refreshVagas()
    }, [])

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div>
                    <h1>Vagas publicadas</h1>
                    <p>Gerencie as vagas e acompanhe os candidatos.</p>
                </div>
                <Button
                    text="Nova vaga"
                    click={() => setModalVisible(true)}
                    height="42px"
                    backgroundColor="var(--primary)"
                    color="var(--white)"
                    Svg={FaPlus}
                    svgSize={16}
                />
            </header>

            <div className={styles.body}>
                <aside className={styles.list}>
                    {vagasPublicadas.map((item) => (
                        <button
                            type="button"
                            key={item.id}
                            className={`${styles.listItem} ${jobToShow === item.id ? styles.selected : ''}`}
                            onClick={() => setJobToShow(item.id)}
                        >
                            <h4>{item.nome}</h4>
                            <p>
                                {render.salario(item.salario)} · {item.localizacao}
                            </p>
                        </button>
                    ))}

                    {vagasPublicadas.length === 0 && (
                        <p className={styles.emptyList}>Nenhuma vaga cadastrada.</p>
                    )}
                </aside>

                <section className={styles.detailArea}>
                    {vaga ? (
                        <article key={vaga.id} className={styles.detail}>
                            <div className={styles.detailHeader}>
                                <h3>{vaga.nome}</h3>
                                <a
                                    href={`${JOB_URL_BASE}/${vaga.id}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Ver página pública <FaExternalLinkAlt size={12} />
                                </a>
                            </div>

                            <div className={styles.metaGrid}>
                                <span className={styles.metaItem}>
                                    <FaMapMarkerAlt size={14} /> {vaga.localizacao}
                                </span>
                                <span className={styles.metaItem}>
                                    <FaMoneyBillWave size={14} /> {render.salario(vaga.salario)}
                                </span>
                                <span className={styles.metaItem}>
                                    <FaUsers size={14} />
                                    {vaga.inscricoes.length}{' '}
                                    {vaga.inscricoes.length === 1 ? 'candidato' : 'candidatos'}
                                </span>
                                <span className={styles.metaItem}>
                                    <FaCalendarAlt size={14} /> Criada em {render.dates(vaga.createdAt)}
                                </span>
                            </div>

                            <div className={styles.descricao} dangerouslySetInnerHTML={{ __html: htmlDesc }} />

                            <div className={styles.actions}>
                                <Button
                                    text="Editar vaga"
                                    click={() => setEditModal(true)}
                                    height="40px"
                                    backgroundColor="var(--primary)"
                                    color="var(--white)"
                                />
                                <Button
                                    text="Excluir"
                                    click={() => removerVaga(vaga.id)}
                                    height="40px"
                                    backgroundColor="var(--red)"
                                    color="var(--white)"
                                />
                            </div>
                        </article>
                    ) : (
                        <div className={styles.placeholder}>
                            <FaBriefcase size={36} />
                            <p>Selecione uma vaga na lista para ver os detalhes.</p>
                        </div>
                    )}
                </section>
            </div>

            {modalVisible && (
                <CreateJobModal createJob={createVaga} setVisible={setModalVisible} />
            )}
            {editModal && vaga && (
                <UpdateJobModal updateJob={editVaga} setVisible={setEditModal} job={vaga} />
            )}
        </div>
    )
}
