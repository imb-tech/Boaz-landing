import Link from "next/link";

export default function Xizmatlar() {

    const data = [
        { rasm: "cargo-ship.png", nom: "Dengiz tashuvlari" },
        { rasm: "plane.png", nom: "Havo tashuvlari" },
        { rasm: "delivery.png", nom: "Yer orqali tashuvlar" },
        { rasm: "forklift.png", nom: "Ombor va tarqatish" },
        { rasm: "train.png", nom: "Temir yo‘l logistika" },
        { rasm: "worldwide.png", nom: "Xalqaro tashuvlar" }
    ]

    return (
        <section className="section mt-100">
            <div className="container">
                <h2 className="title-favicon mb-20 wow animate__animated animate__fadeIn">Biz taklif qilamiz</h2>
                <div className="row align-items-end">
                    <div className="col-lg-8 col-md-8 mb-30">
                        <p className="font-md color-gray-700 wow animate__animated animate__fadeIn">
                            Transport xizmatlarimizga xush kelibsiz. Biz eng yaxshi xizmatni taqdim etamiz.
                        </p>
                    </div>
                </div>

                {/* Xizmatlar ro'yxati */}
                <div className="mt-20 box-background-offer">
                    <div className="bg-under" />
                    <div className="row">
                        {data.map((xizmat, i) => (
                            <div className="col-lg-4 col-md-6 wow animate__animated animate__fadeIn" key={i}>
                                <div className="card-offer hover-up">
                                    <div className="card-image">
                                        <img src={`/assets/imgs/page/homepage1/${xizmat.rasm}`} alt="xizmat" />
                                    </div>
                                    <div className="card-info">
                                        <h5 className="color-brand-2 mb-15">{xizmat.nom}</h5>
                                        <p className="font-sm color-grey-900 mb-35">
                                            12 yildan ortiq tajribaga ega bo‘lgan yuk tashish xizmatlari.
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
