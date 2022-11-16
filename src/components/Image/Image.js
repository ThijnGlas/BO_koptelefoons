import "./Image.css";

const Image = (props) => {
    return (
        <section id={props.customId} class="img__section">
            <div className="img__section__div">
                <header class="img__section__header">
                    <h2 class="img__section__h2">{props.headerTitle || "placeholder title"}</h2>
                    <p className="img__section__p">{props.text}</p>
                </header>
                <div className="img__section__wrapper">
                    <img className="img__section--img" src={props.image} alt={props.imageAlt} />
                </div>
            </div>
        </section>
    )
}

export default Image;