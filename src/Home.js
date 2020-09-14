import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://www.amazon.fr/images/G/08/digital/video/gateway/placement/launch/TheBoysS2/THBY_2020_GWBleedingHero_FT_COVIDUPDATE_XSite_1500x600_PV_fr-FR._CB406827366_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="1236540"
            title="ASUS VivoBook L203MA Laptop"
            price={269.99}
            image="https://m.media-amazon.com/images/I/81o8Tll-5-L._AC_UL320_.jpg"
            rating={5}
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
            id="45635541"
            title="Anker 4-Port USB 3.0 Hub, Ultra-Slim Data USB Hub with 2 ft Extended Cable"
            price={13.99}
            image="https://m.media-amazon.com/images/I/51scO1VOfIL._AC_UL320_.jpg"
            rating={5}
          />
          <Product
            id="2006549"
            title="QGeeM USB C to HDMI Adapter 4K Cable, USB Type-C to HDMI Adapter,Compatible with MacBook Pro 2018/2017"
            price={12.99}
            image="https://m.media-amazon.com/images/I/51x6RGUbZIL._AC_UL320_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="1536520"
            title="BENGOO G9000 Stereo Gaming Headset for PS4, PC, Xbox One Controller, Noise Cancelling Over Ear Headphones with Mic"
            price={29.99}
            image="https://m.media-amazon.com/images/I/61NZPCYSeVL._AC_UL320_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
