import styles from './styles.module.scss'
import { JobsProps, UpdateJobProps } from '@/@types/jobs'
import Button from '../../Button'
import { IoClose } from 'react-icons/io5'
import { useState } from 'react'
import Editor from '@/components/TextEditor'
import { debug } from '@/utils/DebugLogger'

interface ModalProps {
    updateJob: (id: string, data: UpdateJobProps) => void
    setVisible: (value: boolean) => void
    job: JobsProps
}

export default function UpdateJobModal({ setVisible, updateJob, job }: ModalProps) {
    const [data, setData] = useState<UpdateJobProps>({
        nome: job.nome || "",
        localizacao: job.localizacao || '',
        descricao: job.descricao || '',
        salario: job.salario || 0,
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        debug.log("data na rota de editar vaga", data)
        updateJob(job.id, data)
        setVisible(false)
    }

    return (
        <section className={styles.container}>
            <div className={styles.modal}>
                <header className={styles.header}>
                    <h2>Editar Vaga</h2>
                    <IoClose className={styles.closeIcon} onClick={() => setVisible(false)} />
                </header>

                <form onSubmit={handleSubmit} className={styles.form}>
                    <label htmlFor="title">
                        <span>Título da Vaga</span>
                        <input
                            type="text"
                            id="title"
                            value={data.nome}
                            onChange={(e) => setData((prev) => ({ ...prev, nome: e.target.value }))}
                            placeholder="Digite o título da vaga"
                        />
                    </label>

                    <label htmlFor="local">
                        <span>Localização</span>
                        <input
                            type="text"
                            id="local"
                            value={data.localizacao}
                            onChange={(e) => setData((prev) => ({ ...prev, localizacao: e.target.value }))}
                            placeholder="Digite o local"
                        />
                    </label>

                    <label htmlFor="salary">
                        <span>Salário</span>
                        <input
                            type="number"
                            id="salary"
                            value={data.salario}
                            onChange={(e) => setData((prev) => ({ ...prev, salario: Number(e.target.value) }))}
                            placeholder="Digite o salário"
                        />
                    </label>

                    <label htmlFor="description">
                        <span>Descrição</span>
                        <Editor changeDescription={(desc) => setData(prev => ({ ...prev, descricao: desc }))} value={data.descricao} />
                    </label>

                    <div className={styles.actions}>
                        <Button type="button" text="cancelar" backgroundColor="#851d03ff" color="white" width='120px' click={() => setVisible(false)} />
                        <Button type="submit" text="Salvar" backgroundColor="#1c76dd" color="white" width='120px' />
                    </div>
                </form>
            </div>
        </section>
    )
}
