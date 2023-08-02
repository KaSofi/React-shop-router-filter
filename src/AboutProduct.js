import { useParams, useNavigate } from "react-router-dom";
import { data } from "./data";

function AboutProduct() {

    const navigate = useNavigate();
    const { title } = useParams();

    return(
        <div>
        {data.filter((item) => item.title === title).map((elem, index) => {
            return (
                <div key={index}>
                <h3>{elem.name}</h3>
                <img src={elem.image} alt="clothes" />
                <button onClick={ () => navigate(-1) }>GO BACK</button>
                </div>
            );
        })}
        </div>
    );
}

export default AboutProduct;