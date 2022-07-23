import React, { Component } from "react";
import { Link } from "react-router-dom";
import contacts from "../../contacts";

class NavbarV2 extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imgattr = "logo";
    let anchor = "#";
    return (
      <div>
        <div className="dkt-sitebar-menu">
          <div className="dkt-sitebar-menu">
            <span className="dkt-sitebar-close">
              <i className="fa fa-times" />
            </span>
            <div className="dkt-details-inner">
              <div className="logo go-top">
                <Link to="/">
                  <img src={publicUrl + "assets/img/logo-3.png"} alt="img" />
                </Link>
              </div>
              <p className="details">
                Donsectetur elit, sed do eiusmod tempor ut labore et dolore
                magna aliqua.{" "}
              </p>
              <div className="address-inner">
                <h5>Địa chỉ</h5>
                <p>{contacts.address}</p>
              </div>
              <div className="address-inner">
                <h5>Hotline</h5>
                <p>{contacts.phone}</p>
              </div>
              {/* <div className="address-inner mb-0">
				        <h5>Fanpage</h5>
				        <p>JohnPMills@dmarket.com</p>
				      </div> */}
            </div>
            <div className="dkt-market-earn">
              <div className="address-inner">
                <h5>{contacts.brandName}</h5>
                <p>{contacts.slogan}</p>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="earn-inner">
                    <p>Tổng số HS</p>
                    <h5>500+</h5>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="earn-inner">
                    <p>Tổng số GV</p>
                    <h5>24</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar-area navbar-area-2 go-top">
          <nav className="navbar navbar-expand-lg">
            <div className="container nav-container">
              <div className="responsive-mobile-menu">
                <button
                  className="menu toggle-btn d-block d-lg-none"
                  data-target="#dkt_main_menu"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="icon-left" />
                  <span className="icon-right" />
                </button>
              </div>
              <div className="logo">
                <Link className="main-logo" to="/">
                  <img src={publicUrl + "assets/img/logo.png"} alt="img" />
                </Link>
              </div>
              <div className="collapse navbar-collapse" id="dkt_main_menu">
                <ul className="navbar-nav menu-open">
                  <li className="menu-item-has-children current-menu-item">
                    <a href="#">Home</a>
                    <ul className="sub-menu">
                      <li>
                        <Link to="/">Home 01</Link>
                      </li>
                      <li>
                        <Link to="/home-v2">Home 02</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/product">Product</Link>
                  </li>
                  <li className="menu-item-has-children current-menu-item">
                    <a href="#">Pages</a>
                    <ul className="sub-menu">
                      <li>
                        <Link to="/product">Product</Link>
                      </li>
                      <li>
                        <Link to="/product-details">Product Details</Link>
                      </li>
                      <li>
                        <Link to="/vendor">Vendor</Link>
                      </li>
                      <li>
                        <Link to="/category">Category</Link>
                      </li>
                      <li>
                        <Link to="/faq">Faq</Link>
                      </li>
                      <li>
                        <Link to="/policy">Refund Policy</Link>
                      </li>
                      <li>
                        <Link to="/error">404</Link>
                      </li>
                      <li>
                        <Link to="/sign-in">Sign In</Link>
                      </li>
                      <li>
                        <Link to="/sign-up">Sign Up</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children current-menu-item">
                    <Link to="/blog">Blog</Link>
                    <ul className="sub-menu">
                      <li>
                        <Link to="/blog">Blog Standard</Link>
                      </li>
                      <li>
                        <Link to="/blog-details">Blog Details</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
              <div className="nav-right-part nav-right-part-desktop">
                <ul>
                  <li>
                    <a href="#">
                      <i class="fas fa-phone-alt"></i>
                      {contacts.phone}
                    </a>
                  </li>
                  <li className="menu-bar dropdown-menu-btn">
                    <i className="fa fa-bars" />
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default NavbarV2;
