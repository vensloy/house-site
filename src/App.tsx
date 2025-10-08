import './css/header.css'
import './css/reset.css'
import './css/main.css'

import icon from './assets/img/header/icon.svg'
import basket from './assets/img/header/basket.svg'
import birdHero from './assets/img/main/hero/bird.png'

const App = () => {
  return (
    <>
      <header>
        <a href="#" className="icon">
          <img src={icon} alt="" />
          <p>Ink. House</p>
        </a>

        <nav>
          <a href="#">Репродукции</a>
          <a href="#">Новинки</a>
          <a href="#">О нас</a>
          <img src={basket} alt="" />
        </nav>
      </header>

      <main>
        <section className='hero'>
          <img className='bird-hero-img' src={birdHero} alt="" />

          <section className='right-hero'>
            <h2 className='heading-hero'>Реплики картин от <div className='heading-name'>Ink.House</div></h2>
            <p className='right-hero-text'>Высокое качество отрисовки на плотной бумаге или льняном холсте. <br /> Редкие произведения, доступные цены.</p>
            <button className='products-button'>Продукция</button>
          </section>
        </section>
      </main>
    </>
  )
}

export default App