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
                        Logomarca
                    </h1>
                    <h2>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda rerum maxime molestiae cupiditate nemo, iure inventore consectetur similique. Odio hic et voluptas recusandae ad autem dignissimos nesciunt doloremque perferendis quia.
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dicta, quasi soluta culpa molestiae beatae! Eaque voluptatibus consequuntur, culpa dolore harum ipsum dignissimos facilis, id unde maxime placeat molestiae quis!
                    </p>
                </div>
                <div className={styles.right}>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.text}>
                            <h2>Lorem ipsum dolor dolorim</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
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