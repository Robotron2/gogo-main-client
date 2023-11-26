import { Link } from "react-router-dom"
import LogoLight from "../../assets/gogo-light.png"
import toast from "react-hot-toast"

const Footer = () => {
	const toastUser = () => {
		toast.error(
			"User interactions that require user data will be online once we launch fully."
		)
	}
	return (
		<>
			<section className="footer">
				<div className="footer-overlay" />
				<div className="container footer-wrapper">
					<div className="footer-address">
						<div className="logo-address-wrapper">
							<div className="logo-address">
								<img src={LogoLight} alt="Logo" width={100} height={100} />
								<div className="address-text">
									<p>564, Example road, F1 456 Caron Town</p>
									<p>Office No 346</p>
								</div>
							</div>
							<div className="footer-phone">
								<p>+234-9161127624</p>
							</div>
						</div>

						<div className="icon-links">
							<div className="icon-links-wrapper">
								<div className="whatsapp">
									<Link>
										<i className="fa fa-whatsapp" aria-hidden="true" />
									</Link>
								</div>
								<div className="instagram">
									<Link>
										<i className="fa fa-instagram" aria-hidden="true" />
									</Link>
								</div>
								<div className="facebook">
									<Link>
										<i className="fa fa-facebook" aria-hidden="true" />
									</Link>
								</div>
							</div>
						</div>
					</div>

					<div className="footer-about">
						<h4>About Us</h4>
						<div>
							<p>Our Mission</p>
							<p>Our Vision</p>
							<p>Contact Us</p>
						</div>
					</div>
					<div className="footer-services">
						<h4>Our services</h4>
						<div>
							<p>Rides</p>
							<p>Delivery</p>
							<p>Our Routes</p>
						</div>
					</div>
					<div className="footer-hr" />
					<div className="footer-subscribe">
						<div className="subscribe-title">
							<h4>Subscribe to our Newsletters</h4>
						</div>
						<div className="footer-sub-email">
							<div className="input-div">
								<input type="email" placeholder="Enter your email address" />
							</div>
							<div className="sub-btn-div">
								<button className="sub-btn" onClick={toastUser}>
									Subscribe now !
								</button>
							</div>
						</div>
					</div>
				</div>
				<br />
				<br />
				<div className="footer-white-band">
					<p>Copyright. All rights reserved.</p>
				</div>

				<br />
				<br />
				<br />
			</section>
		</>
	)
}

export default Footer
