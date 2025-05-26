import styles from './styles.module.scss';

export default function Banner3() {
    return (
        <section className={styles.banner}>
            <div className={styles.textArea}>
                <div className={styles.titleGroup}>
                    <h2>Coleção Exclusiva</h2>
                </div>
                <p>Aposte em peças únicas com design moderno.</p>
                <button>Comprar Agora</button>
            </div>
            <div className={styles.imageArea}>
                {/* Espaço para imagem ou arte gráfica */}
            </div>
        </section>
    );
}
