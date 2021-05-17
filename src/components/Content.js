import React from 'react'
import SideBar from "./SideBar";
import PersonalCare from "./PersonalCare";

import "./Common.css"

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "personal_care",
      personal_care: {
        products: [
            {id: "p1", name: "Bathing Bars & Soaps"},
            {id: "p2", name: "Toothpaste"},
            {id: "p3", name: "Shampoo & Conditioner"},
            {id: "p4", name: "Body Care"},
            {id: "p5", name: "Deodorants"},
            {id: "p6", name: "Face Care"},
            {id: "p7", name: "Hair Oil & Serum"},
            {id: "p8", name: "Hand Wash & Sanitizers"},
            {id: "p9", name: "Shaving Care"},
            {id: "p10", name: "Toothbrush"},
            {id: "p11", name: "Sanitary Napkins"},
            {id: "p12", name: "Pain Reliever"},
            {id: "p13", name: "Shower Gel & Body Wash"},
            {id: "p14", name: "Digestive Care"},
            {id: "p15", name: "Perfumes"},
            {id: "p16", name: "Cold & Caugh Remidies"},
            {id: "p17", name: " Hair Color"},
            {id: "p18", name: "Mouthwash"},
            {id: "p19", name: "Cleanser & Makeup Remover"},
            {id: "p20", name: "First Aid"},
            {id: "p21", name: "Floor & Other Cleaners"},
            {id: "p22", name: "Antiseptics & Antifugal Remedies"},
            {id: "p23", name: "Bath Oils & Salts"},
            {id: "p24", name: "Herbal & Ayurvedic"},
            {id: "p25", name: "Lip Care"},
            {id: "p26", name: "Roll On"},
            {id: "p27", name: "Speacial Care"}
        ],
        brands: [
            {id: "b1", name: "Colgate"},
            {id: "b2", name: "Sebamed"},
            {id: "b3", name: "Nivea"},
            {id: "b4", name: "Dabur"},
            {id: "b5", name: "Puric"},
            {id: "b6", name: "Dettol"},
            {id: "b7", name: "Dhathri"},
            {id: "b8", name: " K.P. Namboodiri's"},
            {id: "b9", name: "Fogg"},
            {id: "b10", name: "Parachute"},
            {id: "b11", name: "Gillette"},
            {id: "b12", name: "Godrej"},
            {id: "b13", name: "Medimex"},
            {id: "b14", name: "Patanjali"},
            {id: "b15", name: "Yardley"},
            {id: "b16", name: "Get Real"},
            {id: "b17", name: "Whisper"},
            {id: "b18", name: "Garnier"},
            {id: "b19", name: "Kamasutra"},
            {id: "b20", name: "Kara"},
            {id: "b21", name: "L'Oreal"},
            {id: "b22", name: "Pears"},
            {id: "b23", name: "Pond's"},
            {id: "b24", name: "Sensodyne"},
            {id: "b25", name: "Vaseline"},
            {id: "b26", name: "Amrutanjan"},
            {id: "b27", name: "Close Up"},
            {id: "b28", name: "Eno"},
            {id: "b29", name: "Head & Shoulder"},
            {id: "b30", name: "Himalaya"},
            {id: "b31", name: "Lux"},
            {id: "b32", name: "Palmolive"},
            {id: "b33", name: "Pantene"},
            {id: "b34", name: "Santoor"},
            {id: "b35", name: "Stayfree"},
            {id: "b36", name: "Sunsilk"},
            {id: "b37", name: "Super-Max"},
            {id: "b38", name: "Vicks"},
            {id: "b39", name: "Wild Stone"},
            {id: "b40", name: "Bajaj"},
            {id: "b41", name: "Clinic Plus"},
            {id: "b42", name: " Dermicool"},
            {id: "b43", name: "Dove"},
            {id: "b44", name: "Fair & Handsome"},
            {id: "b45", name: "Hamam"},
            {id: "b46", name: "Indulekha"}
        ]
      },
      staples: {
        products: [
            {id: "p1", name: "Blended Masalas"},
            {id: "p2", name: "Powered Spices"},
            {id: "p3", name: "Speciality Flour"},
            {id: "p4", name: "Moong Dal"},
            {id: "p5", name: "Chana Dal"},
            {id: "p6", name: "Sugar"},
            {id: "p7", name: "Dried Seeds"},
            {id: "p8", name: "Atta"},
            {id: "p9", name: "Urad Dal"},
            {id: "p10", name: "Basmati Rice"},
            {id: "p11", name: "Poha"},
            {id: "p12", name: "Toor Dal"},
            {id: "p13", name: "Rice"},
            {id: "p14", name: "Almonds/Badam"},
            {id: "p15", name: "Jaggery"},
            {id: "p16", name: "Salt"},
            {id: "p17", name: " Dried Cranberries"},
            {id: "p18", name: "Rajma"},
            {id: "p19", name: "Masoor Dal"},
            {id: "p20", name: " Mustard Oil"},
            {id: "p21", name: " Rice Atta, Rice Flour"},
            {id: "p22", name: "Cashews/Kaaju"},
            {id: "p23", name: " Groundnut Oil"},
            {id: "p24", name: "Olive Oil"},
            {id: "p25", name: "Rawa/Sooji"},
            {id: "p26", name: "Sunflower Oil"},
            {id: "p27", name: "Herbs and Seasoning"},
            {id: "p28", name: "Peanuts"},
            {id: "p29", name: "Daliya"},
            {id: "p30", name: "Pistachios"},
            {id: "p31", name: "Besan"},
            {id: "p32", name: "Digestive & Mukhwas"},
            {id: "p33", name: "Lobia"},
            {id: "p34", name: "Matar/ Peas"},
            {id: "p35", name: "Mixed Dal"},
            {id: "p36", name: "Gingelly/Til/Sesame Oil"},
            {id: "p37", name: "Kolam Rice"},
            {id: "p38", name: "Other Oils"},
            {id: "p39", name: "Matki/ Moth Beans"},
            {id: "p40", name: "Other Nuts"},
            {id: "p41", name: "Raisins/Kishmish"},
            {id: "p42", name: "Rawa Rice"}
        ],
        brands: [
            {id: "b1", name: "24 Mantra"},
            {id: "b2", name: "Pro nature"},
            {id: "b3", name: "Good Life"},
            {id: "b4", name: "Rostaa"},
            {id: "b5", name: "Satyam"},
            {id: "b6", name: "Pick N Cook"},
            {id: "b7", name: "Deccan Organic"},
            {id: "b8", name: "Organic Tattva"},
            {id: "b9", name: "Nutrapoorna"},
            {id: "b10", name: "I Love staples-brand"},
            {id: "b11", name: "I Love Spice"},
            {id: "b12", name: "Everest"},
            {id: "b13", name: "Sapphero"},
            {id: "b14", name: "Private Label"},
            {id: "b15", name: "MeraKisan"},
            {id: "b16", name: "Brahmins"},
            {id: "b17", name: "Sakthi"},
            {id: "b18", name: "Shree"},
            {id: "b19", name: "Snapin"},
            {id: "b20", name: "Health 1st"},
            {id: "b21", name: "Chandan"},
            {id: "b22", name: "I Love Nuts"},
            {id: "b23", name: "Hakim"},
            {id: "b24", name: "Praakritik"},
            {id: "b25", name: "RRO"},
            {id: "b26", name: "Fortune"},
            {id: "b27", name: "Loose"},
            {id: "b28", name: "Eno"},
            {id: "b29", name: " Nani Ka Masala"},
            {id: "b30", name: "Omsom"},
            {id: "b31", name: "Tata Sampann"},
            {id: "b32", name: "Table Spoon"},
            {id: "b33", name: " Best Farms"},
            {id: "b34", name: "Bhagirathi"},
            {id: "b35", name: "Keya"},
            {id: "b36", name: "Aashirwaad"},
            {id: "b37", name: "Dalda"},
            {id: "b38", name: "Kohinoor"},
            {id: "b39", name: "Majithia"},
            {id: "b40", name: "Olovio"},
            {id: "b41", name: "Allegro"},
            {id: "b42", name: "Catch"},
            {id: "b43", name: "Madam"},
            {id: "b44", name: "Shree Ram"},
            {id: "b45", name: "Amma Chekku"},
            {id: "b46", name: "Daawat"},
            {id: "b47", name: "Saffola"},
            {id: "b48", name: "Suhana"}
        ]
      }
    }
  }

  render() {
    return (
      <div className="row" >
          <div className="my-content-left">
            <SideBar content={this.state[this.state.category]}/>
          </div>
          <div className="my-content-right">
            <PersonalCare/>
          </div>
      </div>
    );
  }
}

export default Content;