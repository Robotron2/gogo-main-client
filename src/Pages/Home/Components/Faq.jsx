/* eslint-disable react/no-unescaped-entities */
const Faq = () => {
	return (
		<>
			<section className="faq-section">
				<center>
					<div className="container">
						<div className="row">
							<div className="col-md-12 text-center mb-5">
								<div className="title-wrap">
									<p className="teal-text">
										<span className="size-2">.</span>QUESTIONS
									</p>
									<h3>FAQ</h3>
								</div>
							</div>
							<div className="col-md-12">
								<div
									className="panel-group"
									id="accordion"
									role="tablist"
									aria-multiselectable="true"
								>
									<div className="panel panel-default">
										<div className="container">
											<div className="panel-heading" role="tab" id="headingOne">
												1. What is GoGo?
												<h4 className="panel-title">
													<a
														data-toggle="collapse"
														data-parent="#accordion"
														href="#collapseOne"
														aria-expanded="false"
														aria-controls="collapseOne"
													>
														<i
															className="fa fa-question-circle-o"
															aria-hidden="true"
														/>
													</a>
												</h4>
											</div>
										</div>
										<div
											id="collapseOne"
											className="panel-collapse collapse in container"
											role="tabpanel"
											aria-labelledby="headingOne"
										>
											<hr />
											<div className="container">
												<div className="panel-body">
													<p>
														In the dynamic landscape of transportation and
														logistics, GoGo Rides emerges as a pioneering force,
														dedicated to transforming the way communities in
														Ekiti State and the wider Southwestern region of
														Nigeria connect.
													</p>
													<p>
														Our innovative transport company bridges the gap
														between convenience and reliability, offering a
														comprehensive suite of services that redefine
														intra-community rides and inter-state logistics.
													</p>
													<p>
														At GoGo Rides, we're more than just a transportation
														provider – we're enablers of progress. With a fleet
														of modern vehicles and a robust technology platform,
														we empower individuals, families, and businesses to
														access safe, efficient, and affordable
														transportation solutions.
													</p>
												</div>
											</div>
										</div>
									</div>
									<div className="panel panel-default">
										<div className="container">
											<div className="panel-heading" role="tab" id="headingTwo">
												2. Why choose GoGo?
												<h4 className="panel-title">
													<a
														data-toggle="collapse"
														data-parent="#accordion"
														href="#collapseTwo"
														aria-expanded="false"
														aria-controls="collapseTwo"
													>
														<i
															className="fa fa-question-circle-o"
															aria-hidden="true"
														/>
													</a>
												</h4>
											</div>
										</div>

										<div
											id="collapseTwo"
											className="panel-collapse collapse container"
											role="tabpanel"
											aria-labelledby="headingTwo"
										>
											<hr />
											<div className="container">
												<div className="panel-body">
													Lorem ipsum dolor sit amet, consectetur adipisicing
													elit. Quia vel harum itaque corrupti placeat
													temporibus eius adipisci quod voluptatem consectetur
													ipsa, modi qui nihil molestias quas sed porro non
													optio?
												</div>
											</div>
										</div>
									</div>
									<div className="panel panel-default">
										<div className="container">
											<div className="panel-heading" role="tab" id="headingTwo">
												3. GoGo routes
												<h4 className="panel-title">
													<a
														data-toggle="collapse"
														data-parent="#accordion"
														href="#collapseThree"
														aria-expanded="false"
														aria-controls="collapseThree"
													>
														<i
															className="fa fa-question-circle-o"
															aria-hidden="true"
														/>
													</a>
												</h4>
											</div>
										</div>
										<div
											id="collapseThree"
											className="panel-collapse collapse container"
											role="tabpanel"
											aria-labelledby="headingThree"
										>
											<hr />
											<div className="container">
												<div className="panel-body">
													Lorem ipsum dolor sit amet consectetur adipisicing
													elit. Excepturi numquam perferendis distinctio quod ut
													voluptas quas accusantium dignissimos dolorum nulla.
													Magni eos minima dignissimos, corrupti modi nulla
													autem doloribus impedit.
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</center>
			</section>
		</>
	)
}

export default Faq
