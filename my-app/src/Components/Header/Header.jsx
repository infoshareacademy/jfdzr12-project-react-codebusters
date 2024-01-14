export const Header = () => {
return (
<div>
      <div className="header__container">
        <div className="header__image-container">
          <img className="header__image" src="../public/images/logo.png" />
        </div>
        <div className="header__links-container">
          <ul className="header__links">
            <li className="header__link header__links--examples">
              <a href="#portfolio">Portfolio</a>
            </li>
            <li className="header__link header__links--pricing">
              <a href="#pricing">Pricing</a>
            </li>
            <li className="header__link header__links--basket">Basket</li>
          </ul>
        </div>
      </div>


</div>


)

}