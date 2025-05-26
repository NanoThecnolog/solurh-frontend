import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import styles from './styles.module.scss'
import { Autoplay, EffectFade } from 'swiper/modules';
import BannerTemplate from '../banner/Template';
import { bannersContent } from '@/utils/variables';

export default function Carousel() {
    const banners = ['/img/banner-1.png', '/img/banner-2.png', '/img/banner-3.png']
    return (
        <section className={styles.container}>
            <Swiper
                modules={[Autoplay, EffectFade]}
                className={styles.carousel}
                spaceBetween={0}
                loop={false}
                //autoplay={{ delay: 3000, disableOnInteraction: false }}
                speed={1500}
                //effect='fade'
                pagination={{ clickable: true }}
            //navigation
            >
                {
                    bannersContent.map((data, index) =>
                        <SwiperSlide key={index} className={styles.carouselItem}>
                            {
                                //<img src={img ?? '/img/fundo-degrade-1.jpg'} alt={`banner ${index}`} />
                                <BannerTemplate data={data} />
                            }
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </section>
    )
}