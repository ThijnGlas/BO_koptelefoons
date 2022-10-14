import Card from "../components/card/Card";
import Header from "../components/header/Header"
import Navigation from "../components/navigation/Navigation";
import Section from "../components/section/Section";
import VerticalCard from "../components/verticalCard/VerticalCard";

const HomePage = () => {
    return (
        <>
            <Navigation />
            <Header
                bigTitle="koptelefoons"
                smallTitle="van Thijn"
                buttonText="Login"
            />
            <Section headerTitle="Over Callizone" text="gebruik altijd een koptelefoon voor de beste ervaring" />
            <Section headerTitle="Onze features">
                <Card image="gegrildekip.jpg" cardText="koop bij ons de lekkerste gegrilde kip!" />
                <Card image="huisgemaakt.jpg" cardText="wij maken ook de lekkerste huisgemaakte eten!" />
                <Card image="huisgemaakt2.0.jpg" cardText="het verste vlees voor de juiste prijs!" />
                <Card image="vleugels.jpg" cardText="kom ook je kippenvleugeltjes bij ons halen!" />
            </Section>
            <VerticalCard verticalCardImage="familiekoptelefoon.jpg" />
        </>
    )
}

export default HomePage;