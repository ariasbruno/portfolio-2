import type { ProjectData } from '../../types';

export const impoStar: ProjectData = {
  summary: {
    id: 5,
    slug: 'impostar',
    title: 'ImpoStar',
    category: 'Caso de Estudio 05',
    description: 'Plataforma B2B integral que centraliza la operación comercial de distribuidores mayoristas, eliminando la fricción de WhatsApp.',
    tags: ["Next.js 16", "Strapi 5", "React 19"],
    image: "/images/impostar/hero.webp"
  },
  detail: {
    id: 5,
    slug: 'impostar',
    title: 'ImpoStar',
    category: 'Caso de Estudio 05',
    subtitle: 'Plataforma B2B integral que centraliza la operación comercial de distribuidores.',
    tags: ["Next.js 16", "Strapi 5", "React 19"],
    problemSection: {
      title: 'El Desafío',
      intro: 'Actualmente, ImpoStar opera únicamente a través de Instagram, lo que limita su alcance y profesionalismo. La falta de una lista de precios accesible obliga a realizar todas las consultas de stock y precios manualmente por WhatsApp, consumiendo tiempo valioso.',
      points: [
        "Presencia limitada (Solo Instagram)",
        "Sin lista de precios pública (Todo manual)",
        "Consultas repetitivas de stock/precio",
        "Dependencia de WhatsApp para cada interacción"
      ]
    },
    solutionSection: {
      title: 'La Solución',
      intro: 'Desarrollar una web profesional que genere confianza y mejore el posicionamiento SEO. La plataforma permite la autogestión del cliente para consultar precios y stock, ahorrando tiempo de gestión y entregando pedidos listos para solo ser validados y despachados.',
      points: [
        "Web Profesional (Confianza & SEO)",
        "Autogestión de clientes (Precios/Stock)",
        "Eficiencia Operativa (Pedidos listos para validar)",
        "Alcance ampliado más allá de redes sociales"
      ]
    },
    flowSteps: [
      {
        step: "1",
        title: "Filtrado Inteligente",
        desc: "Búsqueda rápida y precisa. Los clientes encuentran lo que necesitan en segundos gracias a filtros avanzados de estado, capacidad y modelo.",
        image: "/images/impostar/flow/flow-1.webp",
      },
      {
        step: "2",
        title: "Selección de Variantes",
        desc: "Visualización clara de stock y precios. Selección intuitiva de colores y capacidades con cálculo inmediato de costos.",
        image: "/images/impostar/flow/flow-2.webp",
      },
      {
        step: "3",
        title: "Cierre de Pedido",
        desc: "Resumen detallado y confirmación. El pedido se genera y queda listo para validación, eliminando errores de comunicación.",
        image: "/images/impostar/flow/flow-3.webp",
      }
    ],
    flowTitle: 'Flujo de Compra',
    flowSection: {
      sectionTitle: 'Flujo de Compra',
      sectionSubtitle: '/// De la búsqueda al pedido',
      steps: [] // This is just to satisfy types if needed, but ImpostarFlow uses flowSteps directly
    },
    designSystem: {
      sectionTitle: 'Patrón "Semitono Estelar"',
      intro: 'Una identidad visual única basada en [br] la "Estrella ImpoStar".',
      techniques: [
        {
          title: 'Técnica Vectorial',
          desc: 'Retícula de estrellas con aleatoriedad controlada y variaciones de tamaño (semitono) diseñado de forma vectorial con Inkscape.'
        },
        {
          title: 'Glassmorphism',
          desc: 'Capas translúcidas con inspiradas en la nueva tendencia de Apple que aportan profundidad y jerarquía sin sacrificar la legibilidad.'
        },
        {
          title: 'Minimalismo',
          desc: 'Inspirado en Apple. Bordes redondeados, espacios generosos y una tipografía limpia para una experiencia premium.'
        }
      ]
    },
    techStack_impostar: {
      sectionTitle: 'Arquitectura Técnica',
      sectionDesc: 'Ingeniería de precisión. Sin plantillas. Construido sobre un stack moderno enfocado en Performance, Type-Safety y Escalabilidad.',
      items: [
        { name: 'Next.js 16', desc: 'RSC & Server Actions' },
        { name: 'React 19', desc: 'Primitivas modernas' },
        { name: 'Strapi 5', desc: 'Headless CMS' },
        { name: 'Vercel', desc: 'Deployment & Edge' },
        { name: 'Biome', desc: 'Linting & Formatting' },
        { name: 'Tailwind v4', desc: 'Zero runtime CSS' },
      ]
    }
  }
};
