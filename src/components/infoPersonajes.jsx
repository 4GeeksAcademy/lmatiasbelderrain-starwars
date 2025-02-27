import { useParams } from "react-router-dom"
import imagenes from "../assets/img/datas/personajes.json"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect } from "react";
import { obtenerInfoPersonajes } from "../store.js";


export const InfoPersonajes = () => {
    const { idPersonaje } = useParams()
  
    const imagenPersonaje = imagenes.people.find(p=>p.id===Number(idPersonaje - 1))?.image
    const { store, dispatch } = useGlobalReducer()

    useEffect(() => {
        obtenerInfoPersonajes(dispatch, idPersonaje)
    }, [])

   
    return (
        <div className="container-fluid">
            <h1 className="text-center">{store.personaje.name}</h1>
            <div className="d-flex justify-content-center">
                <div className="card mb-3" style={{ width: "870px" }}>
                    <div className="row g-0">
                        <div className="col-md-4 p-2">
                            <img src={imagenPersonaje} className="img-fluid " alt="..." style={{ height: "300px" }} />
                        </div>
                        <div className="col">
                            <div className="card-body">

                                 <p className="card-text">Birthdate: {store.personaje.birth_year}</p>
                                <p className="card-text">Hair Color: {store.personaje.hair_color}</p>
                                <p className="card-text">Height: {store.personaje.height}</p>
                                <p className="card-text">Mass: {store.personaje.mass}</p>
                                <p className="card-text">skin Color: {store.personaje.skin_color}</p>
                                <p className="card-text">Gender: {store.personaje.gender}</p>
                               




                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}