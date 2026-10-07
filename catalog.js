// Catálogo público. Imágenes ilustrativas; cotización y alcance por WhatsApp.
const svgArt = (color, glyph) => 'data:image/svg+xml,' + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 320"><rect width="600" height="320" fill="#f0f3f7"/><circle cx="520" cy="50" r="130" fill="' + color + '" opacity=".06"/><rect x="214" y="44" width="320" height="234" rx="18" fill="white" stroke="#dce2e9"/><path d="M214 80h320" stroke="#e5e9ee"/><circle cx="238" cy="62" r="4" fill="' + color + '"/><circle cx="252" cy="62" r="4" fill="#cdd6df"/><rect x="238" y="102" width="118" height="9" rx="4" fill="' + color + '" opacity=".55"/><rect x="238" y="123" width="178" height="6" rx="3" fill="#e0e6ec"/><rect x="238" y="153" width="80" height="90" rx="8" fill="' + color + '" opacity=".07"/><rect x="332" y="153" width="178" height="90" rx="8" fill="#f6f8fa"/><path d="M348 223 380 205 410 214 442 180 490 167" fill="none" stroke="' + color + '" stroke-width="5" stroke-linecap="round"/><rect x="48" y="96" width="176" height="176" rx="32" fill="' + color + '"/><g transform="translate(48 104)" fill="none" stroke="white" stroke-width="6" stroke-linejoin="round" stroke-linecap="round"><path d="' + glyph + '"/></g></svg>');
const newProduct = (id, category, name, description, audience, benefits, features, color, glyph) => ({
  id, category, name, description, audience, benefits, features, status: 'coming-soon', price: null, currency: 'CLP',
  image: svgArt(color, glyph), demo: null, includes: [], requirements: [],
  availability: 'Conversemos sobre tus necesidades para definir las funciones, el alcance y una cotización.'
});
const tfcProducts = [
  {
    "id": "flujo-caja-familiar",
    "category": "Finanzas personales",
    "name": "Flujo de Caja Familiar",
    "description": "Una solución para organizar el flujo de caja de tu hogar.",
    "status": "coming-soon",
    "price": null,
    "currency": "CLP",
    "image": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20600%20320%22%3E%3Crect%20width%3D%22600%22%20height%3D%22320%22%20fill%3D%22%23f0f3f7%22%2F%3E%3Ccircle%20cx%3D%22520%22%20cy%3D%2250%22%20r%3D%22130%22%20fill%3D%22%2316776b%22%20opacity%3D%22.06%22%2F%3E%3Crect%20x%3D%22214%22%20y%3D%2244%22%20width%3D%22320%22%20height%3D%22234%22%20rx%3D%2218%22%20fill%3D%22white%22%20stroke%3D%22%23dce2e9%22%2F%3E%3Cpath%20d%3D%22M214%2080h320%22%20stroke%3D%22%23e5e9ee%22%2F%3E%3Ccircle%20cx%3D%22238%22%20cy%3D%2262%22%20r%3D%224%22%20fill%3D%22%2316776b%22%2F%3E%3Ccircle%20cx%3D%22252%22%20cy%3D%2262%22%20r%3D%224%22%20fill%3D%22%23cdd6df%22%2F%3E%3Crect%20x%3D%22238%22%20y%3D%22102%22%20width%3D%22118%22%20height%3D%229%22%20rx%3D%224%22%20fill%3D%22%2316776b%22%20opacity%3D%22.55%22%2F%3E%3Crect%20x%3D%22238%22%20y%3D%22123%22%20width%3D%22178%22%20height%3D%226%22%20rx%3D%223%22%20fill%3D%22%23e0e6ec%22%2F%3E%3Crect%20x%3D%22238%22%20y%3D%22153%22%20width%3D%2280%22%20height%3D%2290%22%20rx%3D%228%22%20fill%3D%22%2316776b%22%20opacity%3D%22.07%22%2F%3E%3Crect%20x%3D%22332%22%20y%3D%22153%22%20width%3D%22178%22%20height%3D%2290%22%20rx%3D%228%22%20fill%3D%22%23f6f8fa%22%2F%3E%3Cpath%20d%3D%22M348%20223%20380%20205%20410%20214%20442%20180%20490%20167%22%20fill%3D%22none%22%20stroke%3D%22%2316776b%22%20stroke-width%3D%225%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M348%20230h142%22%20stroke%3D%22%23dce2e9%22%2F%3E%3Crect%20x%3D%2248%22%20y%3D%2296%22%20width%3D%22176%22%20height%3D%22176%22%20rx%3D%2232%22%20fill%3D%22%2316776b%22%2F%3E%3Cg%20transform%3D%22translate(48%20104)%22%20fill%3D%22none%22%20stroke%3D%22white%22%20stroke-width%3D%226%22%20stroke-linejoin%3D%22round%22%20stroke-linecap%3D%22round%22%3E%3Cpath%20d%3D%22M36%2068%2080%2032l44%2036v62H92V94H68v36H36Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E",
    "demo": null,
    "benefits": [
      "Una visión organizada de las finanzas del hogar."
    ],
    "features": [],
    "includes": [],
    "requirements": [],
    "availability": "Conversemos sobre tus necesidades para definir las funciones, el alcance y una cotización."
  },
  {
    "id": "control-flota-vehicular",
    "category": "Gestión de flotas",
    "name": "Control de Flota Vehicular",
    "description": "Una solución para organizar vehículos de empresa y flotas de transporte de carga.",
    "status": "coming-soon",
    "price": null,
    "currency": "CLP",
    "image": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20600%20320%22%3E%3Crect%20width%3D%22600%22%20height%3D%22320%22%20fill%3D%22%23f0f3f7%22%2F%3E%3Ccircle%20cx%3D%22520%22%20cy%3D%2250%22%20r%3D%22130%22%20fill%3D%22%23236ab0%22%20opacity%3D%22.06%22%2F%3E%3Crect%20x%3D%22214%22%20y%3D%2244%22%20width%3D%22320%22%20height%3D%22234%22%20rx%3D%2218%22%20fill%3D%22white%22%20stroke%3D%22%23dce2e9%22%2F%3E%3Cpath%20d%3D%22M214%2080h320%22%20stroke%3D%22%23e5e9ee%22%2F%3E%3Ccircle%20cx%3D%22238%22%20cy%3D%2262%22%20r%3D%224%22%20fill%3D%22%23236ab0%22%2F%3E%3Ccircle%20cx%3D%22252%22%20cy%3D%2262%22%20r%3D%224%22%20fill%3D%22%23cdd6df%22%2F%3E%3Crect%20x%3D%22238%22%20y%3D%22102%22%20width%3D%22118%22%20height%3D%229%22%20rx%3D%224%22%20fill%3D%22%23236ab0%22%20opacity%3D%22.55%22%2F%3E%3Crect%20x%3D%22238%22%20y%3D%22123%22%20width%3D%22178%22%20height%3D%226%22%20rx%3D%223%22%20fill%3D%22%23e0e6ec%22%2F%3E%3Crect%20x%3D%22238%22%20y%3D%22153%22%20width%3D%2280%22%20height%3D%2290%22%20rx%3D%228%22%20fill%3D%22%23236ab0%22%20opacity%3D%22.07%22%2F%3E%3Crect%20x%3D%22332%22%20y%3D%22153%22%20width%3D%22178%22%20height%3D%2290%22%20rx%3D%228%22%20fill%3D%22%23f6f8fa%22%2F%3E%3Cpath%20d%3D%22M348%20223%20380%20205%20410%20214%20442%20180%20490%20167%22%20fill%3D%22none%22%20stroke%3D%22%23236ab0%22%20stroke-width%3D%225%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M348%20230h142%22%20stroke%3D%22%23dce2e9%22%2F%3E%3Crect%20x%3D%2248%22%20y%3D%2296%22%20width%3D%22176%22%20height%3D%22176%22%20rx%3D%2232%22%20fill%3D%22%23236ab0%22%2F%3E%3Cg%20transform%3D%22translate(48%20104)%22%20fill%3D%22none%22%20stroke%3D%22white%22%20stroke-width%3D%226%22%20stroke-linejoin%3D%22round%22%20stroke-linecap%3D%22round%22%3E%3Cpath%20d%3D%22M24%2068h76v52H24Zm76%2018h26l22%2024v10h-48Z%22%2F%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%22125%22%20r%3D%2212%22%2F%3E%3Ccircle%20cx%3D%22121%22%20cy%3D%22125%22%20r%3D%2212%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E",
    "demo": null,
    "benefits": [
      "Reunir la información de tu flota en un solo lugar.",
      "Conocer los gastos y las necesidades de mantenimiento por vehículo."
    ],
    "features": [
      "Registro de vehículos y conductores.",
      "Control de kilometraje y mantenciones.",
      "Seguimiento de permisos, seguros y revisión técnica.",
      "Registro de combustible, reparaciones e historial por vehículo.",
      "Para transporte de carga: viajes, rutas y costos por viaje."
    ],
    "includes": [],
    "requirements": [],
    "availability": "Conversemos sobre tus necesidades para definir las funciones, el alcance y una cotización."
  },
  {
    "id": "control-caja-negocios",
    "category": "Finanzas de negocios",
    "name": "Control de Caja para Negocios",
    "description": "Una solución para organizar ingresos, gastos y saldo de tu negocio.",
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
    "image": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20600%20320%22%3E%3Crect%20width%3D%22600%22%20height%3D%22320%22%20fill%3D%22%23f0f3f7%22%2F%3E%3Ccircle%20cx%3D%22520%22%20cy%3D%2250%22%20r%3D%22130%22%20fill%3D%22%2396713d%22%20opacity%3D%22.06%22%2F%3E%3Crect%20x%3D%22214%22%20y%3D%2244%22%20width%3D%22320%22%20height%3D%22234%22%20rx%3D%2218%22%20fill%3D%22white%22%20stroke%3D%22%23dce2e9%22%2F%3E%3Cpath%20d%3D%22M214%2080h320%22%20stroke%3D%22%23e5e9ee%22%2F%3E%3Ccircle%20cx%3D%22238%22%20cy%3D%2262%22%20r%3D%224%22%20fill%3D%22%2396713d%22%2F%3E%3Ccircle%20cx%3D%22252%22%20cy%3D%2262%22%20r%3D%224%22%20fill%3D%22%23cdd6df%22%2F%3E%3Crect%20x%3D%22238%22%20y%3D%22102%22%20width%3D%22118%22%20height%3D%229%22%20rx%3D%224%22%20fill%3D%22%2396713d%22%20opacity%3D%22.55%22%2F%3E%3Crect%20x%3D%22238%22%20y%3D%22123%22%20width%3D%22178%22%20height%3D%226%22%20rx%3D%223%22%20fill%3D%22%23e0e6ec%22%2F%3E%3Crect%20x%3D%22238%22%20y%3D%22153%22%20width%3D%2280%22%20height%3D%2290%22%20rx%3D%228%22%20fill%3D%22%2396713d%22%20opacity%3D%22.07%22%2F%3E%3Crect%20x%3D%22332%22%20y%3D%22153%22%20width%3D%22178%22%20height%3D%2290%22%20rx%3D%228%22%20fill%3D%22%23f6f8fa%22%2F%3E%3Cpath%20d%3D%22M348%20223%20380%20205%20410%20214%20442%20180%20490%20167%22%20fill%3D%22none%22%20stroke%3D%22%2396713d%22%20stroke-width%3D%225%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M348%20230h142%22%20stroke%3D%22%23dce2e9%22%2F%3E%3Crect%20x%3D%2248%22%20y%3D%2296%22%20width%3D%22176%22%20height%3D%22176%22%20rx%3D%2232%22%20fill%3D%22%2396713d%22%2F%3E%3Cg%20transform%3D%22translate(48%20104)%22%20fill%3D%22none%22%20stroke%3D%22white%22%20stroke-width%3D%226%22%20stroke-linejoin%3D%22round%22%20stroke-linecap%3D%22round%22%3E%3Crect%20x%3D%2232%22%20y%3D%2246%22%20width%3D%22108%22%20height%3D%2286%22%20rx%3D%2212%22%2F%3E%3Cpath%20d%3D%22M46%2066h80M54%20102h12m14%200h12m14%200h12M54%20118h12m14%200h12%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E",
    "demo": null,
    "includes": [],
    "requirements": [],
    "availability": "Conversemos sobre tus necesidades para definir las funciones, el alcance y una cotización."
  },
  {
    "id": "cotizador-presupuestos",
    "category": "Gestión comercial",
    "name": "Cotizador y Presupuestos",
    "description": "Una herramienta para organizar propuestas comerciales y presupuestos para tus clientes.",
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
    "image": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20600%20320%22%3E%3Crect%20width%3D%22600%22%20height%3D%22320%22%20fill%3D%22%23f0f3f7%22%2F%3E%3Ccircle%20cx%3D%22520%22%20cy%3D%2250%22%20r%3D%22130%22%20fill%3D%22%236a58a8%22%20opacity%3D%22.06%22%2F%3E%3Crect%20x%3D%22214%22%20y%3D%2244%22%20width%3D%22320%22%20height%3D%22234%22%20rx%3D%2218%22%20fill%3D%22white%22%20stroke%3D%22%23dce2e9%22%2F%3E%3Cpath%20d%3D%22M214%2080h320%22%20stroke%3D%22%23e5e9ee%22%2F%3E%3Ccircle%20cx%3D%22238%22%20cy%3D%2262%22%20r%3D%224%22%20fill%3D%22%236a58a8%22%2F%3E%3Ccircle%20cx%3D%22252%22%20cy%3D%2262%22%20r%3D%224%22%20fill%3D%22%23cdd6df%22%2F%3E%3Crect%20x%3D%22238%22%20y%3D%22102%22%20width%3D%22118%22%20height%3D%229%22%20rx%3D%224%22%20fill%3D%22%236a58a8%22%20opacity%3D%22.55%22%2F%3E%3Crect%20x%3D%22238%22%20y%3D%22123%22%20width%3D%22178%22%20height%3D%226%22%20rx%3D%223%22%20fill%3D%22%23e0e6ec%22%2F%3E%3Crect%20x%3D%22238%22%20y%3D%22153%22%20width%3D%2280%22%20height%3D%2290%22%20rx%3D%228%22%20fill%3D%22%236a58a8%22%20opacity%3D%22.07%22%2F%3E%3Crect%20x%3D%22332%22%20y%3D%22153%22%20width%3D%22178%22%20height%3D%2290%22%20rx%3D%228%22%20fill%3D%22%23f6f8fa%22%2F%3E%3Cpath%20d%3D%22M348%20223%20380%20205%20410%20214%20442%20180%20490%20167%22%20fill%3D%22none%22%20stroke%3D%22%236a58a8%22%20stroke-width%3D%225%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M348%20230h142%22%20stroke%3D%22%23dce2e9%22%2F%3E%3Crect%20x%3D%2248%22%20y%3D%2296%22%20width%3D%22176%22%20height%3D%22176%22%20rx%3D%2232%22%20fill%3D%22%236a58a8%22%2F%3E%3Cg%20transform%3D%22translate(48%20104)%22%20fill%3D%22none%22%20stroke%3D%22white%22%20stroke-width%3D%226%22%20stroke-linejoin%3D%22round%22%20stroke-linecap%3D%22round%22%3E%3Cpath%20d%3D%22M48%2032h64l22%2022v86H48Z%20M112%2032v24h22M66%2078h48M66%2098h48M66%20118h28%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E",
    "demo": null,
    "includes": [],
    "requirements": [],
    "availability": "Conversemos sobre tus necesidades para definir las funciones, el alcance y una cotización."
  },
  {
    "id": "control-inventario",
    "category": "Inventario",
    "name": "Control de Inventario",
    "description": "Una solución para llevar un registro de productos, existencias y movimientos.",
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
    "image": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20600%20320%22%3E%3Crect%20width%3D%22600%22%20height%3D%22320%22%20fill%3D%22%23f0f3f7%22%2F%3E%3Ccircle%20cx%3D%22520%22%20cy%3D%2250%22%20r%3D%22130%22%20fill%3D%22%23b9643a%22%20opacity%3D%22.06%22%2F%3E%3Crect%20x%3D%22214%22%20y%3D%2244%22%20width%3D%22320%22%20height%3D%22234%22%20rx%3D%2218%22%20fill%3D%22white%22%20stroke%3D%22%23dce2e9%22%2F%3E%3Cpath%20d%3D%22M214%2080h320%22%20stroke%3D%22%23e5e9ee%22%2F%3E%3Ccircle%20cx%3D%22238%22%20cy%3D%2262%22%20r%3D%224%22%20fill%3D%22%23b9643a%22%2F%3E%3Ccircle%20cx%3D%22252%22%20cy%3D%2262%22%20r%3D%224%22%20fill%3D%22%23cdd6df%22%2F%3E%3Crect%20x%3D%22238%22%20y%3D%22102%22%20width%3D%22118%22%20height%3D%229%22%20rx%3D%224%22%20fill%3D%22%23b9643a%22%20opacity%3D%22.55%22%2F%3E%3Crect%20x%3D%22238%22%20y%3D%22123%22%20width%3D%22178%22%20height%3D%226%22%20rx%3D%223%22%20fill%3D%22%23e0e6ec%22%2F%3E%3Crect%20x%3D%22238%22%20y%3D%22153%22%20width%3D%2280%22%20height%3D%2290%22%20rx%3D%228%22%20fill%3D%22%23b9643a%22%20opacity%3D%22.07%22%2F%3E%3Crect%20x%3D%22332%22%20y%3D%22153%22%20width%3D%22178%22%20height%3D%2290%22%20rx%3D%228%22%20fill%3D%22%23f6f8fa%22%2F%3E%3Cpath%20d%3D%22M348%20223%20380%20205%20410%20214%20442%20180%20490%20167%22%20fill%3D%22none%22%20stroke%3D%22%23b9643a%22%20stroke-width%3D%225%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M348%20230h142%22%20stroke%3D%22%23dce2e9%22%2F%3E%3Crect%20x%3D%2248%22%20y%3D%2296%22%20width%3D%22176%22%20height%3D%22176%22%20rx%3D%2232%22%20fill%3D%22%23b9643a%22%2F%3E%3Cg%20transform%3D%22translate(48%20104)%22%20fill%3D%22none%22%20stroke%3D%22white%22%20stroke-width%3D%226%22%20stroke-linejoin%3D%22round%22%20stroke-linecap%3D%22round%22%3E%3Cpath%20d%3D%22M34%2068%2084%2044l50%2024v62l-50%2024-50-24Zm0%200%2050%2024%2050-24M84%2092v62M60%2056l50%2024%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E",
    "demo": null,
    "includes": [],
    "requirements": [],
    "availability": "Conversemos sobre tus necesidades para definir las funciones, el alcance y una cotización."
  },
  {
    "id": "plantillas-web",
    "category": "Presencia digital",
    "name": "Plantillas Web",
    "description": "Propuestas para dar a tu negocio una presencia web clara y adaptable.",
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
    "image": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20600%20320%22%3E%3Crect%20width%3D%22600%22%20height%3D%22320%22%20fill%3D%22%23f0f3f7%22%2F%3E%3Ccircle%20cx%3D%22520%22%20cy%3D%2250%22%20r%3D%22130%22%20fill%3D%22%233268b8%22%20opacity%3D%22.06%22%2F%3E%3Crect%20x%3D%22214%22%20y%3D%2244%22%20width%3D%22320%22%20height%3D%22234%22%20rx%3D%2218%22%20fill%3D%22white%22%20stroke%3D%22%23dce2e9%22%2F%3E%3Cpath%20d%3D%22M214%2080h320%22%20stroke%3D%22%23e5e9ee%22%2F%3E%3Ccircle%20cx%3D%22238%22%20cy%3D%2262%22%20r%3D%224%22%20fill%3D%22%233268b8%22%2F%3E%3Ccircle%20cx%3D%22252%22%20cy%3D%2262%22%20r%3D%224%22%20fill%3D%22%23cdd6df%22%2F%3E%3Crect%20x%3D%22238%22%20y%3D%22102%22%20width%3D%22118%22%20height%3D%229%22%20rx%3D%224%22%20fill%3D%22%233268b8%22%20opacity%3D%22.55%22%2F%3E%3Crect%20x%3D%22238%22%20y%3D%22123%22%20width%3D%22178%22%20height%3D%226%22%20rx%3D%223%22%20fill%3D%22%23e0e6ec%22%2F%3E%3Crect%20x%3D%22238%22%20y%3D%22153%22%20width%3D%2280%22%20height%3D%2290%22%20rx%3D%228%22%20fill%3D%22%233268b8%22%20opacity%3D%22.07%22%2F%3E%3Crect%20x%3D%22332%22%20y%3D%22153%22%20width%3D%22178%22%20height%3D%2290%22%20rx%3D%228%22%20fill%3D%22%23f6f8fa%22%2F%3E%3Cpath%20d%3D%22M348%20223%20380%20205%20410%20214%20442%20180%20490%20167%22%20fill%3D%22none%22%20stroke%3D%22%233268b8%22%20stroke-width%3D%225%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M348%20230h142%22%20stroke%3D%22%23dce2e9%22%2F%3E%3Crect%20x%3D%2248%22%20y%3D%2296%22%20width%3D%22176%22%20height%3D%22176%22%20rx%3D%2232%22%20fill%3D%22%233268b8%22%2F%3E%3Cg%20transform%3D%22translate(48%20104)%22%20fill%3D%22none%22%20stroke%3D%22white%22%20stroke-width%3D%226%22%20stroke-linejoin%3D%22round%22%20stroke-linecap%3D%22round%22%3E%3Crect%20x%3D%2226%22%20y%3D%2242%22%20width%3D%22126%22%20height%3D%2296%22%20rx%3D%2210%22%2F%3E%3Cpath%20d%3D%22M26%2064h126M44%2082h44v38H44Zm58%204h32m-32%2016h32m-32%2016h24%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E",
    "demo": null,
    "includes": [],
    "requirements": [],
    "availability": "Conversemos sobre tus necesidades para definir las funciones, el alcance y una cotización."
  },
  {
    "id": "recursos-digitales",
    "category": "Organización y productividad",
    "name": "Recursos Digitales",
    "description": "Recursos para organizar información y apoyar las tareas de tu negocio.",
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
    "image": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20600%20320%22%3E%3Crect%20width%3D%22600%22%20height%3D%22320%22%20fill%3D%22%23f0f3f7%22%2F%3E%3Ccircle%20cx%3D%22520%22%20cy%3D%2250%22%20r%3D%22130%22%20fill%3D%22%23667147%22%20opacity%3D%22.06%22%2F%3E%3Crect%20x%3D%22214%22%20y%3D%2244%22%20width%3D%22320%22%20height%3D%22234%22%20rx%3D%2218%22%20fill%3D%22white%22%20stroke%3D%22%23dce2e9%22%2F%3E%3Cpath%20d%3D%22M214%2080h320%22%20stroke%3D%22%23e5e9ee%22%2F%3E%3Ccircle%20cx%3D%22238%22%20cy%3D%2262%22%20r%3D%224%22%20fill%3D%22%23667147%22%2F%3E%3Ccircle%20cx%3D%22252%22%20cy%3D%2262%22%20r%3D%224%22%20fill%3D%22%23cdd6df%22%2F%3E%3Crect%20x%3D%22238%22%20y%3D%22102%22%20width%3D%22118%22%20height%3D%229%22%20rx%3D%224%22%20fill%3D%22%23667147%22%20opacity%3D%22.55%22%2F%3E%3Crect%20x%3D%22238%22%20y%3D%22123%22%20width%3D%22178%22%20height%3D%226%22%20rx%3D%223%22%20fill%3D%22%23e0e6ec%22%2F%3E%3Crect%20x%3D%22238%22%20y%3D%22153%22%20width%3D%2280%22%20height%3D%2290%22%20rx%3D%228%22%20fill%3D%22%23667147%22%20opacity%3D%22.07%22%2F%3E%3Crect%20x%3D%22332%22%20y%3D%22153%22%20width%3D%22178%22%20height%3D%2290%22%20rx%3D%228%22%20fill%3D%22%23f6f8fa%22%2F%3E%3Cpath%20d%3D%22M348%20223%20380%20205%20410%20214%20442%20180%20490%20167%22%20fill%3D%22none%22%20stroke%3D%22%23667147%22%20stroke-width%3D%225%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M348%20230h142%22%20stroke%3D%22%23dce2e9%22%2F%3E%3Crect%20x%3D%2248%22%20y%3D%2296%22%20width%3D%22176%22%20height%3D%22176%22%20rx%3D%2232%22%20fill%3D%22%23667147%22%2F%3E%3Cg%20transform%3D%22translate(48%20104)%22%20fill%3D%22none%22%20stroke%3D%22white%22%20stroke-width%3D%226%22%20stroke-linejoin%3D%22round%22%20stroke-linecap%3D%22round%22%3E%3Cpath%20d%3D%22M28%2066V44h48l16%2018h58v72H28Z%22%2F%3E%3Cpath%20d%3D%22M52%2092h74M52%20110h50%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E",
    "demo": null,
    "includes": [],
    "requirements": [],
    "availability": "Conversemos sobre tus necesidades para definir las funciones, el alcance y una cotización."
  },
  newProduct('catalogo-pedidos-whatsapp', 'Ventas', 'Catálogo Digital con Pedidos por WhatsApp',
    'Un catálogo en línea para mostrar tus productos y recibir los pedidos directamente en tu WhatsApp.',
    'Para negocios que hoy venden por WhatsApp o Instagram.',
    ['Mostrar tus productos en un solo enlace fácil de compartir.', 'Recibir pedidos ordenados, sin armar el mensaje a mano.'],
    ['Catálogo con fotos, precios y categorías.', 'Carrito que arma el pedido y lo envía a tu WhatsApp.', 'Panel simple para actualizar productos.'],
    '#d1495b', 'M40 60h100l-8 76H48Zm24 0a26 26 0 0 1 52 0'),
  newProduct('agenda-reservas', 'Atención a clientes', 'Agenda y Reservas',
    'Una herramienta para organizar citas, horas y reservas de tu negocio.',
    'Para peluquerías, talleres, consultas y servicios con horas agendadas.',
    ['Evitar choques de horario y olvidos.', 'Tener la agenda del día a la vista.'],
    ['Calendario de citas por día y semana.', 'Registro de clientes y servicios.', 'Recordatorios por definir.'],
    '#2a7f9e', 'M30 52h120v84H30Zm0 24h120M58 40v24m64-24v24'),
  newProduct('control-clientes', 'Gestión comercial', 'Control de Clientes',
    'Una solución para registrar clientes, contactos y su historial de compras o consultas.',
    'Para negocios que quieren dejar de depender de cuadernos y planillas sueltas.',
    ['Tener los datos y el historial de cada cliente en un solo lugar.', 'Saber a quién contactar y cuándo.'],
    ['Ficha de cliente con contacto e historial.', 'Notas y seguimiento por cliente.', 'Búsqueda y filtros.'],
    '#7a5bb5', 'M90 70a22 22 0 1 0 .1 0M44 136c4-26 24-36 46-36s42 10 46 36')
];
const audiences = {
  'flujo-caja-familiar': 'Para familias que quieren ordenar ingresos y gastos del hogar.',
  'control-flota-vehicular': 'Para empresas con vehículos y transportistas de carga.',
  'control-caja-negocios': 'Para negocios que quieren saber cuánto entra y cuánto sale.',
  'cotizador-presupuestos': 'Para quienes preparan presupuestos y propuestas para clientes.',
  'control-inventario': 'Para negocios que manejan stock y quieren evitar quiebres.',
  'plantillas-web': 'Para quienes necesitan presencia web sin partir de cero.',
  'recursos-digitales': 'Para quienes quieren ordenar su trabajo con plantillas y formatos.'
};
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
  for (const [label, values] of [['Beneficios', product.benefits], ['Funciones a cotizar', product.features], ['Qué incluye', product.includes], ['Requisitos', product.requirements]]) {
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
  const image = element('img');
  image.src = product.image;
  image.alt = 'Ilustración de referencia: ' + product.name;
  image.loading = 'lazy';
  image.width = 600; image.height = 320;
  art.append(image, element('span', 'Ilustración de referencia', 'reference-label'));
  const body = element('div', '', 'product-body');
  const top = element('div');
  top.append(element('span', product.category, 'tag'), element('span', 'A tu medida', 'badge'));
  const audience = product.audience || audiences[product.id];
  const points = (product.features.length ? product.features : product.benefits).slice(0, 2);
  const chips = element('ul', '', 'chips');
  points.forEach(point => chips.append(element('li', point)));
  const actions = element('div', '', 'product-actions');
  const interest = element('a', 'Cotizar por WhatsApp ↗', 'button');
  interest.href = whatsapp(product);
  interest.target = '_blank';
  interest.rel = 'noopener noreferrer';
  const button = element('button', 'Ver detalles');
  button.type = 'button'; button.addEventListener('click', () => openProduct(product));
  actions.append(interest, button);
  body.append(top, element('h3', product.name), element('p', product.description));
  if (audience) body.append(element('p', audience, 'audience'));
  body.append(chips, actions);
  card.append(art, body); document.getElementById('product-catalog').append(card);
}
