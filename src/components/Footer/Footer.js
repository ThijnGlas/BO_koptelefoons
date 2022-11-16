import "./Footer.css"

const Footer = () => {
    return (
        <div className="footer__containter">
        <footer className="footer">
            <div className="info">
                <p>Thijn Glas</p>
                <a className="footer__a" href="tel: +31630402470">+31 6 30402470</a><br></br>
                <a className="footer__a" href="mailto: thijnglas@gmail.com">thijnglas@gmail.com</a>
            </div>
            <div className="socials">
                <a className="footer__a" href="https://www.instagram.com/explore/tags/headsets/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
            </div>
        </footer>
        </div>
    );
}

export default Footer;