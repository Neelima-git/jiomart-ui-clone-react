import React, { useState } from 'react'
import { Collapse, Button, CardBody, Card } from 'reactstrap';


import "./Accordian.css"
/*class Accordian extends React.Component {
    render(){
        return(
            <div class="jumbotron">
                <div class="row my-content-haircare justify-content-center">
                    <div class="my-content-left">
                        <div class="column justify-content-left">
                            <div class="col-lg-3 m-lg-2 s-m-1">
                                    <div class="card categories">
                                        <h5>Categories</h5><hr/>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Accordian*/
const Accordian = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
        <div class="jumbotron">
        <div class="row my-content-haircare justify-content-left">
            <div class="my-content-left">
                <div class="column justify-content-left">
                    <div class="col-lg-3 m-lg-2 s-m-1">
                            <div class="card categories">
                            <h5>Categories</h5><hr/>
                            <Button color="light" onClick={toggle} ><i class="fa fa-lg fa-angle-right"></i>  Fruits & Vegetables</Button>
                            <Collapse isOpen={isOpen}>
                            <Card>
                                <CardBody>
                                <ul><li>Fresh Fruits</li><li>Fresh Vegetables</li><li>Herbs & Seasonings</li><li>Exotic Fruits and Vegetables</li></ul>
                                </CardBody>
                            </Card>
                            </Collapse>
                            <Button color="light" onClick={toggle} ><i class="fa fa-lg fa-angle-right"></i>  Dairy and Bakery</Button>
                            <Collapse isOpen={isOpen}>
                            <Card>
                                <CardBody>
                                <ul><li>Dairy</li><li>Toast & Khari</li><li>Breads and Buns</li><li>Baked Cookies</li><li>Batter & Chutney</li><li>Cheese</li><li>Ghee</li><li>Paneer & Tofu</li></ul>
                                </CardBody>
                            </Card>
                            </Collapse>
                            <Button color="light" onClick={toggle} ><i class="fa fa-lg fa-angle-right"></i>  Staples</Button>
                            <Collapse isOpen={isOpen}>
                            <Card>
                                <CardBody>
                                <ul><li>Atta, Flours & Sooji</li><li>Dals & Pulses</li><li>Rice & Rice Products</li><li>Edible Oils</li><li>Masalas & Spices</li><li>Salt, Sugar & Jaggery</li><li>Soya Products,<br/> Wheat & Other Grains</li><li>Dry Fruits & Nuts</li></ul>
                                </CardBody>
                            </Card>
                            </Collapse>
                            <Button color="light" onClick={toggle} ><i class="fa fa-lg fa-angle-right"></i>Snacks & Branded Foods</Button>
                            <Collapse isOpen={isOpen}>
                            <Card>
                                <CardBody>
                                <ul><li>Biscuts & Cookies</li><li>Noodle, Pasta, Vermicelli</li><li>Breakfast Cereals</li><li>Snacks & Namkeen</li><li>Chocolates & Candies</li><li>Ready To Cook & Eat</li><li>Spreads, Sauces, Ketchup</li><li>Indian Sweets</li><li>Pickels & Chutney</li><li>Extracts & Flavouring</li></ul>
                                </CardBody>
                            </Card>
                            </Collapse>
                            <Button color="light" onClick={toggle} ><i class="fa fa-lg fa-angle-right"></i>  Beverages</Button>
                            <Collapse isOpen={isOpen}>
                            <Card>
                                <CardBody>
                                <ul><li>Tea</li><li>Coffee</li><li>Fruit juices</li><li>Energy & Soft Drinks</li><li>Health Drink & Supplement</li><li>Soda & Flavoured Water</li></ul>
                                </CardBody>
                            </Card>
                            </Collapse>
                            <Button color="light" onClick={toggle} ><i class="fa fa-lg fa-angle-right"></i>   Personal Care</Button>
                            <Collapse isOpen={isOpen}>
                            <Card>
                                <CardBody>
                                <ul><li>Hair Care</li><li>Oral Care</li><li>Skin Care</li><li>Bath & Hand Wash</li><li>Body Wash & <br/>Bathing Accesories</li><li>Feminine Hygiene</li><li>Men's Grooming</li><li>Deo & Fragnances</li><li>Health & Wellness</li><li>Makeup</li></ul>
                                </CardBody>
                            </Card>
                            </Collapse>
                            <Button color="light" onClick={toggle} ><i class="fa fa-lg fa-angle-right"></i>  Home Care</Button>
                            <Collapse isOpen={isOpen}>
                            <Card>
                                <CardBody>
                                <ul><li>Detergents</li><li>Dishwash</li><li>All Purpose Cleaners</li><li>Fresheners and Repellents</li></ul>
                                </CardBody>
                            </Card>
                            </Collapse>
                            <Button color="light" onClick={toggle} ><i class="fa fa-lg fa-angle-right"></i> Baby Care</Button>
                            <Collapse isOpen={isOpen}>
                            <Card>
                                <CardBody>
                                <ul><li>Baby Grooming</li><li>Baby Bath & Hygiene</li><li>Diapers & Wipes</li><li>Baby Food & Formula</li><li>Health & Wellness</li></ul>
                                </CardBody>
                            </Card>
                            </Collapse>
                            <Button color="light" onClick={toggle} ><i class="fa fa-lg fa-angle-right"></i> Home & Kitchen</Button>
                            <Collapse isOpen={isOpen}>
                            <Card>
                                <CardBody>
                                <ul><li>Pooja Needs</li><li>Disposals</li><li>Electrical</li><li>Mops, Brushes & Scrubs</li><li>Kitchenware</li></ul>
                                </CardBody>
                            </Card>
                            </Collapse>
                            </div><br/><br/>
                                              
                            </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
    );
  }
  
  export default Accordian;
