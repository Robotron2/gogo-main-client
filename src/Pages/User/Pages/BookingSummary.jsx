import UseBooking from "../../../Components/CustomHooks/bookings/UseBookings"
import Layout from "../../../Components/Layouts/Layout"
import "../Css/BookingSummary.css"

const BookingSummary = () => {
	const { booking } = UseBooking()
	console.log(booking)
	// { journey: { start: 'B', end: 'B', price: '30.00', passengers: 3, reroute: false }, user: { id: 2, first_name: 'user', last_name: 'user' } }

	let first_name
	let last_name
	let start
	let end
	let price
	let passengers
	let reroute
	let journeyDate
	if (booking?.journey !== null) {
		sessionStorage.setItem("book", JSON.stringify(booking))
	}

	if (booking.journey === null) {
		const cachedBooking = JSON.parse(sessionStorage.getItem("book"))
		if (cachedBooking) {
			// console.log(cachedBooking.user.first_name)
			first_name = cachedBooking.user.first_name
			last_name = cachedBooking.user.last_name
			start = cachedBooking.journey.start
			end = cachedBooking.journey.end
			price = cachedBooking.journey.price
			passengers = cachedBooking.journey.passengers
			reroute = cachedBooking.journey.reroute
			journeyDate = cachedBooking.journey.journeyDate
		}
	} else {
		first_name = booking?.user.first_name
		last_name = booking?.user.last_name
		start = booking?.journey.start
		end = booking?.journey.end
		price = booking?.journey.price
		passengers = booking?.journey.passengers
		reroute = booking?.journey.reroute
		journeyDate = booking?.journey.journeyDate
	}

	return (
		<>
			<Layout title={"Booking"}>
				<div className="container">
					<center>
						<div className="booking-container">
							<div className="booking-title">
								<h3>Booking confirmed</h3>
								<p style={{ fontSize: "13px" }}>
									Thank you for riding with GoGo. Have a smooth ride!
								</p>
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
											<p>{`${first_name} ${last_name}`}</p>
										</div>
										<div className="card-info">
											<p>Number of Passengers</p>
											<p>{passengers} </p>
										</div>
									</div>
								</div>
								<div className="card-bd-1">
									<h6>DEPARTURE</h6>
									<div className="card-detail">
										<div className="card-info">
											<p>DATE</p>
											<p>{`${journeyDate.day}/${journeyDate.month}/${journeyDate.year}`}</p>
										</div>
										<div className="card-info">
											<p>FROM</p>
											<p>{start}</p>
										</div>
										<div className="card-info">
											<p>TO</p>
											<p>{end}</p>
										</div>
									</div>
								</div>
								{reroute === true && (
									<div className="card-bd-2">
										<h6>REROUTE</h6>
										<div className="card-detail">
											<div className="card-info">
												<p>DATE</p>
												<p>{`${journeyDate.day}/${journeyDate.month}/${journeyDate.year}`}</p>
											</div>
											<div className="card-info">
												<p>FROM</p>
												<p>{end}</p>
											</div>
											<div className="card-info">
												<p>TO</p>
												<p>{start}</p>
											</div>
										</div>
									</div>
								)}
								<div className="card-bt text-right">
									<h6>
										TOTAL {price}
										<span>NGN</span>
									</h6>
								</div>
							</div>
						</div>
					</center>
				</div>
			</Layout>
		</>
	)
}

export default BookingSummary
