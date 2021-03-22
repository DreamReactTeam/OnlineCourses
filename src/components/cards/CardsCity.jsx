import React from "react";

import CardItem from "./CardItem";

import "./Cards.css";

const CardsCity = () => (
  <div className="cards">
    <h1>Explore Ukraine</h1>
    <div className="cards-container">
      <div className="cards-wrapper">
        <ul className="cards-items">
          <CardItem
            className="fixed-size-block-two"
            src="https://insightintoukraine.com/wp-content/uploads/2019/11/Bukovel-Ski-Resort.jpg"
            label="Bukovel"
            path="/hotels-in-city"
          />
          <CardItem
            className="fixed-size-block-two"
            src="https://pravdatutlviv.com/wp-content/uploads/2020/11/kovz1.jpeg"
            label="Lviv"
            path="/hotels-in-city"
          />
        </ul>
        <ul className="cards-items">
          <CardItem
            className="fixed-size-block-three"
            src="https://pilgrimage.in.ua/wp-content/uploads/2015/04/sophia4.jpg"
            label="Kyiv"
            path="/hotels-in-city"
          />
          <CardItem
            className="fixed-size-block-three"
            src="https://vlasne.ua/storage/source/odessa.jpg"
            label="Odessa"
            path="/hotels-in-city"
          />
          <CardItem
            className="fixed-size-block-three"
            src="https://streebogblog.files.wordpress.com/2018/06/1924973_800x600_0_105d05_7fbb259b_orig.jpg?w=800"
            label="Kharkiv"
            path="/hotels-in-city"
          />
        </ul>
      </div>
    </div>
  </div>
);

export default CardsCity;
