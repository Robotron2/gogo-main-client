import { Link } from "react-router-dom"
import Button from "../../../Components/Utils/Button"
// import toast from "react-hot-toast"

const Hero = () => {
	// const toastUser = () => {
	// 	toast.error("User registrations will be online once we launch fully")
	// }
	return (
		<>
			<section className="hero-section">
				<div className="overlay" />
				<div className="container">
					<div className="row hero-grid">
						<div className="col-lg-6 col-md-12 hero-content">
							<span className="transport-text">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="8"
									height="9"
									viewBox="0 0 8 9"
									fill="none"
								>
									<circle cx="4" cy="4.5" r="4" fill="white" />
								</svg>
								TRANSPORTATION
							</span>
							<h1 className="hero-text">
								Making <span className="cyan-text">rides</span> seamless and
								<span className="cyan-text"> accessible</span>.
							</h1>
							<p className="hero-paragraph">
								Book your rides at affordable prices.
							</p>
							<div className="input-group rounded-pill bg-white p-1">
								<div className="input-group-prepend rounded-pill bg-white">
									<span
										className="input-group-text rounded-pill bg-white"
										style={{ border: "none" }}
									>
										{/* <i className="fas fa-map-marker-alt" /> */}
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M3.25 10.1433C3.25 5.24427 7.15501 1.25 12 1.25C16.845 1.25 20.75 5.24427 20.75 10.1433C20.75 12.5084 20.076 15.0479 18.8844 17.2419C17.6944 19.4331 15.9556 21.3372 13.7805 22.3539C12.6506 22.882 11.3494 22.882 10.2195 22.3539C8.04437 21.3372 6.30562 19.4331 5.11556 17.2419C3.92403 15.0479 3.25 12.5084 3.25 10.1433ZM12 2.75C8.00843 2.75 4.75 6.04748 4.75 10.1433C4.75 12.2404 5.35263 14.5354 6.4337 16.526C7.51624 18.5192 9.04602 20.1496 10.8546 20.995C11.5821 21.335 12.4179 21.335 13.1454 20.995C14.954 20.1496 16.4838 18.5192 17.5663 16.526C18.6474 14.5354 19.25 12.2404 19.25 10.1433C19.25 6.04748 15.9916 2.75 12 2.75ZM12 7.75C10.7574 7.75 9.75 8.75736 9.75 10C9.75 11.2426 10.7574 12.25 12 12.25C13.2426 12.25 14.25 11.2426 14.25 10C14.25 8.75736 13.2426 7.75 12 7.75ZM8.25 10C8.25 7.92893 9.92893 6.25 12 6.25C14.0711 6.25 15.75 7.92893 15.75 10C15.75 12.0711 14.0711 13.75 12 13.75C9.92893 13.75 8.25 12.0711 8.25 10Z"
												fill="#0E532E"
											/>
										</svg>
									</span>
								</div>
								<input
									type="text"
									className="form-control rounded-pill bg-white"
									placeholder="Secretariat Junction"
									style={{ border: "none" }}
									disabled
								/>
							</div>
							<div className="input-group rounded-pill bg-white p-1">
								<div className="input-group-prepend rounded-pill bg-white">
									<span
										className="input-group-text rounded-pill bg-white"
										style={{ border: "none" }}
									>
										{/* <i className="fa fa-dot-circle-o" aria-hidden="true" /> */}
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V3.28169C16.9842 3.64113 20.3589 7.01581 20.7183 11.25H22C22.4142 11.25 22.75 11.5858 22.75 12C22.75 12.4142 22.4142 12.75 22 12.75H20.7183C20.3589 16.9842 16.9842 20.3589 12.75 20.7183V22C12.75 22.4142 12.4142 22.75 12 22.75C11.5858 22.75 11.25 22.4142 11.25 22V20.7183C7.01581 20.3589 3.64113 16.9842 3.28169 12.75H2C1.58579 12.75 1.25 12.4142 1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H3.28169C3.64113 7.01581 7.01581 3.64113 11.25 3.28169V2C11.25 1.58579 11.5858 1.25 12 1.25ZM12 4.75C7.99594 4.75 4.75 7.99594 4.75 12C4.75 16.0041 7.99594 19.25 12 19.25C16.0041 19.25 19.25 16.0041 19.25 12C19.25 7.99594 16.0041 4.75 12 4.75ZM12 9.75C10.7574 9.75 9.75 10.7574 9.75 12C9.75 13.2426 10.7574 14.25 12 14.25C13.2426 14.25 14.25 13.2426 14.25 12C14.25 10.7574 13.2426 9.75 12 9.75ZM8.25 12C8.25 9.92893 9.92893 8.25 12 8.25C14.0711 8.25 15.75 9.92893 15.75 12C15.75 14.0711 14.0711 15.75 12 15.75C9.92893 15.75 8.25 14.0711 8.25 12Z"
												fill="#0E532E"
											/>
										</svg>
									</span>
								</div>
								<input
									type="text"
									className="form-control rounded-pill bg-white"
									placeholder="School gate, Ikole Campus"
									style={{ border: "none" }}
									disabled
								/>
							</div>
							<div>
								{/* <Link>
									<Button
										className="btn btn-lg rounded-pill  text-white w-75"
										name={"Book your Ride now!"}
										clickProp={toastUser}
									/>
								</Link> */}
								<Link to={"/dashboard/user"}>
									<Button
										className="btn btn-lg rounded-pill  text-white w-75"
										name={"Book your Ride now!"}
									/>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Hero
