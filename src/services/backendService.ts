/*
login - ok
listar vagas - ok
criar vaga - ok
editar vaga
deletar vaga
detalhar vaga - ok
candidato se inscrever na vaga
inscrições da vaga
*/

import { AxiosError, AxiosInstance } from "axios";
import { api } from "./api";

import { UserProps } from "@/@types/login";
import { CreateJobProps, JobCreatedProps, JobsProps, SubscriptionDataProps, UpdateJobProps, UploadDocProps } from "@/@types/jobs";
import { debug } from "@/utils/DebugLogger";
import { createAxiosInstance } from "@/utils/utilities";
import { InscricaoProps } from "@/@types/inscricoes";
import { NextApiRequest } from "next";

interface ResponseProps<T> {
    code: number,
    result: T
}
export type ServerSideContext = { req: NextApiRequest }

export class BackendService {
    protected api: AxiosInstance
    protected debug: typeof debug

    constructor(ctx?: ServerSideContext) {
        this.debug = debug

        if (ctx?.req) {
            this.api = createAxiosInstance(ctx)
        } else {
            this.api = api
        }
    }

    protected validateEmail(email: string): boolean {
        if (!email.includes('@')) return false
        return true
    }
    protected async validateUser(data: { email: string, password: string }): Promise<UserProps | null> {
        this.debug.log('Data em validateUser', data)
        try {
            const response = await this.api.post<ResponseProps<UserProps>>('/login', data)
            return response.data.result
        } catch (err: unknown) {
            if (err instanceof AxiosError) {
                const status = err.response?.status
                const message = err.response?.data?.message || 'Erro Inesperado'
                this.debug.log(`Erro ${status} ao validar usuario: ${message}`, err.response?.data)
            }
            else {
                this.debug.error("Erro inesperado durante requisição.", err)
            }
            return null
        }
    }

    protected async getJobs(): Promise<JobsProps[] | null> {
        try {
            const response = await this.api.get<ResponseProps<JobsProps[]>>('/vagas')
            return response.data.result
        } catch (err: unknown) {
            if (err instanceof AxiosError) {
                const message = err.response?.data?.message || 'Erro Inesperado ao buscar todas as vagas'
                this.debug.error(`Erro ao buscar vagas: ${message}`, err.response?.data)
            }
            else this.debug.error('Erro inesperado durante requisição.', err)
            return null
        }
    }
    protected async findOneJob(id: string): Promise<JobsProps | null> {
        try {
            const response = await this.api.get<ResponseProps<JobsProps>>(`/vagas/${id}`)
            return response.data.result
        } catch (err: unknown) {
            if (err instanceof AxiosError) {
                const message = err.response?.data?.message || 'Erro Inesperado ao buscar a vaga'
                this.debug.error(`Erro ao buscar vaga: ${message}`, err.response?.data)
            }
            else this.debug.error('Erro Inesperado durante requisição', err)
            return null
        }
    }
    protected async createJob(data: CreateJobProps): Promise<JobCreatedProps | null> {
        try {
            const response = await this.api.post<ResponseProps<JobCreatedProps>>('/vagas', data)
            return response.data.result
        } catch (err: unknown) {
            if (err instanceof AxiosError) {
                const message = err.response?.data?.message || 'Erro Inesperado ao criar vaga'
                this.debug.error(`Erro ao criar vaga: ${message}`, err.response?.data)
            }
            else this.debug.error('Erro Inesperado durante a criação da vaga.', err)
            return null
        }
    }

    protected async updateJob(id: string, data: UpdateJobProps): Promise<JobCreatedProps | null> {
        try {
            const response = await this.api.put<ResponseProps<JobCreatedProps>>(`/vagas/${id}`, data)
            return response.data.result
        } catch (err: unknown) {
            if (err instanceof AxiosError) {
                const message = err.response?.data?.message || 'Erro inesperando durante atualização da vaga.'
                this.debug.error(message, err.response?.data)
            } else this.debug.error('Um erro inesperado ocorreu durante atualização da vaga', err)
            return null
        }
    }
    protected async removeJob(id: string) {
        try {
            const response = await this.api.delete(`/vagas/${id}`)
            return response.data
        } catch (err: unknown) {
            if (err instanceof AxiosError) {
                const message = err.response?.data?.message || "Erro inesperado ao remover vaga."
                this.debug.error(message, err.response?.data)
            } else this.debug.error('Erro ao remover vaga.', err)
            return null
        }
    }
    protected async createSub(data: SubscriptionDataProps): Promise<UploadDocProps | null> {
        //debug.log("data", data)
        try {
            const formData = new FormData()
            formData.append('file', data.file)
            formData.append('vagaId', data.vagaId.toString())
            const response = await this.api.post('/inscricoes/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            return response.data
        } catch (err: unknown) {
            if (err instanceof AxiosError) {
                const message = err.response?.data.message || 'Erro inesperado ao inscrever candidato.'
                this.debug.error(message, err.response?.data)
            } else this.debug.error('Erro ao inscrever candidato.', err)
            return null
        }
    }
    protected async getAllSubs(): Promise<{ code: number, result: InscricaoProps[] } | null> {
        try {
            const response = await this.api.get('/inscricoes')
            return response.data
        } catch (err) {
            if (err instanceof AxiosError) {
                const message = err.response?.data.message || 'Erro inesperado ao inscrever candidato.'
                this.debug.error(message, err.response?.data)
            } else this.debug.error('Erro ao inscrever candidato.', err)
            return null
        }
    }
}