/* eslint-disable react-hooks/exhaustive-deps */
// MapboxMap.js
import { useState, useEffect } from "react"
import Map, { Marker } from "react-map-gl"
import "mapbox-gl/dist/mapbox-gl.css"

const MapboxMap = () => {
	const [viewport, setViewport] = useState({
		width: "100%",
		height: "400px",
		latitude: 40.7128,
		longitude: -74.006,
		zoom: 12
	})

	const getLocation = () => {
		navigator.geolocation.getCurrentPosition((pos) => {
			const { latitude, longitude } = pos.coords
			setViewport({
				...viewport,
				latitude,
				longitude,
				zoom: 3
			})
		})
	}

	useEffect(() => {
		getLocation()
	}, [])

	return (
		<Map mapboxAccessToken="pk.eyJ1Ijoicm9idHJvbiIsImEiOiJjbG40ejloN28wNHFzMnF0NzBuazU1YzVrIn0.7xRcRWzqXUP916mQ9OntNA" initialViewState={viewport}>
			<Marker longitude={viewport.longitude} latitude={viewport.latitude} />
		</Map>
	)
}

export default MapboxMap

// // MapboxMap.js
// import { useState, useEffect } from "react"
// // import "mapbox-gl/dist/mapbox-gl.css"

// function MyMap() {
// 	const [viewport, setViewport] = useState({})
// 	useEffect(() => {
// navigator.geolocation.getCurrentPosition((pos) => {
// 	console.log(pos.coords.latitude, pos.coords.longitude)
// 	setViewport({
// 		...viewport,
// 		latitude: pos.coords.latitude,
// 		longitude: pos.coords.longitude,
// 		zoom: 3
// 	})
// })
// 	}, [])
// 	return (
// 		<div>
// 			{viewport.latitude && viewport.longitude && (
// 				<div>
// 					<h1>Your Location:</h1>
// 					<div className="container" style={{ height: "100%", width: "100%", position: "absolute", top: 0 }}>
// 						<Map
// 							mapboxAccessToken="pk.eyJ1Ijoicm9idHJvbiIsImEiOiJjbG40ejloN28wNHFzMnF0NzBuazU1YzVrIn0.7xRcRWzqXUP916mQ9OntNA"
// 							initialViewState={viewport}
// 							mapStyle="mapbox://styles/mapbox/streets-v12"
// 						>
// <Marker
// 	longitude={viewport.longitude}
// 	latitude={viewport.latitude}
// 	style={{ position: "relative", maxWidth: "50px", maxHeight: "50px", background: "red", zIndex: 2001 }}
// />
// 						</Map>
// 					</div>
// 				</div>
// 			)}
// 		</div>
// 	)
// }
// export default MyMap
