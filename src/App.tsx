import './css/header.css'
import './css/reset.css'
import './css/main.css'

import icon from './assets/img/header/icon.svg'
import basket from './assets/img/header/basket.svg'

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

      </main>
    </>
  )
}

export default App