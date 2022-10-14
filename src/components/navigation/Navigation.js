import "./Navigation.css"
const Navigation = () => {
    return(
        <nav class="navigation">
            <figure class="navigation__logo">
            <i class="fa-solid fa-headphones"></i>
            </figure>
            <ul className="navigation__ul">
                <li className="navigation__li">Over</li>
                <li className="navigation__li">Features</li>
                <li className="navigation__li">Prijs</li>
                <li className="navigation__li">Contact</li>
                <li className="navigation__li login">Login</li>
            </ul>
        </nav>
    )
}

export default Navigation;
