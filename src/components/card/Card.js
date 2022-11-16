import "./Card.css";

const Card = (props) => {
    return (
        <article class="card">
            <figure className="card__figure">
                <img src={props.image} alt="" />
            </figure>
            <section class="card__section">
                <p>{props.cardText || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque perspiciatis recusandae libero, distinctio dolores suscipit. Reprehenderit animi ab ullam quisquam, maiores facilis qui incidunt tenetur quos porro doloribus tempora saepe."}</p>
            </section>
        </article>
    )
}

export default Card;
