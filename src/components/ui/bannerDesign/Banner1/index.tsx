import styles from './styles.module.scss'

export default function Banner1() {
    return (
        <section className={styles.banner}>
            <div className={styles.content}>
                <h1>LANÇAMENTO</h1>
                <p>Confira agora os novos produtos disponíveis em nossa loja!</p>
                <button>Saiba Mais</button>
            </div>
        </section>
    );
}