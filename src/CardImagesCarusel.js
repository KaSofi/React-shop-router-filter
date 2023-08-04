import { data } from "./data";
import { useState } from "react";


function CardImagesCarusel() {
    const [imageCarusel, setImageCarusel] = useState(0);
    const {id, imageCaruselCard, } = data.imageCaruselCard[imageCarusel];

    const previousCaruselButton = () => {
        setImageCarusel((imageCarusel) => {
            imageCarusel --
            if(imageCarusel < 0) {
                imageCarusel = data.imageCaruselCard.length - 1
            }
            return imageCarusel
        })
    }

    const nextCaruselButton = () => {
        setImageCarusel((imageCarusel) => {
            imageCarusel ++
            if(imageCarusel > data.imageCaruselCard.length - 1) {
                imageCarusel = 0
            }
            return imageCarusel
        })
    }

    return(
            <div className="AboutProductCarusel">
                <img src={imageCaruselCard} alt="clothes" />
                <div className="CaruselButtons">
                        <button onClick={previousCaruselButton}>prev</button>
                        <p>image: {id}</p>
                        <button onClick={nextCaruselButton}>next</button>
                </div>
            </div>
    )
}


export default CardImagesCarusel;
