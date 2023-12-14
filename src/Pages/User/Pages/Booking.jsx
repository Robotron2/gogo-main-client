/* eslint-disable no-unused-vars */
import axios from "axios"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import UseBooking from "../../../Components/CustomHooks/bookings/UseBookings"
import LocationsDestinations from "../Components/LocationsDestinations"
import Button from "../../../Components/Utils/Button"

// import useAuth from "../../../Components/CustomHooks/UseAuth"
import UseDashboard from "../../../Components/CustomHooks/dashboard/UseDashboard"
import CustomNav from "../../../Components/Utils/CustomNav"
import CustomNavMobile from "../Components/CustomNavMobile"
import Footer from "../../../Components/Layouts/Footer"
import { motion } from "framer-motion"
// import RideType from "./../../../Components/Utils/RideType"

function Booking() {
	// const [auth] = useAuth()
	const { setView } = UseDashboard()
	const [locations, setLocations] = useState([])

	const [isBooking, setIsBooking] = useState(false)
	// const { email, first_name } = user

	const [location, setLocation] = useState("")
	const [destination, setDestination] = useState("")
	const [oneWay, setOneWay] = useState(1)
	const [twoWay, setTwoWay] = useState(0)
	const [passengers, setPassengers] = useState("")
	const { booking, setBooking } = UseBooking()
	const navigate = useNavigate()

	const journeyData = {
		start_junction: location,
		end_junction: destination,
		no_of_passengers: parseInt(passengers),
		oneWay,
		two_way: twoWay,
	}

	const date = new Date()
	const journeyDate = {
		day: date.getDay(),
		month: date.getMonth() + 1,
		year: date.getFullYear(),
	}

	const handleSelectLocation = (e) => {
		setLocation(e.target.value)
	}
	const handleSelectDestination = (e) => {
		setDestination(e.target.value)
	}
	const handleSelectPassenger = (e) => {
		setPassengers(e.target.value)
	}

	const getJunctions = async () => {
		const response = await axios.get(
			`${import.meta.env.VITE_REACT_APP_API}/junction-list`
		)

		setLocations(response.data)

		// console.log(response)
		// console.log(locations)
	}

	const navBooking = (views) => {
		setView(views)
		navigate(`/dashboard/${views}`)
	}
	const handleBooking = async () => {
		setIsBooking(true)
		if (!location || !destination || !passengers) {
			return toast.error("All fields must be filled")
		}
		// console.log(journeyData)
		const localAuth = JSON.parse(sessionStorage.getItem("auth"))
		try {
			if (localAuth) {
				const response = await axios.post(
					`${import.meta.env.VITE_REACT_APP_API}/book-ride/`,
					journeyData,
					{
						headers: {
							Authorization: `Token ${localAuth?.token}`,
						},
					}
				)
				// console.log(response)
				if (response.status == 201) {
					// setBooking({
					// 	...booking,
					// 	user: response.data.rideInfo.user,
					// 	journey: {
					// 		start: response.data.rideInfo.start_junction.name,
					// 		end: response.data.rideInfo.end_junction.name,
					// 		price: response.data.rideInfo.price,
					// 		passengers: response.data.rideInfo.no_of_passengers,
					// 		reroute: response.data.rideInfo.two_way,
					// 		journeyDate,
					// 	},
					// 	driver: {
					// 		driverInfo: {
					// 			name: `${response.data.driverInfo.driver_details.first_name} ${response.data.driverInfo.driver_details.last_name}`,
					// 			phone: `${response.data.driverInfo.driver_details.phone_no}`,
					// 		},
					// 		carInfo: {
					// 			model: response.data.driverInfo.car_name,
					// 		},
					// 	},
					// })
					const bookingData = {
						user: response.data.rideInfo.user,
						journey: {
							start: response.data.rideInfo.start_junction.name,
							end: response.data.rideInfo.end_junction.name,
							price: response.data.rideInfo.price,
							passengers: response.data.rideInfo.no_of_passengers,
							reroute: response.data.rideInfo.two_way,
							journeyDate,
						},
						driver: {
							driverInfo: {
								name: `${response.data.driverInfo.driver_details.first_name} ${response.data.driverInfo.driver_details.last_name}`,
								phone: `${response.data.driverInfo.driver_details.phone_no}`,
							},
							carInfo: {
								model: response.data.driverInfo.car_name,
							},
						},
					}
					console.log(booking)
					sessionStorage.setItem("book", JSON.stringify(bookingData))
					toast.success("Booking successful!")

					navBooking("summary")
				}
			} else {
				toast.error("Something fishy going on!")
				navigate("/dashboard/user")
			}
		} catch (error) {
			console.log(error)
			if (error.response.status == 500) {
				toast.error("Internal server error. Please contact us.")
			}
			if (error.response.status == 404) {
				toast.error("No available ride at the moment. Please book again later.")
			}
			if (error.response.status == 400) {
				toast.error("Price information not available.")
			}
		}
		setIsBooking(false)
	}

	useEffect(() => {
		getJunctions()
	}, [])
	return (
		<>
			<motion.div
				animate={{ opacity: 1 }}
				initial={{ opacity: 0 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.5 }}
			>
				<div className="custom-nav-wrapper">
					<CustomNav />
				</div>
				<>
					<CustomNavMobile />
				</>
				<div className="container-fluid p-3">
					<div className="trip-details ">
						<div className="container">
							<div className="input-group flex-nowrap location rounded-pill">
								<span
									className="input-group-text fa fa-map-marker pad"
									id="addon-wrapping"
								/>

								<LocationsDestinations
									type={"Select a Location"}
									selector={handleSelectLocation}
									locations={locations}
									where={location}
								/>
							</div>
							<div className="input-group flex-nowrap location rounded-pill">
								<span
									className="input-group-text fa fa-map-marker pad"
									id="addon-wrapping"
								/>

								<LocationsDestinations
									type={"Select a Location"}
									selector={handleSelectLocation}
									locations={locations}
									where={location}
								/>
							</div>
							<div className="input-group flex-nowrap location rounded-pill">
								<span
									className="input-group-text fa fa-map-marker pad"
									id="addon-wrapping"
								/>

								<LocationsDestinations
									type={"Select a Location"}
									selector={handleSelectLocation}
									locations={locations}
									where={location}
								/>
							</div>
							<div className="input-group flex-nowrap destination rounded-pill">
								<span
									className="input-group-text fa fa-dot-circle-o pad"
									id="addon-wrapping"
								/>

								<LocationsDestinations
									type={"Select a Destination"}
									selector={handleSelectDestination}
									locations={locations}
									where={destination}
								/>
							</div>
							{/* <div className="input-group flex-nowrap departure rounded-pill">
							<span
								className="input-group-text fa fa fa-calendar pad"
								id="addon-wrapping"
							/>
							<input
								type="date"
								className="form-control pad"
								placeholder="Departure"
								aria-label="Username"
								aria-describedby="addon-wrapping"
							/>
						</div> */}
							<hr />
							<div className="trip-route">
								{/* <input type="number" className="form-control rounded-pill numpas" placeholder="Enter the number of passengers" max={4} min={1} /> */}

								<select
									className="form-select form-control rounded-pill"
									value={passengers}
									onChange={handleSelectPassenger}
								>
									<option disabled={true} value="">
										Passengers
									</option>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
								</select>

								<button
									className={
										oneWay ? "btn  btn-light" : "btn  btn-outline-light"
									}
									onClick={() => {
										setOneWay(true)
										setTwoWay(false)
									}}
								>
									Departure Only
								</button>
								<button
									className={
										twoWay ? "btn  btn-light" : "btn  btn-outline-light"
									}
									onClick={() => {
										setOneWay(false)
										setTwoWay(true)
									}}
								>
									To-Fro
								</button>
							</div>
						</div>
					</div>
				</div>
				{/* <div className="container">
				<RideType title="Select a RIDE for your DEPARTURE" />
			</div>
			<div className="container">
				<RideType title="Select a RIDE for your REROUTE" />
			</div> */}
				<div className="container text-center">
					<Button
						name={isBooking ? "Please wait..." : "Continue"}
						className={" btn-teal-dark rounded-pill w-50"}
						clickProp={handleBooking}
						disableBtn={isBooking}
					/>
				</div>
				<br />
				<br />
				<br />
				<Footer />
			</motion.div>
		</>
	)
}

export default Booking
