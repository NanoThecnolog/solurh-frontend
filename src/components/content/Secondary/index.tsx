
import { Autoplay, Navigation } from 'swiper/modules'
import styles from './styles.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { swiperBreakpoints } from '@/utils/variables'
import { IoIosArrowForward } from 'react-icons/io'
import Button from '@/components/ui/Button'
import { useRouter } from 'next/navigation'

export default function SecondaryContent() {
    const router = useRouter()
    const content = [
        {
            title: 'Treinamento & Desenvolvimento',
            image: '/img/7.png'
        },
        {
            title: 'Recrutamento e Seleção',
            image: '/img/8.png'
        },
        {
            title: 'Implantação de RH',
            image: '/img/9.jpg'
        },
        {
            title: 'Pesquisa de Clima Organizacional',
            image: '/img/12.jpg'
        },
        {
            title: 'Consultoria de Carreira',
            image: '/img/10.jpg'
        },
        {
            title: 'BPO de RH',
            image: '/img/11.jpg'
        },
    ]

    function handleClick() {
        router.push('/company')
    }
    return (
        <section className={styles.container}>
            <div className={styles.textContainer}>
                <h2>Impulsionar pessoas para <strong>transformar os negócios</strong> pelo mundo</h2>
            </div>
            <div className={styles.carouselContainer}>
                <div className={styles.titleContainer}>
                    <h2>Conheça Nossas Soluções</h2>
                </div>
                <div className={styles.swiperContainer}>
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        navigation
                        autoplay={{ delay: 2000, disableOnInteraction: false }}
                        spaceBetween={20}
                        breakpoints={swiperBreakpoints}
                        loop={true}
                    >
                        {
                            content.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className={styles.swiperSlide}>
                                        <img src={item.image} alt="Serviços" />
                                        <h4>{item.title}</h4>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
            <Button click={handleClick} text='Conheça nossa soluções' Svg={IoIosArrowForward} />
        </section>
    )
}