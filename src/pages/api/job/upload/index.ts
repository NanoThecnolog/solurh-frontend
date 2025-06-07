import { SubscriptionDataProps } from "@/@types/jobs";
import { Jobs } from "@/services/jobService";
import { debug } from "@/utils/DebugLogger";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') return res.status(405).end()
    const { data } = req.body
    debug.log('data na rota back do next', data)
    const jobsService = new Jobs({ req })
    const sub = await jobsService.createSubscription(data as SubscriptionDataProps)
    return res.status(200).json(sub)
}