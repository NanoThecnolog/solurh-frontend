import Button from '@/components/ui/Button'
import styles from './styles.module.scss'
import { useRouter } from 'next/navigation'

export default function ThirdContent() {
    const router = useRouter()
    const handleCandidatoClick = () => {
        router.push('/vagas')
    }
    const handleCompanyClick = () => {
        router.push('/company')
    }
    return (
        <section className={styles.container}>
            <div className={styles.imageContainer}>
                <img src="/img/terceira-sessao.png" alt="banner" />
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.content}>
                    <div>
                        <h1>
                            Banco de Talentos Solurh
                        </h1>
                    </div>
                    <div>
                        <h2>
                            Banco de Talentos Solurh
                            Estamos sempre em busca de bons profissionais.
                        </h2>
                    </div>
                    <div>
                        <h3>
                            Preencha o formulário e faça parte da nossa base para futuras seleções.
                        </h3>
                    </div>
                    <div>
                        <Button text='Enviar meu currículo' width='240px' click={handleCandidatoClick} />
                    </div>
                </div>
                <div className={styles.content}>
                    <div>
                        <h1>
                            Para Empresas que Valorizam Pessoas
                        </h1>
                    </div>
                    <div>
                        <h2>
                            Encontrar o talento certo exige mais do que currículos: exige estratégia, sensibilidade e experiência.
                        </h2>
                    </div>
                    <div>
                        <h4>
                            Na SoluRH, oferecemos soluções completas em atração de talentos, desenvolvidas sob medida para a realidade da sua empresa.
                        </h4>
                    </div>
                    <div>
                        <Button text='Soluções para Empresas' width='240px' click={handleCompanyClick} />
                    </div>
                </div>
            </div>
        </section>
    )
}