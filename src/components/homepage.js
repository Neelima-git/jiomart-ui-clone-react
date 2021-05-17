import React from 'react'
import "./homepage.css"

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  Card, Button, CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody
} from 'bootstrap';

const homepage = () => {
    return (
      <div className="ad_1" >
      <div className="container-fluid">
    <div id="demo" className="carousel slide" data-ride="carousel" data-interval="3000" >
      
      <ul className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
        <li data-target="#myCarousel" data-slide-to="3"></li>
        <li data-target="#myCarousel" data-slide-to="4"></li>
        <li data-target="#myCarousel" data-slide-to="5"></li>
        <li data-target="#myCarousel" data-slide-to="6"></li>
        <li data-target="#myCarousel" data-slide-to="7"></li>
        <li data-target="#myCarousel" data-slide-to="8"></li>
      </ul>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="c" src=".\Assets\homepage\1.jpg" alt="Board" />
        </div>
        <div className="carousel-item">
          <img className="c" src=".\Assets\homepage\2.jpg" alt="Board" />
        </div>
        <div className="carousel-item">
          <img className="c" src=".\Assets\homepage\3.jpg" alt="Board" />
        </div>
        <div className="carousel-item">
          <img className="c" src=".\Assets\homepage\4.jpg" alt="Board" />
        </div>
        <div className="carousel-item">
          <img className="c" src=".\Assets\homepage\5.jpg" alt="Board" />
        </div>
        <div className="carousel-item">
          <img className="c" src=".\Assets\homepage\6.jpg" alt="Board" />
        </div>
        <div className="carousel-item">
          <img  className="c" src=".\Assets\homepage\7.jpg" alt="Board" />
        </div>
        <div className="carousel-item">
          <img  className="c" src=".\Assets\homepage\8.jpg" alt="Board" />
        </div>
        <div className="carousel-item">
          <img className="c" src=".\Assets\homepage\9.jpg" alt="Board" />
        
      </div>
      <a className="carousel-control-prev" href="#demo" data-slide="prev">
<span className="carousel-control-prev-icon"></span>
</a>
<a className="carousel-control-next" href="#demo" data-slide="next">
<span className="carousel-control-next-icon"></span>
</a>
    </div>
    </div>
    <br />
        <h2 className="space text-center">Shop From Top Categories</h2>

        <div className="card-deck home-mbl" >
        <a href="#" className="cntr"><img  src=".\Assets\homepage\10.jpg" alt="image" /></a>
        <a href="#" className=""><img src=".\Assets\homepage\11.jpg" alt="image" /></a>
        <a href="#"><img src=".\Assets\homepage\12.jpg" alt="images"/></a>
        <a href="#"><img src=".\Assets\homepage\13.jpg" alt=".\Assets\homepage\image"/></a>
        <a href="#"><img src=".\Assets\homepage\14.jpg" alt=".\Assets\homepage\image"/></a>
      </div>
      </div>
      <div className="card">
        <center>
          <img className="ad" src=".\Assets\homepage\card3.jpg" alt="adverstizement board" />
          <img className="ad" src=".\Assets\homepage\card4.jpg" alt="adverstizement board" />
        </center>
      </div>
      <br/>
      <h2 className="space hideInmob">TOP DEALS</h2>
    <div className="mt-4  topcat hideInmob">

      <div className="card thumbnail text-center twoh "  >
        <img className="card-img-top seven" src=".\Assets\homepage\15.jpg" alt="Card image" />
        <div className="card-body">
          <h5 className="card-title"><strong>Good Life Almonds 550gms</strong></h5>
          <span className="card-text">M.R.P:</span> <span className="card-text dash ">₹ 449.00</span>
          <br/>
          <h4> <strong>₹ 315.00 </strong></h4>
          <h6><a href="#">Save: ₹ 134.00 </a></h6>
          <a href="#" className="btn btn-primary">Add To Cart <i className="fa fa-plus-circle" aria-hidden="true"></i></a>
        </div>
      </div>
      <div className="card thumbnail text-center twoh " >
        <img className="card-img-top seven" src=".\Assets\homepage\16.jpg" alt="Card image" />
        <div className="card-body">
          <h5 className="card-title"><strong>Kissan Fresh Tomato Ketchup 950g</strong></h5>
          <span className="card-text">M.R.P:</span> <span className="card-text dash ">₹ 120.00</span>
          <br/>
          <h4> <strong>₹ 87.00 </strong></h4>
          <h6><a href="#">Save: ₹ 33.00 </a></h6>
          <a href="#" className="btn btn-primary">Add To Cart <i className="fa fa-plus-circle" aria-hidden="true"></i></a>
        </div>
      </div>
      <div className="card thumbnail text-center twoh " >
        <img className="card-img-top seven" src=".\Assets\homepage\17.jpg" alt="Card image" />
        <div className="card-body">
          <h5 className="card-title"><strong>Pears Pure Bathing bar 125gms</strong></h5>
          <span className="card-text">M.R.P:</span> <span className="card-text dash ">₹ 165.00</span>
          <br/>
          <h4> <strong>₹ 125.00 </strong></h4>
          <h6><a href="#">Save: ₹ 40.00 </a></h6>
          <a href="#" className="btn btn-primary">Add To Cart <i className="fa fa-plus-circle" aria-hidden="true"></i></a>
        </div>
      </div>
      <div className="card thumbnail text-center twoh " >
        <img className="card-img-top seven" src=".\Assets\homepage\19.jpg" alt="Card image" />
        <div className="card-body">
          <h5 className="card-title"><strong>Super Sarvotam  Refined Oil 1L</strong></h5>
          <span className="card-text">M.R.P:</span> <span className="card-text dash ">₹ 178.00</span>
          <br/>
          <h4> <strong>₹ 130.00 </strong></h4>
          <h6><a href="#">Save: ₹ 48.00 </a></h6>
          <a href="#" className="btn btn-primary">Add To Cart <i className="fa fa-plus-circle" aria-hidden="true"></i></a>
        </div>
      </div>
      <div className="card thumbnail text-center twoh " >
        <img className="card-img-top seven" src=".\Assets\homepage\18.jpg" alt="Card image" />
        <div className="card-body">
          <h5 className="card-title"><strong>Tide Plus Jasmine&Rose Powder</strong></h5>
          <span className="card-text">M.R.P:</span> <span className="card-text dash ">₹ 465.00</span>
          <br/>
          <h4> <strong>₹ 365.00 </strong></h4>
          <h6><a href="#">Save: ₹ 100.00 </a></h6>
          <a href="#" className="btn btn-primary">Add To Cart <i className="fa fa-plus-circle" aria-hidden="true"></i></a>
        </div>
      </div>
      <div className="card thumbnail text-center twoh " >
        <img className="card-img-top seven" src=".\Assets\homepage\20.jpg" alt="Card image" />
        <div className="card-body">
          <h5 className="card-title"><strong>Sunfeast Dark Fantasy with Choco Fill</strong></h5>
          <span className="card-text">M.R.P:</span> <span className="card-text dash ">₹ 120.00</span>
          <br/>
          <h4> <strong>₹ 80.00 </strong></h4>
          <h6><a href="#">Save: ₹ 40.00 </a></h6>
          <a href="#" className="btn btn-primary">Add To Cart <i className="fa fa-plus-circle" aria-hidden="true"></i></a>
        </div>
      </div>
      <div className="card thumbnail text-center twoh " >
        <img className="card-img-top seven" src=".\Assets\homepage\21.jpg" alt="Card image" />
        <div className="card-body">
          <h5 className="card-title"><strong>Ariel Matic Detergent Powder 4 kg </strong></h5>
          <span className="card-text">M.R.P:</span> <span className="card-text dash ">₹ 1050.00</span>
          <br/>
          <h4> <strong>₹ 800.00 </strong></h4>
          <h6><a href="#">Save: ₹ 250.00 </a></h6>
          <a href="#" className="btn btn-primary">Add To Cart <i className="fa fa-plus-circle" aria-hidden="true"></i></a>
        </div>
      </div>
      <div className="card thumbnail text-center twoh " >
        <img className="card-img-top seven" src=".\Assets\homepage\22.jpg" alt="Card image" />
        <div className="card-body">
          <h5 className="card-title"><strong>Society Tea Powder 1kilo-Gram</strong></h5>
          <span className="card-text">M.R.P:</span> <span className="card-text dash ">₹ 520.00</span>
          <br/>
          <h4> <strong>₹ 439.00 </strong></h4>
          <h6><a href="#">Save: ₹ 81.00 </a></h6>
          <a href="#" className="btn btn-primary">Add To Cart <i className="fa fa-plus-circle" aria-hidden="true"></i></a>
        </div>
      </div>
    </div>

    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
            <div id="imageCarousel" className="carousel slide" data-interval="2000" data-ride="carousel" data-pause="hover" data-wrap="true">
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                <div className="col-md-6">
                  <img src=".\Assets\homepage\25.jpg" className="img-responsive"/>
                </div>
                <div className="col-md-6">
                  <img src=".\Assets\homepage\26.jpg" className="img-responsive"/>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-md-6">
                  <img src=".\Assets\homepage\27.jpg" className="img-responsive"/>
                </div>
                <div className="col-md-6">
                  <img src=".\Assets\homepage\28.jpg" className="img-responsive"/>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="imageCarousel" data-slide="prev">
     <span className="carousel-control-prev-icon"></span>
   </a>
   <a className="carousel-control-next" href="#imageCarousel" data-slide="next">
     <span className="carousel-control-next-icon"></span>
   </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  <br />
 <br />
  <h2 className="space"><strong>Offers On Daily Essentials</strong></h2>
        <div className="container-fluid mb-5 mt-5">
          <div className="row">
            <div className="col-md-3">
              <div className="card22  thumbnail mt-3">
                <span className="badge bg-danger text-light" >10%<br/>OFF</span>
                <div className="product-1 align-items-center p-2 text-center">
                  <img src=".\Assets\homepage\29.png" alt="image" width="80%"/>
                  <h5>Dals And Pulses</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card22  thumbnail mt-3">
                <span className="badge bg-danger text-light" >10%<br/>OFF</span>
                <div className="product-1 align-items-center p-2 text-center">
                  <img src=".\Assets\homepage\30.png" alt="image" width="80%"/>
                  <h5>Atta, Flours & Sooji</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card22  thumbnail mt-3">
                <div className="product-1 align-items-center p-2 text-center">
                  <span className="badge bg-danger text-light" >10%<br/>OFF</span>
                  <img src=".\Assets\homepage\31.png" alt="image" width="80%"/>
                  <h5>Edible Oils</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card22  thumbnail mt-3">
                <div className="product-1 align-items-center p-2 text-center">
                  <span className="badge bg-danger text-light" >10%<br/>OFF</span>
                  <img src=".\Assets\homepage\32.png" alt="image" width="80%"/>
                  <h5>Salt,Sugar & Jaggery</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card22  thumbnail mt-3">
                <div className="product-1 align-items-center p-2 text-center">
                  <span className="badge bg-danger text-light" >10%<br/>OFF</span>
                  <img src=".\Assets\homepage\33.png" alt="image" width="80%"/>
                  <h5>Bath And Hand Wash</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card22  thumbnail mt-3">
                <div className="product-1 align-items-center p-2 text-center">
                  <span className="badge bg-danger text-light" >10%<br/>OFF</span>
                  <img src=".\Assets\homepage\34.png" alt="image" width="80%"/>
                  <h5>Tooth Paste</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card22  thumbnail mt-3">
                <div className="product-1 align-items-center p-2 text-center">
                  <span className="badge bg-danger text-light" >10%<br/>OFF</span>
                  <img src=".\Assets\homepage\35.png" alt="image" width="80%"/>
                  <h5>Noodle,Paste,Vermicelli</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card22  thumbnail mt-3">
                <div className="product-1 align-items-center p-2 text-center">
                  <span className="badge bg-danger text-light" >10%<br/>OFF</span>
                  <img src=".\Assets\homepage\36.png" alt="image" width="80%"/>
                  <h5>Biscuits & Cookies</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h3 className="space">Shop By Categories</h3>

              <div className="container-fluid">

                <div id=" imageCarousel" className="carousel slide" data-interval="2000" data-ride="carousel" data-pause="hover" data-wrap="true">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="row ad_2" >
                        <div className="col-md-2">
                          <div className="card thumbnail text-center three " >
                            <img className="card-img-top seven" src=".\Assets\homepage\37.png" alt="Card image" />
                            <div className="card-body">
                              <h5 className="card-title"><strong>Personal Care</strong></h5>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2">
                          <div className="card thumbnail text-center three " >
                            <img className="card-img-top seven" src=".\Assets\homepage\38.png" alt="Card image" />
                            <div className="card-body">
                              <h5 className="card-title"><strong>Home Care</strong></h5>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2">
                          <div className="card thumbnail text-center three " >
                            <img className="card-img-top seven" src=".\Assets\homepage\39.png" alt="Card image" />
                            <div className="card-body">
                              <h5 className="card-title"><strong>Baby Care</strong></h5>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2">
                          <div className="card thumbnail text-center three ">
                            <img className="card-img-top seven" src=".\Assets\homepage\40.jpg" alt="Card image" />
                            <div className="card-body">
                              <h5 className="card-title"><strong>Staples</strong></h5>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2">
                          <div className="card thumbnail text-center three " >
                            <img className="card-img-top seven" src=".\Assets\homepage\41.png" alt="Card image" />
                            <div className="card-body">
                              <h5 className="card-title"><strong>Evening Snacks</strong></h5>
                            </div>
                          </div>
                        </div>

                        <a href="#imageCarousel" className="carousel-control left" data-slide="prev">
                          <span className="glyphicon glyphicon-chevron-left"></span>
                        </a>
                        <a href="#imageCarousel" className="carousel-control right" data-slide="next">
                          <span className="glyphicon glyphicon-chevron-right"></span>
                        </a>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
                <br/>
          <div className="container-fluid mb-5 mt-5">
            <div className="row">
              <div className="col-md-6">
                <div className="card thumbnail mt-3 ">
                  <div className="product-12 ">
                    <img src=".\Assets\homepage\card5.jpg"className="aj" alt="sss" />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card thumbnail mt-3 ">
                  <div className="product-12 ">
                    <img src=".\Assets\homepage\card6.jpg" className="aj" alt="sss"/> 
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card thumbnail mt-3 ">
                  <div className="product-12 ">
                    <img src=".\Assets\homepage\card7.jpg" className="aj" alt="sss" />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card thumbnail mt-3 ">
                  <div className="product-12 ">
                    <img src=".\Assets\homepage\card8.jpg" className="aj" alt="sss"/> 
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h2 className="space"><strong>Offers On Household & Personal care</strong></h2>
          <div className="container-fluid mb-5 mt-5">
            <div className="row">
              <div className="col-md-3">
                <div className="card23  thumbnail mt-3">
                  <span className="badge bg-danger text-light" >Upto <br/> 20% OFF</span>
                  <div className="product-1 align-items-center p-2 text-center">
                    <img src=".\Assets\homepage\43.png" alt="image" width="80%"/>
                    <h5>All Purpose Cleaners</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card23  thumbnail mt-3">
                  <span className="badge bg-danger text-light" >Upto <br/>25% OFF</span>
                  <div className="product-1 align-items-center p-2 text-center">
                    <img src=".\Assets\homepage\44.png" alt="image" width="80%"/>
                    <h5>Detergent And Bars</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card23  thumbnail mt-3">
                  <div className="product-1 align-items-center p-2 text-center">
                    <span className="badge bg-danger text-light" >Upto <br/> 50% OFF</span>
                    <img src=".\Assets\homepage\45.png" alt="image" width="80%"/>
                    <h5>Feminine Hygiene</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card23  thumbnail mt-3">
                  <div className="product-1 align-items-center p-2 text-center">
                    <span className="badge bg-danger text-light" >Upto <br/> 50% OFF</span>
                    <img src=".\Assets\homepage\46.png" alt="image" width="80%"/>
                    <h5>Skin Care</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card23  thumbnail mt-3">
                  <div className="product-1 align-items-center p-2 text-center">
                    <span className="badge bg-danger text-light" >Upto <br/> 30% OFF</span>
                    <img src=".\Assets\homepage\47.png" alt="image" width="80%"/>
                    <h5>Oral Care</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card23  thumbnail mt-3">
                  <div className="product-1 align-items-center p-2 text-center">
                    <span className="badge bg-danger text-light" >Upto <br/> 35% OFF</span>
                    <img src=".\Assets\homepage\48.png" alt="image" width="80%"/>
                    <h5>Hair Care</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card23  thumbnail mt-3">
                  <div className="product-1 align-items-center p-2 text-center">
                    <span className="badge bg-danger text-light" >Upto <br/> 10% OFF</span>
                    <img src=".\Assets\homepage\49.png" alt="image" width="80%"/>
                    <h5>Baby Care</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card23  thumbnail mt-3">
                  <div className="product-1 align-items-center p-2 text-center">
                    <span className="badge bg-danger text-light" >Upto <br/>50% OFF</span>
                    <img src=".\Assets\homepage\50.png" alt="image" width="80%"/>
                    <h5>Paper Tissue Napkin</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br/>
          <div className="container-fluid mb-5 mt-5">
            <div className="row">
              <div className="col-md-6">
                <div className="card thumbnail mt-3 ">
                  <div className="product-12 ">
                    <img src=".\Assets\homepage\card9.jpg" className="aj" alt="sss"/> 
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card thumbnail mt-3 ">
                  <div className="product-12 ">
                    <img src=".\Assets\homepage\card10.jpg" className="aj" alt="sss"/> 
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card thumbnail mt-3 ">
                  <div className="product-12 ">
                    <img src=".\Assets\homepage\card11.jpg" className="aj" alt="sss"/>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card thumbnail mt-3 ">
                  <div className="product-12 ">
                    <img src=".\Assets\homepage\card12.jpg" className="aj" alt="sss" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default homepage
