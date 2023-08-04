import { useState } from "react";
import { data } from "./data";
import ButtonsFilter from "./ButtonsFilter";
import { Link } from "react-router-dom";

function Shop() {
     const [card, setCard] = useState(data);
     const filterItem = (searchTerm) => {
        const newFilterItem = data.filter(el => 
            el.searchTerm === searchTerm);
            setCard(newFilterItem)
     } 
    return(
        <>
        <ButtonsFilter filterItem={filterItem} setCard={setCard}/>
        <div className="AllCardsPosition">
        {card.map((el => {
            const { id, image, price, searchTerm, name, title } = el;
            return(
                <div key={id} className="CardsBlock">
                <Link to={`/aboutProduct/${ title }`}>
                    <img src={image} alt="clothes" />
                </Link>

                    <p>{id}</p>
                    <h1>{name}</h1>
                    <h2>{searchTerm}</h2>
                    <p>$ {price}</p>
                </div>
            )
        }))}
        </div>

        </>
    )
}

export default Shop;
