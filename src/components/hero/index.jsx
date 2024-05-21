import React, { Component } from 'react'

import img from '../../assets/hero-bg.webp'
import './hero.scss'

export default class Hero extends Component {
  render() {
    return (
      <section className="hero container">
        <div className="hero__top row">
          <div className="hero__top__left">
            <ul>
              <li><a href="">Горящие товары</a></li>
              <li><a href="">Одна цена</a></li>
            </ul>
          </div>
          <div className="hero__top__right">
            <button>Chilonzor Tumani</button>
            <button>EN</button>
            <button>UZS</button>
          </div>
        </div>
        <div className="hero__bottom">
          <div className="hero__bottom__desc">
            <h1>Одна цена</h1>
            <p>При заказе от 3 до 10 товаров</p>
            <button>Купить</button>
          </div>
          <div className="hero__bottom__img">
            <img src={img} alt="" />
          </div>
        </div>
      </section>
    )
  }
}
