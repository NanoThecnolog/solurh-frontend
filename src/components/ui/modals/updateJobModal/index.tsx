import styles from './styles.module.scss'
import { UpdateJobProps } from '@/@types/jobs'
import Button from '../../Button'
import { IoClose } from 'react-icons/io5'
import { FormEvent, useState } from 'react'
import Editor from '@/components/TextEditor'

interface ModalProps {
    updateJob: (data: UpdateJobProps) => void
    setVisible: (value: boolean) => void
}

export default function UpdateJobModal({ updateJob, setVisible }: ModalProps) {
    const [data, setData] = useState<UpdateJobProps>({
        nome: '',
        localizacao: '',
        descricao: '',
        salario: 0
    })
    const handleSubmit = (e: any) => {
        e.preventDefault()


    }
    return (
        <section className={styles.container}>
            <div>
                <IoClose onClick={() => setVisible(false)} />
                <form action={handleSubmit} className={styles.form}>
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
                        <Editor />
                    </label>
                    <div>
                        <Button type='submit' text='Atualizar' />
                    </div>
                </form>
            </div>
        </section>
    )
}