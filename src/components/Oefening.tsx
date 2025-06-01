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
				<section>
					<h2>Werkblad</h2>
					<div>
						<p>Hier vind je al het eerste werkblad dat je kan printen</p>
						<a href="/oefening_werkblad.pdf" className="non-link" download="oefening_werkblad">
							Download werkblad
						</a>
					</div>
				</section>
				<section>
					<h2>Werkbundel</h2>
					<div>
						<p>Hier vind je al een werkbundel dat je kan printen</p>
						<a href="/werkbundel_Egypte.pdf" className="non-link" download="werkbundel_Egypte">
							Download werkblad
						</a>
					</div>
				</section>
				<section>
					<h2>Quiz</h2>
					<p>Ga naar deze quiz om meer te leren kennen door gebruik van interessante video's</p>
					<a href="https://schooltv.nl/item/egypte" className="non-link">
						Klik hier voor de quiz
					</a>
				</section>
				<section>
					<h2>Flashcards</h2>
					<p>Ga naar deze quiz om meer te leren kennen door flashcards</p>
					<a href="https://quizlet.com/nl/506777593/het-oude-egypte-flash-cards/?i=4uf0qy&x=1jqt" className="non-link">
						Klik hier voor de flashcards
					</a>
				</section>
			</main>
			<nav>
				<Link to="/" className="non-link">
					Terug naar Home
				</Link>
			</nav>
		</div>
	);
};
