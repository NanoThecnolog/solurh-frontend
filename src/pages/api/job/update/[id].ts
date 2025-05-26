import { Jobs } from "@/services/jobService";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'PUT') return res.status(405).end()
    const { data } = req.body;
    const { id } = req.query

    const jobService = new Jobs({ req })
    const update = await jobService.update(id as string, data)
    if (!update) return res.status(500).end()
    return res.status(200).json({ request: update })
}