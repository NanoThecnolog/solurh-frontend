import BannerTemplate from '@/components/banner/Template'
import styles from './styles.module.scss'
import SEO from '@/components/SEO'
import { bannersContent } from '@/variables/bannersContent'

export default function CompanyPage() {
    return (
        <>
            <SEO
                title="Para Empresas | Solurh - Soluções em Recursos Humanos"
                description="Conheça nossos Serviços para sua empresa!"
            />
            <BannerTemplate data={bannersContent[1]} />
            <main className={styles.container}>
                <section className={styles.intro}>
                    <h1>Nossos Serviços</h1>
                    <p>
                        Na <strong>SoluRH</strong>, oferecemos um portfólio de serviços que atendem desde empresas que desejam estruturar seu RH até profissionais que buscam recolocação ou transição de carreira.
                    </p>
                </section>

                <section className={styles.services}>
                    <article>
                        <h2>Recrutamento & Seleção Estratégico</h2>
                        <p>Atraímos os talentos certos para o seu negócio, com processos humanizados, ágeis e alinhados à cultura da empresa.</p>
                    </article>

                    <article>
                        <h2>Treinamento & Desenvolvimento</h2>
                        <p>Desenvolvemos programas personalizados para capacitação de equipes, líderes e novos talentos.</p>
                    </article>

                    <article>
                        <h2>Implantação de RH</h2>
                        <p>Implementamos ou reestruturamos o setor de RH da sua empresa com foco em performance, clima organizacional e compliance trabalhista.</p>
                    </article>

                    <article>
                        <h2>Pesquisa de Clima Organizacional</h2>
                        <p>Mapeamos a percepção dos colaboradores para apoiar decisões estratégicas, fortalecer a cultura e melhorar o engajamento.</p>
                    </article>

                    <article>
                        <h2>Consultoria de Carreira e Recolocação</h2>
                        <p>Apoiamos profissionais em sua jornada de autoconhecimento, planejamento e reinserção no mercado com foco em propósito e posicionamento.</p>
                    </article>

                    <article>
                        <h2>BPO de RH</h2>
                        <p>Terceirize processos administrativos e operacionais do RH e foque no que realmente importa: sua estratégia e crescimento.</p>
                    </article>
                </section>

                <section className={styles.team}>
                    <h2>Nosso Time</h2>
                    <p>
                        Contamos com uma equipe apaixonada por pessoas, movida por resultados e com sólida experiência em Recursos Humanos. Nossos profissionais atuam com escuta ativa, responsabilidade técnica e foco na entrega de soluções eficazes.
                    </p>
                </section>
            </main>
        </>
    )
}