export const Home = () => {
	return (
		<div>
			<header>
				<h1>Ontdek het Oude Egypte</h1>
				<p>Duik in de fascinerende wereld van farao's, piramides en goden!</p>
			</header>
			<main>
				<section>
					<h2>Welkom!</h2>
					<div className="mummi">
						<div>
							<p>
								Het Oude Egypte is een van de oudste en meest bijzondere beschavingen ter wereld. Op deze website ontdek je hoe mensen leefden, welke goden ze aanbaden, en hoe ze prachtige kunst maakten. Je leert over hun spannende verhalen en hun
								bijzondere gewoontes.
							</p>
							<p>We verkennen samen verschillende thema's die jou alles vertellen over dit mysterieuze land aan de Nijl.</p>
						</div>
						<img src="./piramids_in_oasis.png" alt="" />
					</div>
				</section>
				<section>
					<h2>Tijdslijn</h2>
					<img className="tijdslijn" src="./tijdslijn.png" alt="" />
				</section>
				<section>
					<h2>Welke thema's ga je ontdekken?</h2>
					<nav>
						<div className="non-link">Dagelijks Leven</div>
						<div className="non-link">Kunst & Cultuur</div>
						<div className="non-link">Religie</div>
						<div className="non-link">Oefeningen</div>
					</nav>
					<p>
						<strong>Dagelijks Leven:</strong> Ontdek hoe de mensen woonden, werkten en leefden langs de rivier de Nijl.
						<br />
						<strong>Kunst & Cultuur:</strong> Leer over de indrukwekkende piramides, prachtige beelden en hiërogliefen.
						<br />
						<strong>Religie:</strong> Maak kennis met de kleurrijke godenwereld en het bijzondere geloof over leven na de dood.
						<br />
						<strong>Oefeningen:</strong> Test je kennis met leuke quizzen en opdrachten om alles beter te begrijpen.
					</p>
				</section>
			</main>
		</div>
	);
};
