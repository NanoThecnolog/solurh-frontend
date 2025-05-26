import { Jobs } from "@/services/jobService";
import { debug } from "@/utils/DebugLogger";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') return res.status(405).end()
    const jobManager = new Jobs({ req })
    const jobs = await jobManager.findJobs()
    if (!jobs) return res.status(500).end()
    if (typeof jobs === 'string') return res.status(404).json({ message: jobs })
    debug.log('jobs', jobs)
    return res.status(200).json({ request: jobs })
}