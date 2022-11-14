import Card from "../components/card/Card";
import Header from "../components/header/Header"
import Navigation from "../components/navigation/Navigation";
import Section from "../components/section/Section";
import VerticalCard from "../components/verticalCard/VerticalCard";
import Image from "../components/Image/Image";
import zwartektIMG from "../img/zwartekt.jpg";

const HomePage = () => {
    return (
        <>
            <Navigation />
            <Header
                bigTitle="koptelefoons"
                smallTitle="van Thijn"
                buttonText="Kijk verder"
            />
            <Section headerTitle="Over Callizone" text="gebruik altijd een koptelefoon voor de beste ervaring">
            <Image image={zwartektIMG} />
            </Section>
            <Section headerTitle="Onze features">
                <Card  cardText="koop bij ons de lekkerste gegrilde kip!" />
                <Card  cardText="wij maken ook de lekkerste huisgemaakte eten!" />
                <Card  cardText="het verste vlees voor de juiste prijs!" />
                <Card  cardText="kom ook je kippenvleugeltjes bij ons halen!" />
            </Section>
            <VerticalCard image="familiekoptelefoon.jpg" />
        </>
    )
}

export default HomePage;