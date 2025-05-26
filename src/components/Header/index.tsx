import { useState } from 'react'
import Button from '../ui/Button'
import styles from './styles.module.scss'
import { FiMenu, FiX } from 'react-icons/fi'
import Link from 'next/link'

export default function Header() {
    const [isMobile, setIsMobile] = useState(false)

    const toggleMenu = () => setIsMobile(!isMobile)

    return (
        <nav className={styles.navContainer}>
            <div className={styles.logo}>
                <img src="/img/Logomarca/4.png" alt="Logo" />
            </div>
            <div className={styles.mobileIcon} onClick={toggleMenu}>
                {isMobile ? <FiX size={28} /> : <FiMenu size={28} />}
            </div>
            <div className={`${styles.menuContainer} ${isMobile ? styles.open : ''}`}>
                <ul className={styles.menu}>
                    <li className={styles.menuItem}><Link href='/'>Home</Link></li>
                    <li className={styles.menuItem}><Link href='/company'>Empresas</Link></li>
                    <li className={styles.menuItem}>Candidatos</li>
                    <li className={styles.menuItem}>Vagas</li>
                    <li className={styles.menuItem}>Contato</li>
                </ul>
            </div>
            <div className={styles.buttonContainer}>
                <Button text='Contato' color='var(--white)' />
            </div>
        </nav>
    )
}