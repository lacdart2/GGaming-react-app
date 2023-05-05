import "./Stream.css"
import GamingLibraryData from "../../Data/GamingLibraryData"
import { SectionHeader, SectionWrapper, StreamsCard } from "../../components/index"

const Streams = () => {
    const cards = GamingLibraryData.map(card => {
        return <StreamsCard key={card.id} image={card.image} title={card.title} category={card.category} date_added={card.date_added} hours_played={card.hours_played} online={card.online} />
    })


    return (
        <>
            <SectionWrapper>
                <SectionHeader>Live Streams</SectionHeader>
                <div className="gaming-library-cards">
                    {cards}
                </div>
            </SectionWrapper>

        </>
    )
}

export default Streams