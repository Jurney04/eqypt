export const Mummificatie = () => {
	return (
		<div>
			<h1>Mummificatie: Het Geloof in het Hiernamaals</h1>
			<p>De oude Egyptenaren geloofden sterk in een leven na de dood. Om ervoor te zorgen dat de overledenen goed bewaard bleven voor het hiernamaals, ontwikkelden ze de kunst van de **mummificatie**. Dit proces omvatte verschillende stappen:</p>
			<Stappen stap="Verwijderen van Organen" uitleg="De organen werden uit het lichaam gehaald, behalve het hart, dat als belangrijk werd beschouwd voor het hiernamaals. De organen werden vaak in speciale kanopen bewaard." />
			<Stappen stap="Drogen van het Lichaam" uitleg="Het lichaam werd gedroogd met een stof genaamd natron, wat hielp om het lichaam te conserveren. Dit proces duurde meestal 40 dagen." />
			<Stappen
				stap="Inwikkelen"
				uitleg="Het lichaam werd zorgvuldig in linnen gewikkeld. Dit proces kon dagen duren en was een belangrijk ritueel. De mummie werd vaak versierd met amuletten en andere voorwerpen die de overledene zouden beschermen in het hiernamaals."
			/>
			<h2>Waarom Mummificatie?</h2>
			<p>
				De Egyptenaren geloofden dat als het lichaam goed bewaard bleef, de ziel (of **Ka**) in het hiernamaals kon voortleven. Ze maakten ook gebruik van amuletten en andere voorwerpen die de overledene zouden beschermen in het hiernamaals. De
				mummificatie was dus niet alleen een manier om het lichaam te conserveren, maar ook een belangrijk religieus ritueel.
			</p>
			<h2>De Piramides: Monumenten van Macht </h2>
			<p>De piramides zijn misschien wel de meest iconische symbolen van het Oude Egypte. Ze werden gebouwd als graven voor de farao's en zijn indrukwekkende voorbeelden van oude architectuur. Belangrijke piramides zijn:</p>
			<Stappen
				stap="De Grote Piramide van Gizeh"
				uitleg="Gebouwd voor farao Cheops, is dit de grootste piramide en een van de zeven wereldwonderen. Het is een architectonisch wonder dat duizenden jaren geleden werd gebouwd en nog steeds bewonderd wordt."
			/>
			<Stappen
				stap="De Piramide van Chefren"
				uitleg="Bekend om zijn goed bewaarde top en de nabijgelegen Sfinx, die de piramide beschermt. De Sfinx is een ander iconisch symbool van Egypte, met het lichaam van een leeuw en het hoofd van een farao."
			/>
			<Stappen stap="De Piramide van Mykerinos" uitleg="De kleinste van de drie grote piramides, maar nog steeds indrukwekkend. Deze piramide toont de vaardigheden van de oude Egyptenaren in de bouwkunst." />
			<h2>Hoe Werden de Piramides Gebouwd?</h2>
			<p>De bouw van deze piramides vereiste enorme hoeveelheden arbeid en middelen. Duizenden arbeiders, vaak boeren die in de overstromingsperiode niet konden werken, werden ingezet om deze monumenten te bouwen. Het proces omvatte:</p>
			<Stappen stap="Steenhouwerij" uitleg="Grote blokken kalksteen werden uit nabijgelegen steengroeves gehaald. Deze stenen waren zwaar en vereisten veel inspanning om te vervoeren." />
			<Stappen stap="Transport" uitleg="De stenen werden over de Nijl vervoerd en vervolgens naar de bouwplaats gesleept. Dit gebeurde vaak met behulp van houten sledes en water." />
			<Stappen stap="Constructie" uitleg="De piramides werden in lagen gebouwd, waarbij elke laag kleiner was dan de vorige. Dit vereiste een goed georganiseerde planning en veel teamwork." />
			<h2>Sociale Structuur: De Sociale Piramide</h2>
			<p>De samenleving in het Oude Egypte was hiërarchisch georganiseerd. De sociale structuur kan worden weergegeven als een piramide:</p>
			<Stappen stap="Farao" uitleg="De hoogste autoriteit en goddelijke figuur. Hij had de macht om wetten te maken en het land te besturen." />
			<Stappen stap="Hogepriesters en ambtenaren" uitleg="Belangrijke functies in de regering en religie. Hogepriesters waren verantwoordelijk voor de erediensten en het onderhoud van de tempels." />
			<Stappen stap="Handwerkers en boeren" uitleg="De meerderheid van de bevolking, verantwoordelijk voor de voedselproductie en ambachtelijke producten. Boeren werkten hard op het land en zorgden voor de voedselvoorziening." />
			<Stappen stap="Slaven" uitleg="De laagste klasse, vaak krijgsgevangenen of mensen die in schulden leefden. Ze verrichtten zwaar werk en hadden weinig rechten." />
			<h2>Wat Betekent Dit voor de Samenleving</h2>
			<p>
				Deze sociale indeling zorgde voor een duidelijke verdeling van verantwoordelijkheden en macht binnen de samenleving. De farao en de hogepriesters hadden de meeste invloed, terwijl de boeren en slaven de zware lasten van de samenleving
				droegen. Dit systeem zorgde ervoor dat de samenleving goed functioneerde, maar het leidde ook tot ongelijkheid.
			</p>
		</div>
	);
};

const Stappen = ({ stap, uitleg }: any) => {
	return (
		<div>
			<h3>{stap}</h3>
			<p>{uitleg}</p>
		</div>
	);
};
