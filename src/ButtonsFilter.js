import { data } from "./data";

function ButtonsFilter({filterItem, setCard}) {
    return(
        <div className="buttonFilter">
        <button onClick={ () => setCard(data)}>ALL</button>
            <button onClick={ () => filterItem('dress') }>DRESS</button>
            <button onClick={ () => filterItem('shoes') }>SHOES</button>
            <button onClick={ () => filterItem('skirt') }>SKIRT</button>
            <button onClick={ () => filterItem('shirt') }>SHIRT</button>
            <button onClick={ () => filterItem('pants') }>PANTS</button>
        </div>
    )
}


export default ButtonsFilter;