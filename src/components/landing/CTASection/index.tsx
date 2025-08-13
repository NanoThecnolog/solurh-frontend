import Button from '@/components/ui/Button'
import styles from './styles.module.scss'

export default function CTASection() {
    return (
        <article className={styles.container}>
            <section className={styles.sectionContainer}>
                <div className={styles.contentContainer}>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, sapiente. <strong>Harum eligendi reiciendis deleniti iure saepe!</strong>
                    </p>
                    <div className={styles.buttonContainer}>
                        <Button text='Quero Descomplicar o meu RH' color='var(--black)' />
                    </div>
                </div>
            </section>
        </article>
    )
}