import { FormEvent } from 'react'
import styles from './styles.module.scss'
import { cargos } from '@/utils/variables'
import Button from '@/components/ui/Button'

export default function Hero() {

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        return
    }
    return (
        <article className={styles.container}>
            <section className={styles.sectionContainer}>
                <div className={styles.left}>
                    <h1>
                        Solurh
                    </h1>
                    <h2>
                        Não gaste seu tempo e dinheiro em <span className='stroke'>contratações erradas!</span>
                    </h2>
                    <p>
                        Te entregamos uma lista com os mais bem qualificados candidatos para a vaga, e se o profissional não se adaptar no período de experiência realizamos o processo novamente <span className='stroke'>sem custos adicionais!</span>
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
                            />
                        </label>
                        <label htmlFor="email">
                            <input
                                type="text"
                                id='email'
                                placeholder='E-mail Corporativo*'
                            />
                        </label>
                        <label htmlFor="number">
                            <input
                                type="text"
                                id='number'
                                placeholder='Numero de Telefone*'
                            />
                        </label>
                        <select name="" id="">
                            <option value="">Selecione seu Cargo*</option>
                            {cargos.map((cargo, index) =>
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