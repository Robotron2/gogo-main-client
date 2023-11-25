import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import { BrowserRouter } from "react-router-dom"
import "./index.css"
import AuthProvider from "./Components/Context/AuthProvider.jsx"
import { Toaster } from "react-hot-toast"
import BookingProvider from "./Components/Context/bookings/BookingsProvider.jsx"
import DashboardProvider from "./Components/Context/dashboard/DashboardProvider.jsx"

// import BackSvg from "./Components/Utils/BackSvg.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
	<AuthProvider>
		<BookingProvider>
			<DashboardProvider>
				<BrowserRouter>
					<Toaster />
					<App />
				</BrowserRouter>
			</DashboardProvider>
		</BookingProvider>
	</AuthProvider>
)
