export const Goden = () => {
	return (
		<div>
			<h1>De Goden van het Oude Egypte</h1>
			<p>In het Oude Egypte geloofden de mensen in een pantheon van goden en godinnen. Deze goden hadden verschillende verantwoordelijkheden en werden vaak afgebeeld in kunst en tempels. Hier zijn enkele van de belangrijkste goden:</p>
			<God
				god="Re (Ra)"
				rol="De zonnegod en de belangrijkste god in de Egyptische mythologie"
				kenmerken="Vaak afgebeeld met een zonneschijf boven zijn hoofd en als een valk of een man met een valkenkop"
				betekenis="Re vertegenwoordigde het leven, de groei en de cyclus van de dag. Hij werd gezien als de schepper van de wereld en de koning van de goden."
			/>
		</div>
	);
};

const God = ({ god, rol, kenmerken, betekenis }: any) => {
	return (
		<div>
			<h1>{god}</h1>
			<h2>Rol:{rol}</h2>
			<p>Kemerken: {kenmerken}</p>
			<p>Betekenis: {betekenis}</p>
		</div>
	);
};
