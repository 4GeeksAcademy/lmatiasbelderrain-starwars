import { Link } from "react-router-dom"
import imagenes from "../assets/img/datas/personajes.json"

export const CardPersonajes = ({ id, personajes }) => {
    const imagenPersonaje = imagenes.people.find(p=>p.id===id)?.image
    return (
        <div className="card" style={{ width: "18rem", flex: "none", margin: "10px" }}>
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
                <button className="btn btn-outline-primary">like</button>
                </div>
                
            </div>
        </div>
    )
}