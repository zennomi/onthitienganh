import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import contacts from '../../contacts';
import { useMediaQuery } from 'react-responsive';

function Banner() {

	let publicUrl = process.env.PUBLIC_URL + '/'
	let imagealt = 'image'
	const isDesktopOrLaptop = useMediaQuery({
		query: '(min-width: 1224px)'
	})

	return <div className="banner-area">
		{/* <div className="container">
				<div className="banner-area-inner">
					<div className="row justify-content-center">
						<div className="col-lg-8">
							<div className="banner-inner text-center">
								<h2>Ms Hằng Nga <br /> <span>Education</span></h2>
								<p>{contacts.slogan}</p>
								<div className="btn-wrap">
									<a className="btn btn-white" href="#lien-he">Đăng ký học</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div> */}
		<a href="#lien-he">
			<img style={{ width: "100%", }} src={publicUrl + (isDesktopOrLaptop ? 'assets/img/mshangnga/banner.jpg' : 'assets/img/mshangnga/banner-mobile.jpg')} alt="banner" />
		</a>
	</div>
}

export default Banner