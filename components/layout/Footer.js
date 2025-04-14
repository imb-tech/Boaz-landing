import Link from "next/link";


export default function Footer1({ }) {
    return (
        <>
            <footer id="footer" className="footer">
                <div className="footer-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8  mb-30">
                                <div className="mb-20"><img src="/assets/imgs/template/logo-footer.svg" alt="transp" /></div>
                                <p className="font-md mb-20 color-white">We fuse our global network with our depth of expertise in
                                    air freight, ocean freight, railway transportation, trucking, and multimode transportation,
                                    also we are providing sourcing, warehousing, E-commercial fulfillment, and value-added
                                    service to our customers including kitting, assembly, customized package and business
                                    inserts, etc.</p>
                            </div>
                            <div className="col-lg-4 width-16  mb-30">
                                <h5 className="mb-10 color-brand-1">Company</h5>
                                <ul className="menu-footer">
                                    <li><Link href="#about">About</Link></li>
                                    <li><Link href="#services">Services</Link></li>
                                    <li><Link href="#contact">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
