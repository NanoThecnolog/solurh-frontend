import Button from '@/components/ui/Button'
import styles from './styles.module.scss'
import { IoIosArrowForward } from 'react-icons/io'

export default function FifthContent() {
    return (
        <section className={styles.container}>
            <div className={styles.contentContainer}>
                <div className={styles.textContent}>
                    <h2>Somos a <strong>SOLURH</strong></h2>
                    <p>Uma consultoria de Recursos Humanos dedicada a oferecer soluções personalizadas para empresas e profissionais. Nossa missão é transformar o potencial humano em resultados excepcionais.</p>
                    <Button text='Conheça Nossa Empresa' height='70px' Svg={IoIosArrowForward} />
                </div>
                <div className={styles.imgContent}>
                    <img src="/img/3-nobg.png" alt="Solurh" />
                </div>
            </div>
        </section>
    )
}