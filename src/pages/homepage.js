import Card from "../components/card/Card";
import Header from "../components/header/Header"
import Navigation from "../components/navigation/Navigation";
import Section from "../components/section/Section";
import VerticalCard from "../components/verticalCard/VerticalCard";
import Image from "../components/Image/Image";
import Contact from "../components/Contact/Contact";
import Blob from "../components/Blob/Blob"
import zwartektIMG from "../img/zwartekt.jpg";
import verschillendeaudioIMG from "../img/verschillendeaudio.jpg"
import bestekwaliteitIMG from "../img/bestekwaliteit.jpg"
import prijskwaliteitIMG from "../img/prijskwaliteit.jpg"
import kabelIMG from "../img/kabel.jpg"
import familiekopIMG from "../img/familiekoptelefoon.jpg"
import muziekkoptIMG from "../img/muziekkoptelefoon.jpg"
import gamingkoptIMG from "../img/gamingkoptelefoon.jpg"

const HomePage = () => {
    return (
        <>
            <Blob />
            <Navigation />
            <Header
                bigTitle="koptelefoons"
                smallTitle="van Thijn"
                buttonText="Kijk verder"
            />
            <Image customId="Over" headerTitle="Over Callizone" text="gebruik altijd een koptelefoon voor de beste ervaring" image={zwartektIMG} />
            <div className="Features">
            <Section customId="Features" headerTitle="Onze features">
                <Card cardText="verschillende audio systemen" image={verschillendeaudioIMG} extraclass="verschillende" />
                <Card cardText="meest betrouwbare koptelefoons" image={bestekwaliteitIMG} extraclass="beste" />
                <Card cardText="beste prijs voor kwaliteit" image={prijskwaliteitIMG} extraclass="prijskwaliteit" />
                <Card cardText="5 tips tegen kabelbreuk" image={kabelIMG} extraclass="kabel" />
            </Section>
            </div>
            <Section customId="Prijs" headerTitle="prijs">
                <VerticalCard h2Text="familie abbonement" prijs="€9.99 per maand" cardText="Dit abbonement is zwaar aanbevolen als u thuis een grote familie heeft en die graag wilt voorzien van koptelefoons. U kunt de leeftijd van uw familie aangeven en wij zoeken een goede koptelefoon voor hun uit" image={familiekopIMG} />
                <VerticalCard h2Text="profesioneel geluid abbonement" prijs="€24.99 per maand" cardText="Dit abbonement is voor de artiesten of producers die zoeken naar een nieuwe koptelefoon. Deze koptelefoons zijn van de beste kwaliteit en gevonden door experts." image={muziekkoptIMG} />
                <VerticalCard h2Text="gaming abbonement" prijs="€19.99 per maand" cardText="Dit abbonement is voor de gamers, deze koptelefoons hebben een ingebouwde microfoon en hebben een goede geluidsqualiteit. Deze koptelefoons zijn aanbevolen door pro gamers over de hele wereld." image={gamingkoptIMG} />
            </Section>
            <Contact customId="Contact"/>
        </>
    )
}

export default HomePage;