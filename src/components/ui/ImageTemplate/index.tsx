import styles from './styles.module.scss'

interface TemplateProps {
    img: string,
    alt: string,
    width: number,
    height?: number
}
export default function ImageTemplate({ img, alt, width, height }: TemplateProps) {
    return (
        <div className={styles.container}>
            <img src={img} alt={alt} width={width} height={height} />
        </div>
    )
}