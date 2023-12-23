import logo from './assets/img/logo.svg'
// import basket from './assets/img/cart.svg'

export const Header = () => {
    return (
      <div className='header'>
        <img src={logo} alt="logo" />
        {/* <img src={basket} alt="logo" /> */}
        <button className='button_liked'>Liked</button>

      </div>
        
    )
}