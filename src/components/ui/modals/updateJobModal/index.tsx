/*import styles from './styles.module.scss'
import { UpdateJobProps } from '@/@types/jobs'
import Button from '../../Button'
import { IoClose } from 'react-icons/io5'
import { useState } from 'react'
import Editor from '@/components/TextEditor'

interface ModalProps {
    updateJob: (data: UpdateJobProps) => void
    setVisible: (value: boolean) => void
}

export default function UpdateJobModal({ setVisible }: ModalProps) {
    const [data, setData] = useState<UpdateJobProps>({
        nome: '',
        localizacao: '',
        descricao: '',
        salario: 0
    })
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    return (
        <section className={styles.container}>
            <div>
                <IoClose onClick={() => setVisible(false)} />
                <form onSubmit={handleSubmit} className={styles.form}>
                    <label htmlFor="title">
                        <h4>Título da Vaga</h4>
                        <input
                            type="text"
                            id="title"
                            value={data.nome}
                            onChange={(e) => setData(prev => ({ ...prev, nome: e.target.value }))}
                            placeholder='digite titulo da vaga'
                        />
                    </label>
                    <label htmlFor='local'>
                        <h4>Local</h4>
                        <input
                            type="text"
                            id="local"
                            placeholder='digite local da vaga'
                            onChange={(e) => setData(prev => ({ ...prev, localizacao: e.target.value }))}
                            aria-placeholder='Digite o local da vaga'
                        />
                    </label>
                    <label htmlFor='salary'>
                        <h4>Salário</h4>
                        <input type="text" id='salary' placeholder='digite salario da vaga' />
                    </label>
                    <label htmlFor='description'>
                        {
                            <Editor />
                        }
                    </label>
                    <div>
                        <Button type='submit' text='Atualizar' />
                    </div>
                </form>
            </div>
        </section>
    )
}*/

import styles from './styles.module.scss'
import { UpdateJobProps } from '@/@types/jobs'
import Button from '../../Button'
import { IoClose } from 'react-icons/io5'
import { useState } from 'react'
import Editor from '@/components/TextEditor'

interface ModalProps {
    updateJob: (data: UpdateJobProps) => void
    setVisible: (value: boolean) => void
}

export default function UpdateJobModal({ setVisible, updateJob }: ModalProps) {
    const [data, setData] = useState<UpdateJobProps>({
        nome: '',
        localizacao: '',
        descricao: '',
        salario: 0,
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        updateJob(data)
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
                            value={data.salario}
                            onChange={(e) => setData((prev) => ({ ...prev, salario: Number(e.target.value) }))}
                            placeholder="Digite o salário"
                        />
                    </label>

                    <label htmlFor="description">
                        <span>Descrição</span>
                        <Editor />
                    </label>

                    <div className={styles.actions}>
                        <Button type="submit" text="Cadastrar" backgroundColor="#1c76dd" color="white" />
                    </div>
                </form>
            </div>
        </section>
    )
}
