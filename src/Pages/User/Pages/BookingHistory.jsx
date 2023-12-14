/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios"
import CustomNav from "../../../Components/Utils/CustomNav"
import { useEffect, useState } from "react"
import TripCards from "../Components/TripCards"
import taxi from "../../../assets/taxi-gogo-animated.png"
import { useNavigate } from "react-router-dom"
import UseDashboard from "../../../Components/CustomHooks/dashboard/UseDashboard"
import Footer from "../../../Components/Layouts/Footer"
import { motion } from "framer-motion"
const BookingHistory = () => {
	const { view, setView } = UseDashboard()
	const [userRdieHistories, setUserRideHistories] = useState([])

	const localAuth = JSON.parse(sessionStorage.getItem("auth"))
	const navigate = useNavigate()
	const fetchHistory = async () => {
		const response = await axios.get(
			`${import.meta.env.VITE_REACT_APP_API}/user-ride-list`,
			{
				headers: {
					Authorization: `Token ${localAuth?.token}`,
				},
			}
		)
		if (response.status == 200) {
			setUserRideHistories(response.data.history)
		}

		// console.log(rideHistories)
	}
	useEffect(() => {
		fetchHistory()
	}, [])
	return (
		<>
			<motion.div
				animate={{ opacity: 1 }}
				initial={{ opacity: 0 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.5 }}
			>
				<CustomNav />
				<div className="container mt-4">
					{userRdieHistories.length > 0 ? (
						<>
							<p>Booking History</p>
							<div className="px-2">
								<TripCards trips={userRdieHistories} />
							</div>
						</>
					) : (
						<>
							<div>
								<center>
									<div className="container ">
										<div className="img-and-text-wrapper">
											<div className="img-text-wrapper">
												<div className="img-text">
													<p>No ride history at all.</p>
													<button
														onClick={() => {
															setView("booking")
															if (view !== "booking") {
																navigate("/dashboard/booking")
															}
														}}
													>
														Book Ride now.
													</button>
												</div>
											</div>
											<div className="img-wrapper">
												<img src={taxi} alt="taxi" />
											</div>
										</div>
									</div>
								</center>
							</div>
						</>
					)}
				</div>
				<Footer />
			</motion.div>
		</>
	)
}

export default BookingHistory
