import { Link } from "react-router-dom";


interface PokemonCardProps {
    name: string;
    img: string;
}

function PokemonCard(props: PokemonCardProps){
    return(
        <div className="card col-lg-3 col-sm-4">
            <Link to={`/pokemon/${props.name}`} className="text-dark text-center text-decoration-none">
                <img className="card-img-top" src={props.img} alt={`image for ${props.name}`} /> 
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                        
                </div>
            </Link>
        </div>
    )
}

export default PokemonCard