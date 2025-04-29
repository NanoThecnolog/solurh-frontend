import { TestmonialsProps } from '@/@types/testmonial'
import styles from './styles.module.scss'
import Stars from '@/components/ui/Stars'

interface cardTestmonialProps {
    card: TestmonialsProps
}

export default function CardTestmonial({ card }: cardTestmonialProps) {
    return (
        <div className={styles.container}>
            <div>
                <img src={card.imgPath} alt={`Logo ${card.name}`} height={50} />
                <h4>{card.name}</h4>
                <p>&quot;{card.text}&quot;</p>
            </div>
            <div className={styles.starContainer}>
                <div>
                    <Stars quantity={card.starsCount} />
                </div>
                <div className={styles.line}></div>
            </div>
        </div>
    )
}