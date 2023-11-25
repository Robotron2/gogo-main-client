/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import "../Css/Dashboard.css"
import useAuth from "../../../Components/CustomHooks/UseAuth"
// import RideType from "./../../../Components/Utils/RideType"
import Layout from "../../../Components/Layouts/Layout"
import Button from "../../../Components/Utils/Button"
// import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import LocationsDestinations from "../Components/LocationsDestinations"
import toast from "react-hot-toast"
import axios from "axios"
import UseBooking from "../../../Components/CustomHooks/bookings/UseBookings"
import { Link, useNavigate } from "react-router-dom"
import LogoLight from "../../../assets/gogo-light.png"
import avatar from "../../../assets/user.png"
import Footer from "../../../Components/Layouts/Footer"
import CustomNav from "../../../Components/Utils/CustomNav"
import UseDashboard from "../../../Components/CustomHooks/dashboard/UseDashboard"

const Dashboard = () => {
	const [auth] = useAuth()
	const { setView } = UseDashboard()
	const { user } = auth
	const { email, first_name } = user

	const [location, setLocation] = useState("")
	const [destination, setDestination] = useState("")
	const [oneWay, setOneWay] = useState(1)
	const [twoWay, setTwoWay] = useState(0)
	const [passengers, setPassengers] = useState("")
	const [locations, setLocations] = useState([])

	const { booking, setBooking } = UseBooking()
	const navigate = useNavigate()

	const myArray = [1, 2, 3, 4]

	const navBooking = () => {
		setView("booking")
		navigate("/dashboard/booking")
	}

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
								<h6>Opeyemi Oluwaseun</h6>
								<p>Welcome back!</p>
							</div>
						</div>
					</div>

					<div className="book-ride-btn">
						<Button
							name={"Book a ride"}
							className={"btn btn-teal-dark rounded-pill w-100"}
							clickProp={navBooking}
						/>
					</div>
				</div>
			</div>
			<div className="trips mt-2 ">
				<div className="container">
					<div className="div-title">
						<h6>Ride request</h6>
					</div>

					<div className="trip-cards">
						{myArray.map((item, i) => {
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
						})}
					</div>
				</div>
			</div>
			<Footer />
		</motion.div>
	)
}

export default Dashboard
