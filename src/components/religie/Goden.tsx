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
			<God
				god="Osiris"
				rol=" De god van de onderwereld en de heropstanding"
				kenmerken="Afgebeeld als een gemummificeerde farao met een witte kroon en een scepter."
				betekenis="Osiris was de heerser van de doden en symboliseerde de cyclus van leven en dood. Hij was ook de god van de landbouw en de vruchtbaarheid."
			/>
			<God
				god="Isis"
				rol="De godin van de vruchtbaarheid, de liefde en de magie."
				kenmerken="Vaak afgebeeld met een troon op haar hoofd en met een zittende houding.
"
				betekenis="Isis was de vrouw van Osiris en de moeder van Horus. Ze werd vereerd als een beschermster van de mensen en was verantwoordelijk voor de magie en genezing."
			/>
			<God
				god="Horus"
				rol="De god van de lucht en de koning van de goden."
				kenmerken="Afgebeeld als een valk of als een man met een valkenkop."
				betekenis="Horus vertegenwoordigde de farao en zijn recht om te regeren. Hij was ook de beschermer van de farao's en het koninkrijk."
			/>
			<God
				god="Amon (Amun)"
				rol="De god van de lucht en de schepping."
				kenmerken="Vaak afgebeeld met een kroon met twee pluimen en als een man met een baard."
				betekenis="Amon werd later samengevoegd met Re en werd Amon-Re, de koning van de goden. Hij was een belangrijke god in Thebe en werd vereerd als de schepper van het universum."
			/>
			<God
				god="Anubis"
				rol="De god van de mummificatie en de onderwereld"
				kenmerken="Afgebeeld als een man met het hoofd van een jakhals."
				betekenis="Anubis was verantwoordelijk voor het begeleiden van de zielen naar het hiernamaals en het beschermen van de doden. Hij speelde een belangrijke rol in het mummificatieproces."
			/>
			<God
				god="Hathor"
				rol="De godin van de liefde, schoonheid, muziek en dans."
				kenmerken="Vaak afgebeeld als een vrouw met koeienhoorns en een zonneschijf"
				betekenis="Hathor was een beschermster van vrouwen en de geboorte. Ze werd vaak vereerd in feesten en rituelen die verband hielden met liefde en vruchtbaarheid."
			/>
			<God
				god="Thot"
				rol="De god van de wijsheid, het schrift en de magie."
				kenmerken="Afgebeeld als een man met een ibiskop of als een baboon."
				betekenis="Thot was de schrijver van de goden en de beschermer van de kennis. Hij werd vaak aangeroepen voor wijsheid en inzicht."
			/>
			<God
				god="Set (Seth)"
				rol="De god van chaos, woestijn en stormen."
				kenmerken="Afgebeeld als een man met een onbekend dierlijk hoofd, vaak met een lange snuit."
				betekenis="Set was de tegenstander van Osiris en Horus. Hij vertegenwoordigde chaos en vernietiging, maar ook de kracht van de woestijn."
			/>
			<God
				god="Ma'at"
				rol="De godin van waarheid, recht en orde."
				kenmerken="Afgebeeld als een vrouw met een struisvogelveer op haar hoofd."
				betekenis="Ma'at vertegenwoordigde de kosmische orde en rechtvaardigheid. De farao's moesten haar principes volgen om het evenwicht in de samenleving te behouden."
			/>
			<God
				god="Bastet"
				rol="De godin van de huiselijkheid, vruchtbaarheid en de bescherming van vrouwen en kinderen."
				kenmerken="Afgebeeld als een vrouw met een kattenkop of als een volledige kat."
				betekenis="Bastet werd vaak vereerd in huiselijke rituelen en was een symbool van liefde en bescherming."
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
