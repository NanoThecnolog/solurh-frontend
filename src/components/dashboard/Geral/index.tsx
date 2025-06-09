import { JobsProps } from '@/@types/jobs'
import styles from './styles.module.scss'
//import { debug } from '@/utils/DebugLogger'
//import { ConvertValues } from '@/utils/conversions'
import { InscricaoProps, VagaProps } from '@/@types/inscricoes'
import { useEffect, useState } from 'react'

interface GeralProps {
    vagas: JobsProps[],
    subs: InscricaoProps[]
}

export default function Geral({ vagas, subs }: GeralProps) {
    const [vagaMaisEscolhida, setVagaMaisEscolhida] = useState<{ vaga: VagaProps, total: number } | null>(null)



    const vagaComMaisCurriculos = (): { vaga: VagaProps, total: number } | null => {
        const count = new Map<string, { vaga: VagaProps; total: number }>()

        for (const inscricao of subs) {
            const vagaId = inscricao.vaga.id
            if (!count.has(vagaId)) {
                count.set(vagaId, { vaga: inscricao.vaga, total: 1 })
            } else {
                const atual = count.get(vagaId)
                if (!atual) continue
                atual.total++
                count.set(vagaId, atual)
            }
        }
        let moreSubs: { vaga: VagaProps; total: number } | null = null

        for (const entry of count.values()) {
            if (!moreSubs || entry.total > moreSubs.total) {
                moreSubs = entry
            }
        }
        return moreSubs

    }

    useEffect(() => {
        if (!vagaMaisEscolhida) setVagaMaisEscolhida(vagaComMaisCurriculos())
        else return
    }, [vagaMaisEscolhida])
    if (vagas.length === 0) return

    return (
        <div>
            <h1>Panorama Geral das Vagas</h1>
            <div className={styles.container}>
                <div className={styles.vagasContainer}>
                    <h2>Vagas cadastradas</h2>
                    <p>{vagas.length}</p>
                    <div className={styles.highestSubs}>
                        <h4>vaga com mais currículos:</h4>
                        <div>
                            {vagaMaisEscolhida?.vaga.nome}
                        </div>
                    </div>
                </div>
                <div className={styles.inscricoesContainer}>
                    <h2>Currículos recebidos</h2>
                    <p>{subs.length}</p>
                    <div>
                        ultima vaga que recebeu currículo
                    </div>
                </div>
            </div>
        </div>
    )
}