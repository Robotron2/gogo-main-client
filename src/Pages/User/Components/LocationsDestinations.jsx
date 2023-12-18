/* eslint-disable react/prop-types */
function LocationsDestinations({ type, selector, locations, where }) {
	return (
		<>
			<select className="selector" onChange={selector} value={where}>
				<option disabled={true} value="">
					{type}
				</option>
				{locations.map((location) => {
					return (
						<option value={location.name} key={location.id}>
							{location.name}
						</option>
					)
				})}
			</select>
		</>
	)
}

export default LocationsDestinations

// [
//     {
//         "id": 4,
//         "name": "D",
//         "created": "2023-11-15T11:50:15.092614Z",
//         "updated": "2023-11-15T11:50:15.092638Z"
//     },
//     {
//         "id": 3,
//         "name": "C",
//         "created": "2023-11-15T11:50:00.578967Z",
//         "updated": "2023-11-15T11:50:00.578983Z"
//     },
//     {
//         "id": 2,
//         "name": "B",
//         "created": "2023-11-15T11:49:47.019920Z",
//         "updated": "2023-11-15T11:49:47.019936Z"
//     },
//     {
//         "id": 1,
//         "name": "A",
//         "created": "2023-11-15T11:46:18.801796Z",
//         "updated": "2023-11-15T11:46:18.801817Z"
//     }
// ]
