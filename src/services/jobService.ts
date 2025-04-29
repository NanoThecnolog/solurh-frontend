import { CreateJobProps, JobCreatedProps, JobsProps, UpdateJobProps } from "@/@types/jobs"
import { BackendService } from "./backendService"

class Jobs extends BackendService {

    public async create(data: CreateJobProps) {
        const job = await this.createJob(data)
        if (!job) return `Erro ao criar vaga. Dados enviados: ${data}`
        this.success('Vaga criada com sucesso!')
        return job
    }
    public async findJobs(): Promise<JobsProps[] | string> {
        const jobs = await this.getJobs()
        this.debug.warn(jobs)
        if (!jobs) return 'Não foi possível buscar vagas.'
        return jobs
    }
    public async findOne(id: string): Promise<JobsProps | string> {
        const job = await this.findOneJob(id)
        if (!job) return `Não foi possível buscar vaga. ID: ${id}`
        return job
    }
    public async update(id: string, data: UpdateJobProps): Promise<JobCreatedProps | string> {
        const update = await this.updateJob(id, data)
        if (!update) return `Não foi possível atualizar vaga.`
        this.success('Vaga atualizada!')
        return update
    }
    public async remove(id: string): Promise<JobCreatedProps | string> {
        const remove = await this.removeJob(id)
        if (!remove) return 'Erro ao remover vaga.'
        this.success('Vaga removida com sucesso.')
        return remove
    }
}
export const jobsService = new Jobs()