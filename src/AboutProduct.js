import { useParams, useNavigate } from "react-router-dom";
import { data } from "./data";

function AboutProduct() {

    const navigate = useNavigate();
    const { title } = useParams();

    return(
        <div>
        {data.filter((item) => item.title === title).map((elem, index) => {
            return (
                <div key={index} className="AboutProductBlock">
                    <div className="AboutProductPosition">
                        <img src={elem.image} alt="clothes" />
                        <h1>{elem.name}</h1>
                        <h2>{elem.description}</h2>
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
