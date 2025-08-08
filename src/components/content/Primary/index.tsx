import Button from '@/components/ui/Button'
import styles from './styles.module.scss'
import { useRouter } from 'next/navigation'

export default function PrimaryContent() {
    const router = useRouter()
    const handleClick = () => {
        router.push('/company')
    }
    return (
        <section className={styles.container}>
            <div className={styles.box}>
                <div className={styles.textContainer}>
                    <div>
                        <img src="/img/Logomarca/horizontal-color.png" width={300} alt="banner" />
                    </div>
                    <h2>Especialistas em Transformar potencial humano em resultados excepcionais.</h2>
                    <p>A sua Consultoria de Recursos Humanos com soluções completas para atender as necessidades de empresas e profissionais.</p>
                    <div className={styles.buttonContainer}>
                        <Button text='Conheça nossos Serviços' click={handleClick} />
                    </div>
                </div>
            </div>
        </section>
    )
}