import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { favoritos } from "../store.js";


export const Navbar = () => {
	const { store, dispatch } = useGlobalReducer()
	return (
		<nav className="navbar navbar-dark bg-dark">
			<div className="container">
				<Link to="/" style={{textDecoration:"none"}}>
					<span className="navbar-brand mb-0 h1">Star Wars</span>
				</Link>
				<div className="ml-auto">
					<div class="dropdown">
						<button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites
						</button>
						<ul class="dropdown-menu">
							{store.misFavoritos.length === 0 && <li ><a class="dropdown-item" href="#">No existen favoritos</a></li>}
							{store.misFavoritos.map((favorito, id) => (
								<li key={id}><a class="dropdown-item" href="#">
									{favorito}
									<button className="btn btn-outline-danger float-end" onClick={() => dispatch({
										type: "borrar_favorito",
										payload: favorito
									})}>
										<i className="fa fa-trash"></i>
									</button>
								</a></li>

							))}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};