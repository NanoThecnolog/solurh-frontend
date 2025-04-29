import Header from '@/components/Header'
import styles from './styles.module.scss'
import { useEffect, useState } from 'react'
import { jobsService } from '@/services/jobService'
import { debug } from '@/utils/DebugLogger'
import { JobsProps } from '@/@types/jobs'

export default function Jobs() {
    const [jobs, setJobs] = useState<JobsProps[]>([])
    //debug.log(jobs)

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await jobsService.findJobs()
                if (response && Array.isArray(response)) setJobs(response)
                debug.log(response)
            } catch (err) {
                debug.error(err)
            }
        }
        fetchJobs()
    }, [])
    return (
        <>
            <Header />
            <main className={styles.mainContainer}>
                <div className='container'>
                    <div className='row'>
                        {jobs.length > 0 && jobs.map((job) =>
                            <div key={job.id} className={`${styles.jobContainer} col-6 col-md-3`}>
                                <h1>{job.nome}</h1>
                                <h3>{job.localizacao}</h3>
                                <p>{job.salario}</p>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </>
    )
}