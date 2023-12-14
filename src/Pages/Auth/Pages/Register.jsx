import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-hot-toast"
import { useState } from "react"
import axios from "axios"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { motion } from "framer-motion"

import "../css/register.css"
import useAuth from "../../../Components/CustomHooks/UseAuth"
import Button from "../../../Components/Utils/Button"
import Logo from "../../../assets/Logo"
import Loading from "../../../Components/Utils/Loading"

const Register = () => {
	const [isLoading, setIsLoading] = useState(false)
	const [auth, setAuth] = useAuth()
	const navigate = useNavigate()

	const initialValues = {
		first_name: "",
		last_name: "",
		email: "",
		password: "",
	}

	const validationSchema = Yup.object().shape({
		first_name: Yup.string()
			.min(4)
			.max(20)
			.required("You need to provide a firstname"),
		email: Yup.string()
			.email("must be a valid email")
			.required("Email field is required!"),
		password: Yup.string().min(4).max(20).required(),
	})

	const onSubmit = async (data) => {
		setIsLoading(true)
		//try to collect data and post to backend here.
		try {
			const response = await axios.post(
				`${import.meta.env.VITE_REACT_APP_API}/client-register/`,
				data
			)
			// console.log(response)
			if (response.data.Errors) {
				toast.error("An error occured while registering! Kindly contact us.")
				setIsLoading(false)
				return
			}
			if (response.status == 201) {
				setAuth({
					...auth,
					user: response.data.userData,
					token: response.data.token,
				})
				sessionStorage.setItem("auth", JSON.stringify(response.data))
				// toast.success(response && response.data.message)

				toast.success(response && "Registered successfully")
				setIsLoading(false)
				navigate(location.state || `/dashboard/user`)
			} else {
				toast.error("An error occured")
				setIsLoading(false)
			}
		} catch (error) {
			console.log(error)
			setIsLoading(false)
		}
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
				<div className="container login-container mb-5">
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
								<label className="teal-text">Firstname</label>
								<ErrorMessage name="first_name" component="span" />
								<Field
									autoComplete="off"
									id="inputCreatePost1"
									className="form-control rounded-pill neu-input"
									name="first_name"
									placeholder="Your firstname"
								/>

								<label className="teal-text">Lastname</label>
								<Field
									autoComplete="off"
									id="inputCreatePost2"
									type="text"
									className="form-control rounded-pill neu-input"
									name="last_name"
									placeholder="Your lastname"
								/>

								<label className="teal-text">Email</label>
								<ErrorMessage name="email" component="span" />
								<Field
									autoComplete="off"
									type="email"
									id="inputCreatePost3"
									className="form-control rounded-pill neu-input"
									name="email"
									placeholder="Your email"
								/>

								<label className="teal-text">Password</label>
								<ErrorMessage name="password" component="span" />
								<Field
									autoComplete="off"
									type="password"
									id="inputCreatePost4"
									className="form-control rounded-pill neu-input"
									name="password"
									placeholder="Your password"
								/>

								{/* <div className="form-group form-check check">
									<div>
										<input
											type="checkbox"
											className="form-check-input"
											id="exampleCheck1"
										/>
										<label className="form-check-label" htmlFor="exampleCheck1">
											Remember me
										</label>
									</div>
									<div className="forgot-password">
										<p>Forgotten Password</p>
									</div>
								</div> */}
								{isLoading ? (
									<Loading />
								) : (
									<Button
										className="btn bg-teal-dark rounded-pill text-white form-control p-2 mt-4"
										name={"Register"}
										type={"submit"}
									/>
								)}
							</Form>
						</Formik>
						<div className="check">
							<h6>Already have an account?</h6>
							<Link to={"/login"}>Login here</Link>
						</div>
					</div>
					<div className="login-img"></div>
				</div>
			</div>
		</motion.div>
	)
}

export default Register
