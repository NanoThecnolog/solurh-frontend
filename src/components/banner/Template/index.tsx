import { BannerProps } from '@/@types/bannerTemplate'
import Button from '../../ui/Button'
import styles from './styles.module.scss'


interface TemplateProps {
    data: BannerProps
}
export default function BannerTemplate({ data }: TemplateProps) {
    return (
        <section className={styles.container}>
            <div className={styles.left}>
                {
                    data.logoImg &&
                    <div className={styles.logoContainer}>
                        <img src={data.logoImg} alt="Logo" />
                    </div>
                }
                <div className={styles.textContainer}>
                    {
                        data.textParagraph &&
                        <p>{data.textParagraph}</p>
                    }
                    <h1>{data.textHighLight}</h1>
                    {
                        data.subText &&
                        <h3>{data.subText}</h3>
                    }
                </div>
                <div className={styles.buttonContainer}>
                    <Button
                        text={data.buttonText}
                        backgroundColor='var(--white)'
                        fontSize='1.2rem'
                        fontWeight='900'
                        fontFamily='Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
                        textTransform='uppercase'
                    />
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.imageContainer}>
                    <img className={styles.image} src={data.bannerImg} alt="imagem do banner" />
                </div>
            </div>
        </section>
    )
}