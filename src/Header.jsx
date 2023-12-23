import logo from './assets/img/logo.svg'

export const Header = () => {
    return (
      <div className='header'>
        <img src={logo} alt="logo" />
        <button className='button_liked'>Liked</button>

      </div>
        
    )
}