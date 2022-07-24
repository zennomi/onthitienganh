import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import contacts from '../../contacts';

class Banner extends Component {

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'
		let imagealt = 'image'

		return <div className="banner-area" style={{ background: 'url(' + publicUrl + 'assets/img/banner/2.png)' }}>
			<div className="container">
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
						{/* <div className="col-md-10">
			          <form>
			            <select>
			              <option>All resources</option>
			              <option value={1}>1 resource</option>
			              <option value={2}>2 resource</option>
			              <option value={3}>3 resource</option>
			            </select>
			            <input type="text" className="form-control" />
			            <button type="submit" className="btn"><img src={publicUrl+"assets/img/icon/1.png"} alt="img" /></button>
			          </form>
			        </div> */}
					</div>
				</div>
			</div>
		</div>
	}
}

export default Banner