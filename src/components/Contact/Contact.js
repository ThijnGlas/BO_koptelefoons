import "./Contact.css"

const Contact = (props) => {
    return (
        <div className="contact__wrapper">
            
            <form id={props.customId}>
                <h2 className="contact__h2">Contact</h2>
                <input name="naam" type="text" className="feedback-input" placeholder="Name" />
                <input name="email" type="text" className="feedback-input" placeholder="Email" />
                <textarea name="bericht" className="feedback-input" placeholder="Comment"></textarea>
                <input type="submit" value="verstuur" />
            </form>
        </div>
    )
}

export default Contact;