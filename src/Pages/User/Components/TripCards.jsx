/* eslint-disable react/prop-types */

import TripCard from "./TripCard"

function TripCards({ trips }) {
	// function sortArrayById(inputArray) {
	// 	const sortedArray = inputArray.sort((a, b) => a.id - b.id)

	// 	return sortedArray
	// }

	//   // Example usage:
	//   const dataArray = [
	//     { id: 3, name: 'Object C' },
	//     { id: 1, name: 'Object A' },
	//     { id: 2, name: 'Object B' },
	//   ];

	// const sortedArray = sortArrayById(trips)
	// console.log(sortedArray)

	// console.log(trips)
	return (
		<div className="trip-cards">
			{trips.map((item, i) => {
				return (
					<div key={i}>
						<TripCard trip={item} />
					</div>
				)
			})}
		</div>
	)
}

export default TripCards
