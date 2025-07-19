import { BannerProps } from '@/@types/bannerTemplate'
import Button from '../../ui/Button'
import styles from './styles.module.scss'


interface TemplateProps {
    data: BannerProps
}
export default function BannerTemplate({ data }: TemplateProps) {


    const handleClick = () => {
        if (data.buttonLink) window.open(data.buttonLink, '_blank')
    }
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
                    {
                        data.buttonText && <Button
                            text={data.buttonText}
                            click={handleClick}
                            backgroundColor='var(--white)'
                            height='60px'
                            fontSize='1rem'
                            fontWeight='900'
                            fontFamily='Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
                            textTransform='uppercase'
                        />
                    }

                </div>
            </div>
            <div className={styles.right}>
                {
                    data.bannerImg && <div className={styles.imageContainer}>
                        <img className={styles.image} src={data.bannerImg} alt="imagem do banner" />
                    </div>
                }
            </div>
        </section>
    )
}