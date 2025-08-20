import Button from '@/components/ui/Button'
import styles from './styles.module.scss'

export default function Testimonials() {
    const content = [
        {
            percent: 100,
            title: 'De acompanhamento no processo de decisões!',
            description: 'Atenda às necessidades da empresa e dos colaboradores com relatórios personalizados, que impulsionam o crescimento.'
        },
        {
            percent: 60,
            title: 'De retenção no seu time!',
            description: 'Faça avaliações a partir de uma visão completa, baseada em dados, e invista em treinamentos que garantem a alta performance.'
        },
        {
            percent: 100,
            title: 'De garantia do seu candidato ideal!',
            description: 'Conheça o cenário do seu time, entenda a forma certa de investir na educação e desenvolvimento da equipe e retenha os seus talentos.'
        },
    ]
    return (
        <article className={styles.container}>
            <section className={styles.sectionContainer}>
                {/*<div className={styles.sectionTitle}>
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, explicabo sit beatae mollitia quos dolorem!</h1>
                </div>*/
                }
                <div className={styles.boxContainer}>
                    {content.map((ctn, index) =>
                        <div key={`${ctn.title}-${index}`} className={styles.box}>
                            <h2>{ctn.percent}%</h2>
                            <h4>{ctn.title}</h4>
                            <p>{ctn.description}</p>
                        </div>
                    )}
                </div>
                <div className={styles.buttonContainer}>
                    <Button text='Agendar Demonstração' color='var(--black)' />
                </div>
            </section>
        </article>
    )
}