/* eslint-disable no-unused-vars */
// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"

import Person from "../../../assets/paul.jpg"
// import Logo from "../assets/Logo"

const Testimonials = () => {
	// eslint-disable-next-line no-undef
	// var swiper = new Swiper(".mySwiper", {
	// 	spaceBetween: 30,
	// 	effect: "slide",
	// 	autoplay: {
	// 		delay: 3000,
	// 		disableOnInteraction: false,
	// 	},
	// 	navigation: {
	// 		nextEl: ".button-next",
	// 		prevEl: ".button-prev",
	// 	},
	// 	pagination: {
	// 		el: ".swiper-pagination",
	// 		clickable: false,
	// 	},
	// })

	return (
		<>
			<section className="container Test-con mb-5">
				<div className="head text-center mb-5">
					<h6 className="work"> .WHAT GO-CUSTOMER ARE SAYING</h6>
					<h4 className="text-black fw-bolder">Testimonial</h4>
				</div>
				<div className="swiper mySwiper">
					<div className="swiper-wrapper">
						<div className="swiper-slide">
							<div className="row align-items-center testimon">
								<div className="profile text-center col-4">
									<img src={Person} alt="/" className="img-fluid" />
									<h4>Opeyemi Oladunjoye</h4>
									<h5>(Product Manger)</h5>
									250 GO-Rides taken
								</div>
								<div className="col-8">
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Iure reiciendis porro inventore earum dolores. Officiis
										consequuntur itaque aliquid voluptatum eligendi! Fuga
										quisquam et praesentium illum quidem corporis magni, harum
										fugiat?
									</p>
								</div>
							</div>
						</div>
						<div className="swiper-slide">
							<div className="row align-items-center testimon">
								<div className="profile text-center col-4">
									<img src={Person} alt="/" className="img-fluid" />
									<h4>Opeyemi Oladunjoye</h4>
									<h5>(Product Manger)</h5>
									250 GO-Rides taken
								</div>
								<div className="col-8">
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Iure reiciendis porro inventore earum dolores. Officiis
										consequuntur itaque aliquid voluptatum eligendi! Fuga
										quisquam et praesentium illum quidem corporis magni, harum
										fugiat?
									</p>
								</div>
							</div>
						</div>
						<div className="swiper-slide">
							<div className="row align-items-center testimon">
								<div className="profile text-center col-4">
									<img src={Person} alt="/" className="img-fluid" />
									<h4>Opeyemi Oladunjoye</h4>
									<h5>(Product Manger)</h5>
									250 GO-Rides taken
								</div>
								<div className="col-8">
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Iure reiciendis porro inventore earum dolores. Officiis
										consequuntur itaque aliquid voluptatum eligendi! Fuga
										quisquam et praesentium illum quidem corporis magni, harum
										fugiat?
									</p>
								</div>
							</div>
						</div>
						<div className="swiper-slide">
							<div className="row align-items-center testimon">
								<div className="profile text-center col-4">
									<img src={Person} alt="/" className="img-fluid" />
									<h4>Opeyemi Oladunjoye</h4>
									<h5>(Product Manger)</h5>
									250 GO-Rides taken
								</div>
								<div className="col-8">
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Iure reiciendis porro inventore earum dolores. Officiis
										consequuntur itaque aliquid voluptatum eligendi! Fuga
										quisquam et praesentium illum quidem corporis magni, harum
										fugiat?
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="swiper-control">
						<div className="button-next">
							<i className="fas fa-arrow-right" />
						</div>
						<div className="button-prev">
							<i className="fas fa-arrow-left" />
						</div>
						<div className="swiper-pagination" />
					</div>
				</div>
			</section>
		</>
	)
}

export default Testimonials
