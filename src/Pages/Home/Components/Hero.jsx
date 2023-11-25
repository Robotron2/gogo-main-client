import { Link } from "react-router-dom"
import Button from "../../../Components/Utils/Button"
import toast from "react-hot-toast"

const Hero = () => {
	const toastUser = () => {
		toast.error("User registrations will be online ones we launch fully")
	}
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
										<i className="fas fa-map-marker-alt" />
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
										<i className="fa fa-dot-circle-o" aria-hidden="true" />
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
								<Link>
									<Button
										className="btn btn-lg rounded-pill  text-white w-75"
										name={"Book your Ride now!"}
										clickProp={toastUser}
									/>
								</Link>
								{/* <Link to={"/dashboard/user"}>
									<Button
										className="btn btn-lg rounded-pill  text-white w-75"
										name={"Book your Ride now!"}
									/>
								</Link> */}
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Hero
