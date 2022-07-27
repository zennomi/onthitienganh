import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Error from "../error";
import blogs from "../../blogs";
import contacts from "../../contacts";

export default function BlogDetails() {
  let publicUrl = process.env.PUBLIC_URL + "/";
  let imagealt = "image";
  const { id } = useParams();
  const blog = blogs[id];
  const otherBlogs = blogs
    .map((b, i) => ({ ...b, id: i }))
    .filter((_, index) => index !== Number(id));

  useEffect(() => {
    window.scrollTo(0,0);
  }, [id]);

  return blog ? (
    <section className="blog-page-area pd-top-115 pd-bottom-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="blog-details-page-inner">
              <div className="single-blog-inner m-0">
                <div className="thumb">
                  <img src={publicUrl + blog.image} alt="image" />
                </div>
                <div className="single-blog-details">
                  <div className="meta">
                    <span className="author">
                      <i className="far fa-user" />
                      {blog.badge}
                    </span>
                  </div>
                  <h3>{blog.title}</h3>
                  <p>{blog.content}</p>
                </div>
                <div className="author-area">
                  <div className="media">
                    <img
                      src={publicUrl + "assets/img/author/blog-author.png"}
                      alt="img"
                    />
                    <div className="media-body align-self-center">
                      <h4>Nathan George</h4>
                      <p>
                        No one rejects, dislikes, or avoids pleasure itself,
                        because it is pleasure, but because those who do not
                        know how to pursue pleasure rationally encounter
                        consequences that aextremely painful. Nor again is there
                        anyone who loves
                      </p>
                      <ul className="social-area social-area-2">
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="post-check">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="single-news-wrap media">
                        <img
                          src={publicUrl + "assets/img/widget/1.png"}
                          alt="img"
                        />
                        <div className="media-body">
                          <p className="date">
                            <i
                              className="far fa-calendar-alt"
                              aria-hidden="true"
                            />
                            25 Aug 2020
                          </p>
                          <h6>
                            <a href="#">
                              Smashing Podcast Epis <br /> With Rach Andrewe
                            </a>
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="single-news-wrap media text-right">
                        <div className="media-body">
                          <p className="date">
                            25 Aug 2020
                            <i
                              className="mr-0 ml-3 far fa-calendar-alt"
                              aria-hidden="true"
                            />
                          </p>
                          <h6>
                            <a href="#">
                              Implementing Infinite <br /> Loading In React
                            </a>
                          </h6>
                        </div>
                        <img
                          src={publicUrl + "assets/img/widget/6.png"}
                          alt="img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="related-post">
                  <div className="section-title">
                    <h3>Điểm tin khác</h3>
                  </div>
                  <div className="row justify-content-center">
                    {otherBlogs.map((blog) => (
                      <div className="col-md-6">
                        <div className="recent-post-wrap">
                          <img src={publicUrl + blog.image} alt="img" />
                          <div className="post-details">
                            <div className="meta">
                              <span>
                                <i
                                  className="far fa-calendar-alt"
                                  aria-hidden="true"
                                />
                                {blog.badge}
                              </span>
                            </div>
                            <h5>
                              <Link to={`/hoat-dong/${blog.id}`}>
                                {blog.title}
                              </Link>
                            </h5>
                            <Link to={`/hoat-dong/${blog.id}`}>
                              Đọc thêm <i className="la la-arrow-right" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="sidebar-area">
              <div className="widget widget-author widget-border text-center">
                <div className="thumb">
                  <img src={publicUrl + "assets/img/widget/4.png"} alt="img" />
                </div>
                <div className="author-details">
                  <h4>{contacts.teacherName}</h4>
                  <span>Giáo viên</span>
                  <p>
                    Mọi hệ thống bài giảng đều được cô Nga biên soạn kỹ lưỡng.
                  </p>
                  <ul className="social-area">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="widget widget-consultation">
                <div className="thumb">
                  <img src={publicUrl + "assets/img/widget/5.png"} alt="img" />
                </div>
                <div className="consultation-wrap text-center px-3">
                  <h2>Muốn cải thiện tiếng Anh của con em?</h2>
                  <Link className="btn btn-base" to="/#lien-he">
                    Đăng ký ngay
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  ) : (
    <Error />
  );
}
