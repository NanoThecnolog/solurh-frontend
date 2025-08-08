import Link from 'next/link'
import styles from './styles.module.scss'
import { AiFillInstagram } from 'react-icons/ai'
import { FaLinkedin } from 'react-icons/fa'
import { solurhInformation } from '@/utils/variables'

export default function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <section className={styles.sectionContainer}>
                <div className={styles.logoContainer}>
                    <img src="/img/Logomarca/horizontal-logo-nobg.png" alt="Logomarca" />
                </div>
                <div className={styles.linkContainer}>
                    <div className={styles.listaContainer}>
                        <h4>Serviços para Empresas</h4>
                        <ul>
                            <li><Link href={'/company'}>Consultoria Estratégica de RH</Link></li>
                            <li><Link href={'/company'}>Recrutamento e Seleção</Link></li>
                            <li><Link href={'/company'}>Avaliação de Desempenho</Link></li>
                            <li><Link href={'/company'}>Pesquisa de Clima Organizacional</Link></li>
                        </ul>
                    </div>
                    <div className={styles.listaContainer}>
                        <h4>Para Profissionais</h4>
                        <ul>
                            <li><Link href={'/vagas'}>Vagas Abertas</Link></li>
                            <li><Link href={'/vagas'}>Cadastro de Currículo</Link></li>
                            <li><Link href={'/contact'}>Dicas de Carreira</Link></li>
                        </ul>
                    </div>
                    <div className={styles.listaContainer}>
                        <h4>Institucional</h4>
                        <ul>
                            <li><Link href={'/about'}>Quem Somos</Link></li>
                            <li><Link href={'/privacy'}>Política de Privacidade</Link></li>
                            <li><Link href={'/contact'}>Fale Conosco</Link></li>
                        </ul>
                    </div>
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