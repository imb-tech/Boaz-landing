
export default function Xizmatlar() {

    const data = [
        { image: "cargo-ship.png", title: "Sea Forwarding", desc: "One of the most affordable and reliable methods for shipping long distances, especially to other countries. We safely deliver large volumes of cargo in containers via sea routes." },
        { image: "plane.png", title: "Air Freight Forwarding", desc: "The ideal solution for shipments that need to be delivered quickly. Your cargo will be delivered to any corner of the world in a short time via air transport. Typically used for important documents or small, valuable items." },
        { image: "delivery.png", title: "Land Transportation", desc: "We offer fast and convenient delivery of goods by road, both within the country and to neighboring states. This service is highly flexible and allows direct delivery to the destination." },
        { image: "forklift.png", title: "Warehouse & Distribution", desc: "We provide secure storage services for your goods. Additionally, we handle direct distribution from the warehouse to customers." },
        { image: "train.png", title: "Railway Logistics", desc: "A highly efficient transport method for heavy and large cargo. We ensure safe and economical transport on both domestic and international routes via rail." },
        { image: "worldwide.png", title: "Cross Border", desc: "We ensure the safe delivery of your goods worldwide, including customs and documentation services. Sea, air, ground, and rail shipping options are available for international deliveries." }
    ]


    return (
        <section id="about" className="section mt-100">
            <div className="container">
                <h2 className="title-favicon mb-20 wow animate__animated animate__fadeIn">What We Offer</h2>
                <div className="row align-items-end">
                    <div className="col-lg-8 col-md-8 mb-30">
                        <p className="font-lg color-gray-700 wow animate__animated animate__fadeIn">
                        Welcome to our tranporation services agency. We are the best at our trans-portation service ever.
                        </p>
                    </div>
                </div>

                {/* Xizmatlar ro'yxati */}
                <div className="mt-20 box-background-offer">
                    <div className="bg-under " />
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
