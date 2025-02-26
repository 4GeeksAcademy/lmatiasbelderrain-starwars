import { useEffect } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { obtenerPersonajes, obtenerPlanetas } from "../store.js";
import { CardPersonajes } from "../components/cartaPersonajes.jsx";
import { CardPlanetas } from "../components/cartaPlanetas.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()
	useEffect(() => {
		obtenerPersonajes(dispatch)
		obtenerPlanetas(dispatch)
	}, [])
	
	return (
		<div className="text-center mt-5">
			<h1>Star Wars</h1>
			<h2>Personajes</h2>
			<div className="d-flex flex-row  overflow-scroll">
				{store.personajes.map((personaje, id) => (
					<CardPersonajes 
					key={id}
					id={id}
					personajes={personaje}
					/>
				))}
			</div>
			<br/>
			<h2>Planetas</h2>
			<div className="d-flex flex-row  overflow-scroll">
				{store.planetas.map((planetas, id)=>(
					<CardPlanetas
					key={id}
					id={id}
					planetas={planetas}
					/>
				))}
			</div>
		</div>
	);
}; 
