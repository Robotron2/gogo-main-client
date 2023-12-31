/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import "../Css/Dashboard.css"
import useAuth from "../../../Components/CustomHooks/UseAuth"

import Button from "../../../Components/Utils/Button"

import { motion } from "framer-motion"
import UseBooking from "../../../Components/CustomHooks/bookings/UseBookings"
import { useNavigate } from "react-router-dom"
import avatar from "../../../assets/user.png"
import Footer from "../../../Components/Layouts/Footer"
import CustomNav from "../../../Components/Utils/CustomNav"
import UseDashboard from "../../../Components/CustomHooks/dashboard/UseDashboard"
import CustomNavMobile from "../Components/CustomNavMobile"
import TripCards from "../Components/TripCards"
import TripCard from "../Components/TripCard"
import axios from "axios"

const Dashboard = () => {
	const [auth] = useAuth()
	const { view, setView } = UseDashboard()
	const [lastestRide, setLatestRide] = useState(null)
	const { user } = auth
	const { email, first_name } = user
	const localAuth = JSON.parse(sessionStorage.getItem("auth"))

	const navigate = useNavigate()
	const navBooking = () => {
		setView("booking")
		navigate("/dashboard/booking")
	}

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
			setLatestRide(response.data.history[0])
			// console.log(response)
		}

		// console.log(rideHistories)
	}
	useEffect(() => {
		fetchHistory()
	}, [view])

	return (
		<motion.div
			animate={{ opacity: 1 }}
			initial={{ opacity: 0 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
		>
			<>
				<CustomNav />
			</>
			<div className="user-profile-wrapper">
				<div className="wrapper-container container">
					<div className="profile-wrapper container">
						<div className="profile">
							<div className="user-avatar">
								<img src={avatar} alt="avatar" />
							</div>
							<div className="user-details">
								<h6>{first_name}</h6>
								<p>Welcome back!</p>
							</div>
						</div>
					</div>

					<div className="book-ride-btn">
						<button
							// className="btn btn-teal-dark rounded-pill w-100"
							className=""
							onClick={navBooking}
						>
							Book a ride
						</button>
					</div>
				</div>
			</div>
			<div className="trips ">
				<div className="container">
					<div className="div-title text-center">
						<h6>Last Trip</h6>
					</div>
					{lastestRide !== undefined && lastestRide !== null ? (
						<div className="trip-cards">
							<TripCard trip={lastestRide} />
						</div>
					) : (
						<>
							<center>No ride booked yet</center>
						</>
					)}

					<div className="trip-cards">
						{/* {myArray.map((item, i) => {
							return (
								<div className="trip-card" key={i}>
									<div className="details mx-auto">
										<div className="trip">
											<p>
												<span className="text-secondary">Trip id:</span> 876
											</p>
											<p>
												<span className="text-secondary">Date:</span> 20/12/2022
											</p>
										</div>
										<div className="price">
											<p>
												500.00 <span>Naira</span>
											</p>
										</div>
									</div>
									<center>
										<hr />
									</center>
									<div className="time-location ">
										<div className="locations">
											<div className="loc-icon-wrapper">
												<div className="loc-icon">
													<i
														className="fa fa-circle circle-icon"
														aria-hidden="true"
													/>
													<div className="icon-border">
														<span className="border-right-line mx-auto"></span>
													</div>
													<i
														className="fa fa-map-marker marker-icon"
														aria-hidden="true"
													/>
												</div>
											</div>
											<div className="pickup-drop">
												<div className="pickup">
													<h6>Pickup location:</h6>
													<p>Junction</p>
												</div>
												<div className="drop">
													<h6>Drop-off location:</h6>
													<p>Junction</p>
												</div>
											</div>
										</div>
										<div className="time">
											<div className="loc-icon-wrapper">
												<div className="loc-icon">
													<i
														className="fa fa-circle circle-icon"
														aria-hidden="true"
													/>
													<div className="icon-border">
														<span className="border-right-line mx-auto"></span>
													</div>
													<i
														className="fa fa-map-marker marker-icon"
														aria-hidden="true"
													/>
												</div>
											</div>
											<div className="time-start-end">
												<div className="pickup-time">
													<h6>Pickup time:</h6>
													<p>7:00am</p>
												</div>
												<div className="drop-time">
													<h6>Drop-off time:</h6>
													<p>12:00pm</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							)
						})} */}
					</div>
				</div>
			</div>
			<Footer />
		</motion.div>
	)
}

export default Dashboard
