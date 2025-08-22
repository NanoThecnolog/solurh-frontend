import Link from 'next/link'
import styles from './styles.module.scss'
import { AiFillInstagram } from 'react-icons/ai'
import { FaLinkedin } from 'react-icons/fa'
import { solurhInformation } from '@/variables/solurhInformation'

interface LinksProps {
    title: string,
    items: {
        href: string,
        text: string
    }[]
}
export default function Footer() {
    const links: LinksProps[] = [
        {
            title: "Serviços para Empresas",
            items: [
                { href: "/company", text: "Consultoria Estratégica de RH" },
                { href: "/company", text: "Recrutamento e Seleção" },
                { href: "/company", text: "Avaliação de Desempenho" },
                { href: "/company", text: "Pesquisa de Clima Organizacional" },
            ],
        },
        {
            title: "Para Profissionais",
            items: [
                { href: "/vagas", text: "Vagas Abertas" },
                { href: "/vagas", text: "Cadastro de Currículo" },
                { href: "/contact", text: "Dicas de Carreira" },
            ],
        },
        {
            title: "Institucional",
            items: [
                { href: "/about", text: "Quem Somos" },
                { href: "/privacy", text: "Política de Privacidade" },
                { href: "/contact", text: "Fale Conosco" },
            ],
        },
    ];
    return (
        <footer className={styles.footerContainer}>
            <section className={styles.sectionContainer}>
                <div className={styles.logoContainer}>
                    <img src="/img/Logomarca/horizontal-logo-nobg.png" alt="Logomarca" />
                </div>
                <div className={styles.linkContainer}>
                    {links.map((category, index) => (
                        <div key={index} className={styles.listaContainer}>
                            <h4>{category.title}</h4>
                            <ul>
                                {category.items.map((item, i) => (
                                    <li key={i}>
                                        <Link href={item.href}>
                                            {item.text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className={styles.contatoContainer}>
                    <h3>Onde Atendemos</h3>
                    <p>📍 Atendemos em todo o Brasil</p>
                    <p>Rio de Janeiro: (22)99290-5210</p>
                    <p>São Paulo: (11)97608-5287</p>
                    <p>Minas Gerais: (34)9906-9116</p>

                    <div className={styles.socialContainer}>
                        <Link href={solurhInformation.socialMedia.instagram}><AiFillInstagram size={45} /></Link>
                        <Link href={solurhInformation.socialMedia.linkedin}><FaLinkedin size={40} /></Link>
                    </div>
                </div>
            </section>
            <div className={styles.copyrightContainer}>
                <h4>© Copyright 2025 - SolurH Soluções em Recursos Humanos LTDA. Todos os direitos reservados.</h4>
                <p>Sistema Desenvolvido por <strong><Link href='https://ericssongomes.com'>Ericsson Gomes</Link></strong></p>
            </div>
        </footer>
    )
}