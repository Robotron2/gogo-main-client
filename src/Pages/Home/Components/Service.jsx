import { useState } from "react"
import PropTypes from "prop-types"

const Service = ({ title, content, className }) => {
	const [expanded, setExpanded] = useState(false)

	const toggleReadMore = () => {
		setExpanded(!expanded)
	}
	return (
		<div className={className}>
			<h6>{title}</h6>
			{expanded ? (
				<span className="text-m">{content}</span>
			) : (
				<span className="text-m">{content.slice(0, 150)}</span>
			)}
			{content.length < 1000 && (
				<small>
					<i>
						<span onClick={toggleReadMore} className="readMore">
							{expanded ? " read less..." : " ...read more"}
						</span>
					</i>
				</small>
			)}
		</div>
	)
}

Service.propTypes = {
	title: PropTypes.string,
	className: PropTypes.string,
	content: PropTypes.string,
	id: PropTypes.number,
}

export default Service
