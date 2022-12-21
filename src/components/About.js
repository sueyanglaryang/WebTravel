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
                        <h6 class="text-primary text-uppercase" style={{letterSpacing: "0px"}}>ກ່ຽວກັບສະຖານທີ່</h6>
                        <h1 class="mb-3">ການທ່ອງທ່ຽວຂອງປະເທດລາວ</h1>
                        <p>ມີການບໍລິການນຳທ່ຽວແຕ່ພາກເໜືອ ແລະ ພາກກາງຈົນເຖິງພາກໃຕ້ຂອງລາວ ແລະ ຍັງມີຄວາມແຕກຕ່າງກັນໄປເນື່ອງຈາກສະພາບແວດລ້ອມທາງທຳມະຊາດຂອງລາວເຮົາ, ປະເທດລາວເປັນພູງສຸງທາງພາກເໜືອ ແລະ ພາກຕາເວັນອອກຄ້ອຍລົງທາງພາກໃຕ້ ແລະ ພາກຕາເວັນຕົກ ແລະ ຍັງມີການບໍລິການຕະຫຼອດໄລຍະເວລາໃນໂມງລັດຖະການ</p>
                        <div class="row mb-4">
                            <div class="col-6">
                                <img class="img-fluid" src="img/about0-2.jpg" alt=""/>
                            </div>
                            <div class="col-6">
                                <img class="img-fluid" src="img/about-2.jpg" alt=""/>
                            </div>
                        </div>
                        <a href="/#" class="btn btn-primary mt-1">ຈອງຕອນນີ້</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
