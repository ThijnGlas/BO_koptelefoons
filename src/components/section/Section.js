import "./Section.css"

const Section = (props) => {
    return (
        <section id={props.customId} className="section">
            <header className="section__header">
                <h2 className="section__h2">{props.headerTitle || "placeholder title"}</h2>
                <p className="section__p">{props.text}</p>
            </header>
            <div className="section__wrapper">
                {props.children}
            </div>
        </section>
    )
}

export default Section;

