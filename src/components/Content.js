import React from 'react'
import SideBar from "./SideBar";
import CategoryContent from "./CategoryContent";
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import "./Common.css"


class Content extends React.Component {
  constructor(props) {
    super(props);
    let params = queryString.parse(this.props.location.search)

    this.state = {
      category: params.category,
      sub_category: params.sub_category,
      categories: {
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
        },
        beverages: {
          products: [
            {id: "p1", name: "Cold Drinks"},
            {id: "p2", name: "Leaf & Dust Tea"},
            {id: "p3", name: "Juices"},
            {id: "p4", name: "Gourmet Tea & Tea Bags"},
            {id: "p5", name: "Health Drink & Supplement"},
            {id: "p6", name: "Instant Coffee"},
            {id: "p7", name: "Exotic & Flavoured Tea"},
            {id: "p8", name: "Energy Drinks"},
            {id: "p9", name: "Packaged Water"},
            {id: "p10", name: "Ground Coffee"},
            {id: "p11", name: "Soda and Tonic Water"},
            {id: "p12", name: "Syrups Powders and Mixes"}
          ],
          brands: [
            {id: "b1", name: "Yeah"},
          {id: "b2", name: "Aarumbh"},
          {id: "b3", name: "Nature Day"},
          {id: "b4", name: "Bisleri"},
          {id: "b5", name: "Bournvita"},
          {id: "b6", name: "Real"},
          {id: "b7", name: "Tea Culture Of The World"},
          {id: "b8", name: "B Natural"},
          {id: "b9", name: "Narasus"},
          {id: "b10", name: "Red Label"},
          {id: "b11", name: "Nescafe"},
          {id: "b12", name: "Society"},
          {id: "b13", name: "Thumbs Up"},
          {id: "b14", name: "Tropicana"},
          {id: "b15", name: "Twinings"},
          {id: "b16", name: "Wagh Bakri"},
          {id: "b17", name: "Coca Cola"},
          {id: "b18", name: "Ensure"},
          {id: "b19", name: "Girnar"},
          {id: "b20", name: "Sprite"},
          {id: "b21", name: "Bru"},
          {id: "b22", name: "Horlicks"},
          {id: "b23", name: "Kingfisher"},
          {id: "b24", name: "Paper Boat"},
          {id: "b25", name: "Pepsi"},
          {id: "b26", name: "Protinex"},
          {id: "b27", name: "Red Bull"},
          {id: "b28", name: "Sprig"},
          {id: "b29", name: "Pediasure"},
          {id: "b30", name: "Tata Tea"},
          {id: "b31", name: "Tata Tea Premium"},
          {id: "b32", name: "Tata Tea Gold"},
          {id: "b33", name: "Tetley"},
          {id: "b34", name: "7up"},
          {id: "b35", name: "Amul"},
          {id: "b36", name: "Big"},
          {id: "b37", name: "Coke Zero"}
          ]
        },
        fruits_vegetables: {
          products: [ 
            {id: "p1", name: "Grapes Sonaka Seedless"},
            {id: "p2", name: "Dates Imported "},
            {id: "p3", name: "Mango Kesar"},
            {id: "p4", name: "Mango Badami"},
            {id: "p5", name: "Alphonso Mango"},
            {id: "p6", name: "Apple Royal Gala"},
            {id: "p7", name: "Pears Green Imported"},
            {id: "p8", name: "Apple Red"},
            {id: "p9", name: "Banana Robusta"},
            {id: "p10", name: "Watermelon Kiran"},
            {id: "p11", name: "Musk Melon"},
            {id: "p12", name: "Mosambi"},
            {id: "p13", name: "Pineapple Queen"},
            {id: "p14", name: "Orange Imported"},
            {id: "p15", name: "Papaya "},
            {id: "p16", name: "Banana Yellaki"},
            {id: "p17", name: "Apple Granny Smith"},
            {id: "p18", name: "Mango Alphonso"},
            {id: "p19", name: "Sapota"},
            {id: "p20", name: "Pomegranate Kesar"},
            
            ],
          brands: []
        }
      },
      sub_categories: {
        hair_care: {
          banner_img: "./Assets/personalcareImages/hair-care-20200704.jpg",
          items: [
            {
              id: "i1",
              name: "Bajaj Almond Drops Non Sticky Hair Oil",
              img: "./Assets/personalcareImages/anmol-gold-pure-coconut-oil-500-ml-0-20201017.jpg",
              price: 17000,
              discount: 20
            },
            {
              id: "i2",
              name: "World's No.1 Dabur Amla Hair Oil 450 ml",
              img: "./Assets/personalcareImages/dabur-amla-hair-oil-450-ml-0-20201222 (1).jpg",
              price: 19900,
              discount: 8
            },
            {
              id: "i3",
              name: "Bajaj Almond Drops Non Sticky Hair Oil",
              img: "./Assets/personalcareImages/bajaj-almond-drops-non-sticky-hair-oil-300-ml-0-20200924 (1).jpg",
              price: 18000,
              discount: 7
            },
            {
              id: "i4",
              name: "Tresemme Keratin Smooth Shampoo",
              img: "./Assets/personalcareImages/tresemme-keratin-smooth-shampoo-340-ml-0-20210112 (1).jpg",
              price: 24500,
              discount: 16
            },
            {
              id: "i5",
              name: "Bio Green Apple Shampoo 650 ml",
              img: "./Assets/personalcareImages/bio-green-apple-shampoo-650-ml-0-20200814 (1).jpg",
              price: 43000,
              discount: 50
            },
            {
              id: "i6",
              name: "Dhathri Dheedhi Anti-Hair Fall Herbal",
              img: "./Assets/personalcareImages/dhathri-dheedhi-anti-hair-fall-herbal-shampoo-400-ml-0-20201020 (1).jpg",
              price: 29500,
              discount: 7
            },
            {
              id: "i7",
              name: "Dhathri Dheedhi Anti-Hair Fall Herbal",
              img: "./Assets/personalcareImages/dhathri-dheedhi-anti-dandruff-herbal-shampoo-400-ml-0-20201020 (2).jpg",
              price: 29500,
              discount: 7
            },
            {
              id: "i8",
              name: "Parachute 100% Pure Coconut Hair",
              img: "./Assets/personalcareImages/parachute-100-pure-coconut-hair-oil-200-ml-0-20201020 (1).jpg",
              price: 9000,
              discount: 7
            }
          ]
        },
        dry_fruits: {
          banner_img: "./Assets/staplesImages/dry-fruits-nuts-20201014.jpeg",
          items: [{ 
            id: "i1",
            name: "Good Life Almonds 500g",
            img: "./Assets/staplesImages/good-life-almonds-500-g-0-20200901.jpg",
            price: 44900,
            discount: 32
          },
          {
            id: "i2",
            name: "Regular Value Pack Plain Cashews 500g",
            img: "./Assets/staplesImages/cashew-regular-value-pack-500-g-0-20210422.jpg",
            price: 45000,
            discount: 15
          },
          {
            id: "i3",
            name: "Good Life Mixed Dry Fruits 200g",
            img: "./Assets/staplesImages/good-life-mixed-dry-fruits-200-g-0-20210310.jpg",
            price: 15000,
            discount: 10
          },
          {
            id: "i4",
            name: "Shree Salted Pistachios 100g",
            img: "./Assets/staplesImages/shree-salted-pistachios-100-g-0-20200921.jpg",
            price: 17000,
            discount: 12
          },
          {
            id: "i5",
            name: "Sapphero Unshelled Walnuts 200g",
            img: "./Assets/staplesImages/sapphero-unshelled-walnuts-200-g-0-20201020.jpg",
            price:  61000,
            discount: 18
          },
          {
            id: "i6",
            name: "Sapphero Dry Blueberries 250g",
            img: "./Assets/staplesImages/sapphero-dry-blueberries-250-g-0-20201215.jpg",
            price: 64000,
            discount: 22
          },
          {
            id: "i7",
            name: "Sapphero Hazelnuts 250g Natural",
            img: "./Assets/staplesImages/sapphero-hazelnuts-250-g-0-20201215.jpg",
            price: 45500,
            discount: 23 
          },
          {
            id: "i8",
            name: "Sapphero Delux Figs 250g Natural",
            img: "./Assets/staplesImages/sapphero-delux-figs-250-g-0-20201020.jpg",
            price: 52500,
            discount: 21
          }]
        },
        tea: {
          banner_img: "./Assets/teaimages/tea-20200712.jpg",
          items: [
            {
              id: "i1",
              name: "Society Tea 1 kg",
              img: "./Assets/teaimages/society-tea-1-kg-0-20201118.jpg",
              price: 520,
              discount: 20
            },
            {
              id: "i2",
              name: "Tata Gold Leaf Tea 1 kg",
              img: "./Assets/teaimages/tata-gold-leaf-tea-1-kg-0-20201118.jpg",
              price: 495,
              discount: 10
            },
            {
              id: "i3",
              name: "Tata Agni Leaf Tea 1 kg",
              img: "./Assets/teaimages/tata-agni-leaf-tea-1-kg-0-20210330.jpg",
              price: 255,
              discount: 15
            },
            {
              id: "i4",
              name: "Wagh Bakri Leaf Tea 500 g",
              img: "./Assets/teaimages/wagh-bakri-premium-leaf-tea-500-g-0-20201118.jpg",
              price: 241,
              discount: 25
            },
            {
              id: "i5",
              name: "Red Label Leaf Tea 500 g",
              img: "./Assets/teaimages/red-label-leaf-tea-500-g-carton-0-20210511.jpg",
              price: 244,
              discount: 36
            },
            {
              id: "i6",
              name: "Tata Gold Leaf Tea 500 g",
              img: "./Assets/teaimages/tata-gold-leaf-tea-500-g-0-20201118.jpg",
              price: 300,
              discount: 5
            },
            {
              id: "i7",
              name: "Taj Mahal Tea 250 g (Carton)",
              img: "./Assets/teaimages/taj-mahal-tea-250-g-carton-0-20210322.jpg",
              price: 160,
              discount: 20
            },
            {
              id: "i8",
              name: "Tata Premium Tea 1 kg",
              img: "./Assets/teaimages/tata-premium-tea-1-kg-0-20210426.jpg",
              price: 450,
              discount: 15
            }
          ]
        },
        fresh_fruits: {
          banner_img: "./Assets/fruitsImages/fruitshomepage.jpg",
          items: [{ 
            id: "i1",
            name: "Grapes Sonaka Seedless per 1kg (1000 g)",
            img: "./Assets/fruitsImages/fruits1-grapes.jpg",
            price: 16000,
            discount: 8
          },
          {
            id: "i2",
            name: "Dates Imported (Approx 400 g - 500 g)",
            img: "./Assets/fruitsImages/2-dates.jpg",
            price: 15900,
            discount: 8
          },
          {
            id: "i3",
            name: "Mango Kesar 4 pcs Box (Approx 800 g-1200 g) ",
            img: "./Assets/fruitsImages/2-dates.jpg",
            price: 12900,
            discount: 7
          },
          {
            id: "i4",
            name: "Mango Badami 4 pcs  (Approx 1200 g - 1400 g)",
            img: "./Assets/fruitsImages/3-mango.jpg",
            price: 11900,
            discount: 6
          },
          {
            id: "i5",
            name: "Mango Totapuri 4 pcs  (Approx 1200 g - 1400 g)",
            img: "./Assets/fruitsImages/mango-totapuri-5.jpg",
            price:  8900,
            discount: 4
          },
          {
            id: "i6",
            name: "Alphonso Mango 6 pcs (Box) (Approx 1300 g - 1500 g)",
            img: "./Assets/fruitsImages/alphonso-mango-6.jpg",
            price: 34900,
            discount: 7
          },
          {
            id: "i7",
            name: "Apple Royal Gala (4 pcs) (Approx 500 g - 700 g)",
            img: "./Assets/fruitsImages/apple-royal-gala-7.jpg",
            price: 19900,
            discount: 8 
          },
          {
            id: "i8",
            name: "Pears Green Imported 3 pcs (Pack)",
            img: "./Assets/fruitsImages/pears-imported-green-8.jpg",
            price: 7900,
            discount: 7
          }]
        }
      }
    }
  }

  render() {
    return (
      <div className="row my-content" >
          <div className="my-content-left">
            <SideBar content={this.state.categories[this.state.category]}/>
          </div>
          <div className="my-content-right">
            <CategoryContent content={this.state.sub_categories[this.state.sub_category]}/>
          </div>
      </div>
    );
  }
}

export default withRouter(Content);