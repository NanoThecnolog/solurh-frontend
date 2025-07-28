import { useState } from 'react'
//import Button from '../ui/Button'
import styles from './styles.module.scss'
import { FiMenu, FiX } from 'react-icons/fi'
import Link from 'next/link'
//import { useRouter } from 'next/navigation'

export default function Header() {
    //const router = useRouter()
    const [isMobile, setIsMobile] = useState(false)

    const toggleMenu = () => setIsMobile(!isMobile)

    /*const handleClick = () => {
        router.push('/contact')
    }*/

    return (
        <nav className={styles.navContainer}>
            <div className={styles.logo}>
                <img src="/img/Logomarca/horizontal-white.png" alt="Logo" />
            </div>
            <div className={styles.mobileIcon} onClick={toggleMenu}>
                {isMobile ? <FiX size={28} /> : <FiMenu size={28} />}
            </div>
            <div className={`${styles.menuContainer} ${isMobile ? styles.open : ''}`}>
                <ul className={styles.menu}>
                    <li className={styles.menuItem}><Link href='/'>Home</Link></li>
                    <li className={styles.menuItem}><Link href='/about'>Quem Somos</Link></li>
                    <li className={styles.menuItem}><Link href='/company'>Empresas</Link></li>
                    <li className={styles.menuItem}><Link href='/vagas'>Vagas</Link></li>
                    <li className={styles.menuItem}><Link href='/contact'>Contato</Link></li>
                </ul>
            </div>
            <div className={styles.buttonContainer}>
            </div>
        </nav>
    )
}