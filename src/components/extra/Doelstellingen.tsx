import { Link } from "react-router";

export const Doelstellingen = () => {
	return (
		<div>
			<header>
				<h1>Referentiekader en Doelstellingen</h1>
			</header>
			<main>
				<section>
					<h2>Referentiekader</h2>
					<p>
						De inhoud van deze website over het Oude Egypte is afgestemd op leerlingen van 11 tot 13 jaar (1ste en 2de middelbaar). Het sluit aan bij het curriculum geschiedenis waarin de ontwikkeling van oude beschavingen worden behandeld. De
						thema's die aan bod komen, zijn gebaseerd op betrouwbare en actuele bronnen over de Egyptische cultuur, religie, architectuur en maatschappij.
					</p>
					<p>We gebruiken eenvoudige en begrijpelijke taal, zodat leerlingen de complexe geschiedenis van het Oude Egypte kunnen begrijpen en waarderen.</p>
				</section>
				<section>
					<h2>Doelstellingen</h2>
					<p>Na het bestuderen van deze website kunnen leerlingen:</p>
					<ul>
						<li>De belangrijkste kenmerken van het Oude Egypte benoemen, zoals de rol van de Nijl, de farao's en de sociale standen.</li>
						<li>Uitleg geven over het belang van de goden en het geloof in het hiernamaals.</li>
						<li>De betekenis en het doel van mummificatie begrijpen.</li>
						<li>De bouw en functie van piramides en tempels beschrijven.</li>
						<li>Inzicht krijgen in het dagelijks leven, de kunst en cultuur van de oude Egyptenaren.</li>
						<li>Creatief en kritisch nadenken over de geschiedenis en haar verband met het heden.</li>
					</ul>
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
