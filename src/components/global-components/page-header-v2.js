import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Page_header extends Component {

    render() {

        let HeaderTitle = this.props.headertitle;
        let publicUrl = process.env.PUBLIC_URL+'/'
        let Subheader = this.props.subheader ? this.props.subheader : HeaderTitle

        return (

		<div className="breadcrumb-area" style={{backgroundImage: 'url("'+publicUrl+'assets/img/breadcrumb/1.png")'}}>
		  <div className="container">
		    <div className="row">
		      <div className="col-lg-12">
		        <div className="breadcrumb-inner">
		          <div className="row">
		            <div className="col-lg-4">
		              <div className="media v-bc-inner">
		                <div className="media-left">
		                  <img src={publicUrl+"assets/img/v-logo.png"} alt="img" />
		                </div>
		                <div className="media-body align-self-center">
		                  <h3>Vextend</h3>
		                  <p>Level 3</p>
		                </div>
		              </div>
		            </div>
		            <div className="col-lg-8 align-self-center">
		              <ul className="v-bc-list-inner text-lg-right">
		                <li>
		                  <div className="media">
		                    <div className="media-left">
		                      <img src={publicUrl+"assets/img/icon/4.png"} alt="img" />
		                    </div>
		                    <div className="media-body align-self-center">
		                      <h4>80</h4>
		                      <p>Products</p>
		                    </div>
		                  </div>
		                </li>
		                <li>
		                  <div className="media">
		                    <div className="media-left">
		                      <img src={publicUrl+"assets/img/icon/5.png" }alt="img" />
		                    </div>
		                    <div className="media-body align-self-center">
		                      <h4>80</h4>
		                      <p>Products</p>
		                    </div>
		                  </div>
		                </li>
		                <li><Link className="btn btn-white" to="/contact">Contact</Link></li>
		              </ul>
		            </div>
		          </div>
		        </div>
		      </div>
		    </div>
		  </div>
		</div>

        )
    }
}


export default Page_header