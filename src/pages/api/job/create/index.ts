import { Jobs } from "@/services/jobService";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') return res.status(405).end()

    const { data } = req.body;
    //    const { id } = req.query

    const jobsService = new Jobs({ req })
    const create = await jobsService.create(data)
    if (!create) return res.status(500).end()
    return res.status(200).json({ request: create })
}