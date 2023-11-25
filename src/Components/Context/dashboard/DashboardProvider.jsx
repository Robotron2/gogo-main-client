/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import DashboardContext from "./DashboardContext"

const DashboardProvider = ({ children }) => {
	const [view, setView] = useState("user")
	const viewSetter = () => {
		const currentPath = window.location.pathname

		const pathParts = currentPath.split("/")

		let lastPart = pathParts[pathParts.length - 1]
		setView(lastPart)

		console.log('Value after the last "/":', lastPart)
	}
	useEffect(() => {
		viewSetter()
	}, [view])
	return (
		<DashboardContext.Provider value={{ view, setView }}>
			{children}
		</DashboardContext.Provider>
	)
}

export default DashboardProvider
