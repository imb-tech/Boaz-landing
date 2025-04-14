import Link from "next/link";


export default function Info1() {
    return (
        <>
            <section className="section mt-85">
                <div className="container">
                    <div className="text-center"><img className="mb-15" src="/assets/imgs/template/icons/favicon.svg" alt="transp" />
                        <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">
                        Soha yetakchilari uchun natijalarni yetkazib berish</p>
                        <h2 className="color-brand-2 mb-65 mt-15 wow animate__animated animate__fadeIn">
                        Mijozlarimizga yuqori sifatli xizmat ko‘rsatish uchun jamoamiz tinimsiz ishlaydi.
                        </h2>
                    </div>
                    <div className="row mt-50 align-items-center">
                        <div className="col-xl-7 col-lg-6 mb-30">
                            <div className="box-images-pround">
                                <div className="box-images wow animate__animated animate__fadeIn"><img className="img-main" src="/assets/imgs/page/homepage1/img1.png" alt="transp" />
                                    <div className="image-2 shape-3"><img src="/assets/imgs/page/homepage1/icon1.png" alt="transp" /></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 mb-30">
                            <div className="box-info-pround">
                                <h3 className="color-brand-2 mb-15 wow animate__animated animate__fadeIn">
                                    🚀 Eng zamonaviy texnologiyalar bilan tez va ishonchli yetkazib berish
                                </h3>
                                <p className="font-md color-grey-500 wow animate__animated animate__fadeIn">
                                    O‘tgan yillar davomida ishonchli hamkorlik tarmog‘ini kengaytirib, yetkazib berish jarayonlarini yuqori darajada optimallashtirishga erishdik. Texnologiyalarni chuqur integratsiya qilish orqali mijozlarimizga har bir bosqichda ko‘proq shaffoflik va nazorat imkonini yaratdik.
                                </p>
                                <div className="mt-30">
                                    <ul className="list-ticks">
                                        <li className="wow animate__animated animate__fadeIn">
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>Vazifalarni kuzatish 
                                        </li>
                                        <li className="wow animate__animated animate__fadeIn">
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg> Vazifalarni vizuallashtirish 
                                        </li>
                                        <li className="wow animate__animated animate__fadeIn">
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>Muddatlarga o'z vaqtida yetib borish
                                        </li>
                                        <li className="wow animate__animated animate__fadeIn">
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg> Vazifalar orasida bog'liqlik yaratish
                                        </li>
                                        <li className="wow animate__animated animate__fadeIn">
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>Hujjatlar almashinuvi va muhokama
                                        </li>
                                        <li className="wow animate__animated animate__fadeIn">
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>Har bir loyiha uchun vaqt monitoringi
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
