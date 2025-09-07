import { FormEvent, useState } from 'react'
import styles from './styles.module.scss'
import Button from '@/components/ui/Button'
import { formJobs } from '@/variables/formJobs'
import Image from 'next/image'
import { validator } from '@/services/Validator'
import { toast } from 'react-toastify'

export default function Hero() {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [phone, setPhone] = useState<string>('')
    const [job, setJob] = useState<string>('')



    const handleSubmit = (e: FormEvent): void => {
        e.preventDefault()
        if (validator.email(email) && validator.phone(phone) && job) {


        } else {
            console.log('Email inválido')
            toast.error('Email Inválido. Use outro email')
        }
        return
    }
    return (
        <article className={styles.container}>
            <section className={styles.sectionContainer}>
                <div className={styles.left}>
                    <div className={styles.imageContainer}>
                        <Image src='/img/Logomarca/horizontal-white.png' alt='Logomarca SoluRH' fill />
                    </div>
                    <h1>
                        Não gaste seu tempo e dinheiro em <span className='stroke'>contratações erradas!</span>
                    </h1>
                    <p>
                        Te entregamos uma lista com os mais bem <span className='stroke'>qualificados candidatos</span> para a vaga, e se o profissional não se adaptar no período de experiência <span className='stroke'>realizamos o processo novamente sem custos adicionais!</span>
                    </p>
                </div>
                <div className={styles.right}>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.text}>
                            <h2>Planejamento Gratuito</h2>
                            <p>Faça <span className='stroke'>gratuitamente</span> um planejamento completo com todas as etapas para seu recrutamento
                                feito por nossas coordenadoras de Human Resources apenas respondendo um formulário
                                simples e direto (não há vínculo com serviço)</p>
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
                                placeholder='Numero de Telefone*'
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </label>
                        <select
                            value={job}
                            onChange={(e) => setJob(e.target.value)}
                        >
                            <option value="">Selecione seu Cargo*</option>
                            {formJobs.map((cargo, index) =>
                                <option
                                    key={cargo + index}
                                    value={cargo}
                                >
                                    {cargo}
                                </option>
                            )}
                        </select>
                        <div className={styles.privacy}>
                            <p>Ao enviar este formulário, declaro que li e aceito a <strong>Política de Privacidade.</strong></p>
                        </div>
                        <div className={styles.buttonContainer}>
                            <Button text='Solicitar Demonstração' width='300px' fontSize='1.3rem' color='var(--black)' />
                        </div>
                    </form>
                </div>
            </section>
        </article>
    )
}