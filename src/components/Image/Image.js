import "./Image.css";

const Image = (props) => {
    return(
        <img src={props.image} alt={props.imageAlt} />
    )
}

export default Image;