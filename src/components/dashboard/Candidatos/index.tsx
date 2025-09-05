import { InscricaoProps } from '@/@types/inscricoes'
import styles from './styles.module.scss'
import { Render } from '@/utils/utilities'
import Link from 'next/link'


interface CandidatosProps {
    subs: InscricaoProps[]
}

export default function Candidatos({ subs }: CandidatosProps) {
    const url = 'https://solurh.pro/uploads/curriculos'
    const render = new Render()
    const getFileName = (path: string) => path.split('/').pop() || path;
    return (
        <div className={styles.container}>
            <h1>📥 Inscrições de Candidatos</h1>

            <div className={styles.list}>
                {subs.length === 0 && <p>Nenhuma inscrição encontrada.</p>}

                {subs.map((inscricao) => (
                    <div key={inscricao.id} className={styles.card}>
                        <h3>{inscricao.vaga.nome}</h3>
                        <p className={styles.local}>
                            {inscricao.vaga.localizacao} — Salário: R$ {render.salario(inscricao.vaga.salario)}
                        </p>

                        <div className={styles.info}>
                            <p>Inscrição em: {new Date(inscricao.createdAt).toLocaleDateString()}</p>
                            <Link
                                href={`${url}/${getFileName(inscricao.candidato.cv_path)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.cvLink}
                            >
                                📄 Ver Currículo
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
