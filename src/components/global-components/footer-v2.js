import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer_v2 extends Component {

	componentDidMount() {
		let publicUrl = process.env.PUBLIC_URL + '/'
		const minscript = document.createElement("script");
		minscript.async = true;
		minscript.src = publicUrl + "assets/js/main.js";

		document.body.appendChild(minscript);
	}

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'
		let imgattr = "Footer logo"

		return (
			<footer className="footer-area-2 pd-top-100">
				<div className="container">
					<div className="row">
						<div className="col-lg-3 col-md-6">
							<div className="footer-widget widget widget_about">
								<div className="logo">
									<img src={publicUrl + "assets/img/logo-2.png"} alt="img" />
								</div>
								<p className="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
								<p><i className="la la-arrow-right" /><span>230.543 Products</span></p>
								<p><i className="la la-arrow-right" /><span>655.3060 Members</span></p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="footer-widget widget widget_contact">
								<h4 className="widget-title">Contact Us</h4>
								<div className="media">
									<div className="thumb">
										<img src={publicUrl + "assets/img/footer/1m.png"} alt="img" />
									</div>
									<div className="media-body">
										<p>2200 Pooz Street</p>
										<p>Henderson, TN 38340</p>
									</div>
								</div>
								<div className="media">
									<div className="thumb mt-0">
										<img src={publicUrl + "assets/img/footer/2m.png"} alt="img" />
									</div>
									<div className="media-body">
										<p className="m-0">example@mail.com</p>
									</div>
								</div>
								<div className="media">
									<div className="thumb mt-0">
										<img src={publicUrl + "assets/img/footer/3m.png"} alt="img" />
									</div>
									<div className="media-body">
										<p className="m-0">517-383-6673</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-2 col-md-6">
							<div className="footer-widget widget widget widget_products">
								<h4 className="widget-title">Products</h4>
								<ul className="go-top">
									<li><Link to="/category">Graphics (26)</Link></li>
									<li><Link to="/category">Backgrounds (11)</Link></li>
									<li><Link to="/category">Fonts (9)</Link></li>
									<li><Link to="/category">Music (3)</Link></li>
									<li><Link to="/category">Photography (3)</Link></li>
									<li><Link to="/category">Themes (3)</Link></li>
									<li><Link to="/category">Web Templates (3)</Link></li>
								</ul>
							</div>
						</div>
						<div className="col-lg-3 offset-lg-1 col-md-6">
							<div className="footer-widget widget widget_newsletter">
								<h4 className="widget-title">Our Newsletter</h4>
								<p>Fed do eiusmod tempor incidi dunt ut labore et dolore</p>
								<form>
									<div className="single-input-wrap input-group">
										<input type="email" name="email" required className="form-control" id="inlineFormInputGroup" placeholder="Your Email Address" />
									</div>
									<button type="submit" className="btn btn-base">Subscribe</button>
								</form>
							</div>
						</div>
					</div>
				</div>
				{/*Footer bottom*/}
				<div className="container">
					<div className="copyright-area">
						<div className="row">
							<div className="col-lg-6 align-self-center">
								<p>©2022 CopyRight Example. All rights reserved. </p>
							</div>
							<div className="col-lg-6 text-lg-right text-center">
								<ul className="social-area">
									<li><a href="https://www.facebook.com/solverwp/"><i className="fab fa-facebook-f" /></a></li>
									<li><a href="https://www.twitter.com/solverwp/"><i className="fab fa-twitter" /></a></li>
									<li><a href="https://www.google-plus.com/solverwp/"><i className="fab fa-google-plus-g" /></a></li>
									<li><a href="https://www.pinterest.com/solverwp/"><i className="fab fa-pinterest-p" /></a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</footer>

		)
	}
}


export default Footer_v2