import { useParams } from "react-router-dom"
import imagenes from "../assets/img/datas/planetas.json"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect } from "react";
import { obtenerInfoPlanetas } from "../store.js";


export const InfoPlanetas = () => {
    const { idPlanets } = useParams()
    const imagenPlanetas = imagenes.planets.find(p => p.id === Number(idPlanets - 1))?.image
    const { store, dispatch } = useGlobalReducer()

    useEffect(() => {
        obtenerInfoPlanetas(dispatch, idPlanets)
    }, [])

    console.log(store.planeta)
    return (
        <div className="container-fluid">
            <h1 className="text-center">{store.planeta.name}</h1>
            <div className="d-flex justify-content-center">
                <div className="card mb-3" style={{ width: "870px" }}>
                    <div className="row g-0">
                        <div className="col-md-4 p-2">
                            <img src={imagenPlanetas} className="img-fluid " alt="..." style={{ height: "300px" }} />
                        </div>
                        <div className="col">
                            <div className="card-body">

                                <p className="card-text">Climate: {store.planeta.climate}</p>
                                <p className="card-text">Diameter: {store.planeta.diameter}</p>
                                <p className="card-text">Gravity: {store.planeta.gravity}</p>
                                <p className="card-text">orbital Period: {store.planeta.orbital_period}</p>
                                <p className="card-text">Population: {store.planeta.population}</p>
                                <p className="card-text">rotation period: {store.planeta.rotation_period}</p>
                                <p className="card-text">water surface: {store.planeta.surface_water}</p>
                                <p className="card-text">terrain: {store.planeta.terrain}</p>




                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}