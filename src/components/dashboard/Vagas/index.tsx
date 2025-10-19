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

/*interface VagasProps {
    vagas: JobsProps[]
}*/

export default function Vagas(/*{ vagas }: VagasProps*/) {
    const render = new Render()
    const [jobToShow, setJobToShow] = useState('')
    const [listaVagas, setListaVagas] = useState<JobsProps[]>([])
    const [htmlDesc, setHtmlDesc] = useState<string>('')
    const [modalVisible, setModalVisible] = useState(false)
    const [editModal, setEditModal] = useState(false)
    const [vaga, setVaga] = useState<JobsProps | null>(null)

    const vagaToShow = () => {
        return render.vaga(listaVagas, jobToShow)
    }

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
            //debug.log("vagas antes de setar listavagas", vagas)
            setJobToShow('')
            refreshVagas()
            //router.refresh()
        } catch (err) {
            console.error('Erro ao remover vaga', err)
            toast.error("Erro inesperado ao remover vaga. Tente novamente mais tarde ou entre em contato com o Desenvolvedor.")
            return []
        }
    }

    const handleCreate = () => {
        setModalVisible(true)
    }


    /*useEffect(() => {
        if (vagas.length > 0) setListaVagas(vagas)
        //const vaga = vagaToShow()
        //setVaga(vaga)
    }, [vagas])*/

    useEffect(() => {
        if (vaga) {
            const safeHtml = DOMPurify.sanitize(vaga.descricao)
            setHtmlDesc(safeHtml)
        }
    }, [vaga])
    useEffect(() => {
        setVaga(vagaToShow())
    }, [jobToShow, listaVagas])
    useEffect(() => {
        refreshVagas()
    }, [])

    return (
        <>
            <div className={styles.container}>
                <aside className={styles.listVagas}>
                    {listaVagas.map((vaga) => (
                        <div
                            key={vaga.id}
                            className={styles.listItem}
                            onClick={() => setJobToShow(vaga.id)}
                        >
                            <h4>{vaga.nome}</h4>
                            <p>
                                Salário: {render.salario(vaga.salario)} — {vaga.localizacao}
                            </p>
                        </div>
                    ))}
                </aside>

                <section className={styles.vagaContainer}>
                    {vaga && (
                        <div key={vaga.id} className={styles.vaga}>
                            <h3>{vaga.nome}</h3>
                            <span className={styles.local}>{vaga.localizacao}</span>
                            <span className={styles.salario}>Salário: {render.salario(vaga.salario)}</span>

                            <div className={styles.descricao} dangerouslySetInnerHTML={{ __html: htmlDesc }} />

                            <span className={styles.data}>Criada em: {render.dates(vaga.createdAt)}</span>
                            <span className={styles.inscritos}>Candidatos: {vaga.inscricoes.length}</span>
                            <span>link: https://solurh.pro/vaga/{vaga.id}</span>

                            <div className={styles.buttonContainer}>
                                <Button
                                    click={() => removerVaga(vaga.id)}
                                    text="Excluir"
                                    height="36px"
                                    backgroundColor="red"
                                    color="white"
                                />
                                <Button
                                    click={() => setEditModal(true)}
                                    text="Editar Vaga"
                                    height="36px"
                                    backgroundColor="blue"
                                    color="white"
                                />

                            </div>
                        </div>
                    )}
                </section>
                {modalVisible && (
                    <CreateJobModal createJob={createVaga} setVisible={setModalVisible} />
                )}
                {editModal && vaga && (
                    <UpdateJobModal updateJob={editVaga} setVisible={setEditModal} job={vaga} />
                )}
            </div>
            <section>
                <Button text='Adicionar' click={handleCreate} color='var(--white)' width='150px' backgroundColor='var(--blue)' />
            </section>
        </>


    )
}