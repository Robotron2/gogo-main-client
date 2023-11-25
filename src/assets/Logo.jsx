import LogoLight from "../assets/gogo-dark.png"
import LogoDark from "../assets/gogo-dark.png"
import { PropTypes } from "prop-types"

const Logo = (props) => {
	const light = props.type
	return <div style={{ margin: "30px 0" }}>{light == "light" ? <img src={LogoLight} height={"30px"} width={"150px"} /> : <img src={LogoDark} height={"40px"} width={"150px"} />}</div>
}

Logo.propTypes = {
	type: PropTypes.string
}
export default Logo
