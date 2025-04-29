import Button from '@/components/ui/Button'
import styles from './styles.module.scss'

export default function PrimaryContent() {
    return (
        <section className={styles.container}>
            <div className={styles.box}>
                <div className={styles.textContainer}>
                    <h1>SoluRH</h1>
                    <h2>Especialistas em Transformar potencial humano em resultados excepcionais.</h2>
                    <p>A sua Consultoria de Recursos Humanos com soluções completas para atender as necessidades de empresas e profissionais.</p>
                    <div className={styles.buttonContainer}>
                        <Button text='Botão de ação' />
                    </div>
                </div>
            </div>
        </section>
    )
}