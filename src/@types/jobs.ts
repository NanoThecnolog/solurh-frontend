export interface JobsProps {
    inscricoes: {
        id: string;
        createdAt: Date;
        vagaId: string;
        candidatoId: string;
    }[]
    id: string;
    nome: string;
    createdAt: Date;
    updatedAt: Date;
    localizacao: string;
    descricao: string;
    salario: number;
    createdBy: number;
}
export interface CreateJobProps {
    nome: string,
    localizacao: string,
    descricao: string,
    salario: number,
}
export interface JobCreatedProps {
    id: string;
    nome: string;
    createdAt: Date;
    updatedAt: Date;
    localizacao: string;
    descricao: string;
    salario: number;
    createdBy: number;
}

export interface UpdateJobProps {
    nome?: string,
    localizacao?: string,
    descricao?: string
    salario?: number
}

export interface UploadDocProps {
    code: number,
    result: {
        message: string,
        inscricao: {
            id: string,
            vagaId: string,
            candidatoId: string,
            createdAt: string
        }
    }
}
export interface SubscriptionDataProps {
    vagaId: string
    file: File
}