import Link from "next/link";
import { useState } from "react";


export default function Sidebar({ openClass, handleMobileMenuClose }) {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };
    return (
        <>
            <div className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar ${openClass}`}>
                <div className="mobile-header-wrapper-inner">
                    <div className="mobile-header-content-area">

                        <div className="burger-icon burger-close" onClick={handleMobileMenuClose}><span className="burger-icon-top" /><span className="burger-icon-mid" /><span className="burger-icon-bottom" /></div>
                        <div className="perfect-scroll">
                            <div className="mobile-menu-wrap mobile-header-border mt-15">
                                <nav className="mt-15">
                                    <ul className="mobile-menu font-heading">
                                        <li><Link href="/">Home</Link></li>
                                        <li><Link href="/about">About</Link></li>
                                        <li><Link href="/services">Services</Link></li>
                                        <li><Link href="/contact">Contact</Link></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
