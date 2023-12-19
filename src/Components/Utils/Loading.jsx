const Loading = () => {
	return (
		<div
			style={{
				border: "1px solid grey",
				marginTop: "3px",
				borderRadius: "50px",
				padding: "0",
			}}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
				style={{
					margin: "auto",
					background: "none",
					display: "block",
					shapeRendering: "auto",
				}}
				width="50px"
				height="35px"
				viewBox="0 0 100 100"
				preserveAspectRatio="xMidYMid"
			>
				<path
					fill="none"
					stroke="#0a4f51"
					strokeWidth={5}
					strokeDasharray="220.66647827148438 35.92244995117187"
					d="M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40 C88.6 30 95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z"
					strokeLinecap="round"
					style={{ transform: "scale(0.66)", transformOrigin: "50px 50px" }}
				>
					<animate
						attributeName="stroke-dashoffset"
						repeatCount="indefinite"
						dur="1s"
						keyTimes="0;1"
						values="0;256.58892822265625"
					/>
				</path>
			</svg>
		</div>
	)
}

export default Loading
