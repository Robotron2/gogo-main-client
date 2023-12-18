import PropTypes from "prop-types"

const Button = (props) => {
	return (
		<>
			<button
				className={props.className}
				onClick={props.clickProp}
				type={props.type}
				disabled={props.disableBtn}
			>
				{props.name}
			</button>
		</>
	)
}

Button.propTypes = {
	name: PropTypes.string,
	disableBtn: PropTypes.bool,
	className: PropTypes.string,
	clickProp: PropTypes.func || PropTypes.string,
	type: PropTypes.string,
}

Button.defaultProp = {
	clickProp: "",
}
export default Button
