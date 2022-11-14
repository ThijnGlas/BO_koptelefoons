import "./VerticalCard.css";

const VerticalCard = (props) => {
    let VerticalCardImage = <img src={"/img/" + props.image} alt="" />
    if(props.VerticalCardimage === undefined){
        VerticalCardImage = <img src={"/img/muziekkoptelefoon.jpg"} alt="muziekkoptelefoon" />;
    }

    return (
        <article class="verticalCard">
            <figure class="verticalCard__figure">
                {VerticalCardImage}
            </figure>
            <section class="verticalCard__section">
                <p>{props.verticalCardText || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque perspiciatis recusandae libero, distinctio dolores suscipit. Reprehenderit animi ab ullam quisquam, maiores facilis qui incidunt tenetur quos porro doloribus tempora saepe."}</p>
            </section>
        </article>
    )
}

export default VerticalCard;