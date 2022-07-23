import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import feedbacks from '../../feedbacks';

class Testimonial extends Component {

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'

		return <section className="testimonial-area text-center pd-top-90 pd-bottom-70">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-7">
						<div className="section-title text-center">
							<h2>Cảm nhận của phụ huynh và học sinh</h2>
							<p>Hệ thống học tập của cô Hằng Nga luôn chào đón bố mẹ mong muốn thay đổi cách học tập của con mà chưa tìm ra phương pháp.</p>
						</div>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-12">
						<div className="testimonial-slider owl-carousel owl-theme">
							{
								feedbacks.map(feedback =>
									<div key={feedback.name} className="item">
										<div className="testimonial-wrap">
											<div className="icon">
												<img src={publicUrl + "assets/img/testimonial/quote.png"} alt="img" />
											</div>
											<p>{feedback.content}</p>
											<div className="thumb">
												<img src={publicUrl + feedback.avatar} alt="img" />
											</div>
											<h5 className="name">{feedback.name}</h5>
											<p className="designation">{feedback.designation}</p>
										</div>
									</div>
								)
							}
						</div>
					</div>
				</div>
			</div>
		</section>



	}
}

export default Testimonial