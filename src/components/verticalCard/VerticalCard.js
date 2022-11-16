import "./VerticalCard.css";
const VerticalCard = (props) => {
return (
        <article class="verticalCard">
            <figure class="verticalCard__figure">
                <img src={props.image} alt="" />
            </figure>
            <section class="verticalCard__section">
                <h2 className="verticalCard__h2">{props.h2Text}</h2>
                <p>{props.cardText || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque perspiciatis recusandae libero, distinctio dolores suscipit. Reprehenderit animi ab ullam quisquam, maiores facilis qui incidunt tenetur quos porro doloribus tempora saepe."}</p>
                <p className="verticalCard__p--dik">{props.prijs}</p>
            </section>
        </article>
    )
}

export default VerticalCard;