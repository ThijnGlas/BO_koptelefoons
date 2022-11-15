import "./Navigation.css"
const Navigation = () => {
    return(
        <nav class="navigation">
            <figure class="navigation__logo">
            <i class="fa-solid fa-headphones"></i>
            </figure>
            <ul className="navigation__ul">
                <li className="navigation__li navigation__over">Over</li>
                <li className="navigation__li navigation__features">Features</li>
                <li className="navigation__li navigation__prijs">Prijs</li>
                <li className="navigation__li navigation__contact">Contact</li>
                <li className="navigation__li navigation__login">Login</li>
            </ul>
        </nav>
    )
}

export default Navigation;
