import { JobsProps } from '@/@types/jobs'
import styles from './styles.module.scss'
import { debug } from '@/utils/DebugLogger'
import { ConvertValues } from '@/utils/conversions'

interface GeralProps {
    vagas: JobsProps[]
}

export default function Geral({ vagas }: GeralProps) {

    debug.log(vagas)
    const converter = new ConvertValues()

    if (vagas.length === 0) return
    return (
        <>
            <div className={styles.container}>
                {vagas.map(vaga =>
                    <div key={vaga.id}>
                        <h1>{vaga.nome}</h1>
                        <h4>{vaga.localizacao}</h4>
                        <p>Salário: {vaga.salario > 0 ? converter.toReal(vaga.salario) : 'A Combinar'}</p>
                    </div>
                )}
            </div>
        </>
    )
}