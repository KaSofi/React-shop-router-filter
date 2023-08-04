import { useParams, useNavigate } from "react-router-dom";
import { data } from "./data";
import CardImagesCarusel from "./CardImagesCarusel";


function AboutProduct() {

    const navigate = useNavigate();
    const { title } = useParams();
    



    return(
        <div>
        {data.filter((item) => item.title === title).map((elem, index) => {
            return (
                <div key={index} className="AboutProductBlock">
                    <div className="AboutProductPosition">
                        <h1>{elem.name}</h1>
                        <img src={elem.image} alt="clothes" />
                        {/* <CardImagesCarusel/> */}
                        <p>{elem.description}</p>
                        <h2>$ {elem.price}</h2>
                        <button onClick={ () => navigate(-1) }>GO BACK</button>
                    </div>
                </div>
            );
        })}
        </div>
    );
}

export default AboutProduct;
