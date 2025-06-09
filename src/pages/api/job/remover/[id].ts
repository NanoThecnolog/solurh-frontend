import { Jobs } from "@/services/jobService";
import { debug } from "@/utils/DebugLogger";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'DELETE') return res.status(405).end()

    const { id } = req.query
    if (!id) return res.status(400).json({ error: 'id da vaga ausente' })
    const jobManager = new Jobs({ req })

    const removerVaga = await jobManager.remove(id as string)
    debug.log('resultado do removerVaga', removerVaga)
    return res.status(200).json({ message: 'Vaga removida com sucesso!' })
}