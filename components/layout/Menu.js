import Link from "next/link"

export default function Menu() {
    return (
        <>

            <ul className="main-menu">
                <li><Link className="active" href="/">Home</Link> </li>
                <li><Link className="active" href="#about">About</Link> </li>
                <li><Link className="active" href="#services">Services</Link> </li>
                <li><Link href="#contact">Contact</Link></li>
            </ul>
        </>
    )
}
