import { useState } from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'
import { whatsappLink } from '@/variables/whatsappLink'

interface ModalProps {
    closeFunction: (e: boolean) => void
}
export default function ModalLanding({ closeFunction }: ModalProps) {
    const [closing, setClosing] = useState(false)

    const handleClose = () => {
        setClosing(true)
        setTimeout(() => {
            closeFunction(false)
        }, 300)
    }

    const handleClick = () => {
        window.open(whatsappLink, '_blank')
    }
    return (
        <section className={`${styles.container} ${closing ? styles.fadeOut : styles.fadeIn}`}>
            <div className={styles.card}>
                <div className={styles.textContainer}>
                    <h1>ANTES DE CONTINUAR</h1>
                    <p>Sabemos que muitos visitantes estão buscando emprego.</p>
                    <p>Se esse for o seu caso, queremos te ajudar a encontrar a vaga certa!</p>

                    <h4>🔍 Está procurando emprego? Acesse nosso portal e encontre diversas vagas!
                    </h4>
                    <h4>✅ Busca uma solução completa para seu RH e DP? Continue na página.</h4>
                </div>
                <div className={styles.buttonContainer}>
                    <button type='button' onClick={handleClose}>Sou Recrutador</button>
                    <button type='button' onClick={handleClick}>Acessar vagas</button>
                </div>
            </div>
        </section>
    )
}