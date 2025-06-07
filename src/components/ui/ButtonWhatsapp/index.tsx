import { useRouter } from 'next/navigation';
import styles from './styles.module.scss'
import { RiWhatsappFill } from "react-icons/ri";

export default function WhatsappButton() {
    const router = useRouter()
    function handleClick() {
        window.open(
            'https://api.whatsapp.com/send/?phone=5522992905210&text=Ol%C3%A1%21+Gostaria+de+tirar+uma+d%C3%BAvida%21%21&type=phone_number&app_absent=0',
            '_blank',
            'noopener,noreferrer'
        );
    }
    return (
        <div onClick={handleClick} className={styles.buttonContainer}>
            <RiWhatsappFill size={60} className={styles.iconGradient} />
        </div>
    )
}