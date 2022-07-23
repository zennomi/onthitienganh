import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class TestimonialV2 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <section className="customer-area pd-top-90 pd-bottom-70">
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-5">
			        <div className="section-title">
			          <h2>Cảm nhận của phụ huynh và học sinh</h2>
			          <p>Hệ thống học tập của cô Hằng Nga luôn chào đón bố mẹ mong muốn thay đổi cách học tập của con mà chưa tìm ra phương pháp.</p>
			        </div>
			        <div className="thumb">
			          <img src={publicUrl+"assets/img/customer/1.png"} alt="img" />
			        </div>
			      </div>
			      <div className="col-lg-6 offset-lg-1">
			        <div className="single-customer-wrap media">
			          <div className="media-body">
			            <h5>Em Nguyễn Đăng Tuấn Anh</h5>
			            <p>Lorem ipsum dolor sit amet, conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore </p>
			          </div>
			          <div className="icon align-self-end">
			            <img src={publicUrl+"assets/img/icon/qoute-s.png"} alt="img" />
			          </div>
			        </div>
			        <div className="single-customer-wrap media nesting">
			          <div className="media-body">
			            <h5>Em Nguyễn Quốc Huy</h5>
			            <p>Lorem ipsum dolor sit amet, conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore </p>
			          </div>
			          <div className="icon align-self-end">
			            <img src={publicUrl+"assets/img/icon/qoute-s.png"} alt="img" />
			          </div>
			        </div>
			        <div className="single-customer-wrap media">
			          <div className="media-body">
			            <h5>Bác Trần Quang Quý</h5>
			            <p>Lorem ipsum dolor sit amet, conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore </p>
			          </div>
			          <div className="icon align-self-end">
			            <img src={publicUrl+"assets/img/icon/qoute-s.png"} alt="img" />
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</section>
        }
}

export default TestimonialV2