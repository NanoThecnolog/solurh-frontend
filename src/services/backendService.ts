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

import { toast } from "react-toastify";
import { UserProps } from "@/@types/login";
import { destroyCookie, setCookie } from "nookies";
import { CreateJobProps, JobCreatedProps, JobsProps, UpdateJobProps } from "@/@types/jobs";
import { debug } from "@/utils/DebugLogger";

interface ResponseProps<T> {
    code: number,
    result: T
}

export class BackendService {
    protected api: AxiosInstance
    protected debug: typeof debug

    constructor() {
        this.api = api
        this.debug = debug
    }

    protected validateEmail(email: string): boolean {
        if (!email.includes('@')) return false
        return true
    }
    protected async validateUser(data: { email: string, password: string }): Promise<UserProps | null> {
        try {
            const response = await this.api.post<ResponseProps<UserProps>>('/login', data)
            return response.data.result
        } catch (err: unknown) {
            if (err instanceof AxiosError) {
                const status = err.response?.status
                const message = err.response?.data?.message || 'Erro Inesperado'

                if (status === 404) this.error("Email não encontrado.")
                else if (status === 401) this.error("Senha incorreta.")
                else this.error(message)
                this.debug.log(`Erro ao validar usuario: ${message}`, err.response?.data)
            }
            else {
                this.error("Erro de conexão com o servidor.")
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
    protected setUserCookie(user: UserProps) {
        destroyCookie(null, 'user')
        setCookie(null, 'user', JSON.stringify(user))
    }
    protected success(message: string) {
        toast.success(message)
    }
    protected error(message: string) {
        toast.error(message)
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
}