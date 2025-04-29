import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import styles from './styles.module.scss'
import { Autoplay, EffectFade } from 'swiper/modules';

export default function Carousel() {
    const banners = ['/img/banner-1.png', '/img/banner-2.png', '/img/banner-3.png']
    return (
        <section className={styles.container}>
            <Swiper
                modules={[Autoplay, EffectFade]}
                className={styles.carousel}
                spaceBetween={0}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                speed={1500}
                //effect='fade'
                pagination={{ clickable: true }}
            //navigation
            >
                {
                    banners.map((img, index) =>
                        <SwiperSlide key={index} className={styles.carouselItem}>
                            <img src={img} alt={`banner ${index}`} />
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </section>
    )
}