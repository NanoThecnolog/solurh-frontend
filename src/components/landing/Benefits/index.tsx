import Button from '@/components/ui/Button'
import styles from './styles.module.scss'

export default function Benefits() {


    const renderLogos = (quantidade: number) => {
        const logomarca: string[] = []
        for (let i = 0; i < quantidade; i++) {
            logomarca.push('LogoMarca')
        }
        return logomarca
    }
    return (
        <article className={styles.container}>
            <section className={styles.carouselContainer}>
                <div className={styles.carouselText}>
                    <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem illum est beatae quae! Magni, voluptatibus distinctio adipisci!</p>
                </div>
                <div className={`${styles.track} ${styles.trackLeft}`}>
                    {[...renderLogos(10), ...renderLogos(10)].map((logo, index) => (
                        <div className={styles.logoItem} key={`linha1-${index}`}>
                            {logo}
                        </div>
                    ))}
                </div>
                <div className={`${styles.track} ${styles.trackRight}`}>
                    {[...renderLogos(10), ...renderLogos(10)].map((logo, index) => (
                        <div className={styles.logoItem} key={`linha1-${index}`}>
                            {logo}
                        </div>
                    ))}
                </div>
            </section>
            <section className={styles.benefitsContainer}>
                <div className={styles.benefitsText}>
                    <h1>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit?
                    </h1>
                </div>
                <div className={styles.advantagesContainer}>
                    <div className={styles.left}>
                        <div>
                            <h3>Doloribus officiis aut doloremque corrupti.</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam culpa labore modi fuga ea veritatis.
                            </p>
                        </div>
                        <div>
                            <h3>Doloribus officiis aut doloremque corrupti.</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam culpa labore modi fuga ea veritatis.
                            </p>
                        </div>
                        <div>
                            <h3>Doloribus officiis aut doloremque corrupti.</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam culpa labore modi fuga ea veritatis.
                            </p>
                        </div>
                        <div>
                            <h3>Doloribus officiis aut doloremque corrupti.</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam culpa labore modi fuga ea veritatis.
                            </p>
                        </div>
                        <Button text='Solicitar Demonstração' color='var(--black)' />
                    </div>
                    <div className={styles.right}>
                        <div className={styles.demonstration}>Imagem</div>
                    </div>
                </div>
            </section>
        </article>
    )
}