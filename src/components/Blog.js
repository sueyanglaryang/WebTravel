import React from 'react'
import Blog1 from '../img/blog-1.jpg'
import Blog2 from '../img/blog-2.jpg'
import Blog3 from '../img/blog-3.jpg'

export default function Blog() {
  return (
    <>
        <div className="container-fluid py-5">
        <div className="container pt-5 pb-3">
            <div className="text-center mb-3 pb-3">
                <h6 className="text-primary text-uppercase" style={{letterSpacing: "5px"}}>Our Blog</h6>
                <h1>Latest From Our Blog</h1>
            </div>
            <div className="row pb-3">
                <div className="col-lg-4 col-md-6 mb-4 pb-2">
                    <div className="blog-item">
                        <div className="position-relative">
                            <img className="img-fluid w-100" src={Blog1} alt=""/>
                            <div className="blog-date">
                                <h6 className="font-weight-bold mb-n1">01</h6>
                                <small className="text-white text-uppercase">Jan</small>
                            </div>
                        </div>
                        <div className="bg-white p-4">
                            <div className="d-flex mb-2">
                                <a className="text-primary text-uppercase text-decoration-none" href="/#">Admin</a>
                                <span className="text-primary px-2">|</span>
                                <a className="text-primary text-uppercase text-decoration-none" href="/#">Tours & Travel</a>
                            </div>
                            <a className="h5 m-0 text-decoration-none" href="/#">Dolor justo sea kasd lorem clita justo diam amet</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 pb-2">
                    <div className="blog-item">
                        <div className="position-relative">
                            <img className="img-fluid w-100" src={Blog2} alt=""/>
                            <div className="blog-date">
                                <h6 className="font-weight-bold mb-n1">01</h6>
                                <small className="text-white text-uppercase">Jan</small>
                            </div>
                        </div>
                        <div className="bg-white p-4">
                            <div className="d-flex mb-2">
                                <a className="text-primary text-uppercase text-decoration-none" href="/#">Admin</a>
                                <span className="text-primary px-2">|</span>
                                <a className="text-primary text-uppercase text-decoration-none" href="/#">Tours & Travel</a>
                            </div>
                            <a className="h5 m-0 text-decoration-none" href="/#">Dolor justo sea kasd lorem clita justo diam amet</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 pb-2">
                    <div className="blog-item">
                        <div className="position-relative">
                            <img className="img-fluid w-100" src={Blog3}  alt=""/>
                            <div className="blog-date">
                                <h6 className="font-weight-bold mb-n1">01</h6>
                                <small className="text-white text-uppercase">Jan</small>
                            </div>
                        </div>
                        <div className="bg-white p-4">
                            <div className="d-flex mb-2">
                                <a className="text-primary text-uppercase text-decoration-none" href="/#">Admin</a>
                                <span className="text-primary px-2">|</span>
                                <a className="text-primary text-uppercase text-decoration-none" href="/#">Tours & Travel</a>
                            </div>
                            <a className="h5 m-0 text-decoration-none" href="/#">Dolor justo sea kasd lorem clita justo diam amet</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

