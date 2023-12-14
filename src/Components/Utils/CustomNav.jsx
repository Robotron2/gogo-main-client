import { Link, useNavigate } from "react-router-dom"

import toast from "react-hot-toast"
// import Logo from "../../assets/Logo"
import LogoLight from "../../assets/gogo-light.png"
import Button from "./Button"
import UseDashboard from "./../CustomHooks/dashboard/UseDashboard"
import CustomNavMobile from "../../Pages/User/Components/CustomNavMobile"

const CustomNav = () => {
	const navigate = useNavigate()
	const { view, setView } = UseDashboard()
	const handleLogout = () => {
		const auth = JSON.parse(sessionStorage.getItem("auth"))
		if (auth) {
			sessionStorage.removeItem("auth")
			sessionStorage.removeItem("book")
			toast.success("Logged out successfully!")
			navigate("/login")
		}
	}

	return (
		<>
			<div className="custom-nav-wrapper">
				<div className="dash-hero-wrapper">
					<div className="dash-wrapper container">
						<div className="dash-message">
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
							<h6>
								<span className="fa fa-circle dot" aria-hidden="true" />
								Home
							</h6>
							<p>Let&apos;s get you to your next stop.</p>
						</div>
						<div className="logout">
							{/* <Button className={"btn btn-sm bg-white"} name={"Logout"} /> */}
							<Button
								className={"btn btn-sm bg-white"}
								name={"Logout"}
								clickProp={handleLogout}
							/>
						</div>
					</div>
				</div>
				<div className="dash-nav-wrapper mt-4">
					<div className="dash-links-div container">
						<div
							className={
								view === "user" ? "dash-link dash-link-active" : "dash-link"
							}
							onClick={() => {
								setView("user")
								if (view !== "user") {
									navigate("/dashboard/user")
								}
							}}
						>
							<i className="fa fa-desktop" aria-hidden="true"></i>
							<p>
								<Link>Dashboard</Link>
							</p>
						</div>
						<div
							className={
								view === "booking" ? "dash-link dash-link-active" : "dash-link"
							}
							onClick={() => {
								setView("booking")
								if (view !== "booking") {
									navigate("/dashboard/booking")
								}
							}}
						>
							<i className="fa fa-child" aria-hidden="true"></i>

							<p>
								<Link>Booking</Link>
							</p>
						</div>

						<div
							className={
								view === "summary" ? "dash-link dash-link-active" : "dash-link"
							}
							onClick={() => {
								setView("summary")
								if (view !== "summary") {
									navigate("/dashboard/summary")
								}
							}}
						>
							<i className="fa fa-bus" aria-hidden="true"></i>

							<p>
								<Link>Summary</Link>
							</p>
						</div>
						<div
							className={
								view === "history" ? "dash-link dash-link-active" : "dash-link"
							}
							onClick={() => {
								setView("history")
								if (view !== "history") {
									navigate("/dashboard/history")
								}
							}}
						>
							<i className="fa fa-bus" aria-hidden="true"></i>

							<p>
								<Link>My trips</Link>
							</p>
						</div>
						<div
							className={
								view === "membership"
									? "dash-link dash-link-active"
									: "dash-link"
							}
						>
							<i className="fa fa-child" aria-hidden="true"></i>

							<p>
								<Link>Membership</Link>
							</p>
						</div>
						<div
							className={
								view === "profile" ? "dash-link dash-link-active" : "dash-link"
							}
						>
							<i className="fa fa-user" aria-hidden="true"></i>

							<p>
								<Link>Profile</Link>
							</p>
						</div>
					</div>
				</div>
			</div>

			<CustomNavMobile />
		</>
	)
}

export default CustomNav
