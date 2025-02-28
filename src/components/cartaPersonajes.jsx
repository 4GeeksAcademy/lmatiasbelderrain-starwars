import { Link } from "react-router-dom"
import imagenes from "../assets/img/datas/personajes.json"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { favoritos } from "../store.js";

export const CardPersonajes = ({ id, personajes }) => {
    const imagenPersonaje = imagenes.people.find(p=>p.id===id)?.image
    const { store, dispatch } = useGlobalReducer()
    return (
        <div className="card" style={{ width: "18rem", flex: "none", margin: "10px" ,backgroundColor:"black"}}>
            <img src={imagenPersonaje} className="card-img-top" alt={personajes.name} style={{height:"25rem"}}/>
            <div className="card-body">
                <h5 className="card-title">{personajes.name}</h5>
                <p className="card-text">
                    Genero: {personajes.gender}
                </p>
                <p className="card-text">
                    Color de ojos: {personajes.eye_color}
                </p>
                <div className="d-flex justify-content-between">
                <Link to={"/personajes/"+(id+1)} className="btn btn-outline-warning">Learn more</Link>
                <button className="btn btn-outline-primary" onClick={()=>favoritos(dispatch,store,personajes.name)}>like</button>
                </div>
                
            </div>
        </div>
    )
}