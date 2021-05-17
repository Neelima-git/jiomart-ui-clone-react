import React from 'react';
import { Card, CardImg, CardBody,
    CardTitle, CardSubtitle, Button, Badge, CardColumns, ButtonGroup } from 'reactstrap';
import "./PersonalCare.css"

const PersonalCare = (props) => {
    return (
        <div className="row justify-content-end">
            <div className="col-lg-10 m-lg-8 s-m-6">
                <div className="card image">
                    <Card>
                        <CardImg src=".\personalcareImages\hair-care-20200704.jpg" alt="hair-care" />
                    </Card>
                </div><br/>
                <div className="row my-head justify-content-start">
                    <div className="my-head-item-left">
                        <h6>Showing <b>20</b> out of <b>65</b> items</h6>
                    </div>
                    <div className="my-head-item-right" >
                        <div className="my-head row justify-content-end">
                            <h6>Sort by:
                                        
                                <ButtonGroup>
                                    <Button color="light"> Popularity</Button>
                                    <Button color="light">High to Low</Button>
                                    <Button color="light">Low to High</Button>
                                    <Button color="light">Discount</Button>
                                    <Button color="light">All Products</Button>
                                </ButtonGroup>
                                
                            </h6>       
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-10 m-lg-8 s-m-6">
                <div className="card products">
                    <div className="row justify-content">
                        <CardColumns>
                            <Card id="product1">
                                <Badge color="danger">20% off</Badge>
                                <CardImg src=".\personalcareImages\anmol-gold-pure-coconut-oil-500-ml-0-20201017.jpg" alt="Card image cap" />
                                <CardBody>
                                    <CardTitle tag="h5">Bajaj Almond Drops Non Sticky Hair Oil</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted"><del>₹180.00</del> <b>₹167.40</b></CardSubtitle>
                                    <Button color="primary" className="product-buy">Add to Cart <i className="fa fa-plus-circle" aria-hidden="true"></i></Button>
                                </CardBody>
                            </Card>
                        
                            <Card id="product2">
                                <Badge color="danger">8% off</Badge>
                                <CardImg src=".\personalcareImages\dabur-amla-hair-oil-450-ml-0-20201222 (1).jpg" alt="Card image cap" />
                                <CardBody>
                                    <CardTitle tag="h5">World's No.1 Dabur Amla Hair Oil 450 ml</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted"><del>₹199.00</del> <b>₹183.00</b></CardSubtitle>
                                    <Button color="primary" className="product-buy" >Add to Cart <i className="fa fa-plus-circle" aria-hidden="true"></i></Button>
                                </CardBody>
                            </Card>

                            <Card id="product3">
                                <Badge color="danger">7% off</Badge>
                                <CardImg src=".\personalcareImages\bajaj-almond-drops-non-sticky-hair-oil-300-ml-0-20200924 (1).jpg" alt="Card image cap" />
                                <CardBody>
                                    <CardTitle tag="h5">Bajaj Almond Drops Non Sticky Hair Oil</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted"><del>₹180.00</del> <b>₹167.40</b></CardSubtitle>
                                    <Button color="primary" className="product-buy">Add to Cart <i className="fa fa-plus-circle" aria-hidden="true"></i></Button>
                                </CardBody>
                            </Card>
                        
                            <Card id="product4">
                                <Badge color="danger">16% off</Badge>
                                <CardImg src=".\personalcareImages\tresemme-keratin-smooth-shampoo-340-ml-0-20210112 (1).jpg" alt="Card image cap" />
                                <CardBody>
                                    <CardTitle tag="h5">Tresemme Keratin Smooth Shampoo</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted"><del>₹245.00</del> <b>₹167.40</b></CardSubtitle>
                                    <Button color="primary" className="product-buy">Add to Cart <i className="fa fa-plus-circle" aria-hidden="true"></i></Button>
                                </CardBody>
                            </Card>

                            <Card id="product5">
                                <Badge color="danger">50% off</Badge>
                                <CardImg src=".\personalcareImages\bio-green-apple-shampoo-650-ml-0-20200814 (1).jpg" alt="Card image cap" />
                                <CardBody>
                                    <CardTitle tag="h5">Bio Green Apple Shampoo 650 ml</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted"><del>₹430.00</del> <b>₹215.40</b></CardSubtitle>
                                    <Button color="primary" className="product-buy">Add to Cart <i className="fa fa-plus-circle" aria-hidden="true"></i></Button>
                                </CardBody>
                            </Card>
                        
                            <Card id="product6">
                                <Badge color="danger">7% off</Badge>
                                <CardImg src=".\personalcareImages\dhathri-dheedhi-anti-hair-fall-herbal-shampoo-400-ml-0-20201020 (1).jpg" alt="Card image cap" />
                                <CardBody>
                                    <CardTitle tag="h5">Dhathri Dheedhi Anti-Hair Fall Herbal</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted"><del>₹295.00</del> <b>₹274.35</b></CardSubtitle>
                                    <Button color="primary" className="product-buy">Add to Cart <i className="fa fa-plus-circle" aria-hidden="true"></i></Button>
                                </CardBody>
                            </Card>
                        
                            <Card id="product7">
                                <Badge color="danger">7% off</Badge>
                                <CardImg src=".\personalcareImages\dhathri-dheedhi-anti-dandruff-herbal-shampoo-400-ml-0-20201020 (2).jpg" alt="Card image cap" />
                                <CardBody>
                                    <CardTitle tag="h5">Dhathri Dheedhi Anti-Hair Fall Herbal</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted"><del>₹295.00</del> <b>₹274.35</b></CardSubtitle>
                                    <Button color="primary" className="product-buy">Add to Cart <i className="fa fa-plus-circle" aria-hidden="true"></i></Button>
                                </CardBody>
                            </Card>
                        
                        
                            <Card id="product8">
                                <Badge color="danger">7% off</Badge>
                                <CardImg src=".\personalcareImages\parachute-100-pure-coconut-hair-oil-200-ml-0-20201020 (1).jpg" alt="Card image cap" />
                                <CardBody>
                                    <CardTitle tag="h5">Parachute 100% Pure Coconut Hair</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted"><del>₹90.00</del> <b>₹83.70</b></CardSubtitle>
                                    <Button color="primary" className="product-buy">Add to Cart <i className="fa fa-plus-circle" aria-hidden="true"></i></Button>
                                </CardBody>
                            </Card>
                        </CardColumns>
                    </div>
                </div>
            </div>
        </div>
    );
}
  
export default PersonalCare;