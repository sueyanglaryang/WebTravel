import React from 'react'
import AboutImg from '../img/about2.jpg'

export default function About() {
  return (
    <>
        <div class="container-fluid py-5">
        <div class="container pt-5">
            <div class="row">
                <div class="col-lg-6" style={{minHeight: "500px"}}>
                    <div class="position-relative h-100">
                        <img class="position-absolute w-100 h-100" src={AboutImg} style={{objectFit: "cover"}}/>
                    </div>
                </div>
                <div class="col-lg-6 pt-5 pb-lg-5">
                    <div class="about-text bg-white p-4 p-lg-5 my-lg-5">
                        <h6 class="text-primary text-uppercase" style={{letterSpacing: "5px"}}>About Us</h6>
                        <h1 class="mb-3">We Provide Best Tour Packages In Your Budget</h1>
                        <p>Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore sed et. Sit rebum labore sit sit ut vero no sit. Et elitr stet dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat sed diam duo</p>
                        <div class="row mb-4">
                            <div class="col-6">
                                <img class="img-fluid" src="img/about0-2.jpg" alt=""/>
                            </div>
                            <div class="col-6">
                                <img class="img-fluid" src="img/about-2.jpg" alt=""/>
                            </div>
                        </div>
                        <a href="/#" class="btn btn-primary mt-1">Book Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
