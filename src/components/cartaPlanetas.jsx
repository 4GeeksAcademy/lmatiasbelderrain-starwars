import { Link } from "react-router-dom"
import imagenes from "../assets/img/datas/planetas.json"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { favoritos } from "../store.js";

export const CardPlanetas = ({ id, planetas }) => {
    const imagenPlanetas = imagenes.planets.find(p=>p.id===id)?.image
    const { store, dispatch } = useGlobalReducer()
    return (
        <div className="card" style={{ width: "18rem", flex: "none", margin: "10px", backgroundColor:"black"}}>
            <img src={imagenPlanetas} className="card-img-top" alt={planetas.name} />
            <div className="card-body">
                <h5 className="card-title">{planetas.name}</h5>
                <p className="card-text">
                  Clima: {planetas.climate}
                </p>
                <p className="card-text">
                    Poblacion: {planetas.population}
                </p>
                <div className="d-flex justify-content-between">
                <Link to ={"/planets/"+ (id + 1) } className="btn btn-outline-warning">Learn more</Link>
                <button className="btn btn-outline-primary" onClick={()=>favoritos(dispatch,store,planetas.name)}>like</button>
                </div>
                
            </div>
        </div>
    )
}