import styles from './styles.module.scss'
import CardTestmonial from './CardTestimonal'
import { testmonials } from '@/utils/variables'

export default function FourthContent() {

    return (
        <section className={styles.container}>
            <div className={styles.title}>
                <h1>O que dizem <strong>nossos clientes?</strong></h1>
            </div>
            <div className={styles.testimonials}>
                {
                    testmonials.map((card, index) => <CardTestmonial key={index} card={card} />)
                }
            </div>
        </section>
    )
}