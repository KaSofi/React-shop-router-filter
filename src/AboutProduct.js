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
                        <div className="AboutProductCarusel">
                            <button>BACK</button>
                            <img src={elem.image} alt="clothes" />
                            <button>NEXT</button>
                        </div>
                        <h1>{elem.name}</h1>
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
