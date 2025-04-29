import Button from '../ui/Button'
import styles from './styles.module.scss'

export default function Header() {

    return (
        <nav className={styles.navContainer}>
            <div className={styles.logo}>
                <img src="/img/Logomarca/4.png" alt="Logo" />
            </div>
            <div className={styles.menuContainer}>
                <ul className={styles.menu}>
                    <li className={styles.menuItem}>Home</li>
                    <li className={styles.menuItem}>Empresas</li>
                    <li className={styles.menuItem}>Candidatos</li>
                    <li className={styles.menuItem}>Vagas</li>
                    <li className={styles.menuItem}>Contato</li>
                </ul>
            </div>
            <div>
                <Button text='Contato' color='var(--white)' />
            </div>
        </nav>
    )
}