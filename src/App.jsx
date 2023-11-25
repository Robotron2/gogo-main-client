import { Routes, Route, useLocation } from "react-router-dom"
import Home from "./Pages/Home/Pages/Home"
import Login from "./Pages/Auth/Pages/Login"
import Register from "./Pages/Auth/Pages/Register"
import UserLocation from "./Pages/User/Components/UserLocation"
import PrivateRoute from "./Components/Routes/Private"
import Dashboard from "./Pages/User/Pages/Dashboard"
import Map from "./Pages/Home/Pages/Map"
import { AnimatePresence } from "framer-motion"
import BookingSummary from "./Pages/User/Pages/BookingSummary"
import BookingHistory from "./Pages/User/Pages/BookingHistory"
import Booking from "./Pages/User/Pages/Booking"

// import useAuth from "./Components/CustomHooks/UseAuth"

function App() {
	// const [auth, setAuth] = useAuth()
	// console.log(auth)
	const location = useLocation()

	return (
		<AnimatePresence mode="wait">
			<Routes location={location} key={location.pathname}>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />

				<Route path="/location" element={<UserLocation />} />
				<Route path="/dashboard" element={<PrivateRoute />}>
					<Route path="user" element={<Dashboard />} />
					<Route path="booking" element={<Booking />} />
					<Route path="summary" element={<BookingSummary />} />
					<Route path="history" element={<BookingHistory />} />
					<Route path="user-map" element={<Map />} />
				</Route>
				{/* <Route path={"/dashboard/user"} element={auth?.token ? <Dashboard /> : <Login />} /> */}
			</Routes>
		</AnimatePresence>
	)
}

export default App
