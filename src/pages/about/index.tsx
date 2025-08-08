import BannerTemplate from '@/components/banner/Template';
import styles from './styles.module.scss'
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import { bannersContent } from '@/utils/variables';
import { FaRegHandshake } from 'react-icons/fa6';
import { IoIosPeople } from 'react-icons/io';
import { MdWorkHistory } from "react-icons/md";
import { useCallback, useEffect, useState } from 'react';
import debounce from 'lodash.debounce'
import { debug } from '@/utils/DebugLogger';
import SEO from '@/components/SEO';

export default function AboutPage() {
    const router = useRouter()
    const [empresas, setEmpresas] = useState(0)
    const [jobs, setJobs] = useState(0)
    const [employes, setEmployes] = useState(0)
    const [animando, setAnimando] = useState(false)

    const animateNumber = (setter: (val: number) => void, start: number, end: number, stepTime = 20) => {
        let current = start
        const step = () => {
            current++
            setter(current)
            if (current < end) {
                setTimeout(step, stepTime)
            }
        }
        step()
    }

    const growNumbers = () => {
        debug.log('chamando growNumbers')
        if (animando) return
        setAnimando(true)
        animateNumber(setEmpresas, 0, 20, 20)
        animateNumber(setJobs, 0, 350, 5)
        animateNumber(setEmployes, 0, 340, 10)
    }
    const handleScroll = useCallback(
        debounce(() => {
            if (window.scrollY > 100) growNumbers()
        }, 200), [animando]
    );
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [handleScroll])
    function handleClick() {
        router.push('/contato')
    }

    return (
        <>
            <SEO
                title="Sobre Nós | Solurh - Soluções em Recursos Humanos"
                description="Conheça a Solurh, uma consultoria especializada em Recursos Humanos com foco em soluções inteligentes!"
            />
            <main className={styles.container}>
                <BannerTemplate data={bannersContent[2]} />
                <section className={styles.results}>
                    <div className={styles.resultsPrincipal}>
                        <h2>Resultados comprovados</h2>
                        <p>Destacamos casos de sucesso, evidenciando como nossa abordagem resultou na contratação de profissionais que contribuíram significativamente para o sucesso de outras empresas.</p>
                    </div>
                    <div className={styles.statistics}>
                        <FaRegHandshake size={70} />
                        <h4>Empresas parceiras</h4>
                        <p>+{empresas}</p>
                    </div>
                    <div className={styles.statistics}>
                        <IoIosPeople size={70} />
                        <h4>Vagas preenchidas</h4>
                        <p>+{jobs}</p>
                    </div>
                    <div className={styles.statistics}>
                        <MdWorkHistory size={70} />
                        <h4>Profissionais recolocados</h4>
                        <p>+{employes}</p>
                    </div>
                </section>
                <article className={styles.articleContainer}>
                    <section className={styles.sectionContainer}>
                        <div className={styles.title}>
                            <h1>Quem Somos</h1>
                        </div>
                        <div className={styles.content}>
                            <div className={styles.about}>
                                <p>A SoluRH é uma consultoria especializada em Recursos Humanos com foco em soluções estratégicas para empresas e profissionais. Combinamos mais de 10 anos de experiência na área com uma abordagem moderna, ética e orientada a resultados. Acreditamos que o sucesso de qualquer negócio começa pelas pessoas — por isso, atuamos com inteligência de processos, empatia e visão de futuro.</p>
                            </div>
                            <div className={styles.mission}>
                                {//<div className={styles.missionContainer}>
                                }
                                <h3>Nossa Missão</h3>
                                {
                                    //<img src="img/5-2.png" alt="Coaching" />
                                }
                                {//</div>
                                }
                                <p>Conectar pessoas e empresas por meio de soluções estratégicas e humanizadas em Recursos Humanos, oferecendo recrutamento, treinamentos e serviços de RH que promovam resultados reais e duradouros.</p>
                            </div>
                            <div className={styles.vision}>
                                <h3>Nossa Visão</h3>
                                <p>Ser reconhecida no mercado como uma consultoria referência em qualidade, proximidade e assertividade, transformando a gestão de pessoas em empresas de todos os portes.</p>
                            </div>
                            <div className={styles.values}>
                                <h3>Nossos Valores</h3>
                                <ul>
                                    <li>Humanização: Valorizamos as pessoas em cada etapa do processo.</li>
                                    <li>Excelência: Atuamos com qualidade e compromisso em cada entrega.</li>
                                    <li>Proximidade: Mantemos relações genuínas com nossos clientes e candidatos.</li>
                                    <li>Resultado: Foco em soluções que geram impacto positivo e mensurável.</li>
                                    <li>Ética: Trabalhamos com transparência, respeito e responsabilidade.</li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.callToAction}>
                            <h2>Vamos transformar o seu RH?</h2>
                            <p>Entre em contato com nossos especialistas e descubra como a SoluRH pode apoiar sua empresa com soluções humanas e estratégicas.</p>
                            <div className={styles.buttonContainer}>
                                <Button click={handleClick} text="Solicitar uma consultoria" />
                            </div>
                        </div>
                    </section>
                </article>
            </main>
        </>
    )
}