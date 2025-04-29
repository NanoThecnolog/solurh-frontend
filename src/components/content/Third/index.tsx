import Button from '@/components/ui/Button'
import styles from './styles.module.scss'

export default function ThirdContent() {
    return (
        <section className={styles.container}>
            <div className={styles.imageContainer}>
                <img src="/img/5-no-bg.png" alt="banner" />
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.content}>
                    <div>
                        <h1>
                            Solurh Oportunidades
                        </h1>
                    </div>
                    <div>
                        <h2>
                            Não perca nenhuma oportunidade! Encontre sua vaga.
                        </h2>
                    </div>
                    <div>
                        <h3>
                            Envie seu currículo para se candidatar!
                        </h3>
                    </div>
                    <div>
                        <Button text='Encontre sua vaga' width='240px' />
                    </div>
                </div>
                <div className={styles.content}>
                    <div>
                        <h1>
                            Para Empresas
                        </h1>
                    </div>
                    <div>
                        <h2>
                            Contrate com agilidade e segurança
                        </h2>
                    </div>
                    <div>
                        <h4>
                            Somos especialistas em atrair talentos...bla bla bla buscar um texto do site antigo...
                        </h4>
                    </div>
                    <div>
                        <Button text='Soluções para Empresas' width='240px' />
                    </div>
                </div>
            </div>
        </section>
    )
}