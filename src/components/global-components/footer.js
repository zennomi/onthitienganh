import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import contacts from '../../contacts';

class Footer_v1 extends Component {

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
			<footer className="footer-area pd-top-100">
				<div className="container">
					<div className="row">
						<div className="col-lg-4 col-md-6">
							<div className="footer-widget widget widget_contact">
								<h4 className="widget-title">{contacts.brandName}</h4>
								<div className="media">
									<div className="thumb">
										<i class="fas fa-map-marker-alt"></i>
									</div>
									<div className="media-body">
										<p className="m-0">{contacts.address}</p>
									</div>
								</div>
								<div className="media">
									<div className="thumb mt-0">
										<i class="fas fa-phone-alt"></i>
									</div>
									<div className="media-body">
										<p className="m-0">{contacts.phone}</p>
									</div>
								</div>
								<ul className="social-area">
									<li><a href={contacts.fanpage} target='_blank' ><i className="fab fa-facebook-f" /></a></li>
									<li><a href={contacts.map} target='_blank' ><i class="fas fa-map-marker-alt"></i></a></li>
									<li><a href={contacts.tiktok} target='_blank' ><i class="fab fa-tiktok"></i></a></li>
								</ul>
							</div>
						</div>
						<div className="col-lg-2 col-md-6">
							<div className="footer-widget widget widget_nav_menu">
								<h4 className="widget-title">Useful link</h4>
								<ul className="go-top">
									<li><Link to="/product">All Products</Link></li>
									<li><Link to="/faq">FAQ’S</Link></li>
									<li><Link to="/policy">Terms &amp; Conditions</Link></li>
									<li><Link to="/sign-in">Sign up</Link></li>
									<li><Link to="/blog">Articles</Link></li>
									<li><Link to="/category">Popular tags</Link></li>
								</ul>
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
							<div className="footer-widget widget widget_news">
								<h4 className="widget-title">Latest News</h4>
								<div className="widget-news-wrap">
									<div className="date">May 11, 2020</div>
									<p> <Link to="/blog-details">The heights by great men</Link> </p>
								</div>
								<div className="widget-news-wrap">
									<div className="date">May 11, 2020</div>
									<p> <Link to="/blog-details">Top ten way to get success</Link> </p>
								</div>
								<div className="widget-news-wrap">
									<div className="date">May 11, 2020</div>
									<p> <Link to="/blog-details">How to start selling ?</Link> </p>
								</div>
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
							<div className="col-lg-6 text-lg-right">
								<ul>
									<li>
										<a href="#">Home</a>
									</li>
									<li>
										<a href="#">About</a>
									</li>
									<li>
										<a href="#">Blog</a>
									</li>
									<li>
										<a href="#">Contact</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</footer>


		)
	}
}


export default Footer_v1