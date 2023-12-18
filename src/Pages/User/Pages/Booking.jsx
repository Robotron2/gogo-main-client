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
	const [location, setLocation] = useState("")
	const [destination, setDestination] = useState("")
	const [oneWay, setOneWay] = useState(1)
	const [twoWay, setTwoWay] = useState(0)
	const [passengers, setPassengers] = useState("")
	const { booking } = UseBooking()
	const navigate = useNavigate()

	const journeyData = {
		start_junction: location,
		end_junction: destination,
		no_of_passengers: parseInt(passengers),
		oneWay,
		two_way: twoWay,
	}
	const journeyDate = new Date().toLocaleDateString()

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
			setIsBooking(false)
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
				toast.error("Something's not right. Please contact us.")
				navigate("/dashboard/user")
			}
		} catch (error) {
			// console.log(error)
			if (error.response.status == 500) {
				toast.error("Internal server error. Please contact us.")
				// console.log(error)
				setView("user")
				navigate("/dashboard/user")
			}
			if (error.response.status == 404) {
				toast.error("No available ride at the moment. Please book again later.")
				setView("user")
				navigate("/dashboard/booking")
			}
			if (error.response.status == 400) {
				toast.error("Price information not available.")
				setView("user")
				navigate("/dashboard/booking")
			}
			setIsBooking(false)
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

				<br />
				<br />
				<br />
				<div className="container container-booking">
					<div className="booking-div-wrapper">
						<div className="booking-location-details">
							<div className="location-wrapper">
								<div className="icon">
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
								</div>
								<LocationsDestinations
									type={"Select a Location"}
									selector={handleSelectLocation}
									locations={locations}
									where={location}
								/>
							</div>
							<div className="destination-wrapper">
								<div className="icon">
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
								</div>

								<LocationsDestinations
									type={"Select a Destination"}
									selector={handleSelectDestination}
									locations={locations}
									where={destination}
								/>
							</div>
						</div>
						<div className="departure-date-wrapper">
							<div className="icon">
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
										d="M7 1.75C7.41421 1.75 7.75 2.08579 7.75 2.5V3.26272C8.41203 3.24999 9.1414 3.24999 9.94358 3.25H14.0564C14.8586 3.24999 15.588 3.24999 16.25 3.26272V2.5C16.25 2.08579 16.5858 1.75 17 1.75C17.4142 1.75 17.75 2.08579 17.75 2.5V3.32709C18.0099 3.34691 18.2561 3.37182 18.489 3.40313C19.6614 3.56076 20.6104 3.89288 21.3588 4.64124C22.1071 5.38961 22.4392 6.33855 22.5969 7.51098C22.6472 7.88567 22.681 8.29459 22.7037 8.74007C22.7337 8.82106 22.75 8.90861 22.75 9C22.75 9.06932 22.7406 9.13644 22.723 9.20016C22.75 10.0021 22.75 10.9128 22.75 11.9436V14.0564C22.75 15.8942 22.75 17.3498 22.5969 18.489C22.4392 19.6614 22.1071 20.6104 21.3588 21.3588C20.6104 22.1071 19.6614 22.4392 18.489 22.5969C17.3498 22.75 15.8942 22.75 14.0564 22.75H9.94359C8.10583 22.75 6.65019 22.75 5.51098 22.5969C4.33856 22.4392 3.38961 22.1071 2.64124 21.3588C1.89288 20.6104 1.56076 19.6614 1.40314 18.489C1.24997 17.3498 1.24998 15.8942 1.25 14.0564V11.9436C1.24999 10.9127 1.24998 10.0021 1.27701 9.20017C1.25941 9.13645 1.25 9.06932 1.25 9C1.25 8.90862 1.26634 8.82105 1.29627 8.74006C1.31895 8.29458 1.35276 7.88566 1.40314 7.51098C1.56076 6.33856 1.89288 5.38961 2.64124 4.64124C3.38961 3.89288 4.33856 3.56076 5.51098 3.40313C5.7439 3.37182 5.99006 3.34691 6.25 3.32709V2.5C6.25 2.08579 6.58579 1.75 7 1.75ZM2.76309 9.75C2.75032 10.4027 2.75 11.146 2.75 12V14C2.75 15.9068 2.75159 17.2615 2.88976 18.2892C3.02502 19.2952 3.27869 19.8749 3.7019 20.2981C4.12511 20.7213 4.70476 20.975 5.71085 21.1102C6.73851 21.2484 8.09318 21.25 10 21.25H14C15.9068 21.25 17.2615 21.2484 18.2892 21.1102C19.2952 20.975 19.8749 20.7213 20.2981 20.2981C20.7213 19.8749 20.975 19.2952 21.1102 18.2892C21.2484 17.2615 21.25 15.9068 21.25 14V12C21.25 11.146 21.2497 10.4027 21.2369 9.75H2.76309ZM21.1683 8.25H2.83168C2.8477 8.06061 2.86685 7.88123 2.88976 7.71085C3.02502 6.70476 3.27869 6.12511 3.7019 5.7019C4.12511 5.27869 4.70476 5.02502 5.71085 4.88976C6.73851 4.75159 8.09318 4.75 10 4.75H14C15.9068 4.75 17.2615 4.75159 18.2892 4.88976C19.2952 5.02502 19.8749 5.27869 20.2981 5.7019C20.7213 6.12511 20.975 6.70476 21.1102 7.71085C21.1331 7.88123 21.1523 8.06061 21.1683 8.25ZM16 13.25C16.4142 13.25 16.75 13.5858 16.75 14V15.25H18C18.4142 15.25 18.75 15.5858 18.75 16C18.75 16.4142 18.4142 16.75 18 16.75H16.75V18C16.75 18.4142 16.4142 18.75 16 18.75C15.5858 18.75 15.25 18.4142 15.25 18V16.75L14 16.75C13.5858 16.75 13.25 16.4142 13.25 16C13.25 15.5858 13.5858 15.25 14 15.25L15.25 15.25V14C15.25 13.5858 15.5858 13.25 16 13.25Z"
										fill="#0E532E"
									/>
								</svg>
							</div>
							<div className="departure-date">{journeyDate}</div>
						</div>
					</div>
					<hr />
					<div className="extra-journey-data-wrapper">
						<div className="passengers">
							<select value={passengers} onChange={handleSelectPassenger}>
								<option disabled={true} value="">
									No of passengers
								</option>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
							</select>
						</div>
						<div className="departure-wrapper">
							<button
								className={oneWay ? "route-active" : "journey-btn"}
								onClick={() => {
									setOneWay(true)
									setTwoWay(false)
								}}
							>
								Go only
							</button>
						</div>
						<div className="reroute-wrapper">
							<button
								className={twoWay ? "route-active" : "journey-btn"}
								onClick={() => {
									setOneWay(false)
									setTwoWay(true)
								}}
							>
								Go-Come
							</button>
						</div>
						<div className="book-ride-btn">
							<Button
								name={isBooking ? "Please wait..." : "Continue"}
								clickProp={handleBooking}
								disableBtn={isBooking}
							/>
						</div>
					</div>
				</div>

				<br />
				<br />
				<br />
				{/* <div className="container">
				<RideType title="Select a RIDE for your DEPARTURE" />
			</div>
			<div className="container">
				<RideType title="Select a RIDE for your REROUTE" />
			</div> */}
				<Footer />
			</motion.div>
		</>
	)
}

export default Booking
