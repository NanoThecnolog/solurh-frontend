import styles from './styles.module.scss'

export default function Banner2() {
    return (
        <section className={styles.banner}>
            <div className={styles.content}>
                <div className={styles.badge}>NOVO DESIGN</div>
                <h1>Conforto e Estilo para o seu Dia</h1>
                <button>Ver Coleção</button>
            </div>
        </section>
    );
}
