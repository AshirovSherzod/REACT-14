import React, { Component } from 'react'
import { FaStar } from "react-icons/fa";

import './products.scss'
import axios from '../../api'

export default class Products extends Component {
  constructor() {
    super(),
    this.state = {
      data: null,
      categories: null,
      categoryValue: "/products",
      offset: 1
    }
  }

  componentDidMount() {
    axios
        .get(`${this.state.categoryValue}?limit=${this.state.offset * 6}`)
        .then(res => this.setState({data: res.data.products}))
        .catch(err => console.log(err))
    
    axios
        .get("/products/categories")
        .then(res => this.setState({categories: res.data}))
        .catch(err => console.log(err))
  }

  componentDidUpdate(prevProps, prevState) {
    if ( this.state.offset !== prevState.offset || this.state.categoryValue !== prevState.categoryValue) {
      axios
        .get(`${this.state.categoryValue}`)
        .then(res => this.setState({data: res.data.products}))
        .catch(err => console.log(err))
    }
  }

  render() {
    return (
      <section className="products container">
        <div className="products__category">
          <ul className='products__category__ul'>
            <li>
              <data 
                style={{background: this.state.categoryValue === `/products` ? "#d2d2d2" : "#f0f4f7"}}
                onClick={(e)=> this.setState({categoryValue: e.target.value})} 
                value="/products">All
              </data>
            </li>
            {this.state.categories?.map((el) => (
                <li key={el}>
                  <data 
                    style={{background: this.state.categoryValue === `/products/category/${el}` ? "#d2d2d2" : "#f0f4f7"}}
                    onClick={(e)=> this.setState({categoryValue: e.target.value})} 
                    value={`/products/category/${el}`}>{el}
                  </data>
                </li>
            ))}
          </ul>
        </div>
        <div className="products__cards">
          {
            this.state.data?.map(el => (
              <div className="products__card" key={el.id}>
                <div className="products__card__img">
                  <img src={el.images[0]} alt="" />
                </div>
                <div className="products__card__desc">
                  <p className='line-clamp' title={`${el.title} ${el.brand} ${el.category}`}>{el.title} {el.brand} {el.category}</p>
                  <p><FaStar /> {el.rating}</p>
                  <h2>{el.price} UZS</h2>
                </div>
              </div>
            ))
          }
        </div>
        <button className='products__btn' onClick={()=> this.setState({offset: this.state.offset + 1})}>Показать ещё</button>
      </section>
    )
  }
}
