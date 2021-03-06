import React, { Component } from 'react'
import Img1 from '../asset/img/p1.jpg'
import Img2 from '../asset/img/8.jpg'
import Img3 from '../asset/img/5.jpg'
import Img4 from '../asset/img/b1.jpg'
import Img5 from '../asset/img/b3.jpg'
import Img6 from '../asset/img/silbver.jpg'
//import Hero from '../asset/img/hero-img.png'
import Landi from '../asset/img/book.jpg'
// import   {Link} from 'react-router-dom'
// import Customerheader from './dashboard/customerheader';
import Header from '../layout/header/Header'


export class landingpage extends Component {

  componentWillMount(){
    localStorage.clear()
  }
   componentWillUpdate() {
     localStorage.clear()
   }
  render() {
    return (
      <div>
        {/* <Customerheader/> */}
         {/* Hero section */}
     <Header />
     {/* start banner Area */}
      <section className="banner-area">
        <div className="container">
          <div className="row fullscreen align-items-center justify-content-between">
            <div className="col-lg-6 col-md-6 banner-left">
            
              <h2> WELCOME TO GRAPHICVILA </h2>
              <h3>
              We are a creative group
                of people who design
              influential brands and
              digital experiences.
              </h3>
              <br/>
             
              <h4 className="text-uppercase">Upload Designs, Share Designs And Meet Designers</h4>
               <br/>
              <a href="/signin" className="primary-btn text-uppercase">discover now</a>
            </div>
            <div className="col-lg-6 col-md-6 banner-right d-flex align-self-end mb-5">
             <img className="img-fluid" src={Landi} alt="" /> 
              {/* <img className="img-fluid" src={Hero} alt="" /> */}
            </div>
          </div>
        </div>					
      </section>
      {/* End banner Area */}
      


      {/* Start portfolio-area Area */}
      <section className="portfolio-area section-gap" id="portfolio">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="menu-content pb-70 col-lg-8">
              <div className="title text-center">
                <h1 className="mb-10">GRAPHICVILA DESIGNS </h1>
               
              </div>
            </div>
          </div>
          {/* <div className="filters">
            <ul>
              <li className="active" data-filter="*">All</li>
              <li data-filter=".vector">Vector</li>
              <li data-filter=".raster">Raster</li>
              <li data-filter=".ui">UI/UX</li>
              <li data-filter=".printing">Printing</li>
            </ul>
          </div> */}
          <div className="filters-content">
            <div className="row grid">
              <div className="single-portfolio col-sm-4 all vector">
                <div className="relative">
                  <div className="thumb">
                    <div className="overlay overlay-bg" />
                    <img className="image img-fluid" src={Img1} alt="" />
                  </div>
                  <a href="/signin" className="img-pop-up">	
                    <div className="middle">
                      <div className="text align-self-center d-flex"> <span>GraphicsVila Design</span></div>
                    </div>
                  </a>                              		
                </div>
                <div className="p-inner">
                  <h4>2D Vinyl Design</h4>
                  <div className="cat">vector</div>
                </div>					                               
              </div>
              <div className="single-portfolio col-sm-4 all raster">
                <div className="relative">
                  <div className="thumb">
                    <div className="overlay overlay-bg"></div>
                    <img className="image img-fluid" src={Img2} alt="" />
                  </div>
                  <a href="img/p2.jpg" className="img-pop-up">	
                    <div className="middle">
                      <div className="text align-self-center d-flex"><span>GraphicsVila Design</span></div>
                    </div>
                  </a>                              		
                </div>
                <div className="p-inner">
                  <h4>3d Hand Design</h4>
                  <div className="cat">vector</div>
                </div>					                               
              </div>                            
              <div className="single-portfolio col-sm-4 all ui">
                <div className="relative">
                  <div className="thumb">
                    <div className="overlay overlay-bg" />
                    <img className="image img-fluid" src={Img3} alt="" />
                  </div>
                  <a href="img/p3.jpg" className="img-pop-up">	
                    <div className="middle">
                      <div className="text align-self-center d-flex"><span>GraphicsVila Design</span></div>
                    </div>
                  </a> 
                </div>
                <div className="p-inner">
                  <h4>Creative Poster Design</h4>
                  <div className="cat">Agency</div>
                </div>
              </div>
              <div className="single-portfolio col-sm-4 all printing">
                <div className="relative">
                  <div className="thumb">
                    <div className="overlay overlay-bg" />
                    <img className="image img-fluid" src={Img4} alt="" />
                  </div>
                  <a href="img/p4.jpg" className="img-pop-up">	
                    <div className="middle">
                      <div className="text align-self-center d-flex"><span>GraphicsVila Design</span></div>
                    </div>
                  </a>                            		
                </div> 
                <div className="p-inner">
                  <h4>Embosed Logo Design</h4>
                  <div className="cat">Portal</div>
                </div>
              </div>
              <div className="single-portfolio col-sm-4 all vector">
                <div className="relative">
                  <div className="thumb">
                    <div className="overlay overlay-bg" />
                    <img className="image img-fluid" src={Img5} alt="" />
                  </div>
                  <a href="img/p5.jpg" className="img-pop-up">	
                    <div className="middle">
                      <div className="text align-self-center d-flex"><span>GraphicsVila Design</span></div>
                    </div>
                  </a>                             		
                </div>
                <div className="p-inner">
                  <h4>3D Helmet Design</h4>
                  <div className="cat">vector</div>
                </div>
              </div>
              <div className="single-portfolio col-sm-4 all raster">
                <div className="relative">
                  <div className="thumb">
                    <div className="overlay overlay-bg" />
                    <img className="image img-fluid" src={Img6} alt="" />
                  </div>
                  <a href="" className="img-pop-up">	
                    <div className="middle">
                      <div className="text align-self-center d-flex"><span>GraphicsVila Design</span></div>
                    </div>
                  </a>                             		
                </div>
                <div className="p-inner">
                  <h4>Computer Design</h4>
                  <div className="cat">raster</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End portfolio-area Area */}
      {/* Hero section end */}
      </div>
    )
  }
}

export default landingpage
