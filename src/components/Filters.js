import React from 'react';
import { FormGroup, Label, Input, Jumbotron } from 'reactstrap';
import "./Common.css"

class Filters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          products: [
              {id: "p1", name: "Bathing Bars & Soaps"},
              {id: "p2", name: "Toothpaste"},
              {id: "p3", name: "Shampoo & Conditioner"}
          ],
          brands: [
              {id: "b1", name: "Colgate"},
              {id: "b2", name: "Sebamed"},
              {id: "b3", name: "Nivea"}
          ]
        }
    }
    render() {
        return (
            <div className="row my-content-haircare justify-content-left">
                <div className="my-content-left">
                    <div className="column justify-content-left">
                        <div className="col-lg-3 m-lg-2 s-m-1">
                            <div className="card filters-brands">
                                <h5>Filters</h5><hr/>
                                <h6>Availability</h6>
                                <FormGroup check>
                                    <Label check className="form-check-label">
                                    <Input type="checkbox" />{' '}
                                        InStock Products
                                    </Label>
                                </FormGroup><br/><br/>
                                <div className="input-group rounded">
                                    <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                                    <span className="input-group-text border-0" id="search-addon">
                                        <i className="fa fa-search"></i>
                                    </span>
                                </div><br/><br/> 
                                <div className="scroll">
                                    {
                                        this.state.products.map((product) => {
                                            return (
                                                <FormGroup check>
                                                {React.createElement("Label", {class: "form-check-label", id: product.id},
                                                    React.createElement("Input", {class: "form-check-input", type: "checkbox"}, " "), product.name
                                                )}
                                                </FormGroup>
                                            );
                                        })
                                    }
                                </div><br/><br/>
                                <h6>Brands</h6>
                                <div className="input-group rounded">
                                    <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                                    <span className="input-group-text border-0" id="search-addon">
                                        <i className="fa fa-search"></i>
                                    </span>
                                </div>
                                <br/><br/>
                                <div className="scroll">
                                    {
                                        this.state.brands.map((brand) => {
                                            return (
                                                <FormGroup check>
                                                {React.createElement("Label", {class: "form-check-label", id: brand.id},
                                                    React.createElement("Input", {class: "form-check-input", type: "checkbox"}, " "), brand.name
                                                )}
                                                </FormGroup>
                                            );
                                        })
                                    }
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
  
export default Filters;