import './App.css'
import imgNFT from '../src/assets/image-equilibrium.jpg'
import avatar from '../src/assets/image-avatar.png'
import etereum from '../src/assets/icon-ethereum.svg'
import clock from '../src/assets/icon-clock.svg'
import view from '../src/assets/icon-view.svg'

function App() {

  return (
    <main className="flex flex-col items-center w-full h-full bg-main-dark-blue">
      <div className="bg-card-dark-blue m-auto w-[348px] rounded-2xl justify-center p-6">
        <div className="relative">
          <img className="rounded-lg cursor-pointer" src={imgNFT} alt="Imagen NFT" />
          <img
            className="rounded-lg p-[126px] bg-primary-cyan cursor-pointer absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex-none opacity-0 hover:opacity-100 hover:bg-opacity-60"
            src={view}
            alt="Imagen NFT"
          />
        </div>
        <p className="text-white text-[21px] font-normal pt-[22px] text-left cursor-pointer [letter-spacing:0.8px] hover:text-primary-cyan">
          Equilibrium #3429
        </p>
        <p className="text-left text-primary-soft font-light text-lg pt-[13px] ">
          Our Equilibrium collection promotes balance and calm.
        </p>
        <div className="flex pt-5 justify-between text-base ">
          <p className="text-primary-cyan font-[700] flex items-center gap-[6px] [letter-spacing:0.8px] text-[15px]">
            <span>
              <img src={etereum} alt="Icono de Ethereum" />
            </span>
            0.041 ETH
          </p>
          <p className="text-primary-soft flex items-center gap-2">
            <span>
              <img src={clock} alt="Icono de Reloj" />
            </span>
            3 days left
          </p>
        </div>
        <div className="h-[1px] bg-line-dark-blue mt-6"></div>
        <footer className="flex items-center gap-4 pt-3 pb-2 text-primary-soft">
          <img
            className="w-[33px] aspect-square border-[1px] rounded-full"
            src={avatar}
            alt="Imagen de Avatar"
          />
          <p>
            Creation of {' '}
            <span className="text-white  cursor-pointer hover:text-primary-cyan">
              Jules Wyvern
            </span>
          </p>
        </footer>
      </div>
    </main>
  )
}

export default App
