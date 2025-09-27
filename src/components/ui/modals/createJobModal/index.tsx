import styles from './styles.module.scss'
import { UpdateJobProps } from '@/@types/jobs'
import Button from '../../Button'
import { IoClose } from 'react-icons/io5'
import { useState } from 'react'
import Editor from '@/components/TextEditor'
import { debug } from '@/utils/DebugLogger'
import { toast } from 'react-toastify'

interface ModalProps {
    createJob: (data: UpdateJobProps) => void
    setVisible: (value: boolean) => void
}

export default function CreateJobModal({ setVisible, createJob }: ModalProps) {
    const [data, setData] = useState<UpdateJobProps>({
        nome: '',
        localizacao: '',
        descricao: '',
        salario: undefined,
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        debug.log("data na rota de criar vaga", data)
        let salario = data.salario ?? 0
        if (typeof salario !== "number" || isNaN(salario) || salario < 0) {
            toast.error("Salário deve ser um número válido.")
            return
        }
        createJob({ ...data, salario })
        setVisible(false)
    }

    return (
        <section className={styles.container}>
            <div className={styles.modal}>
                <header className={styles.header}>
                    <h2>Cadastro de Vaga</h2>
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
                            value={data.salario ?? ""}
                            onChange={(e) => setData((prev) => ({ ...prev, salario: parseFloat(e.target.value) }))}
                            placeholder="Digite o salário"
                        />
                    </label>

                    <label htmlFor="description">
                        <span>Descrição</span>
                        <Editor changeDescription={(desc) => setData(prev => ({ ...prev, descricao: desc }))} />
                    </label>

                    <div className={styles.actions}>
                        <Button type="submit" text="Cadastrar" backgroundColor="#1c76dd" color="white" />
                    </div>
                </form>
            </div>
        </section>
    )
}
