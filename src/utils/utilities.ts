import { JobsProps } from "@/@types/jobs";
import { ConvertValues } from "./conversions";
import axios from "axios";
import { ServerSideContext } from "@/services/backendService";
import { GetServerSidePropsContext } from "next";

export class Render extends ConvertValues {
    salario(value: number): string {
        return value > 0 ? this.toReal(value) : 'A Combinar'
    }
    vaga(vagas: JobsProps[], id: string): JobsProps | null {
        const vaga = vagas.find(vaga => vaga.id === id)
        if (!vaga) return null
        return vaga
    }
    dates(date: Date) {
        if (typeof date === 'string') date = new Date(date)

        if (isNaN(date.getTime()) || !(date instanceof Date)) return
        return date.toLocaleDateString('pt-br', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            timeZone: 'UTC'
        })
    }
}

export function createAxiosInstance(ctx?: ServerSideContext | GetServerSidePropsContext) {
    const cookie = ctx?.req.headers.cookie || '';
    const getCookieValue = (cookieString: string, name: string): string | undefined => {
        return cookieString
            .split(';')
            .map(c => c.trim())
            .find(c => c.startsWith(`${name}=`))
            ?.split('=')[1];
    };
    const token = getCookieValue(cookie, 'token')
    return axios.create({
        baseURL: process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:6565',
        withCredentials: true,
        headers: {
            ...(token && { Authorization: `Bearer ${token}` }),
            ...(process.env.NEXT_PUBLIC_API_KEY && { 'key': process.env.NEXT_PUBLIC_API_KEY })
        },
    })
}