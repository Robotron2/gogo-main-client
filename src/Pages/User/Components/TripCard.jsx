/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"

/* eslint-disable react/prop-types */
function TripCard({ trip }) {
	const [originalDate, setOriginalDate] = useState(trip.created)
	const [formattedDate, setFormattedDate] = useState("")
	const [formattedTime, setFormattedTime] = useState("")

	useEffect(() => {
		const dateObject = new Date(originalDate)

		const formatted = dateObject.toLocaleString("en-US", {
			month: "short",
			day: "numeric",
			year: "numeric",
		})

		const timeFormatted = dateObject.toLocaleString("en-US", {
			hour: "numeric",
			minute: "numeric",
			second: "numeric",
		})

		setFormattedDate(formatted)
		setFormattedTime(timeFormatted)
	}, [originalDate])

	// console.log(trip)
	return (
		<div className="trip-card">
			<div className="details mx-auto">
				<div className="trip">
					<p>
						<span className="text-secondary">Trip id:</span> {trip?.id}
					</p>
					<p>
						<span className="text-secondary">Date:</span> {formattedDate}
					</p>
				</div>
				<div className="price">
					<p>
						{trip?.price} <span>NGN</span>
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
							<i className="fa fa-circle circle-icon" aria-hidden="true" />
							<div className="icon-border">
								<span className="border-right-line mx-auto"></span>
							</div>
							<i className="fa fa-map-marker marker-icon" aria-hidden="true" />
						</div>
					</div>
					<div className="pickup-drop">
						<div className="pickup">
							<h6>Pickup location:</h6>
							<p>{trip?.start_junction?.name}</p>
						</div>
						<div className="drop">
							<h6>Drop-off location:</h6>
							<p>{trip?.end_junction?.name}</p>
						</div>
					</div>
				</div>
				<div className="time">
					<div className="loc-icon-wrapper">
						<div className="loc-icon">
							<i className="fa fa-circle circle-icon" aria-hidden="true" />
							<div className="icon-border">
								<span className="border-right-line mx-auto"></span>
							</div>
							<i className="fa fa-map-marker marker-icon" aria-hidden="true" />
						</div>
					</div>
					<div className="time-start-end">
						<div className="pickup-time">
							<h6>Booking time:</h6>
							<p>{formattedTime}</p>
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
}

export default TripCard
