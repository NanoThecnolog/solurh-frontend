import { FormEvent, useState } from 'react'
import styles from './styles.module.scss'
import Button from '@/components/ui/Button'
import { formJobs } from '@/variables/formJobs'
import Image from 'next/image'
import { validator } from '@/services/Validator'
import { toast } from 'react-toastify'
import axios from 'axios'

interface HeroProps {
    sectionRef: React.RefObject<HTMLFormElement | null>
}

export default function Hero({ sectionRef }: HeroProps) {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [phone, setPhone] = useState<string>('')
    const [job, setJob] = useState<string>('')

    const webhook = 'https://hook.us2.make.com/cwf67xtkefj4pibdgfut2wcyvop4dedm'



    const handleSubmit = async (e: FormEvent): Promise<void> => {
        e.preventDefault()
        if (validator.email(email) && validator.phone(phone)) {
            try {
                const formData = new FormData()
                formData.append('name', name)
                formData.append('email', email)
                formData.append('phone', phone)
                formData.append('job', job)

                const response = await axios.post(webhook, formData, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                })
                const data = response.data
                console.log('dados da requisição', data)
                if (response.status === 200) {
                    toast.success("Formulário enviado com sucesso!");
                    setName("");
                    setEmail("");
                    setPhone("");
                    setJob("");
                } else toast.error('Erro ao enviar o formulário. Tente novamente.')

            } catch (err) {
                console.error('Erro ao enviar formulário:', err)
                toast.error('Falaha na conexão com o servidor do formulário. Tente novamente mais tarde.')
            }
        } else {
            console.log('campos mal preenchidos', name, email, phone, job)
            toast.error('Preencha os camos corretamente antes de enviar.')
        }
    }
    return (
        <article className={styles.container} ref={sectionRef}>
            <section className={styles.sectionContainer}>
                <div className={styles.left}>
                    <div className={styles.imageContainer}>
                        <Image src='/img/Logomarca/horizontal-white.png' alt='Logomarca SoluRH' fill />
                    </div>
                    <h1>
                        Não gaste seu tempo e dinheiro em <span className='stroke'>contratações erradas!</span>
                    </h1>
                    <p>
                        Atraímos os talentos certos para o seu negócio, com processos humanizados, ágeis e alinhados à cultura da empresa.
                    </p>
                </div>
                <div className={styles.right}>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.text}>
                            <h2>Direcionamento Gratuito</h2>
                            <p>Explique para um profissional seu problema que ele vai te direcionar gratuitamente para a melhor solução para seu caso.</p>
                        </div>
                        <label htmlFor="name">
                            <input
                                type="text"
                                id='name'
                                placeholder='Nome*'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </label>
                        <label htmlFor="email">
                            <input
                                type="text"
                                id='email'
                                placeholder='E-mail Corporativo*'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </label>
                        <label htmlFor="number">
                            <input
                                type="text"
                                id='number'
                                placeholder='Numero de Whatsapp Comunicável*'
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </label>
                        <select
                            value={job}
                            onChange={(e) => setJob(e.target.value)}
                        >
                            {formJobs.map((cargo, index) =>
                                <option
                                    key={cargo + index}
                                    value={cargo}
                                >
                                    {
                                        cargo
                                    }
                                </option>
                            )}
                        </select>
                        <div className={styles.privacy}>
                            <p>
                                Ao enviar este formulário, declaro que li e aceito a <strong>Política de Privacidade.</strong>
                            </p>
                        </div>
                        <div className={styles.buttonContainer}>
                            <Button
                                type='submit'
                                text='Solicitar Demonstração'
                                width='300px'
                                fontSize='1.3rem'
                                color='var(--black)'
                            />
                        </div>
                    </form>
                </div>
            </section>
        </article>
    )
}