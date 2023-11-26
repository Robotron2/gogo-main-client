import { Link } from "react-router-dom"
import Button from "../../../Components/Utils/Button"
import toast from "react-hot-toast"

const Cta = () => {
	const toastUser = () => {
		toast.error("User registrations will be online once we launch fully")
	}
	return (
		<>
			<section className="about-section">
				<div className="container div-about rounded">
					<div className="about1">
						<div className="no-routes1 text-center">
							<p>
								<span className="span-no">100+</span>Routes
							</p>
						</div>
						<div className="about-img1"></div>
						<div className="about-img2"></div>
						<div className="no-routes2 text-center">
							<p>
								<span className="span-no">100+</span>Routes
							</p>
						</div>
					</div>
					<div className="about2">
						<div className="about-title">
							<p>
								<span className="size-2">.</span>ABOUT US
							</p>
							<h2>
								Book a <span className="cyan">ride</span> at your convenience
							</h2>
						</div>
						<div className="goal">
							<h6>
								{/* <i className="fa fa-map-marker " aria-hidden="true" /> */}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width={48}
									height={48}
									viewBox="0 0 48 48"
									fill="none"
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M34.8115 2.50009C34.9042 2.50014 34.9982 2.50018 35.0934 2.50018L36.3344 2.50018C38.0775 2.50012 39.5349 2.50007 40.6927 2.65527C41.916 2.81924 43.0271 3.18073 43.9213 4.07224C44.8161 4.96437 45.1796 6.07402 45.3443 7.29578C45.5001 8.45102 45.5001 9.90483 45.5 11.642V12.88C45.5 12.9754 45.5 13.0695 45.5001 13.1624C45.5012 15.2625 45.5019 16.7364 44.9417 18.0848C44.3816 19.4328 43.3364 20.4739 41.8462 21.9582C41.7803 22.0238 41.7135 22.0903 41.6459 22.1577L36.3064 27.4812L36.4925 27.7687C37.2798 28.9846 37.9176 29.9696 38.3781 30.819C38.855 31.6989 39.1939 32.524 39.3296 33.4371C39.5478 34.9046 39.3505 36.4133 38.772 37.7992C38.5574 38.3132 38.1863 38.8517 37.8055 39.3428C37.4066 39.8572 36.919 40.4176 36.3952 40.9883C35.3527 42.1242 34.1013 43.3719 32.9904 44.4795L32.8083 44.6611C31.3685 46.0966 28.8725 45.6312 28.1047 43.705C27.6494 42.5629 27.4651 42.1075 27.2345 41.6871C27.0207 41.2973 26.7754 40.9254 26.501 40.5753C26.2088 40.2024 25.8674 39.8575 25.0207 39.0133L24.0111 38.1281C23.997 38.1157 23.9831 38.103 23.9695 38.0901C23.7826 38.1144 23.5928 38.1268 23.3997 38.1268C22.1368 38.1268 21.0948 37.5996 20.1126 36.8525C19.1835 36.1458 18.1528 35.118 16.9204 33.8893L14.0272 31.0047C12.7949 29.7762 11.764 28.7485 11.0551 27.8221C10.3058 26.8429 9.77518 25.802 9.77518 24.5387C9.77518 24.3094 9.79277 24.0851 9.82695 23.8651L8.1661 22.2092C8.06926 22.1127 8.03049 22.074 7.99222 22.0369C7.2449 21.3118 6.36561 20.7351 5.4013 20.3378C5.35191 20.3174 5.30096 20.2972 5.1737 20.2468L4.41642 19.9467C2.38931 19.1435 1.84365 16.5273 3.39123 14.9844L3.40535 14.9703C4.5162 13.8628 5.76769 12.6151 6.90696 11.5758C7.47941 11.0536 8.04142 10.5675 8.55726 10.1699C9.04988 9.79018 9.58947 9.42059 10.104 9.20712C11.4924 8.63104 13.0032 8.43476 14.4726 8.6519C15.3864 8.78695 16.2128 9.1241 17.095 9.59948C17.9468 10.0585 18.9346 10.6942 20.1543 11.4793L20.4497 11.6694L25.7942 6.34086C25.8616 6.27371 25.928 6.20742 25.9936 6.142C27.4832 4.65537 28.5268 3.61379 29.8776 3.05595C31.228 2.4983 32.7038 2.49904 34.8115 2.50009ZM18.2751 13.8375C17.1551 13.1173 16.3489 12.6052 15.6719 12.2405C14.9538 11.8535 14.4728 11.6845 14.034 11.6197C13.1177 11.4843 12.155 11.6041 11.2537 11.9781C11.119 12.0339 10.8355 12.2016 10.3887 12.546C9.96504 12.8725 9.47115 13.2974 8.92881 13.7922C7.84333 14.7824 6.63546 15.9862 5.50933 17.1089C5.50297 17.1153 5.50094 17.1188 5.50076 17.1191C5.50057 17.1194 5.50076 17.119 5.50076 17.1191C5.50057 17.1198 5.49914 17.1257 5.50102 17.1347C5.5029 17.1438 5.5063 17.1488 5.50723 17.1499C5.50779 17.1503 5.51265 17.1541 5.52155 17.1577L6.289 17.4618C6.40307 17.507 6.47372 17.535 6.54412 17.564C7.86001 18.1061 9.06052 18.8934 10.0813 19.8839C10.1359 19.9369 10.1897 19.9905 10.2766 20.0771L11.2321 21.0297C11.3629 20.8673 11.4994 20.7059 11.6404 20.545C12.284 19.8106 13.1108 18.9862 14.0679 18.032L18.2751 13.8375ZM26.9091 36.6791L27.0708 36.8209L27.1739 36.9237C27.9552 37.7025 28.4395 38.1853 28.8622 38.7247C29.2372 39.2032 29.5726 39.7115 29.8648 40.2444C30.1842 40.8265 30.4316 41.4405 30.8178 42.4093L30.8582 42.369C31.9843 41.2463 33.1917 40.042 34.1849 38.9598C34.6812 38.4191 35.1073 37.9268 35.4347 37.5045C35.7803 37.0589 35.9479 36.7768 36.0035 36.6436C36.3779 35.7466 36.4977 34.7892 36.3622 33.8783C36.2975 33.4428 36.1287 32.9644 35.7407 32.2487C35.3742 31.5726 34.8593 30.7671 34.1344 29.6466L29.9173 33.8511C28.9374 34.8281 28.0934 35.6695 27.3417 36.3188C27.1981 36.4427 27.0541 36.5632 26.9091 36.6791ZM35.0934 5.50018C32.5897 5.50018 31.7545 5.5266 31.0227 5.82881C30.2914 6.13081 29.6829 6.70018 27.9124 8.46536L16.2187 20.124C15.2218 21.1179 14.4661 21.8724 13.8968 22.5221C13.3248 23.1749 13.0328 23.6218 12.8908 23.9748C12.808 24.1807 12.7752 24.3583 12.7752 24.5387C12.7752 24.8795 12.892 25.2861 13.4375 25.9989C14.0093 26.7461 14.8938 27.6325 16.2187 28.9533L16.533 29.2667L19.5939 26.2149C20.1806 25.63 21.1304 25.6314 21.7153 26.2181C22.3002 26.8047 22.2987 27.7545 21.7121 28.3394L18.6575 31.3848L18.9654 31.6918C20.2902 33.0126 21.1792 33.8945 21.9289 34.4648C22.6437 35.0086 23.0537 35.1268 23.3997 35.1268C23.5693 35.1268 23.7343 35.0983 23.9191 35.0302C24.2699 34.901 24.7172 34.6214 25.3808 34.0483C26.042 33.4773 26.8114 32.7114 27.8341 31.6918L39.5278 20.0332C41.2988 18.2675 41.869 17.6614 42.1713 16.9338C42.4733 16.2068 42.5 15.3772 42.5 12.88V11.7457C42.5 9.87756 42.4968 8.62778 42.3712 7.69671C42.2516 6.80925 42.0461 6.43893 41.8032 6.19674C41.5597 5.95394 41.1864 5.74828 40.2941 5.62867C39.3592 5.50335 38.1046 5.50018 36.2312 5.50018H35.0934ZM33.3275 14.6471C32.3959 13.7183 30.8837 13.7183 29.9522 14.6471C29.0231 15.5733 29.0231 17.0732 29.9522 17.9995C30.8837 18.9282 32.3959 18.9282 33.3275 17.9995C34.2565 17.0732 34.2565 15.5733 33.3275 14.6471ZM27.8341 12.5226C29.9364 10.4265 33.3432 10.4265 35.4456 12.5226C37.5505 14.6211 37.5505 18.0254 35.4456 20.124C33.3432 22.2201 29.9364 22.2201 27.8341 20.124C25.7292 18.0254 25.7292 14.6211 27.8341 12.5226Z"
										fill="#FAFFFF"
									/>
								</svg>

								<span className="cyan"> Our Mission</span>
							</h6>
							<p className="px-5">
								{/* GoGo Rides is committed to enhancing connectivity and
								convenience by providing safe, efficient, and reliable transport
								and logistics solutions. Our mission is to empower communities
								within Ekiti State and across the Southwestern region of Nigeria
								through seamless intra-community rides and inter-state travel.
								We strive to exceed customer expectations, foster economic
								growth, and contribute to sustainable development while
								maintaining a strong focus on safety, innovation, and
								exceptional service. */}
								Empowering Seamless Mobility and Connectivity
							</p>
						</div>
						<div className="vision">
							<h6>
								{/* <i className="fa fa-map-marker " aria-hidden="true" /> */}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width={48}
									height={48}
									viewBox="0 0 48 48"
									fill="none"
								>
									<path
										d="M5.5 24C5.5 13.7827 13.7827 5.5 24 5.5C34.2173 5.5 42.5 13.7827 42.5 24C42.5 29.109 40.431 33.732 37.0815 37.0815C36.4957 37.6673 36.4957 38.617 37.0815 39.2028C37.6673 39.7886 38.617 39.7886 39.2028 39.2028C43.0919 35.3137 45.5 29.9366 45.5 24C45.5 12.1259 35.8741 2.5 24 2.5C12.1259 2.5 2.5 12.1259 2.5 24C2.5 29.9366 4.90811 35.3137 8.7972 39.2028C9.38299 39.7886 10.3327 39.7886 10.9185 39.2028C11.5043 38.617 11.5043 37.6673 10.9185 37.0815C7.56904 33.732 5.5 29.109 5.5 24Z"
										fill="#FAFFFF"
									/>
									<path
										d="M13.5 24C13.5 18.201 18.201 13.5 24 13.5C29.799 13.5 34.5 18.201 34.5 24C34.5 26.8999 33.3264 29.5229 31.4246 31.4246C30.8388 32.0104 30.8388 32.9602 31.4246 33.5459C32.0104 34.1317 32.9602 34.1317 33.5459 33.5459C35.9873 31.1046 37.5 27.7275 37.5 24C37.5 16.5442 31.4558 10.5 24 10.5C16.5442 10.5 10.5 16.5442 10.5 24C10.5 27.7275 12.0127 31.1046 14.4541 33.5459C15.0398 34.1317 15.9896 34.1317 16.5754 33.5459C17.1612 32.9602 17.1612 32.0104 16.5754 31.4246C14.6736 29.5229 13.5 26.8999 13.5 24Z"
										fill="#FAFFFF"
									/>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M18.5 24C18.5 20.9624 20.9624 18.5 24 18.5C27.0376 18.5 29.5 20.9624 29.5 24C29.5 27.0376 27.0376 29.5 24 29.5C20.9624 29.5 18.5 27.0376 18.5 24ZM24 21.5C22.6193 21.5 21.5 22.6193 21.5 24C21.5 25.3807 22.6193 26.5 24 26.5C25.3807 26.5 26.5 25.3807 26.5 24C26.5 22.6193 25.3807 21.5 24 21.5Z"
										fill="#FAFFFF"
									/>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M26.7861 31.4869C26.0307 30.9514 25.2195 30.553 24.2346 30.5056C24.0783 30.4981 23.9217 30.4981 23.7654 30.5056C22.7805 30.553 21.9693 30.9514 21.2139 31.4869C20.5099 31.9859 19.7323 32.6958 18.8291 33.5204L18.6717 33.6641C16.6619 35.4986 15.0367 36.9822 14.0012 38.2178C13.0072 39.404 12.0937 40.8927 12.6833 42.5514C12.762 42.7728 12.8592 42.9869 12.9737 43.1918C13.7952 44.6621 15.4647 45.1016 17.0691 45.2966C18.7434 45.5001 21.0305 45.5 23.8873 45.5H24.1126C26.9693 45.5 29.2566 45.5001 30.9309 45.2966C32.5353 45.1016 34.2048 44.6621 35.0263 43.1918C35.1408 42.9869 35.238 42.7728 35.3167 42.5514C35.9063 40.8927 34.9928 39.404 33.9988 38.2178C32.9633 36.9822 31.3381 35.4987 29.3283 33.6641L29.1709 33.5204C28.2677 32.6958 27.4901 31.9859 26.7861 31.4869ZM22.9489 33.9343C23.449 33.5798 23.7097 33.5118 23.9094 33.5022C23.9698 33.4993 24.0302 33.4993 24.0906 33.5022C24.2903 33.5118 24.551 33.5798 25.0511 33.9343C25.5856 34.3132 26.2265 34.8946 27.214 35.796C29.3369 37.7339 30.8092 39.0825 31.6994 40.1447C32.1399 40.6703 32.3556 41.0325 32.448 41.2751C32.521 41.4667 32.4979 41.5262 32.491 41.5441L32.49 41.5467C32.4682 41.6079 32.4407 41.6688 32.4073 41.7286C32.3684 41.7981 32.1317 42.1285 30.5689 42.3185C29.0979 42.4973 26.995 42.5 24 42.5C21.005 42.5 18.9021 42.4973 17.4311 42.3185C15.8683 42.1285 15.6316 41.7981 15.5927 41.7286C15.5593 41.6688 15.5318 41.6079 15.51 41.5467L15.509 41.5441C15.5021 41.5262 15.479 41.4667 15.552 41.2751C15.6444 41.0325 15.8601 40.6703 16.3006 40.1447C17.1908 39.0825 18.6631 37.7339 20.786 35.796C21.7735 34.8946 22.4144 34.3132 22.9489 33.9343Z"
										fill="#FAFFFF"
									/>
								</svg>

								<span className="cyan"> Our Vision</span>
							</h6>
							<p className="px-5">
								{/* Empowering Seamless Mobility and Connectivity: GoGo Rides
								envisions a future where communities within Ekiti State and
								across the southwestern region of Nigeria experience efficient,
								reliable, and accessible transport solutions. Our commitment
								lies in fostering stronger intra-community bonds and
								facilitating inter-state connections through innovative rides
								and logistics services, contributing to the growth and
								prosperity of the regions we serve. */}
								To provide communities with efficient, reliable and accessible
								transport solutions
							</p>
						</div>

						<Link>
							<Button
								className={"btn p-2 rounded-pill"}
								name={"Sign Up"}
								clickProp={toastUser}
							/>
						</Link>
						{/* <Link to={"/register"}>
							<Button className={"btn p-2 rounded-pill"} name={"Sign Up"} />
						</Link> */}
					</div>
				</div>
			</section>
		</>
	)
}

export default Cta
