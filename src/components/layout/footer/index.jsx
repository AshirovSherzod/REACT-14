import React, { Component } from 'react'
import './footer.scss'

export default class Footer extends Component {
  render() {
    return (
      <footer className='footer'>
        <div className="container start">
          <div className="footer__divs">
            <ul>
              <h4>ПОКУПАТЕЛЯМ</h4>
              <li><a href="#">Поддержка</a></li>
              <li><a href="#">Календарь распродаж</a></li>
              <li><a href="#">Гид по AliExpress</a></li>
            </ul>
            <p>© AliExpress® <br /> 2019 – 2024</p>
          </div>

          <div className="footer__divs">
            <ul>
              <h4>ПАРТНЁРАМ</h4>
              <li><a href="#">Продавайте на AliExpress</a></li>
              <li><a href="#">Аффилиатная программа</a></li>
              <li><a href="#">Блог для продавца</a></li>
            </ul>
            <p>На информационном ресурсе <br /> применяются рекомендательные <br /> технологии</p>
          </div>

          <div className="footer__divs">
            <ul>
              <h4>O КОМПАНИИ</h4>
              <li><a href="#">Пресс-центр</a></li>
              <li><a href="#">AliTech</a></li>
              <li><a href="#">Блог o жизни компании</a></li>
            </ul>
            <p>Политика конфиденциальности</p>
          </div>

          <div className="footer__divs">
            <ul>
              <h4>МЫ В СОЦСЕТЯХ</h4>
              <li><a href="#">Вконтакте</a></li>
              <li><a href="#">Одноклассники</a></li>
              <li><a href="#">Telegram</a></li>
            </ul>
            <p>На информационном ресурсе <br /> применяются рекомендательные <br /> технологии</p>
          </div>
        </div>
      </footer>
    )
  }
}
