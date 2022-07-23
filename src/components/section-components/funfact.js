import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class FunFact extends Component {

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'

		return <section className="fun-fact-area text-center pd-top-100" style={{ background: 'url(' + publicUrl + 'assets/img/fact/bg.png)' }}>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-3 col-6">
						<div className="single-fact-wrap">
							<div className="thumb">
								<i class="fad fa-users-class"></i>
							</div>
							<h2><span className="counter">500</span></h2>
							<p className="fact-title">Học Sinh</p>
						</div>
					</div>
					<div className="col-lg-3 col-6">
						<div className="single-fact-wrap style-2">
							<div className="thumb">
								<i class="fad fa-chalkboard-teacher"></i>
							</div>
							<h2><span className="counter">24</span></h2>
							<p className="fact-title">Giáo Viên</p>
						</div>
					</div>
					<div className="col-lg-3 col-6">
						<div className="single-fact-wrap style-3">
							<div className="thumb">
								<i class="fad fa-graduation-cap"></i>
							</div>
							<h2><span className="counter">10</span></h2>
							<p className="fact-title">Khối</p>
						</div>
					</div>
					<div className="col-lg-3 col-6">
						<div className="single-fact-wrap style-4">
							<div className="thumb">
								<i class="fad fa-award"></i>
							</div>
							<h2><span className="counter">10</span></h2>
							<p className="fact-title">Năm Thương Hiệu</p>
						</div>
					</div>
				</div>
			</div>
		</section>



	}
}

export default FunFact