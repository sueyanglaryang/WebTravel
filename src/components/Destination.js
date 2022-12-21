import React from 'react'
import vientiane from '../img/vientiane0-1.jpg'
import vangveing from '../img/vangveing0-1.jpg'
import luangprabang from '../img/luangprabang.jpg'
import chanpasak from '../img/chanpasak0-1.jpg'
import muangfeuang from '../img/muangfeuang0-1.jpg'
import xaysomboun from '../img/xaysomboun0-1.jpg'
import xeingkhouag from '../img/xeingkhouag.jpg'



export default function Destination() {
  return (
    <>
        <div class="container-fluid py-5">
        <div class="container pt-5 pb-3">
            <div class="text-center mb-3 pb-3">
                <h6 class="text-primary text-uppercase" style={{letterSpacing: "5px"}}>Destination</h6>
                <h1>Explore Top Destination</h1>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="destination-item position-relative overflow-hidden mb-2">
                        <img class="img-fluid" src={vientiane} alt=""/>
                        <a class="destination-overlay text-white text-decoration-none" href="/#">
                            <h5 class="text-white">Vientiane</h5>
                        </a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="destination-item position-relative overflow-hidden mb-2">
                        <img class="img-fluid" src={vangveing} alt=""/>
                        <a class="destination-overlay text-white text-decoration-none" href="/#">
                            <h5 class="text-white">Vang Vieng</h5>
                        </a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="destination-item position-relative overflow-hidden mb-2">
                        <img class="img-fluid" src={luangprabang} alt=""/>
                        <a class="destination-overlay text-white text-decoration-none" href="/#">
                            <h5 class="text-white">Luang Prabang</h5>
                        </a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="destination-item position-relative overflow-hidden mb-2">
                        <img class="img-fluid" src={chanpasak} alt=""/>
                        <a class="destination-overlay text-white text-decoration-none" href="/#">
                            <h5 class="text-white">Chan Pasak</h5>
                        </a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="destination-item position-relative overflow-hidden mb-2">
                        <img class="img-fluid" src={muangfeuang} alt=""/>
                        <a class="destination-overlay text-white text-decoration-none" href="/#">
                            <h5 class="text-white">Muang Feuong</h5>
                        </a>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="destination-item position-relative overflow-hidden mb-2">
                        <img class="img-fluid" src={xeingkhouag} alt=""/>
                        <a class="destination-overlay text-white text-decoration-none" href="/#">
                            <h5 class="text-white">ຊຽງຂວາງ</h5>
                        </a>
                    </div>
                </div>



                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="destination-item position-relative overflow-hidden mb-2">
                        <img class="img-fluid" src={xaysomboun} alt=""/>
                        <a class="destination-overlay text-white text-decoration-none" href="/#">
                            <h5 class="text-white">Xaysomboun</h5>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
