import Layout from "@/components/layout/Layout"
import Bgmap from "@/components/sections/homepage1/Bgmap"
import Hero1 from "@/components/sections/homepage1/Hero1"
import Howitwork1 from "@/components/sections/homepage1/Howitwork1"
import Info1 from "@/components/sections/homepage1/Info1"
import Info2 from "@/components/sections/homepage1/Info2"
import Services1 from "@/components/sections/homepage1/Services1"
export default function Home() {

    return (
        <>
            <Layout>
                <Hero1 />
                <Services1 />
                <Info1 />
                <Info2 />
                <Howitwork1 />
                <Bgmap />
            </Layout>
        </>
    )
}