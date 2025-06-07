export interface InscricaoProps {
    id: string
    candidatoId: string
    createdAt: Date
    candidato: CandidatoProps
    vaga: VagaProps
}
export interface CandidatoProps {
    id: string
    cv_path: string
    createdAt: Date
}
export interface VagaProps {
    id: string
    nome: string
    descricao: string
    localizacao: string
    salario: number
    createdAt: Date
    updatedAt: string
    createdBy: number
}
