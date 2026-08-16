import { JobsProps } from '@/@types/jobs'
import styles from './styles.module.scss'
import Button from '../../Button'
import { debug } from '@/utils/DebugLogger'
import { Jobs } from '@/services/jobService'
import { FormEvent, useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
//import axios from 'axios'

interface SendProps {
    vaga: JobsProps
    func: (value: boolean) => void
}

export const config = {
    api: {
        bodyParser: false,
    },
}
export default function SendCurriculo({ vaga, func }: SendProps) {
    const [file, setFile] = useState<File | null>(null)
    const [loading, setLoading] = useState(false)

    const [email, setEmail] = useState('')
    /**
     * posso criar uma vaga chamada banco de talentos, deixar invisível nas paginas de vagas e no dashboard, para evitar edição, mostrar somente no menu de candidatos do dashboard
     */
    //console.log(vaga)

    const handleInscrition = async (e: FormEvent) => {
        e.preventDefault()

        if (!file) {
            debug.warn('Arquivo não enviado.')
            toast.warn('Por favor, selecione um arquivo antes de enviar.')
            return
        }

        try {
            setLoading(true)
            const data = { vagaId: vaga.id, file, email, name: vaga.nome }
            const jobService = new Jobs()
            const response = await jobService.createSubscription(data)
            if (!response) {
                toast.error('Erro ao cadastrar currículo. Tente novamente mais tarde!')
                return
            }
            const formData = new FormData()

            formData.append('file', data.file)
            formData.append('vagaName', data.name)
            formData.append('email', data.email)
            debug.log('Enviando email', data)

            const sendEmailNotification = await axios.post('/api/notification', formData)
            toast.info('Currículo enviado com sucesso!')
            debug.log('sendEmailNotification', sendEmailNotification)
            //debug.log(response)
            //const message: string = response.result.message
            func(false)
            //toast.success(message)
        } catch (err) {
            debug.log('Erro ao criar inscrição', err)
            toast.error('Erro interno ao cadastrar currículo. Tente novamente mais tarde!')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className={styles.modalContainer} onClick={() => func(false)}>
            <form className={styles.modal} onSubmit={handleInscrition} onClick={(e) => e.stopPropagation()}>
                <h3>Envie seu currículo!</h3>

                <p>Você está se candidatando à vaga de:</p>

                <h4>{vaga?.nome}</h4>

                <input
                    type="email"
                    id="email"
                    placeholder="Seu e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <input
                    type="file"
                    id="file"
                    accept=".pdf"
                    onChange={(e) => {
                        if (e.target.files?.length) {
                            setFile(e.target.files[0])
                        }
                    }}
                    required
                />

                <Button text="Enviar currículo" type="submit" width="100%" loading={loading} />
            </form>
        </div>
    )
}
