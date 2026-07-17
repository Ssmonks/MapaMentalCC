import { useState } from 'react';
import booksImage from './assets/noticias-de-ultima-hora.png';
import conceptImage from './assets/contador.png';
import legalImage from './assets/cumplimiento.png';
import importanceImage from './assets/innovacion.png';
import principlesImage from './assets/principio.png';
import objectivesImage from './assets/publico-objetivo.png';
import x from './assets/x.png';
import './App.css';

type Topic = {
	title: string;
	subtitle: string;
	label: string;
	accent: string;
	imageUrl?: string;
	position: {
		x: string;
		y: string;
		rotate: string;
	};
	imageNote: string;
	overview: string;
	points: string[];
};

type Connector = {
	x2: number;
	y2: number;
};

type BibliographyItem = {
	text: string;
	url?: string;
	title?: string;
};

const topics: Topic[] = [
	{
		title: 'El concepto',
		subtitle: 'Qué es y cómo se procesa',
		label: 'Concepto',
		accent: 'concept',
		imageUrl: conceptImage,
		position: { x: '50%', y: '12%', rotate: '-8deg' },
		imageNote: 'Imagen sugerida: libro contable, factura o flujo de datos.',
		overview:
			'La contabilidad registra, clasifica y resume los hechos económicos para convertir datos sueltos en información útil.',
		points: [
			'Definición técnica: disciplina que identifica, mide, registra y comunica eventos económicos.',
			'Enfoque informático: entrada, proceso y salida de datos.',
			'Resultado esperado: estados financieros confiables para análisis y decisión.',
		],
	},
	{
		title: 'Objetivos en la informática',
		subtitle: 'Valor de negocio y control de datos',
		label: 'Objetivos',
		accent: 'objective',
		imageUrl: objectivesImage,
		position: { x: '87%', y: '26%', rotate: '10deg' },
		imageNote: 'Imagen sugerida: tablero, dashboard o sistema ERP.',
		overview:
			'Para informática, el objetivo es garantizar información limpia, trazable y disponible para decisión y control.',
		points: [
			'Generar información útil, oportuna y confiable.',
			'Conservar la integridad de la base de datos y la trazabilidad de cada transacción.',
			'Automatizar validaciones, cierres y reportes financieros.',
		],
	},
	{
		title: 'Principios',
		subtitle: 'Reglas que sostienen la validez',
		label: 'Principios',
		accent: 'principles',
		imageUrl: principlesImage,
		position: { x: '87%', y: '74%', rotate: '14deg' },
		imageNote: 'Imagen sugerida: balanza, doble entrada o escudo de control.',
		overview:
			'Los principios contables funcionan como restricciones de validación; si se rompen, el reporte pierde confiabilidad.',
		points: [
			'Entidad: la empresa es distinta de sus dueños.',
			'Partida doble: toda transacción impacta al menos dos cuentas.',
			'Período contable: la vida de la empresa se divide en ciclos medibles.',
			'Prudencia: ante incertidumbre, no anticipar ganancias.',
		],
	},
	{
		title: 'Importancia para los informáticos',
		subtitle: 'ERP, bases de datos y auditoría',
		label: 'Importancia',
		accent: 'importance',
		imageUrl: importanceImage,
		position: { x: '50%', y: '84%', rotate: '0deg' },
		imageNote: 'Imagen sugerida: servidor, circuito o auditoría de datos.',
		overview:
			'La contabilidad le da al informático el contexto para modelar procesos reales con integridad y control.',
		points: [
			'Desarrollo de software ERP y soluciones administrativas.',
			'Modelado de bases de datos para usuarios, cuentas y transacciones.',
			'Auditoría de sistemas y detección de fraudes mediante registros y logs.',
		],
	},
	{
		title: 'Fundamentos legales',
		subtitle: 'Marco normativo y cumplimiento',
		label: 'Legal',
		accent: 'legal',
		imageUrl: legalImage,
		position: { x: '13%', y: '74%', rotate: '-14deg' },
		imageNote: 'Imagen sugerida: código, sello legal o documento normativo.',
		overview:
			'El software contable no se diseña por gusto, sino para cumplir leyes mercantiles, tributarias y normas internacionales.',
		points: [
			'Código de comercio: regula la obligatoriedad de llevar contabilidad.',
			'Leyes tributarias: definen IVA, ISLR, retenciones y cálculos fiscales.',
			'NIIF/IFRS: orientan la presentación de estados financieros comparables.',
		],
	},
	{
		title: 'Los libros contables',
		subtitle: 'Del papel a las tablas relacionales',
		label: 'Libros',
		accent: 'books',
		imageUrl: booksImage,
		position: { x: '13%', y: '26%', rotate: '-10deg' },
		imageNote: 'Imagen sugerida: libro diario, mayor o esquema de base de datos.',
		overview:
			'Los libros contables tradicionales se traducen en tablas, vistas e índices dentro de la base de datos.',
		points: [
			'Libro diario: registro cronológico de asientos.',
			'Libro mayor: movimientos agrupados por cuenta.',
			'Libro de inventarios y balances: estado inicial, cierres y saldos.',
			'En sistemas modernos: tablas como Transacciones_Log y Historico_Asientos.',
		],
	},
];

const bibliography: BibliographyItem[] = [
	{
		text: 'Asamblea Nacional de la República Bolivariana de Venezuela. (1955). Código de Comercio.',
	},
	{ text: 'IFRS Foundation. (2018). Conceptual Framework for Financial Reporting.' },
	{ text: 'Migdalys. (2026). Fundamentos de la contabilidad [Presentación de PowerPoint].' },
	{
		text: 'Objetivo iconos creados por Magnific - Flaticon',
		url: 'https://www.flaticon.es/iconos-gratis/objetivo',
		title: 'objetivo iconos',
	},
	{
		text: 'Política iconos creados por manshagraphics - Flaticon',
		url: 'https://www.flaticon.es/iconos-gratis/politica',
		title: 'política iconos',
	},
	{
		text: 'Teneduría de libros iconos creados por Uniconlabs - Flaticon',
		url: 'https://www.flaticon.es/iconos-gratis/teneduria-de-libros',
		title: 'teneduría de libros iconos',
	},
	{
		text: 'Legal iconos creados por Ida Desi Mariana - Flaticon',
		url: 'https://www.flaticon.es/iconos-gratis/legal',
		title: 'legal iconos',
	},
	{
		text: 'Importante iconos creados por efendi.sign - Flaticon',
		url: 'https://www.flaticon.es/iconos-gratis/importante',
		title: 'importante iconos',
	},
	{
		text: 'Cancelar iconos creados por Stockio - Flaticon',
		url: 'https://www.flaticon.es/iconos-gratis/cancelar',
		title: 'cancelar iconos',
	},
];

const connectors: Connector[] = [
	{ x2: 50, y2: 12 },
	{ x2: 87, y2: 26 },
	{ x2: 87, y2: 74 },
	{ x2: 50, y2: 90 },
	{ x2: 13, y2: 74 },
	{ x2: 13, y2: 26 },
];

function App() {
	const [activeIndex, setActiveIndex] = useState<number | null>(null);
	const [isBibliographyOpen, setIsBibliographyOpen] = useState(false);

	const activeTopic = activeIndex === null ? null : topics[activeIndex];

	const openTopic = (index: number) => {
		setIsBibliographyOpen(false);
		setActiveIndex(index);
	};

	const goToPrevious = () => {
		if (activeIndex === null) return;

		setActiveIndex((activeIndex - 1 + topics.length) % topics.length);
	};

	const goToNext = () => {
		if (activeIndex === null) return;

		setActiveIndex((activeIndex + 1) % topics.length);
	};

	return (
		<main className={`mind-map-app ${activeTopic ? 'mind-map-app--reader' : ''}`}>
			{!activeTopic ? (
				<section
					className="map-screen"
					aria-label="Mapa mental de fundamentos de la contabilidad"
				>
					<div className="map-header">
						<p className="eyebrow">Mapa mental interactivo</p>
						<p className="map-intro">
							Haz clic en cada rama para abrir la lectura ampliada con información
							resumida
						</p>
					</div>

					<div className="map-canvas" role="list" aria-label="Ramas del mapa mental">
						<svg
							className="map-connectors"
							viewBox="0 0 100 100"
							preserveAspectRatio="none"
							aria-hidden="true"
						>
							{connectors.map((connector) => (
								<line
									key={`${connector.x2}-${connector.y2}`}
									x1="50"
									y1="50"
									x2={connector.x2}
									y2={connector.y2}
								/>
							))}
						</svg>

						<div className="core-node" aria-hidden="true">
							<strong>Fundamentos de la contabilidad</strong>
						</div>

						{topics.map((topic, index) => (
							<article
								key={topic.title}
								className={`topic-node topic-node--${topic.accent}`}
								tabIndex={0}
								role="button"
								aria-label={`Abrir información de ${topic.title}`}
								onClick={() => openTopic(index)}
								onKeyDown={(event) => {
									if (event.key === 'Enter' || event.key === ' ') {
										event.preventDefault();
										openTopic(index);
									}
								}}
								style={{
									left: topic.position.x,
									top: topic.position.y,
									transform: `translate(-50%, -50%) rotate(${topic.position.rotate})`,
								}}
							>
								<span className="topic-node__image" aria-hidden="true">
									{topic.imageUrl ? (
										<img
											className="topic-node__image-asset"
											src={topic.imageUrl}
											alt=""
										/>
									) : (
										<span>{topic.label}</span>
									)}
								</span>
								<span className="topic-node__title">{topic.title}</span>
								<span className="topic-node__hint">Abrir lectura</span>
							</article>
						))}
					</div>

					{!isBibliographyOpen ? (
						<button
							type="button"
							className="bibliography-fab"
							onClick={() => setIsBibliographyOpen(true)}
							aria-label="Abrir bibliografía"
						>
							Bibliografía
						</button>
					) : null}

					{isBibliographyOpen ? (
						<aside
							className="bibliography-card"
							aria-label="Bibliografía del mapa mental"
						>
							<button
								type="button"
								className="bibliography-card__close"
								onClick={() => setIsBibliographyOpen(false)}
								aria-label="Cerrar bibliografía"
							>
								<img
									className="bibliography-card__close-icon"
									src={x}
									alt="close"
								/>
							</button>
							<h2>Bibliografía y Créditos</h2>
							<ul>
								{bibliography.map((item) => (
									<li key={`${item.text}-${item.url ?? 'local'}`}>
										{item.url ? (
											<a
												href={item.url}
												title={item.title}
												target="_blank"
												rel="noreferrer"
											>
												{item.text}
											</a>
										) : (
											item.text
										)}
									</li>
								))}
							</ul>
						</aside>
					) : null}

					<footer className="page-footer" aria-label="Autor y materia">
						<span>
							Estudiante:
							<strong> Ivan Herrera V-26590497</strong>
						</span>
						<span>Instituto Universitario Jesús Obrero</span>
						<span>Contabilidad Computarizada</span>
					</footer>
				</section>
			) : (
				<section className="reader-screen" aria-label="Vista de lectura del tema">
					<div
						className="reader-controls reader-controls--right"
						aria-label="Controles de lectura"
					>
						<button type="button" onClick={goToPrevious}>
							← Anterior
						</button>
						<button type="button" onClick={goToNext}>
							Siguiente →
						</button>
						<button
							type="button"
							className="reader-controls__back"
							onClick={() => setActiveIndex(null)}
						>
							Volver al mapa mental
						</button>
					</div>

					<article className={`reader-card reader-card--${activeTopic.accent}`}>
						<div className="reader-card__content">
							<section className="reader-hero">
								<header className="reader-card__header">
									<div>
										<p className="eyebrow">Pantalla de lectura</p>
										<h2>{activeTopic.title}</h2>
										<p>{activeTopic.subtitle}</p>
									</div>
									<span className="reader-card__counter">
										{String((activeIndex ?? 0) + 1).padStart(2, '0')} /{' '}
										{String(topics.length).padStart(2, '0')}
									</span>
								</header>

								<section
									className="reader-media"
									aria-label="Espacio de imagen representativa"
								>
									{activeTopic.imageUrl ? (
										<img
											className="reader-media__image"
											src={activeTopic.imageUrl}
											alt={activeTopic.title}
										/>
									) : (
										<div className="reader-media__placeholder">
											<span className="reader-media__tag">
												Espacio para imagen
											</span>
											<strong>{activeTopic.label}</strong>
											<p>{activeTopic.imageNote}</p>
										</div>
									)}
								</section>
							</section>

							<section className="reader-copy">
								<p className="reader-copy__summary">{activeTopic.overview}</p>
								<ul>
									{activeTopic.points.map((point) => (
										<li key={point}>{point}</li>
									))}
								</ul>
							</section>
						</div>
					</article>

					<footer className="page-footer" aria-label="Autor y materia">
						<span>
							Estudiante:
							<strong> Ivan Herrera V-26590497</strong>
						</span>
						<span>Instituto Universitario Jesús Obrero</span>
						<span>Contabilidad Computarizada</span>
					</footer>
				</section>
			)}
		</main>
	);
}

export default App;
