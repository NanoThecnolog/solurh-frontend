import { InscricaoProps } from '@/@types/inscricoes'
import styles from './styles.module.scss'

interface CandidatosProps {
    subs: InscricaoProps[]
}

export default function Candidatos({ subs }: CandidatosProps) {
    return (
        <div className={styles.container}>
            <h1>📥 Inscrições de Candidatos</h1>

            <div className={styles.list}>
                {subs.length === 0 && <p>Nenhuma inscrição encontrada.</p>}

                {subs.map((inscricao) => (
                    <div key={inscricao.id} className={styles.card}>
                        <h3>{inscricao.vaga.nome}</h3>
                        <p className={styles.local}>
                            {inscricao.vaga.localizacao} — Salário: R$ {inscricao.vaga.salario.toLocaleString()}
                        </p>

                        <div className={styles.info}>
                            <p>Inscrição em: {new Date(inscricao.createdAt).toLocaleDateString()}</p>
                            <a
                                href={`http://localhost:6565/${inscricao.candidato.cv_path}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.cvLink}
                            >
                                📄 Ver Currículo
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
