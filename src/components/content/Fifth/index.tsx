import Button from '@/components/ui/Button'
import styles from './styles.module.scss'
import { IoIosArrowForward } from 'react-icons/io'
import { useRouter } from 'next/navigation'
import ImageTemplate from '@/components/ui/ImageTemplate'

export default function FifthContent() {
    const router = useRouter()

    const handleClick = () => {
        router.push('/about')
    }
    return (
        <section className={styles.container}>
            <div className={styles.contentContainer}>
                <div className={styles.textContent}>
                    <h2>Somos a <strong>SOLURH</strong></h2>
                    <p>Uma consultoria especializada em Recursos Humanos com foco em soluções estratégicas para empresas e profissionais. Combinamos mais de 10 anos de experiência na área com uma abordagem moderna, ética e orientada a resultados. Acreditamos que o sucesso de qualquer negócio começa pelas pessoas, por isso, atuamos com inteligência de processos, empatia e visão de futuro.</p>

                    <Button text='Conheça Nossa Empresa' height='70px' Svg={IoIosArrowForward} click={handleClick} />
                </div>
                <div className={styles.imgContainer}>
                    <div className={styles.imgContent}>
                        <div className={styles.img1}>
                            <ImageTemplate img={`/img/brenda.jpeg`} alt='Tania' width={240} />
                        </div>
                        <div className={styles.img2}>
                            <ImageTemplate img={`/img/helenice.jpeg`} alt='Tania' width={240} />
                        </div>
                        <div className={styles.img3}>
                            <ImageTemplate img={`/img/tania.png`} alt='Tania' width={240} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}