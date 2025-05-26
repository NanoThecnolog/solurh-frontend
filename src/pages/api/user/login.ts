import { LoginService } from "@/services/loginService";
import { serialize } from "cookie";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const authService = new LoginService()
    if (req.method !== 'POST') return res.status(405).end()

    const { email, password } = req.body
    const user = await authService.login(email, password)

    if (!user) return res.status(401).json({ message: 'Credenciais inválidas', data: null })

    const token = user.token
    res.setHeader('Set-Cookie', serialize('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        path: '/',
        maxAge: 60 * 60 * 24 * 7
    }))

    return res.status(200).json({ message: `Olá, ${user.user.nome}! Bem vindo(a)!`, data: user.user })
}