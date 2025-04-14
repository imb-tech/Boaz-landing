import Link from "next/link";
import { useState } from "react";
import ModalVideo from 'react-modal-video';
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";


export default function Hero1Slider() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    el: '.swiper-pagination-banner'
                }}
                className="swiper-wrapper"
            >
                <SwiperSlide>
                    <div className="banner-1" style={{ backgroundImage: 'url(assets/imgs/page/homepage1/banner.png)' }}>
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-12">
                                    <p className="font-md color-white mb-15 wow animate__animated animate__fadeIn" data-wow-delay=".0s">Trust Us with Your Shipment - We Deliver Worldwide!</p>
                                    <h1 className="color-white mb-25 wow animate__animated animate__fadeInUp" data-wow-delay=".0s">Boaz.uz - Fast, Reliable, and Convenient Shipping Service<br className="d-none d-lg-block" />Logistic Company</h1>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <p className="font-md color-white mb-20 wow animate__animated animate__fadeInUp" data-wow-delay=".0s">
                                               Shipping with us is easy and convenient! From small packages to large containers – we deliver everything on time. Just provide the destination, and we’ll take care of the rest!</p>
                                        </div>
                                    </div>

                                </div>
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="banner-1" style={{ backgroundImage: 'url(assets/imgs/page/homepage1/banner-2.png)' }}>
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-12">
                                    <p className="font-md color-white mb-15 wow animate__animated animate__fadeIn" data-wow-delay=".0s">Trust Us with Your Shipment - We Deliver Worldwide!</p>
                                    <h1 className="color-white mb-25 wow animate__animated animate__fadeInUp" data-wow-delay=".0s">Boaz.uz - Fast, Reliable, and Convenient Shipping Service<br className="d-none d-lg-block" />Logistic Company</h1>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <p className="font-md color-white mb-20 wow animate__animated animate__fadeInUp" data-wow-delay=".0s">
                                               Shipping with us is easy and convenient! From small packages to large containers – we deliver everything on time. Just provide the destination, and we’ll take care of the rest!</p>
                                        </div>
                                    </div>

                                </div>
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="swiper-pagination swiper-pagination-banner" />
        </>
    )
}
