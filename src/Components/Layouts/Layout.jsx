import Header from "./Header"
import { Helmet } from "react-helmet"
import "./../../App.css"
import Footer from "./Footer"

import { Toaster } from "react-hot-toast"
import CustomNav from "../Utils/CustomNav"

// eslint-disable-next-line react/prop-types
const Layout = ({ children, title, description, keywords, author }) => {
	return (
		<div>
			<Helmet>
				<meta charSet="utf-8" />
				<meta name="description" content={description} />
				<meta name="keywords" content={keywords} />
				<meta name="author" content={author} />
				<title>{title}</title>
			</Helmet>
			<Toaster />
			{/* {title == "Dashboard" ? <CustomNav /> : <Header />} */}
			{title === "Dashboard" && <CustomNav />}
			{title === "Booking" && <CustomNav />}
			{title !== "Booking" && title !== "Dashboard" && <Header />}
			{/* {title == "Booking-summary" ? <CustomNav /> : <Header />} */}

			<main>{children}</main>
			<Footer />
		</div>
	)
}

Layout.defaultProps = {
	title: "GoGo - Ride now",
	description: "Transport System",
	keywords: "Uber, Taxi, GoGo",
	author: "Theophilus",
}

export default Layout
