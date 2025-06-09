import { CreateJobProps, JobCreatedProps, JobsProps, SubscriptionDataProps, UpdateJobProps } from "@/@types/jobs"
import { BackendService, ServerSideContext } from "./backendService"

export class Jobs extends BackendService {
    constructor(ctx?: ServerSideContext) {
        super(ctx)
    }
    public async create(data: CreateJobProps) {
        const job = await this.createJob(data)
        if (!job) return `Erro ao criar vaga. Dados enviados: ${data}`
        this.debug.log('Vaga criada com sucesso!')
        return job
    }
    public async findJobs(): Promise<JobsProps[] | string> {
        const jobs = await this.getJobs()
        //this.debug.warn(jobs)
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
        this.debug.log('Vaga atualizada!')
        return update
    }
    public async remove(id: string): Promise<JobCreatedProps | string> {
        const remove = await this.removeJob(id)
        if (!remove) return 'Erro ao remover vaga.'
        this.debug.log('Vaga removida com sucesso.')
        return remove
    }

    public async createSubscription(data: SubscriptionDataProps) {
        //this.debug.log('data em createSubscription', data)
        const createSub = await this.createSub(data)
        if (!createSub) {
            this.debug.warn('Erro ao inscrever candidato na vaga!')
            return null
        }
        this.debug.log('Candidato inscrito com sucesso!', createSub)
        return createSub
    }
    public async getAllSubscriptions() {
        const subs = await this.getAllSubs()
        if (!subs) {
            this.debug.warn('Erro ao buscar candidaturas')
            return []
        }
        this.debug.log('Candidaturas', subs)
        return subs.result
    }
}
export const jobsService = new Jobs()