import { Link } from "react-router";

export const Inhoud = () => {
	return (
		<div>
			<header>
				<h1>Kunst en Cultuur in het Oude Egypte</h1>
			</header>
			<main>
				<section>
					<h2>Schrift: Hiërogliefen</h2>
					<p>
						De oude Egyptenaren gebruikten een speciaal schrift dat <strong>hiërogliefen</strong> heet. Dit zijn tekeningen die woorden of geluiden voorstellen. Ze werden vaak in tempels, op graven en rollen papyrus geschreven. Hiërogliefen waren
						heel ingewikkeld en werden geschreven door schriftgeleerden, die een belangrijke taak hadden.
					</p>
					<p>
						Pas in 1822 ontdekte de Franse wetenschapper Jean-François Champollion hoe je deze hiërogliefen kon lezen met behulp van de beroemde <em>Steen van Rosetta</em>. Hierdoor konden we veel leren over het oude Egypte.
					</p>
				</section>
				<section>
					<h2>Bouwkunst: Piramides en Tempels</h2>
					<p>
						Het Oude Egypte is vooral bekend om zijn bijzondere gebouwen, zoals de <strong>piramides</strong>. Deze enorme graven werden voor de farao's gebouwd om hen te beschermen na hun dood en zijn duizenden jaren oud. Daarnaast bouwden ze
						indrukwekkende <strong>tempels</strong>, waar ze hun goden aanbaden. Tempels waren versierd met beeldhouwwerken en kleurrijke schilderingen.
					</p>
					<p>De bouwers gebruikten grote stenen blokken en slimme technieken om deze monumenten te maken, zonder moderne machines. Dat is nog steeds een groot mysterie!</p>
				</section>
				<section>
					<h2>Schilder- en Beeldhouwkunst</h2>
					<p>
						De Egyptenaren maakten prachtige <strong>schilderingen</strong> en <strong>beeldhouwwerken</strong>. In tempels en graven schilderden ze verhalen over de goden, het dagelijks leven en de natuur. Deze schilderingen zijn erg kleurrijk en
						vol symboliek. Ook maakten ze beelden van farao's en goden, vaak heel groot en indrukwekkend.
					</p>
					<p>Kunst had een belangrijke functie: het hielp mensen herinneren aan hun geloof en geschiedenis.</p>
				</section>
				<section>
					<h2>Muziek, Dans en Literatuur</h2>
					<p>
						Naast beeldende kunst hielden de oude Egyptenaren van <strong>muziek</strong> en <strong>dans</strong>. Ze maakten gebruik van instrumenten zoals fluiten, harpen en tamboerijnen bij feestelijke gelegenheden. Verhalen en gedichten werden
						opgeschreven en voorgelezen, wat hielp bij het doorgeven van kennis en tradities.
					</p>
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
