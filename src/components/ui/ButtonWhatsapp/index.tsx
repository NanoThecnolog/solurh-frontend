//import { useRouter } from 'next/navigation';
import { whatsappLink } from '@/utils/variables';
import styles from './styles.module.scss'
import { RiWhatsappFill } from "react-icons/ri";

export default function WhatsappButton() {
    //const router = useRouter()
    function handleClick() {
        window.open(
            whatsappLink,
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