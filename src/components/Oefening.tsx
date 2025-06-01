import { Link } from "react-router";

export const Oefening = () => {
	return (
		<div>
			<header>
				<h1>Oefeningen over het Oude Egypte</h1>
			</header>
			<main>
				<p className="intro">
					Op deze pagina vind je verschillende oefeningen en opdrachten waarmee je je kennis over het Oude Egypte kunt oefenen en versterken. Gebruik deze opdrachten om beter te begrijpen hoe de oude Egyptenaren leefden, wat zij bouwden en geloofden.
				</p>
				<p>Hier vind je al het eerste werkblad dat je kan printen</p>
				<a href="/oefening_werkblad.pdf" className="non-link" download="oefening_werkblad">
					Download werkblad
				</a>
			</main>
			<nav>
				<Link to="/" className="non-link">
					Terug naar Home
				</Link>
			</nav>
		</div>
	);
};
