/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { useState } from "react"
import BookingContext from "./BookingsContext"

const BookingProvider = ({ children }) => {
	const [booking, setBooking] = useState({
		journey: null,
		user: null,
		driver: null,
	})
	// console.log(booking)
	return (
		<BookingContext.Provider value={{ booking, setBooking }}>
			{children}
		</BookingContext.Provider>
	)
}

export default BookingProvider
