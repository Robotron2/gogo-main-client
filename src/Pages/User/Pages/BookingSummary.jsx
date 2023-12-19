/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import Layout from "../../../Components/Layouts/Layout"
import "../Css/BookingSummary.css"
import UseDashboard from "../../../Components/CustomHooks/dashboard/UseDashboard"
import taxi from "../../../assets/taxi-gogo-animated.png"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

const BookingSummary = () => {
	const { view, setView } = UseDashboard()
	const [summaryStatus, setSummaryStatus] = useState(false)
	const [bookingSummaryData, setBookingSummaryData] = useState({
		first_name: "",
		last_name: "",
		start: "",
		end: "",
		price: "",
		passengers: "",
		reroute: "",
		journeyDate: "",
		driverName: "",
		phone: "",
		carModel: "",
	})
	const navigate = useNavigate()

	const checkSummary = () => {
		const cachedBooking = JSON.parse(sessionStorage.getItem("book"))

		if (cachedBooking === null) {
			setSummaryStatus(false)
		}
		if (cachedBooking !== null) {
			// console.log(cachedBooking)
			setSummaryStatus(true)
			// console.log(cachedBooking.user.first_name)
			const { first_name, last_name } = cachedBooking.user
			const { start, end, price, passengers, reroute, journeyDate } =
				cachedBooking.journey
			const { name, phone } = cachedBooking.driver.driverInfo
			const { model } = cachedBooking.driver.carInfo
			setBookingSummaryData({
				first_name,
				last_name,
				start,
				end,
				price,
				passengers,
				reroute,
				journeyDate,
				driverName: name,
				phone,
				carModel: model,
			})
		}
		// console.log(cachedBooking)
	}

	useEffect(() => {
		checkSummary()
	}, [view])

	return (
		<>
			<motion.div
				animate={{ opacity: 1 }}
				initial={{ opacity: 0 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.5 }}
			>
				<Layout title={"Booking"}>
					{summaryStatus ? (
						<>
							(
							<div className="container my-4">
								<center>
									<div className="booking-container">
										<div className="booking-title">
											<h3>Booking confirmed!</h3>
											{/* <p style={{ fontSize: "13px" }}> */}
											<p>Thank you for riding with GoGo. Have a smooth ride!</p>
										</div>
										<div className="booking-card">
											<div className="card-hd text-center">
												<h6>BOOKING SUMMARY</h6>
											</div>
											<div className="card-bd-1">
												<h6>PASSENGER DETAILS</h6>
												<div className="card-detail">
													<div className="card-info">
														<p>Fullname</p>
														<p>{`${bookingSummaryData?.first_name} ${bookingSummaryData?.last_name}`}</p>
													</div>
													<div className="card-info">
														<p>Number of Passengers</p>
														<p>{bookingSummaryData?.passengers} </p>
													</div>
												</div>
											</div>
											<div className="card-bd-1">
												<h6>DRIVER DETAILS</h6>
												<div className="card-detail">
													<div className="card-info">
														<p>Fullname</p>
														<p>{bookingSummaryData?.driverName}</p>
													</div>
													<div className="card-info">
														<p>Phone</p>
														<p>{bookingSummaryData?.phone}</p>
													</div>
													<div className="card-info">
														<p>Car Model</p>
														<p>{bookingSummaryData?.carModel} </p>
													</div>
												</div>
											</div>
											<div className="card-bd-1">
												<h6>DEPARTURE</h6>
												<div className="card-detail">
													<div className="card-info">
														<p>DATE</p>

														<p>{bookingSummaryData?.journeyDate}</p>
													</div>
													<div className="card-info">
														<p>FROM</p>
														<p>{bookingSummaryData?.start}</p>
													</div>
													<div className="card-info">
														<p>TO</p>
														<p>{bookingSummaryData?.end}</p>
													</div>
												</div>
											</div>
											{bookingSummaryData?.reroute === true && (
												<div className="card-bd-2">
													<h6>REROUTE</h6>
													<div className="card-detail">
														<div className="card-info">
															<p>DATE</p>

															<p>{bookingSummaryData?.journeyDate}</p>
														</div>
														<div className="card-info">
															<p>FROM</p>
															<p>{bookingSummaryData?.end}</p>
														</div>
														<div className="card-info">
															<p>TO</p>
															<p>{bookingSummaryData?.start}</p>
														</div>
													</div>
												</div>
											)}
											<div className="card-bt text-right">
												<h6>
													TOTAL {bookingSummaryData?.price}
													<span>NGN</span>
												</h6>
											</div>
										</div>
									</div>
								</center>
							</div>
							)
						</>
					) : (
						<>
							<div>
								<center>
									<div className="container ">
										<div className="img-and-text-wrapper">
											<div className="img-text-wrapper">
												<div className="img-text">
													<p>No active bookings for this session.</p>
													<button
														onClick={() => {
															setView("history")
															if (view !== "history") {
																navigate("/dashboard/history")
															}
														}}
													>
														Check history
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
				</Layout>
			</motion.div>
		</>
	)
}

export default BookingSummary
