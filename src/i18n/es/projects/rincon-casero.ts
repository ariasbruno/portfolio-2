import type { ProjectData } from '../../types';

export const rinconCasero: ProjectData = {
  summary: {
    id: 1,
    slug: 'rincon-casero',
    title: 'Rincón Casero',
    category: 'Caso de Estudio 01',
    description: 'Plataforma web para una pizzería local que permite gestionar pedidos de forma online, rápida y sencilla. Diseño optimizado para una experiencia de usuario fluida.',
    tags: ["Next.js 14", "Supabase", "Hardware"],
    image: "/images/rincon-casero/hero.webp"
  },
  detail: {
    id: 1,
    slug: 'rincon-casero',
    title: 'Rincón Casero',
    category: 'Caso de Estudio 01',
    subtitle: 'Comercio Electrónico Moderno y Minimalista',
    tags: ['Next.js 14', 'Supabase', 'Hardware'],
    heroImage: "/images/rincon-casero/hero.webp",
    challenge: {
      title: 'El Problema',
      text: 'La venta de comida por WhatsApp es inherentemente ineficiente. El dueño del negocio pierde horas en conversaciones que no escalan, respondiendo siempre lo mismo y haciendo matemáticas mentales para cada cliente.',
      points: [
        "Pérdida de tiempo respondiendo preguntas repetitivas",
        "Cálculo manual de precios y descuentos",
        "Errores en la toma de pedidos por chat",
        "Falta de control de stock en tiempo real"
      ]
    },
    solution: {
      title: 'La Solución',
      text: 'Una Web que actúa como un puente inteligente. Digitaliza la decisión de compra para que WhatsApp solo se use para lo que mejor hace: confirmar y cerrar la venta.',
      points: [
        "Catálogo digital interactivo y autogestionable",
        "Cálculo automático de promociones",
        "Pedidos estructurados vía WhatsApp",
        "Sincronización de stock con Supabase"
      ]
    },
    featuresSection: {
      sectionTitle: 'Funcionalidades Clave',
      sectionSubtitle: 'Diseñado para eliminar la fricción entre el antojo y el pedido.',
      features: [
        {
          title: "Catálogo Digital",
          desc: "Fotos reales, descripciones detalladas y [bold]control de stock en tiempo real[/bold]. Si se acaba, desaparece del menú."
        },
        {
          title: "Carrito Inteligente",
          desc: "Detecta automáticamente promociones (ej. precio por docena) y calcula el total exacto. [bold]Cero sorpresas[/bold] al pagar."
        },
        {
          title: "WhatsApp Bridge",
          desc: "Genera un mensaje de texto plano, limpio y estructurado con todo el pedido, listo para enviar con un solo clic."
        },
        {
          title: "Experiencia sin Fricción",
          desc: "Persistencia local del carrito. El cliente puede armar el pedido sin registrarse ni descargar apps."
        }
      ]
    },
    flowSection: {
      sectionLabel: 'El Pedido',
      sectionTitle: 'El Pedido',
      sectionSubtitle: '/// De la selección a la mesa',
      steps: [
        {
          step: "1",
          title: "Armado del Pedido",
          desc: "Una interfaz limpia y rápida donde los clientes pueden ver disponibilidad y calcular precios en tiempo real.",
          image: "/images/rincon-casero/pedido.webp",
          image2: "/images/rincon-casero/pedido-2.webp"
        },
        {
          step: "2",
          title: "Confirmación del Pedido",
          desc: "El carrito inteligente calcula automáticamente los descuentos y promociones, sin sorpresas al final.",
          image: "/images/rincon-casero/carrito.webp"
        },
        {
          step: "3",
          title: "Envío por WhatsApp",
          desc: "Con un solo clic, el pedido se convierte en un mensaje estructurado listo para enviar.",
          image: "/images/rincon-casero/message.webp"
        }
      ]
    },
    impactSection: {
      sectionTitle: 'Impacto en el Negocio',
      impacts: [
        {
          value: "70%",
          label: "Ahorro de Tiempo",
          desc: "Reducción drástica en el tiempo de atención al cliente al automatizar preguntas frecuentes."
        },
        {
          value: "0%",
          label: "Comisiones",
          desc: "Experiencia tipo PedidosYa pero sin intermediarios. Mayor margen para el negocio."
        },
        {
          value: "100%",
          label: "Profesionalismo",
          desc: "Eleva la percepción de marca de emprendimiento casero a negocio serio."
        }
      ]
    },
    techStack_rincon: {
      sectionTitle: 'Stack Tecnológico',
      items: [
        { name: 'Next.js 14', desc: 'App Router & SSR' },
        { name: 'Supabase', desc: 'Base de Datos' },
        { name: 'Vercel', desc: 'Despliegue Global' },
      ]
    },
    openSourceSection: {
      sectionTitle: 'Open Source Legacy',
      p1: 'Este desarrollo fue creado para un emprendimiento familiar real que, por motivos personales, no prosperó.',
      p2: 'Como legado del trabajo realizado, [bold]todo el código fuente y los archivos editables[/bold] se publican de forma abierta para que sirva como referencia de cómo construir una solución completa y personalizada.',
      repoBtn: 'Ver Repositorio'
    },
    performanceSection: {
      title: 'Optimizado para [accent]velocidad real.[/accent]',
      desc: 'Cada milisegundo cuenta. Rincón Casero está construido sobre una arquitectura moderna que garantiza tiempos de carga instantáneos y una experiencia fluida, incluso en conexiones lentas.',
      imageAlt: 'Rendimiento en Lighthouse'
    },
    identity: {
      sectionTitle: 'Identidad Visual',
      intro: 'Un sistema de diseño cálido y artesanal, que transmite la sensación de "hecho en casa" sin perder la solidez de una marca de calidad.',
      displayFont: { label: 'Display Font', name: 'Paytone One', desc: 'Usada para títulos y marcas. Gruesa y amigable.' },
      bodyFont: { label: 'Body Font', name: 'Inter / Sans-Serif', desc: 'Neutra y legible para UI y textos largos.' },
      inkscapeNote: 'Logotipo y patrón diseñados con [bold]Inkscape[/bold].'
    },
    bonus: {
      badge: 'Bonus // Hardware',
      title: 'Integración Hardware & POS',
      paragraphs: [
        'Para cerrar el ciclo digital-físico, desarrollé una solución de hardware personalizada desbloqueando un terminal POS A910 de Mercado Pago.',
        'Creé una App Android con React Native 0.75 y Expo 51 específicamente para este dispositivo que transforma el terminal de pagos en una impresora térmica de comandas.',
        'Esto permite al operador ingresar el pedido y generar el ticket impreso al instante, profesionalizando la entrega sin gastar en hardware dedicado y reciclando un dispositivo que estaba en desuso.'
      ],
      cards: [
        { title: 'Android', desc: 'APK personalizado' },
        { title: 'Thermal Print', desc: 'Driver de impresión' },
        { title: 'Hardware', desc: 'POS Modificado' }
      ]
    }
  }
};
