import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import styles from './styles.module.scss'
import { gtag } from '@/utils/GoogleTag'
import { useEffect } from 'react'
import Hero from '@/components/landing/Hero'
import Benefits from '@/components/landing/Benefits'
import Testimonials from '@/components/landing/Testimonials'
import CTASection from '@/components/landing/CTASection'

interface LandingProps {
    id: string
}

export default function Landing({ id }: LandingProps) {

    const handleClick = async () => {
        gtag.event('teste-de-conversao', {
            send_to: 'AW-17359122520/IxBBCK-f2_8aENjgvNVA',
            value: 1.0,
            currency: 'BRL',
            transaction_id: id,
            event_callback: () => {
                console.log('evento disparado.')
            }
        })
    }

    useEffect(() => {
        console.log(id)
    }, [id])
    return (
        <>
            <main className={styles.container}>
                <Hero />
                <Benefits />
                <Testimonials />
                <CTASection />
            </main>
        </>
    )
}
export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
    const id = ctx.query?.id
    console.log(id)
    if (!id || typeof id !== 'string') {
        return {
            props: { id: 'id não recebido' }
        }
    }

    return {
        props: { id }
    }
}