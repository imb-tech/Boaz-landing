import Link from "next/link";

export default function Xizmatlar() {

    const data = [
        { image: "cargo-ship.png", title: "Dengiz tashuvlari", desc: "Uzoq masofalarga, ayniqsa boshqa davlatlarga yuk yuborish uchun eng arzon va ishonchli usullardan biri. Dengiz yo‘li orqali katta hajmdagi yuklarni konteynerlarda xavfsiz yetkazamiz." },
        { image: "plane.png", title: "Havo tashuvlari", desc: "Tez yetkazilishi kerak bo‘lgan yuklar uchun ideal yechim. Havo transporti orqali yukingiz qisqa vaqt ichida dunyoning istalgan nuqtasiga yetkaziladi. Odatda, muhim hujjatlar yoki kichik hajmdagi qimmatbaho yuklar uchun ishlatiladi." },
        { image: "delivery.png", title: "Yer orqali tashuvlar", desc: "Mamlakat ichida yoki qo‘shni davlatlarga yuklarni avtomobil orqali tez va qulay yetkazib beramiz. Bu xizmat eng moslashuvchan va yetkazish manziliga to‘g‘ridan-to‘g‘ri borish imkonini beradi." },
        { image: "forklift.png", title: "Ombor va tarqatish", desc: "Yuklaringizni saqlash uchun xavfsiz ombor xizmatlarini taqdim etamiz. Shuningdek, ombordan mijozlarga to‘g‘ridan-to‘g‘ri yetkazib berish (distribyutsiya) jarayonlarini ham amalga oshiramiz." },
        { image: "train.png", title: "Temir yo‘l logistika", desc: "Og‘ir va katta hajmdagi yuklar uchun juda samarali transport turi. Temir yo‘l orqali ichki va xalqaro yo‘nalishlarda xavfsiz va iqtisodiy tashuvni ta'minlaymiz." },
        { image: "worldwide.png", title: "Xalqaro tashuvlar", desc: "Butun dunyo bo‘ylab yuklaringizni bojxona va hujjatlashtirish ishlari bilan birga xavfsiz yetkazib beramiz. Dengiz, havo, yer yoki temir yo‘l orqali xalqaro yetkazib berish xizmatlari mavjud." }
    ]

    return (
        <section className="section mt-100">
            <div className="container">
                <h2 className="title-favicon mb-20 wow animate__animated animate__fadeIn">Biz taklif qilamiz</h2>
                <div className="row align-items-end">
                    <div className="col-lg-8 col-md-8 mb-30">
                        <p className="font-lg color-gray-700 wow animate__animated animate__fadeIn">
                            Transport xizmatlarimizga xush kelibsiz. Biz eng yaxshi xizmatni taqdim etamiz.
                        </p>
                    </div>
                </div>

                {/* Xizmatlar ro'yxati */}
                <div className="mt-20 box-background-offer">
                    <div className="bg-under" />
                    <div className="row">
                        {data.map((xizmat, i) => (
                            <div className="col-lg-4 col-md-6  wow animate__animated animate__fadeIn" key={i}>
                                <div className="card-offer hover-up">
                                    <div className="card-image">
                                        <img src={`/assets/imgs/page/homepage1/${xizmat.image}`} alt="xizmat" />
                                    </div>
                                    <div className="card-info">
                                        <h5 className="color-brand-2 mb-15">{xizmat.title}</h5>
                                        <p className="font-md color-grey-900 mb-35">
                                            {xizmat.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
