import React, { Component } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";


export default class Home extends Component {
  render() {
    return (
      <div className='row'>
        <div className='col'>
          <div className="card ">
            <div className="row">
              <h2>campus</h2>
              <div className='col'>
                <img src="https://images.collegedunia.com/public/college_data/images/campusimage/1563873635camppus.jpg" className="card-img-top my-2 border border-dark" alt="..." />
                <img src="https://bookuradmission.com/campus_tour/16202895583.png" className="card-img-top my-2 border border-dark" alt="..." />
              </div>
              <div className='col'>
                <img src="https://images.shiksha.com/mediadata/images/1554112720phpZDwHnW.jpeg" className="card-img-top my-2 border border-dark" alt="..." />
                <img src="https://www.vgecg.ac.in/tnp2/images/vgec_college.png" className="card-img-top my-2 border border-dark" alt="..." />
              </div>
              <h2>hostle</h2>
              <div className='col'>
                <img src="https://www.vgecg.ac.in/images/hostel/hostel1.png" className="card-img-top my-2 border border-dark" alt="..." />
                <img src="https://images.jdmagicbox.com/comp/ahmedabad/a2/079pxx79.xx79.170907111113.v2a2/catalogue/vedic-hostel-chandkheda-ahmedabad-hostel-for-boy-students-aa9ylvsbbb.jpg?clr=" className="card-img-top my-2 border border-dark" alt="..." />
              </div>
              <div className='col'>
                <img src="https://content.jdmagicbox.com/comp/ahmedabad/y4/079pxx79.xx79.170913143943.t6y4/catalogue/vgec-boys-hostel-2-chandkheda-ahmedabad-hostel-for-boy-students-shlaeueomv.jpg" className="card-img-top my-2 border border-dark" alt="..." />
                <img src="https://www.vgecg.ac.in/tnp2/images/vgec_college.png" className="card-img-top my-2 border border-dark" alt="..." />
              </div>
            </div>
            <div className="card-body">
              <h5 className="card-title">VGEC</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div className="card-footer">
              <small className="text-body-secondary">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
        <div class="col-3 bg-light p-3 border ">
          <div class="d-grid gap-2 col-10 mx-auto">
            <Link className="nav-link active " aria-current="page" to="/faculty">
              <button class="btn btn-outline-primary" type="button" style={{width:"100%"}}>Faculty</button>
            </Link>
            <button class="btn btn-outline-secondary" type="button">map</button>
            <button class="btn btn-outline-success" type="button">campus</button>
            <button class="btn btn-outline-danger" type="button">Library</button>
            <button class="btn btn-outline-warning" type="button">Hostle</button>
          </div>
        </div>

      </div>
    )
  }
}
