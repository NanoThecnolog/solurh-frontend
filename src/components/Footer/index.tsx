import Link from 'next/link'
import Button from '../ui/Button'
import styles from './styles.module.scss'
import { FaPhoneFlip } from 'react-icons/fa6'
import { AiFillInstagram } from 'react-icons/ai'
import { FaLinkedin } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <section className={styles.sectionContainer}>
                <div className={styles.logoContainer}>
                    <img src="/img/Logomarca/horizontal-logo-nobg.png" alt="Logomarca" />
                </div>
                <div className={styles.linkContainer}>
                    <div className={styles.listaContainer}>
                        <h4>Para Empresa</h4>
                        <ul>
                            <li>Consultoria</li>
                            <li>Departamento Pessoal</li>
                            <li>Recrutamento e Seleção</li>
                            <li>Desenvolvimento Humano</li>
                        </ul>
                    </div>
                    <div className={styles.listaContainer}>
                        <h4>Para o Trabalhador</h4>
                        <ul>
                            <li>Vagas RHOPEN</li>
                            <li>Termos de Uso</li>
                            <li>Política de Privacidade</li>
                            <li>Central de Denúncias</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.contatoContainer}>
                    <h3>Fale conosco</h3>
                    <Button text='(22)99290-5210' Svg={FaPhoneFlip} svgSize={20} />
                    <div className={styles.socialContainer}>
                        <Link href=''><AiFillInstagram size={40} /></Link>
                        <Link href='https://www.linkedin.com/in/tania-viannarh/'><FaLinkedin size={40} /></Link>
                    </div>
                </div>
            </section>
            <div className={styles.copyrightContainer}>
                <h4>© Copyright 2025 - SolurH Soluções em Recursos Humanos LTDA</h4>
                <p>Sistema Solurh Desenvolvido por <strong><Link href='https://ericssongomes.com'>Ericsson Gomes</Link></strong></p>
            </div>


        </footer>
    )
}