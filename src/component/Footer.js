import React, { Component } from 'react'

class Footer extends Component {
   render() {
      return (
         <div style={{ backgroundColor: 'black' }} className="mt-5">

            <div style={{backgroundSize: 'cover', backgroundPosition: '50% 75%' }}>
               <div className='container text-white py-3 mt-1 mb-3'>

                  <div className='row'>

                     <div className='col-5 p-0 '>
                        <img src='footer-logo-white.svg' style={{width: 150, height: 150}}/>
                        <h6 className='p-0 font-weight-light'>Copyrights 2019 <span className='text-uppercase font-weight-bold text-success'>Page360</span></h6>
                        <h6 className='p-0 my-0 font-weight-light'>Design and developed by <span className='font-weight-normal'>Putra Nugroho</span></h6>
                        <h6 className='p-0 font-weight-light'>For Jendela360</h6>
                     </div>

                     <div className='col-5 p-0 '>
                        <h6 className='p-0 font-weight-bold'>Bantuan</h6>
                        <h6 className='p-0 font-weight-light'>Sewakan Apartemen Anda</h6>
                        <h6 className='p-0 font-weight-light'>Syarat & ketentan</h6>
                        <h6 className='p-0 font-weight-light'>Jendela360</h6>
                        <h6 className='p-0 font-weight-light'>Panduan Penyewa</h6>
                        <h6 className='p-0 font-weight-light'>Panduan Pemilik</h6>
                        <h6 className='p-0 font-weight-light'>Panduan Kami</h6>
                        <h6 className='p-0 font-weight-light'>Hubungi Kami</h6>
                        <h6 className='p-0 font-weight-light'>F.A.Q</h6>
                        <h6 className='p-0 font-weight-light'>Tentang Kami</h6>
                        <h6 className='p-0 font-weight-light'>Info Jendela360</h6>
                        <h6 className='p-0 font-weight-light'>Career</h6>
                     </div>

                     <div className='col p-0 text-right'>
                        <h6 className='p-0 font-weight-light mb-2 text-uppercase'>Social Media</h6>
                        <div className='row justify-content-end mt-3'>
                           <div className='col-3 p-0'>
                              <a href="https://www.facebook.com/kidsnextgeneration"><img src="https://i.ibb.co/Lh6tZrv/facebook-1.png" alt="facebook-1" /></a>
                           </div>
                           <div className='col-6 text-center p-0'>
                              <a href='https://github.com/putranugroho'><img src="https://i.ibb.co/JQ0K1g8/github-1.png" alt="github-1" /></a>
                           </div>
                           <div className='col-3 text-left p-0'>
                              <a href='mailto:putraa.nugroho@gmail.com'><img src="https://i.ibb.co/bHgWh4v/google-plus-1.png" alt="google-plus-1" /></a>
                           </div>
                        </div>

                        <div className='row mt-3'>
                           <div className='col-3 p-0'>
                              <a href="https://www.instagram.com/whoisputra"><img src="https://i.ibb.co/dQt6wyd/instagram-1.png" alt="instagram-1" /></a>
                           </div>
                           <div className='col-6 text-center p-0'>
                              <a href='#'><img src="https://i.ibb.co/WHttwB0/linkedin-1.png" alt="linkedin-1" /></a>
                           </div>
                           <div className='col- text-left p-0'>
                              <a href='https://wa.me/6281291273949'><img src="https://i.ibb.co/WDhYjVH/whatsapp-1.png" alt="whatsapp-1" /></a>
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

export default Footer