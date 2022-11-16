import "./Image.css";

const Image = (props) => {
    return (
        <section class="img__section">
            <div className="img__section__div">
                <header class="img__section__header">
                    <div className="blob">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#F5F2ED" d="M59,-45.8C69.3,-34.2,65.5,-10.1,57.6,8.6C49.7,27.3,37.8,40.5,22,49.6C6.2,58.6,-13.4,63.6,-33.8,58.3C-54.3,53,-75.5,37.6,-82.9,15.9C-90.2,-5.7,-83.6,-33.5,-67.4,-46.5C-51.3,-59.4,-25.7,-57.4,-0.6,-56.9C24.4,-56.4,48.8,-57.4,59,-45.8Z" transform="translate(100 100)" />
                    </svg>
                    </div>
                    <h2 class="img__section__h2">{props.headerTitle || "placeholder title"}</h2>
                    <p className="img__section__p">{props.text}</p>
                </header>
                <div class="img__section__wrapper">
                    <img src={props.image} alt={props.imageAlt} />
                </div>
            </div>
        </section>
    )
}

export default Image;