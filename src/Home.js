import React from "react";
import "./Home.css";
import Product from "./Product";
import { useStateValue } from "./StateProvider";

function Home() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://www.amazon.fr/images/G/08/digital/video/gateway/placement/launch/TheBoysS2/THBY_2020_GWBleedingHero_FT_COVIDUPDATE_XSite_1500x600_PV_fr-FR._CB406827366_.jpg"
          alt=""
        />
        <div className="home__row">
          <div className="home__category">
            <div className="home__cateName">
              <h2>Hi, {!user ? " Guest" : user.email}</h2>
            </div>
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg" />
            <small>See more</small>
          </div>
          <div className="home__category">
            <div className="home__cateName">
              <h2>AmazonBasics</h2>
            </div>
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg" />
            <small>See more</small>
          </div>
          <div className="home__category">
            <div className="home__cateName">
              <h2>Electronics</h2>
            </div>
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg" />
            <small>See more</small>
          </div>

          <div className="home__category">
            <div className="home__cateName">
              <h2>Computers&Accessories</h2>
            </div>
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg" />
            <small>Shop more</small>
          </div>
          {/* 4*/}
        </div>

        <div className="home__row">
          <Product
            id="1236540"
            title="https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKWL._AC_SY220_.jpg            "
            price={349.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKWL._AC_SY220_.jpg"
            rating={5}
          />
          <Product
            id="32185269"
            title="IVSO Keyboard Case for Samsung Galaxy Tab S6 Lite 10.4 Inch 2020,with Secure S Pen Holder, Premium PU Leather, Stand Cover with Removable Wireless Keyboard(Black)"
            price={30.99}
            image="https://m.media-amazon.com/images/I/71yQHr9+EoL.jpg"
            rating={3}
          />
          <Product
            id="4256545"
            title="Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PS4, & Xbox (STGX2000400)"
            price={59.99}
            image="https://m.media-amazon.com/images/I/81tjLksKixL._AC_UL320_.jpg"
            rating={4}
          />
          {/* 2*/}
        </div>

        <div className="home__row">
          <Product
            id="7596548"
            title="VicTsing MM057 2.4G Wireless Mouse Portable Mobile Optical Mouse with USB Receiver"
            price={11.99}
            image="https://m.media-amazon.com/images/I/71gK7VlDnGL._AC_UL320_.jpg"
            rating={4}
          />
          <Product
            id="85296323"
            title="Anker 4-Port USB 3.0 Hub, Ultra-Slim Data USB Hub with 2 ft Extended Cable"
            price={13.99}
            image="https://m.media-amazon.com/images/I/51scO1VOfIL._AC_UL320_.jpg"
            rating={5}
          />
          <Product
            id="75395185"
            title="Lenovo IdeaCentre AIO 3, 24 All-in-One Computer, AMD Ryzen 5 4500U Mobile Processor, Integrated Graphics"
            price={699.0}
            image="https://images-na.ssl-images-amazon.com/images/I/71rmfmZg5IL._AC_SY220_.jpg"
            rating={4}
          />
          <Product
            id="10234563"
            title="QGeeM USB C to HDMI Adapter 4K Cable, USB Type-C to HDMI Adapter,Compatible with MacBook Pro 2018/2017"
            price={12.99}
            image="https://m.media-amazon.com/images/I/51x6RGUbZIL._AC_UL320_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="65478902"
            title="BENGOO G9000 Stereo Gaming Headset for PS4, PC, Xbox One Controller, Noise Cancelling Over Ear Headphones with Mic"
            price={29.99}
            image="https://m.media-amazon.com/images/I/61NZPCYSeVL._AC_UL320_.jpg"
            rating={5}
          />
          <Product
            id="45698752"
            title="Samsung Gear S3 Frontier Smartwatch (Bluetooth), SM-R760NDAAXAR                                                       "
            price={199.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61GcJ2DDvIL._AC_SX679_.jpg"
            rating={5}
          />
          <Product
            id="52896345"
            title="Oculus Rift S PC-Powered VR Gaming Headset                                                      "
            price={399.0}
            image="https://images-na.ssl-images-amazon.com/images/I/31i3tpuXxxL._AC_SY200_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
