import "./Section.css"

const Section = (props) => {
    return (
        <section class="section">
            <header class="section__header">
                <h2 class="section__h2">{props.headerTitle || "placeholder title"}</h2>
                <p className="section__p">{props.text}</p>
            </header>
            <div class="section__wrapper">
                {props.children}
            </div>
            <div className="section__blob">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#EEEEEE" d="M41.7,-62.9C53.5,-57.3,62.1,-44.8,70.4,-30.9C78.7,-17,86.6,-1.7,83.3,11.1C80.1,23.8,65.6,34,52.5,40.8C39.4,47.6,27.7,50.9,15.2,56.9C2.8,62.9,-10.3,71.4,-20.3,68.7C-30.3,66,-37,52,-42.7,40C-48.4,28.1,-53.1,18.2,-58.9,5.9C-64.7,-6.4,-71.7,-21.2,-70.3,-35.4C-68.9,-49.7,-59.3,-63.4,-46.2,-68.4C-33.1,-73.3,-16.5,-69.5,-0.8,-68.2C15,-67,29.9,-68.4,41.7,-62.9Z" transform="translate(100 100)" />
            </svg>
            </div>
        </section>
    )
}

export default Section;

