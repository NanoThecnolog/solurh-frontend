import { JobsProps, UpdateJobProps } from '@/@types/jobs'
import styles from './styles.module.scss'
import { Render } from '@/utils/utilities'
import { useEffect, useState } from 'react'
import Button from '@/components/ui/Button'
import axios from 'axios'
import { toast } from 'react-toastify'
import { debug } from '@/utils/DebugLogger'
import DOMPurify from 'dompurify'
import UpdateJobModal from '@/components/ui/modals/updateJobModal'

interface VagasProps {
    vagas: JobsProps[]
}

export default function Vagas({ vagas }: VagasProps) {
    //const router = useRouter()
    const render = new Render()
    const [jobToShow, setJobToShow] = useState('')
    const [listaVagas, setListaVagas] = useState<JobsProps[]>([])
    const [htmlDesc, setHtmlDesc] = useState<string>('')
    const [modalVisible, setModalVisible] = useState(false)

    const vagaToShow = () => {
        return render.vaga(vagas, jobToShow)
    }
    const vaga = vagaToShow()
    const refreshVagas = async () => {
        try {
            const response = await axios.get('/api/job/all')
            const data = response.data
            return data
        } catch (err) {
            debug.log('Erro ao fazer o update da vaga', err)
        }
    }

    const removerVaga = async (id: string) => {
        try {
            const response = await axios.delete(`/api/job/remover/${id}`)
            debug.log('request para deletar vaga', response)
            toast.success(response.data.message)
            setJobToShow('')
            const vagas = await refreshVagas()
            debug.log("vagas antes de setar listavagas", vagas)
            setListaVagas(vagas.request)
            //router.refresh()
        } catch (err) {
            debug.error('Erro ao remover vaga', err)
            return []
        }
    }
    const updateVaga = async (data: UpdateJobProps) => {
        try {
            const response = await axios.put(`/api/job/update/${vaga?.id}`, { data })
            debug.log(response)
        } catch (err) {
            debug.error('Erro ao atualizar vaga', err)
            return
        }
    }
    const handleUpdate = () => {
        setModalVisible(true)
    }


    useEffect(() => {
        if (vagas.length > 0) setListaVagas(vagas)
    }, [vagas])

    useEffect(() => {
        if (vaga) {
            const safeHtml = DOMPurify.sanitize(vaga.descricao)
            setHtmlDesc(safeHtml)
        }
    }, [vaga])

    return (
        <div className={styles.container}>
            <aside className={styles.listVagas}>
                {listaVagas.map(vaga =>
                    <div key={vaga.id} className={styles.listItem} onClick={() => setJobToShow(vaga.id)}>
                        <h4>{vaga.nome}</h4>
                        <p>Salário: {render.salario(vaga.salario)} - {vaga.localizacao}</p>
                    </div>
                )}
            </aside>
            <section className={styles.vagaContainer}>
                {vaga ?
                    <div key={vaga.id} className={styles.vaga}>
                        <h3>{vaga.nome}</h3>
                        <p>{vaga.localizacao}</p>
                        <p>Salário: {render.salario(vaga.salario)}</p>
                        <p dangerouslySetInnerHTML={{ __html: htmlDesc }}></p>
                        <p>Vaga criada em: {render.dates(vaga.createdAt)}</p>
                        <p>Candidatos inscritos: {vaga.inscricoes.length}</p>
                        <div className={styles.buttonContainer}>
                            <Button click={handleUpdate} text='Atualizar' height='30px' backgroundColor='#1c76dd' color='white' />
                            <Button click={() => removerVaga(vaga.id)} text='Excluir' height='30px' backgroundColor='red' color='white' />
                        </div>
                    </div>
                    : null}
            </section>
            {
                modalVisible && <UpdateJobModal updateJob={updateVaga} setVisible={setModalVisible} />
            }
        </div>
    )
}