import "../Css/Home.css"
import Layout from "../../../Components/Layouts/Layout"
import Hero from "./../Components/Hero"
import Overview from "./../Components/Overview"
// import TransportTech from "./../Components/TransportTech"
import Services from "./../Components/Services"
// import Testimonials from "./../Components/Testimonials"
// import WhatWeDo from "./../Components/WhatWeDo"
import Cta from "./../Components/Cta"
import Faq from "../Components/Faq"
import { motion } from "framer-motion"
import Fleet from "../Components/Fleet"

const Home = () => {
	return (
		<motion.div
			animate={{ opacity: 1 }}
			initial={{ opacity: 0 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
		>
			<Layout>
				<Hero />
				<Overview />
				<Services />
				<Fleet />
				{/* <TransportTech /> */}
				{/* <Testimonials /> */}
				{/* <WhatWeDo /> */}
				<Cta />
				<Faq />
			</Layout>
		</motion.div>
	)
}

export default Home
