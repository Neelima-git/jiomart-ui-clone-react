import React from 'react';
import { FormGroup, Label, Input, Jumbotron } from 'reactstrap';
import "./Accordian.css"
const CheckBoxes = (props) => {
    return (
        <Jumbotron>
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
                        <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search"
                        aria-describedby="search-addon" />
                        <span className="input-group-text border-0" id="search-addon">
                            <i className="fa fa-search"></i>
                        </span>
                        </div><br/><br/> 
                        <div className="scroll">
                            <FormGroup check>
                            <Label check className="form-check-label" id="personalcare-cat1">
                            <Input type="checkbox" />{' '}
                            Bathing Bars & Soaps
                            </Label>
                            </FormGroup>
                            <FormGroup check>
                            <Label check className="form-check-label" id="personalcare-cat2">
                            <Input type="checkbox" />{' '}
                            Toothpaste
                            </Label>
                            </FormGroup>
                            <FormGroup check>
                            <Label check className="form-check-label" id="personalcare-cat3">
                            <Input type="checkbox" />{' '}
                            Shampoo & Conditioner
                            </Label>
                            </FormGroup>
                            <FormGroup check>
                            <Label check className="form-check-label" id="personalcare-cat4">
                            <Input type="checkbox" />{' '}
                            Body Care
                            </Label>
                            </FormGroup>
                            <FormGroup check>
                            <Label check className="form-check-label" id="personalcare-cat5">
                            <Input type="checkbox" />{' '}
                            Deodorants
                            </Label>
                            </FormGroup>
                            <FormGroup check>
                            <Label check className="form-check-label" id="personalcare-cat6">
                            <Input type="checkbox" />{' '}
                            Face Care
                            </Label>
                            </FormGroup>
                            <FormGroup check>
                            <Label check className="form-check-label" id="personalcare-cat7">
                            <Input type="checkbox" />{' '}
                            Hair Oil & Serum
                            </Label>
                            </FormGroup>
                            <FormGroup check>
                            <Label check className="form-check-label" id="personalcare-cat8">
                            <Input type="checkbox" />{' '}
                            Hand Wash & Sanitizers
                            </Label>
                            </FormGroup>
                            <FormGroup check>
                            <Label check className="form-check-label" id="personalcare-cat9">
                            <Input type="checkbox" />{' '}
                            Shaving Care
                            </Label>
                            </FormGroup>
                            <FormGroup check>
                            <Label check className="form-check-label" id="personalcare-cat10">
                            <Input type="checkbox" />{' '}
                            Toothbrush
                            </Label>
                            </FormGroup>
                            <FormGroup check>
                            <Label check className="form-check-label" id="personalcare-cat11">
                            <Input type="checkbox" />{' '}
                            Sanitary Napkins
                            </Label>
                            </FormGroup>
                            <FormGroup check>
                            <Label check className="form-check-label" id="personalcare-cat12">
                            <Input type="checkbox" />{' '}
                            Pain Reliever
                            </Label>
                            </FormGroup>
                            <FormGroup check>
                            <Label check className="form-check-label" id="personalcare-cat13">
                            <Input type="checkbox" />{' '}
                            Shower Gel & Body Wash
                            </Label>
                            </FormGroup>
                            <FormGroup check>
                            <Label check className="form-check-label" id="personalcare-cat14">
                            <Input type="checkbox" />{' '}
                            Digestive Care
                            </Label>
                            </FormGroup>
                            <FormGroup check>
                            <Label check className="form-check-label" id="personalcare-cat15">
                            <Input type="checkbox" />{' '}
                            Perfumes
                            </Label>
                            </FormGroup>
                            <FormGroup check>
                            <Label check className="form-check-label" id="personalcare-cat16">
                            <Input type="checkbox" />{' '}
                            Cold & Caugh Remidies
                            </Label>
                            </FormGroup>
                            <FormGroup check>
                            <Label check className="form-check-label" id="personalcare-cat17">
                            <Input type="checkbox" />{' '}
                            Hair Color
                            </Label>
                            </FormGroup>
                            <FormGroup check>
                            <Label check className="form-check-label" id="personalcare-cat18">
                            <Input type="checkbox" />{' '}
                            Mouthwash
                            </Label>
                            </FormGroup>
                            <FormGroup check>
                            <Label check className="form-check-label" id="personalcare-cat19">
                            <Input type="checkbox" />{' '}
                            Cleanser & Makeup Remover
                            </Label>
                            </FormGroup>
                            <FormGroup check>
                            <Label check className="form-check-label" id="personalcare-cat20">
                            <Input type="checkbox" />{' '}
                            First Aid
                            </Label>
                            </FormGroup>
                            <FormGroup check>
                            <Label check className="form-check-label" id="personalcare-cat21">
                            <Input type="checkbox" />{' '}
                            Floor & Other Cleaners
                            </Label>
                            </FormGroup>
                            <FormGroup check>
                            <Label check className="form-check-label" id="personalcare-cat22">
                            <Input type="checkbox" />{' '}
                            Antiseptics & Antifugal Remedies
                            </Label>
                            </FormGroup>
                            <FormGroup check>
                            <Label check className="form-check-label" id="personalcare-cat23">
                            <Input type="checkbox" />{' '}
                            Bath Oils & Salts
                            </Label>
                            </FormGroup>
                            <FormGroup check>
                            <Label check className="form-check-label" id="personalcare-cat24">
                            <Input type="checkbox" />{' '}
                            Cotton Swabs
                            </Label>
                            </FormGroup>
                            <FormGroup check>
                            <Label check className="form-check-label" id="personalcare-cat25">
                            <Input type="checkbox" />{' '}
                            Herbal & Ayurvedic
                            </Label>
                            </FormGroup>
                            <FormGroup check>
                            <Label check className="form-check-label" id="personalcare-cat26">
                            <Input type="checkbox" />{' '}
                            Lip Care
                            </Label>
                            </FormGroup>
                            <FormGroup check>
                            <Label check className="form-check-label" id="personalcare-cat27">
                            <Input type="checkbox" />{' '}
                            Roll on
                            </Label>
                            </FormGroup>
                            </div><br/><br/>
                            <h6>Brands</h6>
                                <div className="input-group rounded">
                                <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search"
                                aria-describedby="search-addon" />
                                <span className="input-group-text border-0" id="search-addon">
                                <i className="fa fa-search"></i>
                                </span>
                                </div>
                            <br/><br/>
                            <div className="scroll">
                            <FormGroup check>
                            <Label check className="form-check-label" id="personalcare-fil1">
                            <Input type="checkbox" />{' '}
                            Colgate
                            </Label>
                            </FormGroup>
                            <FormGroup check>
                            <Label check className="form-check-label" id="personalcare-fil2">
                            <Input type="checkbox" />{' '}
                            Sebamed
                            </Label>
                            </FormGroup>
                            <FormGroup check>
                            <Label check className="form-check-label" id="personalcare-fil3">
                            <Input type="checkbox" />{' '}
                            Nivea
                            </Label>
                            </FormGroup>
                            <FormGroup check>
                            <Label check className="form-check-label" id="personalcare-fil4">
                            <Input type="checkbox" />{' '}
                            Dabur
                            </Label>
                            </FormGroup>
                            <FormGroup check>
                            <Label check className="form-check-label" id="personalcare-fil5">
                            <Input type="checkbox" />{' '}
                            Puric
                            </Label>
                            </FormGroup>
                            <FormGroup check>
                            <Label check className="form-check-label" id="personalcare-fil6">
                            <Input type="checkbox" />{' '}
                            Dettol
                            </Label>
                            </FormGroup>
                            <FormGroup check>
                            <Label check className="form-check-label" id="personalcare-fil7">
                            <Input type="checkbox" />{' '}
                            Dhathri
                            </Label>
                            </FormGroup>
                            <FormGroup check>
                            <Label check className="form-check-label" id="personalcare-fil8">
                            <Input type="checkbox" />{' '}
                            K.P. Namboodiri's
                            </Label>
                            </FormGroup>
                            <FormGroup check>
                            <Label check className="form-check-label" id="personalcare-fil9">
                            <Input type="checkbox" />{' '}
                            Fogg
                            </Label>
                            </FormGroup>
                            <FormGroup check>
                            <Label check className="form-check-label" id="personalcare-fil10">
                            <Input type="checkbox" />{' '}
                            Parachute
                            </Label>
                            </FormGroup>
                            <FormGroup check>
                            <Label check className="form-check-label" id="personalcare-fil11">
                            <Input type="checkbox" />{' '}
                            Gillette
                            </Label>
                            </FormGroup>
                            <FormGroup check>
                            <Label check className="form-check-label" id="personalcare-fil12">
                            <Input type="checkbox" />{' '}
                            Godrej
                            </Label>
                            </FormGroup>
                            <FormGroup check>
                            <Label check className="form-check-label" id="personalcare-fil13">
                            <Input type="checkbox" />{' '}
                            Medimex
                            </Label>
                            </FormGroup>
                            <FormGroup check>
                            <Label check className="form-check-label" id="personalcare-fil14">
                            <Input type="checkbox" />{' '}
                            Patanjali
                            </Label>
                            </FormGroup>
                            <FormGroup check>
                            <Label check className="form-check-label" id="personalcare-fil15">
                            <Input type="checkbox" />{' '}
                            Yardley
                            </Label>
                            </FormGroup>
                            <FormGroup check>
                            <Label check className="form-check-label" id="personalcare-fil16">
                            <Input type="checkbox" />{' '}
                            Get Real
                            </Label>
                            </FormGroup>
                            <FormGroup check>
                            <Label check className="form-check-label" id="personalcare-fil17">
                            <Input type="checkbox" />{' '}
                            Whisper
                            </Label>
                            </FormGroup>
                            <FormGroup check>
                            <Label check className="form-check-label" id="personalcare-fil18">
                            <Input type="checkbox" />{' '}
                            Garnier
                            </Label>
                            </FormGroup>
                            <FormGroup check>
                            <Label check className="form-check-label" id="personalcare-fil19">
                            <Input type="checkbox" />{' '}
                            Kamasutra
                            </Label>
                            </FormGroup>
                            <FormGroup check>
                            <Label check className="form-check-label" id="personalcare-fil20">
                            <Input type="checkbox" />{' '}
                            Kara
                            </Label>
                            </FormGroup>
                            <FormGroup check>
                            <Label check className="form-check-label" id="personalcare-fil21">
                            <Input type="checkbox" />{' '}
                            L'Oreal
                            </Label>
                            </FormGroup>
                            <FormGroup check>
                            <Label check className="form-check-label" id="personalcare-fi22">
                            <Input type="checkbox" />{' '}
                            Pears
                            </Label>
                            </FormGroup>
                            <FormGroup check>
                            <Label check className="form-check-label" id="personalcare-fi23">
                            <Input type="checkbox" />{' '}
                            Pond's
                            </Label>
                            </FormGroup>
                            <FormGroup check>
                            <Label check className="form-check-label" id="personalcare-fil24">
                            <Input type="checkbox" />{' '}
                            Sensodyne
                            </Label>
                            </FormGroup>
                            <FormGroup check>
                            <Label check className="form-check-label" id="personalcare-fi25">
                            <Input type="checkbox" />{' '}
                            Amrutanjan
                            </Label>
                            </FormGroup>
                            <FormGroup check>
                            <Label check className="form-check-label" id="personalcare-fi26">
                            <Input type="checkbox" />{' '}
                            Close Up
                            </Label>
                            </FormGroup>
                            <FormGroup check>
                            <Label check className="form-check-label" id="personalcare-fi27">
                            <Input type="checkbox" />{' '}
                            Eno
                            </Label>
                            </FormGroup>
                            <FormGroup check>
                            <Label check className="form-check-label" id="personalcare-fi28">
                            <Input type="checkbox" />{' '}
                            Head & Shoulder
                            </Label>
                            </FormGroup>
                            <FormGroup check>
                            <Label check className="form-check-label" id="personalcare-fi29">
                            <Input type="checkbox" />{' '}
                            Himalaya
                            </Label>
                            </FormGroup>
                            <FormGroup check>
                            <Label check className="form-check-label" id="personalcare-fil30">
                            <Input type="checkbox" />{' '}
                            Lux
                            </Label>
                            </FormGroup>
                            <FormGroup check>
                            <Label check className="form-check-label" id="personalcare-fil31">
                            <Input type="checkbox" />{' '}
                            Palmolive
                            </Label>
                            </FormGroup>
                            <FormGroup check>
                            <Label check className="form-check-label" id="personalcare-fil32">
                            <Input type="checkbox" />{' '}
                            Pantene
                            </Label>
                            </FormGroup>
                            <FormGroup check>
                            <Label check className="form-check-label" id="personalcare-fil33">
                            <Input type="checkbox" />{' '}
                            Santoor
                            </Label>
                            </FormGroup>
                            <FormGroup check>
                            <Label check className="form-check-label" id="personalcare-fil34">
                            <Input type="checkbox" />{' '}
                            Stayfree
                            </Label>
                            </FormGroup>
                            <FormGroup check>
                            <Label check className="form-check-label" id="personalcare-fil35">
                            <Input type="checkbox" />{' '}
                            Sunsilk
                            </Label>
                            </FormGroup>
                            <FormGroup check>
                            <Label check className="form-check-label" id="personalcare-fil36">
                            <Input type="checkbox" />{' '}
                            Super-Max
                            </Label>
                            </FormGroup>
                            <FormGroup check>
                            <Label check className="form-check-label" id="personalcare-fil37">
                            <Input type="checkbox" />{' '}
                            Vicks
                            </Label>
                            </FormGroup>
                            <FormGroup check>
                            <Label check className="form-check-label" id="personalcare-fil38">
                            <Input type="checkbox" />{' '}
                            Wild Stone
                            </Label>
                            </FormGroup>
                            <FormGroup check>
                            <Label check className="form-check-label" id="personalcare-fil39">
                            <Input type="checkbox" />{' '}
                            Bajaj
                            </Label>
                            </FormGroup>
                            <FormGroup check>
                            <Label check className="form-check-label" id="personalcare-fil40">
                            <Input type="checkbox" />{' '}
                            Clinic Plus
                            </Label>
                            </FormGroup>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
        </Jumbotron>
    );
}
  
export default CheckBoxes;