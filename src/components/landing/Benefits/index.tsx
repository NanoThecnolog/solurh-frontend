import Button from '@/components/ui/Button'
import styles from './styles.module.scss'

export default function Benefits() {


    const renderLogos = (quantidade: number) => {
        const logomarca: number[] = []
        for (let i = 1; i <= quantidade; i++) {
            logomarca.push(i)
        }
        return logomarca
    }
    return (
        <article className={styles.container}>
            <section className={styles.carouselContainer}>
                <div className={styles.carouselText}>
                    <h1>O sucesso não vem do trabalho, mas sim das <span className='stroke'>pessoas</span> que o executam!</h1>
                    <p>Todas essas empresas cresceram porque colocaram as pessoas certas nas melhores
                        posições, <span className='stroke'>e isso é o que importa!</span></p>
                </div>
                <div className={`${styles.track} ${styles.trackLeft}`}>
                    {renderLogos(16).map((logo, index) => (
                        <div className={styles.logoItem} key={`linha1-${index}`}>
                            <img src={`/img/marcas/${logo}.png`} alt={`logo${index}`} width={140} />
                        </div>
                    ))}
                </div>
                <div className={`${styles.track} ${styles.trackRight}`}>
                    {renderLogos(16).map((logo, index) => (
                        <div className={styles.logoItem} key={`linha1-${index}`}>
                            <img src={`/img/marcas/${logo}.png`} alt={`logo${index}`} width={140} />
                        </div>
                    ))}
                </div>
            </section>
            <section className={styles.benefitsContainer}>
                <div className={styles.benefitsText}>
                    <h1>
                        O que eu ganho com isso?
                    </h1>
                </div>
                <div className={styles.advantagesContainer}>
                    <div className={styles.left}>
                        <div className={styles.leftItem}>
                            <h3>Planejamento Completo (Gratuito)</h3>
                            <p>
                                Responda um simples formulário e receba
                                gratuitamente um passo a passo profissional e direcionado para a sua necessidade (vagas
                                limitadas).
                            </p>
                        </div>
                        <div className={styles.leftItem}>
                            <h3>Seleção extremamente qualificada</h3>
                            <p>
                                Garantimos os melhores resultados com alta taxa de
                                retenção.
                            </p>
                        </div>
                        <div className={styles.leftItem}>
                            <h3>0% de risco</h3>
                            <p>
                                Se o candidato não se adaptar realizamos novamente a seleção sem custo,
                                ou seja, seu candidato está garantido de uma forma ou outra!
                            </p>
                        </div>
                        <div className={styles.leftItem}>
                            <h3>Sem desperdício de investimento</h3>
                            <p>
                                Você investe numa contratação garantida conosco,
                                sem medo de errar o candidato e aumentar a rotação do time
                            </p>
                        </div>
                        <div className={styles.leftItem}>
                            <h3>Não perca tempo</h3>
                            <p>Transformamos toda a triagem e seleção extensa e complexa em
                                decisões rápidas e práticas para seu dia a dia, que gastam pouquíssimo tempo e geram
                                mais produtividade</p>
                        </div>
                        <Button text='Solicitar Demonstração' color='var(--blue)' />
                    </div>
                    <div className={styles.right}>
                        <div className={styles.demonstration}>Imagem</div>
                    </div>
                </div>
            </section>
        </article>
    )
}