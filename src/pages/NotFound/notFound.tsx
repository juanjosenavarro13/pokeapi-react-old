import { useNavigate } from "react-router-dom";
import { useReturnToHome } from "../../hooks/returnToHome";

const NotFound = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    }

    useReturnToHome();



    return (
        <div className="text-center text-danger">
            <h1 className="text-center my-5">404 Página no encontrada.</h1>
            <button className="btn btn-danger" onClick={handleClick} type="button" >Volver a la home</button>
        </div>
    );
};

export default NotFound;