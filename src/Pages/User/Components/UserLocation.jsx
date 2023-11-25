import { useState, useEffect } from "react"

function UserLocation() {
	const [userLocation, setUserLocation] = useState(null)

	useEffect(() => {
		// Check if geolocation is available in the browser
		if ("geolocation" in navigator) {
			// Use navigator.geolocation to get the user's location
			navigator.geolocation.getCurrentPosition(
				(position) => {
					const { latitude, longitude } = position.coords
					setUserLocation({ latitude, longitude })
				},
				(error) => {
					console.error("Error getting user location:", error)
				}
			)
		} else {
			console.log("Geolocation is not available in this browser.")
		}
	}, [])

	return (
		<div className="App">
			<h1>User Location</h1>
			{userLocation && (
				<div>
					Latitude: {userLocation.latitude}
					<br />
					Longitude: {userLocation.longitude}
				</div>
			)}
		</div>
	)
}

export default UserLocation
