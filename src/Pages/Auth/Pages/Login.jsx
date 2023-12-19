import { Link, useNavigate } from "react-router-dom"
import Logo from "../../../assets/Logo"
import "../css/register.css"
import Button from "../../../Components/Utils/Button"
import { useState } from "react"
import axios from "axios"
import useAuth from "../../../Components/CustomHooks/UseAuth"
import toast from "react-hot-toast"
import Loading from "../../../Components/Utils/Loading"
import { motion } from "framer-motion"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import UseDashboard from "../../../Components/CustomHooks/dashboard/UseDashboard"

const Login = () => {
	const [auth, setAuth] = useAuth()
	const [isLoading, setIsLoading] = useState(false)
	const navigate = useNavigate()
	const { setView } = UseDashboard()

	const initialValues = {
		email: "",
		password: "",
	}

	const validationSchema = Yup.object().shape({
		email: Yup.string()
			.email("must be a valid email")
			.required("Email field is required!"),
		password: Yup.string()
			.min(4)
			.max(20)
			.required("Password field is required!"),
	})

	const onSubmit = async (data) => {
		setIsLoading(true)
		try {
			const response = await axios.post(
				`${import.meta.env.VITE_REACT_APP_API}/client-login/`,
				data
			)

			if (response.status == 200) {
				setAuth({
					...auth,
					user: response.data.userData,
					token: response.data.token,
				})
				sessionStorage.setItem("auth", JSON.stringify(response.data))
				// toast.success(response && response.data.message)

				toast.success(response && "Logged in successfully!")
				setIsLoading(false)
				setView("user")
				navigate(location.state || `/dashboard/user`)
			} else {
				toast.error("An error occured")
				setIsLoading(false)
				console.log(response)
			}
		} catch (error) {
			setIsLoading(false)
			console.log(error)
			if (error.response.status == 400) {
				toast.error("Invalid credentials.")
				setIsLoading(false)
			} else {
				toast.error("Something went wrong. Kindly contact us.")
			}
		}
		setIsLoading(false)
	}

	return (
		<motion.div
			animate={{ opacity: 1 }}
			initial={{ opacity: 0 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
		>
			<div className="login-page">
				<div className="container ">
					<Link to={"/"}>
						<Logo />
					</Link>
				</div>
				<div className="container login-container mt-1 mb-5">
					<div className="container login-details">
						<h4>
							Making <span className="teal-text">rides</span> seamless and
							<span className="teal-text"> accessible.</span>
						</h4>

						<Formik
							initialValues={initialValues}
							onSubmit={onSubmit}
							validationSchema={validationSchema}
						>
							<Form className="formContainer">
								<label className="teal-text">Email</label>
								<ErrorMessage name="email" component="span" />
								<Field
									autoComplete="off"
									type="email"
									id="inputCreatePost3"
									className="form-control rounded-pill neu-input"
									name="email"
									placeholder="Your email"
									onFocus={() => setIsLoading(false)}
								/>

								<label className="teal-text">Password</label>
								<ErrorMessage name="password" component="span" />
								<Field
									autoComplete="off"
									type="password"
									id="inputCreatePost1"
									className="form-control rounded-pill neu-input"
									name="password"
									placeholder="Your password"
									onFocus={() => setIsLoading(false)}
								/>

								<div className="form-group form-check check">
									{/* <div>
										<input type="checkbox" className="form-check-input" id="exampleCheck1" />
										<label className="form-check-label" htmlFor="exampleCheck1">
											Remember me
										</label>
									</div> */}
									{/* <div className="forgot-password">
										<p>Forgotten Password</p>
									</div> */}
								</div>
								{isLoading ? (
									<Loading />
								) : (
									<Button
										className="btn-teal-dark bg-teal-dark rounded-pill text-white form-control p-2 m--2"
										name={"Login"}
										type={"submit"}
									/>
								)}
							</Form>
						</Formik>

						<div className="check">
							<h6>Don&apos;t have an account?</h6>
							<Link to={"/register"}>Sign Up</Link>
						</div>
					</div>

					<div className="login-img"></div>
				</div>
			</div>
		</motion.div>
	)
}

export default Login
