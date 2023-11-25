import { Link } from "react-router-dom"
import Button from "../../../Components/Utils/Button"

const WhatWeDo = () => {
	return (
		<>
			<section className="container p-5 ">
				<div className="head text-center">
					<h6 className="work"> .WHAT WE DO</h6>
					<h4 className="text-black fw-semibold">Go-Products</h4>
				</div>
				<div className="row justify-content-center align-items-center mt-5 gx-5">
					<div className="col-md-6 ">
						<div className="dashboard">
							<div className="main-board ms-5">
								<h5>Total Rides</h5>
								<h2>89,999.50</h2>
							</div>
						</div>
						<h5 className="work mt-5">Important Information</h5>
						<p className="lead ">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, assumenda exercitationem autem blanditiis distinctio inventore unde ducimus corrupti libero! Nobis
							error porro consectetur autem minus quos fugit explicabo labore deserunt.
						</p>

						<Link to={"/register"}>
							<Button className={"btn  sign-up rounded-pill mb-5"} name={"Sign Up"} />
						</Link>
					</div>
					<div className="col-md-6 ">
						<div className="col-12 search-board mb-3 mx-auto bg-grey">1</div>
						<div className="col-12 search-board mb-3 mx-auto bg-grey">2</div>
						<div className="col-12 search-board mb-3 mx-auto bg-grey">3</div>
						<div className="col-12 search-board mb-3 mx-auto bg-grey">4</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default WhatWeDo
