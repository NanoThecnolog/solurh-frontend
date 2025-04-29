
import { Autoplay, Navigation } from 'swiper/modules'
import styles from './styles.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { swiperBreakpoints } from '@/utils/variables'
import { IoIosArrowForward } from 'react-icons/io'
import Button from '@/components/ui/Button'

export default function SecondaryContent() {
    const images = ['/img/7.png', '/img/8.png', '/img/9.jpg', '/img/12.jpg']

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
                        spaceBetween={10}
                        breakpoints={swiperBreakpoints}
                        loop={true}
                    >
                        {
                            images.map((img, index) => (
                                <SwiperSlide key={index}>
                                    <div className={styles.swiperSlide}>
                                        <img src={img} alt="Serviços" />
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
            <Button text='Conheça nossa soluções' Svg={IoIosArrowForward} />
        </section>
    )
}