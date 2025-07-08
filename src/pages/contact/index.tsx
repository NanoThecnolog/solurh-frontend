import { solurhInformation } from '@/utils/variables';
import styles from './styles.module.scss';
import { FaWhatsapp, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

export default function ContactPage() {

    const handleEmailClick = () => {
        window.open(`mailto:${solurhInformation.email}`, '_blank')
    }
    return (
        <main className={styles.container}>
            <section className={styles.header}>
                <h1>📞 Fale Conosco</h1>
                <p>
                    Se você busca soluções estratégicas para o seu negócio ou deseja apoio em sua carreira,
                    fale com a gente! Estamos prontos para entender sua necessidade e oferecer o melhor caminho.
                </p>
            </section>

            <section className={styles.contactMethods}>
                <div className={`${styles.method} ${styles.hoverEffect}`}>
                    <FaWhatsapp className={styles.icon} />
                    <h2>Atendimento direto via WhatsApp</h2>
                    <p>Atendemos em todo o Brasil</p>
                    <span className={styles.location}><FaMapMarkerAlt /> Base no RJ e SP</span>
                </div>

                <div className={`${styles.method} ${styles.hoverEffect}`} onClick={handleEmailClick}>
                    <FaEnvelope className={styles.icon} />
                    <h2>Email</h2>
                    <p>{solurhInformation.email}</p>
                </div>

                <div className={styles.method}>
                    <FaPhoneAlt className={styles.icon} />
                    <h2>Telefones</h2>
                    <ul>
                        <li><strong>Rio de Janeiro:</strong> {solurhInformation.telefones.rj}</li>
                        <li><strong>São Paulo:</strong> {solurhInformation.telefones.sp}</li>
                        <li><strong>Minas Gerais:</strong> {solurhInformation.telefones.mg}</li>
                    </ul>
                </div>
            </section>
        </main>
    );
}
