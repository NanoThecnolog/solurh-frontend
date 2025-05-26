// pages/api/logout.ts
import { serialize } from 'cookie'
import { NextApiRequest, NextApiResponse } from 'next'

export default function logoutHandler(req: NextApiRequest, res: NextApiResponse) {
    res.setHeader('Set-Cookie', serialize('token', '', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        path: '/',
        expires: new Date(0)
    }))

    return res.status(200).json({ message: 'Logout realizado com sucesso.' })
}