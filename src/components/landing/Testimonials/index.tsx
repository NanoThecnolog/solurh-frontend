import Button from '@/components/ui/Button'
import styles from './styles.module.scss'
import { testmonialsContent } from '@/variables/testmonials'
import { ScrollProps } from '@/@types/scrollProps'


export default function Testimonials({ scrollFunc }: ScrollProps) {

    return (
        <article className={styles.container}>
            <section className={styles.sectionContainer}>
                {/*<div className={styles.sectionTitle}>
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, explicabo sit beatae mollitia quos dolorem!</h1>
                </div>*/
                }
                <div className={styles.boxContainer}>
                    {testmonialsContent.map((ctn, index) =>
                        <div key={`${ctn.title}-${index}`} className={styles.box}>
                            <h2>{ctn.percent}%</h2>
                            <h4>{ctn.title}</h4>
                            <p>{ctn.description}</p>
                        </div>
                    )}
                </div>
                <div className={styles.buttonContainer}>
                    <Button text='Agendar Demonstração' color='var(--black)' click={scrollFunc} />
                </div>
            </section>
        </article>
    )
}