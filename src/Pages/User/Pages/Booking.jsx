import axios from "axios"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import UseBooking from "../../../Components/CustomHooks/bookings/UseBookings"
import LocationsDestinations from "../Components/LocationsDestinations"
import Button from "../../../Components/Utils/Button"

import useAuth from "../../../Components/CustomHooks/UseAuth"
import UseDashboard from "../../../Components/CustomHooks/dashboard/UseDashboard"
import CustomNav from "../../../Components/Utils/CustomNav"
import CustomNavMobile from "../Components/CustomNavMobile"

function Booking() {
	const [auth] = useAuth()
	const { setView } = UseDashboard()
	const [locations, setLocations] = useState([])
	const { user } = auth
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
		if (!location || !destination || !passengers) {
			return toast.error("All fields must be filled")
		}
		console.log(journeyData)
		const localAuth = JSON.parse(localStorage.getItem("auth"))
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
				if (response.data.user) {
					setBooking({
						...booking,
						user: response.data.user,
						journey: {
							start: response.data.start_junction.name,
							end: response.data.end_junction.name,
							price: response.data.price,
							passengers: response.data.no_of_passengers,
							reroute: response.data.two_way,
							journeyDate,
						},
					})

					navBooking("summary")
					console.log(response.data)
					// console.log(response.data.user)
					// console.log(booking)
				}
			} else {
				toast.error("Something fishy going on!")
				navigate("/dashboard/user")
			}
		} catch (error) {
			console.log(error)
		}

		// console.log(journeyData.location)
		// console.log(journeyData.destination)

		// if (journeyData.location == journeyData.destination) {
		// 	return toast.error("Error! Location cannot be the same as destination!")
		// } else {
		// 	//Post booking details to the backend.
		// 	console.log(journeyData)
		// 	toast.success("Booking sent! Check your booking summary.")
		// }
	}

	useEffect(() => {
		getJunctions()
	}, [])
	return (
		<>
			<div className="custom-nav-wrapper">
				<CustomNav />
			</div>
			<>
				<CustomNavMobile />
			</>
			<div className="banner" />
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
						<div className="input-group flex-nowrap departure rounded-pill">
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
						</div>
						<hr />
						<div className="trip-route">
							{/* <input type="number" className="form-control rounded-pill numpas" placeholder="Enter the number of passengers" max={4} min={1} /> */}

							<select
								className="form-select form-control rounded-pill"
								value={passengers}
								onChange={handleSelectPassenger}
							>
								<option disabled={true} value="">
									Number of Passengers
								</option>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
							</select>

							<button
								className={oneWay ? "btn  btn-light" : "btn  btn-outline-light"}
								onClick={() => {
									setOneWay(true)
									setTwoWay(false)
								}}
							>
								Departure Only
							</button>
							<button
								className={twoWay ? "btn  btn-light" : "btn  btn-outline-light"}
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
					name={"continue"}
					className={" btn-teal-dark rounded-pill w-50"}
					clickProp={handleBooking}
				/>

				{/* <Link to={"/dashboard/checkout"}>
					</Link> */}
			</div>
			<br />
			<br />
			<br />
		</>
	)
}

export default Booking
