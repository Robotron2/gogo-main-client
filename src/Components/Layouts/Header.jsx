import { Link } from "react-router-dom"
import LogoDark from "../../assets/gogo-dark.png"
import Button from "../Utils/Button"
// import toast from "react-hot-toast"

const Header = () => {
	// const toastUser = () => {
	// 	toast.error("User registrations will be online once we launch fully!")
	// }
	return (
		<>
			<div className="container-fluid">
				<div className="nav-wrapper container">
					<nav className="navbar navbar-expand-lg rounded-pill navbar-custom p-1">
						<div className="container-fluid">
							<Link className="navbar-brand text-white nav-1" to={"/"}>
								<img src={LogoDark} width={120} height={30} alt="logo" />
							</Link>

							<div
								className="collapse navbar-collapse justify-content-end nav-2"
								id="navbarSupportedContent"
							>
								{/* <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
									<li className="nav-item">
										<Link to={"/"} className="nav-link">
											Service
										</Link>
									</li>
									<li className="nav-item">
										<Link to={"/"} className="nav-link">
											Service
										</Link>
									</li>
									<li className="nav-item">
										<Link to={"/"} className="nav-link">
											Service
										</Link>
									</li>
								</ul> */}

								<Link to={"/register"}>
									<Button
										className={"btn-sign-up rounded-pill nav-3"}
										name={"Sign Up For Free"}
										// clickProp={toastUser}
									/>
								</Link>
								{/* <Link to={"/register"}>
									<Button
										className={"btn-sign-up rounded-pill nav-3"}
										name={"Sign Up For Free"}
									/>
								</Link> */}
							</div>
						</div>
					</nav>
				</div>
			</div>
		</>
	)
}

export default Header
