import "./Navigation.css"
const Navigation = () => {
    return(
        <nav class="navigation">
            <figure class="navigation__logo">
            <i class="fa-solid fa-headphones"></i>
            </figure>
            <ul className="navigation__ul">
                <li className="navigation__li navigation__over"><a href="#Over">Over</a></li>
                <li className="navigation__li navigation__features"><a href="#Features">Features</a></li>
                <li className="navigation__li navigation__prijs"><a href="#Prijs">Prijs</a></li>
                <li className="navigation__li navigation__contact"><a href="#Contact">Contact</a></li>
                <li className="navigation__li navigation__login">Login</li>
            </ul>
        </nav>
    )
}

export default Navigation;
