import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import contacts from '../../contacts';

class ContactInfo extends Component {

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'

		return <section className="contact-page-area bg-sky-blue  pd-top-100 pd-bottom-70">
			<div className="container">
				<div className="section-title text-center">
					<h3>Liên hệ</h3>
					<h6>Liên hệ sớm để Ms. Hang Nga Education tư vấn và lên lộ trình học sớm nhất có thể!</h6>
				</div>
				<div className="row justify-content-center">
					<div className="col-lg-3 col-6 px-md-2 px-1 mb-2">
						<a className="single-contact-wrap text-center h-100" href="tel:+84988999387">
							<div className="thumb">
								<i class="fas fa-phone-alt"></i>
							</div>
							<h4>Hotline</h4>
							<p>Ms. Hang Nga {contacts.phone}</p>
						</a>
					</div>
					<div className="col-lg-3 col-6 px-md-2 px-1 mb-2">
						<a className="single-contact-wrap text-center h-100" href={contacts.facebook} target='_blank'>
							<div className="thumb">
								<i class="fab fa-facebook-f"></i>
							</div>
							<h4>Facebook</h4>
							<p>Tư vấn miễn phí cho phụ huynh và học sinh</p>
						</a>
					</div>
					<div className="col-lg-3 col-6 px-md-2 px-1 mb-2">
						<a className="single-contact-wrap text-center h-100" href={contacts.map} target='_blank'>
							<div className="thumb">
								<i class="fas fa-map-marker-alt"></i>
							</div>
							<h4>Địa chỉ</h4>
							<p>{contacts.address}</p>
						</a>
					</div>
					<div className="col-lg-3 col-6 px-md-2 px-1 mb-2">
						<a className="single-contact-wrap text-center h-100" href={contacts.fanpage} target='_blank'>
							<div className="thumb">
								<i class="fab fa-tiktok"></i>
							</div>
							<h4>Tiktok</h4>
							<p>Chia sẻ hình ảnh mỗi ngày tại lớp học</p>
						</a>
					</div>
				</div>
			</div>
		</section>

	}
}

export default ContactInfo