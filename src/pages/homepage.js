import Card from "../components/card/Card";
import Header from "../components/header/Header"
import Navigation from "../components/navigation/Navigation";
import Section from "../components/section/Section";
import VerticalCard from "../components/verticalCard/VerticalCard";
import Image from "../components/Image/Image";
import zwartektIMG from "../img/zwartekt.jpg";
import verschillendeaudioIMG from "../img/verschillendeaudio.jpg"
import bestekwaliteitIMG from "../img/bestekwaliteit.jpg"
import prijskwaliteitIMG from "../img/prijskwaliteit.jpg"
import kabelIMG from "../img/kabel.jpg"

const HomePage = () => {
    return (
        <>
            <Navigation />
            <Header
                bigTitle="koptelefoons"
                smallTitle="van Thijn"
                buttonText="Kijk verder"
            />
            <Image headerTitle="Over Callizone" text="gebruik altijd een koptelefoon voor de beste ervaring" image={zwartektIMG} />
            <Section headerTitle="Onze features">
                <Card  cardText="verschillende audio systemen" image={verschillendeaudioIMG} extraclass="verschillende"/>
                <Card  cardText="meest betrouwbare koptelefoons" image={bestekwaliteitIMG} extraclass="beste" />
                <Card  cardText="beste prijs voor kwaliteit" image={prijskwaliteitIMG} extraclass="prijskwaliteit" />
                <Card  cardText="5 tips tegen kabelbreuk" image={kabelIMG}  extraclass="kabel"/>
            </Section>
            <VerticalCard image="familiekoptelefoon.jpg" />
        </>
    )
}

export default HomePage;