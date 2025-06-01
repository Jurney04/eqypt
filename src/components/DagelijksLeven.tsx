import { Link } from "react-router";

export const Dagelijksleven = () => {
	return (
		<div>
			<header>
				<h1>Dagelijks Leven in het Oude Egypte</h1>
			</header>
			<main>
				<section>
					<h2>De Nijl: Leven en Werk</h2>
					<div className="mummi">
						<div>
							<p>
								De <strong>Nijl</strong> was het hart van het leven in het Oude Egypte. Jaarlijks overstroomde de rivier en bracht vruchtbare modder mee. Zo kon de grond perfect worden gebruikt om gewassen te verbouwen, zoals tarwe, gerst en
								lijnzaad. Boeren bouwden hun dorpen langs deze rivier, omdat water zo belangrijk was. Ze gebruikten kanalen om water over grote stukken land te verspreiden, wat irrigatie heet.
							</p>
							<p>De Nijl was ook een belangrijke weg om te reizen en handel te drijven. Met eenvoudige bootjes vervoerden mensen graan, olie, goud en andere spullen naar verschillende delen van Egypte.</p>
						</div>
						<div className="mtp-imgs2">
							<img src="./kaart_nijl.png" alt="" />
							<img src="./nijl.png" alt="" />
						</div>
					</div>
				</section>
				<section>
					<h2>De Sociale Standen</h2>
					<div className="mummi">
						<div>
							<p>
								De samenleving was verdeeld in <strong>standen</strong>, een soort sociale piramide. Aan de top stond de farao, die werd gezien als een god op aarde. Onder hem stonden hogepriester en rijke bestuurders die land en rijkdom bezaten.
							</p>
							<p>Daarna kwamen de ambachtslieden, schrijvers en handelaren. De meeste mensen waren boeren die het land bewerkten en voedsel produceerden. Onderaan stonden slaven, die vaak als arbeiders of huispersoneel werden gebruikt.</p>
						</div>
						<img src="./stand.png" alt="" />
					</div>
				</section>
				<section>
					<h2>Eten en Drinken</h2>
					<p>
						Het eten van de oude Egyptenaren was eenvoudig maar voedzaam. Ze aten vooral brood, gemaakt van gerst of tarwe, en groenten zoals uien, knoflook en linzen. Vis uit de Nijl, gevogelte, en soms vlees van schapen of geiten waren ook
						belangrijke voedselbronnen.
					</p>
					<p>Ze dronken vaak bier dat ze zelf maakten en water uit de Nijl. Honing werd gebruikt als zoetstof, want suiker kenden ze niet.</p>
				</section>
				<section>
					<h2>Handel en Ambacht</h2>
					<div className="mummi">
						<div>
							<p>Handel was heel belangrijk in het Oude Egypte. Ze ruilden producten met buurlanden zoals Nubië, Syrië en het Midden-Oosten. Egypte leverde graan, papyrus en goud, en kreeg in ruil voor hout, wierook en edelstenen.</p>
							<p>Ambachtslieden maakten prachtige voorwerpen van hout, metaal, en steen. Zo ontstonden de beroemde sieraden, beeldjes en meubels waar we vandaag de dag nog van kunnen genieten.</p>
						</div>
						<img src="./handel.png" alt="" />
					</div>
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
