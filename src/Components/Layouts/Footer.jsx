import { Link } from "react-router-dom"
import LogoLight from "../../assets/gogo-light.png"
import Button from "../Utils/Button"
import toast from "react-hot-toast"

const Footer = () => {
	const toastUser = () => {
		toast.error("User interactions will be online ones we launch fully")
	}
	return (
		<>
			<footer className="container-fluid mt-4 light-text w-100">
				<div className="container">
					<div className="row align-items-center ">
						<div className="col-md-3">
							<Link to={"/"}>
								<img src={LogoLight} width={120} height={110} alt="logo" />
							</Link>
							<p>
								546, Example road, F1 456 <br />
								Caron Town <br />
								Office NO 346
								<br />
								<br />
								+234916127624
							</p>
							<i className="fab fa-facebook" />
							<i className="fab fa-twitter" />
							<i className="fab fa-whatsapp" />
						</div>
						<div className="col-md-2">
							<h5 className="text-white">About Us</h5>
							<h6>Our mission</h6>
							<h6>Our vision</h6>
							<h6>Our Team</h6>
							<h6>Contact us</h6>
						</div>
						<div className="col-md-2 service-bord">
							<h5 className="text-white">Our service</h5>
							<h6>Our Ride</h6>
							<h6>Delivery</h6>
							<h6>Our Routes</h6>
							<h6>Personal Rides</h6>
							<hr className="display-mobile" />
						</div>
						<div className="col-md-4 Subscribe text-white">
							<h5 className="mb-4">Subscribe to our Newsletters</h5>
							<input
								type="email"
								placeholder="Your Email Address"
								className="mb-3 form-control"
							/>
							<div className="action text-center">
								<Button
									className={"rounded-pill mt-2  btn btn-lg"}
									name={"Subscribe Now!"}
									clickProp={toastUser}
								/>
							</div>
						</div>
					</div>
				</div>
			</footer>

			<div>
				<div
					className="text-center pt-2"
					style={{
						borderTop: "2px solid #009599",
						borderBottom: "2px solid #009599",
					}}
				>
					<h6>Copyright. All Right Reserverd</h6>
				</div>
				<div
					className="footer text-center"
					style={{ backgroundColor: "#0b4849", color: "#0b4849" }}
				>
					.
				</div>
				<div
					className="footer text-center"
					style={{ backgroundColor: "#0b4849", color: "#0b4849" }}
				>
					.
				</div>
			</div>
		</>
	)
}

export default Footer
