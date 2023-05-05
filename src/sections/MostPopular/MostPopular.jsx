import "./MostPopular.css"
import { Card, SectionHeader, SectionWrapper } from "../../components/index"
import MostPopularData from "../../Data/MostPopularData"
import { useState } from "react"


const MostPopular = () => {

    const [search, setSearch] = useState("cards");
    console.log(search);

    /*     const filteredGames = MostPopularData.filter((item) => {
            return search.toLowerCase() === "" ? item : item.title.toLowerCase().includes(search) */


    const cards = MostPopularData.map(card => {
        return <Card image={card.image} title={card.title} category={card.category} rate={card.rate} download={card.download} />
    })


    /*    const filtered = MostPopular.filter((card) => {
           return search.toLowerCase() === "" ? card : card.title.toLowerCase().includes(search)
       }) */
    /*    const filteredGames = MostPopularData.filter((card) => {
           return search.toLowerCase() === "" ? card : card.title.toLowerCase().includes(search)
       }) */
    return (
        <>
            <SectionWrapper>
                <form className=" container d-flex m-4 ">
                    <input className="form-control me-2 search-input" value={search}
                        onChange={(e) => setSearch(e.target.value)} type="search" placeholder="Search For a Game" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                <SectionHeader>Most Popular</SectionHeader>
                <div className="most-popular-items">
                    {cards}
                    {/*  {filtered} */}
                </div>
            </SectionWrapper>

        </>
    )
}

export default MostPopular