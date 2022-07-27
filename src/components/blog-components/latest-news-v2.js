import React, { Component } from "react";
import { Link } from "react-router-dom";
import blogs from "../../blogs";
import contacts from "../../contacts";

class LatestNewsV2 extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    return (
      <section
        className="blog-area-2 pd-top-90 pd-bottom-70 bg-sky-blue go-top"
        id="diem-tin"
      >
        <div className="container">
          <div className="row justify-content-center ">
            <div className="col-lg-6">
              <div className="section-title text-center">
                <h2>Điểm tin</h2>
                <p>
                  Các sự kiện và hoạt động được tổ chức tại {contacts.brandName}
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {blogs.map((blog, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="single-blog-wrap">
                  <div className="thumb">
                    <Link to={`/hoat-dong/${index}`}>
                      <img src={publicUrl + blog.image} alt="img" />
                    </Link>
                  </div>
                  <div className="blog-details">
                    <div className="meta">
                      <span>
                        <i className="far fa-calendar-alt" />
                        {blog.badge}
                      </span>
                    </div>
                    <h5>
                      <Link to={`/hoat-dong/${index}`}>{blog.title}</Link>
                    </h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default LatestNewsV2;
