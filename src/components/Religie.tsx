import { Link } from "react-router";

export const Religie = () => {
	return (
		<div>
			<header>
				<h1>Religie in het Oude Egypte</h1>
			</header>
			<main>
				<section>
					<h2>De Goden van het Oude Egypte</h2>
					<p>
						De mensen in het oude Egypte geloofden in veel verschillende goden. Dit noemen we <strong>polytheïsme</strong>. Elke god had zijn eigen rol en speciale krachten. Ze geloofden dat deze goden het leven en de natuur bepaalden.
					</p>
					<p>Hier zijn enkele belangrijke goden die de Egyptenaren aanbaden:</p>
					<div className="mummi">
						<ul>
							<li>
								<strong>Re (Ra)</strong> – de zonnegod en koning van alle goden.
							</li>
							<li>
								<strong>Osiris</strong> – god van de onderwereld en het hiernamaals.
							</li>
							<li>
								<strong>Isis</strong> – godin van de liefde, magie en bescherming.
							</li>
							<li>
								<strong>Horus</strong> – god van de lucht en beschermer van de farao.
							</li>
							<li>
								<strong>Anubis</strong> – god van de mummificatie en begrafenissen.
							</li>
							<li>
								<strong>Ma’at</strong> – godin van de waarheid, rechtvaardigheid en orde.
							</li>
							<li>
								<strong>Thot</strong> – god van wijsheid, magie en schrift.
							</li>
						</ul>
						<img src="./goden.png" alt="" />
					</div>
					<p>De farao werd gezien als de goddelijke leider, de verbinding tussen de mensen op aarde en de goden. Hij of zij zorgde ervoor dat de goden blij waren, bijvoorbeeld door tempels te bouwen en offers te brengen.</p>
				</section>
				<section>
					<h2>Mummificatie: Voorbereiding op het Hiernamaals</h2>
					<p>
						De oude Egyptenaren geloofden dat het leven na de dood net zo belangrijk was als het leven op aarde. Om goed voorbereid te zijn op het hiernamaals, moesten lichamen goed bewaard blijven. Daarom bedachten ze het ingewikkelde proces van{" "}
						<strong>mummificatie</strong>.
					</p>
					<p>Het proces ging zo:</p>
					<div className="mummi">
						<ul>
							<li>Alle organen behalve het hart werden verwijderd en apart bewaard.</li>
							<li>Het lichaam werd gedroogd met een speciale zoutsoort, natron, zodat het niet zou vergaan.</li>
							<li>Na ongeveer 40 dagen werd het lichaam gewikkeld in linnen doeken.</li>
							<li>Amuletten en beschermende symbolen werden tussen de wikkels geplaatst om het lichaam te beschermen.</li>
							<li>Het lichaam werd in een speciale kist, de sarcofaag, gelegd en in een graf geplaatst.</li>
						</ul>
						<img src="./mummificatie.png" alt="" />
					</div>

					<p>Anubis, de god met het jakhalskop, waakte over dit proces en begeleidde de ziel naar het hiernamaals. Ze geloofden dat wanneer het lichaam heel bleef, de ziel veilig kon leven in het hiernamaals.</p>
				</section>
				<nav>
					<Link to="/" className="non-link">
						Terug naar Home
					</Link>
				</nav>
			</main>
		</div>
	);
};
