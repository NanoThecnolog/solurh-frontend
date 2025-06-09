import { JobsProps } from '@/@types/jobs'
import styles from './styles.module.scss'
import Button from '../../Button'
import { debug } from '@/utils/DebugLogger'
import { Jobs } from '@/services/jobService'
import { FormEvent, useState } from 'react'
import { toast } from 'react-toastify'
//import axios from 'axios'

interface SendProps {
    vaga: JobsProps
    func: (value: boolean) => void
}
export default function SendCurriculo({ vaga, func }: SendProps) {
    const [file, setFile] = useState<File | null>(null)

    const handleInscrition = async (e: FormEvent) => {
        e.preventDefault()
        if (!file) {
            debug.warn('Arquivo não enviado.')
            toast.warn('Por favor, seleciona um arquivo antes de enviar.')
            return
        }

        try {
            const data = { vagaId: vaga.id, file }
            const jobService = new Jobs()
            const response = await jobService.createSubscription(data)
            if (!response) {
                toast.error('Erro ao cadastrar currículo. Tente novamente mais tarde!')
                return
            }
            //debug.log(response)
            const message: string = response.result.message
            toast.success(message)
            func(false)
        } catch (err) {
            debug.log('Erro ao criar inscrição', err)
            toast.error('Erro interno ao cadastrar currículo. Tente novamente mais tarde!')
        }
    }

    return (
        <div className={styles.modalContainer} onClick={() => func(false)}>
            <form className={styles.modal} onSubmit={handleInscrition} onClick={(e) => e.stopPropagation()}>
                <h3>Envie seu currículo!</h3>
                <p>você está se candidatando a vaga de:</p>
                <h4>{vaga?.nome}</h4>
                <input type="file" id='file' accept=".pdf" onChange={(e) => {
                    if (e.target.files && e.target.files.length > 0) {
                        setFile(e.target.files[0])
                    }
                }} />
                {
                    //file && <p>Arquivo selecionado: {file.name}</p>
                }
                <Button text='Enviar' type='submit' />
            </form>
        </div>
    )
}