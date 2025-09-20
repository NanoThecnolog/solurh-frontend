import Button from '@/components/ui/Button'
import styles from './styles.module.scss'
import { ScrollProps } from '@/@types/scrollProps'

export default function CTASection({ scrollFunc }: ScrollProps) {
    return (
        <article className={styles.container}>
            <section className={styles.sectionContainer}>
                <div className={styles.contentContainer}>
                    <h2 className={styles.title}>
                        Fale com uma consultora! <span className='stroke'>É gratuito.</span>
                    </h2>
                    <p className={styles.text}>Ela vai te explicar como funciona o processo e estudar seu caso individualmente para te
                        guiar para a melhor solução para sua contratação!​</p>
                    <div className={styles.buttonContainer}>
                        <Button text='Quero Descomplicar o meu RH' color='var(--black)' click={scrollFunc} />
                    </div>
                </div>
            </section>
        </article>
    )
}