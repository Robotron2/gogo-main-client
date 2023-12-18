import { Link, useNavigate } from "react-router-dom"
import LogoLight from "../../../assets/gogo-light.png"
import UseDashboard from "../../../Components/CustomHooks/dashboard/UseDashboard"
import { useState } from "react"
import toast from "react-hot-toast"
import { motion } from "framer-motion"

const CustomNavMobile = () => {
	const { view, setView } = UseDashboard()
	const [nav, setNav] = useState(false)
	const navigate = useNavigate()
	const handleLogout = () => {
		const auth = JSON.parse(sessionStorage.getItem("auth"))
		if (auth) {
			sessionStorage.removeItem("auth")
			sessionStorage.removeItem("book")
			toast.success("Logged out successfully!")
			setNav(false)
			navigate("/login")
		}
	}
	return (
		<>
			<motion.div
				animate={{ opacity: 1 }}
				initial={{ opacity: 0 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.5 }}
			>
				<div className="custom-nav-mobile-wrapper">
					<div className="custom-nav-mobile container pt-0">
						<Link to={"/dashboard/user"}>
							<img
								src={LogoLight}
								width={100}
								height={100}
								alt="logo"
								className="rounded-pill"
								onClick={() => setView("user")}
							/>
						</Link>
						<div className="nav-btn" onClick={() => setNav(!nav)}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width={32}
								height={32}
								viewBox="0 0 32 32"
								fill="none"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M2.33301 8.66683C2.33301 5.16903 5.16854 2.3335 8.66634 2.3335C12.1641 2.3335 14.9997 5.16903 14.9997 8.66683V12.2224C14.9997 12.2507 14.9997 12.2792 14.9998 12.3079C15.0004 12.6313 15.0011 12.9687 14.9202 13.2707C14.7044 14.076 14.0755 14.7049 13.2703 14.9207C12.9682 15.0016 12.6308 15.0009 12.3074 15.0003C12.2788 15.0002 12.2503 15.0002 12.2219 15.0002H8.66634C5.16854 15.0002 2.33301 12.1646 2.33301 8.66683ZM8.66634 4.3335C6.27311 4.3335 4.33301 6.2736 4.33301 8.66683C4.33301 11.0601 6.27311 13.0002 8.66634 13.0002H12.2219C12.4376 13.0002 12.5661 12.9999 12.6625 12.9955C12.7232 12.9928 12.7494 12.989 12.7559 12.9879C12.8683 12.9566 12.9561 12.8687 12.9874 12.7563C12.9885 12.7499 12.9923 12.7237 12.995 12.663C12.9994 12.5665 12.9997 12.4381 12.9997 12.2224V8.66683C12.9997 6.2736 11.0596 4.3335 8.66634 4.3335Z"
									fill="#fff"
								/>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M19.692 17C19.7206 17.0001 19.7491 17.0002 19.7775 17.0002H23.333C26.8308 17.0002 29.6663 19.8357 29.6663 23.3335C29.6663 26.8313 26.8308 29.6668 23.333 29.6668C19.8352 29.6668 16.9997 26.8313 16.9997 23.3335V19.7779C16.9997 19.7496 16.9996 19.7211 16.9996 19.6925C16.9989 19.369 16.9982 19.0316 17.0792 18.7296C17.2949 17.9244 17.9239 17.2954 18.7291 17.0797C19.0312 16.9987 19.3685 16.9994 19.692 17ZM19.2435 19.0124C19.1311 19.0437 19.0432 19.1316 19.0119 19.244C19.0108 19.2504 19.0071 19.2766 19.0043 19.3373C18.9999 19.4338 18.9997 19.5622 18.9997 19.7779V23.3335C18.9997 25.7267 20.9398 27.6668 23.333 27.6668C25.7262 27.6668 27.6663 25.7267 27.6663 23.3335C27.6663 20.9403 25.7262 19.0002 23.333 19.0002H19.7775C19.5617 19.0002 19.4333 19.0004 19.3368 19.0048C19.2761 19.0076 19.25 19.0113 19.2435 19.0124Z"
									fill="#fff"
								/>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M12.6606 19.015C12.4885 19.0009 12.2562 19.0002 11.8663 19.0002H8.66634C6.27311 19.0002 4.33301 20.9403 4.33301 23.3335C4.33301 25.7267 6.27311 27.6668 8.66634 27.6668C11.0596 27.6668 12.9997 25.7267 12.9997 23.3335V20.1335C12.9997 19.7436 12.9989 19.5114 12.9848 19.3392C12.9762 19.2341 12.9649 19.1899 12.9612 19.1781C12.9299 19.1186 12.8812 19.07 12.8217 19.0386C12.8099 19.0349 12.7657 19.0236 12.6606 19.015ZM12.8252 19.0398L12.8232 19.039L12.8252 19.0398ZM12.96 19.1747L12.9608 19.1766L12.96 19.1747ZM12.8235 17.0216C13.1077 17.0449 13.4186 17.098 13.7257 17.2545C14.1647 17.4782 14.5217 17.8351 14.7454 18.2742C14.9018 18.5813 14.955 18.8922 14.9782 19.1763C14.9997 19.4399 14.9997 19.7552 14.9997 20.0985L14.9997 23.3335C14.9997 26.8313 12.1641 29.6668 8.66634 29.6668C5.16854 29.6668 2.33301 26.8313 2.33301 23.3335C2.33301 19.8357 5.16854 17.0002 8.66634 17.0002L11.9013 17.0002C12.2446 17.0001 12.5599 17.0001 12.8235 17.0216Z"
									fill="#fff"
								/>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M16.9997 8.66683C16.9997 5.16903 19.8352 2.3335 23.333 2.3335C26.8308 2.3335 29.6663 5.16903 29.6663 8.66683C29.6663 12.1646 26.8308 15.0002 23.333 15.0002H19.5235C19.5113 15.0002 19.4991 15.0002 19.4868 15.0002C19.3482 15.0003 19.2043 15.0004 19.0718 14.9855C17.99 14.8636 17.1362 14.0099 17.0143 12.9281C16.9994 12.7955 16.9995 12.6516 16.9997 12.513C16.9997 12.5007 16.9997 12.4885 16.9997 12.4764V8.66683ZM23.333 4.3335C20.9398 4.3335 18.9997 6.2736 18.9997 8.66683V12.4764C18.9997 12.5687 18.9997 12.6236 19.0005 12.6651C19.001 12.6915 19.0018 12.703 19.0019 12.7057C19.0199 12.859 19.1408 12.9799 19.2941 12.9979C19.2969 12.9981 19.3083 12.9988 19.3347 12.9993C19.3762 13.0001 19.4312 13.0002 19.5235 13.0002H23.333C25.7262 13.0002 27.6663 11.0601 27.6663 8.66683C27.6663 6.2736 25.7262 4.3335 23.333 4.3335Z"
									fill="#fff"
								/>
							</svg>
						</div>
					</div>
				</div>

				{nav && (
					<>
						<div className="mobile-nav-overlay" onClick={() => setNav(!nav)} />

						<div className="mobile-nav-content-wrapper container px-4">
							<div className="close-nav-mobile" onClick={() => setNav(!nav)}>
								<i className="fa fa-times fa-2x" aria-hidden="true" />
							</div>
							<div className="mobile-nav-content container">
								<div
									className="nav-btn my-2"
									onClick={() => {
										setView("user")
										if (view !== "user") {
											navigate("/dashboard/user")
										}
										setNav(!nav)
									}}
								>
									Dashboard
								</div>
								<div
									className="nav-btn my-2"
									onClick={() => {
										setView("booking")
										if (view !== "booking") {
											navigate("/dashboard/booking")
										}
										setNav(!nav)
									}}
								>
									Booking
								</div>
								<div
									className="nav-btn my-2"
									onClick={() => {
										setView("summary")
										if (view !== "summary") {
											navigate("/dashboard/summary")
										}
										setNav(!nav)
									}}
								>
									Summary
								</div>
								<div
									className="nav-btn my-2"
									onClick={() => {
										setView("history")
										if (view !== "history") {
											navigate("/dashboard/history")
										}
										setNav(!nav)
									}}
								>
									Ride History
								</div>
								<div className="nav-btn my-2" onClick={handleLogout}>
									Logout
								</div>
							</div>
						</div>
					</>
				)}
			</motion.div>
		</>
	)
}

export default CustomNavMobile
