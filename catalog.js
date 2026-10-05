// Public catalog only: never put payment secrets, private file URLs, or source code here.
// Activate purchase only after the product, backend and fulfillment are deployed.
const tfcProducts = [
  {
    id: 'flujo-caja-familiar', category: 'Finanzas personales', name: 'Flujo de Caja Familiar',
    description: 'Una solución en preparación para organizar el flujo de caja de tu hogar.',
    status: 'coming-soon', price: null, currency: 'CLP', image: null, demo: null,
    benefits: ['Una visión organizada de las finanzas del hogar.'],
    features: [], includes: [], requirements: [],
    availability: 'Este producto todavía no está disponible para compra. Escríbenos para conversar sobre lo que necesitas.'
  },
  {
    id: 'control-flota-vehicular', category: 'Gestión de flotas', name: 'Control de Flota Vehicular',
    description: 'Una solución en preparación para organizar vehículos de empresa y flotas de transporte de carga.',
    status: 'coming-soon', price: null, currency: 'CLP', image: null, demo: null,
    benefits: ['Reunir la información de tu flota en un solo lugar.', 'Conocer los gastos y las necesidades de mantenimiento por vehículo.'],
    features: ['Registro de vehículos y conductores.', 'Control de kilometraje y mantenciones.', 'Seguimiento de permisos, seguros y revisión técnica.', 'Registro de combustible, reparaciones e historial por vehículo.', 'Para transporte de carga: viajes, rutas y costos por viaje.'],
    includes: [], requirements: [],
    availability: 'En preparación. Estas funciones son propuestas y el alcance final está por definir. Escríbenos para contarnos cómo administras tu flota.'
  },
{
  "id": "control-caja-negocios",
  "category": "Finanzas de negocios",
  "name": "Control de Caja para Negocios",
  "description": "Una solución en preparación para organizar ingresos, gastos y saldo de tu negocio.",
  "benefits": [
    "Reunir los movimientos de caja en un solo lugar."
  ],
  "features": [
    "Registro de ingresos y egresos.",
    "Resumen de saldo y movimientos por período.",
    "Clasificación de gastos e ingresos."
  ],
  "status": "coming-soon",
  "price": null,
  "currency": "CLP",
  "image": null,
  "demo": null,
  "includes": [],
  "requirements": [],
  "availability": "En preparación. Las funciones descritas son propuestas; cuéntanos qué necesitas para definir el alcance y una cotización."
},
{
  "id": "cotizador-presupuestos",
  "category": "Gestión comercial",
  "name": "Cotizador y Presupuestos",
  "description": "Una herramienta en preparación para organizar propuestas comerciales y presupuestos para tus clientes.",
  "benefits": [
    "Preparar propuestas con información organizada y consistente."
  ],
  "features": [
    "Registro de clientes y conceptos a cotizar.",
    "Cálculo de cantidades y totales.",
    "Seguimiento de propuestas y sus estados."
  ],
  "status": "coming-soon",
  "price": null,
  "currency": "CLP",
  "image": null,
  "demo": null,
  "includes": [],
  "requirements": [],
  "availability": "En preparación. Las funciones descritas son propuestas; cuéntanos qué necesitas para definir el alcance y una cotización."
},
{
  "id": "control-inventario",
  "category": "Inventario",
  "name": "Control de Inventario",
  "description": "Una solución en preparación para llevar un registro de productos, existencias y movimientos.",
  "benefits": [
    "Consultar las existencias y el historial de movimientos."
  ],
  "features": [
    "Registro de productos.",
    "Entradas y salidas de inventario.",
    "Consulta de existencias y mínimos de stock."
  ],
  "status": "coming-soon",
  "price": null,
  "currency": "CLP",
  "image": null,
  "demo": null,
  "includes": [],
  "requirements": [],
  "availability": "En preparación. Las funciones descritas son propuestas; cuéntanos qué necesitas para definir el alcance y una cotización."
},
{
  "id": "plantillas-web",
  "category": "Presencia digital",
  "name": "Plantillas Web",
  "description": "Propuestas en preparación para dar a tu negocio una presencia web clara y adaptable.",
  "benefits": [
    "Contar con un punto de partida para presentar tu negocio."
  ],
  "features": [
    "Diseños para presentar servicios y productos.",
    "Adaptación a celulares y computadores.",
    "Opciones de personalización por definir."
  ],
  "status": "coming-soon",
  "price": null,
  "currency": "CLP",
  "image": null,
  "demo": null,
  "includes": [],
  "requirements": [],
  "availability": "En preparación. Las funciones descritas son propuestas; cuéntanos qué necesitas para definir el alcance y una cotización."
},
{
  "id": "recursos-digitales",
  "category": "Organización y productividad",
  "name": "Recursos Digitales",
  "description": "Recursos en preparación para organizar información y apoyar las tareas de tu negocio.",
  "benefits": [
    "Encontrar recursos para necesidades concretas de organización."
  ],
  "features": [
    "Plantillas y documentos de trabajo.",
    "Recursos de organización y seguimiento.",
    "Contenido y formatos por definir."
  ],
  "status": "coming-soon",
  "price": null,
  "currency": "CLP",
  "image": null,
  "demo": null,
  "includes": [],
  "requirements": [],
  "availability": "En preparación. Las funciones descritas son propuestas; cuéntanos qué necesitas para definir el alcance y una cotización."
}
];
const money = value => new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 }).format(value);
const element = (tag, value, className) => {
  const node = document.createElement(tag);
  if (value) node.textContent = value;
  if (className) node.className = className;
  return node;
};
const whatsapp = product => 'https://wa.me/56985139463?text=' + encodeURIComponent('Hola TFC CodeWorks, me interesa ' + product.name + '. Lo vi en tfccodeworks.cl y quisiera conversar sobre sus funciones, desarrollo y cotización.');
function openProduct(product) {
  document.getElementById('dialog-category').textContent = product.category;
  document.getElementById('dialog-title').textContent = product.name;
  document.getElementById('dialog-description').textContent = product.description;
  const price = document.getElementById('dialog-price');
  price.hidden = product.price === null;
  price.textContent = product.price === null ? '' : money(product.price);
  document.getElementById('dialog-availability').textContent = product.availability;
  const details = document.getElementById('dialog-features');
  details.replaceChildren();
  for (const [label, values] of [['Beneficios', product.benefits], [product.status === 'coming-soon' ? 'Funciones propuestas' : 'Características', product.features], ['Qué incluye', product.includes], ['Requisitos', product.requirements]]) {
    if (!values.length) continue;
    const list = element('ul');
    values.forEach(value => list.append(element('li', value)));
    details.append(element('h3', label), list);
  }
  const demo = document.getElementById('dialog-demo');
  demo.hidden = !product.demo;
  if (product.demo) demo.href = product.demo;
  document.getElementById('dialog-whatsapp').href = whatsapp(product);
  document.getElementById('dialog-whatsapp').textContent = 'Me interesa ↗';
  const dialog = document.getElementById('product-dialog');
  if (typeof dialog.showModal === 'function') dialog.showModal();
  else location.href = whatsapp(product);
}
for (const product of tfcProducts) {
  const card = element('article', '', 'product');
  const art = element('div', '', 'product-art mint');
  art.setAttribute('aria-hidden', 'true');
  const board = element('div', '', 'mini-board');
  for (let i = 0; i < 4; i++) board.append(element('i'));
  art.append(board);
  const body = element('div', '', 'product-body');
  const button = element('button', 'Ver detalles →');
  button.type = 'button'; button.addEventListener('click', () => openProduct(product));
  const interest = element('a', 'Me interesa ↗', 'text-link');
  interest.href = whatsapp(product);
  interest.target = '_blank';
  interest.rel = 'noopener noreferrer';
  interest.classList.add('product-interest');
  body.append(element('span', 'En preparación · ' + product.category, 'tag'), element('h3', product.name), element('p', product.description), interest, button);
  card.append(art, body); document.getElementById('product-catalog').append(card);
}
