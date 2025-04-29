import { FaStar } from 'react-icons/fa'
import styles from './styles.module.scss'

interface StarsProps {
    quantity: number
}

export default function Stars({ quantity }: StarsProps) {
    return (
        <div className={styles.starContainer}>
            {
                quantity > 0 && Array.from({ length: quantity }, (_, i) => (
                    <FaStar key={i} />
                ))
            }
        </div>
    )
}