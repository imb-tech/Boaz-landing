import Link from "next/link";


export default function Info2() {
    return (
        <>
            <section className="section mt-55 bg-1 position-relative pt-90 pb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h3 className="color-grey-900 mb-20 mt-15 wow animate__animated animate__fadeIn">Proud to Deliver<br className="d-none d-lg-block" />Excellence Every Time</h3>
                            <p className="font-md color-grey-900 mb-40 wow animate__animated animate__fadeIn">Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper
                                quis lectus nulla. Interactively transform magnetic growth strategies whereas prospective
                                "outside the box" thinking.</p>
                            <div className="row">
                                <div className="col-lg-6 mb-30">
                                    <h6 className="chart-title font-md-bold color-grey-900 wow animate__animated animate__fadeIn">
                                        Boost your sale</h6>
                                    <p className="font-xs color-grey-900 wow animate__animated animate__fadeIn">The latest
                                        design trends meet hand-crafted templates.</p>
                                </div>
                                <div className="col-lg-6 mb-30">
                                    <h6 className="feature-title font-md-bold color-grey-900 wow animate__animated animate__fadeIn">
                                        Introducing New Features</h6>
                                    <p className="font-xs color-grey-900 wow animate__animated animate__fadeIn">The latest
                                        design trends meet hand-crafted templates.</p>
                                </div>
                            </div>
                            <div className="mt-20"><Link className="btn btn-brand-2 mr-20 wow animate__animated animate__fadeIn" href="#contact">Contact Us</Link>
                         </div>
                        </div>
                    </div>
                </div>
                <div className="box-image-touch" />
            </section>
        </>
    )
}
