import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

class FeaturedV2 extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";

    return (
      <section className="dmarket-area bg-sky-blue pd-top-90 pd-bottom-70">
        <div className="container">
          <div className="row justify-content-center">
			      <div className="col-lg-5">
			        <div className="section-title text-center">
			          <h2>Điểm đặc biệt tại Ms Hằng Nga Education</h2>
			          {/* <p>của hệ thống các lớp học đều do Cô Hằng Nga trực tiếp thiết kế từng buổi dạy.</p> */}
			        </div>
			      </div>
			    </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-dmarket-wrap">
                <div className="media">
                  <div className="thumb">
                    <img
                      src={publicUrl + "assets/img/icon/dmarket-1.png"}
                      alt="img"
                    />
                  </div>
                  <div className="wrap-details media-body">
                    <h5>
                      <a href="#">BÀI GIẢNG</a>
                    </h5>
                    <p>
                      của hệ thống các lớp học đều do Cô Hằng Nga trực tiếp
                      thiết kế từng buổi dạy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-dmarket-wrap">
                <div className="media">
                  <div className="thumb bg-3">
                    <img
                      src={publicUrl + "assets/img/icon/dmarket-3.png"}
                      alt="img"
                    />
                  </div>
                  <div className="wrap-details media-body go-top">
                    <h5>
                      <a href="#">PHƯƠNG PHÁP</a>
                    </h5>
                    <p>
                      HỌC DUY NHẤT 1 BUỔI/TUẦN. LỘ TRÌNH HÀNG NGÀY XUYÊN SUỐT –
                      NGẮN GỌN – DỄ NHỚ - HIỆU QUẢ CAO.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-dmarket-wrap">
                <div className="media">
                  <div className="thumb bg-2">
                    <img
                      src={publicUrl + "assets/img/icon/dmarket-2.png"}
                      alt="img"
                    />
                  </div>
                  <div className="wrap-details media-body">
                    <h5>
                      <a href="#">ĐỘI NGŨ</a>
                    </h5>
                    <p>
                      Đội ngũ giáo viên giỏi trẻ trung, nhiệt huyết được đào tạo
                      bởi Cô Hằng Nga.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default FeaturedV2;
